import React, { Suspense, useCallback, useEffect, useState } from 'react'
import { useNextDepthNavigator } from '@/services/navigation'
import { ExtendedRSEquipment } from '@/app/equipments/equipment.type'
import { ALL_EQUIPMENTS, RSEquipmentType } from '@/const/archive/equipment.const'
import { RSCharacter } from '@/const/character/character.interface'
import { toast } from 'react-toastify'
import { api } from '@/services/api/api.interceptor'
import CharacterSelectModal from '@/app/components/modal/character-select/character-select-modal'
import EquipmentSelectModal from '@/app/components/modal/equipment-select/equipment-select-modal'
import { RS_CHARACTER_DICT } from '@/const/character/character.const'
import { RsCharacterCard } from '@/app/components/character-frame/rs-character-card'
import { RsCardSize } from '@/app/components/character-frame/rs-card-size.enum'
import createKey from '@/services/key-generator'
import { EquipmentBoxResponsive } from '@/app/equipments/rs-equipment-list'
import { Tooltip } from '@material-tailwind/react'
import { CHARACTER_DETAIL } from '@/const/character/character-detail.const'
import { PreviewSkillCardBox } from '@/app/components/deck/auto-preset-preview-box'
import { AutoPresetPreviewEditBox } from '@/app/components/deck/auto-preset-preview-edit-box'
import { CHARACTER_SKILLS } from '@/const/character/character-skill.const'
import { CreateRecommendationDeck } from '@/app/rd/user/create-rd-deck'
import _ from 'lodash'
import { RECOMMENDATION_ES_DECKS } from '@/app/rd/eternal-scuffle/rd-eternal-scuffle.const'

function UserDeckPostBoxBase({ id, password }: { id?: string; password?: string }) {
  const { router } = useNextDepthNavigator()
  const [deck, setDeck] = useState<CreateRecommendationDeck>({
    title: '',
    desc: '',
    characters: [undefined, undefined, undefined, undefined, undefined],
    password: '',
    id: '',
    autoPreset: '',
    descLink: '',
    usePreview: false,
  })
  const [characterSelectedIndex, setCharacterSelectedIndex] = useState<number>()
  const [selectedEquipment, setSelectedEquipment] = useState<ExtendedRSEquipment>()
  const [isCharacterModalOpen, setIsCharacterModalOpen] = useState<boolean>(false)
  const [isEquipmentModalOpen, setIsEquipmentModalOpen] = useState<boolean>(false)
  const [equipmentSelectData, setEquipmentSelectData] = useState({
    type: selectedEquipment?.type || RSEquipmentType.WEAPON,
    equipment: selectedEquipment,
    index: 0,
  })
  const [lastPresetPreviews, setLastPresetPreviews] = useState<string[]>([])
  const [isSaving, setIsSaving] = useState(false)
  const [skillDict, setSkillDict] = useState<{ [key: string]: { character: RSCharacter } }>()
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDeck({
      ...deck,
      title: e.target.value,
    })
  }
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDeck({
      ...deck,
      password: e.target.value,
    })
  }
  const handleDescChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDeck({
      ...deck,
      desc: e.target.value,
    })
  }
  const handleAutoPresetChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDeck({
      ...deck,
      autoPreset: e.target.value,
    })
  }
  const handleDescLinkChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDeck({
      ...deck,
      descLink: e.target.value,
    })
  }
  const closeCharacterModal = (): void => {
    setIsCharacterModalOpen(false)
  }
  const closeEquipmentModal = (): void => {
    setIsEquipmentModalOpen(false)
  }
  const onCharacterSelect = (character: RSCharacter): void => {
    const fixedCharacters = [...deck.characters]
    fixedCharacters[characterSelectedIndex || 0] = {
      ...fixedCharacters[characterSelectedIndex!],
      name: character.originName,
    }
    setDeck({
      ...deck,
      characters: fixedCharacters,
    })
    setIsCharacterModalOpen(false)
  }

  const onEquipmentSelect = (equipment: ExtendedRSEquipment, characterIndex: number): void => {
    const fixedCharacters = [...deck.characters]
    const fixedEquipments = [
      ...(fixedCharacters[characterIndex!]?.equipments || [undefined, undefined, undefined]),
    ]

    if (equipmentSelectData.type === RSEquipmentType.WEAPON) {
      fixedEquipments[0] = { name: equipment.name }
    }

    if (equipmentSelectData.type === RSEquipmentType.ARMOR) {
      fixedEquipments[1] = { name: equipment.name }
    }

    if (equipmentSelectData.type === RSEquipmentType.ACCESSORY) {
      fixedEquipments[2] = { name: equipment.name }
    }

    fixedCharacters[characterIndex || 0] = {
      ...fixedCharacters[characterIndex!],
      name: fixedCharacters[characterIndex!]!.name,
      equipments: fixedEquipments,
    }

    setDeck({
      ...deck,
      characters: fixedCharacters,
    })
    setIsEquipmentModalOpen(false)
  }

  const onClickCharacterSelect = (index: number) => {
    if (characterSelectedIndex === index) {
      setIsCharacterModalOpen(true)
    }
    setCharacterSelectedIndex(index)
  }

  const onClickEquipmentSelect = (index: number, characterIndex: number) => {
    if (index === 0) {
      setEquipmentSelectData({
        ...equipmentSelectData,
        index: characterIndex,
        type: RSEquipmentType.WEAPON,
      })
    }
    if (index === 1) {
      setEquipmentSelectData({
        ...equipmentSelectData,
        index: characterIndex,
        type: RSEquipmentType.ARMOR,
      })
    }
    if (index === 2) {
      setEquipmentSelectData({
        ...equipmentSelectData,
        index: characterIndex,
        type: RSEquipmentType.ACCESSORY,
      })
    }
    setIsEquipmentModalOpen(true)
  }

  const isInvalidDeckDto = (fixedDeck: CreateRecommendationDeck) => {
    if (fixedDeck.title.length < 1) {
      return toast('덱 제목을 입력하세요.')
    }
    if (fixedDeck.password.length < 1) {
      return toast('비밀번호를 최소 1자리 이상입력해주세요')
    }
    if (fixedDeck.characters.filter((c) => !!c?.name).length !== 5) {
      return toast('승무원 5명을 모두 설정하세요')
    }
    return false
  }
  const updateDeck = async () => {
    if (isSaving) return
    setIsSaving(true)
    const fixedDeck = {
      ...deck,
    }

    fixedDeck.characters.forEach((c, cIndex) => {
      if (!c) {
        fixedDeck.characters[cIndex] = { name: '' }
      }
      if (c?.equipments) {
        c.equipments.forEach((eq, index) => {
          if (!eq) {
            c.equipments![index] = { name: '' }
          }
        })
      }
    })

    const isInvalidDeck = isInvalidDeckDto(fixedDeck)
    if (isInvalidDeck) return

    try {
      await api.put(`/recommendation-deck/update/${id}`, {
        ...fixedDeck,
        originPassword: password,
      })
      toast('수정 되었습니다.')
      router.push(`/rd/user/detail/${id}`)
    } catch (error) {
      toast('비밀번호가 틀립니다.')
    } finally {
      setIsSaving(false)
    }
  }
  const saveDeck = async () => {
    setIsSaving(true)
    const fixedDeck = {
      ...deck,
    }

    fixedDeck.characters.forEach((c, cIndex) => {
      if (!c) {
        fixedDeck.characters[cIndex] = { name: '' }
      }
      if (c?.equipments) {
        c.equipments.forEach((eq, index) => {
          if (!eq) {
            c.equipments![index] = { name: '' }
          }
        })
      }
    })

    const isInvalidDeck = isInvalidDeckDto(fixedDeck)
    if (isInvalidDeck) return

    try {
      await api.post('/recommendation-deck/create', fixedDeck)
      toast('등록되었습니다.')
      router.push('/rd/user')
    } finally {
      setIsSaving(false)
    }
  }

  const loadDeck = useCallback(async () => {
    const result = await api.post(`/recommendation-deck/get/${id}`)
    const { data } = result
    const { deck: rDeck } = data
    setDeck({
      password,
      descLink: '',
      ...rDeck,
    })
  }, [])

  const moveToBanCard = (skillName: string) => {
    setDeck({
      ...deck,
      autoPresetPreviews: (deck.autoPresetPreviews || []).filter((s) => s !== skillName),
      autoPresetPreviewBans: [skillName, ...(deck.autoPresetPreviewBans || [])],
    })
  }
  const moveToPreviewCard = (skillName: string) => {
    setDeck({
      ...deck,
      autoPresetPreviews: [skillName, ...(deck.autoPresetPreviews || [])],
      autoPresetPreviewBans: (deck.autoPresetPreviewBans || []).filter((s) => s !== skillName),
    })
  }

  const onRefreshPreview = () => {
    deck.autoPresetPreviewBans = []
  }

  useEffect(() => {
    if (characterSelectedIndex !== undefined) setIsCharacterModalOpen(true)
  }, [characterSelectedIndex])

  useEffect(() => {
    if (id) loadDeck()
  }, [id])

  useEffect(() => {
    if (deck.characters.filter((d) => !!d).length !== 5) return
    const skillDictTemp: any = {}
    const skills = deck.characters.map((cData) => {
      const { name } = cData || {}
      const skillItems = (CHARACTER_DETAIL[name as string] || {}).SKILLS || []
      skillItems.forEach((skillName: string) => {
        skillDictTemp[skillName] = { character: RS_CHARACTER_DICT[name!] }
      })
      return skillItems
    })

    const difference = _.difference(
      skills.flat(),
      (deck.autoPresetPreviews || []).concat(deck.autoPresetPreviewBans || []),
    )
    if (
      !deck.autoPresetPreviews ||
      deck.autoPresetPreviews.length === 0 ||
      // ||(lastPresetPreviews.length !== 0 && differenceSkills.length !== 0)
      difference.length > 0
    ) {
      setDeck({
        ...deck,
        autoPresetPreviews: skills.flat(),
      })
    }
    setSkillDict(skillDictTemp)
    setLastPresetPreviews(deck?.autoPresetPreviews || [])
  }, [deck.characters])

  return (
    <div className="flex flex-col gap-[20px]">
      <CharacterSelectModal
        isOpen={isCharacterModalOpen}
        closeModal={closeCharacterModal}
        onSelect={onCharacterSelect}
        data={{
          index: characterSelectedIndex || 0,
          characters: deck.characters,
        }}
      />
      <EquipmentSelectModal
        isOpen={isEquipmentModalOpen}
        closeModal={closeEquipmentModal}
        onSelect={onEquipmentSelect}
        data={equipmentSelectData}
      />
      <div className="flex flex-col">
        <div className="ff-dh text-[20px] flex gap-[10px]">덱 제목</div>
        <input
          value={deck.title}
          onChange={handleTitleChange}
          placeholder="덱 제목을 입력하세요."
          className="border rounded border-gray-500 p-[10px]"
        />
      </div>
      <div className="flex flex-col">
        <div className="ff-dh text-[20px] flex gap-[10px]">
          승무원<span className="text-red-500">*첫번째 캐릭터가 리더입니다.</span>
        </div>
        <div className="flex flex-wrap justify-between gap-[10px] items-stretch">
          {deck.characters.map((value, index) => {
            const characterData = deck.characters[index]
            const { name, equipments: eqs = [] } = characterData || {}
            const character = RS_CHARACTER_DICT[name || '']
            const equipments = eqs
              .concat(Array(Math.max(0, 3 - eqs.length)).fill(undefined))
              .slice(0, 3) || [undefined, undefined, undefined]
            return (
              <div key={`c_deck_index_${index}`}>
                {character && (
                  <div className="w-[180px] flex flex-col gap-[6px]">
                    <div className="relative group">
                      <RsCharacterCard
                        size={RsCardSize.RESPONSIVE}
                        character={character}
                        height={200}
                        onHideName
                      />
                      <div className="top-0 absolute w-full h-full hidden group-hover:flex z-50">
                        <div className="absolute bg-red-300 opacity-50 w-full h-full" />
                        <div
                          className="absolute w-full h-full flex items-center justify-center ff-dh text-[24px] text-white cursor-pointer"
                          onClick={() => {
                            onClickCharacterSelect(index)
                          }}
                        >
                          다시 선택하기
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap">
                      {equipments.map((equipmentData, eIndex) => {
                        const equipment = ALL_EQUIPMENTS[(equipmentData || {}).name!]
                        return (
                          <div
                            className="w-[60px] h-[60px] border flex items-center justify-center"
                            key={createKey()}
                            onClick={() => {
                              onClickEquipmentSelect(eIndex, index)
                            }}
                          >
                            {equipment && (
                              <div>
                                <EquipmentBoxResponsive
                                  equipment={equipment as ExtendedRSEquipment}
                                />
                              </div>
                            )}
                            {!equipment && <div>+</div>}
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )}
                {!character && (
                  <div
                    className="ff-dh text-[50px] flex items-center justify-center h-full rounded shadow-md min-w-[180px] border border-gray-500 cursor-pointer hover:bg-blue-100"
                    onClick={() => {
                      onClickCharacterSelect(index)
                    }}
                  >
                    +
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>

      <div className="flex flex-col">
        <div className="ff-dh text-[20px]">
          덱 설명<span className="text-gray-500">(선택 사항)</span>
        </div>
        <div className="rounded border border-gray-500 flex flex-col">
          <div className="p-[10px] flex gap-[10px] items-center">
            <Tooltip
              className="max-w-[300px]"
              content={
                <div>
                  <div>
                    정확한 키워드를 []로 감싸서 입력하면 생성된 덱을 조회할때 내용이 아이콘으로
                    변환되어 생성됩니다.
                  </div>
                  <hr className="my-[5px] border-dashed" />
                  <div>예시: [스텔라]에게 [에비서레이터MK0]를 착용하세요.</div>
                </div>
              }
            >
              <div className="ff-dh text-[20px] flex items-center cursor-pointer">
                텍스트 변환 <i className="text-[16px] pb-[1px] fa-solid fa-circle-question" />
              </div>
            </Tooltip>
            <div
              className="flex flex-wrap gap-[4px] cursor-pointer"
              onClick={() => {
                toast('개발중...')
              }}
            >
              <div className="border inline-block py-[8px] px-[4px] border-gray-500 rounded">
                캐릭터
              </div>
              <div className="border inline-block py-[8px] px-[4px] border-gray-500 rounded">
                장비
              </div>
            </div>
          </div>
          <hr className="border-gray-500" />
          <textarea
            className="min-h-[400px] p-[10px] border focus-visible:outline-none focus-visible:border-purple-400 overflow-hidden"
            value={deck.desc}
            onChange={handleDescChange}
            placeholder="덱 설명을 입력하세요"
          />
        </div>
      </div>
      <div className="flex flex-col">
        <div className="ff-dh text-[20px]">
          오토 프리셋<span className="text-gray-500">(선택 사항)</span>
        </div>
        <textarea
          className="rounded border border-gray-500 h-[50px] p-[10px]"
          value={deck.autoPreset}
          onChange={handleAutoPresetChange}
          placeholder="오토 프리셋을 입력하세요."
        />
      </div>
      <div className="flex flex-col">
        <div className="ff-dh text-[20px] flex items-center gap-[10px] mb-[4px]">
          카드 사용 순서
          <span className="text-gray-500 flex items-center h-[24px]">
            <div
              className={`cursor-pointer border h-full w-[70px] flex items-center justify-center border-r-0 ${deck.usePreview ? 'bg-green-400 text-white' : 'bg-gray-300 text-black/30'}`}
              onClick={() =>
                setDeck({
                  ...deck,
                  usePreview: true,
                })
              }
            >
              사용
            </div>
            <div
              className={`cursor-pointer border h-full w-[70px] flex items-center justify-center ${!deck.usePreview ? 'bg-red-400 text-white' : 'bg-gray-300 text-black/30'}`}
              onClick={() =>
                setDeck({
                  ...deck,
                  usePreview: false,
                })
              }
            >
              미사용
            </div>
          </span>
        </div>
        <div className={!deck.usePreview ? 'hidden' : ''}>
          {deck.characters.length < 5 && (
            <div className="flex items-center justify-center p-[30px] border border-gray-500 rounded ff-dh text-[20px] text-gray-500 bg-gray-100 cursor-not-allowed">
              승무원을 5명 설정 했을때 설정이 가능합니다.
            </div>
          )}
          {deck.characters.length === 5 && (
            <>
              {deck.autoPresetPreviews && skillDict && (
                <div className="flex flex-col gap-[10px] p-[10px] border border-gray-500 rounded">
                  <div className="">
                    <div className="ff-dh text-[20px] text-green-500 flex items-center gap-[8px]">
                      사용 카드
                      <span className="text-red-500 ff-sdn text-[14px] font-bold">
                        *클릭 시 사용 금지 카드로 이동됩니다.
                      </span>
                    </div>
                    <div className="bg-green-400/10">
                      <AutoPresetPreviewEditBox
                        onSelectBanCard={moveToBanCard}
                        deck={deck}
                        setDeck={setDeck}
                        onRefreshPreview={onRefreshPreview}
                      />
                    </div>
                  </div>
                  <div className="">
                    <div className="ff-dh text-[20px] text-red-500">사용 금지 카드</div>
                    <div className="flex flex-wrap gap-[6px] justify-center border border-gray-300 rounded relative">
                      {!deck.autoPresetPreviewBans ||
                        (deck.autoPresetPreviewBans.length === 0 && (
                          <div className="text-center bg-gray-100 w-full h-full p-[30px] ff-dh text-[24px]">
                            <span className="">
                              현재 설정된 <span className="text-red-400">사용 금지 카드</span>가
                              없습니다.
                            </span>
                            <br />위 <span className="text-green-400">사용 카드</span> 목록중 하나를
                            클릭시 <span className="text-red-400">사용 금지 카드</span>로
                            이동됩니다.
                          </div>
                        ))}
                      {deck.autoPresetPreviewBans && deck.autoPresetPreviewBans?.length > 0 && (
                        <div className="p-[5px] flex flex-wrap gap-[6px] justify-center bg-red-400/10 w-full">
                          {deck.autoPresetPreviewBans?.map((skillName) => {
                            if (!skillDict[skillName]?.character) {
                              return (
                                <div
                                  key={createKey()}
                                  className="w-[100px] border bg-white flex items-center justify-center p-[10px] rounded text-center"
                                >
                                  데이터 없음
                                </div>
                              )
                            }
                            return (
                              <PreviewSkillCardBox
                                disableTooltip
                                onSelectCard={moveToPreviewCard}
                                key={createKey()}
                                character={skillDict[skillName].character as any}
                                skill={CHARACTER_SKILLS[skillName]}
                              />
                            )
                          })}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
              {!deck.autoPresetPreviews && (
                <div className="flex items-center justify-center p-[30px] border border-gray-500 rounded">
                  캐릭터 선택
                </div>
              )}
            </>
          )}
        </div>
      </div>
      <div className="flex flex-col">
        <div className="ff-dh text-[20px]">
          관련링크<span className="text-gray-500">(선택 사항)</span>
        </div>
        <input
          maxLength={200}
          type="url"
          value={deck.descLink}
          onChange={handleDescLinkChange}
          placeholder="관련 링크를 입력하세요"
          className="border rounded border-gray-500 p-[10px]"
        />
      </div>
      <div className="flex flex-col">
        <div className="ff-dh text-[20px] text-red-500">
          비밀번호(최대10자)
          <span className="text-gray-500"> - 덱 수정 및 삭제에 사용됩니다.</span>
        </div>
        <input
          type="password"
          maxLength={10}
          value={deck.password}
          onChange={handlePasswordChange}
          placeholder="비밀번호를 입력하세요"
          className="border rounded border-gray-500 p-[10px]"
        />
      </div>
      {!id && (
        <div
          className="bg-green-500 text-white p-[10px] rounded shadow-md text-center text-[20px] font-bold cursor-pointer"
          onClick={() => saveDeck()}
        >
          작성
        </div>
      )}
      {id && (
        <div
          className="bg-blue-500 text-white p-[10px] rounded shadow-md text-center text-[20px] font-bold cursor-pointer"
          onClick={() => updateDeck()}
        >
          수정
        </div>
      )}
    </div>
  )
}

export function UserDeckPostBox({ id, password }: { id?: string; password?: string }) {
  return (
    <Suspense>
      <UserDeckPostBoxBase id={id} password={password} />
    </Suspense>
  )
}

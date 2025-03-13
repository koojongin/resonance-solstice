'use client'

import { useSearchParams } from 'next/navigation'
import { RecommendationDeck } from '@/app/rd/rd-decks.const'
import React, { Suspense, useEffect, useState } from 'react'
import { RS_CHARACTER_DICT } from '@/const/character/character.const'
import { RsCardSize } from '@/app/components/character-frame/rs-card-size.enum'
import { RsCharacterCard } from '@/app/components/character-frame/rs-character-card'
import CharacterSelectModal from '@/app/components/modal/character-select/character-select-modal'
import { RSCharacter } from '@/const/character/character.interface'
import { Tooltip } from '@material-tailwind/react'
import { toast } from 'react-toastify'
import createKey from '@/services/key-generator'
import EquipmentSelectModal from '@/app/components/modal/equipment-select/equipment-select-modal'
import { ALL_EQUIPMENTS, RSEquipmentType } from '@/const/archive/equipment.const'
import { ExtendedRSEquipment } from '@/app/equipments/equipment.type'
import { EquipmentBoxResponsive } from '@/app/equipments/rs-equipment-list'
import { api } from '@/services/api/api.interceptor'
import { useNextDepthNavigator } from '@/services/navigation'

type CreateRecommendationDeck = Omit<RecommendationDeck, 'characters' | 'desc'> & {
  desc: string
  characters: Array<undefined | { name: string; equipments?: Array<{ name: string } | undefined> }>
  password: string
}

function UserRecommendationDeckCreatePage() {
  const { router } = useNextDepthNavigator()
  const searchParams = useSearchParams()
  const id = searchParams.get('id')
  const [deck, setDeck] = useState<CreateRecommendationDeck>({
    title: '',
    desc: '',
    characters: [undefined, undefined, undefined, undefined, undefined],
    password: '',
    id: '',
    autoPreset: '',
    descLink: '',
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
  const [isSaving, setIsSaving] = useState(false)
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

    if (fixedDeck.title.length < 1) {
      return toast('덱 제목을 입력하세요.')
    }
    if (fixedDeck.password.length < 1) {
      return toast('비밀번호를 최소 1자리 이상입력해주세요')
    }
    if (fixedDeck.characters.filter((c) => !!c?.name).length !== 5) {
      return toast('승무원 5명을 모두 설정하세요')
    }

    try {
      await api.post('/recommendation-deck/create', fixedDeck)
      toast('등록되었습니다.')
      router.push('/rd/user')
    } finally {
      setIsSaving(false)
    }
  }

  useEffect(() => {
    if (characterSelectedIndex !== undefined) setIsCharacterModalOpen(true)
  }, [characterSelectedIndex])

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
            const { name, equipments: eqs } = characterData || {}
            const character = RS_CHARACTER_DICT[name || '']
            const equipments = eqs || [undefined, undefined, undefined]
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
      <div
        className="bg-green-500 text-white p-[10px] rounded shadow-md text-center text-[20px] font-bold cursor-pointer"
        onClick={() => saveDeck()}
      >
        작성
      </div>
      <div className="text-red-500 flex flex-col gap-[4px]">
        <div>* 개발 초기라서 일단 생성 기능만 만들었습니다.</div>
        <div>* 수정/삭제 기능은 이번주 내로 추가될 예정입니다.</div>
      </div>
    </div>
  )
}

export default function UserRecommendationDeckCreatePageS() {
  return (
    <Suspense>
      <UserRecommendationDeckCreatePage />
    </Suspense>
  )
}

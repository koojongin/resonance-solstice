'use client'

import { useParams } from 'next/navigation'
import { RecommendationDeck } from '@/app/rd/rd-decks.const'
import createKey from '@/services/key-generator'
import {
  EquipmentTooltipBox,
  RsCharacterCard,
  RsEquipmentCard,
} from '@/app/components/character-frame/rs-character-card'
import { RsCardSize } from '@/app/components/character-frame/rs-card-size.enum'
import React, { useCallback, useEffect, useState } from 'react'
import { copyToClipboard } from '@/services/utils/copy-clipboard'
import { Tooltip } from '@material-tailwind/react'
import Link from 'next/link'
import { convertCharacterThumbnailUrl } from '@/services/character-url'
import { RECOMMENDATION_CHARACTER_EQUIPMENT } from '@/const/character/character-recommendation-equipment.const'
import { toast } from 'react-toastify'
import { ALL_EQUIPMENTS } from '@/const/archive/equipment.const'
import { RSHighlightedText } from '@/services/utils/highlight-text'
import { CharacterThumbnailBox } from '@/app/components/character-frame/character-thumbnail-box'
import { motion } from 'framer-motion'
import { CHARACTER_DETAIL } from '@/const/character/character-detail.const'
import { CHARACTER_SKILLS, CharacterSkill } from '@/const/character/character-skill.const'
import { RS_CHARACTER_DICT } from '@/const/character/character.const'
import { GradientButton } from '@/app/components/button/gradient-button'
import { api } from '@/services/api/api.interceptor'
import { DeleteDeckTooltip } from '@/app/rd/user/detail/delete-deck-tooltip'
import { formatDateAgo, formatDateNormal } from '@/services/utils/date.format'
import { MongooseDocument } from '@/const/api/mongoose-document.interface'

interface RecommendationUserDeck extends Omit<RecommendationDeck, 'id'>, MongooseDocument {
  skillDict: object
  reads: number
}

function mixCharacterData(
  originDeck: RecommendationDeck | undefined,
): RecommendationUserDeck | undefined {
  if (!originDeck) return originDeck
  const skillDict: any = {}
  const fixedCharacters = originDeck.characters.map((characterData) => {
    const { character } = characterData

    const detail = CHARACTER_DETAIL[character.originName]
    if (detail?.SKILLS) {
      detail?.SKILLS.forEach((skillName: string) => {
        const skill = CHARACTER_SKILLS[skillName]
        skillDict[skillName] = {
          originName: character.originName,
          skill,
        }
      })
    }
    const fixedCharacter = {
      ...character,
      detail,
    }
    return {
      ...characterData,
      character: fixedCharacter,
    }
  })

  return {
    ...originDeck,
    characters: fixedCharacters,
    skillDict,
  } as any
}

export default function RecommendationUserDeckDetailPage() {
  const { id } = useParams()
  const [isVisibleGenericEqBox, setIsVisibleGenericEqBox] = useState(false)
  const [deck, setDeck] = useState<RecommendationUserDeck>()

  const loadDeck = useCallback(async () => {
    const result = await api.post(`/recommendation-deck/get/${id}`)
    const { data } = result
    const { deck: rDeck } = data
    const fixedDeck = { ...rDeck }
    fixedDeck.characters = fixedDeck.characters.map((c: any) => {
      return {
        character: RS_CHARACTER_DICT[c.name],
        equipments: (c?.equipments || []).map((equipment: any) => equipment?.name),
      }
    })
    setDeck(mixCharacterData(fixedDeck))
  }, [])

  const isExistLeader = deck?.leaderName
  const leaderIndex = deck?.characters.findIndex((c) => c.character.name === deck.leaderName)

  const commonRecommendationCharacterData = deck?.characters
    .map((c) => {
      return {
        recommendationEquipments: RECOMMENDATION_CHARACTER_EQUIPMENT[c.character.originName] || [],
        ...c,
      }
    })
    .filter((c) => c.recommendationEquipments.length > 0)

  useEffect(() => {
    loadDeck()
  }, [])

  return (
    <div>
      {!deck && <div>데이터 로드중...</div>}
      {deck && (
        <div className="flex flex-col gap-[4px]">
          <div className="flex w-full gap-[4px]">
            <div className="flex items-center divide-x divide-gray-800 text-[15px]">
              <div className="flex items-center gap-[6px] px-[4px]">
                <div className="">조회수</div>
                <div className="bg-gray-200">{deck.reads.toLocaleString()}</div>
              </div>
              <div className="flex items-center gap-[6px] px-[4px]">
                <div className="">작성일</div>
                <div className="bg-gray-200">{formatDateNormal(deck.createdAt!)}</div>
              </div>
            </div>
            <div
              className="ml-auto bg-blue-300 inline-block text-white ff-dh text-[20px] min-w-[50px] h-[30px] flex items-center justify-center rounded shadow-md cursor-pointer"
              onClick={() => toast('개발중')}
            >
              수정
            </div>
            <Tooltip
              interactive
              className="bg-transparent p-0 m-0"
              content={<DeleteDeckTooltip id={deck.id!} />}
            >
              <div className="bg-red-400 inline-block text-white ff-dh text-[20px] min-w-[50px] h-[30px] flex items-center justify-center rounded shadow-md cursor-pointer">
                삭제
              </div>
            </Tooltip>
          </div>
          <div className="ff-dh text-[30px] bg-gray-100 p-[10px] pb-[8px] border-y border-gray-500 flex items-center gap-[4px]">
            <Tooltip content="클릭시 페이지 링크가 복사됩니다.">
              <div
                className="flex items-center justify-center cursor-pointer"
                onClick={async () => {
                  await copyToClipboard(window?.location?.href)
                  toast('페이지 링크가 복사되었습니다.')
                }}
              >
                <i className="fa-solid fa-square-share-nodes text-[20px]" />
              </div>
            </Tooltip>
            {deck.title}
          </div>
          {(deck.descLink || deck.owner) && (
            <div className="flex justify-between w-full">
              {deck.owner && (
                <div className="">
                  작성자 :
                  <Link
                    href={deck.owner.link as string}
                    className="hover:underline text-blue-500"
                    target="_blank"
                  >
                    @{deck.owner.name}
                  </Link>
                </div>
              )}
              {deck.descLink && (
                <div className="flex flex-wrap items-center justify-end flex-1">
                  <div>출처:</div>
                  <div className="flex flex-wrap items-center gap-[4px]">
                    <Link
                      href={deck.descLink}
                      className="hover:underline text-blue-500"
                      target="_blank"
                    >
                      <div className="max-w-[400px] truncate">{deck.descLink}</div>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          )}
          <div className="bg-gray-100 p-[10px] rounded">
            {isExistLeader && (
              <div className="flex">
                {[0, 1, 2, 3, 4].map((index) => {
                  return (
                    <div
                      key={createKey()}
                      className="text-[30px] w-full text-center font-bold ff-dh text-white"
                    >
                      {leaderIndex === index && <div className="bg-red-300 pt-[2px]">리더</div>}
                    </div>
                  )
                })}
              </div>
            )}
            <div className="flex gap-[10px] justify-center items-start">
              {deck.characters.map((characterData) => {
                const { character, equipments }: any = characterData
                return (
                  <div key={createKey()} className="relative w-[180px] flex flex-col gap-[6px]">
                    <RsCharacterCard
                      size={RsCardSize.RESPONSIVE}
                      character={character}
                      height={200}
                    />
                    {equipments?.length > 0 && (
                      <div className="min-h-[100px]">
                        <RsEquipmentCard
                          equipments={equipments || []}
                          width={60}
                          gap={0}
                          onShowName
                        />
                      </div>
                    )}
                    {!equipments ||
                      (equipments.length === 0 && (
                        <div className="min-h-[100px] flex items-center justify-center border border-gray-400 border-dashed text-gray-600 ff-dh text-[20px]">
                          장비 데이터 없음
                        </div>
                      ))}
                    <hr className="border-cyan-800 border-[2px] border-b-0 border-dashed" />
                    <div className="flex flex-wrap w-full gap-[2px] items-center justify-center">
                      {(character.detail?.SKILLS || []).map((skillName: string, index: number) => {
                        const skill = CHARACTER_SKILLS[skillName]
                        return (
                          <div
                            key={`character_skill_${character.originName}_${skill.name}_${index}`}
                            className="inline-flex bg-blue-gray-800/50 p-[2px]"
                          >
                            <SkillIconDescTooltip skill={skill}>
                              <div className="w-[54px] h-[54px] bg-cover relative cursor-pointer">
                                <div
                                  className="w-full h-full bg-cover"
                                  style={{ backgroundImage: `url(${skill.thumbnail})` }}
                                />
                                <div className="absolute bottom-0 right-0 p-[4px] pb-0 text-white ff-dh flex justify-between w-full">
                                  {skill.amount > 0 && (
                                    <span className="text-shadow-outline">x{skill.amount}</span>
                                  )}
                                  <span className="text-shadow-outline ml-auto">{skill.cost}c</span>
                                </div>
                                {skill.isGeneratedCard && (
                                  <div className="absolute top-0 left-0 p-[1px] pb-0 text-shadow-outline text-blue-200 ff-dh">
                                    파생
                                  </div>
                                )}
                              </div>
                            </SkillIconDescTooltip>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="border p-[10px] rounded bg-gray-100 flex flex-col gap-[4px]">
            <div
              className="ff-dh text-[24px] flex gap-[4px] items-center cursor-pointer select-none"
              onClick={() => setIsVisibleGenericEqBox((prev) => !prev)}
            >
              범용적인 추천 장비
              {isVisibleGenericEqBox && <i className="fa-solid fa-square-minus" />}
              {!isVisibleGenericEqBox && <i className="fa-solid fa-square-caret-down" />}
            </div>
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: isVisibleGenericEqBox ? 'auto' : 0 }}
              transition={{
                type: 'tween',
                ease: 'easeOut',
                duration: 0.1,
              }}
              style={{
                overflow: 'hidden',
              }}
            >
              <div className="flex flex-col gap-[4px]">
                <div className="text-gray-800 ff-dh flex flex-wrap whitespace-pre-line gap-[2px]">
                  * 아래 장비는{' '}
                  <span className="text-red-500">추천덱 작성글과 별개의 일반 데이터</span>
                  정보입니다.(
                  <span className="text-red-500 underline">추천 덱의 장비를 우선</span>해서
                  참고하세요.)
                </div>
                <div className="flex flex-col gap-[4px]">
                  {[
                    {
                      character: null,
                      recommendationEquipments: [],
                    },
                    ...commonRecommendationCharacterData!,
                  ].map((characterData, index) => {
                    if (index === 0) {
                      return (
                        <div
                          key={createKey()}
                          className="flex items-center gap-[10px] border-b-2 border-cyan-400 mr-auto"
                        >
                          <div className="w-[70px] h-[70px] flex items-center justify-center bg-cyan-800 text-white text-[20px]">
                            공용
                          </div>
                          <div className="flex flex-wrap gap-[2px]">
                            {RECOMMENDATION_CHARACTER_EQUIPMENT.COMMON.map((equipmentName) => {
                              const equipment = {
                                name: equipmentName,
                                ...ALL_EQUIPMENTS[equipmentName],
                              }
                              return (
                                <div className="w-[70px] cursor-poitner" key={createKey()}>
                                  <EquipmentTooltipBox equipment={equipment} />
                                </div>
                              )
                            })}
                          </div>
                        </div>
                      )
                    }

                    const { character, recommendationEquipments } = characterData
                    return (
                      <div
                        key={createKey()}
                        className="flex items-center gap-[10px] border-b-2 border-cyan-400 mr-auto"
                      >
                        <CharacterThumbnailBox character={character!} />
                        <div className="flex flex-wrap gap-[2px]">
                          {recommendationEquipments.map((equipmentName) => {
                            const equipment = {
                              name: equipmentName,
                              ...ALL_EQUIPMENTS[equipmentName],
                            }
                            return (
                              <div className="w-[70px] cursor-poitner" key={createKey()}>
                                <EquipmentTooltipBox equipment={equipment} />
                              </div>
                            )
                          })}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          </div>
          {deck.desc && (
            <>
              <div className="flex items-stretch">
                <div className="min-w-[100px] flex items-center justify-center ff-dh text-[20px]">
                  설명
                </div>
                <div className="bg-gray-100/50 p-[10px] rounded border whitespace-pre-line leading-normal w-full">
                  <RSHighlightedText
                    text={deck.desc}
                    highlightStyle="text-shadow-outline-white-gray"
                  />
                </div>
              </div>
              <hr />
            </>
          )}
          {deck.autoPreset && (
            <>
              <div className="flex items-stretch">
                <div className="min-w-[100px] flex items-center justify-center ff-dh text-[20px] flex-col gap-[4px]">
                  <div>오토 프리셋</div>
                  <Link href="/wiki/auto-preset" target="_blank">
                    <GradientButton className="p-[4px] ff-sdn text-[14px] rounded inline-flex items-center gap-[4px]">
                      설정
                      <i className="fa-solid fa-circle-question" />
                    </GradientButton>
                  </Link>
                </div>
                <div className="w-full">
                  <Tooltip content="클릭시 오토 프리셋이 복사됩니다.">
                    <div
                      className="cursor-pointer max-h-[60px] overflow-y-scroll border p-[10px] rounded bg-gray-100 whitespace-pre-line flex mx-auto w-full break-all"
                      onClick={async () => {
                        await copyToClipboard(deck.autoPreset!)
                        toast('오토프리셋이 복사되었습니다.')
                      }}
                    >
                      {deck.autoPreset}
                    </div>
                  </Tooltip>
                  {deck.autoPresetPreviews && (
                    <div className="mt-[20px] flex flex-col gap-[4px]">
                      <div className="flex flex-wrap items-center gap-[2px] ff-dh text-[20px]">
                        <span>프리셋 미리보기</span>
                        <span className="ff-dh text-[16px] text-red-400">
                          * 오토 프리셋 코드가 있다면, 코드를 복사후 인게임 [자동전투 설정]을 하면
                          자동 적용됩니다.
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-[6px] justify-center border border-gray-300 rounded p-[4px]">
                        {deck.autoPresetPreviews
                          .concat(deck.autoPresetPreviewBans || [])
                          .map((key, index) => {
                            const { originName, skill } =
                              ((deck?.skillDict || {}) as any)[key] || {}
                            const character = RS_CHARACTER_DICT[originName]
                            const totalLength =
                              deck.autoPresetPreviews!.length +
                              (deck.autoPresetPreviewBans || []).length
                            const isBan =
                              totalLength - index <= (deck.autoPresetPreviewBans || []).length
                            if (!skill || !originName) {
                              return (
                                <div
                                  key={`deck_app_${key}_${index}`}
                                  className="text-center border border-red-400 w-[100px] flex flex-col gap-[2px] items-center justify-center"
                                >
                                  <div>NoData</div>
                                  <div>{key}</div>
                                </div>
                              )
                            }
                            return (
                              <div key={`deck_app_${key}_${index}`}>
                                <div className="w-[100px] border-2 border-black/50 shadow-md shadow-gray-800 relative rounded overflow-hidden">
                                  <div className="absolute right-0 top-0 m-[2px] font-bold w-[24px] h-[24px] flex items-center justify-center bg-gray-700 text-white border-2 border-gray-800 rounded-full shadow-md shadow-gray-800">
                                    {skill.cost}
                                  </div>
                                  <img
                                    src={convertCharacterThumbnailUrl(character.thumbnail)}
                                    className=""
                                  />
                                  <SkillIconDescTooltip skill={skill}>
                                    <div className="bottom-0 absolute w-full flex justify-center pb-[22px] cursor-pointer">
                                      <img
                                        className="w-[60px] h-[60px] border"
                                        src={skill.thumbnail}
                                      />
                                    </div>
                                  </SkillIconDescTooltip>
                                  <div className="absolute bottom-0 p-[2px] ff-dh text-shadow-outline text-white">
                                    {skill.name}
                                  </div>
                                  {isBan && (
                                    <div className="absolute top-0 min-w-full min-h-full">
                                      <div className="absolute min-w-full min-h-full bg-red-300 opacity-50" />
                                      <div className="absolute min-w-full min-h-full z-10 flex-col flex items-center justify-center gap-[4px]">
                                        <i className="fa-solid fa-ban text-[20px] text-white font-bold" />
                                        <div className="text-[15px] ff-dh text-white py-[2px] px-[4px] border-y border-white bg-gradient-to-r from-black/40 via-black/70 to-black/40">
                                          사용 금지
                                        </div>
                                      </div>
                                    </div>
                                  )}
                                </div>
                              </div>
                            )
                          })}
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <hr />
            </>
          )}
        </div>
      )}
    </div>
  )
}

function SkillIconDescTooltip({ children, skill }: { children: any; skill: CharacterSkill }) {
  return (
    <Tooltip
      interactive
      className="max-w-[300px] whitespace-pre-line break-words leading-normal bg-white shadow-xl text-blue-gray-900"
      content={
        <div className="flex flex-col gap-[4px]">
          <div className="ff-dh text-[20px]">{skill.name}</div>
          <hr className="border-blue-gray-700" />
          <div className="whitespace-pre-line break-all">
            <RSHighlightedText text={skill.desc} />
          </div>
        </div>
      }
    >
      {children}
    </Tooltip>
  )
}

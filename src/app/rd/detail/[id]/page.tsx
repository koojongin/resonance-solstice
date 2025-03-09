'use client'

import { useParams } from 'next/navigation'
import { RECOMMENDATION_DECKS } from '@/app/rd/rd-decks.const'
import createKey from '@/services/key-generator'
import {
  EquipmentTooltipBox,
  RsCharacterCard,
  RsEquipmentCard,
} from '@/app/components/character-frame/rs-character-card'
import { RsCardSize } from '@/app/components/character-frame/rs-card-size.enum'
import React, { useEffect, useState } from 'react'
import { copyToClipboard } from '@/services/utils/copy-clipboard'
import { Tooltip } from '@material-tailwind/react'
import Link from 'next/link'
import { convertCharacterThumbnailUrl, getFrameBgUrl } from '@/services/character-url'
import { RsCharacterBorderBox } from '@/app/components/character-frame/rs-character-border-box'
import { RECOMMENDATION_CHARACTER_EQUIPMENT } from '@/const/character/character-recommendation-equipment.const'
import { toast } from 'react-toastify'
import { ALL_EQUIPMENTS } from '@/const/archive/equipment.const'
import { RSHighlightedText } from '@/services/utils/highlight-text'
import { CharacterThumbnailBox } from '@/app/components/character-frame/character-thumbnail-box'
import { motion } from 'framer-motion'
import { RECOMMENDATION_ES_DECKS } from '@/app/rd/eternal-scuffle/rd-eternal-scuffle.const'
import { CHARACTER_DETAIL } from '@/const/character/character-detail.const'
import { CHARACTER_SKILLS } from '@/const/character/character-skill.const'

const TOTAL_RD_DECKS = [...RECOMMENDATION_DECKS, ...RECOMMENDATION_ES_DECKS]
export default function RecommendationDeckDetailPage() {
  const { id } = useParams()
  const [isVisibleGenericEqBox, setIsVisibleGenericEqBox] = useState(false)

  const deck = TOTAL_RD_DECKS.find((rDeck) => id === rDeck.id)
  if (!deck) {
    return <div>조회된 덱이 없습니다.</div>
  }

  const relatedDecks =
    deck.leaderName &&
    TOTAL_RD_DECKS.reverse().filter(
      (rDeck) => rDeck.characters.filter((c) => c.character.name === deck.leaderName).length > 0,
    )
  const isExistLeader = deck.leaderName
  const leaderIndex = deck.characters.findIndex((c) => c.character.name === deck.leaderName)

  const commonRecommendationCharacterData = deck.characters
    .map((c) => {
      return {
        recommendationEquipments: RECOMMENDATION_CHARACTER_EQUIPMENT[c.character.originName] || [],
        ...c,
      }
    })
    .filter((c) => c.recommendationEquipments.length > 0)

  return (
    <div className="flex flex-col gap-[10px]">
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
            const { character, equipments } = characterData
            const detailCharacter = CHARACTER_DETAIL[character.originName]
            return (
              <div key={createKey()} className="relative w-[180px] flex flex-col gap-[6px]">
                <RsCharacterCard size={RsCardSize.RESPONSIVE} character={character} height={200} />
                <RsEquipmentCard equipments={equipments || []} width={60} gap={0} onShowName />
                <hr className="border-cyan-800 border-[2px] border-b-0 border-dashed" />
                <div className="flex flex-wrap w-full gap-[2px] items-center justify-center">
                  {(detailCharacter.SKILLS || []).map((skillName: string) => {
                    const skill = CHARACTER_SKILLS[skillName]
                    return (
                      <div
                        key={`character_skill_${character.originName}_${skill.name}`}
                        className="inline-flex bg-blue-gray-800/50 p-[2px]"
                      >
                        <Tooltip
                          interactive
                          className="max-w-[300px] whitespace-pre-line break-words leading-normal bg-white shadow-xl text-blue-gray-900"
                          content={
                            <div className="flex flex-col gap-[4px]">
                              <div className="ff-dh text-[20px]">{skillName}</div>
                              <hr className="border-blue-gray-700" />
                              <div className="whitespace-pre-line break-all">
                                <RSHighlightedText text={skill.desc} />
                              </div>
                            </div>
                          }
                        >
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
                        </Tooltip>
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
              * 아래 장비는 <span className="text-red-500">추천덱 작성글과 별개의 일반 데이터</span>
              정보입니다.(
              <span className="text-red-500 underline">추천 덱의 장비를 우선</span>해서 참고하세요.)
            </div>
            <div className="flex flex-col gap-[4px]">
              {[
                {
                  character: null,
                  recommendationEquipments: [],
                },
                ...commonRecommendationCharacterData,
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
                        const equipment = { name: equipmentName, ...ALL_EQUIPMENTS[equipmentName] }
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
              <RSHighlightedText text={deck.desc} highlightStyle="text-shadow-outline-white-gray" />
            </div>
          </div>
          <hr />
        </>
      )}
      {deck.autoPreset && (
        <>
          <div className="flex items-stretch">
            <div className="min-w-[100px] flex items-center justify-center ff-dh text-[20px]">
              오토 프리셋
            </div>
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
          </div>
          <hr />
        </>
      )}

      <div className="flex flex-col gap-[6px]">
        <div className="ff-dh text-[24px]">
          해당 리더가 포함되어 있는 추천 덱({relatedDecks?.length.toLocaleString() || 0})
        </div>
        <div className="flex flex-wrap gap-[10px]">
          {relatedDecks &&
            relatedDecks.map((relatedDeck, index) => {
              return (
                <div
                  key={`rd_${relatedDeck.id}_${index}`}
                  className="w-[312px] bg-gray-500 rounded overflow-hidden p-[2px] pb-0 shadow-md hover:drop-shadow-2xl hover:bg-blue-gray-500 hover:shadow-xl hover:shadow-blue-500/20"
                >
                  <Link href={`/rd/detail/${relatedDeck.id}`}>
                    <div className="flex flex-wrap gap-[2px]">
                      {relatedDeck.characters.map((characterData, cIndex) => {
                        const { character } = characterData
                        const isLeader = character.name === relatedDeck.leaderName
                        return (
                          <div
                            key={`rd_${relatedDeck.id}_${cIndex}`}
                            className="w-[60px] h-[60px] relative overflow-hidden"
                          >
                            <div className="absolute w-full h-full z-40 opacity-90">
                              <RsCharacterBorderBox grade={character.grade} borderSize={3} />
                            </div>
                            <img
                              src={getFrameBgUrl(character.grade)}
                              className="z-0 w-full h-full absolute"
                            />
                            <div
                              className="min-h-full min-w-full bg-cover bg-no-repeat relative"
                              style={{
                                backgroundImage: `url(${convertCharacterThumbnailUrl(character.thumbnail, 100)})`,
                              }}
                            />
                            {isLeader && (
                              <div className="absolute bottom-0 w-full text-center text-white ff-dh text-[20px] text-shadow-outline">
                                리더
                              </div>
                            )}
                            <div
                              className="min-h-full min-w-full bg-cover"
                              style={{ backgroundImage: `url(${character.thumbnailLarge})` }}
                            />
                          </div>
                        )
                      })}
                    </div>
                    <div className="text-white ff-dh truncate w-full text-[20px] px-[10px] py-[4px] text-center">
                      {relatedDeck.title}
                    </div>
                  </Link>
                </div>
              )
            })}
        </div>
      </div>
    </div>
  )
}

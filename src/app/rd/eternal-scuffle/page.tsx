'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Tooltip } from '@material-tailwind/react'
import {
  ANFIYA,
  ARINA,
  CAROLINE,
  CONNOR,
  DUSTIN,
  ILONA,
  JOSHUA,
  KATAS,
  MARGIELA,
  NAYUTA,
  NICOLA,
  SOMMER,
  STELLA,
  SUEN,
  TENNIE,
  VERLAINE,
  WENSHENG,
} from '@/const/character/character.const'
import { RECOMMENDATION_DECKS } from '@/app/rd/rd-decks.const'
import { RsCharacterBorderBox } from '@/app/components/character-frame/rs-character-border-box'
import { convertCharacterThumbnailUrl, getFrameBgUrl } from '@/services/character-url'
import { RECOMMENDATION_ES_DECKS } from '@/app/rd/eternal-scuffle/rd-eternal-scuffle.const'
import createKey from '@/services/key-generator'
import { RSHighlightedText } from '@/services/utils/highlight-text'

const eternalScuffleCharacters = [
  NAYUTA,
  NICOLA,
  SOMMER,
  KATAS,
  DUSTIN,
  JOSHUA,
  TENNIE,
  CAROLINE,
  CONNOR,
  WENSHENG,
  VERLAINE,
  SUEN,
  STELLA,
  ARINA,
  ANFIYA,
  MARGIELA,
  ILONA,
]
const eternalScuffleCharacterNames = new Set(eternalScuffleCharacters.map((c) => c.name))
const TOTAL_DECKS = [...RECOMMENDATION_DECKS, ...RECOMMENDATION_ES_DECKS]
const filteredDecks = TOTAL_DECKS.filter(
  (deck) =>
    deck.characters.filter((data) => eternalScuffleCharacterNames.has(data.character.name))
      .length >= 5,
)
export default function RdEternalScufflePage() {
  const [isVisibleGuideBox, setIsVisibleGuideBox] = useState(false)
  return (
    <div className="flex flex-col gap-[10px]">
      <div className="flex flex-col gap-[10px]">
        <div className="flex flex-col gap-[4px]">
          <div className="text-[30px] ff-dh">무한 난투</div>
          <div className="flex flex-col gap-[4px]">
            <div>
              * 캐릭터 선택시 강제 종료하면 재선택이 가능합니다.(재선택은 가능하지만 원래 고르던
              선택지는 변화 없음)
            </div>
            <div>* 전투가 종료되기 전 강제 종료하면 라이프 소모 없이 재도전이 가능합니다.</div>
          </div>
        </div>
        <div
          className="ff-dh text-[24px] flex gap-[4px] items-center cursor-pointer select-none"
          onClick={() => setIsVisibleGuideBox((prev) => !prev)}
        >
          잘 모를때 선택 가이드
          {isVisibleGuideBox && <i className="fa-solid fa-square-minus" />}
          {!isVisibleGuideBox && <i className="fa-solid fa-square-caret-down" />}
        </div>
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: isVisibleGuideBox ? 'auto' : 0 }}
          transition={{
            type: 'tween',
            ease: 'easeOut',
            duration: 0.1,
          }}
          className={`${isVisibleGuideBox ? '' : 'overflow-hidden'}`}
        >
          <div className="flex flex-col gap-[8px] border border-gray-700 p-[8px] rounded">
            <RSHighlightedText
              text={`<div>[소마]를 선택합니다.</div>
                  <div>
                    [소마] 선택 후 안정성을 위해 [더스틴], [수엔], [아리나], [문생], [테니]등.. 을
                    선택합니다.
                  </div>
                  <div>안정성이 맞춰지면 [카타스]or나머지로 조합을 마무리합니다.</div>
                  <div>[인뢰] 덱은 아이템의 영향이 커서 추천되지 않습니다.</div>`}
            />
          </div>
        </motion.div>
      </div>

      <div>{filteredDecks.length.toLocaleString()}개의 덱</div>

      <div className="flex flex-wrap gap-[4px]">
        {filteredDecks.map((deck) => {
          const { leaderName } = deck
          return (
            <div
              key={createKey()}
              className="flex flex-col w-[312px] gap-[2px] p-[4px] bg-gray-500 hover:drop-shadow-2xl hover:bg-blue-gray-500 hover:shadow-xl hover:shadow-blue-500/20"
            >
              <div className="flex gap-[2px] bg-blue-gray-200">
                {deck.characters.map((characterData) => {
                  const { character } = characterData
                  const isLeader = leaderName === character.name
                  return (
                    <Link
                      key={createKey()}
                      href={`/characters/${character.originName}`}
                      className="overflow-hidden"
                    >
                      <Tooltip content={<div>{character.name}</div>}>
                        <div className="w-[60px] h-[60px] relative overflow-hidden">
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
                        </div>
                      </Tooltip>
                    </Link>
                  )
                })}
              </div>
              <Link href={`/rd/detail/${deck.id}`} className="hover:underline">
                <div className="text-white ff-dh truncate w-full text-[20px] px-[10px] py-[4px] pb-0 text-center">
                  {deck.title}
                </div>
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}

import Link from 'next/link'
import { Tooltip } from '@material-tailwind/react'
import React, { useEffect, useState } from 'react'
import _ from 'lodash'
import createKey from '@/services/key-generator'
import { RsCharacterBorderBox } from '@/app/components/character-frame/rs-character-border-box'
import { convertCharacterThumbnailUrl, getFrameBgUrl } from '@/services/character-url'
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
import { RECOMMENDATION_DECKS, RecommendationDeck } from '@/app/rd/rd-decks.const'
import { RECOMMENDATION_ES_DECKS } from '@/app/rd/eternal-scuffle/rd-eternal-scuffle.const'

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
const TOTAL_DECKS = [...RECOMMENDATION_ES_DECKS.reverse(), ...RECOMMENDATION_DECKS.reverse()]
const FILTERED_DECKS = TOTAL_DECKS.filter(
  (deck) =>
    deck.characters.filter((data) => eternalScuffleCharacterNames.has(data.character.name))
      .length >= 5,
).map((deck) => {
  return {
    ...deck,
    totalNames: deck.characters.map((c) => c.character.name),
  }
})

export function RdEternalScuffleList({ searchedKeyword }: any) {
  const [decks, setDecks] = useState<RecommendationDeck[]>([])
  useEffect(() => {
    setDecks(
      FILTERED_DECKS.filter((deck) => {
        return deck.totalNames.join(',').indexOf(searchedKeyword) >= 0
      }),
    )
  }, [searchedKeyword])

  useEffect(() => {
    setDecks(FILTERED_DECKS)
  }, [])

  return (
    <>
      <div className="flex items-stretch gap-[10px] mb-[4px]">
        <div className="rounded-[4px] inline-flex p-[4px] text-white bg-gray-700 border-white/50 border-dotted border">
          덱 - {decks.length} / {FILTERED_DECKS.length}
        </div>
        {searchedKeyword && (
          <div className="rounded-[4px] flex items-center">"{searchedKeyword}" 검색됨</div>
        )}
      </div>
      <div className="flex flex-wrap gap-[4px]">
        {decks.map((deck) => {
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
    </>
  )
}

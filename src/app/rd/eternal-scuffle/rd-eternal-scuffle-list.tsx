import Link from 'next/link'
import { Tooltip } from '@material-tailwind/react'
import React, { useCallback, useEffect, useState } from 'react'
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
import { copyToClipboard } from '@/services/utils/copy-clipboard'
import { toast } from 'react-toastify'
import { api } from '@/services/api/api.interceptor'
import { Pagination } from '@/const/api/pagination.interface'
import { injectCharacterDetail } from '@/services/inject-character-detail'
import { PaginationList } from '@/app/components/pagination/pagination-list'
import { RecommendationUserDeck } from '@/app/rd/user/user-deck.interface'
import { formatNumber } from '@/services/utils/number.formatter'

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

export function RdEternalScuffleList() {
  const [decks, setDecks] = useState<RecommendationUserDeck[]>([])
  const [pagination, setPagination] = useState<Pagination>()

  const loadDecks = useCallback(async (selectedPage = 1) => {
    const condition: any = {
      title: {
        $regex: '난투',
        $options: 'i',
      },
    }
    const result = await api.post('/recommendation-deck/list', {
      condition,
      opts: {
        page: selectedPage,
        limit: 18 * 5,
        sort: { _id: -1 },
      },
    })
    const { decks: rDecks, page, total, totalPages } = result.data
    setDecks(rDecks.map((d: any) => injectCharacterDetail(d)))
    setPagination({
      page,
      total,
      totalPages,
    })
  }, [])

  useEffect(() => {
    loadDecks()
  }, [])

  return (
    <>
      <div className="flex items-stretch gap-[10px] mb-[4px]">
        <div className="rounded-[4px] inline-flex p-[4px] text-white bg-gray-700 border-white/50 border-dotted border">
          {pagination?.total.toLocaleString()}개의 덱이 검색됨 - `난투`
        </div>
      </div>
      <div className="grid grid-cols-3 gap-[4px] sm:grid-cols-1">
        {decks.map((deck) => {
          const { leaderName } = deck
          return (
            <div
              key={createKey()}
              className="inline-flex flex-col border border-gray-400 bg-gray-200 gap-[4px] p-[4px] rounded hover:drop-shadow-2xl hover:bg-blue-gray-200"
            >
              <div className="flex flex-wrap items-center gap-[4px]">
                {deck.autoPreset && (
                  <div
                    className="sm:text-[24px] text-white bg-deep-purple-500 px-[4px] py-[4px] pb-[2px] ff-dh rounded cursor-pointer"
                    onClick={async () => {
                      await copyToClipboard(deck.autoPreset!)
                      toast(`"${deck.title}" 오토프리셋이 복사되었습니다.`)
                    }}
                  >
                    오토프리셋
                  </div>
                )}
                <div className="ml-auto bg-gray-700 text-white px-[4px] py-[4px] rounded flex items-center gap-[4px]">
                  <i className="fa-solid fa-eye text-[12px] pt-[2px]" />
                  {formatNumber(deck.reads)}
                </div>
              </div>
              <div className="mt-auto grid grid-cols-5 gap-[2px] bg-blue-gray-200">
                {deck.characters.map((characterData) => {
                  const { character } = characterData
                  const isLeader = leaderName === character.originName
                  return (
                    <Link
                      key={createKey()}
                      href={`/characters/${character.originName}`}
                      className="overflow-hidden"
                    >
                      <Tooltip content={<div>{character.name}</div>}>
                        <div className="relative aspect-square overflow-hidden">
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
              <Link href={`/rd/user/detail/${deck.id}`} className="hover:underline">
                <div className="text-blue-gray-900 ff-dh truncate w-full text-[20px] px-[10px] py-[4px] pb-0 text-center">
                  {deck.title}
                </div>
              </Link>
            </div>
          )
        })}
      </div>
      {pagination && <PaginationList pagination={pagination} onSelectPage={loadDecks} />}
    </>
  )
}

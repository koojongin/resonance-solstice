import React, { useCallback, useEffect, useState } from 'react'
import { RecommendationUserDeck } from '@/app/rd/user/user-deck.interface'
import { Pagination } from '@/const/api/pagination.interface'
import { api } from '@/services/api/api.interceptor'
import Link from 'next/link'
import { RsCharacterBorderBox } from '@/app/components/character-frame/rs-character-border-box'
import { convertCharacterThumbnailUrl, getFrameBgUrl } from '@/services/character-url'
import { PaginationList } from '@/app/components/pagination/pagination-list'
import { RS_CHARACTER_DICT } from '@/const/character/character.const'

function convertCharacterData(decks: []) {
  return decks.map((deck: any) => {
    const fixedDeck = { ...deck }
    fixedDeck.characters = fixedDeck.characters.map((c: any) => {
      return {
        character: RS_CHARACTER_DICT[c.name],
        equipments: (c?.equipments || []).map((equipment: any) => equipment?.name),
      }
    })
    return fixedDeck
  })
}
export function RdUserRelatedDeckList({ name, isLeader }: { isLeader?: boolean; name: string }) {
  const [decks, setDecks] = useState<RecommendationUserDeck[]>([])
  const [pagination, setPagination] = useState<Pagination>()
  const loadDecks = useCallback(async (selectedPage?: number) => {
    const condition: any = {}
    if (isLeader) {
      condition.leaderName = name
    } else {
      condition['characters.name'] = { $in: [name] }
    }
    const result = await api.post('/recommendation-deck/list', {
      condition,
      opts: {
        page: selectedPage,
        limit: 18,
      },
    })
    const { decks: rDecks, page, total, totalPages } = result.data
    setDecks(convertCharacterData(rDecks))
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
    <div className="flex flex-col gap-[6px]">
      <div className="ff-dh text-[24px]">
        해당 {isLeader ? '리더가' : '승무원이'} 포함되어 있는 추천 덱(
        {pagination?.total.toLocaleString() || 0})
      </div>
      <div className="flex flex-wrap gap-[10px]">
        {decks &&
          decks.map((deck, index) => {
            return (
              <div
                key={`rd_${deck.id}_${index}`}
                className="sm:w-full w-[312px] bg-gray-500 rounded overflow-hidden p-[2px] pb-0 shadow-md hover:drop-shadow-2xl hover:bg-blue-gray-500 hover:shadow-xl hover:shadow-blue-500/20"
              >
                <Link href={`/rd/user/detail/${deck.id}`}>
                  <div className="flex flex-wrap gap-[2px] sm:grid sm:grid-cols-5">
                    {deck.characters.map((characterData, cIndex) => {
                      const { character } = characterData
                      const isLeaderC = character.name === deck.leaderName
                      return (
                        <div
                          key={`rd_${deck.id}_${cIndex}`}
                          className="sm:aspect-square sm:w-auto sm:h-auto w-[60px] h-[60px] relative overflow-hidden"
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
                          {isLeaderC && (
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
                    {deck.title}
                  </div>
                </Link>
              </div>
            )
          })}
      </div>
      {pagination && <PaginationList onSelectPage={loadDecks} pagination={pagination} />}
    </div>
  )
}

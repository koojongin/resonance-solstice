import React, { useCallback, useEffect, useState } from 'react'
import { RecommendationUserDeck } from '@/app/rd/user/user-deck.interface'
import { Pagination } from '@/const/api/pagination.interface'
import { api } from '@/services/api/api.interceptor'
import Link from 'next/link'
import { RsCharacterBorderBox } from '@/app/components/character-frame/rs-character-border-box'
import { convertCharacterThumbnailUrl, getFrameBgUrl } from '@/services/character-url'
import { PaginationList } from '@/app/components/pagination/pagination-list'
import { RS_CHARACTER_DICT } from '@/const/character/character.const'
import { GradientHeaderDiv } from '@/app/components/div/gradient-header-div'
import { EquipmentBoxResponsive } from '@/app/equipments/rs-equipment-list'
import { ALL_EQUIPMENTS } from '@/const/archive/equipment.const'

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

export function EquipmentRelatedBox({ name }: { name: string }) {
  const [decks, setDecks] = useState<RecommendationUserDeck[]>([])
  const [pagination, setPagination] = useState<Pagination>()
  const loadDecks = useCallback(async (selectedPage?: number) => {
    const result = await api.post('/recommendation-deck/list', {
      condition: {
        'characters.equipments': {
          $elemMatch: {
            name: {
              $regex: name,
              $options: 'i',
            },
          },
        },
      },
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
      <GradientHeaderDiv>
        해당 장비가 포함되어 있는 추천 덱({pagination?.total.toLocaleString() || 0})
      </GradientHeaderDiv>
      <div className="flex flex-wrap gap-[10px]">
        {decks &&
          decks.map((deck, index) => {
            return (
              <div
                key={`rd_${deck.id}_${index}`}
                className="w-[312px] bg-gray-500 rounded overflow-hidden p-[2px] pb-0 shadow-md hover:drop-shadow-2xl hover:bg-blue-gray-500 hover:shadow-xl hover:shadow-blue-500/20"
              >
                <Link href={`/rd/user/detail/${deck.id}`}>
                  <div className="flex flex-wrap gap-[2px]">
                    {deck.characters.map((characterData, cIndex) => {
                      const { character, equipments } = characterData
                      const isLeader = character.originName === deck.leaderName
                      const equipment = (equipments || []).find((e) => e === name)
                      return (
                        <div key={`rd_${deck.id}_${cIndex}`}>
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
                            <div
                              className="min-h-full min-w-full bg-cover"
                              style={{ backgroundImage: `url(${character.thumbnailLarge})` }}
                            />
                          </div>
                          {equipment && (
                            <div className="flex items-center justify-center w-full">
                              <div className="w-[40px]">
                                <EquipmentBoxResponsive
                                  equipment={{ name, ...ALL_EQUIPMENTS[name] }}
                                />
                              </div>
                            </div>
                          )}
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

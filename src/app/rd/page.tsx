'use client'

import createKey from '@/services/key-generator'
import { useEffect, useState } from 'react'
import { RECOMMENDATION_DECKS } from '@/app/rd/rd-decks.const'
import _, { debounce } from 'lodash'
import { RsCharacterCard } from '@/app/components/character-frame/rs-character-card'
import { RsCardSize } from '@/app/components/character-frame/rs-card-size.enum'
import { getColumnUrl } from '@/services/character-url'

const REVERSED_ALL_DECKS = _.reverse(RECOMMENDATION_DECKS)
export default function RecommendationDeckPage() {
  const [rdDecks, setRdDecks] = useState(REVERSED_ALL_DECKS)
  const [searchedKeyword, setSearchedKeyword] = useState('')

  const openLink = (link?: string) => {
    if (!link) return
    window.open(link, '_blank')
  }

  const handleSearchedKeywordChange = debounce((event: any) => {
    setSearchedKeyword(event.target.value)
  }, 300)

  useEffect(() => {
    if (!searchedKeyword) setRdDecks(REVERSED_ALL_DECKS)
    setRdDecks(
      REVERSED_ALL_DECKS.filter((deck) => {
        return (
          deck.characters
            .map((c) => c.name)
            .join(',')
            .indexOf(searchedKeyword) >= 0
        )
      }),
    )
  }, [searchedKeyword])

  return (
    <div>
      <div className="mb-[10px] text-gray-600/90 font-bold">
        * 모든 덱은 설명과, 가이드 링크를 읽어 보시는것을 추천드립니다. 현재 한섭 상황과 돌파수에
        따라 가능성 유뮤가 존재합니다.
      </div>
      <div className="mb-[10px] flex flex-col gap-[8px]">
        <div className="border rounded p-[8px]">
          <div className="flex items-center gap-[10px]">
            <div>검색:</div>
            <input
              className="border border-gray-400 min-w-[300px] p-[4px]"
              type="text"
              onChange={handleSearchedKeywordChange}
              placeholder="승무원 이름을 검색하세요."
            />
          </div>
        </div>

        <div className="flex items-stretch gap-[10px] mb-[4px]">
          <div className="rounded-[4px] inline-flex p-[4px] text-white bg-gray-700 border-white/50 border-dotted border">
            덱 - {rdDecks.length} / {REVERSED_ALL_DECKS.length}
          </div>
          {searchedKeyword && (
            <div className="rounded-[4px] flex items-center">"{searchedKeyword}" 검색됨</div>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-[8px]">
        {rdDecks.map((deck) => {
          const { title, desc, characters, leaderName, owner, descLink } = deck
          return (
            <div
              key={createKey()}
              className="flex flex-col p-[8px] border w-full border-gray-300 rounded shadow-md shadow-gray-400/30"
            >
              <div className="text-[17px] mb-[4px]">{title}</div>
              <div className="flex gap-[4px] justify-between">
                <div className="flex flex-wrap min-w-[410px] gap-[4px]">
                  {characters.map((character) => {
                    const isLeader = leaderName === character.name
                    return (
                      <div key={createKey()} className="relative">
                        {isLeader && (
                          <div className="absolute text-[18px] z-20 text-white w-full text-center font-bold mt-[4px]">
                            Leader
                          </div>
                        )}
                        <RsCharacterCard size={RsCardSize.SMALL} character={character} />
                        <div className="h-[30px] py-[4px] flex items-center justify-center">
                          <img src={getColumnUrl(character.column)} className="h-full" />
                        </div>
                      </div>
                    )
                  })}
                </div>
                <div
                  className={`overflow-y-scroll w-full whitespace-pre-line break-words p-[8px] border border-gray-300 rounded-[4px] shadow-gray-400/30 shadow-md ${descLink ? 'cursor-pointer hover:bg-blue-300/10' : ''}`}
                  onClick={() => openLink(descLink)}
                >
                  {desc}
                </div>
              </div>
              {owner && (
                <div className="text-right mt-[4px] text-blue-900 text-[14px]">
                  출처 :{' '}
                  {owner.link && (
                    <a href={owner.link} target="_blank">
                      @{owner?.name}
                    </a>
                  )}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

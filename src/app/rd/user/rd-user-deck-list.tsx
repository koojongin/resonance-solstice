'use client'

import { RecommendationDeckCard } from '@/app/components/deck/recommendation-deck-card'
import React, { useEffect, useState } from 'react'
import { RecommendationDeck } from '@/app/rd/rd-decks.const'
import { Pagination } from '@/const/api/pagination.interface'

export default function RdUserDeckList({
  searchedKeyword,
  decks,
  pagination,
}: {
  decks: RecommendationDeck[]
  searchedKeyword?: any
  pagination: Pagination | undefined
}) {
  const [totalDecks, setTotalDecks] = useState([...decks])

  useEffect(() => {
    // const filtered = decks.filter((deck, index) => {
    //   return deck.totalNames.join(',').indexOf(searchedKeyword) >= 0
    // })
    setTotalDecks(decks)
  }, [searchedKeyword])

  return (
    <div>
      {!decks && <div>로드중...</div>}
      {decks && (
        <div>
          <div className="flex items-stretch gap-[10px] mb-[4px]">
            <div className="rounded-[4px] inline-flex p-[4px] text-white bg-gray-700 border-white/50 border-dotted border">
              총 덱의 수 - {pagination?.total.toLocaleString()}
            </div>
            {searchedKeyword && (
              <div className="rounded-[4px] flex items-center">"{searchedKeyword}" 검색됨</div>
            )}
          </div>
          <div className="flex flex-col gap-[8px]">
            {decks.map((deck) => (
              <RecommendationDeckCard deck={deck} key={`rdl_deck_${deck.id}`} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

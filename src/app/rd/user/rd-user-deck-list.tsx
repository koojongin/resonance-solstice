'use client'

import { RecommendationDeckCard } from '@/app/components/deck/recommendation-deck-card'
import React, { useEffect, useState } from 'react'
import { RecommendationDeck } from '@/app/rd/rd-decks.const'
import { Pagination } from '@/const/api/pagination.interface'
import { RecommendationUserDeckCard } from '@/app/components/deck/recommendation-user-deck-card'
import { RecommendationUserDeck } from '@/app/rd/user/user-deck.interface'

export default function RdUserDeckList({
  searchedKeyword,
  decks,
  pagination,
}: {
  decks: RecommendationDeck[] | undefined
  searchedKeyword?: any
  pagination: Pagination | undefined
}) {
  const [totalDecks, setTotalDecks] = useState<RecommendationUserDeck[]>()

  useEffect(() => {
    setTotalDecks(decks as RecommendationUserDeck[])
  }, [decks])

  return (
    <div>
      {!totalDecks && <div>로드중...</div>}
      {totalDecks && (
        <div>
          <div className="flex items-stretch gap-[10px] mb-[4px]">
            <div className="rounded-[4px] inline-flex p-[4px] text-white bg-gray-700 border-white/50 border-dotted border">
              검색된 덱의 수 - {pagination?.total.toLocaleString()}
            </div>
            {searchedKeyword && (
              <div className="rounded-[4px] flex items-center">"{searchedKeyword}" 검색됨</div>
            )}
          </div>
          <div className="flex flex-col gap-[8px]">
            {totalDecks.map((deck) => (
              <RecommendationUserDeckCard deck={deck} key={`rdl_deck_${deck.id}`} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

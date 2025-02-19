import { RecommendationDeck } from '@/app/rd/rd-decks.const'
import { RecommendationDeckCard } from '@/app/components/deck/recommendation-deck-card'
import createKey from '@/services/key-generator'
import React from 'react'

export function LinkedDeckListBox({ decks }: { decks: RecommendationDeck[] }) {
  return (
    <div className="flex flex-col gap-[4px]">
      <div className="bg-gradient-to-r from-blue-gray-900 to-white text-white ff-dh text-[26px] p-[8px] py-[4px] rounded">
        연결된 추천덱({decks.length})
      </div>
      <div className="flex flex-col gap-[10px]">
        {decks.map((deck) => {
          return <RecommendationDeckCard deck={deck} key={createKey()} />
        })}
      </div>
    </div>
  )
}

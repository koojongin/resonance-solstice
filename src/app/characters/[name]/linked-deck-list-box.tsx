import { RecommendationDeck } from '@/app/rd/rd-decks.const'
import { RecommendationDeckCard } from '@/app/components/deck/recommendation-deck-card'
import createKey from '@/services/key-generator'
import React from 'react'
import { GradientHeaderDiv } from '@/app/components/div/gradient-header-div'

export function LinkedDeckListBox({ decks }: { decks: RecommendationDeck[] }) {
  return (
    <div className="flex flex-col gap-[4px]">
      <GradientHeaderDiv>관련 추천덱({decks.length})</GradientHeaderDiv>
      <div className="flex flex-col gap-[10px]">
        {decks.map((deck) => {
          return <RecommendationDeckCard deck={deck} key={createKey()} />
        })}
      </div>
    </div>
  )
}

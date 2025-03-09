'use client'

import { RecommendationDeckCard } from '@/app/components/deck/recommendation-deck-card'
import React, { useEffect, useState } from 'react'
import { RecommendationDeck, REVERSED_ALL_DECKS } from '@/app/rd/rd-decks.const'
import _ from 'lodash'
import { EngineCore } from '@/const/character/character.interface'

export default function RdDeckList({
  searchedKeyword,
  checkedAutoPreset,
  checkedEngineCores,
}: any) {
  const [decks, setDecks] = useState<RecommendationDeck[]>()

  useEffect(() => {
    const filtered = REVERSED_ALL_DECKS.filter((deck, index) => {
      const isValidAutoPresetOption = checkedAutoPreset ? !!deck.autoPreset : true

      const validEngineCores: string[] = _.keys(_.pickBy(checkedEngineCores, Boolean)).map(
        (key) => EngineCore[key as keyof typeof EngineCore],
      )
      const isValidEngineCore =
        _.intersection(validEngineCores, deck.totalCores).length > 0 ||
        (validEngineCores.includes(EngineCore.EMPTY) && deck.totalCores.length === 0)

      return (
        isValidEngineCore &&
        isValidAutoPresetOption &&
        deck.totalNames.join(',').indexOf(searchedKeyword) >= 0
      )
    })
    setDecks(filtered)
  }, [checkedEngineCores, checkedAutoPreset, searchedKeyword])

  useEffect(() => {
    if (decks) return
    setDecks(REVERSED_ALL_DECKS)
  }, [])

  return (
    <div>
      {!decks && <div>로드중...</div>}
      {decks && (
        <div>
          <div className="flex items-stretch gap-[10px] mb-[4px]">
            <div className="rounded-[4px] inline-flex p-[4px] text-white bg-gray-700 border-white/50 border-dotted border">
              덱 - {decks.length} / {REVERSED_ALL_DECKS.length}
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

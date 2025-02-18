'use client'

import { useParams } from 'next/navigation'
import { RS_CHARACTERS } from '@/const/character/character.const'
import React, { useState } from 'react'
import { RSCharacter } from '@/const/character/character.interface'
import { CharacterProfileCard } from '@/app/characters/[name]/character-profile-card'
import { RECOMMENDATION_DECKS } from '@/app/rd/rd-decks.const'
import createKey from '@/services/key-generator'
import { RecommendationDeckCard } from '@/app/components/deck/recommendation-deck-card'

export default function CharacterDetailPage() {
  const { name } = useParams()
  const [character, setCharacter] = useState<RSCharacter>(
    RS_CHARACTERS.find((c) => c.originName === name)!,
  )

  if (!character) return <div>Loading...</div>
  const linkedRecommendationDecks = RECOMMENDATION_DECKS.filter((deck) =>
    deck.characters.find((c) => c.name === character.name),
  )

  return (
    <div>
      {character && (
        <div className="flex flex-col gap-[20px] justify-center">
          <CharacterProfileCard character={character} />
          <hr />
          <div className="flex flex-col gap-[4px]">
            <div className="bg-gradient-to-r from-gray-900 to-white text-white ff-dh text-[26px] p-[8px] rounded">
              연결된 추천덱({linkedRecommendationDecks.length})
            </div>
            <div className="flex flex-col gap-[10px]">
              {linkedRecommendationDecks.map((deck) => {
                return <RecommendationDeckCard deck={deck} key={createKey()} />
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

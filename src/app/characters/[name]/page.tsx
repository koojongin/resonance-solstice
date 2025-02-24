'use client'

import { useParams } from 'next/navigation'
import { RS_CHARACTERS } from '@/const/character/character.const'
import React, { useState } from 'react'
import { RSCharacter } from '@/const/character/character.interface'
import { CharacterProfileCard } from '@/app/characters/[name]/character-profile-card'
import { RECOMMENDATION_DECKS } from '@/app/rd/rd-decks.const'
import { LinkedDeckListBox } from '@/app/characters/[name]/linked-deck-list-box'
import { CharacterDetailBox } from '@/app/characters/[name]/character-detail'

export default function CharacterDetailPage() {
  const { name } = useParams()
  const [character, setCharacter] = useState<RSCharacter>(
    RS_CHARACTERS.find((c) => c.originName === name)!,
  )

  if (!character) return <div>Loading...</div>
  const linkedRecommendationDecks = RECOMMENDATION_DECKS.filter((deck) =>
    deck.characters.find((c) => c.character.name === character.name),
  )

  return (
    <div>
      {character && (
        <div className="flex flex-col gap-[20px] justify-center">
          <CharacterProfileCard character={character} />
          <hr />
          <CharacterDetailBox character={character} />
          <LinkedDeckListBox title="관련된 추천덱" decks={linkedRecommendationDecks} />
        </div>
      )}
    </div>
  )
}

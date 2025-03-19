'use client'

import { useParams } from 'next/navigation'
import { RS_CHARACTERS } from '@/const/character/character.const'
import React, { useEffect, useRef, useState } from 'react'
import { RSCharacter } from '@/const/character/character.interface'
import { CharacterProfileCard } from '@/app/characters/[name]/character-profile-card'
import { RECOMMENDATION_DECKS } from '@/app/rd/rd-decks.const'
import { LinkedDeckListBox } from '@/app/characters/[name]/linked-deck-list-box'
import { CharacterDetailBox } from '@/app/characters/[name]/character-detail'
import Link from 'next/link'
import createKey from '@/services/key-generator'
import { CommentBox } from '@/app/components/comment/comment-box'
import { CommentTarget } from '@/const/api/comment-target'
import { RdUserRelatedDeckList } from '@/app/components/deck/rd-user-related-deck-box'

enum CSectionName {
  PROFILE = '프로필',
  SKILL = '스킬/공명/각성',
  RELATED_DECKS = '관련된 추천덱',
  // PROFILE = 'PROFILE',
  // SKILL = 'SKILL',
  // RELATED_DECKS = 'RELATED_DECKS',
}

const sections = [
  {
    key: 'PROFILE',
    name: CSectionName.PROFILE,
  },
  {
    key: 'SKILL',
    name: CSectionName.SKILL,
  },
]
export default function CharacterDetailPage() {
  const { name } = useParams()
  const [isSidebarVisible, setIsSidebarVisible] = useState(true)
  const [character, setCharacter] = useState<RSCharacter>(
    RS_CHARACTERS.find((c) => c.originName === name)!,
  )
  const sectionRefs = useRef<Array<HTMLDivElement | null>>([])

  if (!character) return <div>Loading...</div>
  const linkedRecommendationDecks = RECOMMENDATION_DECKS.filter((deck) =>
    deck.characters.find((c) => c.character.name === character.name),
  )

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const handleResize = () => {
      setIsSidebarVisible(window.innerWidth >= 1400)
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="relative">
      {isSidebarVisible && (
        <div className="fixed top-[100px] left-0 w-48 bg-white p-[4px] shadow-lg">
          <ul className="flex flex-col gap-[4px]">
            {sections.map((section) => {
              const sectionName = section.name
              return (
                <li
                  key={createKey()}
                  className="ff-dh text-[20px] hover:text-[24px] hover:font-bold bg-gray-100 text-gray-800 hover:bg-green-400 hover:text-white"
                >
                  <Link legacyBehavior href={`#${section.key}`}>
                    <a className="block p-[8px] py-[8px]">{sectionName}</a>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      )}
      {character && (
        <div className="flex flex-col gap-[20px] justify-center">
          {sections.map((section, index) => {
            const sectionName = section.name
            if (sectionName === CSectionName.PROFILE) {
              return (
                <div
                  key={section.key}
                  id={section.key}
                  ref={(el) => {
                    sectionRefs.current[index] = el
                  }}
                >
                  <CharacterProfileCard character={character} />
                  <hr />
                </div>
              )
            }
            if (sectionName === CSectionName.SKILL) {
              return (
                <div
                  key={section.key}
                  id={section.key}
                  ref={(el) => {
                    sectionRefs.current[index] = el
                  }}
                >
                  <CharacterDetailBox character={character} />
                </div>
              )
            }
            return
          })}
        </div>
      )}
      <div className="mt-[50px]">
        <CommentBox
          data={{
            target: `${CommentTarget.Character}${name}`,
            refId: '123456789012345678901234' as string,
          }}
        />
      </div>

      <div className="mt-[50px]">
        <RdUserRelatedDeckList leaderName={name as string} />
      </div>
    </div>
  )
}

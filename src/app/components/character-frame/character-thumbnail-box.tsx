import { convertCharacterThumbnailUrl, getFrameBgUrl } from '@/services/character-url'
import React from 'react'
import { RSCharacter } from '@/const/character/character.interface'

export function CharacterThumbnailBox({ character }: { character: RSCharacter }) {
  return (
    <div className="w-[70px]">
      <div className="w-[70px] h-[70px] relative">
        <img src={getFrameBgUrl(character!.grade)} className="z-0 w-full h-full absolute" />
        <div
          className="min-h-full min-w-full bg-cover bg-no-repeat relative"
          style={{
            backgroundImage: `url(${convertCharacterThumbnailUrl(character!.thumbnail, 100)})`,
          }}
        />
      </div>
    </div>
  )
}

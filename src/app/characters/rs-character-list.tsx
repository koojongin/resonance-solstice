import { RSCharacter } from '@/const/character/character.interface'
import createKey from '@/services/key-generator'
import { convertCharacterThumbnailUrl, getFrameBgUrl } from '@/services/character-url'
import { RS_GRADE } from '@/const/character/character.enum'
import { useEffect, useState } from 'react'
import { RS_CHARACTERS } from '@/const/character/character.const'
import _ from 'lodash'

export function RsCharacterList({ checkedGrades }: any) {
  const [characters, setCharacters] = useState<RSCharacter[]>(RS_CHARACTERS)

  useEffect(() => {
    setCharacters(
      [...RS_CHARACTERS].filter((character) => {
        const validGrades: string[] = _.keys(_.pickBy(checkedGrades, Boolean))
        const isValidGrade = validGrades.includes(character.grade)
        return isValidGrade
      }),
    )
  }, [checkedGrades])

  return (
    <div>
      <div className="rounded-[4px] inline-flex mb-[4px] p-[4px] text-white bg-gray-700 border-white/50 border-dotted border">
        {characters.length} / {RS_CHARACTERS.length}
      </div>
      <div className="flex flex-wrap gap-[10px]">
        {characters.map((character) => {
          return (
            <div key={createKey()}>
              <RsCharacterCard character={character} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export function RsCharacterCard({ character }: { character: RSCharacter }) {
  return (
    <div className="border-2 border-gray-400/80 rounded-[6px] shadow-md shadow-gray-800/70 p-[2px] cursor-pointer">
      <div className="w-[140px] h-[160px] overflow-hidden relative rounded-[4px]">
        <img src={getFrameBgUrl(character.grade)} className="absolute z-0 w-full bottom-[-40px]" />
        <img
          src={convertCharacterThumbnailUrl(character.thumbnail, 140)}
          className="w-full z-10 absolute"
        />
        <RsCharacterBorderBox grade={character.grade} />
      </div>
      <div className="font-bold text-gray-700 mt-[4px] text-[15px] text-center">
        {character.name}
      </div>
    </div>
  )
}

export function RsCharacterBorderBox({ grade }: { grade: RS_GRADE }) {
  if (grade === RS_GRADE.N)
    return <div className="border-[4px] border-gray-700 relative w-full h-full" />
  if (grade === RS_GRADE.R)
    return <div className="border-[4px] border-blue-300 relative w-full h-full" />
  if (grade === RS_GRADE.SR)
    return <div className="border-[4px] border-purple-500 relative w-full h-full" />
  if (grade === RS_GRADE.SSR)
    return <div className="border-[4px] border-yellow-500 relative w-full h-full" />
}

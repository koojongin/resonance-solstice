import { RSCharacter } from '@/const/character/character.interface'
import createKey from '@/services/key-generator'
import {
  convertCharacterThumbnailUrl,
  getColumnUrl,
  getFactionUrl,
  getFrameBgUrl,
} from '@/services/character-url'
import { RS_COLUMN, RS_FACTION, RS_GRADE } from '@/const/character/character.enum'
import { useEffect, useState } from 'react'
import { RS_CHARACTERS } from '@/const/character/character.const'
import _ from 'lodash'

export function RsCharacterList({
  checkedGrades,
  checkedFactions,
  checkedColumns,
  searchedKeyword,
}: any) {
  const [characters, setCharacters] = useState<RSCharacter[]>(RS_CHARACTERS)

  useEffect(() => {
    setCharacters(
      [...RS_CHARACTERS].filter((character) => {
        const validGrades: string[] = _.keys(_.pickBy(checkedGrades, Boolean))
        const isValidGrade = validGrades.includes(character.grade)

        const validFactions: string[] = _.keys(_.pickBy(checkedFactions, Boolean)).map(
          (key) => RS_FACTION[key as keyof typeof RS_FACTION],
        )
        const isValidFaction = validFactions.includes(character.faction)

        const validColumns: string[] = _.keys(_.pickBy(checkedColumns, Boolean)).map(
          (key) => RS_COLUMN[key as keyof typeof RS_COLUMN],
        )
        const isValidColumn = validColumns.includes(character.column)

        const isValidKeyword = character.name.indexOf(searchedKeyword) >= 0
        return (
          isValidGrade &&
          isValidFaction &&
          isValidColumn &&
          (searchedKeyword ? isValidKeyword : true)
        )
      }),
    )
  }, [checkedColumns, checkedFactions, checkedGrades, searchedKeyword])

  return (
    <div>
      <div className="flex items-stretch gap-[10px] mb-[4px]">
        <div className="rounded-[4px] inline-flex p-[4px] text-white bg-gray-700 border-white/50 border-dotted border">
          승무원 - {characters.length} / {RS_CHARACTERS.length}
        </div>
        {searchedKeyword && (
          <div className="rounded-[4px] flex items-center">"{searchedKeyword}" 검색됨</div>
        )}
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

export enum RsCardSize {
  SMALL = 'SMALL',
  MEDIUM = 'MEDIUM',
}

export function RsCharacterCard({
  character,
  size = RsCardSize.MEDIUM,
}: {
  character: RSCharacter
  size?: RsCardSize
}) {
  if (size === RsCardSize.SMALL) return <RsCharacterCardSmall character={character} size={size} />
  if (size === RsCardSize.MEDIUM) return <RsCharacterCardMedium character={character} size={size} />
}

export function RsCharacterCardSmall({
  character,
  size = RsCardSize.MEDIUM,
}: {
  character: RSCharacter
  size?: RsCardSize
}) {
  return (
    <div className="border-2 border-gray-400/80 rounded-[6px] shadow-md shadow-gray-800/70 p-[2px] cursor-pointer">
      <div className="w-[70px] h-[70px] overflow-hidden relative rounded-[4px]">
        <img src={getFrameBgUrl(character.grade)} className="absolute z-0 w-full bottom-[-40px]" />
        <img
          src={convertCharacterThumbnailUrl(character.thumbnail, 100)}
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

export function RsCharacterCardMedium({
  character,
  size = RsCardSize.MEDIUM,
}: {
  character: RSCharacter
  size?: RsCardSize
}) {
  return (
    <div className="border-2 border-gray-400/80 rounded-[6px] shadow-md shadow-gray-800/70 p-[2px] cursor-pointer">
      <div className="w-[140px] h-[160px] overflow-hidden relative rounded-[4px]">
        <img src={getFrameBgUrl(character.grade)} className="absolute z-0 w-full bottom-[-40px]" />
        <img
          src={convertCharacterThumbnailUrl(character.thumbnail, 140)}
          className="w-full z-10 absolute"
        />
        <div className="z-20 absolute w-[40px] flex justify-center items-center m-[4px] right-0">
          <img src={getFactionUrl(character.faction)} className="w-full" />
        </div>
        <div className="z-20 absolute w-[40px] flex justify-center items-center m-[4px] left-0">
          <img src={getColumnUrl(character.column)} className="w-full" />
        </div>
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

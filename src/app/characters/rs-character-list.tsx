import { EngineCore, RSCharacter } from '@/const/character/character.interface'
import createKey from '@/services/key-generator'
import { RS_COLUMN, RS_FACTION, RS_GENDER } from '@/const/character/character.enum'
import { useEffect, useState } from 'react'
import { RS_CHARACTERS } from '@/const/character/character.const'
import _ from 'lodash'
import { RsCharacterCard } from '@/app/components/character-frame/rs-character-card'

export function RsCharacterList({
  checkedGrades,
  checkedFactions,
  checkedColumns,
  searchedKeyword,
  checkedGenders,
  checkedEngineCores,
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

        const validGenders: string[] = _.keys(_.pickBy(checkedGenders, Boolean)).map(
          (key) => RS_GENDER[key as keyof typeof RS_GENDER],
        )
        const isValidGender = validGenders.includes(character.gender)

        const validEngineCores: string[] = _.keys(_.pickBy(checkedEngineCores, Boolean)).map(
          (key) => EngineCore[key as keyof typeof EngineCore],
        )
        const isValidEngineCore = _.intersection(validEngineCores, character.cores).length > 0

        const validColumns: string[] = _.keys(_.pickBy(checkedColumns, Boolean)).map(
          (key) => RS_COLUMN[key as keyof typeof RS_COLUMN],
        )
        const isValidColumn = validColumns.includes(character.column)

        const isValidKeyword = character.name.indexOf(searchedKeyword) >= 0
        return (
          isValidEngineCore &&
          isValidGender &&
          isValidGrade &&
          isValidFaction &&
          isValidColumn &&
          (searchedKeyword ? isValidKeyword : true)
        )
      }),
    )
  }, [
    checkedEngineCores,
    checkedColumns,
    checkedFactions,
    checkedGenders,
    checkedGrades,
    searchedKeyword,
  ])

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

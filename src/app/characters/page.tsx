'use client'

import { RS_CHARACTERS } from '@/const/character/character.const'
import createKey from '@/services/key-generator'
import { RS_COLUMN, RS_FACTION, RS_GRADE } from '@/const/character/character.enum'
import { useState } from 'react'
import { CheckBoxGroup } from '@/services/common.enum'
import { RsCharacterList } from '@/app/characters/rs-character-list'

export default function CharactersPage() {
  const [checkedGrades, setCheckedGrades] = useState<CheckBoxGroup>(
    Object.keys(RS_GRADE).reduce((acc, key) => ({ ...acc, [key]: key === RS_GRADE.SSR }), {}),
  )

  const [checkedFactions, setCheckedFactions] = useState<CheckBoxGroup>(
    Object.keys(RS_FACTION).reduce((acc, key) => ({ ...acc, [key]: true }), {}),
  )

  const [checkedColumns, setCheckedColumns] = useState<CheckBoxGroup>(
    Object.keys(RS_COLUMN).reduce((acc, key) => ({ ...acc, [key]: true }), {}),
  )

  const handleChangeGrade = (event: any) => {
    const { name, checked } = event.target
    setCheckedGrades((prev) => ({
      ...prev,
      [name]: checked,
    }))
  }

  const handleChangeFaction = (event: any) => {
    const { name, checked } = event.target
    setCheckedFactions((prev) => ({
      ...prev,
      [name]: checked,
    }))
  }

  const handleChangeColumn = (event: any) => {
    const { name, checked } = event.target
    setCheckedColumns((prev) => ({
      ...prev,
      [name]: checked,
    }))
  }

  return (
    <div>
      <div className="text-[24px] font-bold">캐릭터 목록</div>
      <div className="mb-[10px]" />

      <div className="flex flex-col items-start justify-start border p-[4px] border-gray-400">
        <div className="flex justify-start">
          <div className="w-[100px] flex justify-start">등급</div>
          <div className="flex items-center gap-[4px]">
            {Object.keys(RS_GRADE).map((grade) => {
              return (
                <label
                  className="flex items-center cursor-pointer select-none px-[4px]"
                  key={createKey()}
                >
                  <input
                    type="checkbox"
                    className="flex border-2 rounded-md border-blue-200"
                    name={grade}
                    checked={checkedGrades[grade]}
                    onChange={handleChangeGrade}
                  />
                  <div className="ml-[2px]">{grade}</div>
                </label>
              )
            })}
          </div>
        </div>

        <div className="flex justify-start">
          <div className="w-[100px] flex justify-start">진영</div>
          <div className="flex items-center gap-[4px]">
            {Object.keys(RS_FACTION).map((faction) => {
              return (
                <label
                  className="flex items-center cursor-pointer select-none px-[4px]"
                  key={createKey()}
                >
                  <input
                    type="checkbox"
                    className="flex border-2 rounded-md border-blue-200"
                    name={faction}
                    checked={checkedFactions[faction]}
                    onChange={handleChangeFaction}
                  />
                  <div className="ml-[2px]">{RS_FACTION[faction as keyof typeof RS_FACTION]}</div>
                </label>
              )
            })}
          </div>
        </div>

        <div className="flex justify-start">
          <div className="w-[100px] flex justify-start">위치</div>
          <div className="flex items-center gap-[4px]">
            {Object.keys(RS_COLUMN).map((column) => {
              return (
                <label
                  className="flex items-center cursor-pointer select-none px-[4px]"
                  key={createKey()}
                >
                  <input
                    type="checkbox"
                    className="flex border-2 rounded-md border-blue-200"
                    name={column}
                    checked={checkedColumns[column]}
                    onChange={handleChangeColumn}
                  />
                  <div className="ml-[2px]">{RS_COLUMN[column as keyof typeof RS_COLUMN]}</div>
                </label>
              )
            })}
          </div>
        </div>
        {/* /////// */}
      </div>

      <div className="mb-[10px]" />
      <div>
        <RsCharacterList
          checkedGrades={checkedGrades}
          checkedFactions={checkedFactions}
          checkedColumns={checkedColumns}
        />
      </div>
    </div>
  )
}

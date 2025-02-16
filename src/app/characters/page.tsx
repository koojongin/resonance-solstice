'use client'

import createKey from '@/services/key-generator'
import { RS_COLUMN, RS_FACTION, RS_GENDER, RS_GRADE } from '@/const/character/character.enum'
import { useState } from 'react'
import { CheckBoxGroup } from '@/services/common.enum'
import { RsCharacterList } from '@/app/characters/rs-character-list'
import { debounce } from 'lodash'

export default function CharactersPage() {
  const [searchedKeyword, setSearchedKeyword] = useState('')

  const [checkedGrades, setCheckedGrades] = useState<CheckBoxGroup>(
    // Object.keys(RS_GRADE).reduce((acc, key) => ({ ...acc, [key]: key === RS_GRADE.SSR }), {}),
    Object.keys(RS_GRADE).reduce((acc, key) => ({ ...acc, [key]: true }), {}),
  )

  const [checkedFactions, setCheckedFactions] = useState<CheckBoxGroup>(
    Object.keys(RS_FACTION).reduce((acc, key) => ({ ...acc, [key]: true }), {}),
  )

  const [checkedGenders, setCheckedGenders] = useState<CheckBoxGroup>(
    Object.keys(RS_GENDER).reduce((acc, key) => ({ ...acc, [key]: true }), {}),
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

  const handleChangeGender = (event: any) => {
    const { name, checked } = event.target
    setCheckedGenders((prev) => ({
      ...prev,
      [name]: checked,
    }))
  }

  const handleSearchedKeywordChange = debounce((event: any) => {
    setSearchedKeyword(event.target.value)
  }, 300)

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
          <div className="w-[100px] flex justify-start">성별</div>
          <div className="flex items-center gap-[4px]">
            {Object.keys(RS_GENDER).map((gender) => {
              return (
                <label
                  className="flex items-center cursor-pointer select-none px-[4px]"
                  key={createKey()}
                >
                  <input
                    type="checkbox"
                    className="flex border-2 rounded-md border-blue-200"
                    name={gender}
                    checked={checkedGenders[gender]}
                    onChange={handleChangeGender}
                  />
                  <div className="ml-[2px]">{RS_GENDER[gender as keyof typeof RS_GENDER]}</div>
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

        <div className="flex justify-start">
          <div className="w-[100px] flex justify-start items-center">검색</div>
          <div className="flex items-center gap-[4px] my-[5px]">
            <input
              className="border border-gray-400 min-w-[300px] p-[4px]"
              type="text"
              onChange={handleSearchedKeywordChange}
              placeholder="검색할 승무원 이름을 입력하세요."
            />
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
          searchedKeyword={searchedKeyword}
          checkedGenders={checkedGenders}
        />
      </div>
    </div>
  )
}

'use client'

import createKey from '@/services/key-generator'
import { RS_COLUMN, RS_FACTION, RS_GENDER, RS_GRADE } from '@/const/character/character.enum'
import { useState } from 'react'
import { CheckBoxGroup } from '@/services/common.enum'
import { RsCharacterList } from '@/app/characters/rs-character-list'
import { debounce } from 'lodash'
import { RS_CHARACTERS } from '@/const/character/character.const'
import { EngineCore } from '@/const/character/character.interface'

export default function CharactersPage() {
  const [searchedKeyword, setSearchedKeyword] = useState('')
  const [filteredKeywordSuggestions, setFilteredKeywordSuggestions] = useState<string[]>([])
  const [showKeywordSuggestions, setShowKeywordSuggestions] = useState(false)

  const [checkedGrades, setCheckedGrades] = useState<CheckBoxGroup>(
    // Object.keys(RS_GRADE).reduce((acc, key) => ({ ...acc, [key]: key === RS_GRADE.SSR }), {}),
    Object.keys(RS_GRADE).reduce(
      (acc, key) => ({
        ...acc,
        [key]: true,
      }),
      {},
    ),
  )

  const [checkedFactions, setCheckedFactions] = useState<CheckBoxGroup>(
    Object.keys(RS_FACTION).reduce(
      (acc, key) => ({
        ...acc,
        [key]: true,
      }),
      {},
    ),
  )

  const [checkedGenders, setCheckedGenders] = useState<CheckBoxGroup>(
    Object.keys(RS_GENDER).reduce(
      (acc, key) => ({
        ...acc,
        [key]: true,
      }),
      {},
    ),
  )

  const [checkedEngineCores, setCheckedEngineCores] = useState<CheckBoxGroup>(
    Object.keys(EngineCore).reduce(
      (acc, key) => ({
        ...acc,
        [key]: true,
      }),
      {},
    ),
  )

  const [checkedColumns, setCheckedColumns] = useState<CheckBoxGroup>(
    Object.keys(RS_COLUMN).reduce(
      (acc, key) => ({
        ...acc,
        [key]: true,
      }),
      {},
    ),
  )

  const characterNames = RS_CHARACTERS.map((c) => c.name)

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

  const handleChangeEngineCore = (event: any) => {
    const { name, checked } = event.target
    setCheckedEngineCores((prev) => ({
      ...prev,
      [name]: checked,
    }))
  }

  const handleSearchedKeywordChange = (event: any) => {
    const { value } = event.target
    setSearchedKeyword(value)
    debouncedSearchedKeywordChange(value)
  }
  const debouncedSearchedKeywordChange = debounce((value) => {
    const isExistKeyword = value.length > 0
    if (isExistKeyword) {
      const filtered = characterNames.filter((s) => s.toLowerCase().includes(value.toLowerCase()))
      setFilteredKeywordSuggestions(filtered)
    }
    setShowKeywordSuggestions(isExistKeyword)
  }, 300)

  const handleKeywordSelect = (suggestion: string) => {
    setSearchedKeyword(suggestion)
    setShowKeywordSuggestions(false)
  }

  return (
    <div className="flex-col flex gap-[10px]">
      <div className="text-[24px] font-bold flex items-center gap-[4px]">
        <div>캐릭터 목록</div>
      </div>
      <div className="flex flex-col gap-[4px]">
        <div className="font-normal text-[16px] text-red-600">
          * 미래시 캐릭터도 포함되어있습니다.
        </div>
        <div className="font-normal text-[16px] text-red-600">
          * 영문명인 경우, 한국서버에 배포되지 않은 승무원 일 수 있습니다.
        </div>
      </div>

      <div className="flex flex-col gap-[6px] items-start justify-start border p-[8px] rounded shadow border-gray-400">
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
          <div className="w-[100px] flex justify-start">엔진코어</div>
          <div className="flex items-center gap-[4px]">
            {Object.keys(EngineCore).map((engineCore) => {
              return (
                <label
                  className="flex items-center cursor-pointer select-none px-[4px]"
                  key={createKey()}
                >
                  <input
                    type="checkbox"
                    className="flex border-2 rounded-md border-blue-200"
                    name={engineCore}
                    checked={checkedEngineCores[engineCore]}
                    onChange={handleChangeEngineCore}
                  />
                  <div className="ml-[2px]">
                    {EngineCore[engineCore as keyof typeof EngineCore]}
                  </div>
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
          <div className="flex items-center gap-[4px] my-[5px] relative">
            <input
              className="border border-gray-400 min-w-[300px] p-[4px]"
              type="text"
              value={searchedKeyword}
              onChange={handleSearchedKeywordChange}
              placeholder="검색할 승무원 이름을 입력하세요."
            />
            {showKeywordSuggestions && (
              <ul className="absolute top-[26px] z-50 left-0 right-0 mt-1 bg-gray-100 border border-gray-300 shadow-lg">
                {filteredKeywordSuggestions.length > 0 ? (
                  filteredKeywordSuggestions.map((s, i) => (
                    <li
                      key={i}
                      className="p-2 hover:bg-gray-100 cursor-pointer border-b last:border-b-0 border-gray-700 border-dashed"
                      onClick={() => handleKeywordSelect(s)}
                    >
                      {s}
                    </li>
                  ))
                ) : (
                  <li className="p-2 text-gray-500">"{searchedKeyword}" 포함된 검색결과 없음</li>
                )}
              </ul>
            )}
          </div>
        </div>
        {/* /////// */}
      </div>

      <hr />
      <div>
        <RsCharacterList
          checkedEngineCores={checkedEngineCores}
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

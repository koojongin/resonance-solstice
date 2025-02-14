'use client'

import { RS_CHARACTERS } from '@/const/character/character.const'
import createKey from '@/services/key-generator'
import { RS_GRADE } from '@/const/character/character.enum'
import { useState } from 'react'
import { CheckBoxGroup } from '@/services/common.enum'
import { RsCharacterList } from '@/app/characters/rs-character-list'

export default function CharactersPage() {
  const [checkedGrades, setCheckedGrades] = useState<CheckBoxGroup>(
    Object.keys(RS_GRADE).reduce((acc, key) => ({ ...acc, [key]: key === RS_GRADE.SSR }), {}),
  )

  const handleChangeGrade = (event: any) => {
    const { name, checked } = event.target
    setCheckedGrades((prev) => ({
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
      </div>

      <div>필터 기능 더 추가될 예정...</div>

      <div className="mb-[10px]" />
      <div>
        <RsCharacterList checkedGrades={checkedGrades} />
      </div>
    </div>
  )
}

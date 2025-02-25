'use client'

import React, { useState } from 'react'
import { MaterialListBox } from '@/app/materials/material-list-box'
import { RS_GRADE } from '@/const/character/character.enum'
import createKey from '@/services/key-generator'
import { CheckBoxGroup } from '@/services/common.enum'
import { RSMaterialType } from '@/const/material.const'

export default function MaterialsPage() {
  const [searchedKeyword, setSearchedKeyword] = useState('')
  const handleSearchedKeywordChange = (event: any) => {
    const { value } = event.target
    setSearchedKeyword(value)
  }
  const [checkedGrades, setCheckedGrades] = useState<CheckBoxGroup>(
    Object.keys(RS_GRADE).reduce(
      (acc, key) => ({
        ...acc,
        [key]: true,
      }),
      {},
    ),
  )

  const [checkedTypes, setCheckedTypes] = useState<CheckBoxGroup>(
    Object.keys(RSMaterialType).reduce(
      (acc, key) => ({
        ...acc,
        [key]: false,
      }),
      {},
    ),
  )

  const handleChangeGrade = (event: any) => {
    const { name, checked } = event.target
    setCheckedGrades((prev) => ({
      ...prev,
      [name]: checked,
    }))
  }

  const handleChangeType = (event: any) => {
    const { name, checked } = event.target
    setCheckedTypes((prev) => ({
      ...prev,
      [name]: checked,
    }))
  }

  return (
    <div className="flex flex-col gap-[10px]">
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
          <div className="w-[100px] flex justify-start">유형</div>
          <div className="flex items-center gap-[4px]">
            {Object.keys(RSMaterialType).map((materialType) => {
              return (
                <label
                  className="flex items-center cursor-pointer select-none px-[4px]"
                  key={createKey()}
                >
                  <input
                    type="checkbox"
                    className="flex border-2 rounded-md border-blue-200"
                    name={materialType}
                    checked={checkedTypes[materialType]}
                    onChange={handleChangeType}
                  />
                  <div className="ml-[2px]">
                    {RSMaterialType[materialType as keyof typeof RSMaterialType]}
                  </div>
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
              placeholder="검색할 재료 이름을 입력하세요."
            />
          </div>
        </div>
      </div>

      <MaterialListBox
        searchedKeyword={searchedKeyword}
        checkedGrades={checkedGrades}
        checkedTypes={checkedTypes}
      />
    </div>
  )
}

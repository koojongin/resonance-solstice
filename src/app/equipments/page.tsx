'use client'

import React, { useState } from 'react'
import createKey from '@/services/key-generator'
import { CheckBoxGroup } from '@/services/common.enum'
import { RS_FACTION, RS_GRADE } from '@/const/character/character.enum'
import { RsEquipmentList } from '@/app/equipments/rs-equipment-list'
import { RSEquipmentType } from '@/const/archive/equipment.const'

export default function EquipmentsPage() {
  const [searchedKeyword, setSearchedKeyword] = useState('')
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

  const [checkedEquipTypes, setCheckedEquipTypes] = useState<CheckBoxGroup>(
    Object.keys(RSEquipmentType).reduce(
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

  const handleChangeEquipType = (event: any) => {
    const { name, checked } = event.target
    setCheckedEquipTypes((prev) => ({
      ...prev,
      [name]: checked,
    }))
  }

  const handleSearchedKeywordChange = (event: any) => {
    const { value } = event.target
    setSearchedKeyword(value)
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
          <div className="w-[100px] flex justify-start">타입</div>
          <div className="flex items-center gap-[4px]">
            {Object.keys(RSEquipmentType).map((eType) => {
              return (
                <label
                  className="flex items-center cursor-pointer select-none px-[4px]"
                  key={createKey()}
                >
                  <input
                    type="checkbox"
                    className="flex border-2 rounded-md border-blue-200"
                    name={eType}
                    checked={checkedEquipTypes[eType]}
                    onChange={handleChangeEquipType}
                  />
                  <div className="ml-[2px]">
                    {RSEquipmentType[eType as keyof typeof RSEquipmentType]}
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
              placeholder="검색할 장비 이름을 입력하세요."
            />
          </div>
        </div>
      </div>

      <div>
        <RsEquipmentList
          checkedGrades={checkedGrades}
          checkedFactions={checkedFactions}
          searchedKeyword={searchedKeyword}
          checkedEquipTypes={checkedEquipTypes}
        />
      </div>
    </div>
  )
}

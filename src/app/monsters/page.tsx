'use client'

import React, { useState } from 'react'
import createKey from '@/services/key-generator'
import { CheckBoxGroup } from '@/services/common.enum'
import _ from 'lodash'
import { MONSTERS } from '@/const/monster/monster.const'
import { MonsterListBox } from '@/app/monsters/monster-list-box'
import { MonsterGrade, MonsterStatGrade } from '@/const/monster/monster.interface'

const grades = Object.keys(MonsterGrade)
const CONVERTED_MONSTERS = _.map(MONSTERS, (value, key) => ({
  name: key,
  ...value,
}))

const SORTED_MONSTERS = _.sortBy(CONVERTED_MONSTERS, (item) => grades.indexOf(item.grade))
export default function MonstersPage() {
  const [searchedKeyword, setSearchedKeyword] = useState('')
  const handleSearchedKeywordChange = (event: any) => {
    const { value } = event.target
    setSearchedKeyword(value)
  }
  const [checkedGrades, setCheckedGrades] = useState<CheckBoxGroup>(
    Object.keys(MonsterGrade).reduce(
      (acc, key) => ({
        ...acc,
        [key]: true,
      }),
      {},
    ),
  )

  const [checkedGradeOfAttacks, setCheckedGradeOfAttacks] = useState<CheckBoxGroup>(
    Object.keys(MonsterStatGrade).reduce(
      (acc, key) => ({
        ...acc,
        [key]: true,
      }),
      {},
    ),
  )
  const [checkedGradeOfDefences, setCheckedGradeOfDefences] = useState<CheckBoxGroup>(
    Object.keys(MonsterStatGrade).reduce(
      (acc, key) => ({
        ...acc,
        [key]: true,
      }),
      {},
    ),
  )
  const [checkedGradeOfHps, setCheckedGradeOfHps] = useState<CheckBoxGroup>(
    Object.keys(MonsterStatGrade).reduce(
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

  const handleChangeGradeOfAttack = (event: any) => {
    const { name, checked } = event.target
    setCheckedGradeOfAttacks((prev) => ({
      ...prev,
      [name]: checked,
    }))
  }
  const handleChangeGradeOfDefence = (event: any) => {
    const { name, checked } = event.target
    setCheckedGradeOfDefences((prev) => ({
      ...prev,
      [name]: checked,
    }))
  }
  const handleChangeGradeOfHp = (event: any) => {
    const { name, checked } = event.target
    setCheckedGradeOfHps((prev) => ({
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
            {Object.keys(MonsterGrade).map((grade) => {
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
                  <div className="ml-[2px]">{MonsterGrade[grade as keyof typeof MonsterGrade]}</div>
                </label>
              )
            })}
          </div>
        </div>
        <div className="flex justify-start">
          <div className="w-[100px] flex justify-start">공격 등급</div>
          <div className="flex items-center gap-[4px]">
            {Object.keys(MonsterStatGrade).map((grade) => {
              return (
                <label
                  className="flex items-center cursor-pointer select-none px-[4px]"
                  key={createKey()}
                >
                  <input
                    type="checkbox"
                    className="flex border-2 rounded-md border-blue-200"
                    name={grade}
                    checked={checkedGradeOfAttacks[grade]}
                    onChange={handleChangeGradeOfAttack}
                  />
                  <div className="ml-[2px]">
                    {MonsterStatGrade[grade as keyof typeof MonsterStatGrade]}
                  </div>
                </label>
              )
            })}
          </div>
        </div>
        <div className="flex justify-start">
          <div className="w-[100px] flex justify-start">방어 등급</div>
          <div className="flex items-center gap-[4px]">
            {Object.keys(MonsterStatGrade).map((grade) => {
              return (
                <label
                  className="flex items-center cursor-pointer select-none px-[4px]"
                  key={createKey()}
                >
                  <input
                    type="checkbox"
                    className="flex border-2 rounded-md border-blue-200"
                    name={grade}
                    checked={checkedGradeOfDefences[grade]}
                    onChange={handleChangeGradeOfDefence}
                  />
                  <div className="ml-[2px]">
                    {MonsterStatGrade[grade as keyof typeof MonsterStatGrade]}
                  </div>
                </label>
              )
            })}
          </div>
        </div>
        <div className="flex justify-start">
          <div className="w-[100px] flex justify-start">체력 등급</div>
          <div className="flex items-center gap-[4px]">
            {Object.keys(MonsterStatGrade).map((grade) => {
              return (
                <label
                  className="flex items-center cursor-pointer select-none px-[4px]"
                  key={createKey()}
                >
                  <input
                    type="checkbox"
                    className="flex border-2 rounded-md border-blue-200"
                    name={grade}
                    checked={checkedGradeOfHps[grade]}
                    onChange={handleChangeGradeOfHp}
                  />
                  <div className="ml-[2px]">
                    {MonsterStatGrade[grade as keyof typeof MonsterStatGrade]}
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
              placeholder="검색할 몬스터 이름을 입력하세요."
            />
          </div>
        </div>
      </div>

      <MonsterListBox
        items={SORTED_MONSTERS}
        searchedKeyword={searchedKeyword}
        checkedGrades={checkedGrades}
        checkedGradeOfAttacks={checkedGradeOfAttacks}
        checkedGradeOfDefences={checkedGradeOfDefences}
        checkedGradeOfHps={checkedGradeOfHps}
      />
    </div>
  )
}

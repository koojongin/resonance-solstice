import { useNextDepthNavigator } from '@/services/navigation'
import React, { useEffect, useState } from 'react'
import { ExtendedRSMonster, MonsterGrade } from '@/const/monster/monster.const'
import _ from 'lodash'
import createKey from '@/services/key-generator'
import { Tooltip } from '@material-tailwind/react'
import { MonsterBox } from '@/app/components/monster/monster-box'

export function MonsterListBox({
  items,
  searchedKeyword,
  checkedGrades,
  checkedGradeOfAttacks,
  checkedGradeOfDefences,
  checkedGradeOfHps,
}: any) {
  const { router } = useNextDepthNavigator()
  const [monsters, setMonsters] = useState<ExtendedRSMonster[]>([...items])

  useEffect(() => {
    setMonsters(
      [...items].filter((monster) => {
        const validGrades: string[] = _.keys(_.pickBy(checkedGrades, Boolean)).map(
          (key) => MonsterGrade[key as keyof typeof MonsterGrade],
        )
        const isValidGrade = validGrades.includes(monster.grade)

        const validGradeOfAttacks: string[] = _.keys(_.pickBy(checkedGradeOfAttacks, Boolean))
        const isValidGradeOfAttack = validGradeOfAttacks.includes(monster.attack)

        const validGradeOfDefences: string[] = _.keys(_.pickBy(checkedGradeOfDefences, Boolean))
        const isValidGradeOfDefence = validGradeOfDefences.includes(monster.defence)

        const validGradeOfHps: string[] = _.keys(_.pickBy(checkedGradeOfHps, Boolean))
        const isValidGradeOfHp = validGradeOfHps.includes(monster.hp)

        const isValidKeyword = monster.name.indexOf(searchedKeyword) >= 0
        return (
          isValidGradeOfAttack &&
          isValidGradeOfDefence &&
          isValidGradeOfHp &&
          isValidGrade &&
          (searchedKeyword ? isValidKeyword : true)
        )
      }),
    )
  }, [
    checkedGradeOfAttacks,
    checkedGradeOfDefences,
    checkedGradeOfHps,
    checkedGrades,
    items,
    searchedKeyword,
  ])

  return (
    <div className="flex flex-col gap-[4px]">
      <div className="flex items-stretch gap-[10px]">
        <div className="rounded-[4px] inline-flex p-[4px] text-white bg-gray-700 border-white/50 border-dotted border">
          몬스터 - {monsters.length} / {items.length}
        </div>
        {searchedKeyword && (
          <div className="rounded-[4px] flex items-center">"{searchedKeyword}" 검색됨</div>
        )}
      </div>
      <div className="flex flex-wrap">
        {monsters.map((monster) => {
          return (
            <Tooltip
              key={createKey()}
              className="bg-white max-w-[400px] text-blue-gray-900 shadow-md border rounded"
              content={
                <div>
                  <div>{monster.name}</div>
                  {monster.desc && (
                    <>
                      <hr />
                      <div className="whitespace-pre-line">{monster.desc || ''}</div>
                    </>
                  )}
                </div>
              }
            >
              <div
                className="flex gap-[4px] border items-stretch shadow-md cursor-pointer"
                onClick={() => router.push(`/materials/${monster.name}`)}
              >
                <div className="flex items-center justify-center relative">
                  <MonsterBox monster={monster} />
                </div>
              </div>
            </Tooltip>
          )
        })}
      </div>
    </div>
  )
}

'use client'

import {
  getEquipmentBgMaskUrl,
  getEquipmentIconUrl,
  getMaterialBgFrameUrl,
  getMaterialBottomFrameUrl,
} from '@/services/utils/material-box-converter'
import React, { useEffect, useState } from 'react'
import createKey from '@/services/key-generator'
import { useNextDepthNavigator } from '@/services/navigation'
import {
  ALL_EQUIPMENTS,
  CONVERTED_ALL_EQUIPMENTS,
  RSEquipment,
  RSEquipmentType,
} from '@/const/archieve/equipment.const'
import _ from 'lodash'
import { RS_FACTION } from '@/const/character/character.enum'
import { ExtendedRSEquipment } from '@/app/equipments/equipment.type'

export function RsEquipmentList({
  checkedGrades,
  checkedFactions,
  searchedKeyword,
  checkedEquipTypes,
}: any) {
  const { router } = useNextDepthNavigator()
  const [equipments, setEquipments] = useState<ExtendedRSEquipment[]>(CONVERTED_ALL_EQUIPMENTS)

  useEffect(() => {
    setEquipments(
      [...CONVERTED_ALL_EQUIPMENTS].filter((equipment) => {
        const validGrades: string[] = _.keys(_.pickBy(checkedGrades, Boolean))
        const isValidGrade = validGrades.includes(equipment.grade)

        const validFactions: string[] = _.keys(_.pickBy(checkedFactions, Boolean)).map(
          (key) => RS_FACTION[key as keyof typeof RS_FACTION],
        )
        const isValidFaction = validFactions.includes(equipment.faction)

        const validEquipTypes: string[] = _.keys(_.pickBy(checkedEquipTypes, Boolean)).map(
          (key) => RSEquipmentType[key as keyof typeof RSEquipmentType],
        )
        const isValidEquipType = validEquipTypes.includes(equipment.type)

        const isValidKeyword = equipment.name.indexOf(searchedKeyword) >= 0
        return (
          isValidEquipType &&
          isValidGrade &&
          isValidFaction &&
          (searchedKeyword ? isValidKeyword : true)
        )
      }),
    )
  }, [checkedEquipTypes, checkedFactions, checkedGrades, searchedKeyword])

  return (
    <div className="flex flex-col gap-[4px]">
      <div className="flex items-stretch gap-[10px]">
        <div className="rounded-[4px] inline-flex p-[4px] text-white bg-gray-700 border-white/50 border-dotted border">
          장비 - {equipments.length} / {CONVERTED_ALL_EQUIPMENTS.length}
        </div>
        {searchedKeyword && (
          <div className="rounded-[4px] flex items-center">"{searchedKeyword}" 검색됨</div>
        )}
      </div>
      <div className="flex flex-col gap-[8px]">
        {equipments.map((equipment) => {
          return (
            <div
              key={createKey()}
              className="flex gap-[4px] border items-stretch shadow-md cursor-pointer"
              onClick={() => router.push(`/equipments/${equipment.name}`)}
            >
              <div className="flex items-center justify-center">
                <EquipmentBox equipment={equipment} />
              </div>
              <div className="flex flex-col p-[8px] px-[4px] gap-[4px]">
                <div className="ff-dh text-[16px] text-white text-shadow-outline">
                  {equipment.name}
                </div>
                <hr />
                <div className="whitespace-pre-line leading-tight">{equipment.desc}</div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export function EquipmentBox({ equipment }: { equipment: ExtendedRSEquipment }) {
  return (
    <div className="h-[80px] w-[80px] relative border-2">
      <img className="absolute bottom-0 z-0" src={getMaterialBgFrameUrl(equipment.grade)} />
      <div className="absolute bottom-0 z-50">
        <img className="left-0 top-0" src={getEquipmentBgMaskUrl(equipment.grade)} />
        <img className="absolute left-0 top-0 w-full" src={getEquipmentIconUrl(equipment.type)} />
      </div>
      <img className="relative z-20 rounded w-full p-[4px]" src={equipment.thumbnail} />
      <img className="absolute z-10 bottom-0" src={getMaterialBottomFrameUrl(equipment.grade)} />
    </div>
  )
}

export function EquipmentBoxResponsive({ equipment }: { equipment: ExtendedRSEquipment }) {
  return (
    <div className="relative">
      <img className="absolute bottom-0 z-0" src={getMaterialBgFrameUrl(equipment.grade)} />
      <div className="absolute bottom-0 z-50">
        <img className="left-0 top-0" src={getEquipmentBgMaskUrl(equipment.grade)} />
        <img className="absolute left-0 top-0 w-full" src={getEquipmentIconUrl(equipment.type)} />
      </div>
      <img className="relative z-20 rounded w-full p-[4px]" src={equipment.thumbnail} />
      <img className="absolute z-10 bottom-0" src={getMaterialBottomFrameUrl(equipment.grade)} />
    </div>
  )
}

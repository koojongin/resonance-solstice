'use client'

import React, { useState } from 'react'
import _ from 'lodash'
import createKey from '@/services/key-generator'
import { useNextDepthNavigator } from '@/services/navigation'
import { ALL_EQUIPMENTS, RSEquipment } from '@/const/archieve/equipment.const'
import {
  getMaterialBgFrameUrl,
  getMaterialBottomFrameUrl,
} from '@/services/utils/material-box-converter'

type ExtendedRSEquipment = RSEquipment & { name: string }
export default function EquipmentsPage() {
  const { router } = useNextDepthNavigator()
  const [equipments, setEquipments] = useState<ExtendedRSEquipment[]>(
    _.map(ALL_EQUIPMENTS, (value, key) => ({
      name: key,
      ...value,
    })),
  )
  return (
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
  )
}
function EquipmentBox({ equipment }: { equipment: ExtendedRSEquipment }) {
  return (
    <div className="h-[80px] w-[80px] relative border-2">
      <img className="absolute bottom-0 z-0" src={getMaterialBgFrameUrl(equipment.grade)} />
      <img className="relative z-20 rounded w-full p-[4px]" src={equipment.thumbnail} />
      <img className="absolute z-10 bottom-0" src={getMaterialBottomFrameUrl(equipment.grade)} />
    </div>
  )
}

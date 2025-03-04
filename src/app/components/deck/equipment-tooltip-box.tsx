'use client'

import { EquipmentBox } from '@/app/equipments/rs-equipment-list'
import React from 'react'
import { useNextDepthNavigator } from '@/services/navigation'
import { ExtendedRSEquipment } from '@/app/equipments/equipment.type'

export function EquipmentTooltipContent({ equipment }: { equipment: ExtendedRSEquipment }) {
  const { router } = useNextDepthNavigator()
  return (
    <div
      className="text-blue-gray-800 bg-white border-2 border-gray-400 p-[4px] pb-0 shadow-md shadow-gray-900 rounded cursor-pointer"
      onClick={() => {
        router.push(`/equipments/${equipment.name}`)
      }}
    >
      <div className="flex gap-[4px]">
        <EquipmentBox equipment={equipment} />
        <div className="max-w-[300px] flex flex-col gap-[4px]">
          <div className="flex gap-[4px] items-center">
            <span className="font-bold">{equipment.type} &gt;</span>
            <div className="text-shadow-outline text-white ff-dh text-[18px]">{equipment.name}</div>
          </div>
          <hr />
          <div className="whitespace-pre-line">{equipment.desc}</div>
        </div>
      </div>
      <div className="w-full text-center pt-[8px] pb-[4px] mb-0">[클릭시 고정됩니다]</div>
    </div>
  )
}

'use client'

import { useState } from 'react'
import { SORTED_ALL_EQUIPMENTS } from '@/const/archive/equipment.const'
import { DraggableTier } from '@/app/tiermaker/drop'
import { TierDropTableBox } from '@/app/components/tiermaker/tier-drop-table-box'
import { ItemBoxKind } from '@/const/item/item.enum'

const initialItems = SORTED_ALL_EQUIPMENTS.map((a, index) => ({
  id: `${index + 1}`,
  ...a,
}))

const rows: DraggableTier[] = [
  {
    id: 'tier-1',
    title: '1',
    items: [],
  },
  {
    id: 'tier-2',
    title: '2',
    items: [],
  },
  {
    id: 'tier-3',
    title: '3',
    items: [],
  },
  {
    id: 'tier-4',
    title: '4',
    items: [],
  },
  {
    id: 'tier-5',
    title: '5',
    items: [],
  },
]
export default function TierMakerEquipmentPage() {
  const [onShowItemName, setOnShowItemName] = useState<boolean>(true)

  return (
    <div className="flex flex-col gap-[10px]">
      <div>
        <div>개발중................... [윈도우 + 쉬프트 + S]로 클립보드 복사</div>
        <div className="flex items-center gap-[4px] text-white">
          <div
            className="cursor-pointer bg-green-300 p-[4px]"
            onClick={() => setOnShowItemName(true)}
          >
            이름 보이게
          </div>
          <div
            className="cursor-pointer bg-green-300 p-[4px]"
            onClick={() => setOnShowItemName(false)}
          >
            이름 안보이게
          </div>
        </div>
      </div>
      <TierDropTableBox
        type={ItemBoxKind.EQUIPMENT}
        onShowItemName={onShowItemName}
        rowItems={rows}
        items={initialItems}
      />
    </div>
  )
}

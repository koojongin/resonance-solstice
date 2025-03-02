import {
  getMaterialBgFrameUrl,
  getMaterialBottomFrameUrl,
} from '@/services/utils/material-box-converter'
import React from 'react'
import { ExtendedUnionRSItem } from '@/const/material/index.type'
import { RSItemType } from '@/const/item/item.enum'
import { EquipmentBoxResponsive } from '@/app/equipments/rs-equipment-list'
import { ExtendedRSEquipment } from '@/app/equipments/equipment.type'

export function ItemBoxResponsive({
  item,
  withoutIconPadding,
}: {
  withoutIconPadding?: boolean
  item: ExtendedUnionRSItem
}) {
  if (item.iType === RSItemType.EQUIPMENT) {
    return <EquipmentBoxResponsive equipment={item as ExtendedRSEquipment} />
  }

  // 메터리얼인데 일단 메터리얼,열차장비+나머지 다처리하도록
  return (
    <div className="relative">
      <img className="absolute bottom-0 z-0" src={getMaterialBgFrameUrl(item.grade)} />
      <img
        className="relative z-20 rounded w-full"
        src={item.thumbnail || 'https://static.hdslb.com/images/member/noface.gif'}
        style={{ padding: `${withoutIconPadding ? '0' : '4px'}` }}
      />
      <img className="absolute z-10 bottom-0" src={getMaterialBottomFrameUrl(item.grade)} />
    </div>
  )
}

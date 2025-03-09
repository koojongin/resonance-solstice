import { MATERIALS } from '@/const/material.const'
import { ALL_EQUIPMENTS } from '@/const/archive/equipment.const'
import { ExtendedUnionRSItem } from '@/const/material/index.type'

export function getItemByNameOrItem(
  itemNameOrItem: string | ExtendedUnionRSItem,
): ExtendedUnionRSItem {
  if (typeof itemNameOrItem === 'string') {
    return {
      ...(MATERIALS[itemNameOrItem] || ALL_EQUIPMENTS[itemNameOrItem]),
      name: itemNameOrItem,
    } as ExtendedUnionRSItem
  }

  return itemNameOrItem
}

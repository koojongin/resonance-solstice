import type { RSTrainEquipment } from '@/const/item/train-equipment.const'
import type { RSEquipment } from '@/const/archive/equipment.const'
import type { RSMaterial } from '@/const/material/rs-material.type'

export type UnionRSItem = RSMaterial | RSTrainEquipment | RSEquipment
export type ExtendedUnionRSItem = UnionRSItem & { name: string }

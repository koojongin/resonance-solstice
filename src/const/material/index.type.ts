import { RSTrainEquipment } from '@/const/item/train-equipment.const'
import { RSEquipment } from '@/const/archive/equipment.const'
import { RSMaterial } from '@/const/material/material.type'

export type UnionRSItem = RSMaterial | RSTrainEquipment | RSEquipment
export type ExtendedUnionRSItem = UnionRSItem & { name: string }

import type { OriginRSMaterial } from '@/const/material/origin-rs-material.type'
import { RSItemType } from '@/const/item/rs-item-type.type'

export interface RSMaterial extends OriginRSMaterial {
  iType: RSItemType
}

import type { ExtendedUnionRSItem } from '@/const/material/index.type'
import { DefaultRSItem } from '@/const/material/default-rs-item.type'
import { RSMaterialType } from '@/const/material/rs-material-type.type'
import { RSDressType } from '@/const/material/rs-dress-type.type'
import { RSItemEarnPath } from '@/const/item/rs-item-earn-path.interface'

export interface OriginRSMaterial extends DefaultRSItem {
  type?: RSMaterialType
  dressType?: RSDressType
  earnsPath?: RSItemEarnPath[]
  includedItems?: Array<string | ExtendedUnionRSItem | (ExtendedUnionRSItem & { dropRate: number })>
  isSameRate?: boolean
}

import { RS_GRADE } from '@/const/character/character.enum'
import { RSItemEarnPath, RSItemType } from '@/const/item/item.enum'

export type ExtendedRSMaterial = RSMaterial & { name: string }

export enum RSMaterialType {
  AVATAR = 'AVATAR',
  DRESS = 'DRESS',
}

export enum RSDressType {
  SET = '세트',
  SHOES = '신발',
  EYE = '눈 장식',
}

export interface DefaultRSItem {
  grade: RS_GRADE
  thumbnail: string
  desc: string
}

export interface OriginRSMaterial extends DefaultRSItem {
  type?: RSMaterialType
  dressType?: RSDressType
  earnsPath?: RSItemEarnPath[]
  includedItems?: string[]
}

export interface RSMaterial extends OriginRSMaterial {
  iType: RSItemType
}

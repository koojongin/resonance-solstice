import { RS_GRADE } from '@/const/character/character.enum'
import { RSItemEarnPath } from '@/const/archive/equipment.const'

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

export interface DefaultRsMaterial {
  grade: RS_GRADE
  thumbnail: string
  desc: string
}

export interface RSMaterial {
  grade: RS_GRADE
  thumbnail: string
  desc: string
  type?: RSMaterialType
  dressType?: RSDressType
  earnsPath?: RSItemEarnPath[]
}

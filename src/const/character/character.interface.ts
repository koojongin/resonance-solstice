import { RS_COLUMN, RS_FACTION, RS_GENDER, RS_GRADE } from '@/const/character/character.enum'

export interface RSCharacter {
  originName: string
  name: string
  grade: RS_GRADE
  column: RS_COLUMN
  faction: RS_FACTION

  thumbnail: string
  thumbnailLarge?: string

  gender: RS_GENDER
}

import { RS_COLUMN, RS_FACTION, RS_GRADE } from '@/const/character/character.enum'

export interface RSCharacter {
  name: string
  grade: RS_GRADE
  column: RS_COLUMN
  faction: RS_FACTION

  thumbnail: string
}

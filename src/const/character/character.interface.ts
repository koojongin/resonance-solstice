import { RS_COLUMN, RS_GRADE, RS_GROUP } from '@/const/character/character.enum'

export interface RSCharacter {
  name: string
  grade: RS_GRADE
  column: RS_COLUMN
  group: RS_GROUP

  thumbnail: string
}

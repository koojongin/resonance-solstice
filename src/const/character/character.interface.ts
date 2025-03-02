import { RS_COLUMN, RS_FACTION, RS_GENDER, RS_GRADE } from '@/const/character/character.enum'

const test = {
  방어: 1,
  제어: 1,
  물리: 1,
  회복: 1,
  환경: 1,
  버프: 1,
  드로우: 1,
  번개: 1,
  파생: 1,
  '비용 회복': 1,
  잔향: 1,
  '다크 아트': 1,
  불: 1,
  얼음: 1,
}

export interface RSCharacterPosition {}

export interface RSCharacter {
  originName: string
  name: string
  grade: RS_GRADE
  column: RS_COLUMN
  faction: RS_FACTION

  thumbnail: string
  thumbnailLarge?: string

  gender: RS_GENDER
  cores: EngineCore[]
}

export enum EngineCore {
  EMPTY = '엔진코어 태그 없음',
  IGNITE = '점화',
  FREEZING = '냉동',
  LIGHTNING_STRIKE = '인뢰',
}

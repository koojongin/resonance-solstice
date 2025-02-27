export enum MonsterGrade {
  ARCHNEMESIS = '강적',
  ELITE = '정예',
  NORMAL = '일반',
}

export enum MonsterStatGrade {
  SSS = 'SSS',
  SS = 'SS',
  S = 'S',
  A = 'A',
  B = 'B',
  C = 'C',
  D = 'D',
}

export enum MonsterType {
  BETULA = '베툴라 생명체',
  DORMANT = '심면자',
  HUMAN = '인간형 유닛',
  MACHINE = '기계 유닛',
  ETC = '기타',
}

export interface RSMonsterAbilityData {
  name: MonsterAbility
}
export interface RSMonster {
  detail: string
  thumbnail: string
  desc?: string
  grade: MonsterGrade
  attack: MonsterStatGrade
  defence: MonsterStatGrade
  hp: MonsterStatGrade
  type: MonsterType

  traits?: { skills: RSMonsterAbilityData[] }
  resistance?: { skills: RSMonsterAbilityData[] }
  weakness?: { skills: RSMonsterAbilityData[] }
  thumbnailFull?: string
  camp?: string
  drops?: string[]
}

export interface ExtendedRSMonster extends RSMonster {
  name: string
}

export enum MonsterAbility {
  SUMMON = '소환',
  BURN = '화상',
  CRASH = '붕괴',
  SLEEP = '수면',

  //
  FREEZING = '냉동',
  IGNITE = '점화',
  BURN_INJURY = '열상',
  LIGHTNING_STRIKE = '인뢰',
  LIGHTNING_BOLT = '낙뢰',
  SCORCHING_HEAT = '참열',
  INTERRUPTION = '중단',
  SERIOUS_INJURY = '중상',
  STUN = '기절',
  COST_ABSORPTION = '비용 흡수',
  SMASH = '격파',
  SHACKLES = '족쇄',
  RESTRAINT = '속박',
  BERSERK = '광폭',
  CURSE = '저주',
  CHAOS = '혼란',
  AIRBORNE = '에어본',
  BLAZE = '광염',
  FIRESTORM = '불바다',
  SUPER_ARMOR = '슈퍼아머',
  IMMORTAL = '무적',
  KNOCK_BACK = '넉백',
  SCORCH = '작열',
  SUICIDE_ATTACK = '자폭',
  BLOCK = '블록',
  BARRIER = '역장',
  STEALTH = '은신',
  TRANSFORMATION = '변신',
  CARD_PRINT = '카드 프린트',
}

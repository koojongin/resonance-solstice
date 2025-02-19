import { RS_GRADE } from '@/const/character/character.enum'

export interface RSMaterial {
  grade: RS_GRADE
  thumbnail: string
  desc: string
}

export const MATERIALS: { [key: string]: RSMaterial } = {
  '디지털화 사고': {
    grade: RS_GRADE.R,
    desc: `캐릭터 공명에 필요한 필수 재료.\n공명 환경을 통해 실현된 생물의 사고를 디지털화한 기술의 산물. 자체로도 사용자의 능력을 어느정도 향상시킬 수 있지만, 주로 회수된 원시적 사고 조각을 안정화하고 희석하는 '용매'로 사용됩니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/f/f6/cowr2p94urdngkfpylo5d3vb7018oze.png',
  },
  '원시적 사고': {
    grade: RS_GRADE.SR,
    desc: `캐릭터 공명에 필요한 필수 재료.\n공명 환경을 통해 실현된, 다른 생물의 사고와 직접 공명하는 기술의 산물. 비록 적일지라도 전투 중에는 훌륭한 품격이 발휘됩니다. 이 품격은 형태장에 흔적을 남기며, 이러한 흔적은 회수되어 사용자의 다양한 능력을 강화하는데 사용될 수 있습니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/7/75/h8g5j6s0d38gn32bqiom4my25fn27og.png',
  },
  '철도연맹 코인': {
    grade: RS_GRADE.SSR,
    desc: `철도연맹에서 발행하는 에너지 본위제 재화입니다. '전자표'라고도 불리고 있습니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/d/dc/fpzfzpsg7iddangr3bt2u7iwr8ksnir.png',
  },
  '모노리스 조각': {
    grade: RS_GRADE.SSR,
    desc: `베툴라 공간에서 발견된 길이, 너비, 높이가 1:2:3 비율인 검은 돌판의 일부입니다. 이 돌판이 방출하는 형태 공명은 인간의 잠재력을 촉진하여 전방위적인 진화를 이끌어냅니다. 구체적인 원리는 아직 밝혀지지 않았습니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/7/73/e6c182cprplbhwggsmqlicm15ml5a7y.png',
  },
}

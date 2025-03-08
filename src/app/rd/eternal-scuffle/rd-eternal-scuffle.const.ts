import {
  ANFIYA,
  AOBA,
  ARINA,
  CONNOR,
  DUSTIN,
  ILONA,
  JOSHUA,
  MARGIELA,
  NAYUTA,
  RINA_F,
  SOMMER,
  STELLA,
  TENNIE,
  VERLAINE,
} from '@/const/character/character.const'
import { RecommendationDeck } from '@/app/rd/rd-decks.const'

export const RECOMMENDATION_ES_DECKS: RecommendationDeck[] = [
  {
    id: '10000',
    title: '무한난투 - 소마 덱1',
    leaderName: SOMMER.name,
    characters: [
      { character: SOMMER },
      { character: JOSHUA },
      { character: STELLA },
      { character: ILONA },
      { character: DUSTIN },
    ],
    desc: '무한난투 덱',
    descLink: '',
  },
  {
    id: '10001',
    title: '무한난투 - 퍼플카드 마키라 덱 2',
    leaderName: MARGIELA.name,
    characters: [
      { character: MARGIELA },
      { character: ARINA },
      { character: STELLA },
      { character: VERLAINE },
      { character: JOSHUA },
    ],
    desc: '무한난투 덱',
    descLink: '',
  },
  {
    id: '10002',
    title: '무한난투 - 블루카드 코나 덱',
    leaderName: CONNOR.name,
    characters: [
      { character: CONNOR },
      { character: TENNIE },
      { character: STELLA },
      { character: ILONA },
      { character: NAYUTA },
    ],
    desc: '무한난투 덱',
    descLink: '',
  },
  {
    id: '10003',
    title: '무한난투 - 블루카드 코나 덱 2',
    leaderName: CONNOR.name,
    characters: [
      { character: CONNOR },
      { character: ANFIYA },
      { character: TENNIE },
      { character: STELLA },
      { character: ILONA },
    ],
    desc: '무한난투 덱',
    descLink: '',
  },
  {
    id: '10004',
    title: '무한난투 - 소마',
    leaderName: SOMMER.name,
    characters: [
      { character: SOMMER },
      { character: VERLAINE },
      { character: ARINA },
      { character: STELLA },
      { character: MARGIELA },
    ],
    desc: `덱 돌리는 우선순위
    1) 0코스트 스킬
    1-2) [베를렌] 0코스트 회복([별의 꿈])을 가장 앞에 배치
    2) [스텔라] [뭇별]
    3) 탱킹 스킬
    4) 낮은 코스트 난사
    5) 카드 드로우`,
    descLink: '',
  },
]

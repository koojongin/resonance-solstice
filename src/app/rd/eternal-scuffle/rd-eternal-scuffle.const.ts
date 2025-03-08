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
  {
    id: '10005',
    title: '무한난투 - 냉동 소마&베를렌',
    leaderName: SOMMER.name,
    characters: [
      { character: SOMMER },
      { character: VERLAINE },
      { character: DUSTIN },
      { character: STELLA },
      { character: JOSHUA },
    ],
    desc: `덱 돌리는 우선순위
    1) 0코스트 스킬
    1-2) [베를렌] 0코스트 회복([별의 꿈])을 가장 앞에 배치
    2) [스텔라] [뭇별]
    3) 탱킹 스킬
    4) 낮은 코스트 난사
    5) 카드 드로우`,
    descLink: '',
    autoPreset:
      'tVhLb9swDP4vOnuAqJetXHcK0D2A7VbkYMzaajRNPTvBNgT575Nsx6Zsx4+66amsJH6fSOoj3TNJiwcTJyb/GOfJlwPZHPOTCcgPa22TT3FGNmcCVFHKVUg2ENQGF60BjKMVkK1BI9UaLMJnQKMVLbBrhlYExYa3jWMGCJQp64A1K+gM4wiUhti19q7gXY5hQ2EDMB3Arr0zIb4CIgoce9P4jIyscQnIU5ka+zt1P1oEJEkLl5vv/zJT7n82JnOp+3x6IRsakNfjU5XL0nJbH9LiSDaPZ3IqzNc4j+0+aZesVTnh9tCfg8m3SY0Tch2Q4jnd78s/MW6zJeyJY5z/MsfqkDXN71Oaba/udwFJ7e62PIIGr64i7nAvlwAT+QBdcKYjxA2mUT2iVEYSE3H1M4VYXvfNiAA89K8O90eMfEQ2iWhreg2iAi+qTgr6iNj9QE7b4+7hXBEOiflbnrjNgJSJdc+1Q/vuYdZ+mPm6S8vOpdn0pUEtvvS6TFMFXjU7VaoRG4ej6BS6HgVbJB1OvTvS8bhbFfewE3c+J+7iRtwb0CmPiIGV+SExtC7HY+nkvhM4nycoBr30TL2rllj1pO5BzDb+Snc7uya99tx0lWLo0eAb1cVTR2NR6Xr4VXhdM5lfum7aGY7n0lBw2U811TNEE1Ud6F4oVlIAOkfCkGKCGMrGrFdcyhhSBTufLW8ZUk6r53wKkVgu4FSqpQK+cgCiqiN/08PBWsQQfMShPvmuiOBaCkYUd0dU3EdUi2aB0B8l3Hi/uJol3OpJb6HgPoUWV7OEGQ/qPWcwixj647wY7Xfjjdh9fPVGi3EZLOmPtzoJagUnDos5ldI8PhdY12vipHtfb9Oc+qntDfBWiRxO8S27/q/hZ7wvTEDy172piTStuHHbPN8mIdco7C7/AQ==',
  },
]

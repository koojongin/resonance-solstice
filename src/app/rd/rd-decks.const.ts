import {
  AOBA,
  ARCANA,
  CAROLINE,
  ELIOT,
  FENIA,
  KALEYA,
  KATAS,
  MARGIELA,
  NAYUTA,
  RINA_F,
  STELLA,
  TENNIE,
  VALENTINE,
  YEJUE,
  YER,
  YOIDUKI,
} from '@/const/character/character.const'
import { EXTERNAL_USERS, ExternalUser } from '@/const/external-users'
import { RSCharacter } from '@/const/character/character.interface'

export interface RecommendationDeck {
  title: string
  leaderName: string
  desc?: string
  descLink?: string
  characters: RSCharacter[]
  owner?: ExternalUser
}

export const RECOMMENDATION_DECKS: RecommendationDeck[] = [
  {
    title: '싼마이 페니아 인뢰덱',
    leaderName: FENIA.name,
    characters: [FENIA, CAROLINE, YEJUE, RINA_F, KALEYA],
    desc: '장점 : 싸고 맞추기 쉬움\n단점 : 싼마이인 만큼 화력이 비교적 딸림',
    descLink: 'https://arca.live/b/resonance/128678257',
    owner: EXTERNAL_USERS['1'],
  },

  {
    title: '순환 메인 페니아 인뢰덱1',
    leaderName: FENIA.name,
    characters: [FENIA, CAROLINE, NAYUTA, RINA_F, KALEYA],
    desc: '장점 : 덱순환이 빨리 딜이 쎔\n단점 : 안정성을 포기함',
    descLink: 'https://arca.live/b/resonance/128678257',
    owner: EXTERNAL_USERS['1'],
  },

  {
    title: '순환 메인 페니아 인뢰덱2',
    leaderName: FENIA.name,
    characters: [FENIA, CAROLINE, STELLA, RINA_F, KALEYA],
    desc: '장점 : [순환 메인 페니아 인뢰덱1]보다 순환력을 조금 줄이고 안정성을 챙김, 스텔라 궁쓰고 코스트 감소 상태로 카드 난사가 재밌음\n단점 : 카드 쓸 때 생각 잘해야함',
    descLink: 'https://arca.live/b/resonance/128678257',
    owner: EXTERNAL_USERS['1'],
  },

  {
    title: '안정성 메인 페니아 인뢰덱',
    leaderName: FENIA.name,
    characters: [FENIA, CAROLINE, TENNIE, RINA_F, KALEYA],
    desc: '장점 : 안정성과 적당한 순환력을 챙김\n단점 : 화력은 [순환 메인 페니아 인뢰덱1]보다 딸림',
    descLink: 'https://arca.live/b/resonance/128678257',
    owner: EXTERNAL_USERS['1'],
  },

  {
    title: '카타스 화염덱',
    leaderName: KATAS.name,
    characters: [KATAS, KALEYA, YOIDUKI, ARCANA, VALENTINE],
    desc: '장점 : 카타스만 있으면 됨, 쌈\n단점 : 다른 화염덱으로 파생이 어려움',
    descLink: 'https://arca.live/b/resonance/128678257',
    owner: EXTERNAL_USERS['1'],
  },

  {
    title: '마르기엘라덱 / 마키라덱',
    leaderName: MARGIELA.name,
    characters: [MARGIELA, KALEYA, RINA_F, ARCANA, FENIA],
    desc: '장점 : 화력 하나는 ㅈㄴ 쎔\n단점 : 순환력이나 코스트 회복력이 부족하여 답답함 유발',
    descLink: 'https://arca.live/b/resonance/128678257',
    owner: EXTERNAL_USERS['1'],
  },

  {
    title: '단일 화염 나유타 덱',
    leaderName: NAYUTA.name,
    characters: [NAYUTA, KALEYA, CAROLINE, RINA_F, AOBA],
    desc: '클릭 시 상세 가이드 링크로 이동합니다.',
    descLink:
      'https://wiki.biligame.com/resonance/%E5%8D%95%E9%87%91%E7%81%AB%E6%A0%B8%EF%BC%9A%E9%82%A3%E7%94%B1%E4%BB%96',
  },

  {
    title: '단일 냉기 나유타 덱',
    leaderName: NAYUTA.name,
    characters: [NAYUTA, ELIOT, YER, RINA_F, AOBA],
    desc: '클릭 시 상세 가이드 링크로 이동합니다.',
    descLink:
      'https://wiki.biligame.com/resonance/%E5%8D%95%E9%87%91%E5%86%B0%E6%A0%B8%EF%BC%9A%E9%82%A3%E7%94%B1%E4%BB%96',
  },

  {
    title: '페니아 인뢰덱 찐종결 올인원덱',
    leaderName: FENIA.name,
    characters: [FENIA, STELLA, CAROLINE, TENNIE, NAYUTA],
    desc: '해당 덱은 모든 캐릭터의 모든 장비와 옵션작이 되어 있는 상태이므로\n현재 실현 가능성이 매우 낮음',
    descLink: 'https://arca.live/b/resonance/129033582',
    owner: EXTERNAL_USERS['1'],
  },
]

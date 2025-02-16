import {
  AKIRA,
  AOBA,
  ARCANA,
  ARINA,
  CAROLINE,
  CHARLOTTE,
  CONNOR,
  ELIOT,
  FENIA,
  FLAN,
  JERBOA,
  KALEYA,
  KAREN,
  KATAS,
  LIVIA,
  MARGIELA,
  NAYUTA,
  PRIMING,
  RACHEL,
  RINA_F,
  SHIZURU,
  STELLA,
  TENNIE,
  VALENTINE,
  VERLAINE,
  WENSHENG,
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

  {
    title: '샬롯 덱 1',
    leaderName: CHARLOTTE.name,
    characters: [CHARLOTTE, NAYUTA, LIVIA, ARCANA, SHIZURU],
    desc: '주로 적이 많은 무대에서 활약할 수 있습니다.\n드로우 범용으로서 나유타나 스텔라 를 편성해, 한층 더 레드 카드를 드로우 하기 쉽게 시즈 르나 타라 등을 편성하면 좋을 것입니다.\n공격을 받기 쉬운 샬롯을 지킬 수 있도록 아리나,아르카나 등의 회복역도 편성합시다.',
    descLink: 'https://gamerch.com/resonance/877307',
  },

  {
    title: '샬롯 덱 2',
    leaderName: CHARLOTTE.name,
    characters: [CHARLOTTE, NAYUTA, ARINA, ARCANA, SHIZURU],
    desc: '주로 적이 많은 무대에서 활약할 수 있습니다.\n드로우 범용으로서 나유타나 스텔라 를 편성해, 한층 더 레드 카드를 드로우 하기 쉽게 시즈 르나 타라 등을 편성하면 좋을 것입니다.\n공격을 받기 쉬운 샬롯을 지킬 수 있도록 아리나,아르카나 등의 회복역도 편성합시다.',
    descLink: 'https://gamerch.com/resonance/877307',
  },

  {
    title: '초반 초보자용 무과금 덱 1',
    leaderName: FENIA.name,
    characters: [FENIA, YEJUE, LIVIA, FLAN, ARCANA],
    desc: '배포 캐릭터를 중심으로 매우 편성하기 쉬운 SR 페니아 번개 덱입니다.\n프란(R)이 탱커로 녹기 쉽기 때문에, 아르카나(R)로 HP나 코스트의 회복을 돕습니다.',
    descLink: 'https://gamerch.com/resonance/877307',
  },

  {
    title: '초반 초보자용 무과금 덱 2',
    leaderName: JERBOA.name,
    characters: [JERBOA, PRIMING, LIVIA, ARCANA, KAREN],
    desc: '네즈미(R)의 레드 카드를 끌어당기는 덱입니다.\n앞열이 버틸수 있도록 카렌(R) 등의 힐러를 편성합시다.\n타라(R)도 궁합이 좋습니다.',
    descLink: 'https://gamerch.com/resonance/877307',
  },

  {
    title: '냉기 덱 1',
    leaderName: WENSHENG.name,
    characters: [WENSHENG, TENNIE, VERLAINE, LIVIA, YER],
    desc: '동결을 사용할 수 있는 캐릭터는 많지 않기 때문에 약간 제한이 있습니다만, 동결 상태의 적은 찢어지는 것이 효과가 있기 때문에 샬롯과도 궁합이 좋을 것입니다.',
    descLink: 'https://gamerch.com/resonance/877307',
  },

  {
    title: '냉기 덱 2',
    leaderName: WENSHENG.name,
    characters: [WENSHENG, CONNOR, ELIOT, LIVIA, AKIRA],
    desc: '동결을 사용할 수 있는 캐릭터는 많지 않기 때문에 약간 제한이 있습니다만, 동결 상태의 적은 찢어지는 것이 효과가 있기 때문에 샬롯과도 궁합이 좋을 것입니다.',
    descLink: 'https://gamerch.com/resonance/877307',
  },

  {
    title: '보라 카드 덱 1',
    leaderName: MARGIELA.name,
    characters: [MARGIELA, ARINA, STELLA, NAYUTA, VERLAINE],
    desc: '마키라 의 강력한 일격으로 적을 닦을 수 있습니다.\n보라색 카드의 특징으로서 혼수 나 혼돈 등의 상태 이상 부여를 자랑으로 하는 캐릭터를 편성하고 있습니다.',
    descLink: 'https://gamerch.com/resonance/877307',
  },

  {
    title: '레드 카드 샬롯 덱',
    leaderName: CHARLOTTE.name,
    characters: [CHARLOTTE, STELLA, ELIOT, ARCANA, RACHEL],
    desc: '드로우 범용으로서 나유타,스텔라를 편성해, 한층 더 레드 카드를 드로우 하기 쉽게 시즈루, 타라 등을 편성하면 좋을 것입니다.\n공격을 받기 쉬운 샬롯을 지킬 수 있도록 아리나, 아르카나 등의 회복역도 편성합시다.',
    descLink: 'https://gamerch.com/resonance/877307',
  },
]

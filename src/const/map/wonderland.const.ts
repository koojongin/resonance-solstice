import { RSCityType, RSMap } from '@/const/map/map.interface'

export const MAP_WONDERLAND: RSMap = {
  recommendationLevel: 25,
  guideLink: 'https://arca.live/b/resonance/129437934',
  name: '골든 원더랜드',
  linkOfBili: 'https://wiki.biligame.com/resonance/%E6%B7%98%E9%87%91%E4%B9%90%E5%9B%AD',
  type: RSCityType.SMALL_CITY_RHOMBUS,
  거래소: [
    {
      name: '사금',
      isSpecialty: true,
    },
    {
      name: '마노',
      isSpecialty: true,
    },
    { name: '블랙 슬래그' },
    { name: '철광석' },
    { name: '석영사' },
  ],
  '교환 계획': [
    {
      rewards: [
        {
          name: '순금 코일 제조 가이드',
          amount: 1,
        },
      ],
      requirements: [
        {
          name: '철도연맹 코인',
          amount: 480000,
        },
        {
          name: '순금 부품',
          amount: 1,
        },
        {
          name: '도금 부품',
          amount: 5,
        },
      ],
      exchangeAmount: 1,
    },
    {
      rewards: [
        {
          name: '원기 회복 기기',
          amount: 1,
        },
      ],
      requirements: [
        {
          name: '소음 호르몬',
          amount: 10,
        },
        {
          name: '베툴라 꼬리 수염',
          amount: 10,
        },
        {
          name: '심면 뿌리',
          amount: 10,
        },
      ],
      exchangeAmount: 1,
    },
    {
      rewards: [
        {
          name: '블락 플래셔',
          amount: 1,
        },
      ],
      requirements: [
        {
          name: '소음 수액',
          amount: 5,
        },
        {
          name: '베툴라 뼈대',
          amount: 5,
        },
        {
          name: '무기 파이프라인',
          amount: 5,
        },
      ],
      exchangeAmount: 1,
    },
    {
      rewards: [
        {
          name: '임계질량',
          amount: 1,
        },
      ],
      requirements: [
        {
          name: '무기 파이프라인',
          amount: 5,
        },
        {
          name: '고전도 콘덴서',
          amount: 5,
        },
        {
          name: '소용돌이 꽃',
          amount: 5,
        },
      ],
      exchangeAmount: 1,
    },
    {
      rewards: [
        {
          name: '무의식 학습 장치',
          amount: 1,
        },
      ],
      requirements: [
        {
          name: '소음 효소',
          amount: 2,
        },
        {
          name: '소음 수액',
          amount: 5,
        },
        {
          name: '소음 호르몬',
          amount: 10,
        },
      ],
      exchangeAmount: 1,
    },
    {
      rewards: [
        {
          name: '후회의 갈고리',
          amount: 1,
        },
      ],
      requirements: [
        {
          name: '정예 뱃지',
          amount: 500,
        },
        {
          name: '박명의 가시',
          amount: 8,
        },
        {
          name: '철도연맹 코인',
          amount: 13000000,
        },
      ],
      exchangeAmount: 1,
    },
    {
      rewards: [
        {
          name: '트라페조헤드론',
          amount: 1,
        },
      ],
      requirements: [
        {
          name: '정예 뱃지',
          amount: 800,
        },
        {
          name: '유성의 눈',
          amount: 13,
        },
        {
          name: '철도연맹 코인',
          amount: 21000000,
        },
      ],
      exchangeAmount: 1,
    },
    {
      rewards: [
        {
          name: '모노리스 조각',
          amount: 1,
        },
      ],
      requirements: [
        {
          name: '소음 호르몬',
          amount: 20,
        },
      ],
      exchangeAmount: 4,
    },
    {
      rewards: [
        {
          name: '모노리스 조각',
          amount: 1,
        },
      ],
      requirements: [
        {
          name: '소음 수액',
          amount: 5,
        },
      ],
      exchangeAmount: 4,
    },
    {
      rewards: [
        {
          name: '모노리스 조각',
          amount: 1,
        },
      ],
      requirements: [
        {
          name: '소음 효소',
          amount: 1,
        },
      ],
      exchangeAmount: 4,
    },
    {
      rewards: [
        {
          name: '자동 관측 필름',
          amount: 1,
        },
      ],
      requirements: [
        {
          name: '소음 호르몬',
          amount: 20,
        },
      ],
      exchangeAmount: 10,
    },
  ],
}

import { RSExchangeItem } from '@/const/map/map.interface'

export interface VirtualRecordExchangeOrder {
  reward: RSExchangeItem
  requirements: RSExchangeItem[]
  exchangeAmount: number
}
export const VIRTUAL_RECORD_EXCHANGE_ORDERS: VirtualRecordExchangeOrder[] = [
  {
    reward: {
      name: '응? 쥬드',
      amount: 1,
    },
    requirements: [
      {
        name: '레코딩 증표',
        amount: 200,
      },
    ],
    exchangeAmount: 1,
  },
  {
    reward: {
      name: '선인장 도적',
      amount: 1,
    },
    requirements: [
      {
        name: '레코딩 증표',
        amount: 300,
      },
    ],
    exchangeAmount: 1,
  },
  {
    reward: {
      name: '움직이지 않는 미스 골드',
      amount: 1,
    },
    requirements: [
      {
        name: '레코딩 증표',
        amount: 200,
      },
    ],
    exchangeAmount: 1,
  },
  {
    reward: {
      name: '실버 열차 공예품 제작 가이드',
      amount: 1,
    },
    requirements: [
      {
        name: '레코딩 증표',
        amount: 300,
      },
    ],
    exchangeAmount: 1,
  },
  {
    reward: {
      name: '가상 환경 생성 장치',
      amount: 1,
    },
    requirements: [
      {
        name: '레코딩 증표',
        amount: 150,
      },
    ],
    exchangeAmount: 1,
  },
  {
    reward: {
      name: '가상 환경 모니터링 슈트',
      amount: 1,
    },
    requirements: [
      {
        name: '레코딩 증표',
        amount: 240,
      },
    ],
    exchangeAmount: 1,
  },
  {
    reward: {
      name: '가상 환경 전용 부츠',
      amount: 1,
    },
    requirements: [
      {
        name: '레코딩 증표',
        amount: 90,
      },
    ],
    exchangeAmount: 1,
  },
  {
    reward: {
      name: '자동 관측 필름',
      amount: 1,
    },
    requirements: [
      {
        name: '레코딩 증표',
        amount: 30,
      },
    ],
    exchangeAmount: 222,
  },
  {
    reward: {
      name: '성운상 물질(8Ti)',
      amount: 5,
    },
    requirements: [
      {
        name: '레코딩 증표',
        amount: 20,
      },
    ],
    exchangeAmount: 1,
  },
  {
    reward: {
      name: '자동 붕괴 필름-슈퍼아머 지속 시간 연장',
      amount: 1,
    },
    requirements: [
      {
        name: '레코딩 증표',
        amount: 100,
      },
    ],
    exchangeAmount: 1,
  },
  {
    reward: {
      name: '자동 붕괴 필름-자신의 확률 증가',
      amount: 1,
    },
    requirements: [
      {
        name: '레코딩 증표',
        amount: 100,
      },
    ],
    exchangeAmount: 1,
  },
  {
    reward: {
      name: '자동 붕괴 필름-리더 스킬 방어력 증가',
      amount: 1,
    },
    requirements: [
      {
        name: '레코딩 증표',
        amount: 100,
      },
    ],
    exchangeAmount: 1,
  },
  {
    reward: {
      name: '자동 붕괴 필름-방어력 증가',
      amount: 1,
    },
    requirements: [
      {
        name: '레코딩 증표',
        amount: 100,
      },
    ],
    exchangeAmount: 1,
  },
  {
    reward: {
      name: '자동 붕괴 필름-버리기 시 방어력 증가',
      amount: 1,
    },
    requirements: [
      {
        name: '레코딩 증표',
        amount: 100,
      },
    ],
    exchangeAmount: 1,
  },
  {
    reward: {
      name: '자동 붕괴 필름-받는 최종 피해 감소',
      amount: 1,
    },
    requirements: [
      {
        name: '레코딩 증표',
        amount: 100,
      },
    ],
    exchangeAmount: 1,
  },
  {
    reward: {
      name: '자동 붕괴 필름-자신의 카드 사용 시 슈퍼아머',
      amount: 1,
    },
    requirements: [
      {
        name: '레코딩 증표',
        amount: 150,
      },
    ],
    exchangeAmount: 1,
  },
  {
    reward: {
      name: '자동 붕괴 필름-리더 스킬 비용 회복',
      amount: 1,
    },
    requirements: [
      {
        name: '레코딩 증표',
        amount: 150,
      },
    ],
    exchangeAmount: 1,
  },
  {
    reward: {
      name: '자동 붕괴 필름-리더 스킬 공격력 증가',
      amount: 1,
    },
    requirements: [
      {
        name: '레코딩 증표',
        amount: 150,
      },
    ],
    exchangeAmount: 1,
  },
  {
    reward: {
      name: '자동 붕괴 필름-공격력 증가',
      amount: 1,
    },
    requirements: [
      {
        name: '레코딩 증표',
        amount: 150,
      },
    ],
    exchangeAmount: 1,
  },
  {
    reward: {
      name: '자동 붕괴 필름-버리기 시 공격력 증가',
      amount: 1,
    },
    requirements: [
      {
        name: '레코딩 증표',
        amount: 150,
      },
    ],
    exchangeAmount: 1,
  },
  {
    reward: {
      name: '자동 붕괴 필름-주는 최종 피해 증가',
      amount: 1,
    },
    requirements: [
      {
        name: '레코딩 증표',
        amount: 150,
      },
    ],
    exchangeAmount: 1,
  },
  {
    reward: {
      name: '자동 붕괴 필름-폭발 피해 증가',
      amount: 1,
    },
    requirements: [
      {
        name: '레코딩 증표',
        amount: 150,
      },
    ],
    exchangeAmount: 1,
  },
  {
    reward: {
      name: '자동 붕괴 필름-매초 비용 회복',
      amount: 1,
    },
    requirements: [
      {
        name: '레코딩 증표',
        amount: 150,
      },
    ],
    exchangeAmount: 1,
  },
  {
    reward: {
      name: '자동 붕괴 필름-버리기 시 체력 회복',
      amount: 1,
    },
    requirements: [
      {
        name: '레코딩 증표',
        amount: 150,
      },
    ],
    exchangeAmount: 1,
  },
  {
    reward: {
      name: '자동 붕괴 필름-버리기 명령 비용 회복',
      amount: 1,
    },
    requirements: [
      {
        name: '레코딩 증표',
        amount: 150,
      },
    ],
    exchangeAmount: 1,
  },
  {
    reward: {
      name: '자동 붕괴 필름-버리기 명령 쿨타임 감소',
      amount: 1,
    },
    requirements: [
      {
        name: '레코딩 증표',
        amount: 150,
      },
    ],
    exchangeAmount: 1,
  },
  {
    reward: {
      name: '자동 붕괴 필름-자신의 레드카드 공격력 증가',
      amount: 1,
    },
    requirements: [
      {
        name: '레코딩 증표',
        amount: 150,
      },
    ],
    exchangeAmount: 1,
  },
]

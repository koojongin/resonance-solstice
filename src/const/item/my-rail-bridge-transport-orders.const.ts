export interface MyRailTransportOrderItem {
  name: string
  amount: number
}
export interface MyRailTransportOrder {
  requirement: MyRailTransportOrderItem
  rewards: MyRailTransportOrderItem[]
  exchangeAmount: number
}
export const MYRAIL_TRANSPORT_ORDERS: MyRailTransportOrder[] = [
  {
    exchangeAmount: 20,
    requirement: { name: '철도연맹 코인', amount: 50000 },
    rewards: [
      {
        name: '마이레일 건설 진행도',
        amount: 50,
      },
      {
        name: '마일리지',
        amount: 25,
      },
      {
        name: `'마이레일' 건설 포인트`,
        amount: 25,
      },
    ],
  },
  {
    exchangeAmount: 10,
    requirement: { name: '레일용 특수 강재', amount: 24 },
    rewards: [
      {
        name: '마이레일 건설 진행도',
        amount: 50,
      },
      {
        name: '마일리지',
        amount: 25,
      },
      {
        name: `'마이레일' 건설 포인트`,
        amount: 25,
      },
    ],
  },
  {
    exchangeAmount: 10,
    requirement: { name: '철근 콘크리트 침목', amount: 36 },
    rewards: [
      {
        name: '마이레일 건설 진행도',
        amount: 40,
      },
      {
        name: '마일리지',
        amount: 25,
      },
      {
        name: `'마이레일' 건설 포인트`,
        amount: 25,
      },
    ],
  },
  {
    exchangeAmount: 10,
    requirement: { name: '건축자재', amount: 30 },
    rewards: [
      {
        name: '마이레일 건설 진행도',
        amount: 30,
      },
      {
        name: '마일리지',
        amount: 15,
      },
      {
        name: `'마이레일' 건설 포인트`,
        amount: 15,
      },
    ],
  },
  {
    exchangeAmount: 10,
    requirement: { name: '석재', amount: 45 },
    rewards: [
      {
        name: '마이레일 건설 진행도',
        amount: 20,
      },
      {
        name: '마일리지',
        amount: 10,
      },
      {
        name: `'마이레일' 건설 포인트`,
        amount: 10,
      },
    ],
  },
  {
    exchangeAmount: 10,
    requirement: { name: '모래와 자갈', amount: 72 },
    rewards: [
      {
        name: '마이레일 건설 진행도',
        amount: 20,
      },
      {
        name: '마일리지',
        amount: 10,
      },
      {
        name: `'마이레일' 건설 포인트`,
        amount: 10,
      },
    ],
  },
  {
    exchangeAmount: 10,
    requirement: { name: '철광석', amount: 36 },
    rewards: [
      {
        name: '마이레일 건설 진행도',
        amount: 30,
      },
      {
        name: '마일리지',
        amount: 15,
      },
      {
        name: `'마이레일' 건설 포인트`,
        amount: 15,
      },
    ],
  },
  {
    exchangeAmount: 10,
    requirement: { name: '블랙 슬래그', amount: 37 },
    rewards: [
      {
        name: '마이레일 건설 진행도',
        amount: 50,
      },
      {
        name: '마일리지',
        amount: 25,
      },
      {
        name: `'마이레일' 건설 포인트`,
        amount: 25,
      },
    ],
  },
  {
    exchangeAmount: 10,
    requirement: { name: '석영사', amount: 47 },
    rewards: [
      {
        name: '마이레일 건설 진행도',
        amount: 20,
      },
      {
        name: '마일리지',
        amount: 10,
      },
      {
        name: `'마이레일' 건설 포인트`,
        amount: 10,
      },
    ],
  },
  {
    exchangeAmount: 10,
    requirement: { name: '오염방지 보호복', amount: 11 },
    rewards: [
      {
        name: '마이레일 건설 진행도',
        amount: 50,
      },
      {
        name: '마일리지',
        amount: 25,
      },
      {
        name: `'마이레일' 건설 포인트`,
        amount: 25,
      },
    ],
  },
  {
    exchangeAmount: 10,
    requirement: { name: '티타늄 합금', amount: 11 },
    rewards: [
      {
        name: '마이레일 건설 진행도',
        amount: 40,
      },
      {
        name: '마일리지',
        amount: 20,
      },
      {
        name: `'마이레일' 건설 포인트`,
        amount: 20,
      },
    ],
  },
  {
    exchangeAmount: 10,
    requirement: { name: '탄소 섬유', amount: 18 },
    rewards: [
      {
        name: '마이레일 건설 진행도',
        amount: 40,
      },
      {
        name: '마일리지',
        amount: 25,
      },
      {
        name: `'마이레일' 건설 포인트`,
        amount: 25,
      },
    ],
  },
  {
    exchangeAmount: 10,
    requirement: { name: '방연광', amount: 29 },
    rewards: [
      {
        name: '마이레일 건설 진행도',
        amount: 40,
      },
      {
        name: '마일리지',
        amount: 25,
      },
      {
        name: `'마이레일' 건설 포인트`,
        amount: 25,
      },
    ],
  },
  {
    exchangeAmount: 10,
    requirement: { name: '흑연', amount: 37 },
    rewards: [
      {
        name: '마이레일 건설 진행도',
        amount: 30,
      },
      {
        name: '마일리지',
        amount: 15,
      },
      {
        name: `'마이레일' 건설 포인트`,
        amount: 15,
      },
    ],
  },
]

export enum RSCityType {
  CORE_CITY = '핵심 도시',
  SMALL_CITY_RHOMBUS = '소도시1',
  SMALL_CITY_SQUARE = '소도시2',
  SMALL_CITY_RECYCLE = '쓰레기 처리 도시',
}

export interface RSMapExchangeItem {
  name: string
  isSpecialty?: boolean
}

export interface RSTransportItem {
  name: string
  amount: number
}

export interface RSTransportOrder {
  rewards: RSTransportItem[]
  requirements: RSTransportItem[]
}

export interface RSMap {
  name: string
  type: RSCityType
  desc?: string
  recommendationLevel?: number
  thumbnail?: string
  guideLink?: string
  거래소?: RSMapExchangeItem[]
  '열차 무장 공장'?: any
  투자?: any[] // 관리센터,시청 /<-두개는같은걸까? 도시 투자,버추얼 레코드,레코딩 증표 교환 있음
  '눈동자 의상점'?: any
  휴게소?: any // 한잔하기,흑월 상점
  상회?: any // 운송 주문/마일리지 교환/열차 가구 상점
  '바다표범 밀크티'?: any // 마실것을 구매해서 파티원 버프 획득
  철도관리국?: any
  '관리 센터'?: any // 작전 계획,교환 계획,재료 회수,물자 운송
  // 에너지 연구 센터: 아니타 열차 테크, 아니타 에너지 테크,
  '물자 운송'?: RSTransportOrder[]

  linkOfBili?: string
}

export const ALL_NAMED_MAPS: RSMap[] = [
  {
    guideLink: 'https://arca.live/b/resonance/129304519',
    name: '청명 데이터 센터',
    linkOfBili:
      'https://wiki.biligame.com/resonance/%E6%BE%84%E6%98%8E%E6%95%B0%E6%8D%AE%E4%B8%AD%E5%BF%83',
    type: RSCityType.CORE_CITY,
    '눈동자 의상점': 1,
    휴게소: 1,
    상회: 1,
    '바다표범 밀크티': 1,
    철도관리국: 1,
    '관리 센터': 1,
    거래소: [
      {
        name: '은광석',
        isSpecialty: true,
      },
      {
        name: '게임기',
        isSpecialty: true,
      },
      {
        name: '스피커',
        isSpecialty: true,
      },
      {
        name: '게임 카트리지',
        isSpecialty: true,
      },
      { name: '녹화 테이프' },
      { name: '형광봉' },
      { name: '열차 장난감' },
      { name: '녹음 테이프' },
    ],
  },
  {
    guideLink: 'https://arca.live/b/resonance/129294257',
    name: '자유 무역항-7',
    linkOfBili: 'https://wiki.biligame.com/resonance/7%E5%8F%B7%E8%87%AA%E7%94%B1%E6%B8%AF',
    type: RSCityType.CORE_CITY,
    투자: [
      {
        price: 100000,
        rewards: [
          {
            name: '도시 명성*SR',
            amount: 50,
          },
          {
            name: '임무 의뢰서*R',
            amount: 1,
          },
          {
            name: '구매 요청서*SR',
            amount: 1,
          },
          {
            name: '재협상 신청서*SR',
            amount: 1,
          },
        ],
      },
      {
        price: 200000,
        rewards: [
          {
            name: '도시 명성*SR',
            amount: 100,
          },
          {
            name: '아니타 일반 장비함*R',
            amount: 1,
          },
          {
            name: '임무 의뢰서*R',
            amount: 1,
          },
          {
            name: '사과 박하 사탕*R',
            amount: 1,
          },
          {
            name: '구매 요청서*SR',
            amount: 2,
          },
          {
            name: '재협상 신청서*SR',
            amount: 1,
          },
          {
            name: '광고 노출권*SR',
            amount: 1,
          },
        ],
      },
      {
        price: 300000,
        rewards: [
          {
            name: '도시 명성*SR',
            amount: 150,
          },
          {
            name: '아니타 정예 장비함*SR',
            amount: 1,
          },
          {
            name: '임무 의뢰서*R',
            amount: 1,
          },
          {
            name: '일거양득*SR',
            amount: 1,
          },
          {
            name: '구매 요청서*SR',
            amount: 3,
          },
          {
            name: '재협상 신청서*SR',
            amount: 1,
          },
          {
            name: '광고 노출권*SR',
            amount: 2,
          },
        ],
      },
      {
        price: 400000,
        rewards: [
          {
            name: '도시 명성*SR',
            amount: 200,
          },
          {
            name: '아니타 탐색 장비함*SSR',
            amount: 1,
          },
          {
            name: '임무 의뢰서*R',
            amount: 1,
          },
          {
            name: '진저 릴리 향수*R',
            amount: 1,
          },
          {
            name: '구매 요청서*SR',
            amount: 4,
          },
          {
            name: '재협상 신청서*SR',
            amount: 1,
          },
          {
            name: '광고 노출권*SR',
            amount: 3,
          },
        ],
      },
      {
        price: 500000,
        rewards: [
          {
            name: '도시 명성*SR',
            amount: 250,
          },
          {
            name: '아니타 탐색 장비함*SSR',
            amount: 1,
          },
          {
            name: '임무 의뢰서*R',
            amount: 1,
          },
          {
            name: '피쉬 동맹 휘장*SSR',
            amount: 1,
          },
          {
            name: '구매 요청서*SR',
            amount: 5,
          },
          {
            name: '재협상 신청서*SR',
            amount: 1,
          },
          {
            name: '광고 노출권*SR',
            amount: 4,
          },
        ],
      },
    ],
    거래소: [
      {
        name: '전자 부품',
      },
      {
        name: '순면 티셔츠',
      },
      {
        name: '그래핀',
        isSpecialty: true,
      },
      {
        name: '크리스탈 화분',
        isSpecialty: true,
      },
      {
        name: '인조 수정꽃',
        isSpecialty: true,
      },
      { name: '항공 기념품' },
      {
        name: '블랙 타이거 새우',
        isSpecialty: true,
      },
      { name: '견과' },
      { name: '맥주' },
      { name: '천일염' },
    ],
  },
  {
    guideLink: 'https://arca.live/b/resonance/129310815',
    name: '슈그리스시',
    linkOfBili: 'https://wiki.biligame.com/resonance/%E4%BF%AE%E6%A0%BC%E9%87%8C%E5%9F%8E',
    type: RSCityType.CORE_CITY,
    거래소: [
      {
        name: '엔진',
        isSpecialty: true,
      },
      {
        name: '가전제품',
      },
      {
        name: '탄약 가속 장치',
        isSpecialty: true,
      },
      { name: '자동차 부품' },
      {
        name: '홍차',
        isSpecialty: true,
      },
      { name: '고급 식기' },
      {
        name: '와드 치킨',
        isSpecialty: true,
      },
      { name: '통조림' },
      { name: '와드 샘물' },
    ],
  },
  {
    guideLink: 'https://arca.live/b/resonance/129314531',
    name: '철도연맹 초소',
    linkOfBili: 'https://wiki.biligame.com/resonance/%E9%93%81%E7%9B%9F%E5%93%A8%E7%AB%99',
    type: RSCityType.SMALL_CITY_SQUARE,
    거래소: [
      {
        name: '탄약 가속 장치',
        isSpecialty: true,
      },
      {
        name: '철강',
        isSpecialty: true,
      },
      { name: 'C4 폭약' },
      { name: '탄알' },
      { name: '휘발유' },
      { name: '카민메이 군용식품' },
    ],
    '물자 운송': [
      {
        rewards: [
          {
            name: '철도연맹 초소 건설 진행도',
            amount: 40,
          },
          {
            name: '마일리지',
            amount: 20,
          },
        ],
        requirements: [
          {
            name: '철도연맹 코인',
            amount: 20000,
          },
        ],
      },
      {
        rewards: [
          {
            name: '철도연맹 초소 건설 진행도',
            amount: 60,
          },
          {
            name: '마일리지',
            amount: 30,
          },
        ],
        requirements: [
          {
            name: '철도연맹 코인',
            amount: 30000,
          },
        ],
      },
      {
        rewards: [
          {
            name: '철도연맹 초소 건설 진행도',
            amount: 100,
          },
          {
            name: '마일리지',
            amount: 50,
          },
        ],
        requirements: [
          {
            name: '철도연맹 코인',
            amount: 50000,
          },
        ],
      },

      {
        rewards: [
          {
            name: '철도연맹 초소 건설 진행도',
            amount: 30,
          },
          {
            name: '마일리지',
            amount: 15,
          },
        ],
        requirements: [
          {
            name: '와드 치킨',
            amount: 39,
          },
        ],
      },
      {
        rewards: [
          {
            name: '철도연맹 초소 건설 진행도',
            amount: 30,
          },
          {
            name: '마일리지',
            amount: 15,
          },
        ],
        requirements: [
          {
            name: '와드 샘물',
            amount: 60,
          },
          {
            name: '통조림',
            amount: 45,
          },
        ],
      },
      {
        rewards: [
          {
            name: '철도연맹 초소 건설 진행도',
            amount: 40,
          },
          {
            name: '마일리지',
            amount: 20,
          },
        ],
        requirements: [
          {
            name: '자동차 부품',
            amount: 24,
          },
        ],
      },
      {
        rewards: [
          {
            name: '철도연맹 초소 건설 진행도',
            amount: 50,
          },
          {
            name: '마일리지',
            amount: 25,
          },
        ],
        requirements: [
          {
            name: '홍차',
            amount: 30,
          },
        ],
      },
      {
        rewards: [
          {
            name: '철도연맹 초소 건설 진행도',
            amount: 60,
          },
          {
            name: '마일리지',
            amount: 30,
          },
        ],
        requirements: [
          {
            name: '건축자재',
            amount: 30,
          },
          {
            name: '석재',
            amount: 45,
          },
        ],
      },
      {
        rewards: [
          {
            name: '철도연맹 초소 건설 진행도',
            amount: 70,
          },
          {
            name: '마일리지',
            amount: 35,
          },
        ],
        requirements: [
          {
            name: '레일용 특수 강재',
            amount: 24,
          },
        ],
      },
      {
        rewards: [
          {
            name: '철도연맹 초소 건설 진행도',
            amount: 80,
          },
          {
            name: '마일리지',
            amount: 40,
          },
        ],
        requirements: [
          {
            name: '황동',
            amount: 30,
          },
          {
            name: '철광석',
            amount: 36,
          },
        ],
      },
      {
        rewards: [
          {
            name: '철도연맹 초소 건설 진행도',
            amount: 50,
          },
          {
            name: '마일리지',
            amount: 25,
          },
        ],
        requirements: [
          {
            name: '모래와 자갈',
            amount: 47,
          },
        ],
      },
      {
        rewards: [
          {
            name: '철도연맹 초소 건설 진행도',
            amount: 70,
          },
          {
            name: '마일리지',
            amount: 35,
          },
        ],
        requirements: [
          {
            name: '블랙 슬래그',
            amount: 37,
          },
        ],
      },
      {
        rewards: [
          {
            name: '철도연맹 초소 건설 진행도',
            amount: 90,
          },
          {
            name: '마일리지',
            amount: 45,
          },
        ],
        requirements: [
          {
            name: '맥주',
            amount: 56,
          },
          {
            name: '견과',
            amount: 42,
          },
        ],
      },
      {
        rewards: [
          {
            name: '철도연맹 초소 건설 진행도',
            amount: 90,
          },
          {
            name: '마일리지',
            amount: 45,
          },
        ],
        requirements: [
          {
            name: '전자 부품',
            amount: 21,
          },
        ],
      },
      {
        rewards: [
          {
            name: '철도연맹 초소 건설 진행도',
            amount: 130,
          },
          {
            name: '마일리지',
            amount: 65,
          },
        ],
        requirements: [
          {
            name: '리튬 배터리',
            amount: 28,
          },
        ],
      },
    ],
  },
  {
    guideLink: 'https://arca.live/b/resonance/129430420',
    desc: '슈그리 시티라는 이름의 오래된 광산은 서부 대륙에서 가장 큰 인공 광산입니다. 채굴과 거친 가공을 통합하고 레일용 특수 강철을 생산하는 것으로 유명합니다.',
    recommendationLevel: 15,
    name: '맨더 광산',
    linkOfBili: 'https://wiki.biligame.com/resonance/%E6%9B%BC%E5%BE%B7%E7%9F%BF%E5%9C%BA',
    '열차 무장 공장': [
      {
        name: '합금 임팩트 플레이트',
        materials: [
          {
            name: '정밀 부품',
            amount: 30,
          },
          {
            name: '낡은부품',
            amount: 80,
          },
          {
            name: '맨더 공구함',
            amount: 20,
          },
          {
            name: '철광석',
            amount: 20,
          },
          {
            name: '황동',
            amount: 20,
          },
        ],
      },
      {
        name: '서큘러쏘',
        materials: [
          {
            name: '대형톱니바퀴',
            amount: 3,
          },
          {
            name: '동력파이프라인',
            amount: 20,
          },
          {
            name: '정밀부품',
            amount: 50,
          },
          {
            name: '맨더공구함',
            amount: 30,
          },
          {
            name: '철강',
            amount: 30,
          },
        ],
      },
    ],
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/thumb/7/7b/jx9iwc9yuoxnxvjw7cknsdoryrbwplp.png/500px-%E6%9B%BC%E5%BE%B7%E7%9F%BF%E5%9C%BA%E7%95%8C%E9%9D%A2.png',
    type: RSCityType.CORE_CITY,
    // 퇴치: [],
    // 현상금: [],
    // 뱃지: [],
    거래소: [
      {
        name: '맨더 공구함',
        isSpecialty: true,
      },
      { name: '레일용 특수 강재' },
      { name: '황동' },
      { name: '철근 콘크리트 침묵' },
      { name: '건축자재' },
      { name: '철광석' },
      { name: '석재' },
      { name: '모래와 자갈' },
    ],
  },
  {
    name: '아니타 군수공장',
    linkOfBili:
      'https://wiki.biligame.com/resonance/%E9%98%BF%E5%A6%AE%E5%A1%94%E6%88%98%E5%A4%87%E5%B7%A5%E5%8E%82',
    type: RSCityType.SMALL_CITY_SQUARE,
    거래소: [
      {
        name: '아니타 202 군용 드론',
        isSpecialty: true,
      },
      {
        name: '티타늄 합금',
        isSpecialty: true,
      },
      {
        name: '탄소 섬유',
        isSpecialty: true,
      },
      { name: '형태 공명 조준기' },
      { name: '실리콘 철조각' },
      { name: '황동 코일' },
    ],
  },
  {
    name: '아니타 발사 센터',
    linkOfBili:
      'https://wiki.biligame.com/resonance/%E9%98%BF%E5%A6%AE%E5%A1%94%E5%8F%91%E5%B0%84%E4%B8%AD%E5%BF%83',
    type: RSCityType.CORE_CITY,
    거래소: [
      { name: '고열전도 세라믹' },
      { name: '초내열 합금' },
      {
        name: '액체산소 메탄 연료',
        isSpecialty: true,
      },
      { name: '브러시리스 모터' },
      { name: '로켓 조립 장난감' },
    ],
  },
  {
    guideLink: 'https://arca.live/b/resonance/129285060',
    name: '아니타 에너지 연구소',
    linkOfBili:
      'https://wiki.biligame.com/resonance/%E9%98%BF%E5%A6%AE%E5%A1%94%E8%83%BD%E6%BA%90%E7%A0%94%E7%A9%B6%E6%89%80',
    type: RSCityType.SMALL_CITY_RHOMBUS,
    거래소: [
      {
        name: '가정용 태양전지',
        isSpecialty: true,
      },
      { name: '리튬 배터리' },
      { name: '부직포' },
      { name: '충전 배터리' },
      {
        name: '아니타 101 민간 드론',
        isSpecialty: true,
      },
      {
        name: '그래핀 배터리',
        isSpecialty: true,
      },
      {
        name: '아니타 소형 베툴라 발전기',
        isSpecialty: true,
      },
    ],
    '물자 운송': [
      {
        rewards: [
          {
            name: '아니타 에너지 연구소 건설 진행도',
            amount: 60,
          },
          {
            name: '마일리지',
            amount: 30,
          },
        ],
        requirements: [
          {
            name: '철도연맹 코인',
            amount: 30000,
          },
        ],
      },
      {
        rewards: [
          {
            name: '아니타 에너지 연구소 건설 진행도',
            amount: 100,
          },
          {
            name: '마일리지',
            amount: 50,
          },
        ],
        requirements: [
          {
            name: '철도연맹 코인',
            amount: 50000,
          },
        ],
      },
      {
        rewards: [
          {
            name: '아니타 에너지 연구소 건설 진행도',
            amount: 160,
          },
          {
            name: '마일리지',
            amount: 80,
          },
        ],
        requirements: [
          {
            name: '철도연맹 코인',
            amount: 80000,
          },
        ],
      },
      {
        rewards: [
          {
            name: '아니타 에너지 연구소 건설 진행도',
            amount: 60,
          },
          {
            name: '마일리지',
            amount: 30,
          },
        ],
        requirements: [
          {
            name: '그래핀',
            amount: 7,
          },
        ],
      },
      {
        rewards: [
          {
            name: '아니타 에너지 연구소 건설 진행도',
            amount: 70,
          },
          {
            name: '마일리지',
            amount: 35,
          },
        ],
        requirements: [
          {
            name: '전자 부품',
            amount: 21,
          },
        ],
      },
      {
        rewards: [
          {
            name: '아니타 에너지 연구소 건설 진행도',
            amount: 140,
          },
          {
            name: '마일리지',
            amount: 70,
          },
        ],
        requirements: [
          {
            name: '자동차 부품',
            amount: 27,
          },
          {
            name: '가전제품',
            amount: 21,
          },
        ],
      },
      {
        rewards: [
          {
            name: '아니타 에너지 연구소 건설 진행도',
            amount: 150,
          },
          {
            name: '마일리지',
            amount: 75,
          },
        ],
        requirements: [
          {
            name: '탄약 가속 장치',
            amount: 18,
          },
        ],
      },

      {
        rewards: [
          {
            name: '아니타 에너지 연구소 건설 진행도',
            amount: 170,
          },
          {
            name: '마일리지',
            amount: 85,
          },
        ],
        requirements: [
          {
            name: '엔진',
            amount: 9,
          },
          {
            name: '자동차 부품',
            amount: 24,
          },
        ],
      },

      {
        rewards: [
          {
            name: '아니타 에너지 연구소 건설 진행도',
            amount: 240,
          },
          {
            name: '마일리지',
            amount: 120,
          },
        ],
        requirements: [
          {
            name: '철도연맹 코인',
            amount: 20000,
          },
          {
            name: '호박석',
            amount: 20000,
          },
          {
            name: '터키석',
            amount: 20000,
          },
        ],
      },
      {
        rewards: [
          {
            name: '아니타 에너지 연구소 건설 진행도',
            amount: 170,
          },
          {
            name: '마일리지',
            amount: 85,
          },
        ],
        requirements: [
          {
            name: '흑연',
            amount: 37,
          },
          {
            name: '방연광',
            amount: 29,
          },
        ],
      },
      {
        rewards: [
          {
            name: '아니타 에너지 연구소 건설 진행도',
            amount: 160,
          },
          {
            name: '마일리지',
            amount: 80,
          },
        ],
        requirements: [
          {
            name: '철도연맹 코인',
            amount: 20000,
          },
          {
            name: '은광석',
            amount: 10,
          },
        ],
      },
      {
        rewards: [
          {
            name: '아니타 에너지 연구소 건설 진행도',
            amount: 160,
          },
          {
            name: '마일리지',
            amount: 80,
          },
        ],
        requirements: [
          {
            name: '황동',
            amount: 30,
          },
          {
            name: '철광석',
            amount: 36,
          },
        ],
      },
      {
        rewards: [
          {
            name: '아니타 에너지 연구소 건설 진행도',
            amount: 200,
          },
          {
            name: '마일리지',
            amount: 100,
          },
        ],
        requirements: [
          {
            name: '맨더 공구함',
            amount: 27,
          },
          {
            name: '레일용 특수 강재',
            amount: 24,
          },
        ],
      },
      {
        rewards: [
          {
            name: '아니타 에너지 연구소 건설 진행도',
            amount: 220,
          },
          {
            name: '마일리지',
            amount: 110,
          },
        ],
        requirements: [
          {
            name: '사금',
            amount: 11,
          },
          {
            name: '블랙 슬래그',
            amount: 37,
          },
        ],
      },
    ],
  },
  {
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
  },
  {
    guideLink: 'https://arca.live/b/resonance/129428108',
    name: '황원역',
    linkOfBili: 'https://wiki.biligame.com/resonance/%E8%8D%92%E5%8E%9F%E7%AB%99',
    type: RSCityType.SMALL_CITY_RECYCLE,
    거래소: [
      {
        name: '호박석',
        isSpecialty: true,
      },
      {
        name: '공작석',
        isSpecialty: true,
      },
      {
        name: '목화',
        isSpecialty: true,
      },
      {
        name: '터키석',
        isSpecialty: true,
      },
      { name: '방연광' },
      { name: '흑연' },
      { name: '감자' },
    ],
    '물자 운송': [
      {
        rewards: [
          {
            name: '황원역 건설 진행도',
            amount: 60,
          },
          {
            name: '마일리지',
            amount: 30,
          },
        ],
        requirements: [
          {
            name: '석재',
            amount: 45,
          },
          {
            name: '철광석',
            amount: 36,
          },
        ],
      },
      {
        rewards: [
          {
            name: '황원역 건설 진행도',
            amount: 60,
          },
          {
            name: '마일리지',
            amount: 30,
          },
        ],
        requirements: [
          {
            name: '건축자재',
            amount: 30,
          },
          {
            name: '석재',
            amount: 45,
          },
        ],
      },
      {
        rewards: [
          {
            name: '황원역 건설 진행도',
            amount: 40,
          },
          {
            name: '마일리지',
            amount: 20,
          },
        ],
        requirements: [
          {
            name: '와드 치킨',
            amount: 39,
          },
        ],
      },

      {
        rewards: [
          {
            name: '황원역 건설 진행도',
            amount: 60,
          },
          {
            name: '마일리지',
            amount: 30,
          },
        ],
        requirements: [
          {
            name: '홍차',
            amount: 30,
          },
        ],
      },

      {
        rewards: [
          {
            name: '황원역 건설 진행도',
            amount: 40,
          },
          {
            name: '마일리지',
            amount: 20,
          },
        ],
        requirements: [
          {
            name: '철도연맹 코인',
            amount: 5000,
          },
          {
            name: '와드 샘물',
            amount: 60,
          },
        ],
      },

      {
        rewards: [
          {
            name: '황원역 건설 진행도',
            amount: 40,
          },
          {
            name: '마일리지',
            amount: 20,
          },
        ],
        requirements: [
          {
            name: '철도연맹 코인',
            amount: 5000,
          },
          {
            name: '통조림',
            amount: 45,
          },
        ],
      },

      {
        rewards: [
          {
            name: '황원역 건설 진행도',
            amount: 90,
          },
          {
            name: '마일리지',
            amount: 45,
          },
        ],
        requirements: [
          {
            name: '철도연맹 코인',
            amount: 5000,
          },
          {
            name: '맥주',
            amount: 56,
          },
        ],
      },

      {
        rewards: [
          {
            name: '황원역 건설 진행도',
            amount: 110,
          },
          {
            name: '마일리지',
            amount: 55,
          },
        ],
        requirements: [
          {
            name: '블랙 타이거 새우',
            amount: 35,
          },
        ],
      },

      {
        rewards: [
          {
            name: '황원역 건설 진행도',
            amount: 20,
          },
          {
            name: '마일리지',
            amount: 10,
          },
        ],
        requirements: [
          {
            name: '철도연맹 코인',
            amount: 10000,
          },
        ],
      },
      {
        rewards: [
          {
            name: '황원역 건설 진행도',
            amount: 40,
          },
          {
            name: '마일리지',
            amount: 20,
          },
        ],
        requirements: [
          {
            name: '철도연맹 코인',
            amount: 20000,
          },
        ],
      },
      {
        rewards: [
          {
            name: '황원역 건설 진행도',
            amount: 60,
          },
          {
            name: '마일리지',
            amount: 30,
          },
        ],
        requirements: [
          {
            name: '철도연맹 코인',
            amount: 30000,
          },
        ],
      },
      {
        rewards: [
          {
            name: '황원역 건설 진행도',
            amount: 70,
          },
          {
            name: '마일리지',
            amount: 35,
          },
        ],
        requirements: [
          {
            name: '녹음 테이프',
            amount: 50,
          },
        ],
      },

      {
        rewards: [
          {
            name: '황원역 건설 진행도',
            amount: 70,
          },
          {
            name: '마일리지',
            amount: 35,
          },
        ],
        requirements: [
          {
            name: '녹화 테이프',
            amount: 30,
          },
        ],
      },
    ],
  },
  {
    name: '운수교 기지',
    linkOfBili: 'https://wiki.biligame.com/resonance/%E4%BA%91%E5%B2%AB%E6%A1%A5%E5%9F%BA%E5%9C%B0',
    type: RSCityType.SMALL_CITY_SQUARE,
    거래소: [
      {
        name: '재봉 도구 가방',
        isSpecialty: true,
      },
      {
        name: '아마',
        isSpecialty: true,
      },
      { name: '비누' },
      { name: '오리' },
      { name: '폴리에스터' },
      { name: '면양' },
      { name: '데님' },
      { name: '자수 실' },
    ],
  },
  {
    name: '원성대교',
    linkOfBili: 'https://wiki.biligame.com/resonance/%E8%BF%9C%E6%98%9F%E5%A4%A7%E6%A1%A5',
    type: RSCityType.SMALL_CITY_RECYCLE,
  },
  {
    name: '회류 타워',
    type: RSCityType.SMALL_CITY_RHOMBUS,
    linkOfBili: 'https://wiki.biligame.com/resonance/%E6%B1%87%E6%B5%81%E5%A1%94',
  },
  {
    name: '케이프시',
    linkOfBili: 'https://wiki.biligame.com/resonance/%E6%B5%B7%E8%A7%92%E5%9F%8E',
    type: RSCityType.CORE_CITY,
    거래소: [
      {
        name: '진주',
        isSpecialty: true,
      },
      {
        name: '랍스터',
        isSpecialty: true,
      },
      { name: '캐리어' },
      { name: '야외용품' },
      { name: '갈치' },
      { name: '오징어' },
      { name: '고추' },
    ],
  },
  {
    name: '그로누시',
    type: RSCityType.CORE_CITY,
  },
  {
    name: '서우역',
    linkOfBili: 'https://wiki.biligame.com/resonance/%E6%A0%96%E7%BE%BD%E7%AB%99',
    type: RSCityType.SMALL_CITY_SQUARE,
    거래소: [
      {
        name: '다운 침낭',
        isSpecialty: true,
      },
      {
        name: '구스다운',
        isSpecialty: true,
      },
      { name: '수지' },
      { name: '소' },
      {
        name: '다운',
        isSpecialty: true,
      },
      { name: '거위' },
      { name: '오리' },
    ],
  },

  {
    name: '스톰아이시',
    linkOfBili: 'https://wiki.biligame.com/resonance/%E5%B2%9A%E5%BF%83%E5%9F%8E',
    type: RSCityType.CORE_CITY,
    거래소: [
      {
        name: '금박주',
        isSpecialty: true,
      },
      {
        name: '도검',
        isSpecialty: true,
      },
      {
        name: '접이식 부채',
        isSpecialty: true,
      },
      { name: '미술용품' },
      { name: '나또' },
      { name: '컵라면' },
    ],
  },
]

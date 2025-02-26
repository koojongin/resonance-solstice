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

export interface RSExchangeItem {
  name: string
  amount: number
}
export interface RSTransportItem extends RSExchangeItem {}
export interface RSTransportOrder {
  rewards: RSTransportItem[]
  requirements: RSTransportItem[]
}

export interface RSTrainArmoryOrder {
  exchangeAmount?: number
  rewards: RSExchangeItem[]
  requirements: RSExchangeItem[]
}

export interface RSTradeOrder {
  exchangeAmount: number
  rewards: RSExchangeItem[]
  requirements: RSExchangeItem[]
}

export interface RSMap {
  name: string
  type: RSCityType
  desc?: string
  recommendationLevel?: number
  thumbnail?: string
  guideLink?: string
  거래소?: RSMapExchangeItem[]
  교환소?: RSTradeOrder[]
  '열차 무장 교환'?: RSTrainArmoryOrder[]
  '열차 에너지 교환'?: any
  '재료 회수'?: any
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

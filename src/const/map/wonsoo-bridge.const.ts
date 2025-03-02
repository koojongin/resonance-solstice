import { RSCityType, RSMap } from '@/const/map/map.interface'

export const MAP_WOONSOO_BRIDGE: RSMap = {
  recommendationLevel: 35,
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
}

import { RSCityType, RSMap } from '@/const/map/map.interface'

export const MAP_SHUGURIS: RSMap = {
  guideLink: 'https://arca.live/b/resonance/129310815',
  name: '슈그리스시',
  linkOfBili: 'https://wiki.biligame.com/resonance/%E4%BF%AE%E6%A0%BC%E9%87%8C%E5%9F%8E',
  type: RSCityType.CORE_CITY,
  '재료 회수': [
    {
      name: '소음 효소',
      amount: 15000,
    },
    {
      name: '베툴라 원액',
      amount: 5000,
    },
    {
      name: '소음 수액',
      amount: 3600,
    },
    {
      name: '소음 호르몬',
      amount: 600,
    },
  ],
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
}

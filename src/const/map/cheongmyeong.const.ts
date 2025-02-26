import { RSCityType } from '@/const/map/map.interface'

export const MAP_CHEONGMYEONG_DATA_CENTER = {
  guideLink: 'https://arca.live/b/resonance/129304519',
  recommendationLevel: 22,
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
}

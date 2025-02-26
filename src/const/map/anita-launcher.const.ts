import { RSCityType } from '@/const/map/map.interface'

export const MAP_ANITA_LAUNCHER = {
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
}

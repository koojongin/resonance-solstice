import { SaleItemEarnType, ThumbnailDirection } from '@/app/shop/shop.enum'

export const salePackagesRecommendation = [
  {
    name: '크리스탈 트리 재배 키트',
    thumbnail:
      'https://res.cloudinary.com/dqihpypxi/image/upload/v1739760064/resonance/shop/%ED%81%AC%EB%A6%AC%EC%8A%A4%ED%83%88_%ED%8A%B8%EB%A6%AC_%EC%9E%AC%EB%B0%B0_%ED%82%A4%ED%8A%B8_j80ulh.webp',
    price: 7500,
    thumbnailDirection: ThumbnailDirection.HORIZONTAL,
    items: [
      { name: '크리스탈', amount: 300, earnType: SaleItemEarnType.DIRECT },
      { name: '크리스탈', amount: 90, earnType: SaleItemEarnType.DAILY_LOGIN },
      { name: '선인장 에너지 사탕', amount: 1, earnType: SaleItemEarnType.DAILY_LOGIN },
    ],
  },
  {
    name: '눈부신 순간',
    thumbnail:
      'https://res.cloudinary.com/dqihpypxi/image/upload/v1739760064/resonance/shop/%EB%88%88%EB%B6%80%EC%8B%A0_%EC%88%9C%EA%B0%84_drju3b.webp',
    price: 17000,
    thumbnailDirection: ThumbnailDirection.HORIZONTAL,
    items: [
      { name: '눈부신 순간', amount: 1 },
      { name: '크리스탈', amount: 680 },
    ],
  },
  {
    name: '꿈의 여정 - 개척 수첩',
    thumbnail:
      'https://res.cloudinary.com/dqihpypxi/image/upload/v1739760064/resonance/shop/%EA%BF%88%EC%9D%98_%EC%97%AC%EC%A0%95-%EB%8B%AC%EC%BD%A4%ED%95%9C_%EA%BF%88%EC%9D%98_%ED%8F%AC%ED%9A%8D%EC%9E%90_vwqu2u.webp',
    price: 17000,
    thumbnailDirection: ThumbnailDirection.HORIZONTAL,
    items: [
      { name: '크리스탈', amount: 680, earnType: SaleItemEarnType.DIRECT },
      { name: '라플라스 프로토콜', amount: 5, earnType: SaleItemEarnType.DIRECT },
      { name: '달콤한 꿈의 포획자(스킨)', amount: 1, earnType: SaleItemEarnType.DIRECT },
      { name: '선인장 에너지 풍선껌', amount: 6, earnType: SaleItemEarnType.DIRECT },
      { name: '피로 회복 풍선껌', amount: 6, earnType: SaleItemEarnType.DIRECT },
    ],
  },
  {
    name: '꿈의 여정 - 무한 수첩',
    thumbnail:
      'https://res.cloudinary.com/dqihpypxi/image/upload/v1739760064/resonance/shop/%EA%BF%88%EC%9D%98_%EC%97%AC%EC%A0%95-%EB%8B%AC%EC%BD%A4%ED%95%9C_%EA%BF%88%EC%9D%98_%ED%8F%AC%ED%9A%8D%EC%9E%90_vwqu2u.webp',
    price: 30000,
    thumbnailDirection: ThumbnailDirection.HORIZONTAL,
    items: [
      { name: '크리스탈', amount: 680, earnType: SaleItemEarnType.DIRECT },
      { name: '라플라스 프로토콜', amount: 5, earnType: SaleItemEarnType.DIRECT },
      { name: '달콤한 꿈의 포획자(스킨)', amount: 1, earnType: SaleItemEarnType.DIRECT },
      { name: '선인장 에너지 풍선껌', amount: 6, earnType: SaleItemEarnType.DIRECT },
      { name: '피로 회복 풍선껌', amount: 6, earnType: SaleItemEarnType.DIRECT },

      { name: '아리나 테마 열차 스킨', amount: 1, earnType: SaleItemEarnType.DIRECT },
      { name: '힐링 타임(캐릭터 아바타)', amount: 1, earnType: SaleItemEarnType.DIRECT },
      { name: '힐링 타임(가구)', amount: 1, earnType: SaleItemEarnType.DIRECT },
      { name: '샴고양이의 외출 가방', amount: 1, earnType: SaleItemEarnType.DIRECT },
      { name: '자동 붕괴 필름-공격력 증가', amount: 1, earnType: SaleItemEarnType.DIRECT },
      { name: '피쉬 동맹 휘장', amount: 4, earnType: SaleItemEarnType.DIRECT },
      { name: '다이나소 연구 외투(의상-세트)', amount: 1, earnType: SaleItemEarnType.DIRECT },
      { name: '다이나소 스컬(의상-머리장식)', amount: 1, earnType: SaleItemEarnType.DIRECT },
      { name: '다이나소 연구 신발(의상-신발)', amount: 1, earnType: SaleItemEarnType.DIRECT },
      { name: '우표(100)', amount: 10, earnType: SaleItemEarnType.DIRECT },
      { name: '선인장 에너지 풍선껌', amount: 5, earnType: SaleItemEarnType.DIRECT },
    ],
  },
  {
    name: '베어랜드',
    thumbnail:
      'https://res.cloudinary.com/dqihpypxi/image/upload/v1739760065/resonance/shop/%EB%B2%A0%EC%96%B4%EB%9E%9C%EB%93%9C_uptii4.webp',
    price: 30000,
    thumbnailDirection: ThumbnailDirection.HORIZONTAL,
    items: [
      { name: '베어랜드', amount: 1 },
      { name: '크리스탈', amount: 1280 },
    ],
  },
]

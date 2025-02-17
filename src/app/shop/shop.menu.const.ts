import { ShopMenu, ShopMenuName } from '@/app/shop/shop.enum'

export const saleItemsRecommendation = [
  {
    name: '크리스탈 트리 재배 키트',
    thumbnail:
      'https://res.cloudinary.com/dqihpypxi/image/upload/v1739760064/resonance/shop/%ED%81%AC%EB%A6%AC%EC%8A%A4%ED%83%88_%ED%8A%B8%EB%A6%AC_%EC%9E%AC%EB%B0%B0_%ED%82%A4%ED%8A%B8_j80ulh.webp',
    price: 7500,
  },
  {
    name: '눈부신 순간',
    thumbnail:
      'https://res.cloudinary.com/dqihpypxi/image/upload/v1739760064/resonance/shop/%EB%88%88%EB%B6%80%EC%8B%A0_%EC%88%9C%EA%B0%84_drju3b.webp',
    price: 17000,
  },
  {
    name: '달콤한 꿈의 포획자',
    thumbnail:
      'https://res.cloudinary.com/dqihpypxi/image/upload/v1739760064/resonance/shop/%EB%88%88%EB%B6%80%EC%8B%A0_%EC%88%9C%EA%B0%84_drju3b.webp',
    price: 17000,
  },
  {
    name: '베어랜드',
    thumbnail:
      'https://res.cloudinary.com/dqihpypxi/image/upload/v1739760065/resonance/shop/%EB%B2%A0%EC%96%B4%EB%9E%9C%EB%93%9C_uptii4.webp',
    price: 30000,
  },
]

export const saleItemsSpecialPackage = [
  {
    name: '크리스탈 트리 재배 키트',
    thumbnail:
      'https://res.cloudinary.com/dqihpypxi/image/upload/v1739760064/resonance/shop/%ED%81%AC%EB%A6%AC%EC%8A%A4%ED%83%88_%ED%8A%B8%EB%A6%AC_%EC%9E%AC%EB%B0%B0_%ED%82%A4%ED%8A%B8_j80ulh.webp',
    price: 0,
  },
]

export const saleItemsLimitedSkin = [
  {
    name: '크리스탈 트리 재배 키트',
    thumbnail:
      'https://res.cloudinary.com/dqihpypxi/image/upload/v1739760064/resonance/shop/%ED%81%AC%EB%A6%AC%EC%8A%A4%ED%83%88_%ED%8A%B8%EB%A6%AC_%EC%9E%AC%EB%B0%B0_%ED%82%A4%ED%8A%B8_j80ulh.webp',
    price: 0,
  },
]

export const saleItemsTrainSkin = [
  {
    name: '크리스탈 트리 재배 키트',
    thumbnail:
      'https://res.cloudinary.com/dqihpypxi/image/upload/v1739760064/resonance/shop/%ED%81%AC%EB%A6%AC%EC%8A%A4%ED%83%88_%ED%8A%B8%EB%A6%AC_%EC%9E%AC%EB%B0%B0_%ED%82%A4%ED%8A%B8_j80ulh.webp',
    price: 0,
  },
]

export const saleItemsCommandMarket = [
  {
    name: '크리스탈 트리 재배 키트',
    thumbnail:
      'https://res.cloudinary.com/dqihpypxi/image/upload/v1739760064/resonance/shop/%ED%81%AC%EB%A6%AC%EC%8A%A4%ED%83%88_%ED%8A%B8%EB%A6%AC_%EC%9E%AC%EB%B0%B0_%ED%82%A4%ED%8A%B8_j80ulh.webp',
    price: 0,
  },
]

export const SHOP_MENUS: ShopMenu[] = [
  { key: ShopMenuName.RECOMMENDATION, name: '특별 추천', saleItems: saleItemsRecommendation },
  { key: ShopMenuName.SPECIAL_PACKAGE, name: '특혜 패키지', saleItems: saleItemsSpecialPackage },
  { key: ShopMenuName.LIMITED_SKIN, name: '한정 스킨', saleItems: saleItemsLimitedSkin },
  { key: ShopMenuName.TRAIN_SKIN, name: '열차 외관', saleItems: saleItemsTrainSkin },
  { key: ShopMenuName.COMMAND_MARKET, name: '본부 상점', saleItems: saleItemsCommandMarket },
]

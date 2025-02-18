import { ShopMenuName } from '@/app/shop/shop.enum'
import { ShopMenu } from '@/app/shop/shop.interface'
import { salePackagesRecommendation } from '@/app/shop/packages/recommendation.const'
import { salePackagesCrystal } from '@/app/shop/packages/crystal.const'
import { salePackagesSpecialPackage } from '@/app/shop/packages/special.const'
import { salePackagesLimitedSkin } from '@/app/shop/packages/limited-skin.const'
import { salePackagesTrainSkin } from '@/app/shop/packages/train-skin.const'

export const salePackagesCommandMarket = []

export const ALL_SALE_PACKAGES = [
  ...salePackagesRecommendation,
  ...salePackagesCrystal,
  ...salePackagesSpecialPackage,
  ...salePackagesLimitedSkin,
  ...salePackagesTrainSkin,
  ...salePackagesCommandMarket,
]

export const SHOP_MENUS: ShopMenu[] = [
  { key: ShopMenuName.ALL, name: '전체', salePackages: ALL_SALE_PACKAGES },
  { key: ShopMenuName.RECOMMENDATION, name: '특별 추천', salePackages: salePackagesRecommendation },
  { key: ShopMenuName.CRYSTAL, name: '크리스탈', salePackages: salePackagesCrystal },
  {
    key: ShopMenuName.SPECIAL_PACKAGE,
    name: '특혜 패키지',
    salePackages: salePackagesSpecialPackage,
  },
  { key: ShopMenuName.LIMITED_SKIN, name: '한정 스킨', salePackages: salePackagesLimitedSkin },
  { key: ShopMenuName.TRAIN_SKIN, name: '열차 외관', salePackages: salePackagesTrainSkin },
  { key: ShopMenuName.COMMAND_MARKET, name: '본부 상점', salePackages: salePackagesCommandMarket },
]

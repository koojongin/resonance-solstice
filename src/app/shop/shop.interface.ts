import {
  SaleItemEarnType,
  ShopMenuName,
  ShopSaleItemType,
  ThumbnailDirection,
} from '@/app/shop/shop.enum'

export interface ShopSalePackage {
  name: string
  thumbnail: string
  thumbnailDirection: ThumbnailDirection
  price: number
  category?: string

  items?: ShopSaleItem[]
}

export interface ShopSaleItem {
  name: string
  amount: number
  desc?: string
  iType?: ShopSaleItemType
  earnType?: SaleItemEarnType
}

export interface ShopMenu {
  key: ShopMenuName
  name: string
  salePackages: ShopSalePackage[]
}

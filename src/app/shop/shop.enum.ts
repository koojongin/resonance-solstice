export enum ShopMenuName {
  RECOMMENDATION = 'recommend',
  CRYSTAL = 'crystal',
  SPECIAL_PACKAGE = 'special-package',
  LIMITED_SKIN = 'limited-skin',
  TRAIN_SKIN = 'train-skin',
  COMMAND_MARKET = 'command-market',
}

export interface ShopMenu {
  key: ShopMenuName
  name: string
  saleItems: ShopSaleItem[]
}

export enum ThumbnailDirection {
  HORIZONTAL = 'HORIZONTAL',
  VERTICAL = 'VERTICAL',
}

export interface ShopSaleItem {
  name: string
  thumbnail: string
  thumbnailDirection: ThumbnailDirection
  price: number
  category?: string
}

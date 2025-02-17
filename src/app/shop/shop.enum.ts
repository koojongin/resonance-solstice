export enum ShopMenuName {
  RECOMMENDATION = 'recommend',
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

export interface ShopSaleItem {
  name: string
  thumbnail: string
  price: number
}

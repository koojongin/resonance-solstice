'use client'

import { useParams } from 'next/navigation'
import { SHOP_MENUS } from '@/app/shop/shop.menu.const'
import createKey from '@/services/key-generator'
import { transformCImage } from '@/services/character-url'
import { useNextDepthNavigator } from '@/services/navigation'
import { ShopSalePackage } from '@/app/shop/shop.interface'

enum ShopItemViewPort {
  HORIZONTAL = 'HORIZONTAL',
  VERTICAL = 'VERTICAL',
  SQUARE = 'SQUARE',
}

export default function ShopMenuPage() {
  const { menuName } = useParams()
  const shopMenu = SHOP_MENUS.find((menu) => menu.key === menuName)!
  const { salePackages } = shopMenu

  return (
    <div className="flex flex-col gap-[10px]">
      <div className="bg-gradient-to-r from-gray-700 to-white text-white ff-dh text-[40px] p-[10px]">
        {shopMenu.name}({salePackages.length.toLocaleString()})
      </div>
      <div className="flex flex-wrap gap-[10px]">
        {salePackages.map((salePackage) => {
          const viewport: ShopItemViewPort =
            (salePackage.thumbnailDirection as unknown as ShopItemViewPort) ||
            ShopItemViewPort.HORIZONTAL
          if (viewport === ShopItemViewPort.VERTICAL)
            return <ShopItemVertical key={createKey()} salePackage={salePackage} />
          return <ShopItemHorizontal key={createKey()} salePackage={salePackage} />
        })}
      </div>
    </div>
  )
}

function ShopItemHorizontal({ salePackage }: { salePackage: ShopSalePackage }) {
  const { router } = useNextDepthNavigator()
  return (
    <div
      className="w-[200px] border rounded shadow cursor-pointer"
      onClick={() => router.push(`/shop-detail/${salePackage.name}`)}
    >
      <img src={transformCImage(salePackage.thumbnail, 400)} />
      <div className="p-[10px] ff-ng text-gray-700">
        <div className="text-[20px]">{salePackage.name}</div>
        <div className="text-right ff-dh text-[20px] text-gray-700">
          {salePackage.price.toLocaleString()}₩
        </div>
      </div>
    </div>
  )
}

function ShopItemVertical({ salePackage }: { salePackage: ShopSalePackage }) {
  const { router } = useNextDepthNavigator()
  return (
    <div
      className="w-[140px] border rounded shadow overflow-hidden cursor-pointer"
      onClick={() => router.push(`/shop-detail/${salePackage.name}`)}
    >
      <div className="h-[250px] overflow-hidden">
        <img src={transformCImage(salePackage.thumbnail, 140)} />
      </div>
      <div className="p-[10px] ff-ng text-gray-700">
        <div className="text-[16px]">{salePackage.name}</div>
        <div className="text-right ff-dh text-[20px] text-gray-700">
          {salePackage.price.toLocaleString()}₩
        </div>
      </div>
    </div>
  )
}

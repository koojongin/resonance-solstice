'use client'

import { useParams } from 'next/navigation'
import { SHOP_MENUS } from '@/app/shop/shop.menu.const'
import createKey from '@/services/key-generator'
import { ShopSaleItem } from '@/app/shop/shop.enum'
import { transformCImage } from '@/services/character-url'

enum ShopItemViewPort {
  HORIZONTAL = 'HORIZONTAL',
  VERTICAL = 'VERTICAL',
  SQUARE = 'SQUARE',
}

export default function ShopMenuPage() {
  const { menuName } = useParams()
  const shopMenu = SHOP_MENUS.find((menu) => menu.key === menuName)!
  const { saleItems } = shopMenu

  return (
    <div className="flex flex-col gap-[10px]">
      <div className="bg-gradient-to-r from-gray-700 to-white text-white ff-dh text-[40px] p-[10px]">
        {shopMenu.name}({saleItems.length.toLocaleString()})
      </div>
      <div className="flex flex-wrap gap-[10px]">
        {saleItems.map((saleItem) => {
          const viewport: ShopItemViewPort =
            (saleItem.thumbnailDirection as unknown as ShopItemViewPort) ||
            ShopItemViewPort.HORIZONTAL
          if (viewport === ShopItemViewPort.VERTICAL)
            return <ShopItemVertical key={createKey()} saleItem={saleItem} />
          return <ShopItemHorizontal key={createKey()} saleItem={saleItem} />
        })}
      </div>
    </div>
  )
}

function ShopItemHorizontal({ saleItem }: { saleItem: ShopSaleItem }) {
  return (
    <div className="w-[400px] border rounded shadow">
      <img src={transformCImage(saleItem.thumbnail, 400)} />
      <div className="p-[10px] ff-ng text-gray-700">
        <div className="text-[20px]">{saleItem.name}</div>
        <div className="text-right ff-dh text-[20px] text-gray-700">{saleItem.price}₩</div>
      </div>
    </div>
  )
}

function ShopItemVertical({ saleItem }: { saleItem: ShopSaleItem }) {
  return (
    <div className="w-[140px] border rounded shadow overflow-hidden">
      <img src={transformCImage(saleItem.thumbnail, 140)} />
      <div className="p-[10px] ff-ng text-gray-700">
        <div className="text-[16px]">{saleItem.name}</div>
        <div className="text-right ff-dh text-[20px] text-gray-700">{saleItem.price}₩</div>
      </div>
    </div>
  )
}

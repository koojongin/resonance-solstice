'use client'

import { useParams } from 'next/navigation'
import { SHOP_MENUS } from '@/app/shop/shop.menu.const'
import createKey from '@/services/key-generator'

export default function ShopMenuPage() {
  const { menuName } = useParams()
  const shopMenu = SHOP_MENUS.find((menu) => menu.key === menuName)!
  const { saleItems } = shopMenu
  return (
    <div className="flex flex-col gap-[10px]">
      <div className="bg-gradient-to-r from-gray-700 to-white text-white ff-dh text-[40px] p-[10px]">
        {shopMenu.name}
      </div>
      <div className="flex flex-wrap gap-[10px]">
        {saleItems.map((saleItem) => {
          return (
            <div key={createKey()} className="w-[400px] border rounded shadow">
              <img src={saleItem.thumbnail} />
              <div className="p-[10px] ff-ng text-gray-700">
                <div className="text-[20px]">{saleItem.name}</div>
                <div className="text-right ff-dh text-[20px] text-gray-700">{saleItem.price}₩</div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

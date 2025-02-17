'use client'

import { useNextDepthNavigator } from '@/services/navigation'
import { SHOP_MENUS } from '@/app/shop/shop.menu.const'

export function ShopHeaderBox() {
  const { router } = useNextDepthNavigator()
  return (
    <div className="flex flex-wrap gap-[4px]">
      {SHOP_MENUS.map((menu) => {
        return (
          <div
            key={menu.name}
            className="text-[20px] cursor-pointer ff-dh text-gray-700 border border-gray-400 p-[4px]"
            onClick={() => {
              router.push(`/shop/${menu.key}`)
            }}
          >
            {menu.name}
          </div>
        )
      })}
    </div>
  )
}

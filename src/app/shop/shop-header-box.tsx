'use client'

import { useNextDepthNavigator } from '@/services/navigation'
import { SHOP_MENUS } from '@/app/shop/shop.menu.const'
import { useParams } from 'next/navigation'

export function ShopHeaderBox() {
  const { router } = useNextDepthNavigator()
  const { menuName } = useParams()
  return (
    <div className="flex flex-wrap gap-[4px]">
      {SHOP_MENUS.map((menu) => {
        return (
          <div
            key={menu.name}
            className={`text-[20px] cursor-pointer ff-dh text-gray-700 border p-[4px] ${menuName === menu.key ? 'bg-blue-500 text-white border-blue-400' : 'border-gray-400'}`}
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

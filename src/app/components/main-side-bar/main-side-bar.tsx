'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import clsx from 'clsx'

export default function MainSideBar() {
  const router = useRouter()
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null)

  const dropdownCss = `absolute left-0 top-full bg-white border border-gray-300 shadow-lg z-10 min-w-[150px]`

  const menuItems = [
    {
      label: '메인',
      path: '/home',
    },
    {
      label: 'DB',
      subMenu: [
        {
          label: '캐릭터',
          path: '/characters',
        },
        {
          label: '재료',
          path: '/materials',
        },
        {
          label: '장비',
          path: '/equipments',
        },
        {
          label: '용어집',
          path: '/archive',
        },
        {
          label: '상점',
          path: '/shop/all',
        },
        {
          label: '영상',
          path: '/video',
        },
      ],
    },
    {
      label: '지역',
      path: '/map/named',
      subMenu: [
        {
          label: '지역목록',
          path: '/map/named',
        },
        {
          label: '지도',
          path: '/map',
        },
      ],
    },
    {
      label: '추천덱',
      path: '/rd',
    },
    {
      label: '티어표',
      path: '/reset-marathon/002',
      subMenu: [
        {
          label: '장비 티어',
          path: '/reset-marathon/equipment',
          className: 'text-[18px] w-[300px]',
        },
        {
          label: '02. 니콜라 출시 후(25/02/20) ~ 현재',
          path: '/reset-marathon/002',
          className: 'text-[18px] w-[300px]',
        },
        {
          label: '01. 한섭 오픈 ~ 니콜라 출시 전(25/02/20)',
          path: '/reset-marathon/001',
          className: 'text-[18px] w-[300px] text-gray-500',
        },
      ],
    },
    {
      label: '티어메이커',
      path: '/tiermaker',
    },
  ]

  return (
    <div className="relative z-50 py-[10px] text-[22px] flex cursor-pointer border-b border-gray-300 mb-[10px] ff-dh text-[18px] text-blue-gray-800">
      {menuItems.map((menu) => (
        <div
          key={menu.label}
          className="first:border-l hover:bg-gray-200 border border-l-0 border-gray-400 px-[8px] py-[4px] relative"
          onClick={() => router.push(menu.path || '')}
          onMouseEnter={() => setHoveredMenu(menu.label)}
          onMouseLeave={() => setHoveredMenu(null)}
        >
          {menu.label}
          {menu.subMenu && hoveredMenu === menu.label && (
            <div className={clsx(dropdownCss)}>
              {menu.subMenu.map((sub: any) => (
                <div
                  key={sub.label}
                  className={clsx(
                    'px-4 py-2 hover:bg-gray-100 cursor-pointer',
                    sub?.className || '',
                  )}
                  onClick={(e) => {
                    e.stopPropagation()
                    router.push(sub.path)
                  }}
                >
                  {sub.label}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

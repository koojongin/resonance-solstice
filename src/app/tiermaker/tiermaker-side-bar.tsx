'use client'

import { useParams, usePathname } from 'next/navigation'
import { useNextDepthNavigator } from '@/services/navigation'
import createKey from '@/services/key-generator'
import React from 'react'

const SIDEBAR_MENU = [
  {
    path: '/tiermaker/character',
    name: '캐릭터',
  },
  {
    path: '/tiermaker/equipment',
    name: '장비 - 승무원',
  },
  {
    path: '/tiermaker/train-equipment',
    name: '장비 - 열차',
  },
  {
    path: '/tiermaker/material',
    name: '재료',
  },
]

export function TierMakerSideBar() {
  const { router } = useNextDepthNavigator()
  const pathname = usePathname()
  const activeCss = `hover:bg-blue-gray-900 hover:text-white`

  return (
    <div className="inline-flex flex-col gap-[4px] min-w-[120px]">
      {SIDEBAR_MENU.map((menu) => {
        const isActiveMap = menu.path === pathname
        return (
          <div
            key={createKey()}
            className={`flex gap-[2px] items-center cursor-pointer p-[4px] border border-blue-gray-900 ${activeCss} ${isActiveMap && 'bg-blue-gray-900 text-white'}`}
            onClick={() => router.push(`${menu.path}`)}
          >
            {menu.name}
          </div>
        )
      })}
    </div>
  )
}

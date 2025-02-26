'use client'

import { usePathname } from 'next/navigation'
import { useNextDepthNavigator } from '@/services/navigation'
import createKey from '@/services/key-generator'
import React from 'react'

const SIDE_MENU = [
  {
    path: '/event/my-rail',
    name: '마이레일',
  },
]

export function EventMenuBox() {
  const { router } = useNextDepthNavigator()
  const pathname = usePathname()
  const activeCss = `hover:bg-blue-gray-900 hover:text-white`

  return (
    <div className="inline-flex flex-col gap-[4px] min-w-[120px]">
      {SIDE_MENU.map((menu) => {
        const isActiveMap = menu.path === pathname
        return (
          <div
            key={createKey()}
            className={`leading-tight whitespace-pre-line flex gap-[2px] items-center cursor-pointer p-[4px] border border-blue-gray-900 ${activeCss} ${isActiveMap && 'bg-blue-gray-900 text-white'}`}
            onClick={() => router.push(`${menu.path}`)}
          >
            {menu.name}
          </div>
        )
      })}
    </div>
  )
}

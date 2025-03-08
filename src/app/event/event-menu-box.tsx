'use client'

import { usePathname } from 'next/navigation'
import { useNextDepthNavigator } from '@/services/navigation'
import createKey from '@/services/key-generator'
import React from 'react'

const SIDE_MENU = [
  {
    path: '/event/black-tea-war',
    name: '홍차전쟁',
  },
  {
    path: '/event/my-rail-transport',
    name: '마이레일 운송',
  },
  {
    path: '/event/my-rail-purge',
    name: '마이레일 소탕',
  },
  {
    path: '/event/my-rail-reward',
    name: '마이레일 건설 보상',
  },

  {
    path: '/event/virtual-record/exchange',
    name: '버추얼 레코드 교환소',
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

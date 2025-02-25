'use client'

import { useParams, usePathname } from 'next/navigation'
import { useNextDepthNavigator } from '@/services/navigation'
import createKey from '@/services/key-generator'
import React from 'react'

const TRAIN_UPGRADE_MENU = [
  {
    path: '/train/train-power',
    name: '열차 전력',
  },
  {
    path: '/train/module-power-supply',
    name: '모듈 전원 공급',
  },
]

export function TrainMenuBox() {
  const { router } = useNextDepthNavigator()
  const pathname = usePathname()
  const activeCss = `hover:bg-blue-gray-900 hover:text-white`

  return (
    <div className="inline-flex flex-col gap-[4px] min-w-[120px]">
      {TRAIN_UPGRADE_MENU.map((menu) => {
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

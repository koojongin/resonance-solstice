'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import clsx from 'clsx'
import createKey from '@/services/key-generator'

export default function MainSideBar() {
  const router = useRouter()
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null)

  const dropdownCss = `absolute left-0 top-full bg-white border border-gray-300 shadow-lg z-10 min-w-[200px]`

  const menuItems = [
    {
      label: '메인',
      path: '/home',
      className: 'first:border-l',
    },
    {
      label: 'DB',
      subMenu: [
        {
          label: '승무원 명부',
          path: '/characters',
        },
        {
          label: '재료 도감',
          path: '/materials',
        },
        {
          label: '장비 도감',
          path: '/equipments',
        },
        {
          label: '몬스터 도감',
          path: '/monsters',
        },
        {
          label: '열차 무장 도감',
          path: '/train-equipments',
        },
        { isHtml: true },
        {
          label: '용어집',
          path: '/archive',
        },
        {
          label: '상점',
          path: '/shop/all',
        },
        {
          label: '열차 동력 시스템',
          path: '/train/train-power',
        },
        { isHtml: true },
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
      path: '/rd/user',
      subMenu: [
        {
          label: '유저 덱',
          path: '/rd/user',
        },
        // {
        //   label: '일반 전투 추천덱',
        //   path: '/rd',
        // },
        {
          label: '무한 난투',
          path: '/rd/eternal-scuffle',
        },
      ],
    },
    {
      label: '티어표',
      path: '/reset-marathon/002',
      subMenu: [
        {
          label: '명경지수 티어',
          path: '/reset-marathon/004',
          className: 'text-[18px] w-[300px]',
        },
        { isHtml: true },
        {
          label: '장비 티어',
          path: '/reset-marathon/equipment',
          className: 'text-[18px] w-[300px]',
        },
        { isHtml: true },
        {
          label: '해외섭 미래시 티어리스트',
          path: '/reset-marathon/003',
          className: 'text-[18px] w-[300px]',
        },
        {
          label: '02. 니콜라 출시 후(25/02/20) ~ 현재',
          path: '/reset-marathon/002',
          className: 'text-[18px] w-[300px]',
        },
        { isHtml: true },
        {
          label: '01. 한섭 오픈 ~ 니콜라 출시 전(25/02/20)',
          path: '/reset-marathon/001',
          className: 'text-[18px] w-[300px] text-gray-500',
        },
      ],
    },
    {
      label: '이벤트',
      subMenu: [
        {
          path: '/event/start-dash',
          label: '출발 체크인',
          className: 'text-[18px]',
        },
        {
          label: '홍차전쟁',
          path: '/event/black-tea-war',
          className: 'text-[18px]',
        },
        {
          label: '마이레일',
          path: '/event/my-rail-transport',
          className: 'text-[18px]',
        },
        {
          label: '버추얼 레코드',
          path: '/event/virtual-record/exchange',
          className: 'text-[18px]',
        },
        {
          label: '청명 이문록',
          path: '/event/cheongmyeong-chronicles',
          className: 'text-[18px]',
        },
        {
          label: '서머 아일랜드',
          path: '/event/summer-island',
          className: 'text-[18px]',
        },
      ],
    },
    {
      label: '도구',
      subMenu: [
        {
          label: '티어표 생성기',
          path: '/tiermaker/character',
        },
      ],
    },

    {
      label: '전체 댓글',
      path: '/comments',
      className: 'ml-auto border-l',
    },
  ]

  return (
    <div className="sm:flex-wrap relative z-[100] py-[10px] text-[22px] flex cursor-pointer border-b border-gray-300 mb-[10px] ff-dh text-[18px] text-blue-gray-800">
      {menuItems.map((menu, index) => (
        <div
          key={menu.label}
          className={clsx(
            `hover:bg-gray-200 border border-gray-400 px-[8px] py-[4px] relative ${menuItems.length - 1 !== index && 'border-l-0'}`,
            menu.className,
          )}
          onClick={() => router.push(menu.path || '')}
          onMouseEnter={() => setHoveredMenu(menu.label)}
          onMouseLeave={() => setHoveredMenu(null)}
        >
          {menu.label}
          {menu.subMenu && hoveredMenu === menu.label && (
            <div className={clsx(dropdownCss)}>
              {menu.subMenu.map((sub: any) => {
                const { isHtml } = sub
                if (isHtml) {
                  return (
                    <hr
                      key={createKey()}
                      className="border border-b-0 border-blue-gray-900 border-dashed"
                    />
                  )
                }
                return (
                  <div
                    key={sub.label}
                    className={clsx(
                      'px-[8px] py-[8px] hover:bg-gray-100 cursor-pointer',
                      sub?.className || '',
                    )}
                    onClick={(e) => {
                      e.stopPropagation()
                      router.push(sub.path)
                    }}
                  >
                    {sub.label}
                  </div>
                )
              })}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

'use client'

import { useNextDepthNavigator } from '@/services/navigation'
import { ALL_NAMED_MAPS, RSCityType } from '@/const/archive/named-map.const'
import createKey from '@/services/key-generator'
import { useParams } from 'next/navigation'
import React from 'react'

export default function MapNamedListBox() {
  const { name } = useParams()

  const decodedName = decodeURIComponent(name as string)

  const { router } = useNextDepthNavigator()
  const list = ALL_NAMED_MAPS
  const activeCss = `hover:bg-blue-gray-900 hover:text-white`

  return (
    <div className="inline-flex flex-col gap-[4px]">
      {list.map((map) => {
        const isActiveMap = map.name === decodedName
        return (
          <div
            key={createKey()}
            className={`flex gap-[2px] items-center cursor-pointer p-[4px] border border-blue-gray-900 ${activeCss} ${isActiveMap && 'bg-blue-gray-900 text-white'}`}
            onClick={() => router.push(`/map/named/${map.name}`)}
          >
            <img className="w-[20px]" src={getCityIconUrl(map.type)} />
            {map.name}
          </div>
        )
      })}
    </div>
  )
}

function getCityIconUrl(type: RSCityType) {
  if (type === RSCityType.CORE_CITY) return 'https://i.postimg.cc/cKY5J8hb/icon-city01.webp'
  if (type === RSCityType.SMALL_CITY_SQUARE) return 'https://i.postimg.cc/0yn1JR56/icon-city02.webp'
  if (type === RSCityType.SMALL_CITY_RHOMBUS)
    return 'https://i.postimg.cc/255RQc30/icon-city03.webp'
  if (type === RSCityType.SMALL_CITY_RECYCLE)
    return 'https://i.postimg.cc/4dKDMY6t/icon-city04.webp'
}

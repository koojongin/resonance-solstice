'use client'

import { useNextDepthNavigator } from '@/services/navigation'
import { ALL_NAMED_MAPS } from '@/const/archive/named-map.const'
import createKey from '@/services/key-generator'
import { useParams } from 'next/navigation'
import React from 'react'
import { RSCityType, RSMap } from '@/const/map/map.interface'
import _ from 'lodash'

export default function MapNamedListBox() {
  const { name } = useParams()

  const decodedName = decodeURIComponent(name as string)

  const { router } = useNextDepthNavigator()
  const list: RSMap[] = _.sortBy(ALL_NAMED_MAPS, 'recommendationLevel')
  const activeCss = `hover:bg-blue-gray-900 hover:text-white`

  return (
    <div className="min-w-[140px] w-[140px] inline-flex flex-col gap-[4px]">
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
  if (type === RSCityType.CORE_CITY)
    return 'https://res.cloudinary.com/dqihpypxi/image/upload/v1741782969/resonance/city/icon_city01_ahhyxe.webp'
  if (type === RSCityType.SMALL_CITY_SQUARE)
    return 'https://res.cloudinary.com/dqihpypxi/image/upload/v1741782969/resonance/city/icon_city02_nqowd3.webp'
  if (type === RSCityType.SMALL_CITY_RHOMBUS) {
    return 'https://res.cloudinary.com/dqihpypxi/image/upload/v1741782969/resonance/city/icon_city03_cs8erq.webp'
  }
  if (type === RSCityType.SMALL_CITY_RECYCLE) {
    return 'https://res.cloudinary.com/dqihpypxi/image/upload/v1741782968/resonance/city/icon_city04_scfurd.webp'
  }
}

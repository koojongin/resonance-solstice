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
  if (type === RSCityType.CORE_CITY) {
    return 'https://imgproxy.shelter.id/sig/w:67/rt:fill/Z3M6Ly9zaGVsdGVyLW1lZGlhL3UvYkI1OHJHc2Z1SU0wVEQ2SUtKNDNFTTM3Ukt4MS9pbWFnZXMvMTc0MTg2ODM1ODU3Ml83ZDg5ZTAzOC01ZmRiLTRmOGQtODA0MC05NmI4NDQ4ZmUzNTcud2VicA=='
  }
  if (type === RSCityType.SMALL_CITY_SQUARE) {
    return 'https://imgproxy.shelter.id/sig/w:37/rt:fill/Z3M6Ly9zaGVsdGVyLW1lZGlhL3UvYkI1OHJHc2Z1SU0wVEQ2SUtKNDNFTTM3Ukt4MS9pbWFnZXMvMTc0MTg2ODM1ODU3Ml84MTA3NWU1ZC0xNTY2LTQzOTAtOTgzOS1lNjM5YWU1N2YzNTUud2VicA=='
  }
  if (type === RSCityType.SMALL_CITY_RHOMBUS) {
    return 'https://imgproxy.shelter.id/sig/w:51/rt:fill/Z3M6Ly9zaGVsdGVyLW1lZGlhL3UvYkI1OHJHc2Z1SU0wVEQ2SUtKNDNFTTM3Ukt4MS9pbWFnZXMvMTc0MTg2ODM1ODU3Ml8zYjE1ZjVkZC1mYzIwLTRlMzEtOGJiMy0xNzdlM2FmZmFmNWMud2VicA=='
  }
  if (type === RSCityType.SMALL_CITY_RECYCLE) {
    return 'https://imgproxy.shelter.id/sig/w:43/rt:fill/Z3M6Ly9zaGVsdGVyLW1lZGlhL3UvYkI1OHJHc2Z1SU0wVEQ2SUtKNDNFTTM3Ukt4MS9pbWFnZXMvMTc0MTg2ODM1ODU3Ml8xZDRmMjRlNy0yOGJhLTQzNGUtOTNiNi05ZTZhNDkxZmU5OTcud2VicA=='
  }
}

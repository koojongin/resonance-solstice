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
    return 'https://imgproxy.shelter.id/sig/w:74/rt:fill/Z3M6Ly9zaGVsdGVyLW1lZGlhL3UvYkI1OHJHc2Z1SU0wVEQ2SUtKNDNFTTM3Ukt4MS9pbWFnZXMvMTc0MjEyMzI5MzI2Nl9hYWIwNGM0NC02M2ViLTQzMWQtYWMzZi03MTU1MTcxOGMwYTkucG5n'
  }
  if (type === RSCityType.SMALL_CITY_SQUARE) {
    return 'https://imgproxy.shelter.id/sig/w:42/rt:fill/Z3M6Ly9zaGVsdGVyLW1lZGlhL3UvYkI1OHJHc2Z1SU0wVEQ2SUtKNDNFTTM3Ukt4MS9pbWFnZXMvMTc0MjEyMzI5MzI2N18zNmVjMjQ4MC1mNzQ2LTQwNDYtODZhZS1hNGM3ZTM0YjUyM2YucG5n'
  }
  if (type === RSCityType.SMALL_CITY_RHOMBUS) {
    return 'https://imgproxy.shelter.id/sig/w:58/rt:fill/Z3M6Ly9zaGVsdGVyLW1lZGlhL3UvYkI1OHJHc2Z1SU0wVEQ2SUtKNDNFTTM3Ukt4MS9pbWFnZXMvMTc0MjEyMzI5MzI2N181YWNhOGU2Zi0wMzZiLTQ0NjUtYmZhMS01ZDAxMTBlNTE4NjYucG5n'
  }
  if (type === RSCityType.SMALL_CITY_RECYCLE) {
    return 'https://imgproxy.shelter.id/sig/w:48/rt:fill/Z3M6Ly9zaGVsdGVyLW1lZGlhL3UvYkI1OHJHc2Z1SU0wVEQ2SUtKNDNFTTM3Ukt4MS9pbWFnZXMvMTc0MjEyMzI5MzI2N19mYWVlYWIxMC1iYzk0LTQyM2UtYjkxMC0yYWQ1NGM2YmQ0ZmMucG5n'
  }
}

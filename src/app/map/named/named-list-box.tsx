'use client'

import { useNextDepthNavigator } from '@/services/navigation'
import { ALL_NAMED_MAPS } from '@/const/archieve/named-map.const'
import createKey from '@/services/key-generator'
import { useParams } from 'next/navigation'

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
            className={`cursor-pointer p-[4px] border border-blue-gray-900 ${activeCss} ${isActiveMap && 'bg-blue-gray-900 text-white'}`}
            onClick={() => router.push(`/map/named/${map.name}`)}
          >
            {map.name}
          </div>
        )
      })}
    </div>
  )
}

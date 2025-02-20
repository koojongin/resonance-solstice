'use client'

import createKey from '@/services/key-generator'
import { ALL_NAMED_MAPS } from '@/const/archieve/named-map.const'
import { useNextDepthNavigator } from '@/services/navigation'

export default function MapNamedPage() {
  const { router } = useNextDepthNavigator()
  const list = ALL_NAMED_MAPS
  return (
    <div className="inline-flex flex-col gap-[4px]">
      {list.map((map) => {
        return (
          <div
            key={createKey()}
            className="cursor-pointer p-[4px] border border-blue-gray-900 hover:bg-blue-gray-900 hover:text-white"
            onClick={() => router.push(`/map/named/${map.name}`)}
          >
            {map.name}
          </div>
        )
      })}
    </div>
  )
}

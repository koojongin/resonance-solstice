'use client'

import { TOTAL_ARCHIVES } from '@/const/archieve'
import React, { useState } from 'react'
import createKey from '@/services/key-generator'
import { useNextDepthNavigator } from '@/services/navigation'

export default function ArchievePage() {
  const { router } = useNextDepthNavigator()
  const [archives, setArchives] = useState(TOTAL_ARCHIVES)
  return (
    <div>
      <div>용어 모음</div>
      <div>
        {archives.map((archive) => {
          return (
            <div
              className="border-gray-500 border border-b-0 last:border-b flex cursor-pointer"
              key={createKey()}
              onClick={() => {
                router.push(`/archieve/${archive.name}`)
              }}
            >
              <div className="p-[8px] min-w-[140px] w-[140px] ff-dh text-[20px] text-shadow-outline text-white border-r border-gray-500">
                {archive.name}
              </div>
              <div className="p-[8px]">{archive.desc}</div>
              {archive?.thumbnail && (
                <div className="ml-auto flex items-center border border-gray-700 bg-blue-gray-900 m-[2px] w-[40px] min-w-[40px] border shadow-lg shadow-gray-300 rounded overflow-hidden">
                  <img className="w-full" src={archive.thumbnail} />
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

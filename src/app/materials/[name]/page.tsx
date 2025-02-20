'use client'

import { useParams } from 'next/navigation'
import { MATERIALS } from '@/const/material.const'
import React from 'react'
import {
  getMaterialBgFrameUrl,
  getMaterialBottomFrameUrl,
  SPECIALTY_FRAME_URL,
} from '@/services/utils/material-box-converter'
import { GradientHeaderDiv } from '@/app/components/div/gradient-header-div'
import { ALL_NAMED_MAPS } from '@/const/archieve/named-map.const'
import createKey from '@/services/key-generator'
import { GradientButton } from '@/app/components/button/gradient-button'
import { useNextDepthNavigator } from '@/services/navigation'

export default function MaterialDetailPage() {
  const { name } = useParams()
  const { router } = useNextDepthNavigator()

  const decodedName = decodeURIComponent(name as string)

  const material = MATERIALS[decodedName]
  if (!material) return <div>검색된 재료 데이터 없음.</div>

  const relatedMaps = ALL_NAMED_MAPS.filter((map) => {
    const exchangeItems = map['거래소'] || []
    return exchangeItems.filter((item) => item.name === decodedName).length > 0
  })

  return (
    <div className="flex flex-col gap-[10px]">
      <div className="flex flex-col gap-[4px]">
        <GradientHeaderDiv>아이템 정보</GradientHeaderDiv>
        <div className="flex items-stretch bg-gray-800/80 p-[10px] rounded shadow-md shadow-gray-600">
          <div>
            <div className="min-w-[160px] w-[160px] relative border rounded overflow-hidden shadow-md shadow-gray-600">
              <img
                className="w-full top-0 absolute z-0"
                src={getMaterialBgFrameUrl(material.grade)}
              />
              <img
                className="w-full top-0 relative z-20 rounded w-full p-[4px]"
                src={material.thumbnail}
              />
              <img
                className="w-full absolute z-10 top-0"
                src={getMaterialBottomFrameUrl(material.grade)}
              />
            </div>
          </div>
          <div className="p-[10px] pt-0 pr-0 text-white ff-dh w-full flex flex-col gap-[4px]">
            <div className="text-[20px]">{material.grade}</div>
            <div className="text-[24px]">{decodedName}</div>
            <div className="p-[10px] bg-gray-800/40 w-full min-h-[120px] rounded border-2 border-gray-700 shadow-md shadow-gray-600 ff-sdn">
              {material.desc && (
                <div className="whitespace-pre-line break-words">{material.desc}</div>
              )}
              {!material.desc && (
                <div className="whitespace-pre-line break-words">
                  아이템 세부 정보가 등록되어있지 않습니다.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <hr />

      <div>
        <GradientHeaderDiv>관련된 지역</GradientHeaderDiv>
        <div className="flex flex-wrap gap-[4px]">
          {relatedMaps.map((map) => {
            return (
              <div key={createKey()}>
                <GradientButton
                  className="cursor-pointer p-[8px] rounded shadow-lg"
                  onClick={() => router.push(`/map/named/${map.name}`)}
                >
                  {map.name}
                </GradientButton>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

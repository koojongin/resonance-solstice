'use client'

import { useParams } from 'next/navigation'
import { ALL_NAMED_MAPS } from '@/const/archieve/named-map.const'
import { GradientHeaderDiv } from '@/app/components/div/gradient-header-div'
import createKey from '@/services/key-generator'
import { MATERIALS } from '@/const/material.const'
import {
  getMaterialBgFrameUrl,
  getMaterialBottomFrameUrl,
  SPECIALTY_FRAME_URL,
} from '@/services/utils/material-box-converter'
import React from 'react'
import { useNextDepthNavigator } from '@/services/navigation'
import { GradientButton } from '@/app/components/button/gradient-button'

export default function MapNamedDetailPage() {
  const { router } = useNextDepthNavigator()
  const { name } = useParams()
  const decodedName = decodeURIComponent(name as string)
  const map = ALL_NAMED_MAPS.find((m) => m.name === decodedName)

  if (!map) return <div>검색된 지도 데이터 없음.</div>
  return (
    <div className="flex flex-col gap-[4px]">
      <div className="text-[30px] items-center flex gap-[4px]">
        {map.name}
        {map.guideLink && (
          <a href={map.guideLink} target="_blank" className="flex items-center">
            <GradientButton className="p-[4px] text-[16px] rounded shadow flex items-center gap-[4px]">
              관련 상세 가이드
              <img src="/img/icon_link.svg" className="w-[16px] bg-white rounded p-[2px]" />
            </GradientButton>
          </a>
        )}
      </div>
      {map['거래소'] && (
        <>
          <GradientHeaderDiv>거래소</GradientHeaderDiv>
          <div className="flex flex-col gap-[4px]">
            {map['거래소'].map((item) => {
              const data = MATERIALS[item.name]
              return (
                <div
                  key={createKey()}
                  onClick={() => router.push(`/materials/${item.name}`)}
                  className="cursor-pointer"
                >
                  {!data && <div>{item.name} - 등록된 아이템 세부 데이터 없음</div>}
                  {data && (
                    <div className="flex items-center">
                      <div className="w-[70px] relative border-2 shadow-md">
                        {item.isSpecialty && (
                          <img className="absolute z-10 w-[100px]" src={SPECIALTY_FRAME_URL} />
                        )}
                        <img
                          className="absolute bottom-0 z-0"
                          src={getMaterialBgFrameUrl(data.grade)}
                        />
                        <img
                          className="relative z-20 rounded w-full p-[4px]"
                          src={data.thumbnail}
                        />
                        <img
                          className="absolute z-10 bottom-0"
                          src={getMaterialBottomFrameUrl(data.grade)}
                        />
                      </div>
                      <div className="p-[4px]">{item.name}</div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </>
      )}
    </div>
  )
}

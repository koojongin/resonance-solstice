'use client'

import { useParams } from 'next/navigation'
import { ALL_NAMED_MAPS } from '@/const/archive/named-map.const'
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
import { RsTransportOrderBox } from '@/app/components/rs-transport-order-box'
import { Tooltip } from '@material-tailwind/react'
import { RsTrainArmoryExchangeBox } from '@/app/components/map/rs-train-armory-exchange-box'

export default function MapNamedDetailPage() {
  const { router } = useNextDepthNavigator()
  const { name } = useParams()
  const decodedName = decodeURIComponent(name as string)
  const map = ALL_NAMED_MAPS.find((m) => m.name === decodedName)

  if (!map) return <div>검색된 지도 데이터 없음.</div>
  return (
    <div className="flex flex-col gap-[10px]">
      <div>
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
          {map.linkOfBili && (
            <a href={map.linkOfBili} target="_blank" className="flex items-center">
              <img
                className="w-[30px] rounded-full border-[2px] bg-white"
                src="https://i.namu.wiki/i/Htm3agI9gCwVit30zTszHsEBK1ZRxVIeNPG5otPB3ocbEI5yHjWjfnVTNZWwBTRhlG8CUPJZdYEdkyDRlN-ktBrfbW5lRv6wLrGUHQYHxVJOtvoQjHnTRTRiDgPSSi0qd_jRYZQOjq-X-4Gwixb1OA.svg"
              />
            </a>
          )}
        </div>
        {map.recommendationLevel && <div>추천 레벨:{map.recommendationLevel}</div>}
      </div>
      <div className="flex flex-col gap-[15px]">
        <div>
          {map['거래소'] && (
            <>
              <GradientHeaderDiv>거래소</GradientHeaderDiv>
              <div className="flex flex-wrap gap-[4px]">
                {map['거래소'].map((item) => {
                  const material = MATERIALS[item.name]
                  return (
                    <Tooltip key={createKey()} content={<div>{item.name}</div>}>
                      <div
                        onClick={() => router.push(`/materials/${item.name}`)}
                        className="cursor-pointer border rounded shadow-md"
                      >
                        {!material && <div>{item.name}</div>}
                        {material && (
                          <div className="flex flex-col items-center w-[70px]">
                            <div className="relative border-2 shadow-md">
                              {item.isSpecialty && (
                                <img
                                  className="absolute z-10 w-[100px]"
                                  src={SPECIALTY_FRAME_URL}
                                />
                              )}
                              <img
                                className="absolute bottom-0 z-0"
                                src={getMaterialBgFrameUrl(material.grade)}
                              />
                              <img
                                className="relative z-20 rounded w-full p-[4px]"
                                src={material.thumbnail}
                              />
                              <img
                                className="absolute z-10 bottom-0"
                                src={getMaterialBottomFrameUrl(material.grade)}
                              />
                            </div>
                            <div className="p-[4px] truncate w-full text-center">{item.name}</div>
                          </div>
                        )}
                      </div>
                    </Tooltip>
                  )
                })}
              </div>
            </>
          )}
        </div>

        {map['열차 무장 교환'] && (
          <div>
            <RsTrainArmoryExchangeBox trainArmoryOrders={map['열차 무장 교환']} />
          </div>
        )}

        {map['물자 운송'] && (
          <div>
            <RsTransportOrderBox transportOrders={map['물자 운송']} />
          </div>
        )}
      </div>
    </div>
  )
}

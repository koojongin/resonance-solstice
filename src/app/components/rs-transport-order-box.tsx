'use client'

import { ALL_NAMED_MAPS } from '@/const/archive/named-map.const'
import { GradientHeaderDiv } from '@/app/components/div/gradient-header-div'
import createKey from '@/services/key-generator'
import React from 'react'
import { MATERIALS } from '@/const/material.const'
import { formatNumber } from '@/services/utils/number.formatter'
import { Tooltip } from '@material-tailwind/react'
import { useNextDepthNavigator } from '@/services/navigation'
import { MaterialBoxResponsive } from '@/app/components/material/material-box'
import { RSTransportOrder } from '@/const/map/map.interface'

export function RsTransportOrderBox({ transportOrders }: { transportOrders: RSTransportOrder[] }) {
  const { router } = useNextDepthNavigator()
  return (
    <>
      <GradientHeaderDiv className="flex items-center gap-[4px]">
        물자 운송
        <Tooltip content="해당 목록은 특정 [물자 주문]을 수행 후 개방되는 항목이 포함되어 있습니다.">
          <i className="fa-solid fa-circle-question text-[20px] cursor-pointer" />
        </Tooltip>
      </GradientHeaderDiv>
      <div className="flex flex-col">
        <div className="flex overflow-hidden bg-blue-800 border-2 border-blue-800 shadow-md text-white">
          <div className="flex min-w-[70px] items-center justify-center p-[4px]">주문 번호</div>
          <div className="flex items-center justify-center min-w-[120px] p-[4px]">보상</div>
          <div className="flex items-center justify-start flex-1 p-[4px]">요구 품목</div>
        </div>
        {transportOrders.map((order, index) => {
          return (
            <div key={createKey()} className="flex shadow-md border-t">
              <div className="flex flex-col gap-[4px] min-w-[70px] bg-blue-700 text-white items-center justify-center p-[4px]">
                <div className="ff-dh text-[20px]">주문 {index + 1}</div>
              </div>
              <div className="flex flex-col bg-blue-gray-200 min-w-[100px] p-[4px]">
                <div className="flex gap-[2px] p-[2px]">
                  {order.rewards.map((reward) => {
                    const material = {
                      ...MATERIALS[reward.name],
                      name: reward.name,
                    }
                    return (
                      <Tooltip key={createKey()} content={material.name}>
                        <div
                          className="border m-[1px] cursor-pointer"
                          onClick={() => {
                            router.push(`/materials/${material.name}`)
                          }}
                        >
                          <div className="w-[50px] relative">
                            <MaterialBoxResponsive material={material} />
                            <div className="absolute right-0 bottom-0 p-[1px] text-center z-20 text-shadow-outline text-white ff-dh">
                              {formatNumber(reward.amount)}
                            </div>
                          </div>
                        </div>
                      </Tooltip>
                    )
                  })}
                </div>
              </div>
              <div className="flex flex-col bg-blue-gray-400 flex-1 p-[4px]">
                <div className="flex flex-wrap gap-[2px] p-[2px]">
                  {order.requirements.map((requirement) => {
                    const material = {
                      ...MATERIALS[requirement.name],
                      name: requirement.name,
                    }

                    const relatedMaps = ALL_NAMED_MAPS.filter((map) => {
                      const exchangeItems = map['거래소'] || []
                      return exchangeItems.filter((item) => item.name === material.name).length > 0
                    })

                    return (
                      <Tooltip
                        key={createKey()}
                        content={
                          <div>
                            <div>{material.name}</div>
                            <div>
                              {relatedMaps.map((map) => {
                                return <div key={createKey()}>- {map.name}</div>
                              })}
                            </div>
                          </div>
                        }
                      >
                        <div
                          className="border m-[1px] cursor-pointer"
                          onClick={() => {
                            router.push(`/materials/${material.name}`)
                          }}
                        >
                          <div className="w-[50px] relative">
                            <MaterialBoxResponsive material={material} withoutIconPadding />
                            <div className="absolute right-0 bottom-0 p-[1px] text-center z-20 text-shadow-outline text-white ff-dh">
                              {formatNumber(requirement.amount)}
                            </div>
                          </div>
                        </div>
                      </Tooltip>
                    )
                  })}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

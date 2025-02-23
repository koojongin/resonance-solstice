'use client'

import { ALL_NAMED_MAPS, RSTransportOrder } from '@/const/archive/named-map.const'
import { GradientHeaderDiv } from '@/app/components/div/gradient-header-div'
import createKey from '@/services/key-generator'
import React from 'react'
import { MATERIALS } from '@/const/material.const'
import { formatNumber } from '@/services/utils/number.formatter'
import { Tooltip } from '@material-tailwind/react'
import { useNextDepthNavigator } from '@/services/navigation'
import { MaterialBoxResponsive } from '@/app/components/material/material-box'

export function RsTransportOrderBox({ transportOrders }: { transportOrders: RSTransportOrder[] }) {
  const { router } = useNextDepthNavigator()
  return (
    <>
      <GradientHeaderDiv>물자 운송</GradientHeaderDiv>
      <div className="flex flex-col gap-[4px]">
        {transportOrders.map((order, index) => {
          return (
            <div
              key={createKey()}
              className="flex rounded overflow-hidden border-2 border-blue-400 shadow-md"
            >
              <div className="flex flex-col gap-[4px] w-[100px] bg-blue-600 text-white items-center justify-center p-[4px]">
                <div className="text-[24px] ff-dh">{index + 1}</div>
                <div className="ff-dh text-[20px]">물자 주문</div>
              </div>
              <div className="flex flex-col bg-blue-gray-700">
                <div className="text-center text-white py-[4px] min-w-[155px] bg-blue-gray-900 m-[2px] mb-0 shadow-md shadow-blue-gray-900">
                  요구 사항
                </div>
                <div className="flex gap-[2px] p-[2px]">
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
                          <div className="w-[70px] relative">
                            <MaterialBoxResponsive material={material} />
                            <div className="absolute right-0 bottom-0 p-[4px] text-center z-20 text-shadow-outline text-white ff-dh">
                              {formatNumber(requirement.amount)}
                            </div>
                          </div>
                        </div>
                      </Tooltip>
                    )
                  })}
                </div>
              </div>
              <div className="flex flex-col bg-blue-gray-400">
                <div className="text-center text-white py-[4px] min-w-[155px] bg-light-green-800 m-[2px] mb-0 shadow-md shadow-blue-gray-900">
                  보상
                </div>
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
                          <div className="w-[70px] relative">
                            <MaterialBoxResponsive material={material} />
                            <div className="absolute right-0 bottom-0 p-[4px] text-center z-20 text-shadow-outline text-white ff-dh">
                              {formatNumber(reward.amount)}
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

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
import { RSTrainArmoryOrder } from '@/const/map/map.interface'
import { TRAIN_EQUIPMENTS } from '@/const/item/train-equipment.const'

export function RsTrainArmoryExchangeBox({
  trainArmoryOrders,
}: {
  trainArmoryOrders: RSTrainArmoryOrder[]
}) {
  const { router } = useNextDepthNavigator()
  return (
    <>
      <GradientHeaderDiv className="flex items-center gap-[4px]">열차 무장 교환</GradientHeaderDiv>
      <div className="flex flex-col">
        <div className="flex overflow-hidden bg-blue-800 border-2 border-blue-800 shadow-md text-white">
          <div className="flex min-w-[40px] w-[40px] items-center justify-center p-[4px] relative">
            번호
            <div className="absolute inset-0 border-r border-dashed" />
          </div>
          <div className="flex min-w-[40px] w-[40px] items-center justify-center p-[4px] relative">
            <div className="absolute inset-0 border-l border-dashed" />
            횟수
            <div className="absolute inset-0 border-r border-dashed" />
          </div>
          <div className="flex w-full items-center justify-center relative min-w-[120px]">
            <div className="absolute inset-0 border-l border-dashed" />
            요구 품목
            <div className="absolute inset-0 border-r border-dashed" />
          </div>
          <div className="flex min-w-[100px] items-center justify-center relative">
            <div className="absolute inset-0 border-l border-dashed" />
            보상
          </div>
        </div>
        {trainArmoryOrders.map((order, index) => {
          return (
            <div
              key={createKey()}
              className="flex rounded overflow-hidden border-2 border-blue-400 shadow-md"
            >
              <div className="flex flex-col gap-[4px] min-w-[40px] w-[40px] bg-blue-600 text-white items-center justify-center p-[4px]">
                <div className="ff-dh text-[20px]">{index + 1}</div>
              </div>
              <div className="flex min-w-[40px] w-[40px] items-center justify-center bg-blue-500 p-[4px] relative">
                <div className="ff-dh text-[20px] text-yellow-400 flex items-center justify-center">
                  {order.exchangeAmount && order.exchangeAmount.toLocaleString()}
                  {!order.exchangeAmount && '∞'}
                </div>
              </div>
              <div className="flex flex-col bg-blue-gray-700 w-full min-w-[120px]">
                {/* <div className="text-center text-white py-[4px] min-w-[155px] bg-blue-gray-900 m-[2px] mb-0 shadow-md shadow-blue-gray-900"> */}
                {/*   요구 사항 */}
                {/* </div> */}
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
              <div className="flex flex-col bg-blue-gray-400 min-w-[100px]">
                {/* <div className="text-center text-white py-[4px] min-w-[155px] bg-light-green-800 m-[2px] mb-0 shadow-md shadow-blue-gray-900"> */}
                {/*   보상 */}
                {/* </div> */}
                <div className="flex gap-[2px] p-[2px]">
                  {order.rewards.map((reward) => {
                    const material = {
                      ...(MATERIALS[reward.name] || TRAIN_EQUIPMENTS[reward.name]),
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
                            <MaterialBoxResponsive material={material} withoutIconPadding />
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
            </div>
          )
        })}
      </div>
    </>
  )
}

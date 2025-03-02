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
import { RSTradeOrder } from '@/const/map/map.interface'
import { ALL_EQUIPMENTS } from '@/const/archive/equipment.const'
import { LinkItem } from '@/app/components/material/link-material-or-equipment'
import { ItemBoxResponsive } from '@/app/components/item/item-box'

export function RsTradeShopBox({ tradeOrders }: { tradeOrders: RSTradeOrder[] }) {
  const { router } = useNextDepthNavigator()
  return (
    <>
      <GradientHeaderDiv className="flex items-center gap-[4px]">교환 계획</GradientHeaderDiv>
      <div className="flex flex-col">
        <div className="flex bg-blue-800 text-white py-[4px]">
          <div className="flex min-w-[40px] w-[40px] items-center justify-center p-[4px] relative">
            번호
          </div>
          <div className="flex min-w-[40px] w-[40px] items-center justify-center p-[4px] relative">
            횟수
          </div>
          <div className="p-[4px] flex min-w-[66px] items-center justify-center relative">보상</div>
          <div className="p-[4px] flex w-full items-center justify-start flex-1">요구 품목</div>
        </div>
        {tradeOrders.map((order, index) => {
          return (
            <div key={createKey()} className="flex border-t">
              <div className="flex flex-col gap-[4px] min-w-[40px] w-[40px] bg-blue-800 text-white items-center justify-center p-[4px]">
                <div className="ff-dh text-[20px]">{index + 1}</div>
              </div>
              <div className="flex min-w-[40px] w-[40px] items-center justify-center bg-blue-gray-300 p-[4px] relative">
                <div className="ff-dh text-[20px] text-yellow-400 flex items-center justify-center">
                  {order.exchangeAmount && order.exchangeAmount.toLocaleString()}
                  {!order.exchangeAmount && '∞'}
                </div>
              </div>
              <div className="p-[4px] flex flex-col bg-blue-gray-200 min-w-[50px]">
                {/* <div className="text-center text-white py-[4px] min-w-[155px] bg-light-green-800 m-[2px] mb-0 shadow-md shadow-blue-gray-900"> */}
                {/*   보상 */}
                {/* </div> */}
                <div className="flex gap-[2px] p-[2px]">
                  {order.rewards.map((reward) => {
                    const material = {
                      ...(MATERIALS[reward.name] || ALL_EQUIPMENTS[reward.name]),
                      name: reward.name,
                    }

                    return (
                      <Tooltip key={createKey()} content={material.name}>
                        <div className="border m-[1px] cursor-pointer">
                          <LinkItem item={material}>
                            <div className="w-[50px] relative">
                              <ItemBoxResponsive item={material} withoutIconPadding />
                              <div className="absolute right-0 bottom-0 p-[1px] text-center z-20 text-shadow-outline text-white ff-dh">
                                {formatNumber(reward.amount)}
                              </div>
                            </div>
                          </LinkItem>
                        </div>
                      </Tooltip>
                    )
                  })}
                </div>
              </div>
              <div className="p-[4px] flex flex-col bg-blue-gray-300 flex-1">
                <div className="flex gap-[2px] p-[2px]">
                  {order.requirements.map((requirement) => {
                    const material = {
                      ...(MATERIALS[requirement.name] || ALL_EQUIPMENTS[requirement.name]),
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

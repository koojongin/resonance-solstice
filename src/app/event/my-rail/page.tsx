'use client'

import { GradientHeaderDiv } from '@/app/components/div/gradient-header-div'
import createKey from '@/services/key-generator'
import { MATERIALS } from '@/const/material.const'
import { ALL_NAMED_MAPS } from '@/const/archive/named-map.const'
import { Tooltip } from '@material-tailwind/react'
import { MaterialBoxResponsive } from '@/app/components/material/material-box'
import { formatNumber } from '@/services/utils/number.formatter'
import React from 'react'
import { MYRAIL_TRANSPORT_ORDERS } from '@/const/item/my-rail-bridge-transport-orders.const'
import { useNextDepthNavigator } from '@/services/navigation'

export default function EventMyRailPage() {
  const { router } = useNextDepthNavigator()
  return (
    <div className="flex flex-col gap-[10px] w-full">
      <div className="w-full">
        <GradientHeaderDiv className="w-full">발사 센터 브릿지 운송 주문</GradientHeaderDiv>
      </div>
      <div className="flex flex-col ff-dh">
        <div className="flex border-b">
          <div className="ff-dh text-center min-w-[50px] flex items-center justify-center">
            번호
          </div>
          <div className="text-center min-w-[80px] flex items-center justify-center">
            전달 가능
            <br />
            횟수
          </div>
          <div className="min-w-[250px] flex flex-wrap gap-[2px] flex items-center justify-center bg-green-50">
            필요 재료
          </div>
          <div className="pl-[4px] flex flex-wrap gap-[2px] flex items-center justify-start">
            보상
          </div>
        </div>
        <div className="flex flex-col ff-dh">
          {MYRAIL_TRANSPORT_ORDERS.map((order, index) => {
            const { requirement, exchangeAmount, rewards } = order
            const material = {
              ...MATERIALS[requirement.name],
              name: requirement.name,
            }
            const relatedMaps = ALL_NAMED_MAPS.filter((map) => {
              const exchangeItems = map['거래소'] || []
              return exchangeItems.filter((eItem) => eItem.name === material.name).length > 0
            })
            return (
              <div
                key={createKey()}
                className="ff-dh flex items-stretch bg-yellow-50/50 my-[2px] shadow rounded"
              >
                <div className="text-center min-w-[50px] flex items-center justify-center">
                  {index + 1}
                </div>
                <div className="text-center min-w-[80px] flex items-center justify-center">
                  <div className="bg-yellow-700 text-blue-gray-800 rounded-full w-[30px] h-[30px] flex items-center justify-center shadow-md ff-sdn font-bold">
                    {exchangeAmount.toLocaleString()}
                  </div>
                </div>
                <div className="min-w-[250px] flex items-center justify-start bg-green-50 gap-[2px]">
                  <Tooltip
                    key={`${index}_q_${requirement.name}`}
                    content={
                      <div>
                        <div>
                          {material.name}({requirement.amount.toLocaleString()})
                        </div>
                        <div>
                          {relatedMaps.map((map) => {
                            return <div key={createKey()}>- {map.name}</div>
                          })}
                        </div>
                      </div>
                    }
                  >
                    <>
                      <div
                        className="w-[52px] cursor-pointer relative border-2 border-blue-gray-900"
                        onClick={() => {
                          router.push(`/materials/${material.name}`)
                        }}
                      >
                        <MaterialBoxResponsive material={material} withoutIconPadding />
                        <div className="absolute right-0 bottom-0 p-[1px] text-center z-20 text-shadow-outline text-white ff-dh">
                          {formatNumber(requirement.amount)}
                        </div>
                      </div>
                      {relatedMaps.length > 0 && (
                        <div>
                          {relatedMaps.map((map) => {
                            return <div key={createKey()}>- {map.name}</div>
                          })}
                        </div>
                      )}
                    </>
                  </Tooltip>
                </div>
                <div className="pl-[4px] flex flex-wrap justify-start gap-[2px]">
                  {rewards.map((item) => {
                    const reward = {
                      ...MATERIALS[item.name],
                      name: item.name,
                    }
                    const rMaps = ALL_NAMED_MAPS.filter((map) => {
                      const exchangeItems = map['거래소'] || []
                      return exchangeItems.filter((eItem) => eItem.name === reward.name).length > 0
                    })
                    return (
                      <Tooltip
                        key={`${index}_${item.name}`}
                        content={
                          <div>
                            <div>
                              {reward.name}({item.amount.toLocaleString()})
                            </div>
                            <div>
                              {rMaps.map((map) => {
                                return <div key={createKey()}>- {map.name}</div>
                              })}
                            </div>
                          </div>
                        }
                      >
                        <div
                          className="w-[52px] h-[52px] cursor-pointer relative border-2 border-blue-gray-900"
                          onClick={() => {
                            router.push(`/materials/${reward.name}`)
                          }}
                        >
                          <MaterialBoxResponsive material={reward} withoutIconPadding />
                          <div className="absolute right-0 bottom-0 p-[1px] text-center z-20 text-shadow-outline text-white ff-dh">
                            {formatNumber(item.amount)}
                          </div>
                        </div>
                      </Tooltip>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

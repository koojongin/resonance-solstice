'use client'

import { GradientHeaderDiv } from '@/app/components/div/gradient-header-div'
import createKey from '@/services/key-generator'
import React from 'react'
import { MATERIALS } from '@/const/material.const'
import { formatNumber } from '@/services/utils/number.formatter'
import { Tooltip } from '@material-tailwind/react'
import { RSBountyMissionOrder } from '@/const/map/map.interface'
import { ALL_EQUIPMENTS } from '@/const/archive/equipment.const'
import { LinkItem } from '@/app/components/material/link-material-or-equipment'
import { ItemBoxResponsive } from '@/app/components/item/item-box'

export function RsBountyMissionBox({ orders }: { orders: RSBountyMissionOrder[] }) {
  return (
    <>
      <GradientHeaderDiv className="flex items-center gap-[4px]">현상금 임무</GradientHeaderDiv>
      <div className="flex flex-col">
        <div className="flex overflow-hidden bg-blue-800 border-2 border-blue-800 shadow-md text-white">
          <div className="flex min-w-[30px] w-[30px] items-center justify-center p-[4px] relative">
            -
          </div>
          <div className="flex min-w-[80px] w-[80px] items-center justify-center p-[4px] relative">
            추천 레벨
            <br />및 난이도
          </div>
          <div className="flex min-w-[80px] w-[80px] items-center justify-center p-[4px] relative">
            임무 정보
          </div>
          <div className="ml-auto flex w-full items-center justify-center relative min-w-[120px]">
            보상
          </div>
        </div>
        {orders.map((order, index) => {
          return (
            <div key={createKey()} className="flex overflow-hidden border-t">
              <div className="flex flex-col gap-[4px] min-w-[30px] w-[30px] bg-blue-800 text-white items-center justify-center p-[4px]">
                <div className="ff-dh text-[20px]">{index + 1}</div>
              </div>
              <div className="flex min-w-[80px] w-[80px] items-center justify-center bg-blue-gray-200 p-[4px] relative">
                <div className="ff-dh text-[20px] text-blue-gray-900 flex items-center justify-center flex-col">
                  <div>{order.recommendationLevel.toLocaleString()}</div>
                  <div className="flex flex-wrap justify-center items-center text-[16px] ff-sdn font-bold text-yellow-500">
                    {new Array(order.difficulty).fill(1).map(() => {
                      return <i key={createKey()} className="text-[12px] fa-solid fa-star" />
                    })}
                  </div>
                </div>
              </div>
              <div className="flex min-w-[80px] w-[80px] items-center justify-center bg-blue-gray-100 p-[4px] relative text-center">
                <div className="ff-dh text-[16px] text-blue-gray-900 flex items-center justify-center break-all mx-auto flex flex-wrap">
                  [{order.boss.title}]<span className="text-teal-600">{order.boss.name}</span>
                </div>
              </div>
              <div className="w-full flex flex-col bg-blue-gray-200">
                <div className="flex flex-wrap gap-[2px] p-[2px]">
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
                              <div className="text-[14px] absolute right-0 bottom-0 p-[1px] text-center z-20 text-shadow-outline text-white ff-dh">
                                {reward.amount.length > 1 && (
                                  <>
                                    {formatNumber(reward.amount[0])}-
                                    {formatNumber(reward.amount[1])}
                                  </>
                                )}
                                {reward.amount.length === 1 && (
                                  <>
                                    {reward.amount[0] !== 0 && (
                                      <>{formatNumber(reward.amount[0])}</>
                                    )}
                                  </>
                                )}
                              </div>
                            </div>
                          </LinkItem>
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

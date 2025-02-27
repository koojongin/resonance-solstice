'use client'

import { GradientHeaderDiv } from '@/app/components/div/gradient-header-div'
import { Tooltip } from '@material-tailwind/react'
import React from 'react'
import createKey from '@/services/key-generator'
import { MATERIALS } from '@/const/material.const'
import { ALL_NAMED_MAPS } from '@/const/archive/named-map.const'
import { MaterialBoxResponsive } from '@/app/components/material/material-box'
import { formatNumber } from '@/services/utils/number.formatter'
import { useNextDepthNavigator } from '@/services/navigation'
import { ALL_EQUIPMENTS } from '@/const/archive/equipment.const'
import {
  CONSTRUCTOR_DATA_PERSONAL,
  CONSTRUCTOR_DATA_SERVER,
} from '@/const/my-rail/my-rail-constructor.const'

export default function EventMyRailRewardPage() {
  const { router } = useNextDepthNavigator()
  return (
    <div className="flex flex-col gap-[20px] w-full">
      <div className="flex flex-col gap-[10px]">
        <div className="w-full">
          <GradientHeaderDiv className="w-full flex gap-[2px] items-center">
            개인 건설 임무 보상
          </GradientHeaderDiv>
        </div>
        <div className="flex flex-col ff-dh gap-[4px]">
          <div className="flex border-b">
            <div className="ff-dh text-center min-w-[50px] flex items-center justify-center">
              단계
            </div>
            <div className="text-center min-w-[80px] flex items-center justify-center">
              건설
              <br />
              진행도
            </div>
            <div className="pl-[4px] flex flex-wrap gap-[2px] flex items-center justify-start">
              보상
            </div>
          </div>

          <div className="flex flex-col ff-dh gap-[2px]">
            {CONSTRUCTOR_DATA_PERSONAL.map((data, index) => {
              const { rewards } = data
              return (
                <div key={createKey()} className="flex border-b">
                  <div className="ff-dh text-center min-w-[50px] flex items-center justify-center">
                    {index + 1}
                  </div>
                  <div className="text-center min-w-[80px] flex items-center justify-center">
                    {data.completePoint}
                  </div>
                  <div className="pl-[4px] flex flex-wrap justify-start gap-[2px]">
                    {rewards.map((item) => {
                      const reward = {
                        ...(MATERIALS[item.name] || ALL_EQUIPMENTS[item.name]),
                        name: item.name,
                      }
                      return (
                        <Tooltip
                          key={`${index}_${item.name}`}
                          content={
                            <div>
                              <div>{reward.name}</div>
                            </div>
                          }
                        >
                          <div
                            className="w-[50px] h-[50px] cursor-pointer relative border rounded-[2px] shadow-md border-blue-gray-900 relative"
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
      <div className="flex flex-col gap-[10px]">
        <div className="w-full">
          <GradientHeaderDiv className="w-full flex gap-[2px] items-center">
            서버 건설 임무 보상
          </GradientHeaderDiv>
        </div>
        <div className="flex flex-col ff-dh gap-[4px]">
          <div className="flex border-b">
            <div className="ff-dh text-center min-w-[50px] flex items-center justify-center">
              단계
            </div>
            <div className="text-center min-w-[80px] flex items-center justify-center">
              건설
              <br />
              진행도
            </div>
            <div className="pl-[4px] flex flex-wrap gap-[2px] flex items-center justify-start">
              보상
            </div>
          </div>

          <div className="flex flex-col ff-dh gap-[2px]">
            {CONSTRUCTOR_DATA_SERVER.map((data, index) => {
              const { rewards } = data
              return (
                <div key={createKey()} className="flex border-b">
                  <div className="ff-dh text-center min-w-[50px] flex items-center justify-center">
                    {index + 1}
                  </div>
                  <div className="text-center min-w-[80px] flex items-center justify-center">
                    {formatNumber(data.completePoint)}
                  </div>
                  <div className="pl-[4px] flex flex-wrap justify-start gap-[2px]">
                    {rewards.map((item) => {
                      const reward = {
                        ...(MATERIALS[item.name] || ALL_EQUIPMENTS[item.name]),
                        name: item.name,
                      }
                      return (
                        <Tooltip
                          key={`${index}_${item.name}`}
                          content={
                            <div>
                              <div>{reward.name}</div>
                            </div>
                          }
                        >
                          <div
                            className="w-[50px] h-[50px] cursor-pointer relative border rounded-[2px] shadow-md border-blue-gray-900 relative"
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
    </div>
  )
}

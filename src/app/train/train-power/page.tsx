'use client'

import createKey from '@/services/key-generator'
import { MATERIALS } from '@/const/material.const'
import { MaterialBoxResponsive } from '@/app/components/material/material-box'
import React from 'react'
import { Tooltip } from '@material-tailwind/react'
import { ALL_NAMED_MAPS } from '@/const/archive/named-map.const'
import { useNextDepthNavigator } from '@/services/navigation'
import { TRAIN_POWER_DATA } from '@/const/item/train-power-data'
import { GradientHeaderDiv } from '@/app/components/div/gradient-header-div'
import { formatNumber } from '@/services/utils/number.formatter'
import { CommentBox } from '@/app/components/comment/comment-box'
import { CommentTarget } from '@/const/api/comment-target'

export default function TrainPowerPage() {
  const { router } = useNextDepthNavigator()
  return (
    <div className="flex flex-col gap-[10px] w-full">
      <div className="w-full">
        <GradientHeaderDiv className="w-full">열차 전력 업그레이드 요구사항</GradientHeaderDiv>
      </div>
      <div className="flex flex-col ff-dh">
        <div className="flex border-b">
          <div className="ff-dh text-center min-w-[50px] flex items-center justify-center">
            전력
            <br />
            레벨
          </div>
          <div className="flex flex-wrap gap-[2px] flex items-center justify-center">필요 재료</div>
          <div className="ml-auto min-w-[100px] flex items-center justify-start px-[4px]  bg-green-50">
            총 전력
          </div>
          <div className="min-w-[50px] text-center flex items-center justify-center">
            열차
            <br />
            속도
          </div>
        </div>
        <div className="flex flex-col ff-dh">
          {TRAIN_POWER_DATA.map((trainPowerItem, index) => {
            const { items, trainSpeed, totalPower } = trainPowerItem

            return (
              <div key={createKey()} className="flex items-stretch border-b hover:bg-green-100">
                <div className="ff-dh text-center min-w-[50px] flex items-center justify-center">
                  {index + 1}
                </div>
                <div className="flex flex-wrap gap-[2px]">
                  {items.map((item) => {
                    const material = { ...MATERIALS[item.name], name: item.name }
                    const relatedMaps = ALL_NAMED_MAPS.filter((map) => {
                      const exchangeItems = map['거래소'] || []
                      return (
                        exchangeItems.filter((eItem) => eItem.name === material.name).length > 0
                      )
                    })
                    return (
                      <Tooltip
                        key={`${index}_${item.name}`}
                        content={
                          <div>
                            <div>
                              {material.name}({item.amount.toLocaleString()})
                            </div>
                            <div>
                              {relatedMaps.map((map) => {
                                return <div key={createKey()}>- {map.name}</div>
                              })}
                            </div>
                          </div>
                        }
                      >
                        <div
                          className="w-[52px] cursor-pointer relative border-2 border-blue-gray-900"
                          onClick={() => {
                            router.push(`/materials/${material.name}`)
                          }}
                        >
                          <MaterialBoxResponsive material={material} withoutIconPadding />
                          <div className="absolute right-0 bottom-0 p-[1px] text-center z-20 text-shadow-outline text-white ff-dh">
                            {formatNumber(item.amount)}
                          </div>
                        </div>
                      </Tooltip>
                    )
                  })}
                </div>
                <div className="ml-auto min-w-[100px] text-left bg-green-50 flex items-center justify-start px-[4px]">
                  {totalPower.toLocaleString()}
                </div>
                <div className="min-w-[50px] text-center flex items-center justify-center">
                  {trainSpeed.toLocaleString()}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <hr />
      <div className="flex flex-col gap-[4px]">
        <div className="ff-dh text-[20px]">승무원</div>
        <div className="flex flex-col gap-[2px]">
          <div>캐롤라인 - 공명1 : 전력한도 +5%</div>
          <div>BO-X - 공명4 : 전력한도 +5%</div>
        </div>
      </div>
      <div className="flex flex-col gap-[4px]">
        <div className="ff-dh text-[20px]">가구</div>
        <div className="flex flex-col gap-[2px]">
          <div>아니타 걸이식 배터리팩 : 레벨 당 500파워 (최대 3레벨)</div>
        </div>
      </div>

      <div className="mt-[50px]">
        <CommentBox
          data={{
            target: CommentTarget.TrainPower,
            refId: '123456789012345678901234' as string,
          }}
        />
      </div>
    </div>
  )
}

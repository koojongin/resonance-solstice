'use client'

import { GradientHeaderDiv } from '@/app/components/div/gradient-header-div'
import { Tooltip } from '@material-tailwind/react'
import React from 'react'
import createKey from '@/services/key-generator'
import { MATERIALS } from '@/const/material.const'
import { MaterialBoxResponsive } from '@/app/components/material/material-box'
import { formatNumber } from '@/services/utils/number.formatter'
import { useNextDepthNavigator } from '@/services/navigation'
import { ALL_EQUIPMENTS } from '@/const/archive/equipment.const'
import { VIRTUAL_RECORD_EXCHANGE_ORDERS } from '@/app/event/virtual-record/exchange/virtual-record-exchange.const'
import { LinkMaterialOrEquipment } from '@/app/components/material/link-material-or-equipment'

const COMMON_REWARDS = [
  {
    title: '첫회 완료 보상',
    rewards: [
      {
        name: '크리스탈',
        amount: 20,
      },
      {
        name: '레코딩 증표',
        amount: 20,
      },
      {
        name: '레코드 과정',
        amount: 20,
      },
    ],
  },
  {
    title: '첫회 S레벨 보상',
    rewards: [
      {
        name: '크리스탈',
        amount: 30,
      },
      {
        name: '레코딩 증표',
        amount: 30,
      },
      {
        name: '레코드 과정',
        amount: 30,
      },
    ],
  },
  {
    title: '심층 연산 완료 보상',
    rewards: [
      {
        name: '크리스탈',
        amount: 0,
      },
      {
        name: '레코딩 증표',
        amount: 0,
      },
    ],
  },
]
export default function EventVirtualRecordExchangePage() {
  const { router } = useNextDepthNavigator()
  return (
    <div className="flex flex-wrap">
      <div className="w-full flex flex-col gap-[10px]">
        <div className="w-full">
          <GradientHeaderDiv className="w-full flex gap-[2px] items-center">
            버추얼 레코드 교환소
          </GradientHeaderDiv>
        </div>
        <div className="flex flex-col gap-[4px]">
          {COMMON_REWARDS.map((data) => {
            const { rewards, title } = data
            return (
              <div className="flex gap-[4px] items-center" key={`vre_common_data_${title}`}>
                <div className="min-w-[140px] ff-dh text-[20px]">{title}</div>
                <div className="flex flex-wrap gap-[4px]">
                  {rewards.map((item) => {
                    const material = { ...item, ...MATERIALS[item.name] }
                    return (
                      <Tooltip
                        key={`eve_top_${material.name}`}
                        content={
                          <div>
                            <div>{material.name}</div>
                          </div>
                        }
                      >
                        <div>
                          <LinkMaterialOrEquipment material={material}>
                            <div key={createKey()} className="w-[45px] relative cursor-pointer">
                              <MaterialBoxResponsive material={material} withoutIconPadding />
                              <div className="absolute right-0 bottom-0 p-[1px] text-center z-20 text-shadow-outline text-white ff-dh">
                                {item.amount !== 0 && <>{formatNumber(item.amount)}</>}
                                {item.amount === 0 && <>?</>}
                              </div>
                            </div>
                          </LinkMaterialOrEquipment>
                        </div>
                      </Tooltip>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
        <hr />
        <div className="flex flex-col ff-dh gap-[4px]">
          <div className="flex border-b">
            <div className="ff-dh text-center min-w-[50px] flex items-center justify-center">
              번호
            </div>
            <div className="pl-[4px] flex flex-wrap gap-[2px] flex items-center justify-start">
              필요한 재료
            </div>
            <div className="text-center min-w-[80px] flex items-center justify-center">
              교환
              <br />
              횟수
            </div>
            <div className="flex flex-wrap justify-start items-center gap-[6px] min-w-[100px]">
              <div className="min-w-[70px] text-center">보상</div>
            </div>
          </div>

          <div className="flex flex-col ff-dh gap-[2px]">
            {VIRTUAL_RECORD_EXCHANGE_ORDERS.map((order, index) => {
              const { reward, requirements, exchangeAmount } = order
              const exReward = {
                ...MATERIALS[reward.name],
                name: reward.name,
              }
              return (
                <div key={createKey()} className="flex border-b py-[4px]">
                  <div className="ff-dh text-center min-w-[50px] flex items-center justify-center">
                    {index + 1}
                  </div>
                  <div className="pl-[4px] flex flex-wrap justify-start gap-[6px]">
                    {requirements.map((item) => {
                      const requirement = {
                        ...(MATERIALS[item.name] || ALL_EQUIPMENTS[item.name]),
                        name: item.name,
                      }
                      return (
                        <Tooltip
                          key={`${index}_${requirement.name}`}
                          content={
                            <div>
                              <div>{requirement.name}</div>
                            </div>
                          }
                        >
                          <div className="w-[70px] flex flex-col items-center justify-center">
                            <div
                              className="w-[50px] h-[50px] cursor-pointer relative border rounded-[2px] shadow-md border-blue-gray-900 relative"
                              onClick={() => {
                                router.push(`/materials/${encodeURIComponent(requirement.name)}`)
                              }}
                            >
                              <MaterialBoxResponsive material={requirement} withoutIconPadding />
                              <div className="absolute right-0 bottom-0 p-[1px] text-center z-20 text-shadow-outline text-white ff-dh">
                                {formatNumber(item.amount)}
                              </div>
                            </div>
                            <div className="ff-sdn text-[13px] font-bold p-[4px] text-center">
                              {item.name}
                            </div>
                          </div>
                        </Tooltip>
                      )
                    })}
                  </div>
                  <div className="text-center min-w-[80px] flex items-center justify-center">
                    {exchangeAmount}
                  </div>
                  <div className="flex flex-wrap justify-start gap-[6px] min-w-[100px]">
                    <Tooltip
                      key={`${index}_r_${reward.name}`}
                      content={
                        <div>
                          <div>{reward.name}</div>
                        </div>
                      }
                    >
                      <div className="w-[70px] flex flex-col items-center">
                        <div
                          className="w-[50px] h-[50px] cursor-pointer relative border rounded-[2px] shadow-md border-blue-gray-900 relative"
                          onClick={() => {
                            router.push(`/materials/${encodeURIComponent(reward.name)}`)
                          }}
                        >
                          <MaterialBoxResponsive material={exReward} withoutIconPadding />
                          <div className="absolute right-0 bottom-0 p-[1px] text-center z-20 text-shadow-outline text-white ff-dh">
                            {formatNumber(reward.amount)}
                          </div>
                        </div>
                        <div className="ff-sdn text-[13px] font-bold p-[4px] text-center">
                          {reward.name}
                        </div>
                      </div>
                    </Tooltip>
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

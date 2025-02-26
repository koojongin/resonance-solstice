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

const CONSTRUCTOR_DATA = [
  {
    completePoint: 100,
    rewards: [
      { name: '크리스탈', amount: 50 },
      { name: '자동 관측 필름', amount: 3 },
      { name: '성운상 물질(4Ti)', amount: 5 },
    ],
  },
  {
    completePoint: 200,
    rewards: [
      { name: '크리스탈', amount: 50 },
      { name: '자동 관측 필름', amount: 3 },
      { name: '성운상 물질(4Ti)', amount: 5 },
    ],
  },
  {
    completePoint: 300,
    rewards: [
      { name: '크리스탈', amount: 50 },
      { name: '자동 관측 필름', amount: 3 },
      { name: '시뮬레이트 스타', amount: 1 },
    ],
  },
  {
    completePoint: 300,
    rewards: [
      { name: '기념 카드팩-마이레일 I기', amount: 50 },
      { name: '크리스탈', amount: 50 },
      { name: '자동 관측 필름', amount: 3 },
    ],
  },
  {
    completePoint: 600,
    rewards: [
      { name: '크리스탈', amount: 50 },
      { name: '자동 관측 필름', amount: 3 },
      { name: '성운상 물질(4Ti)', amount: 5 },
    ],
  },
  {
    completePoint: 800,
    rewards: [
      { name: '크리스탈', amount: 50 },
      { name: '자동 관측 필름', amount: 3 },
      { name: '성운상 물질(4Ti)', amount: 5 },
    ],
  },
  {
    completePoint: 1000,
    rewards: [
      { name: '기념 카드팩-마이레일 I기', amount: 50 },
      { name: '크리스탈', amount: 50 },
      { name: '자동 관측 필름', amount: 3 },
    ],
  },
  {
    completePoint: 1200,
    rewards: [
      { name: '크리스탈', amount: 50 },
      { name: '자동 관측 필름', amount: 3 },
      { name: '뫼비우스', amount: 1 },
    ],
  },
  {
    completePoint: 1600,
    rewards: [
      { name: '크리스탈', amount: 50 },
      { name: '자동 관측 필름', amount: 3 },
      { name: '성운상 물질(8Ti)', amount: 5 },
    ],
  },
  {
    completePoint: 2000,
    rewards: [
      { name: '기념 카드팩-마이레일 I기', amount: 50 },
      { name: '크리스탈', amount: 50 },
      { name: '발자 센터 브릿지 통행증', amount: 1 },
    ],
  },
]

export default function EventMyRailRewardPage() {
  const { router } = useNextDepthNavigator()
  return (
    <div className="flex flex-col gap-[10px] w-full">
      <div className="w-full">
        <GradientHeaderDiv className="w-full flex gap-[2px] items-center">
          개인 건설 임무 보상
          {/* <Tooltip content="[자유 무역항-7]의 [공사 지원 센터]에 납품할 수 있습니다."> */}
          {/*   <i className="fa-solid fa-circle-question text-[20px] cursor-pointer" /> */}
          {/* </Tooltip> */}
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
          {CONSTRUCTOR_DATA.map((data, index) => {
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
  )
}

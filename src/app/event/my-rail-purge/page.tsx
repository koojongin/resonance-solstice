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
import { MONSTERS } from '@/const/monster/monster.const'
import { MonsterBox } from '@/app/components/monster/monster-box'

const MYRAIL_PURGES = [
  {
    level: 30,
    monster: '블리자드 기포체',
    rewards: [
      { name: '마이레일 건설 진행도' },
      { name: `'마이레일' 건설 포인트` },
      { name: '정예 뱃지' },
      { name: '수행 뱃지' },
      { name: '철도연맹 코인' },
      { name: '모노리스 조각' },
      { name: '원시적 사고' },
      { name: '디지털화 사고' },
      { name: '전투 메모리(4Ti)' },
      { name: '성운상 물질(4Ti)' },
      { name: '열화석' },
      { name: '베툴라 촉수' },
      { name: '베툴라 핵' },
      { name: '베툴라 자사낭' },
      { name: '베툴라 더듬이' },
      { name: '베툴라 편모' },
    ],
  },
  {
    level: 35,
    monster: '암흑의 매머드',
    rewards: [
      { name: '마이레일 건설 진행도' },
      { name: `'마이레일' 건설 포인트` },
      { name: '정예 뱃지' },
      { name: '수행 뱃지' },
      { name: '철도연맹 코인' },
      { name: '모노리스 조각' },
      { name: '원시적 사고' },
      { name: '디지털화 사고' },
      { name: '전투 메모리(4Ti)' },
      { name: '성운상 물질(4Ti)' },
      { name: '열화석' },
      { name: '베툴라 분비선' },
      { name: '이명 껍질' },
      { name: '인식 방해 껍질' },
      { name: '베툴라 핵' },
      { name: '트와일라잇 껍질' },
      { name: '뇌안개 포자' },
    ],
  },
  {
    level: 38,
    monster: '더스트 리자드',
    rewards: [
      { name: '마이레일 건설 진행도' },
      { name: `'마이레일' 건설 포인트` },
      { name: '정예 뱃지' },
      { name: '수행 뱃지' },
      { name: '철도연맹 코인' },
      { name: '모노리스 조각' },
      { name: '원시적 사고' },
      { name: '디지털화 사고' },
      { name: '전투 메모리(4Ti)' },
      { name: '성운상 물질(4Ti)' },
      { name: '열화석' },
      { name: '베툴라 분비선' },
      { name: '리자드 뼈대' },
      { name: '베툴라 핵' },
      { name: '베툴라 뼈대' },
      { name: '베인링 가시' },
      { name: '베툴라 꼬리 수염' },
      { name: '베인링 낭' },
      { name: '베툴라 연골' },
      { name: '베인링 낭액' },
    ],
  },
  {
    level: 40,
    monster: '약탈자-쏘우',
    rewards: [
      { name: '마이레일 건설 진행도' },
      { name: `'마이레일' 건설 포인트` },
      { name: '정예 뱃지' },
      { name: '수행 뱃지' },
      { name: '철도연맹 코인' },
      { name: '모노리스 조각' },
      { name: '원시적 사고' },
      { name: '디지털화 사고' },
      { name: '전투 메모리(4Ti)' },
      { name: '성운상 물질(4Ti)' },
      { name: '열화석' },
      { name: '약탈의 원형톱' },
      { name: '선인장' },
    ],
  },
  {
    level: 45,
    monster: '앰피 본드래곤',
    rewards: [
      { name: '마이레일 건설 진행도' },
      { name: `'마이레일' 건설 포인트` },
      { name: '정예 뱃지' },
      { name: '수행 뱃지' },
      { name: '철도연맹 코인' },
      { name: '모노리스 조각' },
      { name: '원시적 사고' },
      { name: '디지털화 사고' },
      { name: '전투 메모리(4Ti)' },
      { name: '성운상 물질(4Ti)' },
      { name: '열화석' },
      { name: '베툴라 분비선' },
      { name: '본드래곤 꼬리뼈' },
      { name: '본드래곤 척추뼈' },
      { name: '베툴라 핵' },
      { name: '앰피 본드래곤 흉골' },
      { name: '앰피 본드래곤 두개골' },
      { name: '해룡 꼬리 지느러미' },
      { name: '해룡 지느러미줄' },
    ],
  },
]

export default function EventMyRailPurgePage() {
  const { router } = useNextDepthNavigator()
  return (
    <div className="flex flex-col gap-[10px] w-full">
      <div className="w-full">
        <GradientHeaderDiv className="w-full flex gap-[2px] items-center">
          마이레일-소탕 임무
          <Tooltip content="[자유 무역항-7]의 [공사 지원 센터]에서 임무를 진행할 수 있습니다.">
            <i className="fa-solid fa-circle-question text-[20px] cursor-pointer" />
          </Tooltip>
        </GradientHeaderDiv>
      </div>
      <div className="flex flex-col ff-dh gap-[4px]">
        <div className="flex border-b">
          <div className="ff-dh text-center min-w-[50px] flex items-center justify-center">
            번호
          </div>
          <div className="text-center min-w-[125px] flex items-center justify-center">이름</div>
          <div className="text-center min-w-[80px] flex items-center justify-center">
            도시 진입 당
            <br />
            도전 횟수
          </div>
          <div className="text-center min-w-[80px] flex items-center justify-center">레벨</div>
          <div className="pl-[4px] flex flex-wrap gap-[2px] flex items-center justify-start">
            보상
          </div>
        </div>

        <div className="flex flex-col ff-dh gap-[2px]">
          {MYRAIL_PURGES.map((purge, index) => {
            const { rewards } = purge
            const monster = { ...MONSTERS[purge.monster], name: purge.monster }
            return (
              <div key={createKey()} className="flex border-b">
                <div className="ff-dh text-center min-w-[50px] flex items-center justify-center">
                  {index + 1}
                </div>
                <Tooltip
                  key={createKey()}
                  className="bg-white max-w-[400px] text-blue-gray-900 shadow-md border rounded"
                  content={
                    <div>
                      <div>{monster.name}</div>
                      {monster.desc && (
                        <>
                          <hr />
                          <div className="whitespace-pre-line">{monster.desc || ''}</div>
                        </>
                      )}
                    </div>
                  }
                >
                  <div
                    className="cursor-pointer text-center min-w-[125px] flex items-center justify-center"
                    onClick={() => router.push(`/monsters/${monster.name}`)}
                  >
                    <MonsterBox monster={monster} />
                  </div>
                </Tooltip>
                <div className="text-center min-w-[80px] flex items-center justify-center">10</div>
                <div className="text-center min-w-[80px] flex items-center justify-center">
                  {purge.level}
                </div>
                <div className="pl-[4px] flex flex-wrap justify-start gap-[2px]">
                  {rewards.map((item) => {
                    const reward = {
                      ...MATERIALS[item.name],
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
                          className="w-[50px] h-[50px] cursor-pointer relative border rounded-[2px] shadow-md border-blue-gray-900"
                          onClick={() => {
                            router.push(`/materials/${reward.name}`)
                          }}
                        >
                          <MaterialBoxResponsive material={reward} withoutIconPadding />
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

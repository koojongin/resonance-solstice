'use client'

import createKey from '@/services/key-generator'
import { ALL_EQUIPMENTS } from '@/const/archieve/equipment.const'
import { EquipmentBox } from '@/app/equipments/rs-equipment-list'
import React from 'react'
import { Tooltip } from '@material-tailwind/react'
import { EquipmentTooltipBox } from '@/app/components/deck/equipment-tooltip-box'
import { EXTERNAL_USERS } from '@/const/external-users'
import { GradientButton } from '@/app/components/button/gradient-button'

export function EquipmentTierList() {
  const tierList: { [key: string]: string[] } = {
    '필수 범용': ['시뮬레이트 스타', '뫼비우스', '에비서레이터MK0'],
    '특수 장비': ['해리슨 장치', '마술봉', '인챈티드 단검'],
    '핵심 장비': [
      '부러진 검의 불',
      '여명의 옥새',
      '공간 위치 측정기',
      '미초용작',
      '자곡몽 섬유',
      '공간이동',
      '비트레이얼',
    ],
    '있으면 씀': [
      '방출 코드 생성기',
      '보물 탐지기',
      '불꽃 침식자',
      '반엔트로피',
      //
      '선인장 판갑',
      '정원 수호',
      '고차원 구조체',
      //
      '헐튼 풍선',
      '춘추합성인장',
      '모노폴 마그네타',
      '히포크레네',
    ],
    대체제: [
      '토르',
      '라바 파이어',
      '볼케이노',
      '인비져블 터치',
      '앰비션',
      //
      '베타 세계선 박스',
      '변화의 눈동자',
    ],
    안씀: [
      '핵 방사 무기',
      '아구나토',
      '세븐스트링 보우',
      '흑월 메테오',
      '별의 자취',
      '타임라인 익스텐더',
      '스피릿 보우',
      '축퇴 흑석',
      '라이트 체이서',
      '노던 프릭클',
      //
      '헤븐 아머',
      '흑석 아머',
      //
      '최면의 시계',
      '리프팅 수술 장비',
      '성핵 잔화',
    ],
  }

  const comment = `필수 범용 : 흑월 상점에서 보이면 꼭 사셈


특수 장비 : 2개 정도는 구비해두셈

핵심 장비 : 있는거 없는거 차이 많이 남

있으면 쓸만함 : 범용이나 핵심 장비가 없을 때 쓸만함 혹은 엄청 필수까지는 아닌 장비들

대체재 : 일부 필요한 장비가 없을 때 대체를 해서라도 쓸 수 있는 장비 

안씀 : 진짜 안씀`

  return (
    <div className="flex flex-col gap-[10px]">
      <div className="flex items-center gap-[4px]">
        <a href={EXTERNAL_USERS['1'].link} target="_blank">
          <div className="font-bold p-[4px] rounded inline-flex items-center gap-[4px] border bg-blue-gray-900 text-white">
            출처: @{EXTERNAL_USERS['1'].name}
          </div>
        </a>
        <a href=" https://arca.live/b/resonance/119002439" target="_blank">
          <GradientButton className="p-[4px] rounded inline-flex items-center gap-[4px]">
            [원문 링크]
          </GradientButton>
        </a>
      </div>
      <div className="font-bold">
        {Object.keys(tierList).map((tierTitle) => {
          const tierData = tierList[tierTitle]
          return (
            <div
              className="flex items-stretch border border-b-0 last:border-b border-gray-700"
              key={createKey()}
            >
              <div className="flex items-center justify-center w-[100px] text-center border-r border-r-gray-700">
                {tierTitle}
              </div>
              <div className="flex flex-wrap gap-[2px] p-[2px] w-full">
                {tierData
                  .filter((e) => !!ALL_EQUIPMENTS[e])
                  .map((equipmentName) => {
                    const equipment = { name: equipmentName, ...ALL_EQUIPMENTS[equipmentName] }
                    return (
                      <div key={createKey()}>
                        <Tooltip
                          interactive
                          className="bg-transparent p-0 m-0"
                          content={<EquipmentTooltipBox equipment={equipment} />}
                        >
                          <div>
                            <EquipmentBox equipment={equipment} />
                          </div>
                        </Tooltip>
                      </div>
                    )
                  })}
              </div>
            </div>
          )
        })}
      </div>

      <hr />
      <div className="flex flex-col gap-[4px]">
        <div className="font-bold text-[20px]">작성자 코멘트</div>
        <div className="whitespace-pre-line border p-[10px] shadow-md border-gray-700 rounded">
          {comment}
        </div>
      </div>
    </div>
  )
}

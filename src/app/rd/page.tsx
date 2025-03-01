'use client'

import createKey from '@/services/key-generator'
import React, { useState } from 'react'
import { debounce } from 'lodash'
import { Tooltip } from '@material-tailwind/react'
import { GradientButton } from '@/app/components/button/gradient-button'
import { useNextDepthNavigator } from '@/services/navigation'
import { EngineCore } from '@/const/character/character.interface'
import { CheckBoxGroup } from '@/services/common.enum'
import RdDeckList from '@/app/rd/rd-deck-list'

export default function RecommendationDeckPage() {
  const { router, openNewTab } = useNextDepthNavigator()
  const [searchedKeyword, setSearchedKeyword] = useState('')
  const [checkedAutoPreset, setCheckedAutoPreset] = useState(false)

  const handleSearchedKeywordChange = debounce((event: any) => {
    setSearchedKeyword(event.target.value)
  }, 300)

  const handleChangeAutoPreset = (event: any) => {
    setCheckedAutoPreset(event.target.checked)
  }

  const [checkedEngineCores, setCheckedEngineCores] = useState<CheckBoxGroup>(
    Object.keys(EngineCore).reduce(
      (acc, key) => ({
        ...acc,
        [key]: true,
      }),
      {},
    ),
  )

  const handleChangeEngineCore = (event: any) => {
    const { name, checked } = event.target
    setCheckedEngineCores((prev) => ({
      ...prev,
      [name]: checked,
    }))
  }

  return (
    <div className="flex flex-col gap-[10px]">
      <div className="flex flex-col gap-[6px]">
        <div className="flex flex-col gap-[4px]">
          <div className="text-gray-600/90 font-bold">
            * 모든 덱은 설명과, 가이드 링크를 읽어 보시는 것을 추천드립니다. 현재 한섭 상황과
            돌파수에 따라 가능성 유무가 존재합니다.
          </div>
          <div className="text-gray-600/90 font-bold">
            * 리더 표기가 없는 덱도 있습니다. 오토프리셋 불러오기 시 자동으로 설정됩니다.
          </div>
        </div>
        <div className="flex items-center gap-[4px]">
          <GradientButton
            className="p-[4px] rounded inline-flex items-center gap-[4px]"
            onClick={() => router.push('/wiki/auto-preset')}
          >
            오토 프리셋 설정 방법
            <i className="fa-solid fa-circle-question" />
          </GradientButton>
          <GradientButton
            className="p-[4px] rounded inline-flex items-center gap-[4px]"
            onClick={() => openNewTab('https://arca.live/b/resonance/129293763')}
          >
            자동 덱 만들기 가이드
            <i className="fa-solid fa-circle-question" />
          </GradientButton>
          <GradientButton
            className="p-[4px] rounded inline-flex items-center gap-[4px]"
            onClick={() => openNewTab('/reset-marathon/equipment')}
          >
            장비 티어 리스트
            <i className="fa-solid fa-circle-question" />
          </GradientButton>
        </div>
      </div>
      <div className="flex flex-col gap-[8px]">
        <div className="border rounded p-[8px] flex flex-col gap-[8px]">
          <label className="flex items-center gap-[10px] cursor-pointer">
            <input type="checkbox" checked={checkedAutoPreset} onChange={handleChangeAutoPreset} />
            <Tooltip content="체크시 오토프리셋 정보가 있는 덱만 필터합니다.">오토프리셋</Tooltip>
          </label>

          <div className="flex justify-start">
            <Tooltip
              className="bg-transparent p-0 m-0"
              content={
                <div className="max-w-[200px] ff-dh border-2 text-blue-gray-900 bg-white p-[4px] rounded shadow-md flex flex-col gap-[4px]">
                  <div className="text-[14px]">
                    * 엔진코어 클리어에 필요한 속성이 포함된 덱을 필터합니다.
                  </div>
                  <div className="flex flex-col gap-[4px] text-[20px] text-shadow-outline">
                    <div className="text-yellow-500">인뢰 : 과부하 코어</div>
                    <div className="text-blue-800">냉동 : 콘덴싱 코어</div>
                    <div className="text-red-500">점화 : 용광로 코어</div>
                  </div>
                </div>
              }
            >
              <div className="w-[100px] flex justify-start items-center cursor-pointer">
                엔진코어
                <i className="text-[14px] fa-solid fa-circle-question" />
              </div>
            </Tooltip>
            <div className="flex items-center gap-[4px]">
              {Object.keys(EngineCore).map((engineCore) => {
                return (
                  <label
                    className="flex items-center cursor-pointer select-none px-[4px]"
                    key={createKey()}
                  >
                    <input
                      type="checkbox"
                      className="flex border-2 rounded-md border-blue-200"
                      name={engineCore}
                      checked={checkedEngineCores[engineCore]}
                      onChange={handleChangeEngineCore}
                    />
                    <div className="ml-[2px]">
                      {EngineCore[engineCore as keyof typeof EngineCore]}
                    </div>
                  </label>
                )
              })}
            </div>
          </div>

          <div className="flex items-center gap-[10px]">
            <div>검색:</div>
            <input
              className="border border-gray-400 min-w-[300px] p-[4px]"
              type="text"
              onChange={handleSearchedKeywordChange}
              placeholder="승무원 이름을 검색하세요."
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[8px]">
        <RdDeckList
          checkedEngineCores={checkedEngineCores}
          searchedKeyword={searchedKeyword}
          checkedAutoPreset={checkedAutoPreset}
        />
      </div>
    </div>
  )
}

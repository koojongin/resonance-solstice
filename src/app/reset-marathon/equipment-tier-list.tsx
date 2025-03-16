'use client'

import createKey from '@/services/key-generator'
import { ALL_EQUIPMENTS, SORTED_ALL_EQUIPMENTS } from '@/const/archive/equipment.const'
import { EquipmentBox } from '@/app/equipments/rs-equipment-list'
import React, { useEffect, useState } from 'react'
import { Tooltip } from '@material-tailwind/react'
import { EquipmentTooltipContent } from '@/app/components/deck/equipment-tooltip-box'
import { EXTERNAL_USERS } from '@/const/external-users'
import { GradientButton } from '@/app/components/button/gradient-button'
import _, { debounce } from 'lodash'
import { DEFAULT_EQUIPMENT_TIER_LIST_DATA } from '@/const/equipment-tier-list-data.const'
import { ExtendedRSEquipment } from '@/app/equipments/equipment.type'
import { CommentBox } from '@/app/components/comment/comment-box'

export function EquipmentTierList() {
  const { comment } = DEFAULT_EQUIPMENT_TIER_LIST_DATA
  const [tierList] = useState(DEFAULT_EQUIPMENT_TIER_LIST_DATA.TIER_LIST)
  const [searchedKeyword, setSearchedKeyword] = useState('')

  const [remainItems, setRemainItems] = useState([])

  const handleSearchedKeywordChange = debounce((event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchedKeyword(event.target.value)
  }, 300)

  useEffect(() => {
    if (!tierList) return

    const allTierListItems = Object.values(tierList)
      .flat()
      .map((name) => ({
        name,
      }))

    const items = _.differenceBy(SORTED_ALL_EQUIPMENTS, allTierListItems, 'name')
    setRemainItems(items as any)
  }, [tierList])

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
        <a href="https://arca.live/b/resonance/118992601" target="_blank">
          <GradientButton className="p-[4px] rounded inline-flex items-center gap-[4px]">
            [장비 속성/강화 관련 가이드]
          </GradientButton>
        </a>
        <a href="https://arca.live/b/resonance/130000905" target="_blank">
          <GradientButton className="p-[4px] rounded inline-flex items-center gap-[4px]">
            [왜 좋은지? 관련 가이드]
          </GradientButton>
        </a>
      </div>
      <div className="flex flex-col gap-[4px]">
        <div className="border rounded p-[8px] flex flex-col gap-[4px]">
          <div className="flex items-center gap-[10px]">
            <div>검색:</div>
            <input
              className="border border-gray-400 min-w-[300px] p-[4px]"
              type="text"
              onChange={handleSearchedKeywordChange}
              placeholder="장비 이름을 검색하세요."
            />
          </div>
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
                      const isHighLight = equipment.name.indexOf(searchedKeyword) >= 0
                      return (
                        <div key={createKey()} className="relative z-0">
                          <Tooltip
                            interactive
                            className="bg-transparent p-0 m-0"
                            content={<EquipmentTooltipContent equipment={equipment} />}
                          >
                            <div className="flex flex-col gap-[2px] w-[80px] relative z-0">
                              <EquipmentBox equipment={equipment} />
                              <div className="px-[4px] text-center truncate text-[14px] py-[2px]">
                                {equipmentName}
                              </div>
                            </div>
                          </Tooltip>
                          {searchedKeyword && (
                            <>
                              {isHighLight && (
                                <div className="w-full absolute -z-10 inset-0 bg-green-300 opacity-100 blur-md" />
                              )}
                              {!isHighLight && (
                                <div className="z-50 absolute left-0 top-0 w-full h-full bg-gray-900 opacity-70" />
                              )}
                            </>
                          )}
                        </div>
                      )
                    })}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <hr />
      <div className="flex flex-col gap-[4px]">
        <div className="font-bold text-[20px]">작성자 코멘트</div>
        <div className="whitespace-pre-line border p-[10px] shadow-md border-gray-700 rounded">
          {comment}
        </div>
      </div>
      <hr />
      <div>
        <div className="ff-dh text-[30px]">위 티어 리스트에서는 제외된 장비</div>
        <div className="flex flex-wrap">
          {remainItems &&
            remainItems.map((equipment: any) => {
              return (
                <div key={createKey()}>
                  <Tooltip
                    interactive
                    className="bg-transparent p-0 m-0"
                    content={<EquipmentTooltipContent equipment={equipment} />}
                  >
                    <div className="flex flex-col gap-[2px] w-[80px] relative z-0">
                      <EquipmentBox equipment={equipment} />
                      <div className="px-[4px] text-center truncate text-[14px] py-[2px]">
                        {equipment.name}
                      </div>
                    </div>
                  </Tooltip>
                </div>
              )
            })}
        </div>
      </div>
      <div className="mt-[50px]">
        <CommentBox
          data={{
            target: 'reset-marathon-equipment',
            refId: '123456789012345678901234' as string,
          }}
        />
      </div>
    </div>
  )
}

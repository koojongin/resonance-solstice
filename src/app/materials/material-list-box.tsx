import { ExtendedRSMaterial } from '@/const/material/material.type'
import createKey from '@/services/key-generator'
import { MaterialBox } from '@/app/components/material/material-box'
import React, { useEffect, useState } from 'react'
import { useNextDepthNavigator } from '@/services/navigation'
import _ from 'lodash'
import { ItemBoxViewMode } from '@/const/item/item.enum'
import { Tooltip } from '@material-tailwind/react'

export function MaterialListBox({ items, searchedKeyword, checkedGrades }: any) {
  const { router } = useNextDepthNavigator()
  const [materials, setMaterials] = useState<ExtendedRSMaterial[]>([...items])
  const [viewMode, setViewMode] = useState<ItemBoxViewMode>(ItemBoxViewMode.MINIMIZED)
  // trainEquipmentType
  useEffect(() => {
    setMaterials(
      [...items].filter((material) => {
        const validGrades: string[] = _.keys(_.pickBy(checkedGrades, Boolean))
        const isValidGrade = validGrades.includes(material.grade)

        const isValidKeyword = material.name.indexOf(searchedKeyword) >= 0
        return isValidGrade && (searchedKeyword ? isValidKeyword : true)
      }),
    )
  }, [checkedGrades, searchedKeyword])
  return (
    <div className="flex flex-col gap-[4px]">
      <div className="flex items-stretch gap-[10px]">
        <div className="flex gap-[4px] border">
          {Object.values(ItemBoxViewMode).map((viewName, index) => {
            return (
              <div
                className={`cursor-pointer flex items-center justify-center w-[40px] ${viewMode === viewName && 'bg-blue-gray-900 text-white'}`}
                key={createKey()}
                onClick={() => setViewMode(viewName)}
              >
                뷰{index + 1}
              </div>
            )
          })}
        </div>
        <div className="rounded-[4px] inline-flex p-[4px] text-white bg-gray-700 border-white/50 border-dotted border">
          재료 - {materials.length} / {items.length}
        </div>
        {searchedKeyword && (
          <div className="rounded-[4px] flex items-center">"{searchedKeyword}" 검색됨</div>
        )}
      </div>
      <div
        className={`flex ${viewMode === ItemBoxViewMode.MAXIMIZED ? 'flex-col gap-[8px]' : 'flex-wrap'}`}
      >
        {materials.map((material) => {
          return (
            <Tooltip
              key={createKey()}
              className="bg-white max-w-[400px] text-blue-gray-900 shadow-md border rounded"
              content={
                <div>
                  <div>{material.name}</div>
                  {material.desc && (
                    <>
                      <hr />
                      <div className="whitespace-pre-line">{material.desc}</div>
                    </>
                  )}
                </div>
              }
            >
              <div
                className="flex gap-[4px] border items-stretch shadow-md cursor-pointer"
                onClick={() => router.push(`/materials/${material.name}`)}
              >
                <div className="flex items-center justify-center relative">
                  <MaterialBox material={material} />
                  {viewMode === ItemBoxViewMode.MINIMIZED && (
                    <div className="absolute left-0 bottom-0 z-20 ff-dh text-[16px] text-white text-shadow-outline truncate w-full px-[4px] text-center">
                      {material.name}
                    </div>
                  )}
                </div>
                {viewMode === ItemBoxViewMode.MAXIMIZED && (
                  <div className="flex flex-col p-[8px] px-[4px] gap-[4px]">
                    <div className="ff-dh text-[16px] text-white text-shadow-outline">
                      {material.name}
                    </div>
                    <hr />
                    <div className="whitespace-pre-line leading-tight">{material.desc}</div>
                  </div>
                )}
              </div>
            </Tooltip>
          )
        })}
      </div>
    </div>
  )
}

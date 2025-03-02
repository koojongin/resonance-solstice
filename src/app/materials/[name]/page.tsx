'use client'

import { useParams } from 'next/navigation'
import { MATERIALS } from '@/const/material.const'
import React from 'react'
import {
  getMaterialBgFrameUrl,
  getMaterialBottomFrameUrl,
} from '@/services/utils/material-box-converter'
import { GradientHeaderDiv } from '@/app/components/div/gradient-header-div'
import { ALL_NAMED_MAPS } from '@/const/archive/named-map.const'
import createKey from '@/services/key-generator'
import { GradientButton } from '@/app/components/button/gradient-button'
import { useNextDepthNavigator } from '@/services/navigation'
import { TRAIN_EQUIPMENTS } from '@/const/item/train-equipment.const'
import { CONVERTED_MONSTERS } from '@/const/monster/monster.const'
import { MonsterBoxSquare } from '@/app/components/monster/monster-box'
import { Tooltip } from '@material-tailwind/react'
import { RSHighlightedText } from '@/services/utils/highlight-text'
import { ItemStringLinkWithMap } from '@/app/components/material/material-link'
import { MaterialBoxResponsive } from '@/app/components/material/material-box'
import { ItemBoxResponsive } from '@/app/components/item/item-box'
import { ALL_EQUIPMENTS } from '@/const/archive/equipment.const'
import { ItemTooltipBox } from '@/app/components/item/item-tooltip-box'

export default function MaterialDetailPage() {
  const { name } = useParams()
  const { router } = useNextDepthNavigator()

  const decodedName = decodeURIComponent(name as string)

  const material = MATERIALS[decodedName] || TRAIN_EQUIPMENTS[decodedName]
  if (!material) return <div>검색된 재료 데이터 없음.</div>

  const exchangeMaps = ALL_NAMED_MAPS.filter((map) => {
    const exchangeItems = map['거래소'] || []
    return exchangeItems.filter((item) => item.name === decodedName).length > 0
  })

  const dropMonsters = CONVERTED_MONSTERS.filter((monster) => monster.drops?.includes(decodedName))

  return (
    <div className="flex flex-col gap-[10px]">
      <div className="flex flex-col gap-[4px]">
        <GradientHeaderDiv>아이템 정보</GradientHeaderDiv>
        <div className="flex items-stretch bg-gray-800/80 p-[10px] rounded shadow-md shadow-gray-600">
          <div>
            <div className="min-w-[160px] w-[160px] relative border rounded overflow-hidden shadow-md shadow-gray-600">
              <img
                className="w-full top-0 absolute z-0"
                src={getMaterialBgFrameUrl(material.grade)}
              />
              <img
                className="w-full top-0 relative z-20 rounded w-full p-[4px]"
                src={material.thumbnail}
              />
              <img
                className="w-full absolute z-10 top-0"
                src={getMaterialBottomFrameUrl(material.grade)}
              />
            </div>
          </div>
          <div className="p-[10px] pt-0 pr-0 text-white ff-dh w-full flex flex-col gap-[4px]">
            <div className="text-[20px]">{material.grade}</div>
            <div className="text-[24px]">{decodedName}</div>
            <div className="p-[10px] bg-gray-800/40 w-full min-h-[120px] rounded border-2 border-gray-700 shadow-md shadow-gray-600 ff-sdn">
              {material.desc && (
                <div className="whitespace-pre-line break-words">
                  <RSHighlightedText text={material.desc} />
                </div>
              )}
              {!material.desc && (
                <div className="whitespace-pre-line break-words">
                  아이템 세부 정보가 등록되어있지 않습니다.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {(material?.includedItems || []).length > 0 && (
        <div className="flex flex-col gap-[4px]">
          <div className="ff-dh text-[20px] text-gray-800">다음 아이템이 포함되어 있습니다.</div>
          <div className="flex flex-wrap gap-[4px]">
            {material.includedItems!.map((itemName) => {
              const item = {
                ...(MATERIALS[itemName] || ALL_EQUIPMENTS[itemName]),
                name: itemName,
              }
              return (
                <ItemTooltipBox key={createKey()} item={item}>
                  <div className="w-[70px]">
                    <ItemBoxResponsive item={item} withoutIconPadding />
                  </div>
                </ItemTooltipBox>
              )
            })}
          </div>
        </div>
      )}
      <hr />
      <div className="flex flex-col gap-[4px]">
        <GradientHeaderDiv>
          획득 정보({material?.earnsPath?.length.toLocaleString() || 0})
        </GradientHeaderDiv>
        <div className="inline-flex flex-wrap gap-[4px]">
          {material?.earnsPath?.map((earnPath) => {
            return (
              <ItemStringLinkWithMap key={createKey()} text={earnPath.desc}>
                <div className="inline-flex border-gray-500 border w-max rounded p-[4px]">
                  {earnPath.desc}
                </div>
              </ItemStringLinkWithMap>
            )
          })}
        </div>
      </div>
      <div className="flex flex-col gap-[4px]">
        <GradientHeaderDiv>
          드랍 몬스터({dropMonsters.length.toLocaleString() || 0})
        </GradientHeaderDiv>
        <div className="inline-flex flex-wrap gap-[4px]">
          {dropMonsters.map((monster) => {
            return (
              <Tooltip key={createKey()} content={monster.name}>
                <div
                  className="inline-flex border-gray-500 border w-[100px] rounded cursor-pointer"
                  onClick={() => {
                    router.push(`/monsters/${monster.name}`)
                  }}
                >
                  <MonsterBoxSquare monster={monster} />
                </div>
              </Tooltip>
            )
          })}
        </div>
      </div>
      <div>
        <GradientHeaderDiv>거래소 구매({exchangeMaps.length.toLocaleString()})</GradientHeaderDiv>
        <div className="flex flex-wrap gap-[4px]">
          {exchangeMaps.map((map) => {
            return (
              <div key={createKey()}>
                <GradientButton
                  className="cursor-pointer p-[8px] rounded shadow-lg"
                  onClick={() => router.push(`/map/named/${map.name}`)}
                >
                  {map.name}
                </GradientButton>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

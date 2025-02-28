'use client'

import { useParams } from 'next/navigation'
import React from 'react'
import { GradientHeaderDiv } from '@/app/components/div/gradient-header-div'
import { ALL_NAMED_MAPS } from '@/const/archive/named-map.const'
import { useNextDepthNavigator } from '@/services/navigation'
import { ALL_EQUIPMENTS } from '@/const/archive/equipment.const'
import {
  getMaterialBgFrameUrl,
  getMaterialBottomFrameUrl,
} from '@/services/utils/material-box-converter'
import createKey from '@/services/key-generator'
import { RSHighlightedText } from '@/services/utils/highlight-text'
import { LinkedDeckListBox } from '@/app/characters/[name]/linked-deck-list-box'
import { RECOMMENDATION_DECKS } from '@/app/rd/rd-decks.const'
import { LinkMaterialOrEquipment } from '@/app/components/material/link-material-or-equipment'
import { MaterialStringLink } from '@/app/components/material/material-link'

export default function EquipmentDetailPage() {
  const { name } = useParams()
  const { router } = useNextDepthNavigator()

  const decodedName = decodeURIComponent(name as string)

  const equipment = { ...ALL_EQUIPMENTS[decodedName], name: decodedName }
  if (!equipment) return <div>검색된 재료 데이터 없음.</div>

  const relatedMaps = ALL_NAMED_MAPS.filter((map) => {
    const exchangeItems = map['거래소'] || []
    return exchangeItems.filter((item) => item.name === decodedName).length > 0
  })

  const linkedRecommendationDecks = RECOMMENDATION_DECKS.filter((deck) =>
    deck.characters.find((c) => c.equipments?.includes(decodedName)),
  )

  return (
    <div className="flex flex-col gap-[10px]">
      <div className="flex flex-col gap-[4px]">
        <GradientHeaderDiv>아이템 정보</GradientHeaderDiv>
        <div className="flex items-stretch bg-gray-800/80 p-[10px] rounded shadow-md shadow-gray-600">
          <div>
            <div className="min-w-[160px] w-[160px] relative border rounded overflow-hidden shadow-md shadow-gray-600">
              <img
                className="w-full top-0 absolute z-0"
                src={getMaterialBgFrameUrl(equipment.grade)}
              />
              <img
                className="w-full top-0 relative z-20 rounded w-full p-[4px]"
                src={equipment.thumbnail}
              />
              <img
                className="w-full absolute z-10 top-0"
                src={getMaterialBottomFrameUrl(equipment.grade)}
              />
            </div>
          </div>
          <div className="p-[10px] pt-0 pr-0 text-white ff-dh w-full flex flex-col gap-[4px]">
            <div className="text-[20px]">{equipment.grade}</div>
            <div className="text-[24px]">{decodedName}</div>
            <div className="p-[10px] bg-gray-800/40 w-full min-h-[120px] rounded border-2 border-gray-700 shadow-md shadow-gray-600 ff-sdn">
              {equipment.desc && (
                <div className="whitespace-pre-line break-words">
                  <RSHighlightedText text={equipment.desc} />
                </div>
              )}
              {!equipment.desc && (
                <div className="whitespace-pre-line break-words">
                  아이템 세부 정보가 등록되어있지 않습니다.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-[4px]">
        <GradientHeaderDiv>획득 정보</GradientHeaderDiv>
        <div className="inline-flex flex-wrap gap-[4px]">
          {equipment.earnsPath.map((earnPath) => {
            return (
              <MaterialStringLink key={createKey()} text={earnPath.desc}>
                <div className="inline-flex border-gray-500 border w-max rounded p-[4px]">
                  {earnPath.desc}
                </div>
              </MaterialStringLink>
            )
          })}
        </div>
      </div>

      {/* <div className="flex flex-col gap-[4px]"> */}
      {/*   <GradientHeaderDiv>연관 추천덱</GradientHeaderDiv> */}
      {/* </div> */}

      <LinkedDeckListBox title="아이템이 사용된 추천덱" decks={linkedRecommendationDecks} />

      {/* // */}
    </div>
  )
}

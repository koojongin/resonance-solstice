'use client'

import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { GradientHeaderDiv } from '@/app/components/div/gradient-header-div'
import { useNextDepthNavigator } from '@/services/navigation'
import { ALL_EQUIPMENTS, RSEquipmentType } from '@/const/archive/equipment.const'
import {
  getMaterialBgFrameUrl,
  getMaterialBottomFrameUrl,
} from '@/services/utils/material-box-converter'
import createKey from '@/services/key-generator'
import { RSHighlightedText } from '@/services/utils/highlight-text'
import { RECOMMENDATION_DECKS } from '@/app/rd/rd-decks.const'
import { ItemStringLinkWithMap } from '@/app/components/material/material-link'
import { RS_FACTION } from '@/const/character/character.enum'
import { WEAPON_SUFFIXES } from '@/const/item/options/weapon.const'
import { copyToClipboard } from '@/services/utils/copy-clipboard'
import { toast } from 'react-toastify'
import { CommentBox } from '@/app/components/comment/comment-box'
import { CommentTarget } from '@/const/api/comment-target'
import { EquipmentRelatedBox } from '@/app/components/deck/equipment-related-box'
import { ARMOR_SUFFIXES } from '@/const/item/options/armor.const'
import { ACCESSORY_SUFFIXES } from '@/const/item/options/accessory.const'

export default function EquipmentDetailPage() {
  const { name } = useParams()
  const { router } = useNextDepthNavigator()

  const [suffixes, setSuffixes] = useState<Array<string> | undefined | null>()

  const decodedName = decodeURIComponent(name as string)

  const equipment = {
    ...ALL_EQUIPMENTS[decodedName],
    name: decodedName,
  }

  const linkedRecommendationDecks = RECOMMENDATION_DECKS.filter((deck) =>
    deck.characters.find((c) => c.equipments?.includes(decodedName)),
  )

  const factionKey = Object.keys(RS_FACTION).find(
    (key) => RS_FACTION[key as keyof typeof RS_FACTION] === equipment.faction,
  )

  const getSuffixes = () => {
    if (equipment.type === RSEquipmentType.WEAPON) {
      return WEAPON_SUFFIXES[factionKey as string]
    }
    if (equipment.type === RSEquipmentType.ARMOR) {
      return ARMOR_SUFFIXES[factionKey as string]
    }
    if (equipment.type === RSEquipmentType.ACCESSORY) {
      return ACCESSORY_SUFFIXES[factionKey as string]
    }
    return null
  }

  const originSuffixes = getSuffixes()

  const onChangeAttribute = (value: string) => {
    setSuffixes((originSuffixes || []).filter((suffix) => suffix.indexOf(value) >= 0))
  }

  useEffect(() => {
    setSuffixes(originSuffixes)
  }, [])

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
            <div className="text-[20px] flex flex-wrap gap-[4px] items-center">
              <div>{equipment.grade}</div>
              <div className="text-shadow-outline-white-gray text-yellow-500">
                {equipment.faction}
              </div>
            </div>
            <div className="text-[30px]">{decodedName}</div>
            <div className="p-[10px] bg-gray-800/40 w-full min-h-[120px] rounded border-2 border-gray-700 shadow-md shadow-gray-600 ff-sdn">
              {equipment.desc && (
                <div className="whitespace-pre-line break-words leading-tight">
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
          {equipment.earnsPath &&
            equipment.earnsPath.map((earnPath) => {
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

      {suffixes && (
        <div className="flex flex-col gap-[4px]">
          <GradientHeaderDiv>
            장비 속성 접사({suffixes.length.toLocaleString()}) -{' '}
            <span className="text-yellow-600">{equipment.faction}</span>
          </GradientHeaderDiv>
          <div>
            <input
              className="border border-gray-800 w-full p-[8px] rounded"
              placeholder="장비 속성 접사를 필터하려면 내용을 입력하세요."
              onChange={(e) => onChangeAttribute(e.target.value)}
            />
          </div>
          <div className="flex flex-col max-h-[400px] overflow-y-scroll border border-gray-500 rounded">
            {suffixes.map((suffix, index) => {
              return (
                <div
                  key={`eq_de_suffix_${index}`}
                  className="border-b border-blue-gray-700 border-dashed flex items-center gap-[4px] p-[2px] py-[10px] hover:bg-blue-400 hover:text-white cursor-pointer"
                  onClick={async () => {
                    await copyToClipboard(suffix)
                    toast(`접미사가 복사되었습니다.`)
                  }}
                >
                  <div className="min-w-[50px] text-center">{index + 1}</div>
                  <div>{suffix}</div>
                </div>
              )
            })}
          </div>
        </div>
      )}

      {/* <LinkedDeckListBox title="아이템이 사용된 추천덱" decks={linkedRecommendationDecks} /> */}
      <div>
        <EquipmentRelatedBox name={decodedName} />
      </div>

      <div className="mt-[50px]">
        <CommentBox
          data={{
            target: `${CommentTarget.Equipment}${decodedName}`,
            refId: '123456789012345678901234' as string,
          }}
        />
      </div>
    </div>
  )
}

import { motion } from 'framer-motion'
import createKey from '@/services/key-generator'
import { RECOMMENDATION_CHARACTER_EQUIPMENT } from '@/const/character/character-recommendation-equipment.const'
import { ALL_EQUIPMENTS } from '@/const/archive/equipment.const'
import { EquipmentTooltipBox } from '@/app/components/character-frame/rs-character-card'
import { CharacterThumbnailBox } from '@/app/components/character-frame/character-thumbnail-box'
import React, { useState } from 'react'
import { RS_CHARACTER_DICT } from '@/const/character/character.const'

export function GenericEquipmentBox({ characters }: { characters: string[] }) {
  const [isVisibleGenericEqBox, setIsVisibleGenericEqBox] = useState(false)
  const commonRecommendationCharacterData = characters
    .map((originName) => {
      return {
        character: RS_CHARACTER_DICT[originName],
        recommendationEquipments: RECOMMENDATION_CHARACTER_EQUIPMENT[originName] || [],
      }
    })
    .filter((c) => c.recommendationEquipments.length > 0)

  return (
    <div className="border p-[10px] rounded bg-gray-100 flex flex-col gap-[4px]">
      <div
        className="ff-dh text-[24px] flex gap-[4px] items-center cursor-pointer select-none"
        onClick={() => setIsVisibleGenericEqBox((prev) => !prev)}
      >
        범용적인 추천 장비
        {isVisibleGenericEqBox && <i className="fa-solid fa-square-minus" />}
        {!isVisibleGenericEqBox && <i className="fa-solid fa-square-caret-down" />}
      </div>
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: isVisibleGenericEqBox ? 'auto' : 0 }}
        transition={{
          type: 'tween',
          ease: 'easeOut',
          duration: 0.1,
        }}
        style={{
          overflow: 'hidden',
        }}
      >
        <div className="flex flex-col gap-[4px]">
          <div className="text-gray-800 ff-dh flex flex-wrap whitespace-pre-line gap-[2px]">
            * 아래 장비는 <span className="text-red-500">추천덱 작성글과 별개의 일반 데이터</span>
            정보입니다.(
            <span className="text-red-500 underline">추천 덱의 장비를 우선</span>해서 참고하세요.)
          </div>
          <div className="flex flex-col gap-[4px]">
            {[
              {
                character: null,
                recommendationEquipments: [],
              },
              ...commonRecommendationCharacterData!,
            ].map((characterData, index) => {
              if (index === 0) {
                return (
                  <div
                    key={createKey()}
                    className="flex items-center gap-[10px] border-b-2 border-cyan-400 mr-auto"
                  >
                    <div className="w-[70px] h-[70px] flex items-center justify-center bg-cyan-800 text-white text-[20px]">
                      공용
                    </div>
                    <div className="flex flex-wrap gap-[2px]">
                      {RECOMMENDATION_CHARACTER_EQUIPMENT.COMMON.map((equipmentName) => {
                        const equipment = {
                          name: equipmentName,
                          ...ALL_EQUIPMENTS[equipmentName],
                        }
                        return (
                          <div className="w-[70px] cursor-poitner" key={createKey()}>
                            <EquipmentTooltipBox equipment={equipment} />
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )
              }

              const { character, recommendationEquipments } = characterData
              return (
                <div
                  key={createKey()}
                  className="flex items-center gap-[10px] border-b-2 border-cyan-400 mr-auto"
                >
                  <CharacterThumbnailBox character={character!} />
                  <div className="flex flex-wrap gap-[2px]">
                    {recommendationEquipments.map((equipmentName) => {
                      const equipment = {
                        name: equipmentName,
                        ...ALL_EQUIPMENTS[equipmentName],
                      }
                      return (
                        <div className="w-[70px] cursor-poitner" key={createKey()}>
                          <EquipmentTooltipBox equipment={equipment} />
                        </div>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

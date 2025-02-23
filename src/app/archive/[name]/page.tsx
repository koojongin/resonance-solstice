'use client'

import { useParams } from 'next/navigation'
import { CHARACTER_SKILLS } from '@/const/character/character-skill.const'
import createKey from '@/services/key-generator'
import React from 'react'
import { CharacterSkillBox } from '@/app/characters/[name]/character-skill-container'
import { RSHighlightedText } from '@/services/utils/highlight-text'
import { CONVERTED_ALL_EQUIPMENTS } from '@/const/archive/equipment.const'
import { EquipmentBox } from '@/app/equipments/rs-equipment-list'
import { useNextDepthNavigator } from '@/services/navigation'
import { Tooltip } from '@material-tailwind/react'
import { TOTAL_ARCHIVE_MAP } from '@/const/archive'

export default function ArchiveDetailPage() {
  const { name } = useParams()
  const { router } = useNextDepthNavigator()
  const archiveName = decodeURIComponent(name as string)
  const data = TOTAL_ARCHIVE_MAP[archiveName]

  const keyword = `[${archiveName}]`
  const linkedSkills = Object.values(CHARACTER_SKILLS).filter(
    (skill) => skill.desc.indexOf(keyword) >= 0,
  )

  const linkedEquipments = Object.values(CONVERTED_ALL_EQUIPMENTS).filter(
    (equipment) => (equipment.desc || '').indexOf(keyword) >= 0,
  )

  return (
    <div className="flex flex-col gap-[10px]">
      <div className="flex flex-col gap-[4px]">
        <div className="bg-gradient-to-r from-blue-gray-900 to-white text-white ff-dh text-[26px] p-[8px] py-[4px] rounded">
          설명
        </div>
        {data && (
          <div className="flex items-stretch min-h-[40px]">
            {data?.thumbnail && (
              <div className="w-[80px]">
                <img
                  className="w-full border-2 border-gray-400 shadow-lg shadow-gray-300 rounded overflow-hidden"
                  src={data.thumbnail}
                />
              </div>
            )}
            <div className="flex flex-col gap-[4px] p-[8px] w-full">
              <div className="ff-dh text-[24px] text-shadow-outline text-white">{archiveName}</div>
              <hr />
              <div className="">
                <RSHighlightedText text={data.desc} />
              </div>
            </div>
          </div>
        )}
        {!data && <div>{keyword}데이터가 없습니다.</div>}
      </div>

      <hr />

      <div className="flex flex-col gap-[4px]">
        <div className="bg-gradient-to-r from-blue-gray-900 to-white text-white ff-dh text-[26px] p-[8px] py-[4px] rounded">
          관련된 장비({linkedEquipments.length.toLocaleString()})
        </div>
        <div className="flex flex-wrap gap-[4px]">
          {linkedEquipments.map((equipment) => {
            return (
              <Tooltip
                key={createKey()}
                content={
                  <div>
                    [{equipment.type}] {equipment.name}
                  </div>
                }
              >
                <div
                  className="flex flex-col cursor-pointer"
                  onClick={() => {
                    router.push(`/equipments/${equipment.name}`)
                  }}
                >
                  <EquipmentBox equipment={equipment} />
                </div>
              </Tooltip>
            )
          })}
        </div>
      </div>

      <hr />

      <div className="flex flex-col gap-[4px]">
        <div className="bg-gradient-to-r from-blue-gray-900 to-white text-white ff-dh text-[26px] p-[8px] py-[4px] rounded">
          관련된 스킬({linkedSkills.length.toLocaleString()})
        </div>
        <div className="flex flex-wrap gap-[8px]">
          {linkedSkills.map((skill) => {
            return (
              <div key={createKey()} className="w-[calc(50%-4px)] flex flex-col">
                <CharacterSkillBox skill={skill} onShowCharacter />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

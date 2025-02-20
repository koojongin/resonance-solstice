'use client'

import { useParams } from 'next/navigation'
import { TOTAL_ARCHIVE_MAP } from '@/const/archieve'
import { CHARACTER_SKILLS } from '@/const/character/character-skill.const'
import createKey from '@/services/key-generator'
import React from 'react'
import { CharacterSkillBox } from '@/app/characters/[name]/character-skill-container'
import { RSHighlightedText } from '@/services/utils/highlight-text'

export default function ArchieveDetailPage() {
  const { name } = useParams()
  const archieveName = decodeURIComponent(name as string)
  const data = TOTAL_ARCHIVE_MAP[archieveName]

  const keyword = `[${archieveName}]`
  const linkedSkills = Object.values(CHARACTER_SKILLS).filter(
    (skill) => skill.desc.indexOf(keyword) >= 0,
  )

  return (
    <div className="flex flex-col gap-[10px]">
      <div>
        <div className="bg-gradient-to-r from-blue-gray-900 to-white text-white ff-dh text-[26px] p-[8px] py-[4px] rounded">
          설명
        </div>
        {data && (
          <div className="flex items-stretch min-h-[40px]">
            {data?.thumbnail && (
              <div className="w-[80px] border shadow-lg shadow-gray-300 rounded overflow-hidden">
                <img className="w-full" src={data.thumbnail} />
              </div>
            )}
            <div className="flex flex-col gap-[4px] p-[8px] w-full">
              <div className="ff-dh text-[24px] text-shadow-outline text-white">{archieveName}</div>
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
          연결된 스킬({linkedSkills.length.toLocaleString()})
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

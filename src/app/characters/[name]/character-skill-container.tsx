import { CHARACTER_SKILLS, CharacterSkill } from '@/const/character/character-skill.const'
import createKey from '@/services/key-generator'
import { RSHighlightedText } from '@/services/utils/highlight-text'
import React from 'react'

export function CharacterSkillContainer({ skills }: { skills: string[] }) {
  return (
    <div className="flex flex-col gap-[4px]">
      <div className="bg-gradient-to-r from-blue-gray-900 to-white text-white ff-dh text-[26px] p-[8px] py-[4px] rounded border border-white">
        스킬
      </div>
      <div className="flex flex-col gap-[4px]">
        {skills.map((skillName: string) => {
          const skill = CHARACTER_SKILLS[skillName]
          return <CharacterSkillBox key={createKey()} skill={skill} />
        })}
      </div>
    </div>
  )
}

export function CharacterSkillBox({ skill }: { skill: CharacterSkill }) {
  return (
    <div
      key={createKey()}
      className="h-full inline-flex gap-[4px] bg-blue-gray-900/60 p-[10px] shadow-xl rounded"
    >
      <div className="h-[80px] w-[80px]">
        <img src={skill.thumbnail} className="w-full border-2 rounded" />
      </div>
      <div className="flex flex-col gap-[4px] text-white w-full pt-[4px]">
        <div className="flex justify-between">
          <div className="text-[18px] font-bold gap-[4px] flex flex-col">
            <div className="flex items-center gap-[8px]">
              {skill.isGeneratedCard && (
                <div className="bg-gray-300 text-[16px] text-gray-800 rounded-[3px] px-[4px] py-[2px]">
                  파생 카드
                </div>
              )}
              {skill.name}
            </div>
            {skill.descSub && (
              <div className="font-normal italic text-gray-300 text-[16px]">{skill.descSub}</div>
            )}
          </div>
          <div className="flex items-center gap-[2px]">
            {skill?.amount > 0 && (
              <div className="bg-yellow-800 text-white py-[2px] px-[14px] rounded ff-dh">
                수량:{skill.amount}
              </div>
            )}
            <div className="bg-yellow-800 text-white py-[2px] px-[14px] rounded ff-dh">
              COST:{skill.cost}
            </div>
          </div>
        </div>
        <hr />

        <div className="whitespace-pre-line leading-normal">
          <RSHighlightedText text={skill.desc} />
        </div>
      </div>
    </div>
  )
}

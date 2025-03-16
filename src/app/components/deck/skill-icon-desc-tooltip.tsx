import { CharacterSkill } from '@/const/character/character-skill.const'
import { Tooltip } from '@material-tailwind/react'
import { RSHighlightedText } from '@/services/utils/highlight-text'
import React from 'react'

export function SkillIconDescTooltip({
  children,
  skill,
}: {
  children: any
  skill: CharacterSkill
}) {
  return (
    <Tooltip
      interactive
      className="max-w-[300px] whitespace-pre-line break-words leading-normal bg-white shadow-xl text-blue-gray-900"
      content={
        <div className="flex flex-col gap-[4px]">
          <div className="ff-dh text-[20px]">{skill.name}</div>
          <hr className="border-blue-gray-700" />
          <div className="whitespace-pre-line break-all">
            <RSHighlightedText text={skill.desc} />
          </div>
        </div>
      }
    >
      {children}
    </Tooltip>
  )
}

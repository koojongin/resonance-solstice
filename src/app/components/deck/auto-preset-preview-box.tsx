import { RS_CHARACTER_DICT } from '@/const/character/character.const'
import { convertCharacterThumbnailUrl } from '@/services/character-url'
import React, { useEffect, useState } from 'react'
import { SkillIconDescTooltip } from '@/app/components/deck/skill-icon-desc-tooltip'
import { CHARACTER_DETAIL } from '@/const/character/character-detail.const'
import { CHARACTER_SKILLS, CharacterSkill } from '@/const/character/character-skill.const'
import { RSCharacter } from '@/const/character/character.interface'
import createKey from '@/services/key-generator'

export function AutoPresetPreviewBox({
  autoPresetPreviews = [],
  autoPresetPreviewBans = [],
  characterNames,
}: {
  characterNames: string[]
  autoPresetPreviews?: string[] | undefined
  autoPresetPreviewBans?: string[] | undefined
}) {
  const [skillDict, setSkillDict] = useState<{
    [key: string]: { originName: string; skill: any }
  }>()

  const [previews, setPreviews] = useState<string[]>([])
  const [isAvailable, setIsAvailable] = useState<boolean>(true)

  const initPreviewData = () => {
    setIsAvailable(true)
    const dict: any = {}
    characterNames.forEach((characterName) => {
      const detail = CHARACTER_DETAIL[characterName]
      if (detail?.SKILLS) {
        detail?.SKILLS.forEach((skillName: string) => {
          const skill = CHARACTER_SKILLS[skillName]
          dict[skillName] = {
            originName: characterName,
            skill,
          }
        })
        return
      }
      setIsAvailable(false)
    })
    setSkillDict({ ...(skillDict || {}), ...dict })
    if (!autoPresetPreviews || autoPresetPreviews?.length === 0) {
      setPreviews(Object.keys(dict))
    } else {
      setPreviews(autoPresetPreviews || [])
    }
  }

  useEffect(() => {
    if (characterNames.filter((d) => !!d).length !== 5) return
    initPreviewData()
  }, [])

  useEffect(() => {
    initPreviewData()
  }, [characterNames])

  return (
    <div className="flex flex-wrap gap-[6px] justify-center border border-gray-300 rounded p-[4px] relative sm:grid sm:grid-cols-6 sm:p-0 sm:gap-[1px]">
      {!isAvailable && (
        <div className="w-full h-full absolute top-0">
          <div className="absolute w-full h-full bg-red-300/80 z-10" />
          <div className="absolute top-0 text-white w-full h-full flex items-center justify-center z-20 ff-dh text-[30px] p-[30px] text-center">
            5명의 승무원중 스킬 데이터가 부족한 승무원이 있어,
            <br />
            프리뷰 설정 및 조회가 불가능합니다.
            <br />
            개발 당시 넣은 승무원 데이터가 충분하지 않은 상태
          </div>
        </div>
      )}
      {skillDict &&
        previews.concat(autoPresetPreviewBans)?.map((key, index) => {
          const { originName, skill } = skillDict[key] || {}
          const character = RS_CHARACTER_DICT[originName]
          const totalLength = previews!.length + (previews || []).length
          const isBan = totalLength - index <= (previews || []).length
          if (!skill || !originName) {
            return (
              <div
                key={`deck_app_${key}_${index}`}
                className="text-center border border-red-400 w-[100px] flex flex-col gap-[2px] items-center justify-center"
              >
                <div>NoData</div>
                <div>{key}</div>
              </div>
            )
          }
          return (
            <PreviewSkillCardBox
              key={createKey()}
              character={character}
              skill={skill}
              isBan={isBan}
            />
          )
        })}
    </div>
  )
}

export function PreviewSkillCardBox({
  character,
  skill,
  isBan,
  disableTooltip,
  onSelectCard,
}: {
  onSelectCard?: (skillName: string) => void
  isBan?: boolean
  character: RSCharacter
  skill: CharacterSkill
  disableTooltip?: boolean
}) {
  return (
    <div
      className="w-[100px] border-2 border-black/50 shadow-md shadow-gray-800 relative rounded overflow-hidden bg-white sm:w-auto sm:shadow-none"
      onClick={() => onSelectCard && onSelectCard(skill.name)}
    >
      <div className="absolute right-0 top-0 m-[2px] font-bold w-[24px] h-[24px] flex items-center justify-center bg-gray-700 text-white border-2 border-gray-800 rounded-full shadow-md shadow-gray-800">
        {skill.cost}
      </div>
      <img src={character.thumbnail} className="" />
      {!disableTooltip && (
        <>
          <SkillIconDescTooltip skill={skill}>
            <div className="bottom-0 absolute w-full flex justify-center pb-[22px] cursor-pointer">
              <img className="w-[60px] h-[60px] border" src={skill.thumbnail} />
            </div>
          </SkillIconDescTooltip>
        </>
      )}
      {disableTooltip && (
        <div className="bottom-0 absolute w-full flex justify-center pb-[22px]">
          <img className="w-[60px] h-[60px] border" src={skill.thumbnail} />
        </div>
      )}
      <div className="absolute bottom-0 p-[2px] ff-dh text-shadow-outline text-white">
        {skill.name}
      </div>
      {isBan && (
        <div className="absolute top-0 min-w-full min-h-full">
          <div className="absolute min-w-full min-h-full bg-red-300 opacity-50" />
          <div className="absolute min-w-full min-h-full z-10 flex-col flex items-center justify-center gap-[4px]">
            <i className="fa-solid fa-ban text-[20px] text-white font-bold" />
            <div className="text-[15px] ff-dh text-white py-[2px] px-[4px] border-y border-white bg-gradient-to-r from-black/40 via-black/70 to-black/40">
              사용 금지
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

import { RS_CHARACTER_DICT } from '@/const/character/character.const'
import { convertCharacterThumbnailUrl } from '@/services/character-url'
import React from 'react'
import { RecommendationUserDeck } from '@/app/rd/user/user-deck.interface'
import { SkillIconDescTooltip } from '@/app/components/deck/skill-icon-desc-tooltip'
import { RecommendationDeck } from '@/app/rd/rd-decks.const'
import { CHARACTER_DETAIL } from '@/const/character/character-detail.const'
import { CHARACTER_SKILLS } from '@/const/character/character-skill.const'

export function AutoPresetPreviewBox({
  deck,
}: {
  deck: RecommendationUserDeck | RecommendationDeck
}) {
  const { skillDict: sd }: any = deck
  const skillDict = sd || {}

  if (Object.keys(skillDict).length === 0) {
    deck.characters.map((characterData) => {
      const { character } = characterData
      const detail = CHARACTER_DETAIL[character.originName]
      if (detail?.SKILLS) {
        detail?.SKILLS.forEach((skillName: string) => {
          const skill = CHARACTER_SKILLS[skillName]
          skillDict[skillName] = {
            originName: character.originName,
            skill,
          }
        })
      }
      const fixedCharacter = {
        ...character,
        detail,
      }
      return {
        ...characterData,
        character: fixedCharacter,
      }
    })
  }

  return (
    <div className="mt-[20px] flex flex-col gap-[4px]">
      <div className="flex flex-wrap items-center gap-[2px] ff-dh text-[20px]">
        <span>프리셋 미리보기</span>
        <span className="ff-dh text-[16px] text-red-400">
          * 오토 프리셋 코드가 있다면, 코드를 복사후 인게임 [자동전투 설정]을 하면 자동 적용됩니다.
        </span>
      </div>
      <div className="flex flex-wrap gap-[6px] justify-center border border-gray-300 rounded p-[4px]">
        {deck.autoPresetPreviews!.concat(deck.autoPresetPreviewBans || []).map((key, index) => {
          const { originName, skill } = skillDict[key] || {}
          const character = RS_CHARACTER_DICT[originName]
          const totalLength =
            deck.autoPresetPreviews!.length + (deck.autoPresetPreviewBans || []).length
          const isBan = totalLength - index <= (deck.autoPresetPreviewBans || []).length
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
            <div key={`deck_app_${key}_${index}`}>
              <div className="w-[100px] border-2 border-black/50 shadow-md shadow-gray-800 relative rounded overflow-hidden">
                <div className="absolute right-0 top-0 m-[2px] font-bold w-[24px] h-[24px] flex items-center justify-center bg-gray-700 text-white border-2 border-gray-800 rounded-full shadow-md shadow-gray-800">
                  {skill.cost}
                </div>
                <img src={convertCharacterThumbnailUrl(character.thumbnail)} className="" />
                <SkillIconDescTooltip skill={skill}>
                  <div className="bottom-0 absolute w-full flex justify-center pb-[22px] cursor-pointer">
                    <img className="w-[60px] h-[60px] border" src={skill.thumbnail} />
                  </div>
                </SkillIconDescTooltip>
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
            </div>
          )
        })}
      </div>
    </div>
  )
}

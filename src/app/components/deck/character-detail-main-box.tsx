import { RecommendationUserDeck } from '@/app/rd/user/user-deck.interface'
import { RecommendationDeck } from '@/app/rd/rd-decks.const'
import createKey from '@/services/key-generator'
import {
  RsCharacterCard,
  RsEquipmentCard,
} from '@/app/components/character-frame/rs-character-card'
import { RsCardSize } from '@/app/components/character-frame/rs-card-size.enum'
import { CHARACTER_SKILLS } from '@/const/character/character-skill.const'
import { SkillIconDescTooltip } from '@/app/components/deck/skill-icon-desc-tooltip'
import React from 'react'
import { filterRSKeyword, RSHighlightedText } from '@/services/utils/highlight-text'
import { CHARACTER_DETAIL } from '@/const/character/character-detail.const'
import _ from 'lodash'

export function CharacterDetailMainBox({
  deck,
}: {
  deck: RecommendationUserDeck | RecommendationDeck
}) {
  const isExistLeader = deck?.leaderName
  const leaderIndex = deck?.characters.findIndex((c) => c.character.name === deck.leaderName)
  const skillKeywordDict: { [key: string]: any } = {}
  deck.characters.forEach((characterData) => {
    const { character } = characterData
    const skillKeywords: string[][] = []
    const detail = CHARACTER_DETAIL[character.originName]
    if (detail?.SKILLS) {
      detail?.SKILLS.forEach((skillName: string) => {
        const skill = CHARACTER_SKILLS[skillName]
        skillKeywords.push(filterRSKeyword(skill.desc))
      })
    }
    skillKeywordDict[character.originName] = _.uniq(skillKeywords.flat())
  })
  return (
    <div className="bg-gray-100 p-[10px] rounded">
      {isExistLeader && (
        <div className="flex">
          {[0, 1, 2, 3, 4].map((index) => {
            return (
              <div
                key={createKey()}
                className="text-[30px] w-full text-center font-bold ff-dh text-white"
              >
                {leaderIndex === index && <div className="bg-red-300 pt-[2px]">리더</div>}
              </div>
            )
          })}
        </div>
      )}
      <div className="flex gap-[10px] justify-center items-start">
        {deck.characters.map((characterData) => {
          const { character, equipments }: any = characterData
          return (
            <div key={createKey()} className="relative w-[180px] flex flex-col gap-[6px]">
              <RsCharacterCard size={RsCardSize.RESPONSIVE} character={character} height={200} />
              {equipments?.length > 0 && (
                <div className="min-h-[100px]">
                  <RsEquipmentCard equipments={equipments || []} width={60} gap={0} onShowName />
                </div>
              )}
              {!equipments ||
                (equipments.length === 0 && (
                  <div className="min-h-[100px] flex items-center justify-center border border-gray-400 border-dashed text-gray-600 ff-dh text-[20px]">
                    장비 데이터 없음
                  </div>
                ))}
              <hr className="border-cyan-800 border-[2px] border-b-0 border-dashed" />
              <div className="flex flex-wrap w-full gap-[2px] items-center justify-center">
                {(character.detail?.SKILLS || []).map((skillName: string, index: number) => {
                  const skill = CHARACTER_SKILLS[skillName]
                  return (
                    <div
                      key={`character_skill_${character.originName}_${skill.name}_${index}`}
                      className="inline-flex bg-blue-gray-800/50 p-[2px]"
                    >
                      <SkillIconDescTooltip skill={skill}>
                        <div className="w-[54px] h-[54px] bg-cover relative cursor-pointer">
                          <div
                            className="w-full h-full bg-cover"
                            style={{ backgroundImage: `url(${skill.thumbnail})` }}
                          />
                          <div className="absolute bottom-0 right-0 p-[4px] pb-0 text-white ff-dh flex justify-between w-full">
                            {skill.amount > 0 && (
                              <span className="text-shadow-outline">x{skill.amount}</span>
                            )}
                            <span className="text-shadow-outline ml-auto">{skill.cost}c</span>
                          </div>
                          {skill.isGeneratedCard && (
                            <div className="absolute top-0 left-0 p-[1px] pb-0 text-shadow-outline text-blue-200 ff-dh">
                              파생
                            </div>
                          )}
                        </div>
                      </SkillIconDescTooltip>
                    </div>
                  )
                })}
              </div>
              {skillKeywordDict[character.originName].length > 0 && (
                <div className="flex flex-wrap gap-[2px] bg-white p-[4px] rounded border border-gray-500">
                  <RSHighlightedText
                    textSize={18}
                    text={skillKeywordDict[character.originName].map(
                      (keyword: string) => `[${keyword}]`,
                    )}
                  />
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export function CharacterDetailDescBox({ desc }: { desc: string }) {
  return (
    <>
      <div className="flex items-stretch min-h-[100px]">
        <div className="min-w-[100px] flex items-center justify-center ff-dh text-[20px]">설명</div>
        <div className="bg-gray-100/50 p-[10px] rounded border whitespace-pre-line leading-normal w-full">
          {desc && (
            <RSHighlightedText text={desc} highlightStyle="text-shadow-outline-white-gray" />
          )}
          {!desc && (
            <div className="flex items-center justify-center w-full h-full text-gray-500 ff-dh text-[20px]">
              작성된 내용이 없습니다.
            </div>
          )}
        </div>
      </div>
      <hr />
    </>
  )
}

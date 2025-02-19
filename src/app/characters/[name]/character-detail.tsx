'use client'

import { RSCharacter } from '@/const/character/character.interface'
import { CHARACTER_DETAIL } from '@/const/character/character-detail.const'
import { CHARACTER_SKILLS } from '@/const/character/character-skill.const'
import createKey from '@/services/key-generator'
import React from 'react'
import { CHARACTER_RESONANCES } from '@/const/character/character-resonance.const'
import { CHARACTER_AWAKENINGS } from '@/const/character/character-awakening.const'
import { RSHighlightedText } from '@/services/utils/highlight-text'
import { MATERIALS } from '@/const/material.const'
import { CharacterResonanceUpgradePriceBox } from '@/app/characters/[name]/character-resonance-upgrade-price-box'

export function CharacterDetailBox({ character }: { character: RSCharacter }) {
  const characterInfo = CHARACTER_DETAIL[character.originName]
  const { SKILLS, RESONANCES, AWAKENING, RESONANCE_UPGRADE_MATERIALS } = characterInfo
  return (
    <div className="flex flex-col gap-[10px]">
      <>{SKILLS && <CharacterSkillBox skills={SKILLS} />}</>
      <>{RESONANCES && <CharacterResonanceBox resonances={RESONANCES} />}</>
      <>
        {RESONANCE_UPGRADE_MATERIALS && (
          <CharacterResonanceUpgradePriceBox materials={RESONANCE_UPGRADE_MATERIALS} />
        )}
      </>
      <>{AWAKENING && <CharacterAwakeningBox awakenings={AWAKENING} />}</>
    </div>
  )
}

export function CharacterAwakeningBox({ awakenings }: { awakenings: { [key: string]: string } }) {
  return (
    <div className="flex flex-col gap-[4px]">
      <div className="bg-gradient-to-r from-blue-gray-900 to-white text-white ff-dh text-[26px] p-[8px] py-[4px] rounded">
        각성 특성
      </div>
      <div className="flex flex-col gap-[4px]">
        {Object.keys(awakenings).map((awakeningNumber: string, index) => {
          const awakeningName = awakenings[awakeningNumber]
          const awakening = CHARACTER_AWAKENINGS[awakeningName]
          return (
            <div
              key={createKey()}
              className="flex gap-[4px] bg-blue-gray-900/60 p-[10px] shadow-xl rounded border border-white"
            >
              <div className="h-[80px] w-[80px]">
                <img
                  src={awakening.thumbnail}
                  className="w-full border-2 bg-blue-gray-900 rounded"
                />
              </div>
              <div className="flex flex-col gap-[4px] text-white w-full pt-[4px]">
                <div className="flex justify-between">
                  <div className="text-[18px] font-bold">{awakening.name}</div>
                  <div className="bg-[#6E4100] rounded text-white px-[20px] py-[4px] ff-dh">
                    각성레벨:{index + 1}
                  </div>
                </div>
                <hr />
                <div className="whitespace-pre-line leading-normal">
                  <RSHighlightedText text={awakening.desc} />
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export function CharacterResonanceBox({ resonances }: { resonances: { [key: string]: string } }) {
  return (
    <div className="flex flex-col gap-[4px]">
      <div className="bg-gradient-to-r from-blue-gray-900 to-white text-white ff-dh text-[26px] p-[8px] py-[4px] rounded">
        공명 특성
      </div>
      <div className="flex flex-col gap-[4px]">
        {Object.keys(resonances).map((resonanceNumber: string, index) => {
          const resonanceName = resonances[resonanceNumber]
          const resonance = CHARACTER_RESONANCES[resonanceName]
          return (
            <div
              key={createKey()}
              className="flex gap-[4px] bg-blue-gray-900/60 p-[10px] shadow-xl rounded"
            >
              <div className="h-[80px] w-[80px]">
                <img
                  src={resonance.thumbnail}
                  className="bg-blue-gray-900 rounded w-full border-2"
                />
              </div>
              <div className="flex flex-col gap-[4px] text-white w-full pt-[4px]">
                <div className="flex justify-between items-center">
                  <div className="text-[18px] font-bold">{resonance.name}</div>
                  <div className="bg-[#58292E] rounded text-white px-[20px] py-[4px] ff-dh">
                    공명단계:{index + 1}
                  </div>
                </div>
                <hr />
                <div className="whitespace-pre-line leading-normal">
                  <RSHighlightedText text={resonance.desc} />
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export function CharacterSkillBox({ skills }: { skills: string[] }) {
  return (
    <div className="flex flex-col gap-[4px]">
      <div className="bg-gradient-to-r from-blue-gray-900 to-white text-white ff-dh text-[26px] p-[8px] py-[4px] rounded border border-white">
        스킬
      </div>
      <div className="flex flex-col gap-[4px]">
        {skills.map((skillName: string) => {
          const skill = CHARACTER_SKILLS[skillName]
          return (
            <div
              key={createKey()}
              className="inline-flex gap-[4px] bg-blue-gray-900/60 p-[10px] shadow-xl rounded"
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
                      <div className="font-normal italic text-gray-300 text-[16px]">
                        {skill.descSub}
                      </div>
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
        })}
      </div>
    </div>
  )
}

'use client'

import { RSCharacter } from '@/const/character/character.interface'
import { CHARACTER_DETAIL } from '@/const/character/character-detail.const'
import createKey from '@/services/key-generator'
import React from 'react'
import { CHARACTER_RESONANCES } from '@/const/character/character-resonance.const'
import { CHARACTER_AWAKENINGS } from '@/const/character/character-awakening.const'
import { RSHighlightedText } from '@/services/utils/highlight-text'
import { CharacterResonanceUpgradePriceBox } from '@/app/characters/[name]/character-resonance-upgrade-price-box'
import { CharacterSkillContainer } from '@/app/characters/[name]/character-skill-container'
import { GradientHeaderDiv } from '@/app/components/div/gradient-header-div'

export function CharacterDetailBox({ character }: { character: RSCharacter }) {
  const characterInfo = CHARACTER_DETAIL[character.originName]
  const { SKILLS, RESONANCES, AWAKENING, RESONANCE_UPGRADE_MATERIALS } = characterInfo
  return (
    <div className="flex flex-col gap-[10px]">
      <>{SKILLS && <CharacterSkillContainer skills={SKILLS} />}</>
      <>
        {RESONANCES && RESONANCE_UPGRADE_MATERIALS && (
          <div className="flex flex-wrap gap-[6px]">
            <div className="w-[calc(50%-3px)]">
              <CharacterResonanceBox resonances={RESONANCES} />
            </div>
            <div className="w-[calc(50%-3px)]">
              <CharacterResonanceUpgradePriceBox materials={RESONANCE_UPGRADE_MATERIALS} />
            </div>
          </div>
        )}
      </>
      <>{AWAKENING && <CharacterAwakeningBox awakenings={AWAKENING} />}</>
    </div>
  )
}

export function CharacterAwakeningBox({ awakenings }: { awakenings: { [key: string]: string } }) {
  return (
    <div className="flex flex-col gap-[4px]">
      <GradientHeaderDiv>각성 특성</GradientHeaderDiv>
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
      <GradientHeaderDiv>공명 특성</GradientHeaderDiv>
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
                  {resonance?.clearMind && (
                    <div className="flex items-center mt-[4px]">
                      <div className="bg-blue-gray-700 inline-flex p-[4px]">명경지수</div>
                      <div className="bg-blue-gray-900 inline-flex py-[4px] px-[8px]">
                        {resonance.clearMind}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

'use client'

import createKey from '@/services/key-generator'
import React, { useEffect, useState } from 'react'
import { RECOMMENDATION_DECKS } from '@/app/rd/rd-decks.const'
import _, { debounce } from 'lodash'
import { Tooltip } from '@material-tailwind/react'
import { RecommendationDeckCard } from '@/app/components/deck/recommendation-deck-card'
import { GradientButton } from '@/app/components/button/gradient-button'
import { useNextDepthNavigator } from '@/services/navigation'

const REVERSED_ALL_DECKS = _.reverse(RECOMMENDATION_DECKS)
export default function RecommendationDeckPage() {
  const { router, openNewTab } = useNextDepthNavigator()
  const [rdDecks, setRdDecks] = useState(REVERSED_ALL_DECKS)
  const [searchedKeyword, setSearchedKeyword] = useState('')
  const [checkedAutoPreset, setCheckedAutoPreset] = useState(false)

  const handleSearchedKeywordChange = debounce((event: any) => {
    setSearchedKeyword(event.target.value)
  }, 300)

  const handleChangeAutoPreset = (event: any) => {
    setCheckedAutoPreset(event.target.checked)
  }

  useEffect(() => {
    if (!searchedKeyword) setRdDecks(REVERSED_ALL_DECKS)
    setRdDecks(
      REVERSED_ALL_DECKS.filter((deck) => {
        const isValidAutoPresetOption = checkedAutoPreset ? !!deck.autoPreset : true
        return (
          isValidAutoPresetOption &&
          deck.characters
            .map((c) => c.character.name)
            .join(',')
            .indexOf(searchedKeyword) >= 0
        )
      }),
    )
  }, [checkedAutoPreset, searchedKeyword])

  return (
    <div className="flex flex-col gap-[10px]">
      <div className="flex flex-col gap-[6px]">
        <div className="flex flex-col gap-[4px]">
          <div className="text-gray-600/90 font-bold">
            * 모든 덱은 설명과, 가이드 링크를 읽어 보시는 것을 추천드립니다. 현재 한섭 상황과
            돌파수에 따라 가능성 유무가 존재합니다.
          </div>
          <div className="text-gray-600/90 font-bold">
            * 리더 표기가 없는 덱도 있습니다. 오토프리셋 불러오기 시 자동으로 설정됩니다.
          </div>
        </div>
        <div className="flex items-center gap-[4px]">
          <GradientButton
            className="p-[4px] rounded inline-flex items-center gap-[4px]"
            onClick={() => router.push('/wiki/auto-preset')}
          >
            오토 프리셋 설정 방법
            <i className="fa-solid fa-circle-question" />
          </GradientButton>
          <GradientButton
            className="p-[4px] rounded inline-flex items-center gap-[4px]"
            onClick={() => openNewTab('https://arca.live/b/resonance/129293763')}
          >
            자동 덱 만들기 가이드
            <i className="fa-solid fa-circle-question" />
          </GradientButton>
          <GradientButton
            className="p-[4px] rounded inline-flex items-center gap-[4px]"
            onClick={() => openNewTab('/reset-marathon/equipment')}
          >
            장비 티어 리스트
            <i className="fa-solid fa-circle-question" />
          </GradientButton>
        </div>
      </div>
      <div className="flex flex-col gap-[8px]">
        <div className="border rounded p-[8px] flex flex-col gap-[4px]">
          <label className="flex items-center gap-[10px] cursor-pointer">
            <input type="checkbox" checked={checkedAutoPreset} onChange={handleChangeAutoPreset} />
            <Tooltip content="체크시 오토프리셋 정보가 있는 덱만 필터합니다.">오토프리셋</Tooltip>
          </label>
          <div className="flex items-center gap-[10px]">
            <div>검색:</div>
            <input
              className="border border-gray-400 min-w-[300px] p-[4px]"
              type="text"
              onChange={handleSearchedKeywordChange}
              placeholder="승무원 이름을 검색하세요."
            />
          </div>
        </div>

        <div className="flex items-stretch gap-[10px] mb-[4px]">
          <div className="rounded-[4px] inline-flex p-[4px] text-white bg-gray-700 border-white/50 border-dotted border">
            덱 - {rdDecks.length} / {REVERSED_ALL_DECKS.length}
          </div>
          {searchedKeyword && (
            <div className="rounded-[4px] flex items-center">"{searchedKeyword}" 검색됨</div>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-[8px]">
        {rdDecks.map((deck) => (
          <RecommendationDeckCard deck={deck} key={createKey()} />
        ))}
      </div>
    </div>
  )
}

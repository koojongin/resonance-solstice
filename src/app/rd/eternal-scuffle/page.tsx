'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Tooltip } from '@material-tailwind/react'
import {
  ANFIYA,
  ARINA,
  CAROLINE,
  CONNOR,
  DUSTIN,
  ILONA,
  JOSHUA,
  KATAS,
  MARGIELA,
  NAYUTA,
  NICOLA,
  SOMMER,
  STELLA,
  SUEN,
  TENNIE,
  VERLAINE,
  WENSHENG,
} from '@/const/character/character.const'
import { RECOMMENDATION_DECKS } from '@/app/rd/rd-decks.const'
import { RsCharacterBorderBox } from '@/app/components/character-frame/rs-character-border-box'
import { convertCharacterThumbnailUrl, getFrameBgUrl } from '@/services/character-url'
import { RECOMMENDATION_ES_DECKS } from '@/app/rd/eternal-scuffle/rd-eternal-scuffle.const'
import createKey from '@/services/key-generator'
import { RSHighlightedText } from '@/services/utils/highlight-text'
import { RdEternalScuffleList } from '@/app/rd/eternal-scuffle/rd-eternal-scuffle-list'
import { debounce } from 'lodash'

export default function RdEternalScufflePage() {
  const [isVisibleGuideBox, setIsVisibleGuideBox] = useState(false)
  const [searchedKeyword, setSearchedKeyword] = useState('')

  const handleSearchedKeywordChange = debounce((event: any) => {
    setSearchedKeyword(event.target.value)
  }, 300)

  return (
    <div className="flex flex-col gap-[10px]">
      <div className="flex flex-col gap-[10px]">
        <div className="flex flex-col gap-[4px]">
          <div className="text-[30px] ff-dh">무한 난투</div>
          <div className="flex flex-col gap-[4px]">
            <div>
              * 캐릭터 선택시 강제 종료하면 재선택이 가능합니다.(재선택은 가능하지만 원래 고르던
              선택지는 변화 없음)
            </div>
            <div>* 전투가 종료되기 전 강제 종료하면 라이프 소모 없이 재도전이 가능합니다.</div>
          </div>
        </div>
        <div
          className="ff-dh text-[24px] flex gap-[4px] items-center cursor-pointer select-none"
          onClick={() => setIsVisibleGuideBox((prev) => !prev)}
        >
          잘 모를때 선택 가이드
          {isVisibleGuideBox && <i className="fa-solid fa-square-minus" />}
          {!isVisibleGuideBox && <i className="fa-solid fa-square-caret-down" />}
        </div>
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: isVisibleGuideBox ? 'auto' : 0 }}
          transition={{
            type: 'tween',
            ease: 'easeOut',
            duration: 0.1,
          }}
          className={`${isVisibleGuideBox ? '' : 'overflow-hidden'}`}
        >
          <div className="flex flex-col gap-[8px] border border-gray-700 p-[8px] rounded">
            <RSHighlightedText
              text={`<div>[소마]를 선택합니다.</div>
                  <div>
                    [소마] 선택 후 안정성을 위해 [더스틴], [수엔], [아리나], [문생], [테니]등.. 을
                    선택합니다.
                  </div>
                  <div>안정성이 맞춰지면 [카타스]or나머지로 조합을 마무리합니다.</div>
                  <div>[인뢰] 덱은 아이템의 영향이 커서 추천되지 않습니다.</div>`}
            />
          </div>
        </motion.div>
      </div>

      <div className="ff-dh text-red-400 text-[18px] flex flex-col gap-[2px]">
        <div>* 아래 조합이 무조건 좋다x</div>
        <div>
          구성을 이렇게도 할수있다 정도로 참고 해주세요. (왠만하면{' '}
          <span className="underline bg-green-300 text-white px-[4px] py-[1px] text-[30px]">
            소마
          </span>
          를 포함한 덱이 클리어율이 높습니다)
        </div>
      </div>

      <div className="flex items-center gap-[10px]">
        <div>검색:</div>
        <input
          className="border border-gray-400 min-w-[300px] p-[4px]"
          type="text"
          onChange={handleSearchedKeywordChange}
          placeholder="승무원 이름을 검색하세요."
        />
      </div>

      <>
        <RdEternalScuffleList searchedKeyword={searchedKeyword} />
      </>
    </div>
  )
}

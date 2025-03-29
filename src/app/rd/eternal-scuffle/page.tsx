'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { RSHighlightedText } from '@/services/utils/highlight-text'
import { RdEternalScuffleList } from '@/app/rd/eternal-scuffle/rd-eternal-scuffle-list'
import { debounce } from 'lodash'
import Link from 'next/link'
import { GradientButton } from '@/app/components/button/gradient-button'

export default function RdEternalScufflePage() {
  const [isVisibleChoiceGuideBox, setIsVisibleChoiceGuideBox] = useState(false)
  const [isVisibleInfoBox, setIsVisibleInfoBox] = useState(false)
  const [searchedKeyword, setSearchedKeyword] = useState('')

  const handleSearchedKeywordChange = debounce((event: any) => {
    setSearchedKeyword(event.target.value)
  }, 300)

  return (
    <div className="flex flex-col gap-[10px]">
      <div className="flex items-start gap-[10px]">
        <img
          src="https://imgproxy.shelter.id/sig/w:860/rt:fill/Z3M6Ly9zaGVsdGVyLW1lZGlhL3UvYkI1OHJHc2Z1SU0wVEQ2SUtKNDNFTTM3Ukt4MS9pbWFnZXMvMTc0MjAxOTYwODUzOV9kMTdmZWZkYS1jYTkwLTRhMTUtYjUyYy1kYmQ1OWNmYTFlMWMucG5n"
          className="w-[200px] inline-block"
        />
        <div className="flex flex-col gap-[10px]">
          <div className="flex flex-col gap-[4px]">
            <div
              className="ff-dh text-[24px] flex gap-[4px] items-center cursor-pointer select-none"
              onClick={() => setIsVisibleInfoBox((prev) => !prev)}
            >
              일반 정보
              {isVisibleInfoBox && <i className="fa-solid fa-square-minus" />}
              {!isVisibleInfoBox && <i className="fa-solid fa-square-caret-down" />}
            </div>
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: isVisibleInfoBox ? 'auto' : 0 }}
              transition={{
                type: 'tween',
                ease: 'easeOut',
                duration: 0.1,
              }}
              className={`${isVisibleInfoBox ? '' : 'overflow-hidden'}`}
            >
              <div className="flex flex-col gap-[8px] border border-gray-700 p-[8px] rounded">
                <div>
                  * 캐릭터 선택 도중{' '}
                  <span className="text-red-500 underline">강제 종료하면 재선택</span>이
                  가능합니다.(재선택은 가능하지만 원래 고르던 선택지는 변화 없음)
                </div>
                <div>
                  * 전투 도중{' '}
                  <span className="text-red-500 underline">
                    강제 종료하면 라이프 소모 없이 재도전
                  </span>
                  이 가능합니다.
                </div>
                <div>
                  * 무한난투는 하루 최대 4회 가능합니다. 추가 기회 1번당 300,000 [철도연맹 코인]이
                  소모됩니다.
                </div>
                <div className="whitespace-pre-line leading-tight">
                  * 클리어시 [교환 상점 코인] + [철도연맹 코인],[랜덤 장비]을 랜덤하게 획득합니다.
                  <br />
                  <span className="font-bold">※ 각 단계 당 랜덤상자 1개</span>
                  <br />* 클리어 후 랜덤상자에서 [철도연맹 코인]이 걸릴 확률이 가장 높은듯
                  8단계까지가면 보통 30만원짜리 두개 정도 나오는 것 같음.
                  <br />
                  상자 1개는 반드시 [교환 상점 코인] 같음.
                </div>
                <div className="ff-dh text-[20px] mt-[15px]">예시 클리어 결과 이미지</div>
                <img src="https://nng-phinf.pstatic.net/MjAyNTAzMDdfMTAz/MDAxNzQxMzE3MTgwNDM4.Bq-gFzyggZQVHFy1SxXIfb7Albch9JoyhgfMktO21KMg._Gu7TThTJLMAfuT9Dz81lmPFM3yvbcJc0cwPYYUV0GMg.JPEG/KakaoTalk_20250307_120800107_01.jpg?type=w1678" />
              </div>
            </motion.div>
          </div>
          <div className="flex flex-col gap-[4px]">
            <div
              className="ff-dh text-[24px] flex gap-[4px] items-center cursor-pointer select-none"
              onClick={() => setIsVisibleChoiceGuideBox((prev) => !prev)}
            >
              잘 모를때 선택 가이드
              {isVisibleChoiceGuideBox && <i className="fa-solid fa-square-minus" />}
              {!isVisibleChoiceGuideBox && <i className="fa-solid fa-square-caret-down" />}
            </div>
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: isVisibleChoiceGuideBox ? 'auto' : 0 }}
              transition={{
                type: 'tween',
                ease: 'easeOut',
                duration: 0.1,
              }}
              className={`${isVisibleChoiceGuideBox ? '' : 'overflow-hidden'}`}
            >
              <div className="flex flex-col gap-[8px] border border-gray-700 p-[8px] rounded">
                <RSHighlightedText
                  text={
                    <div>
                      <div>1. [소마]를 선택합니다.</div>
                      <div>
                        2. [소마] 선택 후 안정성을 위해 [베를렌★★★★], [스텔라★★★★], [더스틴★★★],
                        [수엔★★], [아리나★★], [문생★★], [테니★]등.. 을 선택합니다.
                      </div>
                      <div>
                        2-2. 소마 선택 후 만약 [베를렌] + [스텔라] + [전열 탱커] 조합에 성공하면
                        클리어률이 매우 높아집니다.
                      </div>
                      <div>3. 안정성이 맞춰지면 [카타스]or나머지로 조합을 마무리합니다.</div>
                      <div>* [인뢰] 덱은 아이템의 영향이 커서 추천되지 않습니다.</div>
                    </div>
                  }
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="ff-dh text-red-400 text-[18px] flex flex-col gap-[2px]">
        <GradientButton className="mr-auto p-[8px] rounded pb-[6px]">
          <Link href="/rd/user?page=1&title=난투">유저 덱 난투 덱 바로가기</Link>
        </GradientButton>
        <div>
          * 아래 조합이 무조건 좋은건 아닙니다. 구성을 이렇게도 할수있다 정도로 참고 해주세요.
          (왠만하면{' '}
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

'use client'

import createKey from '@/services/key-generator'
import {
  ACHIWA,
  AKIRA,
  AOBA,
  ARCANA,
  ARINA,
  BOX,
  CAROLINE,
  CECIL,
  CHARLOTTE,
  CONNOR,
  DESIREE,
  ELIOT,
  EXCALIBUR_BOX,
  FENIA,
  FLAN,
  GALORE,
  GANYA,
  HARUKA,
  ILONA,
  JERBOA,
  JULIAN,
  KALEYA,
  KATAS,
  LIN,
  LIVIA,
  MARGIELA,
  MHAR,
  NABI,
  NAYUTA,
  PRIMING,
  RACHEL,
  RINA_F,
  SHIZURU,
  SOLUM,
  STELLA,
  SUEN,
  TARA,
  TENNIE,
  VALENTINE,
  VERLAINE,
  WENSHENG,
  YAMAARASHI,
  YEJUE,
  YER,
  YOIDUKI,
} from '@/const/character/character.const'
import { RsCharacterCard } from '@/app/components/character-frame/rs-character-card'
import { RsCardSize } from '@/app/components/character-frame/rs-card-size.enum'
import { GradientButton } from '@/app/components/button/gradient-button'

export default function TierListPage1() {
  return (
    <div className="flex flex-col gap-[10px]">
      <div className="flex flex-col gap-[4px]">
        <div className="">
          * 오픈 당시 기준 이륙 티어 리스트 정보글(2025/02/14 ~ 2025/02/20) 니콜라 출시 전까지의
          티어리스트
        </div>
        <div>* 누군가 주관적으로 쓴 글을 퍼온거라 개인적으로 잘 판단해서 사용해주세요)</div>
        <div>
          * 카타스가 포함되어 있지 않습니다.(티어 모름 출시당시엔 없어서 티어리스트엔 없는듯)
        </div>
        <div className="font-bold text-red-400">무기한 쿠폰 코드 : CBCRR23, RESONANCE</div>
        <div className="mt-[4px] flex gap-[4px]">
          <a href="https://arca.live/b/resonance/128851764?mode=best&p=1" target="_blank">
            <GradientButton className="p-[4px] rounded inline-flex items-center gap-[4px]">
              [티어리스트 원문 링크]
            </GradientButton>
          </a>
          <a href="https://arca.live/b/resonance/128890448" target="_blank">
            <GradientButton className="p-[4px] rounded inline-flex items-center gap-[4px]">
              [리세마라 가이드 링크]
            </GradientButton>
          </a>
        </div>
      </div>

      <div className="font-bold">
        <div className="flex items-stretch">
          <div className="flex items-center justify-center w-[100px] text-center border border-r-0 border-gray-700 border-b-0">
            0 Tier
          </div>
          <div className="flex flex-wrap p-[8px] border w-full border-gray-700 border-b-0">
            {[NAYUTA, STELLA, RINA_F].map((character) => {
              return (
                <div key={createKey()}>
                  <RsCharacterCard size={RsCardSize.SMALL} character={character} />
                </div>
              )
            })}
          </div>
        </div>

        <div className="flex items-stretch">
          <div className="flex items-center justify-center w-[100px] text-center border border-r-0 border-gray-700 border-b-0">
            1 Tier
          </div>
          <div className="flex flex-wrap p-[8px] border w-full border-gray-700 border-b-0">
            {[CAROLINE, KATAS, MARGIELA, TENNIE, ARCANA].map((character) => {
              return (
                <div key={createKey()}>
                  <RsCharacterCard size={RsCardSize.SMALL} character={character} />
                </div>
              )
            })}
          </div>
        </div>

        <div className="flex items-stretch">
          <div className="flex items-center justify-center w-[100px] text-center border border-r-0 border-gray-700 border-b-0">
            1.5 Tier
          </div>
          <div className="flex flex-wrap p-[8px] border w-full border-gray-700 border-b-0">
            {[ARINA, SUEN, VERLAINE, FENIA, KALEYA, AOBA, VALENTINE, YER].map((character) => {
              return (
                <div key={createKey()}>
                  <RsCharacterCard size={RsCardSize.SMALL} character={character} />
                </div>
              )
            })}
          </div>
        </div>

        <div className="flex items-stretch">
          <div className="flex items-center justify-center w-[100px] text-center border border-r-0 border-gray-700 border-b-0">
            2 Tier
          </div>
          <div className="flex flex-wrap p-[8px] border w-full border-gray-700 border-b-0">
            {[ILONA, CONNOR, LIVIA, YEJUE, YOIDUKI, SHIZURU].map((character) => {
              return (
                <div key={createKey()}>
                  <RsCharacterCard size={RsCardSize.SMALL} character={character} />
                </div>
              )
            })}
          </div>
        </div>

        <div className="flex items-stretch">
          <div className="flex items-center justify-center w-[100px] text-center border border-r-0 border-gray-700 border-b-0">
            2.5 Tier
          </div>
          <div className="flex flex-wrap p-[8px] border w-full border-gray-700 border-b-0">
            {/* 하인리히 */}
            {[WENSHENG, NABI, AKIRA, CECIL, GANYA, LIN, DESIREE, RACHEL].map((character) => {
              return (
                <div key={createKey()}>
                  <RsCharacterCard size={RsCardSize.SMALL} character={character} />
                </div>
              )
            })}
          </div>
        </div>

        <div className="flex items-stretch">
          <div className="flex items-center justify-center w-[100px] text-center border border-r-0 border-gray-700">
            3 Tier
          </div>
          <div className="flex flex-wrap p-[8px] border w-full border-gray-700">
            {[
              CHARLOTTE,
              JULIAN,
              ACHIWA,
              MHAR,
              GALORE,
              HARUKA,
              PRIMING,
              SOLUM,
              JERBOA,
              ELIOT,
              TARA,
              FLAN,
              YAMAARASHI,
              EXCALIBUR_BOX,
              BOX,
            ].map((character) => {
              return (
                <div key={createKey()}>
                  <RsCharacterCard size={RsCardSize.SMALL} character={character} />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

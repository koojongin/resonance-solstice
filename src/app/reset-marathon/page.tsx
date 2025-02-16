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

export default function ResetMarathonPage() {
  return (
    <div>
      <div>
        <div>* 오픈 당시 기준 이륙 티어 리스트 정보글(2025/02/14)</div>
        <div>* 누군가 쓴 주관적 글을 정보 기반의 데이터라 개인적으로 잘 판단해서 사용해주세요)</div>
        <div>
          아카라이브 원문 :{' '}
          <a href="https://arca.live/b/resonance/128851764?mode=best&p=1" target="_blank">
            [바로가기]
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

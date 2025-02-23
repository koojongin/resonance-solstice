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
  HEINRICH,
  ILONA,
  JERBOA,
  JULIAN,
  KALEYA,
  KAREN,
  KATAS,
  LIN,
  LIVIA,
  MARGIELA,
  MHAR,
  NABI,
  NAYUTA,
  NICOLA,
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
import { RSCharacter } from '@/const/character/character.interface'
import { EXTERNAL_USERS } from '@/const/external-users'

export default function TierListPage2() {
  const tierList: { [key: string]: RSCharacter[] } = {
    '0 Tier': [NAYUTA, STELLA, RINA_F],
    '1 Tier': [CAROLINE, NICOLA, FENIA, TENNIE],
    '1.5 Tier': [KATAS, ARINA, AOBA, KALEYA, ARCANA, VERLAINE, KAREN],
    '2 Tier': [MARGIELA, LIVIA, SUEN, ILONA, YER, CONNOR, YEJUE, VALENTINE, WENSHENG],
    '3 Tier': [
      FLAN,
      ELIOT,
      AKIRA,
      YOIDUKI,
      HEINRICH,
      LIN,
      RACHEL,
      NABI,
      DESIREE,
      HARUKA,
      CECIL,
      ACHIWA,
      GANYA,
    ],
    '4 Tier': [
      CHARLOTTE,
      GALORE,
      MHAR,
      PRIMING,
      SOLUM,
      JERBOA,
      TARA,
      JULIAN,
      YAMAARASHI,
      BOX,
      EXCALIBUR_BOX,
    ],
  }

  const comment = `대충 선정 기준

0 Tier : 이새기들 없으면 덱만들어도 덱이 덱이 아님

          - 덱에 뭔가 문제가 있을 때, 대충 얘네 넣으면 해결 됨



1 Tier : 현 한섭 기준 최정상급 파워랑 안정성, 덱 순환력을 뽑아내는 캐릭터

        - 현 기준으로는 페니아 그정도 급이 맞음, 니콜라 출시로 인한 테니 체급 상승



1.5 Tier : 현 한섭 기준 정상급 파워랑 서포팅 능력을 뽑아내는 캐릭터

          - 무한순환덱 파츠인 아리나 아오바, 근데 무순덱 아니여도 다른 덱에서 활약함

          - 베를린, 시즈루 그정도 급 맞음



2 Tier : 범용성은 좋으나 확실하게 특출나지 않거나 현재 사용하기 애매한 키워드를 가진 캐릭터 및 정상급은 아닌 애매한 캐릭터

          - 성능 자체는 매우 준수하기에 1군에 들어갈 정도는 됨



3 Tier : 성능 자체는 준수하나, 완벽한 상위호환이 존재하는 캐릭터 및 현재 한섭 캐릭풀로는 사용하기 애매한 키워드를 가진 캐릭터



4 Tier : 이거 쓸바에 다른거 쓰는게 훨씬 나음, 샬롯

          - 샬롯 쓰지마라`
  return (
    <div className="flex flex-col gap-[10px]">
      <div className="flex flex-col gap-[4px]">
        <div className="ff-dh text-[30px]">니콜라 출시 시점 티어 리스트 (작성일:2025/02/21)</div>
        <div className="mt-[4px] flex gap-[4px] items-center cursor-pointer">
          <a href={EXTERNAL_USERS['1'].link} target="_blank">
            <div className="font-bold p-[4px] rounded inline-flex items-center gap-[4px] border bg-blue-gray-900 text-white">
              출처: @{EXTERNAL_USERS['1'].name}
            </div>
          </a>
          <a href="https://arca.live/b/resonance/129471346" target="_blank">
            <GradientButton className="p-[4px] rounded inline-flex items-center gap-[4px]">
              [티어리스트 원문 링크]
            </GradientButton>
          </a>
          <a href="/reset-marathon/equipment" target="_blank">
            <GradientButton className="p-[4px] rounded inline-flex items-center gap-[4px]">
              [장비 티어리스트]
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
        {Object.keys(tierList).map((tierTitle) => {
          const tierData = tierList[tierTitle]
          return (
            <div
              className="flex items-stretch border border-b-0 last:border-b border-gray-700"
              key={createKey()}
            >
              <div className="flex items-center justify-center w-[100px] text-center border-r border-r-gray-700">
                {tierTitle}
              </div>
              <div className="flex flex-wrap gap-[4px] p-[8px] w-full">
                {tierData.map((character) => {
                  return (
                    <div key={createKey()}>
                      <RsCharacterCard size={RsCardSize.SMALL} character={character} />
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>

      <hr />
      <div className="flex flex-col gap-[4px]">
        <div className="font-bold text-[20px]">작성자 코멘트</div>
        <div className="whitespace-pre-line border p-[10px] shadow-md border-gray-700 rounded">
          {comment}
        </div>
      </div>
    </div>
  )
}

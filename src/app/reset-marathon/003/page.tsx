'use client'

import createKey from '@/services/key-generator'
import {
  ACHIWA,
  AKIRA,
  ANFIYA,
  AOBA,
  ARCANA,
  ARINA,
  BOX,
  CAROLINE,
  CECIL,
  CHARLOTTE,
  CONNOR,
  DESIREE,
  DOROTHY,
  DUSTIN,
  ELIOT,
  EXCALIBUR_BOX,
  FENIA,
  FLAN,
  GALORE,
  GANYA,
  HARUKA,
  HEINRICH,
  ILONA,
  ITHOS,
  JALHAY,
  JERBOA,
  JOSHUA,
  JULIAN,
  KALEYA,
  KAREN,
  KATAS,
  LIN,
  LISSANDRA,
  LIVIA,
  MARGIELA,
  MHAR,
  NABI,
  NAYUTA,
  NICOLA,
  PRIMING,
  RACHEL,
  RINA_F,
  SHIRE,
  SOLUM,
  SOMMER,
  STELLA,
  SUEN,
  SUMMERSHIZURU,
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
import { RSHighlightedText } from '@/services/utils/highlight-text'

export default function TierListPage2() {
  const tierList: { [key: string]: RSCharacter[] } = {
    '0 Tier': [NAYUTA, STELLA, JOSHUA, ARCANA],
    '0.5 Tier': [
      LISSANDRA,
      NICOLA,
      JALHAY,
      SOMMER,
      CAROLINE,
      KATAS,
      MARGIELA,
      DUSTIN,
      TENNIE,
      SUMMERSHIZURU,
      SHIRE,
    ],
    '1 Tier': [RINA_F, SUEN, DOROTHY, KALEYA, ANFIYA, YOIDUKI, HEINRICH, ITHOS, KAREN],
    '1.5 Tier': [ARINA, FENIA, LIVIA, AOBA, YER, VALENTINE],
    '2 Tier': [VERLAINE, ILONA, CONNOR, WENSHENG, AKIRA, PRIMING, RACHEL, DESIREE],
    '2.5 Tier': [CHARLOTTE, GANYA, YEJUE, NABI, ACHIWA, CECIL, FLAN, LIN],
    '3 Tier': [
      MHAR,
      GALORE,
      HARUKA,
      SOLUM,
      JERBOA,
      ELIOT,
      TARA,
      JULIAN,
      YAMAARASHI,
      BOX,
      EXCALIBUR_BOX,
    ],
  }

  const comment = `레조넌스 오픈 이후 6개월 뒤 미래시 캐릭터가 나온 이후의 티어표



0 : 인권

0.5 : 사기캐, 인권에 준하는 캐릭터

1 : 인권과 사기캐를 넣는 덱에 넣거나 어떻게든 쓸 수 있는 성능캐

1.5 : 대체 캐릭터

2 : 높은 티어의 캐릭터가 없다면 쓸만함.

2.5 : 시너지를 맞추기 어렵거나 범용성이 떨어지는 캐릭터

3 : 쓰지마셈



6개월 뒤의 레조넌스는 [다크 아트]이 압도적으로 우세임

[다크 아트]덱의 코스트 수급력, 순환력, 화력, 유지력 전부 다 따라갈 수가 없음



그냥 [다크 아트]덱을 쓰는게 좋음



그나마 [다크 아트]덱과 또이또이하게 살아있는게 니콜라 [인뢰]덱, [소마] [레드카드]덱 정도고

그보다 살짝 아래에는 카타스 화염덱이 있음`
  return (
    <div className="flex flex-col gap-[10px]">
      <div className="flex flex-col gap-[4px]">
        <div className="ff-dh text-[30px]">미래시 티어 리스트</div>
        <div className="flex flex-col gap-[4px]">
          <div>
            2024년 10월에 작성된 글이며, 중국서버에서 미리 경험한 데이터를 기반으로 작성된 글입니다.
          </div>
          <div>
            주관적 해석이 포함되어있으니, 반드시 원문 링크와 작성자 코멘트를 읽어보는 것을
            추천드립니다.
          </div>
        </div>
        <div className="mt-[4px] flex gap-[4px] items-center cursor-pointer">
          <a href={EXTERNAL_USERS['1'].link} target="_blank">
            <div className="font-bold p-[4px] rounded inline-flex items-center gap-[4px] border bg-blue-gray-900 text-white">
              출처: @{EXTERNAL_USERS['1'].name}
            </div>
          </a>
          <a href="https://arca.live/b/resonance/118192596" target="_blank">
            <GradientButton className="p-[4px] rounded inline-flex items-center gap-[4px]">
              [티어리스트 원문 링크]
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
          <RSHighlightedText text={comment} />
        </div>
      </div>
    </div>
  )
}

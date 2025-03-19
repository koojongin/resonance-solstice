import { RecommendationUserDeck } from '@/app/rd/user/user-deck.interface'
import Link from 'next/link'
import { GradientButton } from '@/app/components/button/gradient-button'
import { Tooltip } from '@material-tailwind/react'
import { copyToClipboard } from '@/services/utils/copy-clipboard'
import { toast } from 'react-toastify'
import React from 'react'
import { RecommendationDeck } from '@/app/rd/rd-decks.const'
import { AutoPresetPreviewBox } from '@/app/components/deck/auto-preset-preview-box'

export function AutoPresetBox({
  usePreview,
  deck,
}: {
  usePreview?: boolean
  deck: RecommendationUserDeck | RecommendationDeck
}) {
  return (
    <div className="">
      <div className="flex items-stretch min-h-[100px]">
        <div className="min-w-[100px] flex items-center justify-center ff-dh text-[20px] flex-col gap-[4px]">
          <div>오토 프리셋</div>
          <Link href="/wiki/auto-preset" target="_blank">
            <GradientButton className="p-[4px] ff-sdn text-[14px] rounded inline-flex items-center gap-[4px]">
              설정
              <i className="fa-solid fa-circle-question" />
            </GradientButton>
          </Link>
        </div>
        <div className="w-full h-full">
          {deck.autoPreset && (
            <>
              <Tooltip content="클릭시 오토 프리셋이 복사됩니다.">
                <div
                  className="cursor-pointer h-full max-h-[100px] overflow-y-scroll border p-[10px] rounded bg-gray-100 whitespace-pre-line flex mx-auto w-full break-all"
                  onClick={async () => {
                    await copyToClipboard(deck.autoPreset!)
                    toast('오토프리셋이 복사되었습니다.')
                  }}
                >
                  {deck.autoPreset}
                </div>
              </Tooltip>
            </>
          )}
          {!deck.autoPreset && (
            <div className="h-full border p-[10px] rounded bg-gray-100 flex items-center justify-center w-full ff-dh text-gray-600 text-[20px]">
              등록된 오토 프리셋이 없습니다.
            </div>
          )}
          {usePreview && (
            <div className="mt-[20px] flex flex-col gap-[4px]">
              <div className="flex flex-wrap items-center gap-[2px] ff-dh text-[20px]">
                <span>프리셋 미리보기</span>
                <span className="ff-dh text-[16px] text-red-400">
                  * 오토 프리셋 코드가 있다면, 코드를 복사후 인게임 [자동전투 설정]을 하면 자동
                  적용됩니다.
                </span>
              </div>
              <AutoPresetPreviewBox
                characterNames={deck.characters.map((c) => c.character.originName)}
                autoPresetPreviews={deck.autoPresetPreviews}
                autoPresetPreviewBans={deck.autoPresetPreviewBans}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

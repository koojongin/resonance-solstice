import { RecommendationUserDeck } from '@/app/rd/user/user-deck.interface'
import Link from 'next/link'
import { GradientButton } from '@/app/components/button/gradient-button'
import { Tooltip } from '@material-tailwind/react'
import { copyToClipboard } from '@/services/utils/copy-clipboard'
import { toast } from 'react-toastify'
import React from 'react'
import { RecommendationDeck } from '@/app/rd/rd-decks.const'
import { AutoPresetPreviewBox } from '@/app/components/deck/auto-preset-preview-box'

export function AutoPresetBox({ deck }: { deck: RecommendationUserDeck | RecommendationDeck }) {
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
        <div className="w-full">
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
              {deck.autoPresetPreviews && <AutoPresetPreviewBox deck={deck} />}
            </>
          )}
          {!deck.autoPreset && (
            <div className="h-full border p-[10px] rounded bg-gray-100 flex items-center justify-center w-full ff-dh text-gray-600 text-[20px]">
              등록된 오토 프리셋이 없습니다.
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

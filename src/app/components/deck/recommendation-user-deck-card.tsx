'use client'

import createKey from '@/services/key-generator'
import { Tooltip } from '@material-tailwind/react'
import {
  RsCharacterCard,
  RsEquipmentCard,
} from '@/app/components/character-frame/rs-character-card'
import { RsCardSize } from '@/app/components/character-frame/rs-card-size.enum'
import React, { useEffect, useState } from 'react'
import { copyToClipboard } from '@/services/utils/copy-clipboard'
import Link from 'next/link'
import { toast } from 'react-toastify'
import { RecommendationUserDeck } from '@/app/rd/user/user-deck.interface'
import { formatDateNormal } from '@/services/utils/date.format'

export function RecommendationUserDeckCard({ deck }: { deck: RecommendationUserDeck }) {
  const [locationOrigin, setLocationOrigin] = useState<string>()
  const { autoPreset, title, characters, leaderName, owner, descLink } = deck

  useEffect(() => {
    setLocationOrigin(window.location.origin)
  }, [])

  return (
    <div
      key={createKey()}
      className="flex flex-col p-[8px] border w-full border-gray-300 rounded shadow-md shadow-gray-400/30"
    >
      <div className="flex items-center flex-wrap gap-[4px] mb-[4px]">
        <Link
          href={
            (deck as any)?._id
              ? `${locationOrigin}/rd/user/detail/${deck.id}`
              : `${locationOrigin}/rd/detail/${deck.id}`
          }
        >
          <div className="text-[17px] underline cursor-pointer">{title}</div>
        </Link>
        {autoPreset && (
          <div>
            <Tooltip content="클릭 시 오토 프리셋이 복사됩니다.">
              <div
                className="flex items-center justify-center border border-blue-gray-900 rounded w-[24px] h-[24px] cursor-pointer hover:bg-green-100"
                onClick={async () => {
                  await copyToClipboard(autoPreset)
                  toast(`오토프리셋이 복사되었습니다.`)
                }}
              >
                <i className="fa-solid fa-clipboard text-[16px]" />
              </div>
            </Tooltip>
          </div>
        )}
        <div>
          <Tooltip content="클릭 시 추천덱 링크가 복사됩니다.">
            <div
              className="flex items-center justify-center border border-blue-gray-900 rounded w-[24px] h-[24px] cursor-pointer hover:bg-green-100"
              onClick={async () => {
                await copyToClipboard(`${locationOrigin}/rd/detail/${deck.id}`)
                toast('덱 링크가 복사되었습니다.')
              }}
            >
              <i className="fa-solid fa-square-share-nodes text-[16px]" />
            </div>
          </Tooltip>
        </div>
        {'usePreview' in deck && (deck.usePreview as any) && (
          <div className="text-white bg-deep-purple-500 px-[4px] py-[4px] pb-[2px] ff-dh rounded">
            프리셋 프리뷰
          </div>
        )}
        {(deck as any).reads && (
          <div className="border border-blue-gray-900 text-blue-gray-900 bg-white px-[4px] h-[24px] ff-dh rounded flex items-center gap-[4px]">
            <i className="fa-solid fa-eye" />
            {(deck as any)?.reads.toLocaleString()}
          </div>
        )}
        <div className="ml-auto border border-blue-gray-900 text-blue-gray-900 bg-white px-[4px] h-[24px] ff-dh rounded flex items-center gap-[4px]">
          {formatDateNormal(deck.createdAt)}
        </div>
      </div>

      <div className="flex gap-[4px] justify-between sm:flex-col">
        <div className="flex flex-wrap min-w-[650px] gap-[10px] sm:max-w-full sm:min-w-[initial] sm:grid sm:grid-cols-5 sm:gap-0">
          {characters.map((characterData) => {
            const { character, equipments } = characterData
            const isLeader = leaderName === character.name || leaderName === character.originName
            const height = 120
            return (
              <div
                key={createKey()}
                className="relative w-[120px] flex flex-col gap-[6px] sm:w-auto"
              >
                <div className="relative">
                  <RsCharacterCard
                    size={RsCardSize.RESPONSIVE}
                    character={character}
                    height={height}
                  />
                  {isLeader && (
                    <div
                      className="absolute text-[18px] top-0 flex items-end justify-center z-20 w-full text-center font-bold mt-[4px] text-shadow-outline text-white ff-dh text-[24px]"
                      style={{ height: `${height}px` }}
                    >
                      리더
                    </div>
                  )}
                </div>
                <RsEquipmentCard equipments={equipments || []} />
              </div>
            )
          })}
        </div>
        <div className="ff-dh text-[18px] flex-1 flex-col flex gap-[4px] items-start justify-start">
          <Link
            className="w-full p-[4px] py-[8px] pb-[6px] items-center justify-center rounded flex bg-blue-gray-600 text-white"
            href={
              (deck as any)?._id
                ? `${locationOrigin}/rd/user/detail/${deck.id}`
                : `${locationOrigin}/rd/detail/${deck.id}`
            }
          >
            상세 보기
          </Link>
          {autoPreset && (
            <div
              className="cursor-pointer w-full p-[4px] py-[8px] pb-[6px] items-center justify-center rounded flex bg-deep-purple-400 text-white"
              onClick={async () => {
                await copyToClipboard(autoPreset)
                toast(`오토프리셋이 복사되었습니다.`)
              }}
            >
              오토 프리셋 복사
            </div>
          )}
          <div
            className="cursor-pointer  w-full p-[4px] py-[8px] pb-[6px] items-center justify-center rounded flex bg-blue-400 text-white"
            onClick={async () => {
              await copyToClipboard(`${locationOrigin}/rd/detail/${deck.id}`)
              toast(`[${deck.title.substring(0, 10)}...] 덱 링크가 복사되었습니다.`)
            }}
          >
            링크 공유
          </div>
          {descLink && (
            <Link
              className="w-full p-[4px] py-[8px] pb-[6px] items-center justify-center rounded flex bg-blue-gray-900 text-white"
              href={descLink}
            >
              원문 링크
            </Link>
          )}
        </div>
      </div>
      {owner && (
        <div className="text-right mt-[4px] text-blue-900 text-[14px]">
          출처 :{' '}
          {owner.link && (
            <a href={owner.link} target="_blank">
              @{owner?.name}
            </a>
          )}
        </div>
      )}
    </div>
  )
}

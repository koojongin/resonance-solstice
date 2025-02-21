'use client'

import { Tooltip } from '@material-tailwind/react'
import { useNextDepthNavigator } from '@/services/navigation'
import { TOTAL_ARCHIVES } from '@/const/archieve'

export function RSHighlightedText({ text, textSize }: { text: string; textSize?: number }) {
  const { router } = useNextDepthNavigator()
  const highlightMap: Record<string, string> = {
    '[수면]': 'text-purple-500/90',
    '[족쇄]': 'text-purple-500/90',
    '[속박]': 'text-purple-500/90',
    '[혼란]': 'text-purple-500/90',

    '[냉동]': 'text-blue-800',
    '[은신]': 'text-blue-800',
    '[역장]': 'text-blue-800',

    '[인뢰]': 'text-yellow-500',
    '[낙뢰]': 'text-yellow-500',
    '[천둥]': 'text-yellow-500',
    '[우레]': 'text-yellow-500',
    '[자화]': 'text-yellow-500',

    '[점화]': 'text-red-500',
    '[기절]': 'text-red-500',
    '[붕괴]': 'text-red-500',
    '[중상]': 'text-red-500',
    '[관통]': 'text-red-500',
    '[광폭]': 'text-red-500',
    '[열상]': 'text-red-500',
    '[튕김]': 'text-red-500',

    '[소각]': 'text-gray-800',
    '[일반공격]': 'text-gray-800',
  }

  const NOT_SETTED_PART_COLOR = 'text-blue-gray-700'

  const regex = /\[([^\]]+)\]/g

  const formattedText = text.split(regex).map((part, index, array) => {
    const isExistArchive = TOTAL_ARCHIVES.find((archive) => archive.name === part)
    let classNameOfPart = highlightMap[`[${part}]`]

    if (isExistArchive && !classNameOfPart) {
      classNameOfPart = NOT_SETTED_PART_COLOR
    }

    if (classNameOfPart) {
      return (
        <Tooltip key={index} content={`${part} 설명 넣어라 나중에...`}>
          <span
            className={`${classNameOfPart} text-shadow-outline-white cursor-pointer ff-dh text-[${textSize || 20}px]`}
            onClick={() => router.push(`/archieve/${part}`)}
          >
            [{part}]
          </span>
        </Tooltip>
      )
    }
    const isSpecificText = text.indexOf(`[${part}]`) >= 0
    if (isSpecificText) return `[${part}]`
    return part
  })

  return <p className="whitespace-pre-line">{formattedText}</p>
}

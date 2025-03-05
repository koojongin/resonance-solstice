'use client'

import { Tooltip } from '@material-tailwind/react'
import { useNextDepthNavigator } from '@/services/navigation'
import { TOTAL_ARCHIVE_MAP, TOTAL_ARCHIVES } from '@/const/archive'
import React from 'react'
import clsx from 'clsx'
import { CHARACTER_RESONANCES } from '@/const/character/character-resonance.const'
import { RS_CHARACTERS } from '@/const/character/character.const'
import { RSCharacter } from '@/const/character/character.interface'
import { CharacterThumbnailBox } from '@/app/components/character-frame/character-thumbnail-box'
import parse from 'html-react-parser'
import { CHARACTER_AWAKENINGS } from '@/const/character/character-awakening.const'

const TOTAL_ARCHIVE_WITH_RESONANCE = {
  ...TOTAL_ARCHIVE_MAP,
  ...CHARACTER_AWAKENINGS,
  ...CHARACTER_RESONANCES,
}

const CHARACTER_KR_DICT: { [key: string]: RSCharacter } = RS_CHARACTERS.reduce((prev, next) => {
  return {
    ...prev,
    [next.name]: next,
  }
}, {})

export function RSHighlightedText({
  text,
  textSize,
  highlightStyle,
}: {
  highlightStyle?: string
  text: string
  textSize?: number
}) {
  if (!highlightStyle) {
    highlightStyle = 'text-shadow-outline-white'
  }
  const { router } = useNextDepthNavigator()
  const highlightMap: Record<string, string> = {
    '[수면]': 'text-purple-500/90',
    '[족쇄]': 'text-purple-500/90',
    '[속박]': 'text-purple-500/90',
    '[혼란]': 'text-purple-500/90',
    '[퍼플카드]': 'text-purple-500/90',

    '[냉동]': 'text-blue-800',
    '[은신]': 'text-blue-800',
    '[역장]': 'text-blue-800',

    '[인뢰]': 'text-yellow-500',
    '[낙뢰]': 'text-yellow-500',
    '[천둥]': 'text-yellow-500',
    '[우레]': 'text-yellow-500',
    '[자화]': 'text-yellow-500',
    '[옐로카드]': 'text-yellow-500',

    '[점화]': 'text-red-500',
    '[기절]': 'text-red-500',
    '[붕괴]': 'text-red-500',
    '[중상]': 'text-red-500',
    '[관통]': 'text-red-500',
    '[광폭]': 'text-red-500',
    '[열상]': 'text-red-500',
    '[튕김]': 'text-red-500',
    '[발사]': 'text-red-500',
    '[레드카드]': 'text-red-500',
    '[작열]': 'text-red-500',
    '[광염]': 'text-red-500',
    '[폭발]': 'text-red-500',
    '[중단]': 'text-red-500',
    '[넉백]': 'text-red-500',
    '[에어본]': 'text-red-500',

    '[소각]': 'text-gray-800',
    '[일반공격]': 'text-gray-800',
  }

  const NOT_SETTED_PART_COLOR = 'text-blue-gray-800'

  const regex = /\[([^\]]+)\]/g

  const handleHTMLTags = (hText: string) => {
    return parse(hText)
  }

  const formatHighlightText = (hText: string) => {
    const formattedText = hText.split(regex).map((part, index, array) => {
      const archive = TOTAL_ARCHIVE_WITH_RESONANCE[part]
      let classNameOfPart = highlightMap[`[${part}]`]

      if (archive && !classNameOfPart) {
        classNameOfPart = NOT_SETTED_PART_COLOR
      }

      if (classNameOfPart) {
        return (
          <Tooltip
            key={index}
            content={
              <div className="max-w-[300px] whitespace-pre-line">
                {archive && (
                  <div className="flex flex-col gap-[4px]">
                    <div>{part}</div>
                    <hr />
                    <div>{archive.desc}</div>
                  </div>
                )}
              </div>
            }
          >
            <span
              className={`${classNameOfPart} ${highlightStyle} cursor-pointer ff-dh text-[${textSize || 20}px]`}
              onClick={() => router.push(`/archive/${part}`)}
            >
              [{part}]
            </span>
          </Tooltip>
        )
      }

      const character = CHARACTER_KR_DICT[part]
      if (character) {
        return (
          <Tooltip
            key={index}
            className="bg-transparent p-0 m-0 rounded-none"
            content={
              <div className="">
                <CharacterThumbnailBox character={character} />
              </div>
            }
          >
            <span className="inline-flex bg-yellow-700">
              <span
                className={`cursor-pointer ff-dh text-[${textSize || 20}px] bg-cyan-800/70 text-white px-[5px] py-0 pt-[1px] rounded`}
                onClick={() => router.push(`/characters/${character.originName}`)}
              >
                {part}
              </span>
            </span>
          </Tooltip>
        )
      }

      const isSpecificText = text.indexOf(`[${part}]`) >= 0
      if (isSpecificText) return `[${part}]`
      return part
    })
    return formattedText
  }

  const recursivelyFormatChildren: any = (child: any) => {
    if (typeof child === 'string') {
      return formatHighlightText(child)
    }

    // React DOM node, recursively apply formatHighlightText to children
    if (child.props && child.props.children) {
      const updatedChildren = React.Children.map(child.props.children, recursivelyFormatChildren)
      return React.cloneElement(child, {}, ...updatedChildren)
    }

    return child
  }

  const parsedText = handleHTMLTags(text)

  if (typeof parsedText === 'string') {
    return formatHighlightText(parsedText)
  }
  return (handleHTMLTags(text) as any).map((textOrElement: any) => {
    const isString = typeof textOrElement === 'string'
    if (!isString) {
      // return textOrElement
      return recursivelyFormatChildren(textOrElement)
    }
    return formatHighlightText(textOrElement)
  })
}

export function ArchiveTooltipBox({
  name,
  className,
  children,
}: {
  name: string
  className?: string
  children: any
}) {
  const archive = TOTAL_ARCHIVES.find((a) => a.name === name)
  return (
    <Tooltip
      className={clsx(className || '')}
      content={
        <div className="max-w-[300px] whitespace-pre-line">
          {archive && (
            <div className="flex flex-col gap-[4px]">
              <div>{name}</div>
              <hr />
              <div>{archive.desc}</div>
            </div>
          )}
        </div>
      }
    >
      {children}
    </Tooltip>
  )
}

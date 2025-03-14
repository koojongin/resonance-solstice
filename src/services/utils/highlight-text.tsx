'use client'

import { Tooltip } from '@material-tailwind/react'
import { useNextDepthNavigator } from '@/services/navigation'
import { TOTAL_ARCHIVE_MAP, TOTAL_ARCHIVES } from '@/const/archive'
import React, { cloneElement, ReactNode } from 'react'
import clsx from 'clsx'
import { CHARACTER_RESONANCES } from '@/const/character/character-resonance.const'
import { RS_CHARACTERS } from '@/const/character/character.const'
import { RSCharacter } from '@/const/character/character.interface'
import { CharacterThumbnailBox } from '@/app/components/character-frame/character-thumbnail-box'
import parse, { domToReact } from 'html-react-parser'
import { CHARACTER_AWAKENINGS } from '@/const/character/character-awakening.const'
import { ALL_EQUIPMENTS } from '@/const/archive/equipment.const'
import { EquipmentBoxResponsive } from '@/app/equipments/rs-equipment-list'
import { EquipmentTooltipContent } from '@/app/components/deck/equipment-tooltip-box'
import Link from 'next/link'
import { MATERIALS } from '@/const/material.const'
import { MaterialBoxResponsive, MaterialTooltipBox } from '@/app/components/material/material-box'
import createKey from '@/services/key-generator'
import { NORMAL_ARCHIVES } from '@/const/archive/archive.const'
import { ARCHIVE_ABILITIES } from '@/const/archive/ability.const'

const TOTAL_ARCHIVE_WITH_RESONANCE = {
  ...TOTAL_ARCHIVE_MAP,
  ...CHARACTER_AWAKENINGS,
  ...CHARACTER_RESONANCES,
  ...ALL_EQUIPMENTS,
}
const SKILL_CARD_ATTRIBUTES_DICT = {
  ...NORMAL_ARCHIVES,
  ...ARCHIVE_ABILITIES,
}

const CHARACTER_KR_DICT: { [key: string]: RSCharacter } = RS_CHARACTERS.reduce((prev, next) => {
  return {
    ...prev,
    [next.name]: next,
  }
}, {})

const KEYWORD_REGEX = /\[([^\]]+)\]/g
const highlightMap: Record<string, string> = {
  '[수면]': 'text-purple-500/90',
  '[족쇄]': 'text-purple-500/90',
  '[속박]': 'text-purple-500/90',
  '[혼란]': 'text-purple-500/90',
  '[퍼플카드]': 'text-purple-500/90',
  '[변신]': 'text-purple-500/90',
  '[저주]': 'text-purple-500/90',

  '[냉동]': 'text-blue-800',
  '[은신]': 'text-blue-800',
  '[역장]': 'text-blue-800',
  '[빙결]': 'text-blue-800',
  '[동결]': 'text-blue-800',
  '[블록]': 'text-blue-800',
  '[슈퍼아머]': 'text-blue-800',
  '[무적]': 'text-blue-800',

  '[인뢰]': 'text-yellow-500',
  '[낙뢰]': 'text-yellow-500',
  '[천둥]': 'text-yellow-500',
  '[우레]': 'text-yellow-500',
  '[자화]': 'text-yellow-500',
  '[옐로카드]': 'text-yellow-500',

  '[점화]': 'text-red-500',
  '[기절]': 'text-red-500',
  '[화상]': 'text-red-500',
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
  '[급속 연소]': 'text-red-500',
  '[참열]': 'text-red-500',

  '[소각]': 'text-gray-800',
  '[일반공격]': 'text-gray-800',
}
export const filterRSKeyword = (hText: string): string[] => {
  return hText
    .split(KEYWORD_REGEX)
    .map((part, index, array) => {
      const archive = SKILL_CARD_ATTRIBUTES_DICT[part]
      const classNameOfPart = highlightMap[`[${part}]`]
      const isValidKeyword = classNameOfPart || archive
      return isValidKeyword ? part : null
    })
    .filter((d) => !!d) as string[]
}

export function RSHighlightedText({
  text,
  textSize,
  highlightStyle,
  onShowOnlyPart,
}: {
  highlightStyle?: string
  text: ReactNode
  textSize?: number
  onShowOnlyPart?: boolean
}) {
  if (!highlightStyle) {
    highlightStyle = 'text-shadow-outline-white'
  }
  const { router } = useNextDepthNavigator()
  const NOT_SETTED_PART_COLOR = 'text-blue-gray-800'

  const formatHighlightText = (hText: string) => {
    const formattedText = hText.split(KEYWORD_REGEX).map((part, index, array) => {
      const archive = TOTAL_ARCHIVE_WITH_RESONANCE[part]
      let classNameOfPart = highlightMap[`[${part}]`]

      if (archive && !classNameOfPart) {
        classNameOfPart = NOT_SETTED_PART_COLOR
      }

      const character = CHARACTER_KR_DICT[part]
      if (character) {
        return (
          <Tooltip
            key={createKey()}
            className="bg-transparent p-0 m-0 rounded-none"
            content={
              <div className="">
                <CharacterThumbnailBox character={character} />
              </div>
            }
          >
            <span
              className={`cursor-pointer ff-dh text-[${textSize || 20}px] bg-cyan-800/70 text-white px-[5px] py-0 pt-[1px] rounded`}
              onClick={() => router.push(`/characters/${character.originName}`)}
            >
              {part}
            </span>
          </Tooltip>
        )
      }
      const equipment = ALL_EQUIPMENTS[part]
      if (equipment) {
        const extendedEquipment = { name: part, ...equipment }
        return (
          <Tooltip
            key={createKey()}
            className="bg-transparent p-0 m-0 rounded-none"
            interactive
            content={<EquipmentTooltipContent equipment={extendedEquipment} />}
          >
            <div className="w-[50px] min-w-[50px] inline-block cursor-pointer">
              <EquipmentBoxResponsive equipment={extendedEquipment} />
            </div>
          </Tooltip>
        )
      }

      const material = MATERIALS[part]
      if (material) {
        const extendedMaterial = { name: part, ...material }
        return (
          <MaterialTooltipBox material={extendedMaterial} key={createKey()}>
            <div className="w-[50px] min-w-[50px] inline-block">
              <MaterialBoxResponsive material={extendedMaterial} withoutIconPadding />
            </div>
          </MaterialTooltipBox>
        )
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

      const isSpecificText = hText.indexOf(`[${part}]`) >= 0
      if (isSpecificText) return `[${part}]`
      if (onShowOnlyPart) return null
      return part
    })
    return formattedText
  }

  const recursivelyFormatChildren: any = (child: any) => {
    if (typeof child === 'string') {
      return formatHighlightText(child)
    }
    if (child.props && child.props.children) {
      const updatedChildren = React.Children.map(child.props.children, recursivelyFormatChildren)
      return React.cloneElement(child, {}, ...updatedChildren)
    }
    return child
  }

  const extractTextContent = (node: any): string => {
    if (typeof node === 'string') {
      return node
    }

    if (typeof node === 'number') {
      return node.toString()
    }

    if (Array.isArray(node)) {
      return node.map(extractTextContent).join('')
    }

    if (node && typeof node === 'object' && 'props' in node && (node as any).props.children) {
      return extractTextContent((node as any).props.children)
    }

    return ''
  }
  const processTextNode = (node: any): any => {
    if (typeof node === 'string' || typeof node === 'number') {
      return formatHighlightText(node.toString())
    }

    if (Array.isArray(node)) {
      return node.map(processTextNode)
    }

    if (node && typeof node === 'object' && 'props' in node && (node as any).props.children) {
      const updatedChildren = processTextNode((node as any).props.children)
      return cloneElement(node as any, {}, updatedChildren) // ✅ 감싸는 태그 유지
    }

    return node
  }
  return processTextNode(text)
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

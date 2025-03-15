import { ExtendedRSMaterial } from '@/const/material/material.type'
import {
  getMaterialBgFrameUrl,
  getMaterialBottomFrameUrl,
} from '@/services/utils/material-box-converter'
import React from 'react'
import createKey from '@/services/key-generator'
import { Tooltip } from '@material-tailwind/react'
import clsx from 'clsx'
import Link from 'next/link'

export function MaterialBox({ material }: { material: ExtendedRSMaterial }) {
  const { name } = material
  const isCardPack = name.indexOf('카드팩') >= 0
  return (
    <div className="h-[80px] w-[80px] relative border-2">
      {!isCardPack && (
        <img className="absolute bottom-0 z-0" src={getMaterialBgFrameUrl(material.grade)} />
      )}
      {isCardPack && (
        <img
          className="absolute bottom-0 z-0"
          src="https://imgproxy.shelter.id/sig/w:196/rt:fill/Z3M6Ly9zaGVsdGVyLW1lZGlhL3UvYkI1OHJHc2Z1SU0wVEQ2SUtKNDNFTTM3Ukt4MS9pbWFnZXMvMTc0MjAyMDY4MTA2OV9lNmY1Zjc2ZS1kYjIxLTQyY2ItOTdhZC0yNGM0YzhkZmMzYmQucG5n"
        />
      )}
      <img
        className="relative z-20 rounded p-[4px] w-full h-full object-contain"
        src={material.thumbnail}
      />
      {!isCardPack && (
        <img className="absolute z-10 bottom-0" src={getMaterialBottomFrameUrl(material.grade)} />
      )}
    </div>
  )
}

export function MaterialBoxResponsive({
  material,
  withoutIconPadding,
}: {
  withoutIconPadding?: boolean
  material: ExtendedRSMaterial
}) {
  const { name } = material
  const isCardPack = name.indexOf('카드팩') >= 0
  return (
    <div className="relative min-w-0 w-full h-full">
      {isCardPack && (
        <img
          className="absolute bottom-0 z-0"
          src="https://imgproxy.shelter.id/sig/w:196/rt:fill/Z3M6Ly9zaGVsdGVyLW1lZGlhL3UvYkI1OHJHc2Z1SU0wVEQ2SUtKNDNFTTM3Ukt4MS9pbWFnZXMvMTc0MjAyMDY4MTA2OV9lNmY1Zjc2ZS1kYjIxLTQyY2ItOTdhZC0yNGM0YzhkZmMzYmQucG5n"
        />
      )}
      {!isCardPack && (
        <img className="absolute bottom-0 z-0" src={getMaterialBgFrameUrl(material.grade)} />
      )}
      <img
        className="relative z-20 rounded w-full h-full object-contain"
        src={material.thumbnail || 'https://static.hdslb.com/images/member/noface.gif'}
        style={{ padding: `${withoutIconPadding ? '0' : '4px'}` }}
      />
      {!isCardPack && (
        <img className="absolute z-10 bottom-0" src={getMaterialBottomFrameUrl(material.grade)} />
      )}
    </div>
  )
}

export function MaterialTooltipBox({
  children,
  material,
  className,
}: {
  children: any
  material: ExtendedRSMaterial
  className?: string
}) {
  return (
    <Tooltip
      interactive
      className={clsx(
        'text-[16px] max-w-[300px] bg-white text-blue-gray-800 p-[8px] shadow-lg shadow-gray-700 ff-dh border rounded',
        className,
      )}
      key={createKey()}
      content={
        <div className="flex flex-col gap-[4px]">
          <Link href={`/materials/${material.name}`}>
            <div className="text-[20px]">{material.name}</div>
          </Link>
          {material.desc && (
            <>
              <hr className="border-gray-700 border-dashed" />
              <div className="ff-sdn text-[14px] whitespace-pre-line">{material.desc}</div>
            </>
          )}
        </div>
      }
    >
      {children}
    </Tooltip>
  )
}

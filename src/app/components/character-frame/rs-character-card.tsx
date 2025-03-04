'use client'

import { RsCardSize } from '@/app/components/character-frame/rs-card-size.enum'
import { RSCharacter } from '@/const/character/character.interface'
import { RsCharacterCardSmall } from '@/app/components/character-frame/rs-character-card-small'
import { RsCharacterCardMedium } from '@/app/components/character-frame/rs-character-card-medium'
import { useRouter } from 'next/navigation'
import { ALL_EQUIPMENTS, RSEquipmentType } from '@/const/archive/equipment.const'
import { EquipmentBoxResponsive } from '@/app/equipments/rs-equipment-list'
import createKey from '@/services/key-generator'
import React from 'react'
import {
  RsCharacterCardResponsive,
  RsCharacterCardResponsiveShorten,
} from '@/app/components/character-frame/rs-character-card-responsive'
import { Tooltip } from '@material-tailwind/react'
import { EquipmentTooltipContent } from '@/app/components/deck/equipment-tooltip-box'
import { ExtendedRSEquipment } from '@/app/equipments/equipment.type'

export function RsCharacterCard({
  character,
  size = RsCardSize.MEDIUM,
  height,
}: {
  character: RSCharacter
  size?: RsCardSize
  height?: number
}) {
  const router = useRouter()
  const routeToDetail = (selectedCharacter: RSCharacter) => {
    if (!selectedCharacter) return
    router.push(`/characters/${character.originName}`)
  }

  return (
    <div onClick={() => routeToDetail(character)}>
      {size === RsCardSize.SMALL && <RsCharacterCardSmall character={character} />}
      {size === RsCardSize.MEDIUM && <RsCharacterCardMedium character={character} />}
      {size === RsCardSize.RESPONSIVE && (
        <RsCharacterCardResponsive character={character} height={height || 100} />
      )}
    </div>
  )
}

export function RsCharacterCardShorten({
  character,
  height,
}: {
  character: RSCharacter
  height?: number
}) {
  const router = useRouter()
  const routeToDetail = (selectedCharacter: RSCharacter) => {
    if (!selectedCharacter) return
    router.push(`/characters/${character.originName}`)
  }

  return (
    <div onClick={() => routeToDetail(character)}>
      <RsCharacterCardResponsiveShorten character={character} height={height || 100} />
    </div>
  )
}

export function RsEquipmentCard({
  equipments,
  width,
  onShowName,
  gap,
}: {
  onShowName?: boolean
  width?: number
  gap?: number
  equipments: string[]
}) {
  if (equipments.length === 0) {
    return <div />
  }

  const extendedEquipments = equipments.map((equipmentName) => ({
    name: equipmentName,
    ...ALL_EQUIPMENTS[equipmentName],
  }))

  const [weapon] = extendedEquipments.filter((e) => e.type === RSEquipmentType.WEAPON)
  const [armor] = extendedEquipments.filter((e) => e.type === RSEquipmentType.ARMOR)
  const [accesorry] = extendedEquipments.filter((e) => e.type === RSEquipmentType.ACCESSORY)

  const equipmentWidth = width || 40
  return (
    <div className={`flex gap-[${gap ?? 2}px]`}>
      {[weapon, armor, accesorry].map((equipment) => {
        return (
          <div
            key={createKey()}
            className="relative rounded flex items-stretch"
            style={{
              width: `${equipmentWidth}px`,
            }}
          >
            {!equipment && (
              <div className="border border-gray-700 flex w-full items-center justify-center">
                -
              </div>
            )}
            {equipment && (
              <Tooltip
                interactive
                className="bg-transparent p-0 m-0"
                content={<EquipmentTooltipContent equipment={equipment} />}
              >
                <div className="flex flex-col gap-[4px]">
                  <EquipmentBoxResponsive key={createKey()} equipment={equipment} />
                  {onShowName && (
                    <div className="text-center text-[15px] leading-tight">{equipment.name}</div>
                  )}
                </div>
              </Tooltip>
            )}
          </div>
        )
      })}
    </div>
  )
}

export function EquipmentTooltipBox({
  onShowName,
  width,
  equipment,
}: {
  onShowName?: boolean
  width?: number
  equipment: ExtendedRSEquipment
}) {
  return (
    <Tooltip
      interactive
      className="bg-transparent p-0 m-0"
      content={<EquipmentTooltipContent equipment={equipment} />}
    >
      <div className="flex flex-col gap-[4px]">
        <EquipmentBoxResponsive key={createKey()} equipment={equipment} />
        {onShowName && (
          <div className="text-center text-[15px] leading-tight">{equipment.name}</div>
        )}
      </div>
    </Tooltip>
  )
}

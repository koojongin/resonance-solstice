'use client'

import { RsCardSize } from '@/app/components/character-frame/rs-card-size.enum'
import { RSCharacter } from '@/const/character/character.interface'
import { RsCharacterCardSmall } from '@/app/components/character-frame/rs-character-card-small'
import { RsCharacterCardMedium } from '@/app/components/character-frame/rs-character-card-medium'
import { useRouter } from 'next/navigation'
import { ALL_EQUIPMENTS, RSEquipmentType } from '@/const/archieve/equipment.const'
import { EquipmentBox, EquipmentBoxResponsive } from '@/app/equipments/rs-equipment-list'
import createKey from '@/services/key-generator'
import React from 'react'
import { RsCharacterCardResponsive } from '@/app/components/character-frame/rs-character-card-responsive'
import { Tooltip } from '@material-tailwind/react'
import { useNextDepthNavigator } from '@/services/navigation'

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

export function RsEquipmentCard({ equipments }: { equipments: string[] }) {
  const { router } = useNextDepthNavigator()
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

  return (
    <div className="flex gap-[2px]">
      {[weapon, armor, accesorry].map((equipment) => {
        return (
          <div key={createKey()} className="relative w-[40px] h-[40px] rounded flex items-stretch">
            {!equipment && (
              <div className="border border-gray-700 flex w-full items-center justify-center">
                -
              </div>
            )}
            {equipment && (
              <Tooltip
                interactive
                className="bg-transparent p-0 m-0"
                content={
                  <div
                    className="text-blue-gray-800 bg-white p-[10px] pb-0 shadow-lg shadow-gray-700 rounded cursor-pointer"
                    onClick={() => {
                      router.push(`/equipments/${equipment.name}`)
                    }}
                  >
                    <div className="flex gap-[4px]">
                      <EquipmentBox equipment={equipment} />
                      <div className="max-w-[300px] flex flex-col gap-[4px]">
                        <div className="">{equipment.name}</div>
                        <hr />
                        <div className="whitespace-pre-line">{equipment.desc}</div>
                      </div>
                    </div>
                    <div className="w-full text-center pt-[8px] pb-[4px] mb-0">
                      [클릭시 고정됩니다]
                    </div>
                  </div>
                }
              >
                <div>
                  <EquipmentBoxResponsive key={createKey()} equipment={equipment} />
                </div>
              </Tooltip>
            )}
          </div>
        )
      })}
    </div>
  )
}

'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { ExtendedRSMaterial } from '@/const/material/material.type'
import { ALL_EQUIPMENTS } from '@/const/archive/equipment.const'
import { MATERIALS } from '@/const/material.const'
import { ExtendedRSEquipment } from '@/app/equipments/equipment.type'

enum RSItemType {
  EQUIPMENT = 'EQUIPMENT',
  MATERIAL = 'MATERIAL',
}
export function LinkMaterialOrEquipment({
  material,
  className,
  children,
}: {
  material: ExtendedRSMaterial | ExtendedRSEquipment
  className?: string
  children: any
}) {
  const href = getLinkPath(material)
  if (!href) return children
  return (
    <Link className={clsx(className)} href={href}>
      <div>{children}</div>
    </Link>
  )
}

function getItemType(material: ExtendedRSMaterial | ExtendedRSEquipment): RSItemType {
  const isEquipment = ALL_EQUIPMENTS[material.name]
  const isMaterial = MATERIALS[material.name]

  if (isEquipment) return RSItemType.EQUIPMENT
  if (isMaterial) return RSItemType.MATERIAL
  return RSItemType.MATERIAL
}

function getLinkPath(material: ExtendedRSMaterial | ExtendedRSEquipment) {
  const itemType = getItemType(material)
  if (itemType === RSItemType.EQUIPMENT) return `/equipments/${material.name}`
  if (itemType === RSItemType.MATERIAL) return `/materials/${material.name}`
}

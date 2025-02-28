import { useDraggable, useDroppable } from '@dnd-kit/core'
import { ExtendedRSEquipment } from '@/app/equipments/equipment.type'
import { Tooltip } from '@material-tailwind/react'
import { EquipmentBoxResponsive } from '@/app/equipments/rs-equipment-list'
import { ItemBoxKind } from '@/const/item/item.enum'
import {
  RsCharacterCard,
  RsCharacterCardShorten,
} from '@/app/components/character-frame/rs-character-card'
import { RsCardSize } from '@/app/components/character-frame/rs-card-size.enum'
import { MaterialBox, MaterialBoxResponsive } from '@/app/components/material/material-box'
import React from 'react'

export interface DraggableTier {
  id: string
  title: string
  items: Array<ExtendedRSEquipment & { id: string }>
}

export const FULL_BOX_ID = 'full-list-box'

export function DroppableRowBottom({ id, children }: any) {
  const { setNodeRef } = useDroppable({ id })
  return (
    <div ref={setNodeRef} className="flex items-center p-[2px]">
      <div className="flex flex-wrap gap-[2px] min-h-[50px] w-full">{children}</div>
    </div>
  )
}

export function DroppableRow({ onHideTitle, tier, onTitleChange, children, onClose }: any) {
  const { setNodeRef } = useDroppable({ id: tier.id })

  return (
    <div
      ref={setNodeRef}
      className={`flex items-center p-[2px] ${onHideTitle ? 'w-full' : 'border'}`}
    >
      {!onHideTitle && (
        <input
          className="max-w-[100px] w-full min-h-full h-full text-center resize-none"
          value={tier.title}
          onChange={(e) => onTitleChange(e.target.value)}
        />
      )}
      <div
        className={`flex flex-wrap gap-[2px] min-h-[50px] w-full ${onHideTitle ? '' : 'border'}`}
      >
        {children}
      </div>
      <div>
        <i className="p-[2px] bg-red-500 text-white border fa-solid fa-xmark" onClick={onClose} />
      </div>
    </div>
  )
}

export function DraggableItem({
  item,
  id,
  onShowItemName,
  type,
}: {
  item: ExtendedRSEquipment & { id: string }
  id: string
  onShowItemName: boolean
  type: ItemBoxKind
}) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({ id })

  const width = type === ItemBoxKind.CHARACTER ? 70 : 70
  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={{
        transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined,
        width: `${width}px`,
      }}
      className="rounded cursor-grab z-50"
    >
      <Tooltip
        content={
          <>
            {type === ItemBoxKind.EQUIPMENT && (
              <div className="max-w-[300px] whitespace-pre-line">{item.desc}</div>
            )}
            {type === ItemBoxKind.MATERIAL && (
              <div className="max-w-[300px] whitespace-pre-line">{item.name}</div>
            )}
            {type === ItemBoxKind.TRAIN_EQUIPMENT && (
              <div className="max-w-[300px] whitespace-pre-line">{item.name}</div>
            )}
            {type === ItemBoxKind.CHARACTER && (
              <div className="max-w-[300px] whitespace-pre-line">{item.name}</div>
            )}
          </>
        }
      >
        <div>
          {type === ItemBoxKind.EQUIPMENT && <EquipmentBoxResponsive equipment={item} />}
          {type === ItemBoxKind.MATERIAL && <MaterialBoxResponsive material={item as any} />}
          {type === ItemBoxKind.TRAIN_EQUIPMENT && <MaterialBoxResponsive material={item as any} />}
          {type === ItemBoxKind.CHARACTER && (
            <div style={{ width: `${width}px` }}>
              <RsCharacterCardShorten character={item as any} height={width} />
            </div>
          )}
          {onShowItemName && (
            <div className="text-center break-words text-[13px] font-bold">{item.name}</div>
          )}
        </div>
      </Tooltip>
    </div>
  )
}

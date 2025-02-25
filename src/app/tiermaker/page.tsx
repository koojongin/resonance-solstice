'use client'

import { useState } from 'react'
import { DndContext, useDraggable, useDroppable } from '@dnd-kit/core'
import html2canvas from 'html2canvas'
import { CONVERTED_ALL_EQUIPMENTS } from '@/const/archive/equipment.const'
import { ExtendedRSEquipment } from '@/app/equipments/equipment.type'
import { EquipmentBoxResponsive } from '@/app/equipments/rs-equipment-list'
import { Tooltip } from '@material-tailwind/react'

interface DraggableTier {
  id: string
  title: string
  items: Array<ExtendedRSEquipment & { id: string }>
}

const initialItems = CONVERTED_ALL_EQUIPMENTS.map((a, index) => ({
  id: `${index + 1}`,
  ...a,
}))

const initialTiers: DraggableTier[] = [
  {
    id: 'tier-1',
    title: '1',
    items: [],
  },
  {
    id: 'tier-2',
    title: '2',
    items: [],
  },
  {
    id: 'tier-3',
    title: '3',
    items: [],
  },
  {
    id: 'tier-4',
    title: '4',
    items: [],
  },
  {
    id: 'tier-5',
    title: '5',
    items: [],
  },
]

const FULL_BOX_ID = 'full-list-box'

export default function TierMaker() {
  const [items, setItems] = useState(initialItems)
  const [tiers, setTiers] = useState<DraggableTier[]>(initialTiers)
  const { setNodeRef } = useDroppable({ id: 'list' })
  const [onShowItemName, setOnShowItemName] = useState<boolean>(true)

  const handleDragEnd = (event: any) => {
    const { active, over } = event
    if (!over) return

    const isSameDestination = tiers
      .find((item) => item.id === over.id)
      ?.items.find((item) => item.id === active.id)
    if (isSameDestination) return
    const sourceId = active.id
    const destinationId = over.id

    const movingItem = initialItems.find((item) => item.id === sourceId)
    setItems((prev) => {
      const before = [
        ...prev.filter((item) => {
          return item.id !== sourceId
        }),
      ]
      if (over.id === FULL_BOX_ID) {
        before.unshift(movingItem!)
      }

      return before
    })

    setTiers((prev) =>
      prev.map((tier) => {
        if (tier.id === destinationId && movingItem) {
          return {
            ...tier,
            items: [...tier.items, movingItem],
          }
        }
        return {
          ...tier,
          items: tier.items.filter((item) => item.id !== sourceId),
        }
      }),
    )
  }

  return (
    <div className="flex flex-col gap-[10px]">
      <div>
        <div>개발중................... [윈도우 + 쉬프트 + S]로 클립보드 복사</div>
        <div className="flex items-center gap-[4px] text-white">
          <div
            className="cursor-pointer bg-green-300 p-[4px]"
            onClick={() => setOnShowItemName(true)}
          >
            이름 보이게
          </div>
          <div
            className="cursor-pointer bg-green-300 p-[4px]"
            onClick={() => setOnShowItemName(false)}
          >
            이름 안보이게
          </div>
        </div>
      </div>
      <DndContext onDragEnd={handleDragEnd}>
        <div className="flex flex-col items-center gap-[10px] w-full">
          <div id="tier-container" className="w-full">
            {tiers.map((tier) => (
              <DroppableTier
                key={tier.id}
                tier={tier}
                onTitleChange={(newTitle: string) =>
                  setTiers((prev) =>
                    prev.map((t) =>
                      t.id === tier.id
                        ? {
                            ...t,
                            title: newTitle,
                          }
                        : t,
                    ),
                  )
                }
              >
                {tier.items.map((item) => (
                  <DraggableItem
                    onShowItemName={onShowItemName}
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    item={item}
                  />
                ))}
              </DroppableTier>
            ))}
          </div>

          <div className="flex flex-wrap gap-[2px] w-full border">
            <DroppableTier onHideTitle tier={{ id: FULL_BOX_ID }}>
              {items.map((item) => (
                <DraggableItem
                  key={item.id}
                  onShowItemName={onShowItemName}
                  item={item}
                  id={item.id}
                  name={item.name}
                />
              ))}
            </DroppableTier>
          </div>
        </div>
      </DndContext>
    </div>
  )
}

function DraggableItem({
  item,
  id,
  name,
  onShowItemName,
}: {
  item: ExtendedRSEquipment & { id: string }
  id: string
  name: string
  onShowItemName: boolean
}) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({ id })

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={{
        transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined,
      }}
      className="rounded w-[70px] cursor-grab"
    >
      <Tooltip content={<div className="max-w-[300px] whitespace-pre-line">{item.desc}</div>}>
        <div>
          <EquipmentBoxResponsive equipment={item} />
          {onShowItemName && <div className="text-center break-words">{item.name}</div>}
        </div>
      </Tooltip>
    </div>
  )
}

function DroppableTier({ onHideTitle, tier, onTitleChange, children }: any) {
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
    </div>
  )
}

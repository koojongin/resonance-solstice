import {
  DraggableItem,
  DraggableTier,
  DroppableRow,
  DroppableRowBottom,
  FULL_BOX_ID,
} from '@/app/tiermaker/drop'
import { DndContext } from '@dnd-kit/core'
import { useState } from 'react'
import { ItemBoxKind } from '@/const/item/item.enum'

export function TierDropTableBox({
  rowItems: sourceRowItems,
  items: sourceItems,
  onShowItemName,
  type,
}: {
  type: ItemBoxKind
  rowItems: DraggableTier[]
  items: Array<{ id: string } & any>
  onShowItemName?: boolean
}) {
  const initialItems = [...sourceItems]

  const [items, setItems] = useState([...sourceItems])
  const [rowItems, setRowItems] = useState<DraggableTier[]>(sourceRowItems)

  const handleDragEnd = (event: any) => {
    const { active, over } = event
    if (!over) return

    const isSameDestination = rowItems
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

    setRowItems((prev) =>
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
    <DndContext onDragEnd={handleDragEnd}>
      <div className="flex flex-col items-center gap-[10px] w-full">
        <div id="tier-container" className="w-full">
          {rowItems.map((tier) => (
            <DroppableRow
              key={tier.id}
              tier={tier}
              onTitleChange={(newTitle: string) =>
                setRowItems((prev) =>
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
                  onShowItemName={onShowItemName || false}
                  key={item.id}
                  id={item.id}
                  item={item}
                  type={type}
                />
              ))}
            </DroppableRow>
          ))}
        </div>

        <div className="flex flex-col gap-[2px]">
          <div className="text-red-400 font-bold">
            *리스트 안의 아이템을 선택시 좌상단으로 이동됩니다.
          </div>
          <div className="flex flex-wrap gap-[2px] w-full border">
            <DroppableRowBottom id={FULL_BOX_ID}>
              {items.map((item) => (
                <DraggableItem
                  key={item.id}
                  onShowItemName={onShowItemName || false}
                  item={item}
                  id={item.id}
                  type={type}
                />
              ))}
            </DroppableRowBottom>
          </div>
        </div>
      </div>
    </DndContext>
  )
}

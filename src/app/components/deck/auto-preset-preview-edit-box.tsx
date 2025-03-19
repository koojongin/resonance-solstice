import { RS_CHARACTER_DICT } from '@/const/character/character.const'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { CHARACTER_DETAIL } from '@/const/character/character-detail.const'
import { CHARACTER_SKILLS } from '@/const/character/character-skill.const'
import {
  closestCenter,
  DndContext,
  DragEndEvent,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core'
import { arrayMove, rectSortingStrategy, SortableContext, useSortable } from '@dnd-kit/sortable'
import createKey from '@/services/key-generator'
import { CreateRecommendationDeck } from '@/app/rd/user/create-rd-deck'

export function AutoPresetPreviewEditBox({
  deck,
  setDeck,
  onSelectBanCard,
  onRefreshPreview,
}: {
  deck: CreateRecommendationDeck
  setDeck: React.Dispatch<React.SetStateAction<CreateRecommendationDeck>>
  onSelectBanCard: (skillName: string) => void
  onRefreshPreview: () => void
}) {
  const [skillDict, setSkillDict] = useState<{
    [key: string]: { originName: string; skill: any }
  }>()

  const [isAvailable, setIsAvailable] = useState<boolean>(true)
  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
    useSensor(KeyboardSensor),
  )

  const handleDragEnd = useCallback((event: DragEndEvent) => {
    const { active, over } = event
    if (active.id !== over?.id) {
      setDeck((prevDeck) => {
        const oldIndex = prevDeck.autoPresetPreviews!.findIndex((item) => item === active.id)
        const newIndex = prevDeck.autoPresetPreviews!.findIndex((item) => item === over?.id)

        return {
          ...prevDeck,
          autoPresetPreviews: arrayMove(prevDeck.autoPresetPreviews!, oldIndex, newIndex),
        }
      })
    }
  }, [])

  const initPreviewData = () => {
    setIsAvailable(true)
    const dict: any = {}
    deck.characters.forEach((cData) => {
      const { name: characterName } = cData!
      const detail = CHARACTER_DETAIL[characterName]
      if (detail?.SKILLS) {
        detail?.SKILLS.forEach((skillName: string) => {
          const skill = CHARACTER_SKILLS[skillName]
          dict[skillName] = {
            originName: characterName,
            skill,
          }
        })
        return
      }
      setIsAvailable(false)
    })
    setSkillDict({ ...(skillDict || {}), ...dict })
  }

  useEffect(() => {
    if (deck.characters.filter((d) => !!d).length !== 5) return
    initPreviewData()
  }, [deck.characters])

  return (
    <div className="flex relative min-h-[100px]">
      {!isAvailable && (
        <div className="w-full h-full absolute top-0">
          <div className="absolute w-full h-full bg-red-300/80 z-10" />
          <div className="absolute top-0 text-white w-full h-full flex items-center justify-center z-20 ff-dh text-[30px] text-center">
            5명의 승무원중 스킬 데이터가 부족한 승무원이 있어,
            <br />
            프리뷰 설정 및 조회가 불가능합니다.
          </div>
        </div>
      )}
      {skillDict && deck.autoPresetPreviews && deck.autoPresetPreviews.length > 0 && (
        <div className="flex flex-wrap gap-[6px] justify-center border border-gray-300 rounded p-[4px] relative">
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
          >
            {deck.autoPresetPreviews && (
              <SortableContext items={deck.autoPresetPreviews} strategy={rectSortingStrategy}>
                {deck.autoPresetPreviews.map((key, index) => {
                  return (
                    <SortableItem
                      skillDict={skillDict}
                      skillName={key}
                      key={createKey()}
                      onSelect={(skillName) => {
                        setDeck({
                          ...deck,
                          autoPresetPreviews: [
                            ...deck.autoPresetPreviews!.filter((c) => c !== skillName),
                          ],
                        })
                        onSelectBanCard(skillName)
                      }}
                    />
                  )
                })}
              </SortableContext>
            )}
          </DndContext>
        </div>
      )}
    </div>
  )
}

function SortableItem({
  onSelect,
  skillDict,
  skillName,
}: {
  onSelect: (skillName: string) => void
  skillDict: any
  skillName: string
}) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
    id: skillName,
  })

  const { originName, skill } = skillDict[skillName] || {}
  const character = RS_CHARACTER_DICT[originName]
  if (!skill || !originName) {
    return (
      <div
        key={`deck_edit_app_${createKey()}`}
        className="text-center border border-red-400 w-[100px] flex flex-col gap-[2px] items-center justify-center bg-white"
        onClick={() => {
          onSelect(skillName)
        }}
      >
        <div>NoData</div>
        <div>{skillName}</div>
      </div>
    )
  }

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={{
        transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined,
      }}
      onClick={() => {
        onSelect(skillName)
      }}
    >
      <div className="w-[100px] border-2 border-black/50 shadow-md shadow-gray-800 relative rounded overflow-hidden bg-white">
        <div className="absolute right-0 top-0 m-[2px] font-bold w-[24px] h-[24px] flex items-center justify-center bg-gray-700 text-white border-2 border-gray-800 rounded-full shadow-md shadow-gray-800">
          {skill.cost}
        </div>
        <img src={character.thumbnail} className="" />
        <div className="bottom-0 absolute w-full flex justify-center pb-[22px]">
          <img className="w-[60px] h-[60px] border" src={skill.thumbnail} />
        </div>
        <div className="absolute bottom-0 p-[2px] ff-dh text-shadow-outline text-white">
          {skill.name}
        </div>
      </div>
    </div>
  )
}

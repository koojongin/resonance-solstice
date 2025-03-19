'use client'

import { useParams } from 'next/navigation'
import { RECOMMENDATION_DECKS, RecommendationDeck } from '@/app/rd/rd-decks.const'
import React from 'react'
import { copyToClipboard } from '@/services/utils/copy-clipboard'
import { Tooltip } from '@material-tailwind/react'
import Link from 'next/link'
import { convertCharacterThumbnailUrl, getFrameBgUrl } from '@/services/character-url'
import { RsCharacterBorderBox } from '@/app/components/character-frame/rs-character-border-box'
import { toast } from 'react-toastify'
import { RSHighlightedText } from '@/services/utils/highlight-text'
import { RECOMMENDATION_ES_DECKS } from '@/app/rd/eternal-scuffle/rd-eternal-scuffle.const'
import { GenericEquipmentBox } from '@/app/components/deck/generic-equipment-box'
import { CharacterDetailMainBox } from '@/app/components/deck/character-detail-main-box'
import { injectCharacterDetail } from '@/app/components/deck/inject-character-data'
import { AutoPresetBox } from '@/app/components/deck/auto-preset-box'
import { useNextDepthNavigator } from '@/services/navigation'

const TOTAL_RD_DECKS = [...RECOMMENDATION_DECKS, ...RECOMMENDATION_ES_DECKS].reverse()

export default function RecommendationDeckDetailPage() {
  const { router } = useNextDepthNavigator()
  const { id } = useParams()
  const originDeck = TOTAL_RD_DECKS.find((rDeck) => id === rDeck.id)

  router.replace(`/rd/user/detail/${originDeck!.docId}`)
  const deck: RecommendationDeck | undefined = injectCharacterDetail(
    originDeck,
  ) as RecommendationDeck

  const relatedDecks =
    deck?.leaderName &&
    TOTAL_RD_DECKS.filter(
      (rDeck) => rDeck.characters.filter((c) => c.character.name === deck.leaderName).length > 0,
    )

  return (
    <div>
      {!deck && <div>조회된 덱이 없습니다.</div>}
      {deck && (
        <div className="flex flex-col gap-[10px]">
          <div className="ff-dh text-[30px] bg-gray-100 p-[10px] pb-[8px] border-y border-gray-500 flex items-center gap-[4px]">
            <Tooltip content="클릭시 페이지 링크가 복사됩니다.">
              <div
                className="flex items-center justify-center cursor-pointer"
                onClick={async () => {
                  await copyToClipboard(window?.location?.href)
                  toast('페이지 링크가 복사되었습니다.')
                }}
              >
                <i className="fa-solid fa-square-share-nodes text-[20px]" />
              </div>
            </Tooltip>
            {deck.title}
          </div>
          {(deck.descLink || deck.owner) && (
            <div className="flex justify-between w-full">
              {deck.owner && (
                <div className="">
                  작성자 :
                  <Link
                    href={deck.owner.link as string}
                    className="hover:underline text-blue-500"
                    target="_blank"
                  >
                    @{deck.owner.name}
                  </Link>
                </div>
              )}
              {deck.descLink && (
                <div className="flex flex-wrap items-center justify-end flex-1">
                  <div>출처:</div>
                  <div className="flex flex-wrap items-center gap-[4px]">
                    <Link
                      href={deck.descLink}
                      className="hover:underline text-blue-500"
                      target="_blank"
                    >
                      <div className="max-w-[400px] truncate">{deck.descLink}</div>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          )}
          <CharacterDetailMainBox deck={deck} />
          <GenericEquipmentBox characters={deck.characters.map((c) => c.character.originName)} />
          {deck.desc && (
            <>
              <div className="flex items-stretch">
                <div className="min-w-[100px] flex items-center justify-center ff-dh text-[20px]">
                  설명
                </div>
                <div className="bg-gray-100/50 p-[10px] rounded border whitespace-pre-line leading-normal w-full">
                  <RSHighlightedText
                    text={deck.desc}
                    highlightStyle="text-shadow-outline-white-gray"
                  />
                </div>
              </div>
              <hr />
            </>
          )}
          {deck.autoPreset && (
            <AutoPresetBox
              deck={deck}
              usePreview={deck.autoPresetPreviews && deck.autoPresetPreviews.length > 0}
            />
          )}

          <div className="flex flex-col gap-[6px]">
            <div className="ff-dh text-[24px]">
              해당 리더가 포함되어 있는 추천 덱({relatedDecks?.length.toLocaleString() || 0})
            </div>
            <div className="flex flex-wrap gap-[10px]">
              {relatedDecks &&
                relatedDecks.map((relatedDeck, index) => {
                  return (
                    <div
                      key={`rd_${relatedDeck.id}_${index}`}
                      className="w-[312px] bg-gray-500 rounded overflow-hidden p-[2px] pb-0 shadow-md hover:drop-shadow-2xl hover:bg-blue-gray-500 hover:shadow-xl hover:shadow-blue-500/20"
                    >
                      <Link href={`/rd/detail/${relatedDeck.id}`}>
                        <div className="flex flex-wrap gap-[2px]">
                          {relatedDeck.characters.map((characterData, cIndex) => {
                            const { character } = characterData
                            const isLeader = character.name === relatedDeck.leaderName
                            return (
                              <div
                                key={`rd_${relatedDeck.id}_${cIndex}`}
                                className="w-[60px] h-[60px] relative overflow-hidden"
                              >
                                <div className="absolute w-full h-full z-40 opacity-90">
                                  <RsCharacterBorderBox grade={character.grade} borderSize={3} />
                                </div>
                                <img
                                  src={getFrameBgUrl(character.grade)}
                                  className="z-0 w-full h-full absolute"
                                />
                                <div
                                  className="min-h-full min-w-full bg-cover bg-no-repeat relative"
                                  style={{
                                    backgroundImage: `url(${convertCharacterThumbnailUrl(character.thumbnail, 100)})`,
                                  }}
                                />
                                {isLeader && (
                                  <div className="absolute bottom-0 w-full text-center text-white ff-dh text-[20px] text-shadow-outline">
                                    리더
                                  </div>
                                )}
                                <div
                                  className="min-h-full min-w-full bg-cover"
                                  style={{ backgroundImage: `url(${character.thumbnailLarge})` }}
                                />
                              </div>
                            )
                          })}
                        </div>
                        <div className="text-white ff-dh truncate w-full text-[20px] px-[10px] py-[4px] text-center">
                          {relatedDeck.title}
                        </div>
                      </Link>
                    </div>
                  )
                })}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

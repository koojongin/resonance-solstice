'use client'

import { useParams } from 'next/navigation'
import { RECOMMENDATION_DECKS } from '@/app/rd/rd-decks.const'
import createKey from '@/services/key-generator'
import {
  RsCharacterCard,
  RsEquipmentCard,
} from '@/app/components/character-frame/rs-character-card'
import { RsCardSize } from '@/app/components/character-frame/rs-card-size.enum'
import React from 'react'
import { copyToClipboard } from '@/services/utils/copy-clipboard'
import { Tooltip } from '@material-tailwind/react'
import Link from 'next/link'
import { convertCharacterThumbnailUrl, getFrameBgUrl } from '@/services/character-url'
import { RsCharacterBorderBox } from '@/app/components/character-frame/rs-character-border-box'

export default function RecommendationDeckDetailPage() {
  const { id } = useParams()

  const deck = RECOMMENDATION_DECKS.find((rDeck) => id === rDeck.id)
  if (!deck) {
    return <div>조회된 덱이 없습니다.</div>
  }

  const relatedDecks =
    deck.leaderName &&
    RECOMMENDATION_DECKS.filter(
      (rDeck) => rDeck.characters.filter((c) => c.character.name === deck.leaderName).length > 0,
    )
  const isExistLeader = deck.leaderName
  const leaderIndex = deck.characters.findIndex((c) => c.character.name === deck.leaderName)
  return (
    <div className="flex flex-col gap-[10px]">
      <div className="ff-dh text-[30px] bg-gray-100 p-[10px] pb-[8px] border-y border-gray-500">
        {deck.title}
      </div>
      {deck.descLink && (
        <div className="w-full truncate mx-auto">
          출처 :{' '}
          <Link href={deck.descLink} className="hover:underline text-blue-500" target="_blank">
            {deck.descLink}
          </Link>
        </div>
      )}
      {deck.owner && (
        <div className="w-full truncate mx-auto">
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
      <div className="bg-gray-100 p-[10px] rounded">
        {isExistLeader && (
          <div className="flex">
            {[0, 1, 2, 3, 4].map((index) => {
              return (
                <div
                  key={createKey()}
                  className="text-[30px] w-full text-center font-bold ff-dh text-white"
                >
                  {leaderIndex === index && <div className="bg-red-300 pt-[2px]">리더</div>}
                </div>
              )
            })}
          </div>
        )}
        <div className="flex gap-[10px] justify-center items-start">
          {deck.characters.map((characterData) => {
            const { character, equipments } = characterData
            return (
              <div key={createKey()} className="relative w-[180px] flex flex-col gap-[6px]">
                <RsCharacterCard size={RsCardSize.RESPONSIVE} character={character} height={200} />
                <RsEquipmentCard equipments={equipments || []} width={55} />
              </div>
            )
          })}
        </div>
      </div>
      {deck.desc && (
        <>
          <div className="flex items-stretch">
            <div className="min-w-[100px] flex items-center justify-center ff-dh text-[20px]">
              설명
            </div>
            <div className="bg-gray-100/50 p-[4px] rounded border whitespace-pre-line leading-tight">
              {deck.desc}
            </div>
          </div>
          <hr />
        </>
      )}
      {deck.autoPreset && (
        <>
          <div className="flex items-stretch">
            <div className="min-w-[100px] flex items-center justify-center ff-dh text-[20px]">
              오토 프리셋
            </div>
            <Tooltip content="클릭시 오토 프리셋이 복사됩니다.">
              <div
                className="cursor-pointer max-h-[40px] overflow-y-scroll border p-[4px] rounded bg-gray-100 whitespace-pre-line flex mx-auto w-full break-all"
                onClick={async () => {
                  await copyToClipboard(deck.autoPreset!)
                  alert('복사됨')
                }}
              >
                {deck.autoPreset}
              </div>
            </Tooltip>
          </div>
          <hr />
        </>
      )}

      <div className="flex flex-col gap-[6px]">
        <div className="ff-dh text-[24px]">
          해당 리더가 포함되어 있는 추천 덱({relatedDecks?.length.toLocaleString() || 0})
        </div>
        <div className="flex flex-wrap gap-[10px]">
          {relatedDecks &&
            relatedDecks.map((relatedDeck) => {
              return (
                <Link key={createKey()} href={`/rd/detail/${relatedDeck.id}`}>
                  <div className="w-[262px] bg-gray-500 rounded overflow-hidden p-[2px] pb-0 shadow-md hover:drop-shadow-2xl hover:bg-blue-gray-500 hover:shadow-xl hover:shadow-blue-500/20">
                    <div className="flex flex-wrap gap-[2px]">
                      {relatedDeck.characters.map((characterData) => {
                        const { character } = characterData
                        return (
                          <div key={createKey()} className="w-[50px] h-[50px] relative">
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
                            {/* <div */}
                            {/*   className="min-h-full min-w-full bg-cover" */}
                            {/*   style={{ backgroundImage: `url(${character.thumbnailLarge})` }} */}
                            {/* /> */}
                          </div>
                        )
                      })}
                    </div>
                    <div className="text-white ff-dh truncate w-full text-[20px] px-[10px] py-[4px] text-center">
                      {relatedDeck.title}
                    </div>
                  </div>
                </Link>
              )
            })}
        </div>
      </div>
    </div>
  )
}

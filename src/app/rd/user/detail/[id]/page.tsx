'use client'

import { useParams } from 'next/navigation'
import React, { useCallback, useEffect, useState } from 'react'
import { copyToClipboard } from '@/services/utils/copy-clipboard'
import { Tooltip } from '@material-tailwind/react'
import Link from 'next/link'
import { toast } from 'react-toastify'
import { RS_CHARACTER_DICT } from '@/const/character/character.const'
import { api } from '@/services/api/api.interceptor'
import { DeleteDeckTooltip } from '@/app/rd/user/detail/delete-deck-tooltip'
import { formatDateNormal } from '@/services/utils/date.format'
import { RecommendationUserDeck } from '@/app/rd/user/user-deck.interface'
import { GenericEquipmentBox } from '@/app/components/deck/generic-equipment-box'
import {
  CharacterDetailDescBox,
  CharacterDetailMainBox,
} from '@/app/components/deck/character-detail-main-box'
import { injectCharacterDetail } from '@/app/components/deck/inject-character-data'
import { AutoPresetBox } from '@/app/components/deck/auto-preset-box'
import { CommentBox } from '@/app/components/comment/comment-box'
import { CommentTarget } from '@/const/api/comment-target'
import { RsCharacterBorderBox } from '@/app/components/character-frame/rs-character-border-box'
import { convertCharacterThumbnailUrl, getFrameBgUrl } from '@/services/character-url'
import { Pagination } from '@/const/api/pagination.interface'
import { PaginationList } from '@/app/components/pagination/pagination-list'
import { RECOMMENDATION_DECKS } from '@/app/rd/rd-decks.const'

export default function RecommendationUserDeckDetailPage() {
  const { id } = useParams()
  const [deck, setDeck] = useState<RecommendationUserDeck>()

  const loadDeck = useCallback(async () => {
    const result = await api.post(`/recommendation-deck/get/${id}`)
    const { data } = result
    const { deck: rDeck } = data
    const fixedDeck = { ...rDeck }
    const staticDeck = RECOMMENDATION_DECKS.find((stDeck) => stDeck?.docId === rDeck.id)
    fixedDeck.characters = fixedDeck.characters.map((c: any) => {
      return {
        character: RS_CHARACTER_DICT[c.name],
        equipments: (c?.equipments || []).map((equipment: any) => equipment?.name),
      }
    })

    const injectedDeck = injectCharacterDetail(fixedDeck) as RecommendationUserDeck
    if (staticDeck) {
      injectedDeck.desc = staticDeck.desc
    }
    setDeck(injectedDeck)
  }, [])

  useEffect(() => {
    loadDeck()
  }, [])

  return (
    <div>
      {!deck && <div>데이터 로드중...</div>}
      {deck && (
        <div className="flex flex-col gap-[4px]">
          <div className="flex w-full gap-[4px]">
            <div className="flex items-center divide-x divide-gray-800 text-[15px]">
              <div className="flex items-center gap-[6px] px-[4px]">
                <div className="">조회수</div>
                <div className="bg-gray-200">{deck.reads.toLocaleString()}</div>
              </div>
              <div className="flex items-center gap-[6px] px-[4px]">
                <div className="">작성일</div>
                <div className="bg-gray-200">{formatDateNormal(deck.createdAt!)}</div>
              </div>
            </div>
            <Link href={`/rd/user/detail/${deck.id}/check-password`} className="ml-auto">
              <div className="bg-blue-300 inline-block text-white ff-dh text-[20px] min-w-[50px] h-[30px] flex items-center justify-center rounded shadow-md cursor-pointer">
                수정
              </div>
            </Link>
            <Tooltip
              interactive
              className="bg-transparent p-0 m-0"
              content={<DeleteDeckTooltip id={deck.id!} />}
            >
              <div className="bg-red-400 inline-block text-white ff-dh text-[20px] min-w-[50px] h-[30px] flex items-center justify-center rounded shadow-md cursor-pointer">
                삭제
              </div>
            </Tooltip>
          </div>
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
          <CharacterDetailDescBox desc={(deck?.desc as string) || ''} />
          <AutoPresetBox deck={deck} usePreview={(deck as RecommendationUserDeck).usePreview} />
          <CommentBox data={{ target: CommentTarget.DeckDetail, refId: id as string }} />
          <hr className="my-[10px] mt-[50px]" />
          <RelatedDeckList leaderName={deck.leaderName!} />
        </div>
      )}
    </div>
  )
}

function convertCharacterData(decks: []) {
  return decks.map((deck: any) => {
    const fixedDeck = { ...deck }
    fixedDeck.characters = fixedDeck.characters.map((c: any) => {
      return {
        character: RS_CHARACTER_DICT[c.name],
        equipments: (c?.equipments || []).map((equipment: any) => equipment?.name),
      }
    })
    return fixedDeck
  })
}
function RelatedDeckList({ leaderName }: { leaderName: string }) {
  const [decks, setDecks] = useState<RecommendationUserDeck[]>([])
  const [pagination, setPagination] = useState<Pagination>()
  const loadDecks = useCallback(async (selectedPage?: number) => {
    const result = await api.post('/recommendation-deck/list', {
      condition: {
        leaderName,
      },
      opts: {
        page: selectedPage,
        limit: 20,
      },
    })
    const { decks: rDecks, page, total, totalPages } = result.data
    setDecks(convertCharacterData(rDecks))
    setPagination({
      page,
      total,
      totalPages,
    })
  }, [])

  useEffect(() => {
    loadDecks()
  }, [])

  return (
    <div className="flex flex-col gap-[6px]">
      <div className="ff-dh text-[24px]">
        해당 리더가 포함되어 있는 추천 덱({decks?.length.toLocaleString() || 0})
      </div>
      <div className="flex flex-wrap gap-[10px]">
        {decks &&
          decks.map((deck, index) => {
            return (
              <div
                key={`rd_${deck.id}_${index}`}
                className="w-[312px] bg-gray-500 rounded overflow-hidden p-[2px] pb-0 shadow-md hover:drop-shadow-2xl hover:bg-blue-gray-500 hover:shadow-xl hover:shadow-blue-500/20"
              >
                <Link href={`/rd/user/detail/${deck.id}`}>
                  <div className="flex flex-wrap gap-[2px]">
                    {deck.characters.map((characterData, cIndex) => {
                      const { character } = characterData
                      const isLeader = character.name === deck.leaderName
                      return (
                        <div
                          key={`rd_${deck.id}_${cIndex}`}
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
                    {deck.title}
                  </div>
                </Link>
              </div>
            )
          })}
      </div>
      {pagination && <PaginationList onSelectPage={loadDecks} pagination={pagination} />}
    </div>
  )
}

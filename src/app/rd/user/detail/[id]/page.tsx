'use client'

import { useParams } from 'next/navigation'
import React, { useCallback, useEffect, useRef, useState } from 'react'
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
import createKey from '@/services/key-generator'
import { Pagination } from '@/const/api/pagination.interface'

export default function RecommendationUserDeckDetailPage() {
  const { id } = useParams()
  const [deck, setDeck] = useState<RecommendationUserDeck>()

  const loadDeck = useCallback(async () => {
    const result = await api.post(`/recommendation-deck/get/${id}`)
    const { data } = result
    const { deck: rDeck } = data
    const fixedDeck = { ...rDeck }
    fixedDeck.characters = fixedDeck.characters.map((c: any) => {
      return {
        character: RS_CHARACTER_DICT[c.name],
        equipments: (c?.equipments || []).map((equipment: any) => equipment?.name),
      }
    })
    setDeck(injectCharacterDetail(fixedDeck) as RecommendationUserDeck)
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
          <AutoPresetBox deck={deck} />
          <CommentBox data={{ target: 'deck-detail', refId: id as string }} />
        </div>
      )}
    </div>
  )
}

function CommentBox({ data }: { data: { target: string; refId: string } }) {
  const { target, refId } = data
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const [commentDesc, setCommentDesc] = useState<string>()
  const [comments, setComments] = useState<{ ip: string; content: string; createdAt: string }[]>([])
  const [pagination, setPagination] = useState<Pagination>()

  const handleInput = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto' // 높이 초기화
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px` // 내용에 맞게 조정
    }
  }
  const handleDescChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCommentDesc(e.target.value)
  }

  const writeComment = async () => {
    if (!commentDesc) return toast('댓글 내용을 입력하세요.')
    setCommentDesc('')
    try {
      await api.post('/comment/write', {
        target,
        refId,
        content: commentDesc,
      })
      await loadComments(1)
    } catch (error) {
      /* empty */
    }
  }

  const loadComments = useCallback(async (selectedPage?: number) => {
    const result = await api.post('/comment/list', {
      condition: {
        refId,
      },
      opts: {
        page: selectedPage,
        limit: 20,
      },
    })
    const { comments: rComments, page, total, totalPages } = result.data
    setComments(rComments)
    setPagination({
      page,
      total,
      totalPages,
    })
  }, [])

  useEffect(() => {
    loadComments(1)
  }, [])

  return (
    <div className="flex flex-col gap-[10px]">
      <div>
        <div className="flex items-center gap-[4px] p-[10px] ff-dh text-[20px] border-y border-gray-600">
          <i className="fa-solid fa-comments text-[16px] pb-1" />
          댓글 [{pagination?.total.toLocaleString()}]
        </div>
      </div>
      <div className="flex flex-col gap-[5px]">
        {comments.map((comment) => {
          return (
            <div key={createKey()} className="border border-gray-400">
              <div className="bg-gray-200 p-[5px] border-b border-dashed border-gray-500 flex items-center text-[14px]">
                <div>{comment.ip}</div>
                <div className="ml-auto">{formatDateNormal(comment.createdAt)}</div>
              </div>
              <div className="whitespace-pre-line p-[5px] text-[14px]">{comment.content}</div>
            </div>
          )
        })}
      </div>
      <div className="flex flex-col border border-gray-500 rounded">
        <div className="p-[10px]">
          <div className="text-[14px]">댓글 작성</div>
        </div>
        <hr className="border-gray-600" />
        <textarea
          ref={textareaRef}
          placeholder="댓글 내용을 입력하세요."
          onInput={handleInput}
          value={commentDesc}
          onChange={handleDescChange}
          className="p-[10px] overflow-hidden resize-none focus-visible:outline-none"
        />
        <div className="p-[10px] flex justify-end">
          <div
            className="border border-gray-700 h-[30px] min-w-[100px] flex items-center justify-center cursor-pointer"
            onClick={() => {
              writeComment()
            }}
          >
            작성
          </div>
        </div>
      </div>
    </div>
  )
}

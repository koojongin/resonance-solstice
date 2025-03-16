'use client'

import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Pagination } from '@/const/api/pagination.interface'
import { toast } from 'react-toastify'
import { api } from '@/services/api/api.interceptor'
import createKey from '@/services/key-generator'
import { formatDateNormal } from '@/services/utils/date.format'

export function CommentBox({ data }: { data: { target: string; refId: string } }) {
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
        target,
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

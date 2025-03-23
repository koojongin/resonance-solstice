'use client'

import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Pagination } from '@/const/api/pagination.interface'
import { toast } from 'react-toastify'
import { api } from '@/services/api/api.interceptor'
import createKey from '@/services/key-generator'
import { formatDateNormal } from '@/services/utils/date.format'
import { Comment } from '@/app/components/comment/comment.interface'
import { COMMENT_TARGET_DICT } from '@/app/components/comment/comment-target-dict'
import Link from 'next/link'
import { PaginationList } from '@/app/components/pagination/pagination-list'
import { RS_CHARACTER_DICT } from '@/const/character/character.const'

interface ReadAndWriteComment {
  target?: string
  refId?: string
}

interface DifferenceReadAndWriteComment {
  read: ReadAndWriteComment
  write: ReadAndWriteComment
}

function getWriteOption(data: ReadAndWriteComment | DifferenceReadAndWriteComment) {
  if ('write' in data) return data.write
  return data
}

function getReadOption(data: ReadAndWriteComment | DifferenceReadAndWriteComment) {
  if ('read' in data) return data.read
  return data
}

export function CommentBox({
  data,
  onShowDestination,
}: {
  onShowDestination?: boolean
  data: ReadAndWriteComment | DifferenceReadAndWriteComment
}) {
  const writeOption = getWriteOption(data)
  const readOption = getReadOption(data)

  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const [commentDesc, setCommentDesc] = useState<string>()
  const [comments, setComments] = useState<Comment[]>([])
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
        target: writeOption.target,
        refId: writeOption.refId,
        content: commentDesc,
      })
      await loadComments(1)
    } catch (error) {
      /* empty */
    }
  }

  const loadComments = useCallback(async (selectedPage?: number) => {
    const condition: any = {}
    if (readOption.refId) {
      condition.refId = readOption.refId
    }

    if (readOption.target) {
      condition.target = readOption.target
    }

    const result = await api.post('/comment/list', {
      condition,
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
        {!onShowDestination && <CommentListBox comments={comments} />}
        {onShowDestination && <CommentListBoxWithDestination comments={comments} />}
        {pagination && <PaginationList pagination={pagination} onSelectPage={loadComments} />}
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
          maxLength={1000}
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

function CommentContentSection({ comment }: { comment: Comment }) {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleExpand = () => {
    setIsExpanded(true)
  }

  const maxLineLength = 50
  const maxLines = 2
  const commentLength = comment.content.length

  const commentLines = comment.content.split('\n')
  const lineCount = commentLines.length
  const exceedsLength = commentLength > maxLineLength * maxLines

  const isLongText = lineCount > maxLines || exceedsLength

  return (
    <>
      <div
        className={`break-all whitespace-pre-line p-[5px] text-[14px] overflow-hidden ${isExpanded || !isLongText ? 'h-auto' : 'h-[30px]'}`}
        style={{
          display: '-webkit-box',
          overflow: 'hidden',
        }}
      >
        {comment.content}
      </div>
      {isLongText && !isExpanded && (
        <button
          onClick={toggleExpand}
          className="bg-gray-200 text-center w-full p-[4px] mt-[10px] text-[14px]"
        >
          펼쳐보기▼
        </button>
      )}
    </>
  )
}
function CommentListBox({ comments }: { comments: Comment[] }) {
  return (
    <>
      {comments.map((comment) => {
        return (
          <div key={createKey()} className="border border-gray-400">
            <div className="bg-gray-200 p-[5px] border-b border-dashed border-gray-500 flex items-center text-[14px]">
              <div>{comment.ip}</div>
              <div className="ml-auto">{formatDateNormal(comment.createdAt)}</div>
            </div>
            <CommentContentSection comment={comment} />
          </div>
        )
      })}
    </>
  )
}

function CommentListBoxWithDestination({ comments }: { comments: Comment[] }) {
  const getPathData = (comment: Comment): { href: string; title: string } => {
    const isStaticRef = ['archive-', 'character-', 'equipment-', 'material-', 'monster-'].find(
      (n) => comment.target.indexOf(n) === 0,
    )
    const { path, isExistRefId, name } = COMMENT_TARGET_DICT[isStaticRef || comment.target] || {}

    const pathData = {
      href: '',
      title: name || comment.target,
    }

    const [, ...staticName] = comment.target.split('-')
    if (isStaticRef) {
      pathData.href = `${path}/${staticName.join('-')}`

      const decodedName = comment.target.split('-').pop()
      if (isStaticRef === 'character-') {
        pathData.title += ` - ${RS_CHARACTER_DICT[decodedName as string].name}`
      } else {
        pathData.title += ` - ${decodedName}`
      }
    } else {
      if (!isExistRefId) pathData.href = path

      if (!pathData.href) {
        pathData.href = `${path}/${comment.refId}`
      }
    }
    return pathData
  }

  return (
    <>
      {comments.map((comment) => {
        const { isExistRefId } = COMMENT_TARGET_DICT[comment.target] || {}
        const { href, title } = getPathData(comment)

        return (
          <div key={createKey()} className="border border-gray-400">
            <div className="sm:flex-wrap bg-gray-200 gap-[4px] p-[5px] border-b border-dashed border-gray-500 flex items-center text-[15px]">
              <Link href={href}>
                <div
                  className={`flex items-center gap-[4px] ${href ? 'cursor-pointer hover:underline' : 'cursor-auto'}`}
                >
                  <div>[{title}]</div>
                  {isExistRefId && <div>- {comment.refId}</div>}
                </div>
              </Link>
              <div className="ml-auto border border-gray-600 bg-white p-[4px] py-[2px]">
                {comment.ip}
              </div>
              <div className="">{formatDateNormal(comment.createdAt)}</div>
            </div>
            <CommentContentSection comment={comment} />
          </div>
        )
      })}
    </>
  )
}

'use client'

import { CommentTarget } from '@/const/api/comment-target'
import { CommentBox } from '@/app/components/comment/comment-box'
import React from 'react'
import { Tooltip } from '@material-tailwind/react'
import Link from 'next/link'

export default function AllCommentsPage() {
  return (
    <div>
      <div className="inline-flex w-full items-center">
        <div className="text-[20px]">전체 댓글을 모아둔 페이지입니다.</div>
        <Tooltip content="이미지가 포함된 상세 버그제보/기능제안은 이쪽으로 해주세요.">
          <Link href="https://discord.gg/VxkcjVFDMY" target="_blank" className="ml-auto">
            <div className="flex items-center text-white gap-[10px] cursor-pointer">
              <img
                className="w-[30px] rounded-full border-[2px] bg-white"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxBMhrJjoiD24rW6u6Xb9X5fBzGCCUWd_rE6rNdQzyQr7U8Cw7T98MABtG35QC6lE2L3Q&usqp=CAU"
              />
            </div>
          </Link>
        </Tooltip>
      </div>

      <CommentBox
        onShowDestination
        data={{
          read: {},
          write: {
            target: `${CommentTarget.Free}`,
            refId: '123456789012345678901234' as string,
          },
        }}
      />
    </div>
  )
}

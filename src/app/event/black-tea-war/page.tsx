'use client'

import Link from 'next/link'
import { GradientButton } from '@/app/components/button/gradient-button'
import { CommentBox } from '@/app/components/comment/comment-box'
import React from 'react'

export default function EventBlackTeaWarPage() {
  return (
    <div className="flex flex-col gap-[10px]">
      <GradientButton className="p-[4px] rounded shadow-2xl mr-auto">
        <Link href="https://arca.live/b/resonance/130695704" target="_blank">
          홍차전쟁 관련 공략 페이지 바로가기
        </Link>
      </GradientButton>
      <CommentBox
        data={{
          target: 'event-cheongmyeong-chronicles',
          refId: '123456789012345678901234' as string,
        }}
      />
    </div>
  )
}

import Link from 'next/link'
import React from 'react'
import { GradientButton } from '@/app/components/button/gradient-button'

export default function ClearMindTierList() {
  return (
    <div className="flex flex-col gap-[10px]">
      <div>
        출처:{' '}
        <a href="https://arca.live/b/resonance/130448825" target="_blank">
          <GradientButton className="p-[4px] rounded inline-flex items-center gap-[4px]">
            [원문 링크]
          </GradientButton>
        </a>
      </div>

      <div className="text-[30px] ff-dh">명경지수 티어 리스트</div>
      <Link
        target="_blank"
        href="https://res.cloudinary.com/dqihpypxi/image/upload/v1741479590/resonance/clear-mind_xfnf6b.webp"
      >
        <img
          className="mx-auto"
          src="https://res.cloudinary.com/dqihpypxi/image/upload/v1741479590/resonance/clear-mind_xfnf6b.webp"
        />
      </Link>
    </div>
  )
}

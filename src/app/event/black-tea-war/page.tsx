'use client'

import Link from 'next/link'
import { GradientButton } from '@/app/components/button/gradient-button'

export default function EventBlackTeaWarPage() {
  return (
    <div>
      <GradientButton className="p-[4px] rounded shadow-2xl">
        <Link href="https://arca.live/b/resonance/130695704" target="_blank">
          홍차전쟁 관련 공략 페이지 바로가기
        </Link>
      </GradientButton>
    </div>
  )
}

'use client'

import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function MainHeaderBar() {
  const router = useRouter()
  return (
    <Link href="https://arca.live/b/resonance">
      <div className="flex items-center text-white gap-[10px] cursor-pointer">
        <img className="w-[30px] rounded-full border-[2px]" src="/img/arca.svg" />
        레조넌스 채널로 이동
      </div>
    </Link>
  )
}

'use client'

import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function MainHeaderBar() {
  const router = useRouter()
  return (
    <div className="flex flex-wrap gap-[10px]">
      <Link href="https://arca.live/b/resonance" target="_blank">
        <div className="flex items-center text-white gap-[10px] cursor-pointer">
          <img className="w-[30px] rounded-full border-[2px]" src="/img/arca.svg" />
          레조넌스 채널
        </div>
      </Link>

      <Link href="https://gall.dcinside.com/mgallery/board/lists/?id=reso" target="_blank">
        <div className="flex items-center text-white gap-[10px] cursor-pointer">
          <img className="w-[30px] rounded-full border-[2px]" src="/img/dc.ico" />
          갤러리
        </div>
      </Link>

      <Link href="https://game.naver.com/lounge/RES/home" target="_blank">
        <div className="flex items-center text-white gap-[10px] cursor-pointer">
          <img
            className="w-[30px] rounded-full border-[2px] bg-white"
            src="/img/naver-lounge.svg"
          />
          네이버 라운지
        </div>
      </Link>
    </div>
  )
}

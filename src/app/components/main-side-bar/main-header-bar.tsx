'use client'

import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Tooltip } from '@material-tailwind/react'
import VisitCounter from '@/app/components/ga/visit-counter'

export default function MainHeaderBar() {
  const router = useRouter()
  return (
    <div className="flex flex-wrap gap-[10px] ff-dh text-[22px] items-center">
      <Tooltip content="아카라이브 채널">
        <Link href="https://arca.live/b/resonance" target="_blank">
          <div className="flex items-center gap-[10px] cursor-pointer">
            <img
              className="w-[30px] rounded-full border-[2px]"
              src="https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/c7/70/a9/c770a97a-bb6e-306b-3194-5f5cdea0eb16/AppIcon-0-0-1x_U007epad-0-1-85-220.png/434x0w.webp"
            />
          </div>
        </Link>
      </Tooltip>

      <Tooltip content="갤러리">
        <Link href="https://gall.dcinside.com/mgallery/board/lists/?id=reso" target="_blank">
          <div className="flex items-center text-white gap-[10px] cursor-pointer">
            <img className="w-[30px] rounded-full border-[2px]" src="/img/dc.ico" />
          </div>
        </Link>
      </Tooltip>

      <Tooltip content="네이버 라운지">
        <Link href="https://game.naver.com/lounge/RES/home" target="_blank">
          <div className="flex items-center text-white gap-[10px] cursor-pointer">
            <img
              className="w-[30px] rounded-full border-[2px] bg-white"
              src="/img/naver-lounge.svg"
            />
          </div>
        </Link>
      </Tooltip>

      <Tooltip content="Gamerch 위키 - 일본">
        <Link href="https://gamerch.com/resonance/" target="_blank">
          <div className="flex items-center text-white gap-[10px] cursor-pointer">
            <img
              className="w-[30px] rounded-full border-[2px] bg-white"
              src="https://cdn.gamerch.com/s3-assets/images/favicon/64.png"
            />
          </div>
        </Link>
      </Tooltip>

      <Tooltip content="빌리빌리 위키 - 중국">
        <Link href="https://wiki.biligame.com/resonance" target="_blank">
          <div className="flex items-center text-white gap-[10px] cursor-pointer">
            <img
              className="w-[30px] rounded-full border-[2px] bg-white"
              src="https://img.icons8.com/?size=512&id=5E24fZ9ORelo&format=png"
            />
          </div>
        </Link>
      </Tooltip>

      <Tooltip content="Gamekee 위키 - 대만">
        <Link href="https://www.gamekee.com/lsnsm/" target="_blank">
          <div className="flex items-center text-white gap-[10px] cursor-pointer">
            <img
              className="w-[30px] rounded-full border-[2px] bg-white"
              src="https://www.gamekee.com/favicon.ico"
            />
          </div>
        </Link>
      </Tooltip>

      <Tooltip content="실시간 시세 정보">
        <Link href="https://res-price.mephistopheles.moe/" target="_blank">
          <div className="flex items-center cursor-pointer bg-white text-blue-gray-800 p-[4px] pb-[2px] rounded shadow-md">
            실시간 시세
          </div>
        </Link>
      </Tooltip>
    </div>
  )
}

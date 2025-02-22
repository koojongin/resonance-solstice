'use client'

import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Tooltip } from '@material-tailwind/react'

export default function MainHeaderBar() {
  const router = useRouter()
  return (
    <div className="flex flex-wrap gap-[10px] ff-dh text-[22px]">
      <Tooltip content="아카라이브 채널">
        <Link href="https://arca.live/b/resonance" target="_blank">
          <div className="flex items-center text-white gap-[10px] cursor-pointer">
            <img className="w-[30px] rounded-full border-[2px]" src="/img/arca.svg" />
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
              src="https://i.namu.wiki/i/V2mYST9t0Sb52SO7OPYF-SI_hLf_CRamXIo47K3Pw1NXU0uMdzP93d0COsHskgoOqfBBemNHNpgPW5Uw-xZjT8YJMYcZ3SQ1SXeMUl9OF1QAT890FpQdIB76mAw_-iTJNYkrGU41joxWVhnkzvFKpw.webp"
            />
          </div>
        </Link>
      </Tooltip>

      <Tooltip content="빌리빌리 위키 - 중국">
        <Link href="https://wiki.biligame.com/resonance" target="_blank">
          <div className="flex items-center text-white gap-[10px] cursor-pointer">
            <img
              className="w-[30px] rounded-full border-[2px] bg-white"
              src="https://i.namu.wiki/i/Htm3agI9gCwVit30zTszHsEBK1ZRxVIeNPG5otPB3ocbEI5yHjWjfnVTNZWwBTRhlG8CUPJZdYEdkyDRlN-ktBrfbW5lRv6wLrGUHQYHxVJOtvoQjHnTRTRiDgPSSi0qd_jRYZQOjq-X-4Gwixb1OA.svg"
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

      <Tooltip content="버그 제보 / 기능 제안을 위한 소통창구입니다.">
        <Link href="https://discord.gg/VxkcjVFDMY" target="_blank" className="ml-auto">
          <div className="flex items-center text-white gap-[10px] cursor-pointer">
            <img
              className="w-[30px] rounded-full border-[2px] bg-white"
              src="https://i.namu.wiki/i/rZ-_509rvXhSN24KJfCJLNwrKO9gJDAVJuP-08exwIJeg-_G7-Qdbt1evIagUPpr06239o_FrTWBfrjDZG8kZSGvAaLlgcJUfWecVHPWXm3oFNtQz_jdLtNuyedcVyI10haPSuCPGlgLiXEsFciwxA.svg"
            />
          </div>
        </Link>
      </Tooltip>
    </div>
  )
}

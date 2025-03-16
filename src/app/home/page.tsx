'use client'

import React from 'react'
import { copyToClipboard } from '@/services/utils/copy-clipboard'
import createKey from '@/services/key-generator'
import { GradientButton } from '@/app/components/button/gradient-button'
import { OfficialUpdatePostBox } from '@/app/home/official-update-post-box'
import { CommentBox } from '@/app/components/comment/comment-box'

export default function HomePage() {
  const coupons = [
    {
      period: '상시',
      code: 'RESONANCE',
    },
    {
      period: '상시',
      code: 'CBCRR23',
    },
    {
      period: '2월 19일 00:00 ~ 3월 4일 00:00',
      code: 'RSNUM1',
    },
    {
      period: '2월 26일 00:00 ~ 3월 1일 00:00',
      code: 'MYRAIL',
      isExpired: 1,
    },
    {
      period: '2월 27일 00:00 ~ 3월 2일 00:00',
      code: 'GOTOMYRAIL',
      isExpired: 1,
    },
    {
      period: '3월 3일 00:00 ~ 3월 5일 23:59',
      code: 'RSCONTENT',
    },
    {
      period: '알수없음',
      code: 'RS0306',
    },
  ].reverse()
  return (
    <div className="flex flex-col gap-[10px]">
      <img src="https://imgproxy.shelter.id/sig/Z3M6Ly9zaGVsdGVyLW1lZGlhL3UvbmdBNTZkN1VqWFpnQVhDQXd3WlBack5SQmZKMy9pbWFnZXMvMTcyNzQ5MTI5NDM4MF81NDM2M2ExYy0zODkxLTQ0MGQtOWVlNS0zZTlhMjgxNzUyMzEuanBn" />

      <div className="border border-gray-400 p-[10px] rounded">
        <div className="text-[20px]">쿠폰</div>
        <hr className="my-[8px] border-gray-400" />
        <div className="inline-flex flex-col gap-[4px] text-[18px]">
          {coupons.map((coupon) => {
            return (
              <div
                key={createKey()}
                className={`${coupon.isExpired && 'line-through'} flex items-center gap-[4px] group`}
              >
                <div>[{coupon.period}]</div>
                <GradientButton
                  key={createKey()}
                  className="inline-flex items-center px-[4px] rounded"
                  onClick={async () => {
                    await copyToClipboard(coupon.code)
                    alert('복사되었습니다.')
                  }}
                >
                  <div className="group-hover:underline">{coupon.code}</div>
                  <img src="/img/clipboard.svg" className="w-[24px] cursor-pointer" />
                </GradientButton>
              </div>
            )
          })}
        </div>
      </div>

      <div className="border border-gray-400 p-[10px] rounded">
        <div className="text-[20px]">레조넌스 외부 참고자료 링크 모음</div>
        <hr className="my-[8px] border-gray-400" />
        <div className="flex flex-col gap-[4px] text-[18px] ff-dh text-blue-gray-900">
          <a
            href="https://gamerch.com/resonance"
            target="_blank"
            className="flex items-center hover:underline hover:text-blue-gray-700"
          >
            Gamerch
            <img src="/img/icon_link.svg" className="w-[16px]" />
          </a>
          <a
            href="https://wiki.biligame.com/resonance/%E4%B9%98%E5%91%98%E4%B8%80%E8%A7%88"
            target="_blank"
            className="flex items-center hover:underline hover:text-blue-gray-700"
          >
            Bili wiki
            <img src="/img/icon_link.svg" className="w-[16px]" />
          </a>
          <a
            href="https://discord.com/invite/mqmCCnPnew"
            target="_blank"
            className="flex items-center hover:underline hover:text-blue-gray-700"
          >
            일본 디스코드 초대 링크
            <img src="/img/icon_link.svg" className="w-[16px]" />
          </a>

          <a
            href="https://www.gamekee.com/lsnsm/"
            target="_blank"
            className="flex items-center hover:underline hover:text-blue-gray-700"
          >
            Gamekee
            <img src="/img/icon_link.svg" className="w-[16px]" />
          </a>
        </div>
      </div>

      {/* <div className="border border-gray-400 p-[10px] rounded"> */}
      {/*   <OfficialUpdatePostBox /> */}
      {/* </div> */}

      <div className="mt-[50px]">
        <CommentBox
          data={{
            target: `home`,
            refId: '123456789012345678901234' as string,
          }}
        />
      </div>
    </div>
  )
}

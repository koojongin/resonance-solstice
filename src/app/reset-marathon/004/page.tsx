import Link from 'next/link'
import React from 'react'
import { GradientButton } from '@/app/components/button/gradient-button'
import { CommentBox } from '@/app/components/comment/comment-box'
import { CommentTarget } from '@/const/api/comment-target'

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
        href="https://imgproxy.shelter.id/sig/Z3M6Ly9zaGVsdGVyLW1lZGlhL3UvYkI1OHJHc2Z1SU0wVEQ2SUtKNDNFTTM3Ukt4MS9pbWFnZXMvMTc0MTg2ODIxNjMyM18zYWYxZjUxZC0xY2EzLTQ5MmItODJlYy01ZmY5MGZhZmE2NGMud2VicA=="
      >
        <img
          className="mx-auto"
          src="https://imgproxy.shelter.id/sig/Z3M6Ly9zaGVsdGVyLW1lZGlhL3UvYkI1OHJHc2Z1SU0wVEQ2SUtKNDNFTTM3Ukt4MS9pbWFnZXMvMTc0MTg2ODIxNjMyM18zYWYxZjUxZC0xY2EzLTQ5MmItODJlYy01ZmY5MGZhZmE2NGMud2VicA=="
        />
      </Link>

      <div className="mt-[50px]">
        <CommentBox
          data={{
            target: CommentTarget.ResetMaraClearMind,
            refId: '123456789012345678901234' as string,
          }}
        />
      </div>
    </div>
  )
}

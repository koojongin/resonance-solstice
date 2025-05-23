'use client'

import { GradientHeaderDiv } from '@/app/components/div/gradient-header-div'
import { CommentBox } from '@/app/components/comment/comment-box'
import React from 'react'
import { CommentTarget } from '@/const/api/comment-target'

export default function EventCheongMyeongChroniclesPage() {
  return (
    <div className="flex flex-col gap-[10px]">
      <GradientHeaderDiv>청명 이문록</GradientHeaderDiv>
      <div>
        <img
          className="w-[400px]"
          src="https://imgproxy.shelter.id/sig/w:798/rt:fill/Z3M6Ly9zaGVsdGVyLW1lZGlhL3UvYkI1OHJHc2Z1SU0wVEQ2SUtKNDNFTTM3Ukt4MS9pbWFnZXMvMTc0MjEyNTY5MzQ4NF84OTRlM2ZmZi02MzU0LTQ2MWMtYTBiMS0yMTE5Zjk5MWUwNWEucG5n"
        />
      </div>
      <div className="mt-[50px]">
        <CommentBox
          data={{
            target: CommentTarget.EventCMChronicles,
            refId: '123456789012345678901234' as string,
          }}
        />
      </div>
    </div>
  )
}

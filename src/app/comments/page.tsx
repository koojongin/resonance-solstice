import { CommentTarget } from '@/const/api/comment-target'
import { CommentBox } from '@/app/components/comment/comment-box'
import React from 'react'

export default function AllCommentsPage() {
  return (
    <div>
      <CommentBox
        onShowDestination
        data={{
          read: {},
          write: {
            target: `${CommentTarget.Free}`,
            refId: '123456789012345678901234' as string,
          },
        }}
      />
    </div>
  )
}

import React, { useEffect, useState } from 'react'
import { NaverVideo } from '@/app/video/naver.video.interface'
import { NaverFeed, NaverFeedResponse } from '@/services/naver/naver.post.interface'
import { fetchGet } from '@/services/fetch.api'

export function OfficialUpdatePostBox() {
  const url = `https://comm-api.game.naver.com/nng_main/v1/community/lounge/RES/feed?boardId=15&buffFilteringYN=N&limit=25&offset=0&order=NEW`
  const [loading, setLoading] = useState(true)
  const [feeds, setFeeds] = useState<NaverFeed[]>([])

  const fetchFeeds = async () => {
    try {
      const data: NaverFeedResponse = await fetchGet(url)
      const { content } = data

      setFeeds(content.feeds.map((feedWrap) => feedWrap.feed) || [])
    } catch (error) {
      console.log('Failed to fetch videos:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchFeeds()
  }, [])

  return (
    <>
      <div className="text-[20px]">공식 업데이트</div>
      <hr className="my-[8px] border-gray-400" />
      <div className="flex flex-col gap-[4px] text-[18px] ff-dh text-blue-gray-900">
        {feeds.map((feed) => {
          return <div key={feed.feedId}>{feed.title}</div>
        })}
      </div>
    </>
  )
}

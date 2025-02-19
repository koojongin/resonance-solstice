'use client'

import { useEffect, useState } from 'react'
import { fetchGet } from '@/services/fetch.api'
import { NaverVideo } from '@/app/video/naver.video.interface'
import { format } from 'date-fns'
import { formatSecondsToTime } from '@/services/utils/date.format'

export default function VideoPage() {
  const [videos, setVideos] = useState<NaverVideo[]>([])
  const [loading, setLoading] = useState(true)
  const fetchVideos = async () => {
    const limit = 20
    try {
      const data = await fetchGet(
        `https://comm-api.game.naver.com/nng_main/v1/lounge/RES/tab-videos?official=true&limit=${limit}&offset=0`,
      )
      const { content } = data
      setVideos(content.videos || [])
    } catch (error) {
      console.error('Failed to fetch videos:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchVideos()
  }, [])

  return (
    <div>
      {loading && (
        <div className="text-[30px] flex gap-[4px] items-center justify-center min-h-[300px] border rounded">
          <i className="fa-solid fa-spinner" />
          로딩중...
        </div>
      )}
      <div className="flex flex-wrap gap-[20px]">
        {videos.map((video) => (
          <NaverVideoCard video={video} key={video.loungeVideoId} />
        ))}
      </div>
    </div>
  )
}

function NaverVideoCard({ video }: { video: NaverVideo }) {
  const isYoutube = video.type === 'FEED_SNIPPET_YOUTUBE'
  return (
    <a href={video.url} target="_blank">
      <div className="flex flex-col w-[300px] group">
        <div className="rounded overflow-hidden relative cursor-pointer">
          <div
            className="w-full h-[170px] bg-cover bg-center"
            style={{
              backgroundImage: `url(${video.thumbnailImageUrl})`,
            }}
          />
          <div className="w-full absolute bottom-0 left-0 z-10 p-[10px] flex justify-between items-center">
            <i className="fa-regular fa-circle-play text-white text-[24px] shadow-xl shadow-white rounded-full" />
            <div className="bg-gray-900/80 px-[4px] py-[2px] rounded text-white">
              {formatSecondsToTime(video.duration)}
            </div>
          </div>
        </div>
        <div className="p-[10px] flex flex-col gap-[4px]">
          <a href={video.url} target="_blank" rel="noopener noreferrer" aria-label={video.title}>
            <div
              className="font-bold group-hover:underline"
              dangerouslySetInnerHTML={{ __html: video.title }}
            />
          </a>
          {!isYoutube && (
            <div className="flex items-center text-[12px] text-gray-800 gap-[2px]">
              <i className="fa-solid fa-circle-play text-gray-600" />
              <div>{video.playCount}</div>
              <div>·</div>
              <div className="">{format(video.createdDate, 'yyyy.MM.dd')}</div>
            </div>
          )}
          {isYoutube && (
            <div className="text-[12px] flex items-center gap-[4px]">
              <i className="fa-brands fa-youtube text-red-500 text-[16px]" />
              {video.channelName}
            </div>
          )}
        </div>
      </div>
    </a>
  )
}

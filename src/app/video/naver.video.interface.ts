export interface NaverVideoResponse {
  code: number // 200
  message: string | null | undefined
  content: NaverVideoContent
}

export interface NaverVideoContent {
  offset: number // 0
  count: number // 8
  videos: NaverVideo
}

export interface NaverVideo {
  loungeVideoId: number // 4271219
  originalLoungeId: string // 'RES'
  loungeId: string // 'RES'
  type: string | 'FEED_VIDEO' | 'FEED_SNIPPET_YOUTUBE'
  official: boolean // true
  clipNo: string | number | null
  feedId: number // 5629753
  feedContentId: number // 10
  title: string // '&#39;홍차 전쟁&#39; 이벤트 PV 공개'
  url: string // 'https://game.naver.com/lounge/RES/board/detail/5629753'
  thumbnailImageUrl: string // 'https://nng-phinf.pstatic.net/MjAyNTAyMTVfMjE2/MDAxNzM5NjIyODMwMTA0.QeGt-oZSohRr72DNFuPaFGEue3Mdh3WeqkROTnDz2_Yg.sYqdBlW6fJJgQz-Pr9wwUJejDc7-LGwlh8w_txS_ZLUg.PNG/screenshot-20250215-203341.png'
  animatedThumbnailImageUrl: string | null
  videoId: string // 'A8DB3CAA8C1D73F2A265675B389FA5C322ED'
  duration: number // 27
  playCount: boolean // umber // 185
  playable: boolean // true
  channelName: string | null
  nickName: string // 'GM BOㅡX'
  createdDate: string // '2025-02-16T10:00:42'
}

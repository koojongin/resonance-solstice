export interface NaverFeedResponse {
  code: number // 200
  message: string | null | undefined
  content: NaverFeedContent
}

export interface NaverFeedContent {
  offset: number // 0
  count: number // 8
  totalCount: number // 7
  feeds: NaverFeedWrap[]
}

export interface NaverFeedWrap {
  feed: NaverFeed

  user: {
    userIdHash: string // '777ff8c47a8bcd406196c695e959ac7a'
    nickname: string // 'GM BOㅡX'
    profileImageUrl: string // 'https://nng-phinf.pstatic.net/MjAyNDA4MTlfNTQg/MDAxNzI0MDUyMTI4Njgy.Q6t1R2FjQwNj42mHg8s_dpXfKdaqQJf12miBpDusCH8g.pO1wmZSj5GfhmeZeq6KZbvnDWir8yQQsB6C-oBk7e0Ag.PNG/GM_-_BO-X.png'
    userRoleCode: string // 'game_manager'
    badge: {
      imageUrl: string // 'https://ssl.pstatic.net/static/nng/glive/icon/game_manager.png'
    }
    title: {
      name: string // 'Ujoy Games'
      color: string // '#FF6A00'
    }
    verifiedMark: boolean // false
    level: number // 10
  }
  comment: {
    totalCount: number // 14
    commentCount: number // 7
    replyCount: number // 7
    exposeCount: number // 14
  }
  clientBuffStatus: {
    vote: number // 0
  }
  feedLink: {
    pc: string // 'https://game.naver.com/lounge/RES/board/detail/5678586'
    mobile: string // 'https://m.game.naver.com/lounge/RES/board/detail/5678586'
  }
  lounge: {
    loungeName: string // '레조넌스'
    loungeEnglishName: string // 'RES'
    logoImageSquareUrl: string // 'https://nng-phinf.pstatic.net/MjAyNDA4MTZfMTI1/MDAxNzIzNzgwMzcwNTk2.Ij4MLr3zQO4O5KvhkI9iXGqsBIWK42tHApE1lxfSpVwg.Yj_hhb9joCOg2IP7MUZ434rwQogy7Vmg-uEnYk3JePYg.PNG/%EB%A0%88%EC%A1%B0%EB%84%8C%EC%8A%A4-300X300.png'
  }
  board: {
    boardId: number // 15
    boardName: string // '🔔점검&업데이트'
    exposure: boolean // true
    type: string // 'COMMON'
  }
  buff: {
    buffCount: number // 3
    nerfCount: number // 0
    vote: number // 0
  }
  // score: 0.0
  readCount: number // 1117
  feedId: number // 5678586
}

export interface NaverFeed {
  feedId: any // 5678586
  originalLoungeId: any // 'RES'
  loungeId: any // 'RES'
  gameId: any // 'GM_NCR_015029'
  contentId: any // 'nng-RES-5678586'
  title: any // '2월 26일 리소스 업데이트 안내(완료)'
  iconTypes: any // ['PHOTO']
  feedType: any // 'FEED'
  buff: any // 3
  nerf: any // 0
  repImageUrl: any // 'https://nng-phinf.pstatic.net/MjAyNTAyMjVfMjgw/MDAxNzQwNDY1NzI0MTUy.IJv3fqOKT5QE_HFJjO9GBYOjU17hR1H48K7gAXGe5Kkg.Him4zR3b5Vai8Obz824OFDIWnHhvrx5e1_iJsLgFCscg.PNG/%EB%A7%88%EC%9D%B4%EB%A0%88%EC%9D%BC.png'
  attachCount: any // 12
  attachIconType: any // 'PHOTO'
  createdDate: any // '20250226113005'
  updatedDate: any // '20250226171607'
  // eslint-disable-next-line no-irregular-whitespace
  contents: any // 내용
  bodyExposureYN: any // 'N'
  readOnlyJoinUser: any // 'N'
  allowComment: any // 'Y'
  deviceType: any // 'PC'
  menuId: any // 12
  boardType: any // 'BOARD'
  pinned: any // true
}

export const COMMENT_TARGET_DICT: {
  [key: string]: { name: string; path: string; isExistRefId?: boolean }
} = {
  'reset-marathon-clear-mind': { name: '명경지수', path: '' },
  'reset-marathon-equipment': { name: '장비 티어', path: '' },
  'reset-marathon-002': { name: '승무원 티어 02', path: '' },
  'train-power': { name: '열차 전력 업그레이드 요구사항', path: '' },
  'train-module-power-supply': { name: '열차 모듈 전원 공급 업그레이드 요구사항', path: '' },
  'archive-': { name: '용어집', path: '/archives' },
  'character-': { name: '승무원 명부', path: '/characters' },
  'equipment-': { name: '장비 도감', path: '/equipments' },
  'material-': { name: '재료 도감', path: '/materials' },
  'monster-': { name: '몬스터 도감', path: '/monsters' },
  'deck-detail': { name: '덱 정보', path: '/rd/user/detail', isExistRefId: true },
  'event-cheongmyeong-chronicles': {
    name: '이벤트 - 청명 이문록',
    path: '/event/cheongmyeong-chronicles',
  },
  'event-black-tea-war': { name: '이벤트 - 홍차 전쟁', path: '/event/black-tea-war' },
  'event-start-dash': { name: '이벤트 - 출발 체크인', path: '/event/start-dash' },
  'event-summer-island': { name: '이벤트 - 서머 아일랜드', path: '/event/summer-island' },
  home: { name: '메인 페이지', path: '/home' },
  free: { name: '자유', path: '' },
}

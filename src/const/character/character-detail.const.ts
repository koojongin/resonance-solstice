import { LYCAGIA } from '@/const/character/character.const'

export interface CharacterDetail {
  SKILLS: string[]
  RESONANCES: { [key: string]: string }
  RESONANCE_UPGRADE_MATERIALS: { [key: string]: { name: string; amount: number }[] }
  AWAKENING: { [key: string]: string }
}

const RESONANCE_UPGRADE_MATERIALS_4 = {
  1: [
    {
      name: '디지털화 사고',
      amount: 20,
    },
    {
      name: '원시적 사고',
      amount: 8,
    },
    {
      name: '철도연맹 코인',
      amount: 20000,
    },
  ],
  2: [
    {
      name: '디지털화 사고',
      amount: 40,
    },
    {
      name: '원시적 사고',
      amount: 16,
    },
    {
      name: '철도연맹 코인',
      amount: 50000,
    },
  ],
  3: [
    {
      name: '디지털화 사고',
      amount: 80,
    },
    {
      name: '원시적 사고',
      amount: 32,
    },
    {
      name: '철도연맹 코인',
      amount: 100000,
    },
  ],
  4: [
    {
      name: '디지털화 사고',
      amount: 160,
    },
    {
      name: '원시적 사고',
      amount: 64,
    },
    {
      name: '철도연맹 코인',
      amount: 200000,
    },
  ],
}
const RESONANCE_UPGRADE_MATERIALS_5 = {
  ...RESONANCE_UPGRADE_MATERIALS_4,
  5: [
    {
      name: '디지털화 사고',
      amount: 320,
    },
    {
      name: '원시적 사고',
      amount: 128,
    },
    {
      name: '철도연맹 코인',
      amount: 500000,
    },
    {
      name: '모노리스 조각',
      amount: 42,
    },
  ],
}

export const CHARACTER_DETAIL: {
  [key: string]: CharacterDetail | { [key: string]: any }
} = {
  RAZIEL_THE_REMINISCE: {},
  LYCAGIA: {
    SKILLS: ['비스코스 폭탄', '환각 가스', '울프팩'],
    RESONANCES: {
      1: '전술 커버',
      2: '신경교세포 확산',
      3: '생기',
      4: '전술적 그림자',
      5: '삼각형 형성',
    },
    RESONANCE_UPGRADE_MATERIALS: RESONANCE_UPGRADE_MATERIALS_5,
    AWAKENING: {
      1: '반응이 심화되다',
      2: '폭발 충전',
      3: '투지',
      4: '섀도우 울프 가드',
      5: '잡지 수정',
    },
  },
  RAZIEL: {},
  SHIRE: {},
  PELOTA: {},
  DOROTHY: {
    SKILLS: ['조준 폭탄', 'Bingo!', '대폭주'],
    RESONANCES: {
      1: '선물!',
      2: '서프라이즈!',
      3: '생기',
      4: '스텔스 폭탄',
      5: '폭탄아, 안녕!',
    },
    RESONANCE_UPGRADE_MATERIALS: RESONANCE_UPGRADE_MATERIALS_5,
    AWAKENING: {
      1: '폭발객',
      2: '다발장전',
      3: '투지',
      4: '연쇄폭발 반응',
      5: '폭발의 예술',
    },
  },
  JOSHUA: {
    SKILLS: ['우매', '음에너지', '지식', '검은 물결', '예고', '계시', '다크 아트'],
    RESONANCES: {
      1: '서지',
      2: '추구',
      3: '생기',
      4: '징수',
      5: '치열',
    },
    RESONANCE_UPGRADE_MATERIALS: RESONANCE_UPGRADE_MATERIALS_5,
    AWAKENING: {
      1: '영감',
      2: '역류',
      3: '투지',
      4: '신생',
      5: '유혹',
    },
  },
  SOMMER: {
    SKILLS: ['피의 이빨', '피의 함성', '다크 아트', '피의 잠식', '핏빛 왕관', '음에너지'],
    RESONANCES: {
      1: '가시의 서약',
      2: '저력',
      3: '생기',
      4: '감응 - 소마',
      5: '혈전',
    },
    RESONANCE_UPGRADE_MATERIALS: RESONANCE_UPGRADE_MATERIALS_5,
    AWAKENING: {
      1: '철혈',
      2: '하트킹',
      3: '투지',
      4: '혈맹',
      5: '혈족',
    },
  },
  USHANA: {},
  SUMMERSHIZURU: {},
  NICOLA: {
    SKILLS: ['초음속', '공습', '화력전개'],
    RESONANCES: {
      1: '질풍 - 니콜라',
      2: '용량 확장 - 니콜라',
      3: '생기',
      4: '신속 - 니콜라',
      5: '축전',
    },
    RESONANCE_UPGRADE_MATERIALS: RESONANCE_UPGRADE_MATERIALS_5,
    AWAKENING: {
      1: '초전도 - 니콜라',
      2: '쌍권총',
      3: '투지',
      4: '과부하',
      5: '고독한 늑대',
    },
  },
  DUSTIN: {
    SKILLS: ['경칩', '곡우', '흐르는 불'],
    RESONANCE_UPGRADE_MATERIALS: RESONANCE_UPGRADE_MATERIALS_5,
    RESONANCES: {
      1: '뇌명',
      2: '청명',
      3: '생기',
      4: '청정',
      5: '불타는 마음',
    },
    AWAKENING: {
      1: '통찰',
      2: '집법',
      3: '투지',
      4: '망종',
      5: '순환 - 더스틴',
    },
  },
  ANFIYA: {
    SKILLS: [
      '의태',
      '개조: 더스트 리자드',
      '개조: 암흑의 매머드',
      '개조: 빙하 본드래곤',
      '생과 사의 마법함',
      '허와 실의 관',
    ],
    RESONANCE_UPGRADE_MATERIALS: RESONANCE_UPGRADE_MATERIALS_5,
    RESONANCES: {
      1: '소환곡',
      2: '감응 - 안피아',
      3: '생기',
      4: '밀물',
      5: '탐욕',
    },
    AWAKENING: {
      1: '해체',
      2: '무실',
      3: '투지',
      4: '허상',
      5: '독단 행동',
    },
  },
  HAYABUSA: {
    SKILLS: ['변화무상', '개안', '무상-전륜'],
    RESONANCE_UPGRADE_MATERIALS: RESONANCE_UPGRADE_MATERIALS_5,
    RESONANCES: {
      1: '무영 - 하야부사',
      2: '무형',
      3: '생기',
      4: '호시탐탐 - 하야부사',
      5: '심안',
    },
    AWAKENING: {
      1: '암살술',
      2: '소소한 마음',
      3: '투지',
      4: '중생팔고',
      5: '샤이닝',
    },
  },
  JALHAY: {},
  ITHOS: {},
  IKUMA: {},
  LISSANDRA: {
    SKILLS: ['모색', '무궁무진', '끝없는 욕망', '다크 아트', '탐사', '유성'],
    RESONANCE_UPGRADE_MATERIALS: RESONANCE_UPGRADE_MATERIALS_5,
    RESONANCES: {
      1: '수혈',
      2: '기백',
      3: '생기',
      4: '냉혈',
      5: '선택 - 리산드라',
    },
    AWAKENING: {
      1: '해결사',
      2: '피투성이',
      3: '투지',
      4: '추적',
      5: '혈제',
    },
  },
  MUMEI: {},
  PALADI: {},
  CONNOR: {
    SKILLS: [
      '진형 유지',
      '진형 유지II',
      '사방수호',
      '사방수호II',
      '대지 붕괴',
      '진동파',
      '콜로서스 군진',
      '콜로서스 군진II',
      '신성 돌격',
    ],
    RESONANCE_UPGRADE_MATERIALS: RESONANCE_UPGRADE_MATERIALS_5,
    RESONANCES: {
      1: '고수',
      2: '저력',
      3: '생기',
      4: '에너지 회수',
      5: '배수진',
    },
    AWAKENING: {
      1: '전투 타임',
      2: '베니싱 필드',
      3: '투지',
      4: '붕성',
      5: '여파',
    },
  },
  VERLAINE: {
    SKILLS: [
      '스타 아크',
      '드림 파인더',
      '드림 메이커',
      '공포의 밤',
      '진혼가',
      '마력샘',
      '별의 꿈',
      '드림 이터',
    ],
    RESONANCE_UPGRADE_MATERIALS: RESONANCE_UPGRADE_MATERIALS_5,
    RESONANCES: {
      1: '성맥',
      2: '몽유',
      3: '생기',
      4: '꿈의 여행자',
      5: '기원의 꿈',
    },
    AWAKENING: {
      1: '예지몽',
      2: '샘물-베를린',
      3: '투지',
      4: '잠꼬대',
      5: '단꿈',
    },
  },
  CHARLOTTE: {
    SKILLS: ['재앙의 달', '적막의 달', '지옥의 달'],
    RESONANCES: {
      1: '감응 - 샬롯',
      2: '참월',
      3: '생기',
      4: '완강',
      5: '활성',
    },
    RESONANCE_UPGRADE_MATERIALS: RESONANCE_UPGRADE_MATERIALS_5,
    AWAKENING: {
      1: '여유만만',
      2: '연월',
      3: '투지',
      4: '명월',
      5: '죄월',
    },
  },
  SUEN: {
    SKILLS: ['복음', '음에너지', '다크 아트', '형벌', '정화'],
    RESONANCES: {
      1: '은혜',
      2: '지탱',
      3: '생기',
      4: '망녕',
      5: '일념',
    },
    RESONANCE_UPGRADE_MATERIALS: RESONANCE_UPGRADE_MATERIALS_5,
    AWAKENING: {
      1: '기적',
      2: '무심',
      3: '투지',
      4: '유리',
      5: '집념',
    },
  },
  NAYUTA: {
    SKILLS: ['소실', '셔플', '미스터리', '해체의 번개', '재구축의 힘', '구축의 화염', '정화의 빛'],
    RESONANCES: {
      1: '독심술',
      2: '사기 마술',
      3: '생기',
      4: '감응 - 나유타',
      5: `레비스의 '불가사의'`,
    },
    RESONANCE_UPGRADE_MATERIALS: RESONANCE_UPGRADE_MATERIALS_5,
    AWAKENING: {
      1: '강적',
      2: '아라야',
      3: '투지',
      4: '항하사',
      5: '무량',
    },
  },
  KATAS: {
    SKILLS: [
      '플레임 슬래시',
      '에너지 풍선껌',
      '인터체인-I',
      '인터체인-II',
      '인터체인-III',
      '다크 엑스칼리버',
    ],
    RESONANCES: {
      1: '당분',
      2: '불굴',
      3: '생기',
      4: "레비스의 '생일 선물'",
      5: '잔열',
    },
    RESONANCE_UPGRADE_MATERIALS: RESONANCE_UPGRADE_MATERIALS_5,
    AWAKENING: {
      1: '광전',
      2: '열혈',
      3: '투지',
      4: '마검의 주인',
      5: '격노',
    },
  },
  WENSHENG: {
    SKILLS: ['서막', '파열', '원소핵-얼음', '서리 신성', '급습', '종결'],
    RESONANCES: {
      1: '고정',
      2: '냉정',
      3: '생기',
      4: '개혁',
      5: '톱스핀',
    },
    RESONANCE_UPGRADE_MATERIALS: RESONANCE_UPGRADE_MATERIALS_5,
    AWAKENING: {
      1: '얼음 칼날',
      2: '서리꽃',
      3: '투지',
      4: '혹한',
      5: '얼음장',
    },
  },
  MARGIELA: {
    SKILLS: [
      '섭취',
      '금단의 열매',
      '무한 코어',
      '과일씨',
      '신성',
      '기이한 불꽃 - 마키라',
      '다크 아트',
      '초신성',
    ],
    RESONANCES: {
      1: '신생',
      2: '갈망',
      3: '생기',
      4: '비밀의 샘',
      5: '혈맹',
    },
    RESONANCE_UPGRADE_MATERIALS: RESONANCE_UPGRADE_MATERIALS_5,
    AWAKENING: {
      1: '마녀의 조건',
      2: '다크 아트',
      3: '투지',
      4: '새싹',
      5: '자물쇠',
    },
  },
  ARINA: {
    SKILLS: ['피치', '블랙베리', '애플'],
    RESONANCES: {
      1: '체리 폭탄',
      2: '인연 - 아리나',
      3: '생기',
      4: '레드주스',
      5: '정열의 럼주',
    },
    RESONANCE_UPGRADE_MATERIALS: RESONANCE_UPGRADE_MATERIALS_5,
    AWAKENING: {
      1: '사랑',
      2: '동반',
      3: '투지',
      4: '다크 위스퍼',
      5: '바텐더',
    },
  },
  ILONA: {
    SKILLS: ['조준 저격', '광학 위장술', '저격 모드'],
    RESONANCES: {
      1: '탄도학',
      2: '침묵의 사신',
      3: '생기',
      4: '연속 조준',
      5: '전술 타격',
    },
    RESONANCE_UPGRADE_MATERIALS: RESONANCE_UPGRADE_MATERIALS_5,
    AWAKENING: {
      1: '저격 강화',
      2: '페이탈 껌',
      3: '투지',
      4: '유령 타격',
      5: '정신 집중',
    },
  },
  STELLA: {
    SKILLS: ['TATAKAE', 'TATAKAU!', 'TATAKAU!!', 'TATAKAU!!!', '우아', '셀카', '뭇별', '노래'],
    RESONANCES: {
      1: '활력',
      2: '격앙',
      3: '생기',
      4: '성원',
      5: '수선화',
    },
    RESONANCE_UPGRADE_MATERIALS: RESONANCE_UPGRADE_MATERIALS_5,
    AWAKENING: {
      1: '계략',
      2: '별의 꽃',
      3: '투지',
      4: '전투 의지',
      5: '페어',
    },
  },
  CAROLINE: {
    SKILLS: ['플라잉 플래시', '자석 폭탄', '번개 소용돌이'],
    RESONANCES: {
      1: '자석 감응 - 캐롤라인',
      2: '고압',
      3: '생기',
      4: '감전',
      5: '전력 회수',
    },
    RESONANCE_UPGRADE_MATERIALS: RESONANCE_UPGRADE_MATERIALS_5,
    AWAKENING: {
      1: '추격',
      2: '격전',
      3: '투지',
      4: '뇌운 프로토콜',
      5: '무선 충전',
    },
  },
  TENNIE: {
    SKILLS: ['자석 플라이휠', '동결의 자석별', '빙수 눈사태'],
    RESONANCES: {
      1: '얼음별',
      2: '자석 제어',
      3: '생기',
      4: '성막',
      5: '서리별',
    },
    RESONANCE_UPGRADE_MATERIALS: RESONANCE_UPGRADE_MATERIALS_5,
    AWAKENING: {
      1: '자기 냉각',
      2: '별자리',
      3: '투지',
      4: '소용돌이',
      5: '얼음 조각',
    },
  },
  HEINRICH: {
    SKILLS: ['전술 수류탄', '폭파 지원', '클러스터 폭탄'],
    RESONANCES: {
      1: '돌진 전술',
      2: '안정',
      3: '생기',
      4: '생존법칙',
      5: '폭파 전문가',
    },
    RESONANCE_UPGRADE_MATERIALS: RESONANCE_UPGRADE_MATERIALS_5,
    AWAKENING: {
      1: '비책',
      2: '돌격',
      3: '투지',
      4: '전략적 위협',
      5: '연쇄폭파',
    },
  },
  LIVIA: {
    SKILLS: [
      '충격검',
      '꾀꼬리의 야상곡-레드',
      '꾀꼬리의 야상곡-블루',
      '꾀꼬리의 야상곡-옐로',
      '꾀꼬리의 야상곡-그린',
      '꾀꼬리의 야상곡-퍼플',
      '종막의 원무곡-레드',
      '종막의 원무곡-블루',
      '종막의 원무곡-옐로',
      '종막의 원무곡-그린',
      '종막의 원무곡-퍼플',
      '기이한 불꽃 - 리비아',
    ],
    RESONANCES: {
      1: '공명-옐로',
      2: '선물',
      3: '생기',
      4: '숙련',
      5: '공명-퍼플',
    },
    RESONANCE_UPGRADE_MATERIALS: RESONANCE_UPGRADE_MATERIALS_5,
    AWAKENING: {
      1: '운명 - 리비아',
      2: '사경',
      3: '투지',
      4: '화음의 여운',
      5: '순환 - 리비아',
    },
  },
  DESIREE: {
    SKILLS: ['마그네틱 펄스', '듈리', '공명 펄스'],
    RESONANCES: {
      1: '비상용 활집',
      2: '릴레이',
      3: '생기',
      4: '고성능 배터리',
      5: '고감도 공명',
    },
    RESONANCE_UPGRADE_MATERIALS: RESONANCE_UPGRADE_MATERIALS_5,
    AWAKENING: {
      1: '화살비',
      2: '고탄력 화살',
      3: '투지',
      4: '펄스 공명',
      5: '순환',
    },
  },
  LIN: {
    SKILLS: ['썬더 워킹', '청천벽력', '팬텀 서킷'],
    RESONANCES: {
      1: '무영 - 린',
      2: '그림자 분신',
      3: '생기',
      4: '번개 소환',
      5: '그림자 습격',
    },
    RESONANCE_UPGRADE_MATERIALS: RESONANCE_UPGRADE_MATERIALS_5,
    AWAKENING: {
      1: '검무 - 린',
      2: '그림자 환영',
      3: '투지',
      4: '신기루',
      5: '그림자 캐스팅',
    },
  },
  NABI: {
    SKILLS: ['구름 베기', '바람 막기', '까마귀 깃', '무상-난새 회귀'],
    RESONANCES: {
      1: '감응',
      2: '혼란 분무',
      3: '생기',
      4: '활성 분무',
      5: '난무',
    },
    RESONANCE_UPGRADE_MATERIALS: RESONANCE_UPGRADE_MATERIALS_5,
    AWAKENING: {
      1: '화력 분무',
      2: '비약',
      3: '투지',
      4: '이중혼란',
      5: '썬더 고스트',
    },
  },
  GANYA: {
    SKILLS: ['도끼 투척', '도끼 회수', '부메랑 도끼'],
    RESONANCES: {
      1: '투척',
      2: '진정',
      3: '생기',
      4: '엔지니어',
      5: '포화 공격',
    },
    RESONANCE_UPGRADE_MATERIALS: RESONANCE_UPGRADE_MATERIALS_5,
    AWAKENING: {
      1: '철혈',
      2: '일고작기',
      3: '투지',
      4: '전술 회전',
      5: '올인',
    },
  },
  YEJUE: {
    SKILLS: ['롤링 썬더', '플래시 코로나', '전광석화'],
    RESONANCES: {
      1: '자석 감응 - 예주',
      2: '재난',
      3: '생기',
      4: '날벼락',
      5: '부상',
    },
    RESONANCE_UPGRADE_MATERIALS: RESONANCE_UPGRADE_MATERIALS_5,
    AWAKENING: {
      1: '분출',
      2: '초전도',
      3: '투지',
      4: '뇌명',
      5: '기상학 - 예주',
    },
  },
  AKIRA: {
    SKILLS: ['눈사태', '디스코팡팡', '켈빈 조크'],
    RESONANCES: {
      1: '풍화',
      2: '눈꽃',
      3: '생기',
      4: '결벽증',
      5: '설옥',
    },
    RESONANCE_UPGRADE_MATERIALS: RESONANCE_UPGRADE_MATERIALS_5,
    AWAKENING: {
      1: '확성기',
      2: '급속 동결',
      3: '투지',
      4: '얼음의 칼날',
      5: '기상학',
    },
  },
  ACHIWA: {
    SKILLS: ['배트 타격', '어퍼 스윙', '무명', '원소핵-불', '화염 신성'],
    RESONANCES: {
      1: '깨달음',
      2: '버닝',
      3: '생기',
      4: '요지부동',
      5: '요원의 불길',
    },
    RESONANCE_UPGRADE_MATERIALS: RESONANCE_UPGRADE_MATERIALS_5,
    AWAKENING: {
      1: '횃불',
      2: '집착',
      3: '투지',
      4: '무명업화',
      5: '비우기',
    },
  },
  KALEYA: {
    SKILLS: ['마이크로파', '위치 전송', '유산소 대기'],
    RESONANCES: {
      1: '보급 - 카리야',
      2: '체크 포인트',
      3: '생기',
      4: '증폭',
      5: '프로그 워프',
    },
    RESONANCE_UPGRADE_MATERIALS: RESONANCE_UPGRADE_MATERIALS_5,
    AWAKENING: {
      1: '충분한 연소',
      2: '연소 촉진',
      3: '투지',
      4: '연쇄 산화',
      5: '기상학 - 카리야',
    },
  },
  YER: {
    SKILLS: ['출격', '에너지 절약', '재발동'],
    RESONANCES: {
      1: '신속 - 이엘',
      2: '용량 확장 - 이엘',
      3: '생기',
      4: '구급',
      5: '클러스트',
    },
    RESONANCE_UPGRADE_MATERIALS: RESONANCE_UPGRADE_MATERIALS_5,
    AWAKENING: {
      1: '파이어 컨트롤',
      2: '비상 장치',
      3: '투지',
      4: '벌떼 프로토콜',
      5: '간섭',
    },
  },
  FENIA: {
    SKILLS: ['런닝 썬더', '음에너지', '복주머니', '승리의 아우라'],
    RESONANCES: {
      1: '감응 - 페니아',
      2: '축복',
      3: '생기',
      4: '묘책',
      5: `레비스의 '초개조' - 페니아`,
    },
    RESONANCE_UPGRADE_MATERIALS: RESONANCE_UPGRADE_MATERIALS_5,
    AWAKENING: {
      1: '자신감',
      2: '여명',
      3: '투지',
      4: '신기',
      5: '순환 - 페니아',
    },
  },
  RINA_F: {
    SKILLS: ['흡수', '반전', '방열', '음에너지', '반사', '디펜스 트리거'],
    RESONANCES: {
      1: '기선',
      2: '제압',
      3: '생기',
      4: '인내력',
      5: "레비스의 '초개조' - 리나 본",
    },
    RESONANCE_UPGRADE_MATERIALS: RESONANCE_UPGRADE_MATERIALS_5,
    AWAKENING: {
      1: '에너지 흡수',
      2: '속박',
      3: '투지',
      4: '열기',
      5: '순환 - 리나 본',
    },
  },
  VALENTINE: {
    SKILLS: ['스파크', '원소핵-불', '화염 신성', '기원', '휠윈드', '잿더미'],
    RESONANCES: {
      1: '잔화',
      2: '방화',
      3: '생기',
      4: '인연 - 발렌타인',
      5: '회오리 불',
    },
    RESONANCE_UPGRADE_MATERIALS: RESONANCE_UPGRADE_MATERIALS_5,
    AWAKENING: {
      1: '불씨',
      2: '희망',
      3: '투지',
      4: '협력',
      5: '재연소',
    },
  },
  YOIDUKI: {
    SKILLS: ['단비', '봄꽃', '가을달', '오의-유홍'],
    RESONANCES: {
      1: '풍운',
      2: '가려진 달',
      3: '생기',
      4: '발생',
      5: '화천',
    },
    RESONANCE_UPGRADE_MATERIALS: RESONANCE_UPGRADE_MATERIALS_5,
    AWAKENING: {
      1: '반항',
      2: '화양연화',
      3: '투지',
      4: '결실',
      5: '영상개화',
    },
  },
  AOBA: {
    SKILLS: ['부채술', '유세술', '오의-유풍'],
    RESONANCES: {
      1: '부채바람',
      2: '경운',
      3: '생기',
      4: '회전',
      5: '풍설',
    },
    RESONANCE_UPGRADE_MATERIALS: RESONANCE_UPGRADE_MATERIALS_5,
    AWAKENING: {
      1: '종횡',
      2: '운명 - 아오바',
      3: '투지',
      4: '임기응변',
      5: '깡쯔',
    },
  },
  CECIL: {
    SKILLS: ['회복침', '공격침', '미혹탄', '스모킹 건'],
    RESONANCES: {
      1: '눈 녹은 7번째 밤',
      2: '호박 감귤',
      3: '생기',
      4: '번 애프터 리딩',
      5: '우울한 탑노트',
    },
    RESONANCE_UPGRADE_MATERIALS: RESONANCE_UPGRADE_MATERIALS_5,
    AWAKENING: {
      1: '조향사',
      2: '혼란의 베이스노트',
      3: '투지',
      4: '붉은 노을',
      5: '들새의 만남',
    },
  },
  MHAR: {
    SKILLS: ['전신주 커터', '레일 커터', '버드 헌팅', '비검-철강 절단'],
    RESONANCES: {
      1: '무영',
      2: '참새 귀환',
      3: '생기',
      4: '호시탐탐 - 마루하',
      5: '잔심',
    },
    RESONANCE_UPGRADE_MATERIALS: RESONANCE_UPGRADE_MATERIALS_5,
    AWAKENING: {
      1: '검무',
      2: '서식',
      3: '투지',
      4: '역날',
      5: '플로잉 하트',
    },
  },
  MSGOLD: {},
  YAMAARASHI: {
    SKILLS: ['족제비술', '안개', '오의-풍둔 족제비술'],
    RESONANCES: {
      1: '질풍 - 야마아라시',
      2: '호시탐탐 - 야마아라시',
      3: '생기',
      4: '눈보라',
    },
    RESONANCE_UPGRADE_MATERIALS: RESONANCE_UPGRADE_MATERIALS_4,
    AWAKENING: {
      1: '맹렬',
      2: '산신령',
      3: '투지',
      4: '바람의 칼날',
      5: '맹화',
    },
  },
  EXCALIBUR_BOX: {},
  FLAN: {},
  ELIOT: {
    SKILLS: ['치유탄', '폭염탄', '비전탄'],
    RESONANCES: {
      1: '추격',
      2: '회심연사 - 엘리엇',
      3: '생기',
      4: '선택 - 엘리엇',
    },
    RESONANCE_UPGRADE_MATERIALS: RESONANCE_UPGRADE_MATERIALS_4,
    AWAKENING: {
      1: '비책',
      2: '운수',
      3: '투지',
      4: '탄창 충전',
      5: '팡류게임 마스터',
    },
  },
  HARUKA: {
    SKILLS: ['배드', '디스 이즈 잇', '아윌 비 데어', '유 아 낫 얼론'],
    RESONANCES: {
      1: '댄저러스',
      2: '맨 인 더 미러',
      3: '생기',
      4: '힐 더 월드',
    },
    RESONANCE_UPGRADE_MATERIALS: RESONANCE_UPGRADE_MATERIALS_4,
    AWAKENING: {
      1: '비트 잇',
      2: '그들은 우리를 신경 쓰지 않는다',
      3: '투지',
      4: '위 아 더 월드',
      5: '커쯔',
    },
  },
  ARCANA: {
    SKILLS: ['나비의 축복', '자연의 메아리', '태초의 꿈'],
    RESONANCES: {
      1: '보급 - 아르카나',
      2: '나비 서식',
      3: '생기',
      4: '세례',
    },
    RESONANCE_UPGRADE_MATERIALS: RESONANCE_UPGRADE_MATERIALS_4,
    AWAKENING: {
      1: '천년의 노래',
      2: '샘물-아르카나',
      3: '투지',
      4: '자연의 선물',
      5: '나비의 꿈',
    },
  },
  GALORE: {},
  RACHEL: {},
  TARA: {},
  SHIZURU: {
    SKILLS: ['쇼크탄', '강제 돌파', '강습 지령'],
    RESONANCES: {
      1: '아드레날린 - 시즈루',
      2: '예비탄',
      3: '생기',
      4: '폭탄 장전',
    },
    RESONANCE_UPGRADE_MATERIALS: RESONANCE_UPGRADE_MATERIALS_4,
    AWAKENING: {
      1: '유비무환',
      2: '추가 탄창',
      3: '투지',
      4: '역습',
      5: '지휘관',
    },
  },
  PRIMING: {
    SKILLS: ['폭파 작업', '레드 버튼', '가방 정리'],
    RESONANCES: {
      1: '폭탄 해체 전문가',
      2: '폭탄 마니아',
      3: '생기',
      4: '침착',
    },
    RESONANCE_UPGRADE_MATERIALS: RESONANCE_UPGRADE_MATERIALS_4,
    AWAKENING: {
      1: '정비',
      2: '폭탄 장전',
      3: '투지',
      4: '폭발 지시',
      5: '메아리',
    },
  },
  JULIAN: {
    SKILLS: ['일촉즉발', '돌진', '연막탄', '엄호 사격'],
    RESONANCES: {
      1: '아드레날린 - 줄리안',
      2: '신뢰',
      3: '생기',
      4: '단결',
    },
    RESONANCE_UPGRADE_MATERIALS: RESONANCE_UPGRADE_MATERIALS_4,
    AWAKENING: {
      1: '강습',
      2: '추가 탄창',
      3: '투지',
      4: '독성 가스',
      5: '우정',
    },
  },
  KAREN: {
    SKILLS: ['플럼프탄', '긴급 대응', '쾌속 장전', '플라워탄', '플라워 가든'],
    RESONANCES: {
      1: '아드레날린 - 카렌',
      2: '회심연사 - 카렌',
      3: '생기',
      4: '특효약',
    },
    RESONANCE_UPGRADE_MATERIALS: RESONANCE_UPGRADE_MATERIALS_4,
    AWAKENING: {
      1: '응원',
      2: '추가 탄창',
      3: '투지',
      4: '활력 장전',
      5: '경화 장전',
    },
  },
  JERBOA: {
    SKILLS: ['바람베기', '회천', '역풍', '비검-날쥐 회귀'],
    RESONANCES: {
      1: '선의선',
      2: '후의선',
      3: '생기',
      4: '스파이크 스텝',
    },
    RESONANCE_UPGRADE_MATERIALS: RESONANCE_UPGRADE_MATERIALS_4,
    AWAKENING: {
      1: '검무 - 네즈미',
      2: '바람의 형태',
      3: '투지',
      4: '바람의 그림자',
      5: '앙코르',
    },
  },
  SOLUM: {},
  BOX: {},
}

export interface CharacterDetail {
  SKILLS: string[]
  RESONANCES: { [key: string]: string }
  RESONANCE_UPGRADE_MATERIALS: { [key: string]: { name: string; amount: number }[] }
  AWAKENING: { [key: string]: string }
}

const DEFAULT_RESONANCE_UPGRADE_MATERIALS = {
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
  5: [
    {
      name: '모노리스 조각',
      amount: 42,
    },
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
  ],
}

export const CHARACTER_DETAIL: {
  [key: string]: CharacterDetail | any
} = {
  RAZIEL_THE_REMINISCE: {},
  SHIRE: {},
  PELOTA: {},
  DOROTHY: {},
  JOSHUA: {},
  SOMMER: {},
  USHANA: {},
  SUMMERSHIZURU: {},
  NICOLA: {
    SKILLS: ['초음속', '공습', '화력전개'],
    RESONANCES: {
      1: '질풍',
      2: '용량 확장',
      3: '생기',
      4: '신속',
      5: '축전',
    },
    RESONANCE_UPGRADE_MATERIALS: DEFAULT_RESONANCE_UPGRADE_MATERIALS,
    AWAKENING: {
      1: '초전도',
      2: '쌍권총',
      3: '투지',
      4: '과부하',
      5: '고독한 늑대',
    },
  },
  DUSTIN: {},
  ANFIYA: {},
  HAYABUSA: {},
  JALHAY: {},
  ITHOS: {},
  IKUMA: {},
  LISSANDRA: {},
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
      '콜러서스 군진',
      '콜로서스 군진II',
      '신성 돌격',
    ],
    RESONANCE_UPGRADE_MATERIALS: DEFAULT_RESONANCE_UPGRADE_MATERIALS,
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
    RESONANCE_UPGRADE_MATERIALS: DEFAULT_RESONANCE_UPGRADE_MATERIALS,
    RESONANCES: {
      1: '성맥',
      2: '몽유',
      3: '생기',
      4: '꿈의 여행자',
      5: '기원의 꿈',
    },
    AWAKENING: {
      1: '예지몽',
      2: '샘물',
      3: '투지',
      4: '잠꼬대',
      5: '단꿈',
    },
  },
  CHARLOTTE: {},
  SUEN: {},
  NAYUTA: {
    SKILLS: ['소실', '셔플', '미스터리', '해체의 번개', '재구축의 힘', '구축의 화염', '정화의 빛'],
    RESONANCES: {
      1: '독심술',
      2: '사기 마술',
      3: '생기',
      4: '감응 - 나유타',
      5: `레비스의 '불가사의'`,
    },
    RESONANCE_UPGRADE_MATERIALS: DEFAULT_RESONANCE_UPGRADE_MATERIALS,
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
    RESONANCE_UPGRADE_MATERIALS: DEFAULT_RESONANCE_UPGRADE_MATERIALS,
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
    RESONANCE_UPGRADE_MATERIALS: DEFAULT_RESONANCE_UPGRADE_MATERIALS,
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
      '기이한 불꽃',
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
    RESONANCE_UPGRADE_MATERIALS: DEFAULT_RESONANCE_UPGRADE_MATERIALS,
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
      2: '인연',
      3: '생기',
      4: '레드주스',
      5: '정열의 럼주',
    },
    RESONANCE_UPGRADE_MATERIALS: DEFAULT_RESONANCE_UPGRADE_MATERIALS,
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
    RESONANCE_UPGRADE_MATERIALS: DEFAULT_RESONANCE_UPGRADE_MATERIALS,
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
    RESONANCE_UPGRADE_MATERIALS: DEFAULT_RESONANCE_UPGRADE_MATERIALS,
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
      1: '자석 감응',
      2: '고압',
      3: '생기',
      4: '감전',
      5: '전력 회수',
    },
    RESONANCE_UPGRADE_MATERIALS: DEFAULT_RESONANCE_UPGRADE_MATERIALS,
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
    RESONANCE_UPGRADE_MATERIALS: DEFAULT_RESONANCE_UPGRADE_MATERIALS,
    AWAKENING: {
      1: '자기 냉각',
      2: '별자리',
      3: '투지',
      4: '소용돌이',
      5: '얼음 조각',
    },
  },
  HEINRICH: {},
  LIVIA: {},
  DESIREE: {},
  LIN: {},
  NABI: {},
  GANYA: {},
  YEJUE: {},
  AKIRA: {},
  ACHIWA: {},
  KALEYA: {},
  YER: {},
  FENIA: {
    SKILLS: ['런닝 썬더', '음에너지', '복주머니', '승리의 아우라'],
    RESONANCES: {
      1: '감응 - 페니아',
      2: '축복',
      3: '생기',
      4: '묘책',
      5: `'레비스의 '초개조' - 페니아`,
    },
    RESONANCE_UPGRADE_MATERIALS: DEFAULT_RESONANCE_UPGRADE_MATERIALS,
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
    RESONANCE_UPGRADE_MATERIALS: DEFAULT_RESONANCE_UPGRADE_MATERIALS,
    AWAKENING: {
      1: '에너지 흡수',
      2: '속박',
      3: '투지',
      4: '열기',
      5: '순환 - 리나 본',
    },
  },
  VALENTINE: {},
  YOIDUKI: {},
  AOBA: {},
  CECIL: {},
  MHAR: {},
  MSGOLD: {},
  YAMAARASHI: {},
  EXCALIBUR_BOX: {},
  FLAN: {},
  ELIOT: {},
  HARUKA: {},
  ARCANA: {},
  GALORE: {},
  RACHEL: {},
  TARA: {},
  SHIZURU: {},
  PRIMING: {},
  JULIAN: {},
  KAREN: {},
  JERBOA: {},
  SOLUM: {},
  BOX: {},
}

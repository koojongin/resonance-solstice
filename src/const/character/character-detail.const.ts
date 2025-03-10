import { LYCAGIA } from '@/const/character/character.const'

export interface CharacterDetail {
  SKILLS: string[]
  RESONANCES: { [key: string]: string }
  RESONANCE_UPGRADE_MATERIALS: { [key: string]: { name: string; amount: number }[] }
  AWAKENING: { [key: string]: string }
}

const RARE_RESONANCE_UPGRADE_MATERIALS = {
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
const DEFAULT_RESONANCE_UPGRADE_MATERIALS = {
  ...RARE_RESONANCE_UPGRADE_MATERIALS,
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
    SKILLS: ['끈적 끈적한 폭탄', '환각성 가스', '기계 늑대 무리'],
    RESONANCES: {
      1: '전술 커버',
      2: '신경교세포 확산',
      3: '생기',
      4: '전술적 그림자',
      5: '삼각형 형성',
    },
    RESONANCE_UPGRADE_MATERIALS: DEFAULT_RESONANCE_UPGRADE_MATERIALS,
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
  DOROTHY: {},
  JOSHUA: {
    SKILLS: ['우매', '음에너지', '지식', '검은 물결', '예고', '계시', '다크 아트'],
    RESONANCES: {
      1: '서지',
      2: '추구',
      3: '생기',
      4: '징수',
      5: '치열',
    },
    RESONANCE_UPGRADE_MATERIALS: DEFAULT_RESONANCE_UPGRADE_MATERIALS,
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
    RESONANCE_UPGRADE_MATERIALS: DEFAULT_RESONANCE_UPGRADE_MATERIALS,
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
      1: '질풍',
      2: '용량 확장 - 니콜라',
      3: '생기',
      4: '신속 - 니콜라',
      5: '축전',
    },
    RESONANCE_UPGRADE_MATERIALS: DEFAULT_RESONANCE_UPGRADE_MATERIALS,
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
    RESONANCE_UPGRADE_MATERIALS: DEFAULT_RESONANCE_UPGRADE_MATERIALS,
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
      5: '순환',
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
    RESONANCE_UPGRADE_MATERIALS: DEFAULT_RESONANCE_UPGRADE_MATERIALS,
    RESONANCES: {
      1: '소환곡',
      2: '감응',
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
      '콜로서스 군진',
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
      2: '샘물-베를린',
      3: '투지',
      4: '잠꼬대',
      5: '단꿈',
    },
  },
  CHARLOTTE: {},
  SUEN: {
    SKILLS: ['복음', '음에너지', '다크 아트', '형벌', '다크 아트', '정화'],
    RESONANCES: {
      1: '은혜',
      2: '지탱',
      3: '생기',
      4: '망녕',
      5: '일념',
    },
    RESONANCE_UPGRADE_MATERIALS: DEFAULT_RESONANCE_UPGRADE_MATERIALS,
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
      1: '자석 감응 - 캐롤라인',
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
  YEJUE: {
    SKILLS: ['롤링 썬더', '플래시 코로나', '전광석화'],
    RESONANCES: {
      1: '자석 감응 - 예주',
      2: '재난',
      3: '생기',
      4: '날벼락',
      5: '부상',
    },
    RESONANCE_UPGRADE_MATERIALS: DEFAULT_RESONANCE_UPGRADE_MATERIALS,
    AWAKENING: {
      1: '분출',
      2: '초전도',
      3: '투지',
      4: '뇌명',
      5: '기상학 - 예주',
    },
  },
  AKIRA: {},
  ACHIWA: {},
  KALEYA: {
    SKILLS: ['마이크로파', '위치 전송', '유산소 대기'],
    RESONANCES: {
      1: '보급 - 카리야',
      2: '체크 포인트',
      3: '생기',
      4: '증폭',
      5: '프로그 워프',
    },
    RESONANCE_UPGRADE_MATERIALS: DEFAULT_RESONANCE_UPGRADE_MATERIALS,
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
    RESONANCE_UPGRADE_MATERIALS: DEFAULT_RESONANCE_UPGRADE_MATERIALS,
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
  AOBA: {
    SKILLS: ['부채술', '유세술', '오의-유풍'],
    RESONANCES: {
      1: '부채바람',
      2: '경운',
      3: '생기',
      4: '회전',
      5: '풍설',
    },
    RESONANCE_UPGRADE_MATERIALS: DEFAULT_RESONANCE_UPGRADE_MATERIALS,
    AWAKENING: {
      1: '종횡',
      2: '운명',
      3: '투지',
      4: '임기응변',
      5: '깡쯔',
    },
  },
  CECIL: {},
  MHAR: {},
  MSGOLD: {},
  YAMAARASHI: {},
  EXCALIBUR_BOX: {},
  FLAN: {},
  ELIOT: {},
  HARUKA: {},
  ARCANA: {
    SKILLS: ['나비의 축복', '자연의 메아리', '태초의 꿈'],
    RESONANCES: {
      1: '보급 - 아르카나',
      2: '나비 서식',
      3: '생기',
      4: '세례',
    },
    RESONANCE_UPGRADE_MATERIALS: RARE_RESONANCE_UPGRADE_MATERIALS,
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
      1: '아드레날린',
      2: '예비탄',
      3: '생기',
      4: '폭탄 장전',
    },
    RESONANCE_UPGRADE_MATERIALS: RARE_RESONANCE_UPGRADE_MATERIALS,
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
    RESONANCE_UPGRADE_MATERIALS: RARE_RESONANCE_UPGRADE_MATERIALS,
    AWAKENING: {
      1: '정비',
      2: '폭탄 장전',
      3: '투지',
      4: '폭발 지시',
      5: '메아리',
    },
  },
  JULIAN: {},
  KAREN: {},
  JERBOA: {},
  SOLUM: {},
  BOX: {},
}

import { RS_FACTION, RS_GRADE } from '@/const/character/character.enum'
import _ from 'lodash'

export enum RSEquipmentType {
  WEAPON = '무기',
  ARMOR = '방어구',
  ACCESSORY = '장신구',
}

export interface RSEquipmentEarnPath {
  desc: string
  tags: string[]
  map?: string
}

export interface RSEquipment {
  type: RSEquipmentType
  grade: RS_GRADE
  desc?: string
  thumbnail?: string
  faction: RS_FACTION
  earnsPath: RSEquipmentEarnPath[]
}

export const ALL_EQUIPMENTS: {
  [key: string]: RSEquipment
} = {
  '부러진 검의 불': {
    type: RSEquipmentType.WEAPON,
    grade: RS_GRADE.UR,
    desc: '기본 속성: 공격력+48\n옵션: 누적 8회의 [점화] 또는 누적 4회의 [작열]을 부여할 때마다 [광염]을 발동합니다',
    thumbnail:
      'https://nng-phinf.pstatic.net/MjAyNTAyMjFfMyAg/MDAxNzQwMTIzMTg2MjU1.CtEizWZlK4VIC3Qc8ko8mwM38_nhOWM1BLKnwzTcM8Ag.nxJsOqYxa0Bjq7UJkFDOmWMA4_rG2ek7kawEuw_46pIg.PNG/%E6%96%AD%E5%89%91%E4%B9%8B%E7%81%AB.png',
    faction: RS_FACTION.SOURCE_CITADEL,
    earnsPath: [
      {
        desc: '황원역 - 레비스 교환',
        tags: [],
        map: '황원역',
      },
    ],
  },
  '스타 웨이브': {
    type: RSEquipmentType.WEAPON,
    grade: RS_GRADE.SSR,
    desc: '기본 속성: 공격력+40\n옵션: [리더 스킬] 사용 시 펄스를 발사하여 모든 적이 받는 잔향피해가 1% 증가합니다.(최대 5%, 중첩 가능)',
    thumbnail:
      'https://nng-phinf.pstatic.net/MjAyNTAyMDhfMjI2/MDAxNzM4OTk5OTM2NzI0.P9LEDTWSZhCYoeq5HkSYyAGLl8ny7wYspwWCNjPvmjgg.Rs8g9-KcGvqR9le2jaaDJbMUEectLzeLerInoJo3rjog.PNG/%E6%98%9F%E5%BC%A7%E6%B3%A2%E7%BA%B9.png',
    faction: RS_FACTION.SOURCE_CITADEL,
    earnsPath: [
      {
        desc: '케이프시 철도관리국 임무',
        tags: [],
        map: '케이프시',
      },
      {
        desc: '흑월 상점',
        tags: ['흑월 상점'],
      },
      {
        desc: '철도 주변의 베툴라 부표-빙하 본드래곤',
        tags: ['부표'],
      },
      {
        desc: '철도 주변의 베툴라 부표-혼란의 돌산호',
        tags: ['부표'],
      },
    ],
  },
  '심해 시험침': {
    type: RSEquipmentType.WEAPON,
    grade: RS_GRADE.SSR,
    desc: '기본 속성: 공격력+39\n옵션: 비용이 3 이상인 [레드카드]를 내면 무작위 적이 받는 치유효과가 3% 감소합니다.(최대 75%, 중첩 가능)',
    thumbnail:
      'https://nng-phinf.pstatic.net/MjAyNTAyMDhfMTQy/MDAxNzM4OTk5ODA2NDU4.MHNf32-hi46yvG08vrKC6YGRTb8NFGzZjb4LYmlmbNwg.eE9nrvXyEMQfUrB1WV2ZYJRF7x7SNHcEp5_9APBaslIg.PNG/%E6%B7%B1%E6%B5%B7%E6%8E%A2%E9%92%88.png',
    faction: RS_FACTION.SOURCE_CITADEL,
    earnsPath: [
      {
        desc: '케이프시 철도관리국 임무',
        tags: [],
        map: '케이프시',
      },
      {
        desc: '흑월 상점',
        tags: ['흑월 상점'],
      },
      {
        desc: '철도 주변의 베툴라 부표-빙하 본드래곤',
        tags: ['부표'],
      },
      {
        desc: '철도 주변의 베툴라 부표-혼란의 돌산호',
        tags: ['부표'],
      },
    ],
  },
  '무한 비확률 아머': {
    type: RSEquipmentType.ARMOR,
    grade: RS_GRADE.SSR,
    desc: '기본 속성: 방어력+39\n옵션: 60초마다 1회 발동하며, 캐릭터가 받는 피해가 자신의 최대 체력의 33%를 초과하면 해당 피해에 면역됩니다.',
    thumbnail:
      'https://nng-phinf.pstatic.net/MjAyNTAyMDhfMjMg/MDAxNzM4OTk5NjIwNDE4.DTiwg2UgTMklOrucleS9Go1c6KyAX7cx84fdXgMkEVYg.PZx08j4zw5Z__se7XsUXpgKL9RmHBslyGKwgLhiwzy4g.PNG/%E6%97%A0%E9%99%90%E9%9D%9E%E6%A6%82%E7%8E%87%E6%8A%A4%E7%94%B2.png',
    faction: RS_FACTION.SOURCE_CITADEL,
    earnsPath: [
      {
        desc: '케이프시 철도관리국 임무',
        tags: [],
        map: '케이프시',
      },
      {
        desc: '흑월 상점',
        tags: ['흑월 상점'],
      },
      {
        desc: '철도 주변의 베툴라 부표-빙하 본드래곤',
        tags: ['부표'],
      },
      {
        desc: '철도 주변의 베툴라 부표-혼란의 돌산호',
        tags: ['부표'],
      },
    ],
  },
  '변화의 눈동자': {
    type: RSEquipmentType.ACCESSORY,
    grade: RS_GRADE.SSR,
    desc: '기본 속성: 체력+3754\n옵션: [다크 아트] 생성 시 자신의 체력을 5% 회복합니다.(중첩 가능)',
    thumbnail:
      'https://nng-phinf.pstatic.net/MjAyNTAyMDhfOTYg/MDAxNzM4OTk5NDQyNTE2.vz3lPSR-aX32s3-H3HTtoi8pJgReSP7L4TlW4oggXQMg.xgNRu3unjG5LHwiX_Yv2JO7FafzgEwtnG1X4hh5tj0sg.PNG/%E4%B8%87%E5%8F%98%E7%9C%BC%E7%9C%B8.png',
    faction: RS_FACTION.SOURCE_CITADEL,
    earnsPath: [
      {
        desc: '케이프시 철도관리국 임무',
        tags: [],
        map: '케이프시',
      },
      {
        desc: '흑월 상점',
        tags: ['흑월 상점'],
      },
      {
        desc: '철도 주변의 베툴라 부표-빙하 본드래곤',
        tags: ['부표'],
      },
      {
        desc: '철도 주변의 베툴라 부표-혼란의 돌산호',
        tags: ['부표'],
      },
    ],
  },
  '고차원 구조체': {
    type: RSEquipmentType.ARMOR,
    grade: RS_GRADE.SSR,
    desc: '기본 속성: 방어력+38\n옵션: [블랙카드] 생성 시 자신의 체력을 5% 회복합니다.(중첩 가능)',
    thumbnail:
      'https://nng-phinf.pstatic.net/MjAyNTAyMDhfMjc0/MDAxNzM4OTk5MzI2Mjk3.xfwE9u3rqMWmBVkSll154T4i5CNEASl3UBKecC9n4NIg.3fA19vdk9BI9HFEA5XFzFFVz_TQr5mKcPUdOCuRq_J0g.PNG/%E9%AB%98%E7%BB%B4%E6%9E%84%E9%80%A0%E4%BD%93.png',
    faction: RS_FACTION.SOURCE_CITADEL,
    earnsPath: [
      {
        desc: '케이프시 철도관리국 임무',
        tags: [],
        map: '케이프시',
      },
      {
        desc: '흑월 상점',
        tags: ['흑월 상점'],
      },
      {
        desc: '철도 주변의 베툴라 부표-빙하 본드래곤',
        tags: ['부표'],
      },
      {
        desc: '철도 주변의 베툴라 부표-혼란의 돌산호',
        tags: ['부표'],
      },
    ],
  },
  '인비져블 터치': {
    type: RSEquipmentType.WEAPON,
    grade: RS_GRADE.SSR,
    desc: '기본 속성: 공격력+40\n옵션: [다크 아트]가 입히는 피해가 20% 증가합니다.(중첩 가능)',
    thumbnail:
      'https://nng-phinf.pstatic.net/MjAyNTAyMDhfMjMw/MDAxNzM4OTk5MjM0OTg5.etWPsZZy0KKQhzNYQN9hKrx0S1-aPrQ_7uesm4diohwg.ueKbWW5Sg0LS1d4Rd7epubqGhW_Yfkye74SwuI-vI9Ig.PNG/%E4%B8%8D%E5%8F%AF%E8%A7%81%E4%B9%8B%E8%A7%A6.png',
    faction: RS_FACTION.SOURCE_CITADEL,
    earnsPath: [
      {
        desc: '케이프시 철도관리국 임무',
        tags: [],
        map: '케이프시',
      },
      {
        desc: '흑월 상점',
        tags: ['흑월 상점'],
      },
      {
        desc: '철도 주변의 베툴라 부표-빙하 본드래곤',
        tags: ['부표'],
      },
      {
        desc: '철도 주변의 베툴라 부표-혼란의 돌산호',
        tags: ['부표'],
      },
    ],
  },
  비트레이얼: {
    type: RSEquipmentType.WEAPON,
    grade: RS_GRADE.SSR,
    desc: '기본 속성: 공격력+37\n옵션: [리더 스킬] 사용 시 20% 확률로 [다크 아트]를 1장 생성하여 덱의 맨 위에 올려놓습니다. (확률 중첩 가능)',
    thumbnail:
      'https://nng-phinf.pstatic.net/MjAyNTAyMDhfMjMw/MDAxNzM4OTk4OTE1MDM5.owM7QkEcC3hCyLqYSIgUCI_1bmeMXzP1AUVlMl7WQ-sg.kPVNGrvOtnzdI5rO8YoIlgGcGEdgFZz3NVz7pm7EQAkg.PNG/%E7%8B%A1%E8%AF%88%E8%83%8C%E5%8F%9B.png',
    faction: RS_FACTION.SOURCE_CITADEL,
    earnsPath: [
      {
        desc: '케이프시 철도관리국 임무',
        tags: [],
        map: '케이프시',
      },
      {
        desc: '흑월 상점',
        tags: ['흑월 상점'],
      },
      {
        desc: '철도 주변의 베툴라 부표-빙하 본드래곤',
        tags: ['부표'],
      },
      {
        desc: '철도 주변의 베툴라 부표-혼란의 돌산호',
        tags: ['부표'],
      },
    ],
  },
  '메모리 매트릭스': {
    type: RSEquipmentType.ARMOR,
    grade: RS_GRADE.SSR,
    desc: '기본 속성: 방어력+37\n옵션: 매번 받는 피해가 최대 체력의 33%를 초과하지 않습니다.',
    thumbnail:
      'https://nng-phinf.pstatic.net/MjAyNTAyMTJfMTQ3/MDAxNzM5MzQ0NTMxMzY5.CZjimdQSq5MQJeLzhmCa5qch-qWfEdhDAz02rRVCmOIg.Kp1hpwvyc93dCmcYr_fVWDAxTBB6vEW0oFpIv0IGKTAg.PNG/%E5%A4%96%E9%83%A8%E8%AE%B0%E5%BF%86%E7%9F%A9%E9%98%B5.png',
    faction: RS_FACTION.SOURCE_CITADEL,
    earnsPath: [
      {
        desc: '케이프시 철도관리국 현상금 임무',
        tags: ['현상금 임무'],
        map: '케이프시',
      },
      {
        desc: '흑월 상점',
        tags: ['흑월 상점'],
      },
      {
        desc: '철도 주변의 베툴라 부표-빙하 본드래곤',
        tags: ['부표'],
      },
      {
        desc: '철도 주변의 베툴라 부표-혼란의 돌산호',
        tags: ['부표'],
      },
    ],
  },
  '무의식 학습 장치': {
    type: RSEquipmentType.ACCESSORY,
    grade: RS_GRADE.SR,
    desc: '기본 속성: 체력+3178\n옵션: [버리기] 명령 쿨타임이 1초 감소합니다.(중첩 가능)',
    thumbnail:
      'https://nng-phinf.pstatic.net/MjAyNTAyMDhfNTAg/MDAxNzM4OTk4NzA2NzI3.-E-eRn-eJDaJ_aeFMpk54hV3oIqktLLV4JsEiM8aZqUg.VD1Kc9u_wH9yppG3Gbb8QSyCqsv9GKiRxcATinEhqaYg.PNG/%E6%97%A0%E6%84%8F%E8%AF%86%E5%AD%A6%E4%B9%A0%E8%A3%85%E7%BD%AE.png',
    faction: RS_FACTION.SOURCE_CITADEL,
    earnsPath: [
      {
        desc: '케이프시 철도관리국 임무',
        tags: [],
        map: '케이프시',
      },
      {
        desc: '흑월 상점',
        tags: ['흑월 상점'],
      },
      {
        desc: '철도 주변의 베툴라 부표-빙하 본드래곤',
        tags: ['부표'],
      },
      {
        desc: '철도 주변의 베툴라 부표-혼란의 돌산호',
        tags: ['부표'],
      },
    ],
  },
  '블락 금속': {
    type: RSEquipmentType.ARMOR,
    grade: RS_GRADE.SR,
    desc: '기본 속성: 방어력+31\n옵션: [버리기] 명령 사용 시 자신의 체력을 10% 회복합니다.(중첩 가능)',
    thumbnail:
      'https://nng-phinf.pstatic.net/MjAyNTAyMDhfMjgx/MDAxNzM4OTk4NjExOTEw.AWH3xQaqrAgNmsCRcpiwgSTx6o67LbNb_5wvT-wUiP4g.L6x4pqrUP1YA3ZZ3-utdoO_QanCWZZXPdsAIXipiIQwg.PNG/%E5%BE%A1%E9%99%A9%E9%87%91%E5%B1%9E.png',
    faction: RS_FACTION.SOURCE_CITADEL,
    earnsPath: [
      {
        desc: '케이프시 철도관리국 임무',
        tags: [],
        map: '케이프시',
      },
      {
        desc: '흑월 상점',
        tags: ['흑월 상점'],
      },
      {
        desc: '철도 주변의 베툴라 부표-빙하 본드래곤',
        tags: ['부표'],
      },
      {
        desc: '철도 주변의 베툴라 부표-혼란의 돌산호',
        tags: ['부표'],
      },
    ],
  },
  '해부 도구C': {
    type: RSEquipmentType.WEAPON,
    grade: RS_GRADE.SR,
    desc: '기본 속성: 공격력+29\n옵션: [버리기] 명령 사용 시 비용을 1 획득합니다.(중첩 가능)',
    thumbnail:
      'https://nng-phinf.pstatic.net/MjAyNTAyMDhfMTUg/MDAxNzM4OTk3OTIyMjMx.ev-9-710TkjnqZWKrR_ylRviXJXAtLJJwg_PNnwKv6Mg.mZxiX_5Q-ZkHD-Na1Nk5Y3zUXVRd6KgRGsKI-Bxh5nUg.PNG/%E8%A7%A3%E5%89%96%E5%B7%A5%E5%85%B7C.png',
    faction: RS_FACTION.SOURCE_CITADEL,
    earnsPath: [
      {
        desc: '케이프시 철도관리국 임무',
        tags: [],
        map: '케이프시',
      },
      {
        desc: '흑월 상점',
        tags: ['흑월 상점'],
      },
      {
        desc: '철도 주변의 베툴라 부표-빙하 본드래곤',
        tags: ['부표'],
      },
      {
        desc: '철도 주변의 베툴라 부표-혼란의 돌산호',
        tags: ['부표'],
      },
    ],
  },
  '블락 플래셔': {
    type: RSEquipmentType.WEAPON,
    grade: RS_GRADE.SR,
    desc: '기본 속성: 공격력+29\n옵션: 자신의 스킬 카드를 사용하면 10% 확률로 1줄기의 강력한 빛을 추가로 시전하여 적에게 1단 피해를 입히고 [기절]을 부여합니다.',
    thumbnail:
      'https://nng-phinf.pstatic.net/MjAyNTAyMDhfMTYx/MDAxNzM4OTk3NzIxOTc0.xfgyjedtA_g8C_LwoOE6I4wLACjAApn21tARjkKPt7sg.SVsAgKHOeACOVdJRXbhmZ99r3r24jB1r_eAJWuvf714g.PNG/%E5%BE%A1%E6%95%8C%E9%97%AA%E5%85%89%E5%99%A8.png',
    faction: RS_FACTION.SOURCE_CITADEL,
    earnsPath: [
      {
        desc: '케이프시 철도관리국 임무',
        tags: [],
        map: '케이프시',
      },
      {
        desc: '흑월 상점',
        tags: ['흑월 상점'],
      },
      {
        desc: '철도 주변의 베툴라 부표-빙하 본드래곤',
        tags: ['부표'],
      },
      {
        desc: '철도 주변의 베툴라 부표-혼란의 돌산호',
        tags: ['부표'],
      },
    ],
  },
  임계질량: {
    type: RSEquipmentType.WEAPON,
    grade: RS_GRADE.SR,
    desc: '기본 속성: 공격력+29\n옵션: 자신이 부여한 [기절]의 지속시간이 1초 증가합니다.(중첩 가능)',
    thumbnail:
      'https://nng-phinf.pstatic.net/MjAyNTAyMTJfMTkx/MDAxNzM5MzQ1MzcwMjI1.1Uduz5EAElHbv7nqoeTaaoxL2ph2muTFvddrOLCLvm0g.SuEpipQFyJoS_gqsJaPoKqDvQOqrNuJW1Y6gk_9dJcAg.PNG/%E4%B8%B4%E7%95%8C%E8%B4%A8%E9%87%8F.png',
    faction: RS_FACTION.SOURCE_CITADEL,
    earnsPath: [
      {
        desc: '케이프시 철도관리국 임무',
        tags: [],
        map: '케이프시',
      },
      {
        desc: '흑월 상점',
        tags: ['흑월 상점'],
      },
      {
        desc: '철도 주변의 베툴라 부표-빙하 본드래곤',
        tags: ['부표'],
      },
      {
        desc: '철도 주변의 베툴라 부표-혼란의 돌산호',
        tags: ['부표'],
      },
    ],
  },
  '원기 회복 기기': {
    type: RSEquipmentType.ACCESSORY,
    grade: RS_GRADE.R,
    desc: '기본 속성: 체력+2404\n옵션: 자신의 모든 확률 발동 메커니즘의 확률이 3% 증가합니다.(중첩 가능)',
    thumbnail:
      'https://nng-phinf.pstatic.net/MjAyNTAyMDhfMjA0/MDAxNzM4OTk3NDU3Mzky.Me9HknS_a-Umudtj8JKkXivCAUHp_1s0Vfj1brvTPzQg.c_dEYIhJxKcnIkVzreGZiGdZRr2HMtTilgH4RgY0Qd0g.PNG/%E6%8F%90%E7%A5%9E%E9%86%92%E8%84%91%E4%BB%AA.png',
    faction: RS_FACTION.SOURCE_CITADEL,
    earnsPath: [
      {
        desc: '케이프시 철도관리국 임무',
        tags: [],
        map: '케이프시',
      },
      {
        desc: '흑월 상점',
        tags: ['흑월 상점'],
      },
      {
        desc: '철도 주변의 베툴라 부표-빙하 본드래곤',
        tags: ['부표'],
      },
      {
        desc: '철도 주변의 베툴라 부표-혼란의 돌산호',
        tags: ['부표'],
      },
    ],
  },
  '기본 방어 섬유': {
    type: RSEquipmentType.ARMOR,
    grade: RS_GRADE.R,
    desc: '기본 속성: 방어력+23\n옵션: 5% 확률로 받는 공격을 블록하여 피해에 면역됩니다.(확률 중첩 가능)',
    thumbnail:
      'https://nng-phinf.pstatic.net/MjAyNTAyMDhfMTY2/MDAxNzM4OTk3Mzc1MjI1.24_8M9WtEYqni4GtSKBrZRjGx7-MT1S4BUrLJvSpqq8g.tmNzHSjDHwiUFDy3IDetLR93dpYA3E1EGJHOTwSU3x4g.PNG/%E6%A0%87%E5%87%86%E9%98%B2%E5%BE%A1%E7%BA%A4%E7%BB%B4.png',
    faction: RS_FACTION.SOURCE_CITADEL,
    earnsPath: [
      {
        desc: '케이프시 철도관리국 임무',
        tags: [],
        map: '케이프시',
      },
      {
        desc: '흑월 상점',
        tags: ['흑월 상점'],
      },
      {
        desc: '철도 주변의 베툴라 부표-빙하 본드래곤',
        tags: ['부표'],
      },
      {
        desc: '철도 주변의 베툴라 부표-혼란의 돌산호',
        tags: ['부표'],
      },
    ],
  },
  '2호 장난감': {
    type: RSEquipmentType.WEAPON,
    grade: RS_GRADE.R,
    desc: '기본 속성: 공격력+24\n옵션: [리더스킬] 사용 시 자신의 방어력이 1.5% 증가합니다.(중첩 가능)',
    thumbnail:
      'https://nng-phinf.pstatic.net/MjAyNTAyMDhfODgg/MDAxNzM4OTk3Mjc4ODA5.cB8kMZ2cD8NtrnXu1_4EXccgzvtAEf8OVijzn4khn3Ag.xusWQeVDUjZxxd8x_wjQmnskUoVZ4Kp1h5zAEPpWc94g.PNG/%E4%BA%8C%E5%8F%B7%E7%8E%A9%E5%85%B7.png',
    faction: RS_FACTION.SOURCE_CITADEL,
    earnsPath: [
      {
        desc: '케이프시 철도관리국 임무',
        tags: [],
        map: '케이프시',
      },
      {
        desc: '흑월 상점',
        tags: ['흑월 상점'],
      },
      {
        desc: '철도 주변의 베툴라 부표-빙하 본드래곤',
        tags: ['부표'],
      },
      {
        desc: '철도 주변의 베툴라 부표-혼란의 돌산호',
        tags: ['부표'],
      },
    ],
  },
  '질량 투사기': {
    type: RSEquipmentType.WEAPON,
    grade: RS_GRADE.R,
    desc: '기본 속성: 공격력+24\n옵션: [리더스킬] 사용 시 자신의 공격력이 1.5% 증가합니다.(중첩 가능)',
    thumbnail:
      'https://nng-phinf.pstatic.net/MjAyNTAyMDhfMTYg/MDAxNzM4OTk3MDA0NDM5.qcG6ayl7zDK9SSbbT-B1AuKYXgfOwdooCkhw04QuFYQg.zMctIc9gK0koZ4psc5lqa7viIXPN48q6XdhxuCfJxaYg.PNG/%E8%B4%A8%E9%87%8F%E6%8A%95%E5%B0%84%E5%99%A8.png',
    faction: RS_FACTION.SOURCE_CITADEL,
    earnsPath: [
      {
        desc: '케이프시 철도관리국 임무',
        tags: [],
        map: '케이프시',
      },
      {
        desc: '흑월 상점',
        tags: ['흑월 상점'],
      },
      {
        desc: '철도 주변의 베툴라 부표-빙하 본드래곤',
        tags: ['부표'],
      },
      {
        desc: '철도 주변의 베툴라 부표-혼란의 돌산호',
        tags: ['부표'],
      },
    ],
  },
  '외계의 별': {
    type: RSEquipmentType.WEAPON,
    grade: RS_GRADE.UR,
    desc: '기본 속성: 공격력+47\n옵션: [신성]/[원소 신성]/[초신성]이 1장 생성될 때마다 모든 아군의 공격력이 1% 증가합니다.(최대 20%)',
    thumbnail:
      'https://nng-phinf.pstatic.net/MjAyNTAyMTJfNTUg/MDAxNzM5MzQyNjU4NTQ5.3RMMR1ulJTvExrEXYzDAbKhphUTsejHH0vR8tSumxFwg.wbjY1CV7dhOYogs3NZH7mknDuE8hlncjAfGHz4gprkEg.PNG/%E5%A4%96%E7%95%8C%E6%98%9F%E8%BE%B0.png',
    faction: RS_FACTION.MUNDUS,
    earnsPath: [
      {
        desc: '그로누시 명성 15레벨 달성 보상',
        tags: [],
        map: '그로누시',
      },
    ],
  },
  '라이트 체이서': {
    type: RSEquipmentType.WEAPON,
    grade: RS_GRADE.SSR,
    desc: '기본 속성: 공격력+37\n옵션: [기이한 불꽃]이 입히는 피해가 20% 증가합니다.(중첩 가능)',
    thumbnail:
      'https://nng-phinf.pstatic.net/MjAyNTAyMDhfMTA2/MDAxNzM4OTgzODg0Mjk0.bMm6i2LkjXQCYkDnTd14ENuL6CGkKkGnb-dpv9Kkhtwg.t8Ly5W7KTUPc2bvKSGluZjVJ7UN3JtqgzDdKY8yhr3Qg.PNG/%E5%85%89%E8%8A%92%E8%BF%BD%E5%87%BB%E8%80%85.png',
    faction: RS_FACTION.MUNDUS,
    earnsPath: [
      {
        desc: '흑월 상점',
        tags: ['흑월 상점'],
      },
      {
        desc: '철도 주변의 베툴라 부표-암흑의 매머드',
        tags: ['부표'],
      },
    ],
  },
  '세븐스트링 보우': {
    type: RSEquipmentType.WEAPON,
    grade: RS_GRADE.SSR,
    desc: '기본 속성: 공격력+39\n옵션: 자신이 부여하는 [저주]의 지속시간이 2초 증가합니다.(중첩 가능)',
    thumbnail:
      'https://nng-phinf.pstatic.net/MjAyNTAyMDhfNTYg/MDAxNzM4OTgzNTk5ODUz.1R7grbmgCAUIS8NzD-QFDl4juWbT6qierE-qmK5af38g.DnkmNRGisLIqnsaQexe5Q_tzyW6lJ2JGGecQ9gNejUkg.PNG/%E4%B8%83%E5%BC%A6%E5%BC%93.png',
    faction: RS_FACTION.MUNDUS,
    earnsPath: [
      {
        desc: '흑월 상점',
        tags: ['흑월 상점'],
      },
      {
        desc: '철도 주변의 베툴라 부표-암흑의 매머드',
        tags: ['부표'],
      },
    ],
  },
  볼케이노: {
    type: RSEquipmentType.WEAPON,
    grade: RS_GRADE.SSR,
    desc: '기본 속성: 공격력+40\n옵션: 자신이 입히는 [점화], [작열], [광염], [불바다]의 초당 연소 피해가 25% 증가합니다.(중첩 가능)',
    thumbnail:
      'https://nng-phinf.pstatic.net/MjAyNTAyMDhfMjQw/MDAxNzM4OTgzNTA1Mzg5.nCPQ4dwQ-cx4xxAc3QSk0PpD4htmC4lZyPhPjzmUHnAg.y03WNdKVgxg8_zza1mUYqlFfbaVV6POfwYGEM1BlrTYg.PNG/%E7%81%AB%E5%B1%B1.png',
    faction: RS_FACTION.MUNDUS,
    earnsPath: [
      {
        desc: '흑월 상점',
        tags: ['흑월 상점'],
      },
      {
        desc: '철도 주변의 베툴라 부표-암흑의 매머드',
        tags: ['부표'],
      },
    ],
  },
  토르: {
    type: RSEquipmentType.WEAPON,
    grade: RS_GRADE.SSR,
    desc: '기본 속성: 공격력+39\n옵션:자신이 입히는 [인뢰], [낙뢰], [우레]와 [천둥]의 낙뢰 피해가 25% 증가합니다.(중첩 가능)',
    thumbnail:
      'https://nng-phinf.pstatic.net/MjAyNTAyMDhfMjk2/MDAxNzM4OTgzMzM3OTk4._uKd6a2gXs_5cRl9hCK0F-LSwFftMXHIu9xlXTZmkCIg.e8ZHFLb8RmR2274clWXw6AulXVxpbbyU-RDO2TyHodcg.PNG/%E9%9B%B7%E7%A5%9E.png',
    faction: RS_FACTION.MUNDUS,
    earnsPath: [
      {
        desc: '흑월 상점',
        tags: ['흑월 상점'],
      },
      {
        desc: '철도 주변의 베툴라 부표-암흑의 매머드',
        tags: ['부표'],
      },
    ],
  },
  앰비션: {
    type: RSEquipmentType.WEAPON,
    grade: RS_GRADE.SSR,
    desc: '기본 속성: 공격력+40\n옵션: 자신이 입히는 [참열] 피해가 25% 증가합니다.(중첩 가능)',
    thumbnail:
      'https://nng-phinf.pstatic.net/MjAyNTAyMDhfMjY4/MDAxNzM4OTgzMjAwMDUw.04ffbxSsXqJJ80gTjAVqzynTvOl2_Rea3FCFl_9NW0og.FbcmxfMTL1CjmV-5ZZerK87xrg-pvqMswPrvu67H5YMg.PNG/%E9%87%8E%E5%BF%83.png',
    faction: RS_FACTION.MUNDUS,
    earnsPath: [
      {
        desc: '흑월 상점',
        tags: ['흑월 상점'],
      },
      {
        desc: '철도 주변의 베툴라 부표-암흑의 매머드',
        tags: ['부표'],
      },
    ],
  },
  '성핵 잔화': {
    type: RSEquipmentType.ACCESSORY,
    grade: RS_GRADE.SSR,
    desc: '기본 속성: 체력+4014\n옵션: [신성], [원소 신성] 및 [초신성]이 입히는 피해가 20% 증가합니다.(중첩 가능)',
    thumbnail:
      'https://nng-phinf.pstatic.net/MjAyNTAyMDhfOTAg/MDAxNzM4OTg0NTQxODk1.V97GRuzi1Gx41vFTnDacxeyumf5S7cyQQELlX4oh1Dsg.XIm3aXkprGZA12az7YfzaWwF_jgqBsL3S2x_x6w6j4Ig.PNG/%E6%98%9F%E6%A0%B8%E4%BD%99%E7%83%AC.png',
    faction: RS_FACTION.MUNDUS,
    earnsPath: [
      {
        desc: '흑월 상점',
        tags: ['흑월 상점'],
      },
      {
        desc: '철도 주변의 베툴라 부표-암흑의 매머드',
        tags: ['부표'],
      },
    ],
  },
  '정원 수호': {
    type: RSEquipmentType.ARMOR,
    grade: RS_GRADE.SSR,
    desc: '기본 속성: 방어력+37\n옵션: 매초 자신의 체력을 0.5% 회복합니다.',
    thumbnail:
      'https://nng-phinf.pstatic.net/MjAyNTAyMDhfMTMw/MDAxNzM4OTg0NDQ5MDY3.XGu77F0FBfz1dyea7VPNQ8LPC2fxRTeOsOjiIHZWDZ8g.GLZSKHCSJ8_-Ylz71c71ZKLy5veXTYCgoaOrys7Y4tMg.PNG/%E8%8A%B1%E5%9B%AD%E5%AE%88%E6%8A%A4.png',
    faction: RS_FACTION.MUNDUS,
    earnsPath: [
      {
        desc: '흑월 상점',
        tags: ['흑월 상점'],
      },
      {
        desc: '철도 주변의 베툴라 부표-암흑의 매머드',
        tags: ['부표'],
      },
    ],
  },
  '별의 자취': {
    type: RSEquipmentType.WEAPON,
    grade: RS_GRADE.SSR,
    desc: '기본 속성: 공격력+38\n옵션: 퍼플카드 사용 후, 10% 확률로 [신성]을 1장 생성하여 손으로 가져옵니다.(확률 중첩 가능)',
    thumbnail:
      'https://nng-phinf.pstatic.net/MjAyNTAyMDhfMjk2/MDAxNzM4OTg0MzAzMDg5.obgDyFpaw-7a5twSUE20PradmJ-cL_CMh6IxOHD4WyUg._QuHOTEjyqukk6N-oMpXr4Q9fQGSi4Jy9LGNmjlJHmYg.PNG/%E6%9A%97%E5%BD%B1%E5%AF%BB%E8%B8%AA%E8%80%85.png',
    faction: RS_FACTION.MUNDUS,
    earnsPath: [
      {
        desc: '흑월 상점',
        tags: ['흑월 상점'],
      },
      {
        desc: '철도 주변의 베툴라 부표-암흑의 매머드',
        tags: ['부표'],
      },
    ],
  },
  '불꽃 침식자': {
    type: RSEquipmentType.WEAPON,
    grade: RS_GRADE.SSR,
    desc: '기본 속성: 공격력+37\n옵션: 일반 공격 시 15% 확률로 [점화]를 발동합니다.',
    thumbnail:
      'https://nng-phinf.pstatic.net/MjAyNTAyMDhfMTcx/MDAxNzM4OTg0MTYwNTk5.KZlaDDVaLYF1IdB0l81xUxNQsMoUcnJN93djatCOX1cg.hbCWnoCdnr7kP2-cOB5Xuq99POzzeXeT07scCWpAR54g.PNG/%E7%82%BD%E7%84%B0%E4%BE%B5%E8%9A%80%E8%80%85.png',
    faction: RS_FACTION.MUNDUS,
    earnsPath: [
      {
        desc: '흑월 상점',
        tags: ['흑월 상점'],
      },
      {
        desc: '철도 주변의 베툴라 부표-암흑의 매머드',
        tags: ['부표'],
      },
    ],
  },
  히포크레네: {
    type: RSEquipmentType.ACCESSORY,
    grade: RS_GRADE.SR,
    desc: '기본 속성: 체력+2893\n옵션: 매초 0.02의 비용을 얻습니다.(중첩 가능)',
    thumbnail:
      'https://nng-phinf.pstatic.net/MjAyNTAyMDdfNDAg/MDAxNzM4OTI1NTk2NDEy.NfGwSb_GiKMKNp0tigEXABtj9P5Zj_gp9F8hy_WvCe0g.68YugHl_PXf64VJlJ0mKA8Zaog1D6R8TDY6rLyEnoIkg.PNG/%E7%81%B5%E6%B3%89.png',
    faction: RS_FACTION.MUNDUS,
    earnsPath: [
      {
        desc: '흑월 상점',
        tags: ['흑월 상점'],
      },
      {
        desc: '철도 주변의 베툴라 부표-암흑의 매머드',
        tags: ['부표'],
      },
    ],
  },
  '사자 엠블럼': {
    type: RSEquipmentType.ACCESSORY,
    grade: RS_GRADE.SR,
    desc: '기본 속성: 체력+2947\n옵션: 자신의 퍼플카드가 입히는 피해가 15% 증가합니다.(중첩 가능)',
    thumbnail:
      'https://nng-phinf.pstatic.net/MjAyNTAyMDdfMjkw/MDAxNzM4OTI1NDUwNjI5.WT-lMj_ETgjhgfGlFBxbRDpeMe7NhSuYAY-AgoYlFyQg.NMUB7c1GDCP2fjkT3tpqbNZBgC3QvWdu87EEQ5TSRcAg.PNG/%E7%8B%AE%E5%AD%90%E7%BA%B9%E7%AB%A0.png',
    faction: RS_FACTION.MUNDUS,
    earnsPath: [
      {
        desc: '흑월 상점',
        tags: ['흑월 상점'],
      },
      {
        desc: '철도 주변의 베툴라 부표-암흑의 매머드',
        tags: ['부표'],
      },
    ],
  },
  '이계의 별빛': {
    type: RSEquipmentType.ARMOR,
    grade: RS_GRADE.SR,
    desc: '기본 속성: 방어력+29\n옵션: [기이한 불꽃]이 입히는 피해의 5%만큼 자신의 체력을 회복합니다.(중첩 가능)',
    thumbnail:
      'https://nng-phinf.pstatic.net/MjAyNTAyMDdfMTU4/MDAxNzM4OTI1MzQ4MzU2.rLDvC9DwDRGusiCxfnpRWseTbWtW2u-orovq9_A3niQg.dWBJhXidYhAkP-ognJLndfmxijVHsB0_ZbgtsOLftRgg.PNG/%E5%BC%82%E7%95%8C%E6%98%9F%E5%85%89.png',
    faction: RS_FACTION.MUNDUS,
    earnsPath: [
      {
        desc: '흑월 상점',
        tags: ['흑월 상점'],
      },
      {
        desc: '철도 주변의 베툴라 부표-암흑의 매머드',
        tags: ['부표'],
      },
    ],
  },
  '야밤의 별': {
    type: RSEquipmentType.WEAPON,
    grade: RS_GRADE.SR,
    desc: '기본 속성: 공격력+31\n옵션: 퍼플카드 사용 후 자신의 체력을 2% 회복합니다.',
    thumbnail:
      'https://nng-phinf.pstatic.net/MjAyNTAyMDdfOTYg/MDAxNzM4OTI1MjAwMjMw.tNBpfWIxaq-BP39DcvtuM44efaF8TacJTSYG2xaJ3zMg.XrzGewBW4miorqYtmFnUZV0dXYS-8KUzmZ4GDoWXuWIg.PNG/%E8%89%AF%E5%A4%9C%E8%BF%9C%E6%98%9F.png',
    faction: RS_FACTION.MUNDUS,
    earnsPath: [
      {
        desc: '흑월 상점',
        tags: ['흑월 상점'],
      },
      {
        desc: '철도 주변의 베툴라 부표-암흑의 매머드',
        tags: ['부표'],
      },
    ],
  },
  '광명의 염원': {
    type: RSEquipmentType.WEAPON,
    grade: RS_GRADE.SR,
    desc: '기본 속성: 공격력+30\n옵션: [신성] 사용 시 [중단]을 발동합니다.',
    thumbnail:
      'https://nng-phinf.pstatic.net/MjAyNTAyMDdfMTcg/MDAxNzM4OTI0OTYzNTk0.3eWC0rDXhAGutauZbiK4qX03WSKIYxxdY6wiqNMmnVYg.LBhmY6wwA444ocrL6GigRlWV1Gi9e4Of_bd2PaeICEwg.PNG/%E5%85%89%E6%98%8E%E4%B9%8B%E6%84%BF.png',
    faction: RS_FACTION.MUNDUS,
    earnsPath: [
      {
        desc: '흑월 상점',
        tags: ['흑월 상점'],
      },
      {
        desc: '철도 주변의 베툴라 부표-암흑의 매머드',
        tags: ['부표'],
      },
    ],
  },
  '고양이 엠블럼': {
    type: RSEquipmentType.ACCESSORY,
    grade: RS_GRADE.R,
    desc: '기본 속성: 체력+2315\n옵션: 자신이 부여하는 [변신]의 지속시간 1초 증가합니다.(중첩 가능)',
    thumbnail:
      'https://nng-phinf.pstatic.net/MjAyNTAyMDdfMTc1/MDAxNzM4OTI0ODI2Nzgx.SsKp9srYJjBvYKjU2qzvsUie1UVPR2tWUEs8IQuDs20g.H2s2pO6boFxirk0RKllYrKXsZxMEv_cu4x8fULCBljsg.PNG/%E7%8C%AB%E7%BA%B9%E7%AB%A0.png',
    faction: RS_FACTION.MUNDUS,
    earnsPath: [
      {
        desc: '흑월 상점',
        tags: ['흑월 상점'],
      },
      {
        desc: '철도 주변의 베툴라 부표-암흑의 매머드',
        tags: ['부표'],
      },
    ],
  },
  '레드 브론즈 아머': {
    type: RSEquipmentType.ARMOR,
    grade: RS_GRADE.R,
    desc: '기본 속성: 방어력+24\n옵션: [다크 아트]로 입힌 피해의 10%만큼 자신의 체력을 회복합니다.(중첩 가능)',
    thumbnail:
      'https://nng-phinf.pstatic.net/MjAyNTAyMDdfMTYw/MDAxNzM4OTI0NzExODU2.5uXQ0AZ6CDqohBv9byyVJJQL6t5UqKhp6sdmOqrAl3Ig.OW-Mz_7d1pTTIWUGzh48ohL5uyiW3Egc7qgVvz90V_kg.PNG/%E7%BA%A2%E9%93%9C%E6%8A%A4%E7%94%B2.png',
    faction: RS_FACTION.MUNDUS,
    earnsPath: [
      {
        desc: '흑월 상점',
        tags: ['흑월 상점'],
      },
      {
        desc: '철도 주변의 베툴라 부표-암흑의 매머드',
        tags: ['부표'],
      },
    ],
  },
  '인챈티드 단검': {
    type: RSEquipmentType.WEAPON,
    grade: RS_GRADE.R,
    desc: '기본 속성: 공격력+23\n옵션: 퍼플카드 사용 후 10% 확률로 카드를 1장 뽑습니다.(확률 중첩 가능)',
    thumbnail:
      'https://nng-phinf.pstatic.net/MjAyNTAyMDdfMjU0/MDAxNzM4OTI0NTQ0ODk4.Mcmd0rqloY1CCYbhk1I5s1Bi2w750MM0XuJlhPyLVAUg.Y2C889qSsYf5aENa0YNKL_OhEMJ5u3WvL3niVMkwUIMg.PNG/%E9%99%84%E9%AD%94%E7%9F%AD%E5%89%91.png',
    faction: RS_FACTION.MUNDUS,
    earnsPath: [
      {
        desc: '흑월 상점',
        tags: ['흑월 상점'],
      },
      {
        desc: '철도 주변의 베툴라 부표-암흑의 매머드',
        tags: ['부표'],
      },
    ],
  },
  마술봉: {
    type: RSEquipmentType.WEAPON,
    grade: RS_GRADE.R,
    desc: '기본 속성: 공격력+24\n옵션: 퍼플카드 사용 후 20% 확률로 비용을 1 얻습니다.(확률 중첩 가능)',
    thumbnail:
      'https://nng-phinf.pstatic.net/MjAyNTAyMDdfMjA0/MDAxNzM4OTI0MTk5NzU1.2viqh9OQrxCf0VHvIz-oLDbHYdLQfiKF13fUbAceFzwg.0qhb3LymyzjDzDH3R6QCl2qQ9p10sgT4NPjRtds0Cf0g.PNG/%E5%BC%95%E9%AD%94%E6%B3%95%E6%9D%96.png',
    faction: RS_FACTION.MUNDUS,
    earnsPath: [
      {
        desc: '흑월 상점',
        tags: ['흑월 상점'],
      },
      {
        desc: '철도 주변의 베툴라 부표-암흑의 매머드',
        tags: ['부표'],
      },
    ],
  },
  '여명의 옥새': {
    type: RSEquipmentType.ACCESSORY,
    grade: RS_GRADE.UR,
    desc: '기본 속성: 체력+4600\n옵션: 손패 상한이 1장 증가합니다.',
    thumbnail:
      'https://nng-phinf.pstatic.net/MjAyNTAyMDdfNTUg/MDAxNzM4OTIzMzkyNzQz.rXpwr27wk-19qbX4Nu5pd6uLWFQ0I2rBNssHgbiFfssg.QEnMnOx3hfZ-F-KOpYKK5LgITx5VBfCgCH9oXxIv7tIg.PNG/%E6%9C%88%E8%90%BD%E7%BA%A2%E4%BA%91%E5%AE%9D%E7%8E%BA.png',
    faction: RS_FACTION.NIGHT_CHAINS,
    earnsPath: [
      {
        desc: '청명 데이터 센터 명성 15레벨 보상',
        tags: [],
        map: '청명 데이터 센터',
      },
    ],
  },
  미초용작: {
    type: RSEquipmentType.WEAPON,
    grade: RS_GRADE.UR,
    desc: '기본 속성: 공격력+49\n옵션: 자신이 [참열]을 부여할 때마다 자신의 공격력이 0.5% 증가합니다.(중첩 가능)',
    thumbnail:
      'https://nng-phinf.pstatic.net/MjAyNTAyMDdfMjIz/MDAxNzM4OTIzMjM2NTg0.NzRpAMELBOXCc96NVGiyggwez6IpwcgMT1LzDRe6Zjkg.BqqEFF3tDTjnfpqrFpV8uwMZMQ7W1DLV6woFxspIIJ4g.PNG/%E9%9D%A1%E8%8D%89%E9%BE%99%E9%9B%80.png',
    faction: RS_FACTION.NIGHT_CHAINS,
    earnsPath: [
      {
        desc: '슈그리스 시 - 세실 교환',
        tags: [],
      },
    ],
  },
  비뢰파영검: {
    type: RSEquipmentType.WEAPON,
    grade: RS_GRADE.UR,
    desc: '기본 속성: 공격력+47\n옵션: 전투 시작 시 혹은 덱의 카드가 전부 뽑혀 셔플이 발동될때마다 [레드카드]를 우선으로 카드를 1장 뽑습니다.',
    thumbnail:
      'https://nng-phinf.pstatic.net/MjAyNTAyMTJfMTIx/MDAxNzM5MzQyNDk5NjQ2.JBS8g3BAH9pBv2Dcv1-fEYXwbgMhPJP68NL3VMHMbQQg.eoelw2BaGs0zHQQdF-75efiUkoIAQ5kFW2gJXHkho5Ig.PNG/%E5%A5%94%E9%9B%B7%E7%A0%B4%E5%BD%B1%E5%89%91.png',
    faction: RS_FACTION.NIGHT_CHAINS,
    earnsPath: [
      {
        desc: '포트리스시 명성 15레벨 달성 보상',
        tags: [],
      },
    ],
  },
  춘추합성인장: {
    type: RSEquipmentType.ACCESSORY,
    grade: RS_GRADE.SSR,
    desc: '기본 속성: 체력+3734\n옵션: 전투 시작 시 추가로 비용을 2 얻습니다.(중첩 가능)',
    thumbnail:
      'https://nng-phinf.pstatic.net/MjAyNTAyMDdfMjMx/MDAxNzM4OTIyMzgzODUw.vpEDwSbHjWAZxDR1SpGFq7-JoptcfWNbMyTTREDH2NEg.gkAXbjeuTgXHtQsU24W47mrO-vqO5Asy03nZXQUvDuUg.PNG/%E6%98%A5%E7%A7%8B%E5%90%88%E8%AF%9A%E5%8D%B0.png',
    faction: RS_FACTION.NIGHT_CHAINS,
    earnsPath: [
      {
        desc: '청명 데이터 센터 철도관리국 현상금 임무',
        tags: ['현상금 임무'],
        map: '청명 데이터 센터',
      },
      {
        desc: '흑월 상점',
        tags: ['흑월 상점'],
      },
      {
        desc: '철도 주변의 베툴라 부표-더스트 리자드',
        tags: ['부표'],
      },
      {
        desc: '철도 주변의 베툴라 부표-암흑의 매머드',
        tags: ['부표'],
      },
      {
        desc: '철도 주변의 베툴라 부표-혼란의 돌산호',
        tags: ['부표'],
      },
    ],
  },
  '헤븐 아머': {
    type: RSEquipmentType.ARMOR,
    grade: RS_GRADE.SSR,
    desc: '기본 속성: 방어력+37\n옵션: 자신의 스킬 카드를 사용할 때마다 [슈퍼 아머]를 2초간 얻습니다.(중첩 가능)',
    thumbnail:
      'https://nng-phinf.pstatic.net/MjAyNTAyMDdfNDYg/MDAxNzM4OTIyMjIyOTMy.WW3teJHqax5nP0uCOzWSredkDPUeu2QwLrZ1HQem-Pwg.Ti05GAmcShb7aCGdcH_I0cfDGK9SMhvF82orgg6Nps4g.PNG/%E5%A4%A9%E7%8E%8B%E5%AE%9D%E9%93%A0.png',
    faction: RS_FACTION.NIGHT_CHAINS,
    earnsPath: [
      {
        desc: '청명 데이터 센터 철도관리국 현상금 임무',
        tags: ['현상금 임무'],
        map: '청명 데이터 센터',
      },
      {
        desc: '흑월 상점',
        tags: ['흑월 상점'],
      },
      {
        desc: '철도 주변의 베툴라 부표-더스트 리자드',
        tags: ['부표'],
      },
      {
        desc: '철도 주변의 베툴라 부표-암흑의 매머드',
        tags: ['부표'],
      },
      {
        desc: '철도 주변의 베툴라 부표-혼란의 돌산호',
        tags: ['부표'],
      },
    ],
  },
  '흑월 메테오': {
    type: RSEquipmentType.WEAPON,
    grade: RS_GRADE.SSR,
    desc: '기본 속성: 공격력+39\n옵션: 자신의 [은신]의 지속시간이 2초 연장합니다.(중첩 가능)',
    thumbnail:
      'https://nng-phinf.pstatic.net/MjAyNTAyMDdfOTYg/MDAxNzM4OTIxNDI3MzUx.HRVICZ9j_QHAK2XXTU-9ucKBtkAMgVLs_rlUHE2T5LIg.BZbCGPhMFI1qScQQSvA4HpTeMGZhEwmA6GLczEiU-DYg.PNG/%E9%9B%BE%E5%A4%9C%E6%B5%81%E6%98%9F.png',
    faction: RS_FACTION.NIGHT_CHAINS,
    earnsPath: [
      {
        desc: '청명 데이터 센터 철도관리국 현상금 임무',
        tags: ['현상금 임무'],
        map: '청명 데이터 센터',
      },
      {
        desc: '흑월 상점',
        tags: ['흑월 상점'],
      },
      {
        desc: '철도 주변의 베툴라 부표-더스트 리자드',
        tags: ['부표'],
      },
      {
        desc: '철도 주변의 베툴라 부표-암흑의 매머드',
        tags: ['부표'],
      },
      {
        desc: '철도 주변의 베툴라 부표-혼란의 돌산호',
        tags: ['부표'],
      },
    ],
  },
  '스피릿 보우': {
    type: RSEquipmentType.WEAPON,
    grade: RS_GRADE.SSR,
    desc: '기본 속성: 공격력+39\n옵션: 자신이 주는 [튕김] 횟수가 1회 증가합니다.',
    thumbnail:
      'https://nng-phinf.pstatic.net/MjAyNTAyMDdfMTU4/MDAxNzM4OTIxMTYwODU2.BEb2TeMqposwPT4Yzm0TIY-KdHh6Io0Q5FPH1kA-_6Ag.XM5MM6WX2qvu0u6Y4ZrRetHhrXMOwk-ryBe8AcXH5l4g.PNG/%E7%81%B5%E7%8B%90%E5%90%8D%E5%BC%93.png',
    faction: RS_FACTION.NIGHT_CHAINS,
    earnsPath: [
      {
        desc: '청명 데이터 센터 철도관리국 현상금 임무',
        tags: ['현상금 임무'],
        map: '청명 데이터 센터',
      },
      {
        desc: '흑월 상점',
        tags: ['흑월 상점'],
      },
      {
        desc: '철도 주변의 베툴라 부표-더스트 리자드',
        tags: ['부표'],
      },
      {
        desc: '철도 주변의 베툴라 부표-암흑의 매머드',
        tags: ['부표'],
      },
      {
        desc: '철도 주변의 베툴라 부표-혼란의 돌산호',
        tags: ['부표'],
      },
    ],
  },
  '전술 풍수 드론': {
    type: RSEquipmentType.ACCESSORY,
    grade: RS_GRADE.SSR,
    desc: '기본 속성: 체력+3840\n옵션: 카드를 8장 사용할 때마다 자신의 공격력 혹은 방어력이 2% 증가합니다.(최대 50%)',
    thumbnail:
      'https://nng-phinf.pstatic.net/MjAyNTAyMTJfMTE2/MDAxNzM5MzQzNjQ3MjY5.glRdZ-MXNVT1yACN0H6k4XlyyUlWaPfDlxw2Yz7QmXAg.hMPn96UC4Cx3Ck_hTiItssce_jt0CkIEgHRHSFu-csMg.PNG/%E6%88%98%E6%9C%AF%E9%A3%8E%E6%B0%B4%E6%97%A0%E4%BA%BA%E6%9C%BA.png',
    faction: RS_FACTION.NIGHT_CHAINS,
    earnsPath: [
      {
        desc: "'청명이문록'-이벤트 상점",
        tags: [],
      },
      {
        desc: '청명 데이터 센터 철도관리국 현상금 임무',
        tags: ['현상금 임무'],
        map: '청명 데이터 센터',
      },
      {
        desc: '흑월 상점',
        tags: ['흑월 상점'],
      },
      {
        desc: '철도 주변의 베툴라 부표-더스트 리자드',
        tags: ['부표'],
      },
      {
        desc: '철도 주변의 베툴라 부표-암흑의 매머드',
        tags: ['부표'],
      },
      {
        desc: '철도 주변의 베툴라 부표-혼란의 돌산호',
        tags: ['부표'],
      },
    ],
  },
  '반란자의 이마 보호대': {
    type: RSEquipmentType.ARMOR,
    grade: RS_GRADE.SSR,
    desc: '기본 속성: 방어력+39:\n옵션: 받는 물리 피해가 15% 감소하고 동시에 30% 확률로[붕괴] 효과에 면역됩니다.',
    thumbnail:
      'https://nng-phinf.pstatic.net/MjAyNTAyMTJfMjMg/MDAxNzM5MzQzMTg4OTYw.gFSbumOPOZnYwuJ2WRGjGscKgh9zKQkCq1w7l-VHKp0g.AIIr343spBM02cvy7xfRLnLmBlQGeHYjwTeSZpu-Fnsg.PNG/%E9%BB%91%E6%9C%88%E5%8F%9B%E5%BF%8D%E6%8A%A4%E9%A2%9D.png',
    faction: RS_FACTION.NIGHT_CHAINS,
    earnsPath: [
      {
        desc: '청명 데이터 센터 철도관리국 현상금 임무',
        tags: ['현상금 임무'],
        map: '청명 데이터 센터',
      },
      {
        desc: '흑월 상점',
        tags: ['흑월 상점'],
      },
      {
        desc: '철도 주변의 베툴라 부표-더스트 리자드',
        tags: ['부표'],
      },
      {
        desc: '철도 주변의 베툴라 부표-암흑의 매머드',
        tags: ['부표'],
      },
      {
        desc: '철도 주변의 베툴라 부표-혼란의 돌산호',
        tags: ['부표'],
      },
    ],
  },
  '메모리 청심': {
    type: RSEquipmentType.ARMOR,
    grade: RS_GRADE.SSR,
    desc: '기본 속성: 방어력+39\n옵션: 자신의 스킬 덱에 [블루카드]가 없을 경우 받는 최종 피해가15% 감소합니다.',
    thumbnail:
      'https://nng-phinf.pstatic.net/MjAyNTAyMTJfMTkz/MDAxNzM5MzQzMDYwOTU4.ymKykeD0INzw7hzW8XLSyvs8jmAfUyRrrodP5m_ME_Yg.nC6a-rSVBmXS7GSheU7XeQ4P39wJo2tYxtZMlH6vqa0g.PNG/%E5%86%85%E5%AD%98%E6%B8%85%E5%BF%83%E5%92%92.png',
    faction: RS_FACTION.NIGHT_CHAINS,
    earnsPath: [
      {
        desc: "'청명이문록'-이벤트 상점",
        tags: [],
      },
      {
        desc: '청명 데이터 센터 철도관리국 현상금 임무',
        tags: ['현상금 임무'],
        map: '청명 데이터 센터',
      },
      {
        desc: '흑월 상점',
        tags: ['흑월 상점'],
      },
      {
        desc: '철도 주변의 베툴라 부표-더스트 리자드',
        tags: ['부표'],
      },
      {
        desc: '철도 주변의 베툴라 부표-암흑의 매머드',
        tags: ['부표'],
      },
      {
        desc: '철도 주변의 베툴라 부표-혼란의 돌산호',
        tags: ['부표'],
      },
    ],
  },
  '번개 에너지 부적': {
    type: RSEquipmentType.WEAPON,
    grade: RS_GRADE.SSR,
    desc: '기본 속성: 공격력+40\n옵션: 전투 시작 시 무작위로 카드 1장을 버리고 모든 아군이 입히는 전자기 피해가 10% 증가합니다.(중첩 가능)',
    thumbnail:
      'https://nng-phinf.pstatic.net/MjAyNTAyMTJfMTQg/MDAxNzM5MzQyOTA0Mjg4.OFDzY9bFl7I4FGRUeL2oxo7mSzHqx5Ia4Y30tIpQEHcg.bGdHANqe_c-L9Iqdyc-tNr7kvcO-xNCQr-LRFErh0oog.PNG/%E4%BA%94%E9%9B%B7%E4%BE%9B%E7%94%B5%E7%AC%A6.png',
    faction: RS_FACTION.NIGHT_CHAINS,
    earnsPath: [
      {
        desc: "'청명이문록'-이벤트 상점",
        tags: [],
      },
      {
        desc: '청명 데이터 센터 철도관리국 현상금 임무',
        tags: ['현상금 임무'],
        map: '청명 데이터 센터',
      },
      {
        desc: '흑월 상점',
        tags: ['흑월 상점'],
      },
      {
        desc: '철도 주변의 베툴라 부표-더스트 리자드',
        tags: ['부표'],
      },
      {
        desc: '철도 주변의 베툴라 부표-암흑의 매머드',
        tags: ['부표'],
      },
      {
        desc: '철도 주변의 베툴라 부표-혼란의 돌산호',
        tags: ['부표'],
      },
    ],
  },
  '창위의 약탈자': {
    type: RSEquipmentType.ACCESSORY,
    grade: RS_GRADE.SR,
    desc: '기본 속성: 체력+3024\n옵션: [리더 스킬]사용 시 [드론]의 지원을 받습니다.',
    thumbnail:
      'https://nng-phinf.pstatic.net/MjAyNTAyMDdfNTUg/MDAxNzM4OTIwNDQ5MzM2.f_YrGg-dG7wVHzSgTBDazGcPJ7ppaH5dYh41kM0iZO8g.9wi5KWXEC1GZNMr1xRgv-cMouqNJGFLL5MOqhYZjk0wg.PNG/%E2%80%9C%E5%9B%9B%E7%BF%BC%E5%A6%96%E9%BE%99%E2%80%9D%E7%8B%99%E5%87%BB%E6%97%A0%E4%BA%BA%E6%9C%BA.png',
    faction: RS_FACTION.NIGHT_CHAINS,
    earnsPath: [
      {
        desc: '청명 데이터 센터 철도관리국 현상금 임무',
        tags: ['현상금 임무'],
        map: '청명 데이터 센터',
      },
      {
        desc: '흑월 상점',
        tags: ['흑월 상점'],
      },
      {
        desc: '철도 주변의 베툴라 부표-더스트 리자드',
        tags: ['부표'],
      },
      {
        desc: '철도 주변의 베툴라 부표-암흑의 매머드',
        tags: ['부표'],
      },
      {
        desc: '철도 주변의 베툴라 부표-혼란의 돌산호',
        tags: ['부표'],
      },
    ],
  },
  '열광학 위장 장치': {
    type: RSEquipmentType.ARMOR,
    grade: RS_GRADE.SR,
    desc: '기본 속성: 방어력+30\n옵션: 자신의 체력이 30% 이하일 때, 5초간 [은신]합니다.(1회 한정)',
    thumbnail:
      'https://nng-phinf.pstatic.net/MjAyNTAyMDdfMTcy/MDAxNzM4OTIwMzE1MTY3.bujH87jrnn7ABUVcg5W8c1YV1DHrPy86l1K7klLMy_wg.BogKkYeXwZsIlkPxAwa6ND09kOdN5b6TmxkSFLzquEIg.PNG/%E7%83%AD%E5%85%89%E5%AD%A6%E8%BF%B7%E5%BD%A9.png',
    faction: RS_FACTION.NIGHT_CHAINS,
    earnsPath: [
      {
        desc: '청명 데이터 센터 철도관리국 현상금 임무',
        tags: ['현상금 임무'],
        map: '청명 데이터 센터',
      },
      {
        desc: '흑월 상점',
        tags: ['흑월 상점'],
      },
      {
        desc: '철도 주변의 베툴라 부표-더스트 리자드',
        tags: ['부표'],
      },
      {
        desc: '철도 주변의 베툴라 부표-암흑의 매머드',
        tags: ['부표'],
      },
      {
        desc: '철도 주변의 베툴라 부표-혼란의 돌산호',
        tags: ['부표'],
      },
    ],
  },
  청산: {
    type: RSEquipmentType.WEAPON,
    grade: RS_GRADE.SR,
    desc: '기본 속성: 공격력+29\n옵션:자신이 부여하는 [열상]의 지속 시간이 2초 증가합니다(중첩 가능)',
    thumbnail:
      'https://nng-phinf.pstatic.net/MjAyNTAyMDdfMTU2/MDAxNzM4OTIwMTE0MjA3._hiktkO3NNNlcvnmpEe-TiSx4NCDMRubz1KUp-hRHTwg.VeyZGPVlA2tM-3WD-NmJuHnlRbSNeoyo65BIVGLtEZEg.PNG/%E2%80%9C%E6%B8%85%E7%AE%97%E2%80%9D%E6%89%8B%E6%9D%96%E5%89%91.png',
    faction: RS_FACTION.NIGHT_CHAINS,
    earnsPath: [
      {
        desc: '청명 데이터 센터 철도관리국 현상금 임무',
        tags: ['현상금 임무'],
        map: '청명 데이터 센터',
      },
      {
        desc: '흑월 상점',
        tags: ['흑월 상점'],
      },
      {
        desc: '철도 주변의 베툴라 부표-더스트 리자드',
        tags: ['부표'],
      },
      {
        desc: '철도 주변의 베툴라 부표-암흑의 매머드',
        tags: ['부표'],
      },
      {
        desc: '철도 주변의 베툴라 부표-혼란의 돌산호',
        tags: ['부표'],
      },
    ],
  },
  '범죄의 증거': {
    type: RSEquipmentType.WEAPON,
    grade: RS_GRADE.SR,
    desc: '기본 속성: 공격력+30\n옵션:자신이 부여하는 중상의 지속시간이 2초 증가합니다.(중첩 가능)',
    thumbnail:
      'https://nng-phinf.pstatic.net/MjAyNTAyMDdfMjEx/MDAxNzM4OTE5ODkwNzc1.fl2WOL6cPwTBeR71wUbnrzhQcMIeCs_mfsb_GrzZQ0og.oKMvergBz9PVnO1nqfz6f3p6Zw46UoDl151DAxGGZ90g.PNG/%E2%80%9C%E7%BD%AA%E8%AF%81%E2%80%9D%E6%8A%98%E5%8F%A0%E7%8B%99%E5%87%BB%E6%AD%A5%E6%9E%AA.png',
    faction: RS_FACTION.NIGHT_CHAINS,
    earnsPath: [
      {
        desc: '청명 데이터 센터 철도관리국 현상금 임무',
        tags: ['현상금 임무'],
        map: '청명 데이터 센터',
      },
      {
        desc: '흑월 상점',
        tags: ['흑월 상점'],
      },
      {
        desc: '철도 주변의 베툴라 부표-더스트 리자드',
        tags: ['부표'],
      },
      {
        desc: '철도 주변의 베툴라 부표-암흑의 매머드',
        tags: ['부표'],
      },
      {
        desc: '철도 주변의 베툴라 부표-혼란의 돌산호',
        tags: ['부표'],
      },
    ],
  },
  '흑월 연막탄': {
    type: RSEquipmentType.ACCESSORY,
    grade: RS_GRADE.R,
    desc: '기본 속성: 체력+2413\n옵션: 전투 시작 시 2초간[은신]합니다.(중첩 가능)',
    thumbnail:
      'https://nng-phinf.pstatic.net/MjAyNTAyMDdfMTQy/MDAxNzM4OTE5NDM4MDEw.BK67ZFPU9Tn2YB_yNGxHq0OJ2uKLW_AVSDxZWh0riN8g.EjFS5FNM4Qj2cbmNoxaj-ulOFGvv6EWj9kYYE6CeceYg.PNG/%E9%BB%91%E6%9C%88%E7%83%9F%E9%9B%BE%E5%BC%B9.png',
    faction: RS_FACTION.NIGHT_CHAINS,
    earnsPath: [
      {
        desc: '청명 데이터 센터 철도관리국 현상금 임무',
        tags: ['현상금 임무'],
        map: '청명 데이터 센터',
      },
      {
        desc: '흑월 상점',
        tags: ['흑월 상점'],
      },
      {
        desc: '철도 주변의 베툴라 부표-더스트 리자드',
        tags: ['부표'],
      },
      {
        desc: '철도 주변의 베툴라 부표-암흑의 매머드',
        tags: ['부표'],
      },
      {
        desc: '철도 주변의 베툴라 부표-혼란의 돌산호',
        tags: ['부표'],
      },
    ],
  },
  '케블라 수트': {
    type: RSEquipmentType.ARMOR,
    grade: RS_GRADE.R,
    desc: '기본 속성: 방어력+24\n옵션: 자신의 [은신] 상태 해제 시 체력을 3% 회복합니다.(중첩\n가능)',
    thumbnail:
      'https://nng-phinf.pstatic.net/MjAyNTAyMDdfMTA3/MDAxNzM4OTE5MjI1MTkz.MpOTWq_4k0AoUTsjvm3duqHdsQkIszMah3TocFvFL6Ug.DbhB50Lylea_fzAfF9k2BOXpHzH9O0JCo7R7Tvle5xUg.PNG/%E8%A5%BF%E8%A3%85%E5%87%AF%E5%A4%AB%E6%8B%89.png',
    faction: RS_FACTION.NIGHT_CHAINS,
    earnsPath: [
      {
        desc: '청명 데이터 센터 철도관리국 현상금 임무',
        tags: ['현상금 임무'],
        map: '청명 데이터 센터',
      },
      {
        desc: '흑월 상점',
        tags: ['흑월 상점'],
      },
      {
        desc: '철도 주변의 베툴라 부표-더스트 리자드',
        tags: ['부표'],
      },
      {
        desc: '철도 주변의 베툴라 부표-암흑의 매머드',
        tags: ['부표'],
      },
      {
        desc: '철도 주변의 베툴라 부표-혼란의 돌산호',
        tags: ['부표'],
      },
    ],
  },
  '어장 단검': {
    type: RSEquipmentType.WEAPON,
    grade: RS_GRADE.R,
    desc: '기본 속성: 공격력+24\n옵션: 자신이 부여하는 [열상]의 피해가 15% 증가합니다.(중첩 가능)',
    thumbnail:
      'https://nng-phinf.pstatic.net/MjAyNTAyMDdfMTE4/MDAxNzM4OTE4Nzk3MTIx.QQipiwXq9MUC18Xwg1-d9w4iKKWh7HU57sKUwjtW8hcg.vxM6z8D-UmqY-LUim6BBXTBaVVoancKHtq44TIPHzqgg.PNG/%E9%B1%BC%E8%82%A0%E7%9F%AD%E5%88%80.png',
    faction: RS_FACTION.NIGHT_CHAINS,
    earnsPath: [
      {
        desc: '청명 데이터 센터 철도관리국 현상금 임무',
        tags: ['현상금 임무'],
        map: '청명 데이터 센터',
      },
      {
        desc: '흑월 상점',
        tags: ['흑월 상점'],
      },
      {
        desc: '철도 주변의 베툴라 부표-더스트 리자드',
        tags: ['부표'],
      },
      {
        desc: '철도 주변의 베툴라 부표-암흑의 매머드',
        tags: ['부표'],
      },
      {
        desc: '철도 주변의 베툴라 부표-혼란의 돌산호',
        tags: ['부표'],
      },
    ],
  },
  '흑월 독화살': {
    type: RSEquipmentType.WEAPON,
    grade: RS_GRADE.R,
    desc: '기본 속성: 공격력 + 40\n옵션: 자신이 입히는 [화상]의 피해가 15% 증가합니다.(중첩 가능)',
    thumbnail:
      'https://nng-phinf.pstatic.net/MjAyNTAyMDdfNDAg/MDAxNzM4OTE3Njg2Nzkz.m5XQEl0nQTpm_IrTK68hhEpdEAS_USgfIDrnoeop9l0g.5VT_AuZsCWZ7BnOpSz1BUYjlS4lgQt32LHEoDaVw8Lgg.PNG/%E9%BB%91%E6%9C%88%E6%AF%92%E9%95%96.png',
    faction: RS_FACTION.NIGHT_CHAINS,
    earnsPath: [
      {
        desc: '청명 데이터 센터 철도관리국 현상금 임무',
        tags: ['현상금 임무'],
        map: '청명 데이터 센터',
      },
      {
        desc: '흑월 상점',
        tags: ['흑월 상점'],
      },
      {
        desc: '철도 주변의 베툴라 부표-더스트 리자드',
        tags: ['부표'],
      },
      {
        desc: '철도 주변의 베툴라 부표-암흑의 매머드',
        tags: ['부표'],
      },
      {
        desc: '철도 주변의 베툴라 부표-혼란의 돌산호',
        tags: ['부표'],
      },
    ],
  },
  공간이동: {
    type: RSEquipmentType.ARMOR,
    grade: RS_GRADE.UR,
    desc: '기본 속성: 방어력+49\n옵션: 적 아군 상관없이 [인뢰] 발동 시 자신의 체력을 0.4% 회복합니다.',
    thumbnail:
      'https://nng-phinf.pstatic.net/MjAyNTAyMjFfMzgg/MDAxNzQwMTIyODkyNTk0.7cZ-1k0660HUNXfW0ZlAkcRVkeK-kJJEct9fPJIeWPMg.PHJb6HlnE8V9WHixG27J0dMoL_U2mEwrOtvY6JEAQ4wg.PNG/%E9%94%99%E5%B3%B0%E5%87%BA%E8%A1%8C.png',
    faction: RS_FACTION.GARDENERS,
    earnsPath: [
      {
        desc: '철도연맹 수행 뱃지 교환 상점',
        tags: ['교환 상점'],
      },
    ],
  },
  '이차 상전이': {
    type: RSEquipmentType.WEAPON,
    grade: RS_GRADE.UR,
    desc: '기본 속성: 공격력+48\n옵션: 자신의 비용이 3 이하인 [인뢰] 키워드를 가진 카드를 사용할 때마다 자신의 [인뢰] 발동 확률이 2% 증가합니다.(중첩 가능)',
    thumbnail:
      'https://nng-phinf.pstatic.net/MjAyNTAyMjFfMTI4/MDAxNzQwMTIyNDU0ODY0.1FFzN6fyn4lm7R1mmBqQPeByTlMziGfw6ExkdRIDX0Ig.dNSqJgONVRRsWQw40RfD9xjmL7tUqK7a5_lkJD6LHYUg.PNG/%E4%BA%8C%E7%BA%A7%E7%9B%B8%E5%8F%98.png',
    faction: RS_FACTION.GARDENERS,
    earnsPath: [
      {
        desc: '아니타 에너지 연구소-니콜라-교환',
        tags: [],
        map: '아니타 에너지 연구소',
      },
    ],
  },
  '공간 위치 측정기': {
    type: RSEquipmentType.WEAPON,
    grade: RS_GRADE.UR,
    desc: '기본 속성: 공격력+45\n옵션: 전투 시작 시, 자신의 필살기를 우선으로 카드를 1장 뽑습니다.',
    thumbnail:
      'https://nng-phinf.pstatic.net/MjAyNTAyMDhfMjE4/MDAxNzM5MDAzMDQ4Njgy.wz7wbNvBL8FzGmZ0CaW7NjxuJNylruigHENvgj0SCmUg.w7WhK-CicD2skUmH2howWXyhm77yVYMs7LoJrzg0eIsg.PNG/%E7%A9%BA%E9%97%B4%E5%88%87%E7%BA%BF.png',
    faction: RS_FACTION.GARDENERS,
    earnsPath: [
      {
        desc: '아니타 발사 센터 명성 15레벨 보상',
        tags: [],
        map: '아니타 발사 센터',
      },
    ],
  },
  '방출 코드 생성기': {
    type: RSEquipmentType.WEAPON,
    grade: RS_GRADE.UR,
    desc: '기본 속성: 공격력+47\n옵션: [리더스킬] 사용 후, 다음 내는 퍼플카드의 피해가 50% 증가합니다.',
    thumbnail:
      'https://nng-phinf.pstatic.net/MjAyNTAyMDhfNDMg/MDAxNzM5MDAyOTU2Nzc0.XDEDnsLuoyIgP5AZIEGtcrksCijMbNlIJFePndDqgz8g.R_PygI1zBKktB_BChmqafrFd3ex-hKtfzXgokAkFilAg.PNG/%E6%94%BE%E9%80%90%E4%BB%A3%E7%A0%81.png',
    faction: RS_FACTION.GARDENERS,
    earnsPath: [
      {
        desc: '자유 무역항-7 도시명성 15레벨 보상',
        tags: [],
        map: '자유 무역항-7',
      },
    ],
  },
  반엔트로피: {
    type: RSEquipmentType.WEAPON,
    grade: RS_GRADE.SSR,
    desc: '기본 속성: 공격력+40\n옵션: 자신이 입히는 [냉동]과 [동결]의 지속 시간이 2초 증가합니다.(중첩 가능)',
    thumbnail:
      'https://nng-phinf.pstatic.net/MjAyNTAyMDhfMzYg/MDAxNzM5MDAyMzY0MTA0.aaVcTdgMVbypKQHg-BCeBU5aoYj3oR_QmBb99MjcRdQg.LO0xlFPVVDKBw2hdo-xMAmzbs80JLimF6p8o1Rhoup0g.PNG/%E9%80%86%E7%86%B5%E4%B8%A5%E5%86%AC.png',
    faction: RS_FACTION.GARDENERS,
    earnsPath: [
      {
        desc: '자유 무역항-7 철도관리국 현상금 임무',
        tags: ['현상금 임무'],
        map: '자유 무역항-7',
      },
      {
        desc: '흑월 상점',
        tags: ['흑월 상점'],
      },
      {
        desc: '철도 주변의 베툴라 부표-블리자드 기포체',
        tags: ['부표'],
      },
      {
        desc: '철도 주변의 베툴라 부표-빙하 본드래곤',
        tags: ['부표'],
      },
    ],
  },
  '라바 파이어': {
    type: RSEquipmentType.WEAPON,
    grade: RS_GRADE.SSR,
    desc: '기본 속성: 공격력+38\n옵션: 자신이 입히는 [점화], [작열], [광염]의 지속시간이 2초 증가합니다.(중첩 가능)',
    thumbnail:
      'https://nng-phinf.pstatic.net/MjAyNTAyMDhfMTc0/MDAxNzM5MDAyMjY4MTY3.ODYV1UmGwfRBjNLZy7yZF0vv7AAypYxMh2IBsohaXuog.pOpm7DyWiXEl2bI1HsqHVG1s6XMWQlatpr3mD0R_NBcg.PNG/%E6%B4%BB%E7%81%AB%E7%86%94%E5%B2%A9.png',
    faction: RS_FACTION.GARDENERS,
    earnsPath: [
      {
        desc: '자유 무역항-7 철도관리국 현상금 임무',
        tags: ['현상금 임무'],
        map: '자유 무역항-7',
      },
      {
        desc: '흑월 상점',
        tags: ['흑월 상점'],
      },
      {
        desc: '철도 주변의 베툴라 부표-블리자드 기포체',
        tags: ['부표'],
      },
      {
        desc: '철도 주변의 베툴라 부표-빙하 본드래곤',
        tags: ['부표'],
      },
    ],
  },
  뫼비우스: {
    type: RSEquipmentType.ACCESSORY,
    grade: RS_GRADE.SSR,
    desc: '기본 속성: 체력+4026\n옵션: 손패 보충 쿨타임이 0.25초 감소합니다.(중첩 가능)',
    thumbnail:
      'https://nng-phinf.pstatic.net/MjAyNTAyMDhfMTA1/MDAxNzM5MDAyMjE0MTM5.6fZVX9VZEDogolK-fQ6oKUVOH5NnBpiN_Al7QMfZMcog.gYWshtnxzzHdglzHEN4PqRiR5gDOthtQxSnjvxL6CaYg.PNG/%E8%8E%AB%E6%AF%94%E4%B9%8C%E6%96%AF.png',
    faction: RS_FACTION.GARDENERS,
    earnsPath: [
      {
        desc: '자유 무역항-7 철도관리국 현상금 임무',
        tags: ['현상금 임무'],
        map: '자유 무역항-7',
      },
      {
        desc: '흑월 상점',
        tags: ['흑월 상점'],
      },
      {
        desc: '철도 주변의 베툴라 부표-블리자드 기포체',
        tags: ['부표'],
      },
      {
        desc: '철도 주변의 베툴라 부표-빙하 본드래곤',
        tags: ['부표'],
      },
    ],
  },
  '모노폴 마그네타': {
    type: RSEquipmentType.ACCESSORY,
    grade: RS_GRADE.SSR,
    desc: '기본 속성: 체력+3791\n옵션: 자신의 [드론]의 지속 시간이 2초 증가합니다.(중첩 가능)',
    thumbnail:
      'https://nng-phinf.pstatic.net/MjAyNTAyMDhfMjk3/MDAxNzM5MDAyMDEyNDkz.0JC2Lfwbj_0iMu5qObV5yMj9VEjH6YwZNVxYYikH8lwg.FrcXc37-xRbAYhpe5iyS9NMh9Wn6tPana4UaMWAdl5gg.PNG/%E5%8D%95%E6%9E%81%E7%A3%81%E6%80%A7.png',
    faction: RS_FACTION.GARDENERS,
    earnsPath: [
      {
        desc: '자유 무역항-7 철도관리국 현상금 임무',
        tags: ['현상금 임무'],
        map: '자유 무역항-7',
      },
      {
        desc: '흑월 상점',
        tags: ['흑월 상점'],
      },
      {
        desc: '철도 주변의 베툴라 부표-블리자드 기포체',
        tags: ['부표'],
      },
      {
        desc: '철도 주변의 베툴라 부표-빙하 본드래곤',
        tags: ['부표'],
      },
    ],
  },
  '시뮬레이트 스타': {
    type: RSEquipmentType.ARMOR,
    grade: RS_GRADE.SSR,
    desc: '기본 속성: 방어력+37\n옵션: [리더스킬] 사용 시, 자신의 체력을 5% 회복합니다.(중첩 가능)',
    thumbnail:
      'https://nng-phinf.pstatic.net/MjAyNTAyMDhfMjc0/MDAxNzM5MDAxOTI1Mzgx.V9YhHqMBikl9-2dYLbqK5kg0IW4F4KzMXoPHeUeO7Hgg.gTY9LD52DyUk46T8FQu8cQZFFzyUjKQO5QP5jPuNcOcg.PNG/%E6%A8%A1%E6%8B%9F%E6%98%9F%E8%BE%B0.png',
    faction: RS_FACTION.GARDENERS,
    earnsPath: [
      {
        desc: '자유 무역항-7 철도관리국 현상금 임무',
        tags: ['현상금 임무'],
        map: '자유 무역항-7',
      },
      {
        desc: '흑월 상점',
        tags: ['흑월 상점'],
      },
      {
        desc: '철도 주변의 베툴라 부표-블리자드 기포체',
        tags: ['부표'],
      },
      {
        desc: '철도 주변의 베툴라 부표-빙하 본드래곤',
        tags: ['부표'],
      },
    ],
  },
  '공명체 섬유': {
    type: RSEquipmentType.ARMOR,
    grade: RS_GRADE.SR,
    desc: '기본 속성: 방어력+29\n옵션: 자신의 스킬 카드 사용 시 자신의 체력을 2% 회복합니다.',
    thumbnail:
      'https://nng-phinf.pstatic.net/MjAyNTAyMDhfMjc3/MDAxNzM5MDAxNTA4MDUy.-fbk-ZbsjquLbnkxAbMyjd69rH_WSGI1pHywVtJwwq4g.3DKcCHTKe87IxDWzeZgA18bwhYZUOzSVx589QBa4a3cg.PNG/%E5%85%B1%E6%8C%AF%E4%BD%93%E7%BA%A4%E7%BB%B4.png',
    faction: RS_FACTION.GARDENERS,
    earnsPath: [
      {
        desc: '자유 무역항-7 철도관리국 임무',
        tags: [],
        map: '자유 무역항-7',
      },
      {
        desc: '에너지 연구소 작전 계획',
        tags: ['작전 계획'],
      },
      {
        desc: '흑월 상점',
        tags: ['흑월 상점'],
      },
      {
        desc: '철도 주변의 베툴라 부표-블리자드 기포체',
        tags: ['부표'],
      },
      {
        desc: '철도 주변의 베툴라 부표-빙하 본드래곤',
        tags: ['부표'],
      },
    ],
  },
  "'극좌표' 지휘 드론": {
    type: RSEquipmentType.ACCESSORY,
    grade: RS_GRADE.SR,
    desc: `기본 속성: 체력+3005\n옵션: 자신의 [드론] 키워드를 가진 카드가 입히는 피해가 20%증가합니다.(중첩 가능)`,
    thumbnail:
      'https://nng-phinf.pstatic.net/MjAyNTAyMDhfNTMg/MDAxNzM5MDAxNDI2MDAx.HbL5cUqE8hWVCrRq5sV6rmj8xV-ehhtV6OJfOLfD5vkg.4nPpn-nC5hsf0NE8lLqFmt61_Gm4aC7APsXupbA2ttcg.PNG/%E2%80%9C%E6%9E%81%E5%9D%90%E6%A0%87%E2%80%9D%E6%8C%87%E6%8C%A5%E6%97%A0%E4%BA%BA%E6%9C%BA.png',
    faction: RS_FACTION.GARDENERS,
    earnsPath: [
      {
        desc: '자유 무역항-7 철도관리국 임무',
        map: '자유 무역항-7',
        tags: [],
      },
      {
        desc: '에너지 연구소 작전 계획',
        tags: ['작전 계획'],
      },
      {
        desc: '흑월 상점',
        tags: ['흑월 상점'],
      },
      {
        desc: '철도 주변의 베툴라 부표-블리자드 기포체',
        tags: ['부표'],
      },
      {
        desc: '철도 주변의 베툴라 부표-빙하 본드래곤',
        tags: ['부표'],
      },
    ],
  },
  '번개 소환 권선기MK1': {
    type: RSEquipmentType.WEAPON,
    grade: RS_GRADE.SR,
    desc: '기본 속성: 공격력+30\n옵션: 자신이 부여하는 [인뢰]의 발동 확률이 8% 증가합니다.(중첩 가능)',
    thumbnail:
      'https://nng-phinf.pstatic.net/MjAyNTAyMDhfMjc3/MDAxNzM5MDAxMzM5ODQ5.Hb_sjot1VmZ601-0A0m6W1QW86dg6M7tycszNBtffxwg.wXSplIc9-3GHWG-5G8_vAwxImjrlB8lImdf3pPwjuQ8g.PNG/%E5%94%A4%E9%9B%B7%E7%BA%BF%E5%9C%88MK1.png',
    faction: RS_FACTION.GARDENERS,
    earnsPath: [
      {
        desc: '자유 무역항-7 철도관리국 임무',
        tags: [],
        map: '자유 무역항-7',
      },
      {
        desc: '에너지 연구소 작전 계획',
        tags: ['작전 계획'],
      },
      {
        desc: '흑월 상점',
        tags: ['흑월 상점'],
      },
      {
        desc: '철도 주변의 베툴라 부표-블리자드 기포체',
        tags: ['부표'],
      },
      {
        desc: '철도 주변의 베툴라 부표-빙하 본드래곤',
        tags: ['부표'],
      },
    ],
  },
  에비서레이터MK0: {
    type: RSEquipmentType.WEAPON,
    grade: RS_GRADE.SR,
    desc: '기본 속성: 공격력+30\n옵션: [리더 스킬] 사용 시 비용을 0.4 얻습니다.(중첩 가능)',
    thumbnail:
      'https://nng-phinf.pstatic.net/MjAyNTAyMDhfMjIg/MDAxNzM5MDAxMTY2Mzk4.dh4EWysAOPTnArXpkpC-8oE7Pxm2_sGBSKa73rejUCwg.RgZEwmiutzlq5bO9wSa7vmI8cX5NCIgfwjFWCPI15Ysg.PNG/%E5%86%85%E8%84%8F%E9%87%87%E9%9B%86%E5%99%A8MK0.png',
    faction: RS_FACTION.GARDENERS,
    earnsPath: [
      {
        desc: '자유 무역항-7 철도관리국 임무',
        tags: [],
        map: '자유 무역항-7',
      },
      {
        desc: '에너지 연구소 작전 계획',
        tags: ['작전 계획'],
      },
      {
        desc: '흑월 상점',
        tags: ['흑월 상점'],
      },
      {
        desc: '철도 주변의 베툴라 부표-블리자드 기포체',
        tags: ['부표'],
      },
      {
        desc: '철도 주변의 베툴라 부표-빙하 본드래곤',
        tags: ['부표'],
      },
    ],
  },
  'A77 우주 비행 권총': {
    type: RSEquipmentType.WEAPON,
    grade: RS_GRADE.R,
    desc: '기본 속성: 공격력+24\n옵션: [레드카드]를 사용할 때마다 자신의 [일반 공격] 속도가 5% 증가합니다.(최대100%)',
    thumbnail:
      'https://nng-phinf.pstatic.net/MjAyNTAyMDhfMTA0/MDAxNzM5MDAwOTY5MDQ5.DyVnS23vQEqF28MPkLac7J3519T-aeCLoswbyiO_v-4g.kY9LxmWdpqeMh6vBsvkYLp4SE6MBzWLEhzUvebdWMygg.PNG/A77%E5%BC%8F%E8%88%AA%E5%A4%A9%E6%89%8B%E6%9E%AA.png',
    faction: RS_FACTION.GARDENERS,
    earnsPath: [
      {
        desc: '자유 무역항-7 철도관리국 임무',
        tags: [],
        map: '자유 무역항-7',
      },
      {
        desc: '에너지 연구소 작전 계획',
        tags: ['작전 계획'],
      },
      {
        desc: '흑월 상점',
        tags: ['흑월 상점'],
      },
      {
        desc: '철도 주변의 베툴라 부표-블리자드 기포체',
        tags: ['부표'],
      },
      {
        desc: '철도 주변의 베툴라 부표-빙하 본드래곤',
        tags: ['부표'],
      },
    ],
  },
  '다용도 오프너': {
    type: RSEquipmentType.WEAPON,
    grade: RS_GRADE.R,
    desc: '기본 속성: 공격력+23\n옵션: 자신의 [레드카드]를 사용할 때마다 공격력이 0.5% 증가합니다.(중첩 가능)',
    thumbnail:
      'https://nng-phinf.pstatic.net/MjAyNTAyMDhfNjYg/MDAxNzM5MDAwODc0OTgy.lE--6T5PEkM52OtrvqRcCRxxfwcp-lilmJqWOrtFYXog.13KnIN5qazqKA44ALODnldYnhEXJQPgjp1uSx-S8168g.PNG/%E4%B8%87%E7%94%A8%E8%B5%B7%E5%AD%90.png',
    faction: RS_FACTION.GARDENERS,
    earnsPath: [
      {
        desc: '자유 무역항-7 철도관리국 임무',
        tags: [],
        map: '자유 무역항-7',
      },
      {
        desc: '에너지 연구소 작전 계획',
        tags: ['작전 계획'],
      },
      {
        desc: '흑월 상점',
        tags: ['흑월 상점'],
      },
      {
        desc: '철도 주변의 베툴라 부표-블리자드 기포체',
        tags: ['부표'],
      },
      {
        desc: '철도 주변의 베툴라 부표-빙하 본드래곤',
        tags: ['부표'],
      },
    ],
  },
  '비금속 도금 재료': {
    type: RSEquipmentType.ARMOR,
    grade: RS_GRADE.R,
    desc: '기본 속성: 방어력+24\n옵션: 자신의 [블루카드]를 사용할 때마다 방어력이 0.5% 증가합니다.(중첩 가능)',
    thumbnail:
      'https://nng-phinf.pstatic.net/MjAyNTAyMDhfMTM5/MDAxNzM5MDAwNzE3MTUy._JDF41Vk7aNB3i9yTmhpb3MSGntRepefFcpyEvV3yOog.O2oTTLoWVnbqkqMF2H8Lkz8yN2RlCj4T6rWx-Ctssowg.PNG/%E9%9D%9E%E9%87%91%E5%B1%9E%E6%9D%90%E6%96%99%E9%95%80%E5%B1%82.png',
    faction: RS_FACTION.GARDENERS,
    earnsPath: [
      {
        desc: '자유 무역항-7 철도관리국 임무',
        tags: [],
        map: '자유 무역항-7',
      },
      {
        desc: '에너지 연구소 작전 계획',
        tags: ['작전 계획'],
      },
      {
        desc: '흑월 상점',
        tags: ['흑월 상점'],
      },
      {
        desc: '철도 주변의 베툴라 부표-블리자드 기포체',
        tags: ['부표'],
      },
      {
        desc: '철도 주변의 베툴라 부표-빙하 본드래곤',
        tags: ['부표'],
      },
    ],
  },
  제세동기: {
    type: RSEquipmentType.ACCESSORY,
    grade: RS_GRADE.R,
    desc: '기본 속성: 체력+2355\n옵션: 자신이 입히는 [인뢰], [낙뢰], [우레]와 [천둥]의 낙뢰 피해가 15% 증가합니다.(중첩 가능)',
    thumbnail:
      'https://nng-phinf.pstatic.net/MjAyNTAyMDhfMjcw/MDAxNzM5MDAwNDQ4MTU5._KN4eMfHbDgUcuUQdInlKt7E3EJ99u_6GruTl-8CYWgg.X0G3hw7koNBBinRYdgA-y4sCf0ZGn_SiB2z1xIkxef4g.PNG/%E4%BE%BF%E6%90%BA%E9%99%A4%E9%A2%A4%E5%99%A8.png',
    faction: RS_FACTION.GARDENERS,
    earnsPath: [
      {
        desc: '자유 무역항-7 철도관리국 임무',
        tags: [],
        map: '자유 무역항-7',
      },
      {
        desc: '에너지 연구소 작전 계획',
        tags: ['작전 계획'],
      },
      {
        desc: '흑월 상점',
        tags: ['흑월 상점'],
      },
      {
        desc: '철도 주변의 베툴라 부표-블리자드 기포체',
        tags: ['부표'],
      },
      {
        desc: '철도 주변의 베툴라 부표-빙하 본드래곤',
        tags: ['부표'],
      },
    ],
  },
  '베타 세계선 박스': {
    type: RSEquipmentType.ACCESSORY,
    grade: RS_GRADE.UR,
    desc: '기본 속성: 체력+4200\n옵션: 1웨이브의 적을 만날 때마다 자신의 스킬 카드를 우선으로 카드를 1장 뽑습니다.',
    thumbnail:
      'https://nng-phinf.pstatic.net/MjAyNTAyMDhfOTEg/MDAxNzM4OTk1MTI5OTE4.6t2vB2VcZ8da-rZjLkQy7DXcwpYP56bPK_aoOaUxMiog.PFDXeMH7GWdNZRgNkhoEA_BwJomI2nXmUmu0o3ZhnIIg.PNG/%CE%B2%E4%B8%96%E7%95%8C%E7%BA%BF%E4%B9%8B%E7%9B%92.png',
    faction: RS_FACTION.RAILWAY,
    earnsPath: [
      {
        desc: '열차장 출발 체크인 이벤트-7일차',
        tags: [],
      },
    ],
  },
  '자각몽 섬유': {
    type: RSEquipmentType.ARMOR,
    grade: RS_GRADE.UR,
    desc: '기본 속성: 방어력+49\n옵션: 자신의 [레드카드]가 입히는 피해의 2%만큼 자신의 체력을 회복합니다.',
    thumbnail:
      'https://nng-phinf.pstatic.net/MjAyNTAyMDhfMTE0/MDAxNzM4OTk1MDI2Njg1.uoz7O0-efQ1fwqGzPk0pprg2rT2XVjpVvezeteM7jFEg.p6zZdOiOS-5WaoY1mmQYbrF2VHxB1qBt8f8xN5yS04wg.PNG/%E6%B8%85%E9%86%92%E6%A2%A6%E7%BA%A4%E7%BB%B4.png',
    faction: RS_FACTION.RAILWAY,
    earnsPath: [
      {
        desc: '철도연맹 수행 뱃지 교환 상점',
        tags: ['교환 상점'],
      },
    ],
  },
  '핵 방사 무기': {
    type: RSEquipmentType.WEAPON,
    grade: RS_GRADE.UR,
    desc: '기본 속성: 공격력+46\n옵션: 적이 처치될 때마다 비용을 1 얻습니다.',
    thumbnail:
      'https://nng-phinf.pstatic.net/MjAyNTAyMDhfMTM3/MDAxNzM4OTk0OTIwNjY3.zYkBFphQ8sa9qBm1hfjJYkjbLdL0Nfn9ctXUNHe1g7Eg.bAMGbOt88sgPcbd4KR5z20widIrGciJZyYsClqwOYSEg.PNG/%E6%A0%B8%E5%AD%90%E8%BE%90%E5%B0%84.png',
    faction: RS_FACTION.RAILWAY,
    earnsPath: [
      {
        desc: '슈그리스 시 명성 15레벨 보상',
        tags: [],
      },
    ],
  },
  '리프팅 수술 장비': {
    type: RSEquipmentType.ACCESSORY,
    grade: RS_GRADE.SSR,
    desc: '기본 속성: 체력+3815\n옵션: 1웨이브의 적을 처치한 후 모든 아군이 체력을 8% 회복합니다.(중첩 가능)',
    thumbnail:
      'https://nng-phinf.pstatic.net/MjAyNTAyMDhfMTAz/MDAxNzM4OTk0NzU1NDQ3.CVFKRYwYGC-BoWAdcqB2WGn0x04AfwsLuylA-wuKJc8g.3Ame94dtPr41W6LgZG_FfdyS60e1s7hsPLciis2SMaUg.PNG/%E5%8D%87%E6%9E%84%E6%89%8B%E6%9C%AF%E5%99%A8.png',
    faction: RS_FACTION.RAILWAY,
    earnsPath: [
      {
        desc: '슈그리스시 - 철도관리국 임무',
        tags: [],
        map: '슈그리스시',
      },
      {
        desc: '맨더 광산 -  철도관리국 임무',
        tags: [],
        map: '맨더 광산',
      },
      {
        desc: '황원역 - 작전계획',
        tags: [],
        map: '황원역',
      },
      {
        desc: '흑월 상점',
        tags: ['흑월 상점'],
      },
      {
        desc: '철도 주변의 베툴라 부표-베인링 퀸',
        tags: ['부표'],
      },
      {
        desc: '철도 주변의 베툴라 부표-블리자드 기포체',
        tags: ['부표'],
      },
    ],
  },
  '흑석 아머': {
    type: RSEquipmentType.ARMOR,
    grade: RS_GRADE.SSR,
    desc: '기본 속성: 방어력+37\n옵션: 받는 최종 피해가 10% 감소합니다.(중첩 가능)',
    thumbnail:
      'https://nng-phinf.pstatic.net/MjAyNTAyMDhfMTQ0/MDAxNzM4OTk0NDgwNTA4.18odBZTo3QgkcDotj8JhhpRTqNNNN9-SGDmxaLKEVQEg.p1hbeEEH9yu4Zc7_AADELQ7UWfww8FwYbF92vlz9xNgg.PNG/%E9%BB%91%E7%9F%B3%E6%8A%A4%E7%94%B2%E7%BB%84.png',
    faction: RS_FACTION.RAILWAY,
    earnsPath: [
      {
        desc: '슈그리스시 - 철도관리국 임무',
        tags: [],
        map: '슈그리스시',
      },
      {
        desc: '맨더 광산 -  철도관리국 임무',
        tags: [],
        map: '맨더 광산',
      },
      {
        desc: '황원역 - 작전계획',
        tags: [],
        map: '황원역',
      },
      {
        desc: '흑월 상점',
        tags: ['흑월 상점'],
      },
      {
        desc: '철도 주변의 베툴라 부표-베인링 퀸',
        tags: ['부표'],
      },
      {
        desc: '철도 주변의 베툴라 부표-블리자드 기포체',
        tags: ['부표'],
      },
    ],
  },
  '타임라인 익스텐더': {
    type: RSEquipmentType.WEAPON,
    grade: RS_GRADE.SSR,
    desc: '기본 속성: 공격력+37\n옵션: [일반 공격]의 공격 속도가 25% 증가합니다.(중첩 가능)',
    thumbnail:
      'https://nng-phinf.pstatic.net/MjAyNTAyMDhfMjU5/MDAxNzM4OTk0NDAyMTkz.qbOD5wic0uF4br7GPBaK89w4zjBlOz7CumjTxVOnMMMg.KcsJCva95VQhoiRfU1lIbjGXALcS6unDF0lPKhetRPMg.PNG/%E5%BB%B6%E5%B1%95%E6%97%B6%E9%97%B4%E7%BA%BF.png',
    faction: RS_FACTION.RAILWAY,
    earnsPath: [
      {
        desc: '슈그리스시 - 철도관리국 임무',
        tags: [],
        map: '슈그리스시',
      },
      {
        desc: '맨더 광산 -  철도관리국 임무',
        tags: [],
        map: '맨더 광산',
      },
      {
        desc: '황원역 - 작전계획',
        tags: [],
        map: '황원역',
      },
      {
        desc: '흑월 상점',
        tags: ['흑월 상점'],
      },
      {
        desc: '철도 주변의 베툴라 부표-베인링 퀸',
        tags: ['부표'],
      },
      {
        desc: '철도 주변의 베툴라 부표-블리자드 기포체',
        tags: ['부표'],
      },
    ],
  },
  '축퇴 흑석': {
    type: RSEquipmentType.WEAPON,
    grade: RS_GRADE.SSR,
    desc: '기본 속성: 공격력+38\n옵션: 입히는 최종 피해가 10% 증가합니다.(중첩 가능)',
    thumbnail:
      'https://nng-phinf.pstatic.net/MjAyNTAyMDhfNzgg/MDAxNzM4OTk0MjQwNzgx.qrNj0jK42Ro2rJnOblTdWYrZMBqcITkX8DfWNnQCU9Ug.nT1CWutR2VDgB4zjrenytUvRT3cj-27RpMbKiEcpSKUg.PNG/%E7%AE%80%E5%B9%B6%E9%BB%91%E7%9F%B3.png',
    faction: RS_FACTION.RAILWAY,
    earnsPath: [
      {
        desc: '슈그리스시 - 철도관리국 임무',
        tags: [],
        map: '슈그리스시',
      },
      {
        desc: '맨더 광산 -  철도관리국 임무',
        tags: [],
        map: '맨더 광산',
      },
      {
        desc: '황원역 - 작전계획',
        tags: [],
        map: '황원역',
      },
      {
        desc: '흑월 상점',
        tags: ['흑월 상점'],
      },
      {
        desc: '철도 주변의 베툴라 부표-베인링 퀸',
        tags: ['부표'],
      },
      {
        desc: '철도 주변의 베툴라 부표-블리자드 기포체',
        tags: ['부표'],
      },
    ],
  },
  '동력식 회수 기계': {
    type: RSEquipmentType.ACCESSORY,
    grade: RS_GRADE.SR,
    desc: '기본 속성: 체력+3014\n옵션: 적을 처치할 때마다 비용을 0.4 얻습니다.(중첩 가능)',
    thumbnail:
      'https://nng-phinf.pstatic.net/MjAyNTAyMDhfMTk4/MDAxNzM4OTg2OTcwNDc2.GOJUzxmlyU3x8mUoS7hXIg5RjWPAwzIbcPoNQk9o9sYg.l273qEQ4Aqm0kCSOhbxyvIrTc0l1C2lKwtmNitcYyvMg.PNG/%E5%8A%A8%E8%83%BD%E5%9B%9E%E6%94%B6%E5%99%A8.png',
    faction: RS_FACTION.RAILWAY,
    earnsPath: [
      {
        desc: '슈그리스시 - 철도관리국 임무',
        tags: [],
        map: '슈그리스시',
      },
      {
        desc: '맨더 광산 -  철도관리국 임무',
        tags: [],
        map: '맨더 광산',
      },
      {
        desc: '황원역 - 작전계획',
        tags: [],
        map: '황원역',
      },
      {
        desc: '흑월 상점',
        tags: ['흑월 상점'],
      },
      {
        desc: '철도 주변의 베툴라 부표-베인링 퀸',
        tags: ['부표'],
      },
      {
        desc: '철도 주변의 베툴라 부표-블리자드 기포체',
        tags: ['부표'],
      },
    ],
  },
  '북부동맹 방어 섬유': {
    type: RSEquipmentType.ARMOR,
    grade: RS_GRADE.SR,
    desc: '기본 속성: 방어력+30\n옵션: 적을 처치할 때마다, 자신의 체력을 5%를 회복합니다.(중첩 가능)',
    thumbnail:
      'https://nng-phinf.pstatic.net/MjAyNTAyMDhfNzgg/MDAxNzM4OTg2ODk4Mjk3.CUdOXKobYSGP_lO2YTbJn_UZEd5H5mJPotXsdwKo09gg.Wmgy6Rtok9PducoErnCOGa2WbSvbHRf_YqSlJQtydQsg.PNG/%E5%8C%97%E9%98%B5%E9%98%B2%E5%BE%A1%E7%BA%A4%E7%BB%B4.png',
    faction: RS_FACTION.RAILWAY,
    earnsPath: [
      {
        desc: '슈그리스시 - 철도관리국 임무',
        tags: [],
        map: '슈그리스시',
      },
      {
        desc: '맨더 광산 -  철도관리국 임무',
        tags: [],
        map: '맨더 광산',
      },
      {
        desc: '황원역 - 작전계획',
        tags: [],
        map: '황원역',
      },
      {
        desc: '흑월 상점',
        tags: ['흑월 상점'],
      },
      {
        desc: '철도 주변의 베툴라 부표-베인링 퀸',
        tags: ['부표'],
      },
      {
        desc: '철도 주변의 베툴라 부표-블리자드 기포체',
        tags: ['부표'],
      },
    ],
  },
  '동력식 도끼': {
    type: RSEquipmentType.WEAPON,
    grade: RS_GRADE.SR,
    desc: '기본 속성: 공격력+32\n옵션: 적을 처치할 때마다 방어력이 1% 증가합니다.(중첩 가능)',
    thumbnail:
      'https://nng-phinf.pstatic.net/MjAyNTAyMDhfMjg1/MDAxNzM4OTg2ODAwNDI2.SaujwEv2LQt7MXPHUcdNoQyoz8cs5avbiGzFqPBI3Sog.-UECVg5BR4ZMzjP8rVeDCHNwqjFFjnerGA8odASMLZog.PNG/%E5%8A%A8%E5%8A%9B%E4%BC%90%E6%9C%A8%E6%96%A7.png',
    faction: RS_FACTION.RAILWAY,
    earnsPath: [
      {
        desc: '슈그리스시 - 철도관리국 임무',
        tags: [],
        map: '슈그리스시',
      },
      {
        desc: '맨더 광산 -  철도관리국 임무',
        tags: [],
        map: '맨더 광산',
      },
      {
        desc: '황원역 - 작전계획',
        tags: [],
        map: '황원역',
      },
      {
        desc: '흑월 상점',
        tags: ['흑월 상점'],
      },
      {
        desc: '철도 주변의 베툴라 부표-베인링 퀸',
        tags: ['부표'],
      },
      {
        desc: '철도 주변의 베툴라 부표-블리자드 기포체',
        tags: ['부표'],
      },
    ],
  },
  라이플총: {
    type: RSEquipmentType.WEAPON,
    grade: RS_GRADE.SR,
    desc: '기본 속성: 공격력+30\n옵션: 적을 처치할 때마다 공격력이 1% 증가합니다.(중첩 가능)',
    thumbnail:
      'https://nng-phinf.pstatic.net/MjAyNTAyMDhfMTMz/MDAxNzM4OTg2NjUwNjU5.En9B17sqa-WtD0mfehKbspHNPkAr0uHo-0azbEgE7tkg.JIh7bIP0oph3KyivOx2ioDZwhuZm92DYvImGU5JMHMQg.PNG/%E8%80%81%E5%85%B5%E6%AD%A5%E6%9E%AA.png',
    faction: RS_FACTION.RAILWAY,
    earnsPath: [
      {
        desc: '슈그리스시 - 철도관리국 임무',
        tags: [],
        map: '슈그리스시',
      },
      {
        desc: '맨더 광산 -  철도관리국 임무',
        tags: [],
        map: '맨더 광산',
      },
      {
        desc: '황원역 - 작전계획',
        tags: [],
        map: '황원역',
      },
      {
        desc: '흑월 상점',
        tags: ['흑월 상점'],
      },
      {
        desc: '철도 주변의 베툴라 부표-베인링 퀸',
        tags: ['부표'],
      },
      {
        desc: '철도 주변의 베툴라 부표-블리자드 기포체',
        tags: ['부표'],
      },
    ],
  },
  '파편 커버': {
    type: RSEquipmentType.ACCESSORY,
    grade: RS_GRADE.R,
    desc: '기본 속성: 체력+2347\n옵션: 자신의 [폭발물]이 입히는 피해가 10% 증가합니다.(중첩 가능)',
    thumbnail:
      'https://nng-phinf.pstatic.net/MjAyNTAyMDhfODMg/MDAxNzM4OTg2MTExMjMz.brazvdBpOFoFmQA05dlms909FCGwQNVrqCGaKTSIgkYg.5OkWfCZmEgge4ONW5uL8WtZPX-gZS1i3-UIowDF0EaQg.PNG/%E7%A0%B4%E7%89%87%E5%A5%97.png',
    faction: RS_FACTION.RAILWAY,
    earnsPath: [
      {
        desc: '슈그리스시 - 철도관리국 임무',
        tags: [],
        map: '슈그리스시',
      },
      {
        desc: '맨더 광산 -  철도관리국 임무',
        tags: [],
        map: '맨더 광산',
      },
      {
        desc: '황원역 - 작전계획',
        tags: [],
        map: '황원역',
      },
      {
        desc: '흑월 상점',
        tags: ['흑월 상점'],
      },
      {
        desc: '철도 주변의 베툴라 부표-베인링 퀸',
        tags: ['부표'],
      },
      {
        desc: '철도 주변의 베툴라 부표-블리자드 기포체',
        tags: ['부표'],
      },
    ],
  },
  '기능성 음료수': {
    type: RSEquipmentType.ACCESSORY,
    grade: RS_GRADE.R,
    desc: '기본 속성: 체력+2264\n옵션: 1웨이브의 적을 처치한 후 비용을 1 획득합니다.(중첩 가능)',
    thumbnail:
      'https://nng-phinf.pstatic.net/MjAyNTAyMDhfMjQw/MDAxNzM4OTg2MDE1ODA1.T6eNIC4hZA6mC9lAYSM--UPyX2KPbd0ZmYKlvApez5Mg.lTUSF4zUzzotJL1SZNptjifb3t3Zs9XBS6UepwW6vLMg.PNG/%E7%89%B9%E6%B5%93%E5%8A%9F%E8%83%BD%E9%A5%AE%E6%96%99.png',
    faction: RS_FACTION.RAILWAY,
    earnsPath: [
      {
        desc: '슈그리스시 - 철도관리국 임무',
        tags: [],
        map: '슈그리스시',
      },
      {
        desc: '맨더 광산 -  철도관리국 임무',
        tags: [],
        map: '맨더 광산',
      },
      {
        desc: '황원역 - 작전계획',
        tags: [],
        map: '황원역',
      },
      {
        desc: '흑월 상점',
        tags: ['흑월 상점'],
      },
      {
        desc: '철도 주변의 베툴라 부표-베인링 퀸',
        tags: ['부표'],
      },
      {
        desc: '철도 주변의 베툴라 부표-블리자드 기포체',
        tags: ['부표'],
      },
    ],
  },
  '고열량 식량': {
    type: RSEquipmentType.ACCESSORY,
    grade: RS_GRADE.R,
    desc: '기본 속성: 체력+2394\n옵션: 1웨이브의 적을 처치한 후 자신의 체력을 10% 회복합니다.(중첩 가능)',
    thumbnail:
      'https://nng-phinf.pstatic.net/MjAyNTAyMDhfMjU4/MDAxNzM4OTg1ODkyMzc4.GPrD___u4QzJmtzqZg32-XkVxt-OrdyWJtop0INV0t4g.E2t0-LfXKmP3_9MlR9KfQrM_0CqqtQCuOTKICrBpi5Mg.PNG/%E9%AB%98%E7%83%AD%E9%87%8F%E5%86%9B%E7%B2%AE.png',
    faction: RS_FACTION.RAILWAY,
    earnsPath: [
      {
        desc: '슈그리스시 - 철도관리국 임무',
        tags: [],
        map: '슈그리스시',
      },
      {
        desc: '맨더 광산 -  철도관리국 임무',
        tags: [],
        map: '맨더 광산',
      },
      {
        desc: '황원역 - 작전계획',
        tags: [],
        map: '황원역',
      },
      {
        desc: '흑월 상점',
        tags: ['흑월 상점'],
      },
      {
        desc: '철도 주변의 베툴라 부표-베인링 퀸',
        tags: ['부표'],
      },
      {
        desc: '철도 주변의 베툴라 부표-블리자드 기포체',
        tags: ['부표'],
      },
    ],
  },
  '구급 아머': {
    type: RSEquipmentType.ARMOR,
    grade: RS_GRADE.R,
    desc: '기본 속성: 방어력+24\n옵션: 자신의 체력이 30%보다 낮을 때 아드레날린을 주사하여 자신의 체력을 10% 회복합니다.\n동시에 자신의 [일반 공격]의 공격 속도가 10초간 최대로 증가합니다.(1회 한정)',
    thumbnail:
      'https://nng-phinf.pstatic.net/MjAyNTAyMDhfMjIw/MDAxNzM4OTg1NjgwMDY2.BVxZkhnTuPhoF1D3WrrTSHq8LoID8di_k4n5UaSptr8g._VrTc30-But5LFKnxBCZzBZOkHlDDoqwejxqxOU_z0Ag.PNG/%E6%80%A5%E6%95%91%E6%8A%A4%E7%94%B2.png',
    faction: RS_FACTION.RAILWAY,
    earnsPath: [
      {
        desc: '슈그리스시 - 철도관리국 임무',
        tags: [],
        map: '슈그리스시',
      },
      {
        desc: '맨더 광산 -  철도관리국 임무',
        tags: [],
        map: '맨더 광산',
      },
      {
        desc: '황원역 - 작전계획',
        tags: [],
        map: '황원역',
      },
      {
        desc: '흑월 상점',
        tags: ['흑월 상점'],
      },
      {
        desc: '철도 주변의 베툴라 부표-베인링 퀸',
        tags: ['부표'],
      },
      {
        desc: '철도 주변의 베툴라 부표-블리자드 기포체',
        tags: ['부표'],
      },
    ],
  },
  사냥칼: {
    type: RSEquipmentType.WEAPON,
    grade: RS_GRADE.R,
    desc: '기본 속성: 공격력+24\n옵션: 1웨이브의 적을 처치한 후 자신의 방어력이 3% 증가합니다.(중첩 가능)',
    thumbnail:
      'https://nng-phinf.pstatic.net/MjAyNTAyMDhfMjYx/MDAxNzM4OTg1NTYxNzMy.PDNsVAXjaGVKh9xrGA233TRTT-FdzAP7Rzwc_NmDuEkg.eFHiGJxC6diORWgrcsaNdRGfORSZZfizkW7et5FaUjkg.PNG/%E8%8D%92%E9%87%8E%E7%8C%8E%E5%88%80.png',
    faction: RS_FACTION.RAILWAY,
    earnsPath: [
      {
        desc: '슈그리스시 - 철도관리국 임무',
        tags: [],
        map: '슈그리스시',
      },
      {
        desc: '맨더 광산 -  철도관리국 임무',
        tags: [],
        map: '맨더 광산',
      },
      {
        desc: '황원역 - 작전계획',
        tags: [],
        map: '황원역',
      },
      {
        desc: '흑월 상점',
        tags: ['흑월 상점'],
      },
      {
        desc: '철도 주변의 베툴라 부표-베인링 퀸',
        tags: ['부표'],
      },
      {
        desc: '철도 주변의 베툴라 부표-블리자드 기포체',
        tags: ['부표'],
      },
    ],
  },
  '사냥용 리볼버': {
    type: RSEquipmentType.WEAPON,
    grade: RS_GRADE.R,
    desc: '기본 속성: 공격력+22\n옵션: 1웨이브의 적을 처치한 후 공격력이 3% 증가합니다.(중첩 가능)',
    thumbnail:
      'https://nng-phinf.pstatic.net/MjAyNTAyMDhfMTAw/MDAxNzM4OTg1MTY0MTQ4.g9eGBvo1XMNg2qMXgvhQ7tt_w-xB_dGaOatPo7megy8g.rkgk0jrkOc3d7ijCPeTaGEBeS15iOzmRL44K_5zt2RIg.PNG/%E7%8B%A9%E7%8C%8E%E5%B7%A6%E8%BD%AE.png',
    faction: RS_FACTION.RAILWAY,
    earnsPath: [
      {
        desc: '슈그리스시 - 철도관리국 임무',
        tags: [],
        map: '슈그리스시',
      },
      {
        desc: '맨더 광산 -  철도관리국 임무',
        tags: [],
        map: '맨더 광산',
      },
      {
        desc: '황원역 - 작전계획',
        tags: [],
        map: '황원역',
      },
      {
        desc: '흑월 상점',
        tags: ['흑월 상점'],
      },
      {
        desc: '철도 주변의 베툴라 부표-베인링 퀸',
        tags: ['부표'],
      },
      {
        desc: '철도 주변의 베툴라 부표-블리자드 기포체',
        tags: ['부표'],
      },
    ],
  },
  '보물 탐지기': {
    type: RSEquipmentType.WEAPON,
    grade: RS_GRADE.UR,
    desc: '기본 속성: 공격력+46\n옵션: [버리기] 명령 사용 시 버려진 덱에서 카드를 1장 회수하여 손으로 가져옵니다.',
    thumbnail:
      'https://nng-phinf.pstatic.net/MjAyNTAyMDhfMTQ3/MDAxNzM5MDA2MjI4NjYw.QmbCwftxCRjUyqaJdtftuEVYrOt94WVC_YSsYsf5KL4g.4jwKwbii_OJlcDhHcFSgnpvFDvvZvYHOvPFlrZV7F7Yg.PNG/%E5%AF%BB%E5%AE%9D%E6%9E%AA.png',
    faction: RS_FACTION.CHAOS,
    earnsPath: [
      {
        desc: '맨더 광산 명성 15레벨 달성 보상',
        tags: [],
        map: '맨더 광산',
      },
    ],
  },
  '선인장 판갑': {
    type: RSEquipmentType.ARMOR,
    grade: RS_GRADE.UR,
    desc: '기본 속성: 방어력+45\n옵션: 비용이 2 이상인 그린카드를 사용할 때마다 비용을 0.5얻습니다.',
    thumbnail:
      'https://nng-phinf.pstatic.net/MjAyNTAyMDhfMTU2/MDAxNzM5MDA2NDUwOTMy.yEg8KsxU5c9HcHUQFncc_l5KVSwsK9Njs3kuu2Mznkkg.SjLF_7ENQ8r_G0uVcuqTOEW6YtsJKXW_CIri65NZUhYg.PNG/%E4%BB%99%E4%BA%BA%E6%8E%8C%E6%9D%BF%E7%94%B2.png',
    faction: RS_FACTION.CHAOS,
    earnsPath: [
      {
        desc: '골든 원더랜드-미스 골드-교환',
        tags: [],
        map: '골든 원더랜드',
      },
    ],
  },
  '헐튼 풍선': {
    type: RSEquipmentType.ACCESSORY,
    grade: RS_GRADE.UR,
    desc: '기본 속성: 체력+4980\n옵션: 비용이 3 이상인 옐로카드를 낸 후 카드를 1장 뽑습니다.',
    thumbnail:
      'https://nng-phinf.pstatic.net/MjAyNTAyMDhfMTU2/MDAxNzM5MDA2MzUyMzkw.LjExuf5tB1akVrXW4v7NuK2LpAHa8hODJVmpxBjTDTQg.mflzyq8BMEZj1nP0rMYOZmhi8ph6cKbPhpOABfDw0Lwg.PNG/%E8%83%A1%E5%B0%94%E9%A1%BF%E6%B0%94%E7%90%83.png',
    faction: RS_FACTION.CHAOS,
    earnsPath: [
      {
        desc: '철도연맹 수행 뱃지 교환 상점',
        tags: ['교환 상점'],
      },
    ],
  },
  '최면의 시계': {
    type: RSEquipmentType.ACCESSORY,
    grade: RS_GRADE.SSR,
    desc: '기본 속성: 체력+3888\n옵션: 자신이 주는 [수면]의 지속시간이 2초 증가합니다.(중첩 가능)',
    thumbnail:
      'https://nng-phinf.pstatic.net/MjAyNTAyMDhfMTM0/MDAxNzM5MDA1NTAzNTM5.Owt3xNFIjyENUkOx2F4alWl7LC4aiTtWaRM_mTNkIGUg.q5A7Kew6cdackPGIBbsDOe2ASk80Qlg3_RD5PxC_Fssg.PNG/%E5%82%AC%E7%9C%A0%E6%80%80%E8%A1%A8.png',
    faction: RS_FACTION.CHAOS,
    earnsPath: [
      {
        desc: '철도 주변의 베툴라 부표-베인링 퀸',
        tags: ['부표'],
      },
      {
        desc: '철도 주변의 베툴라 부표-더스트 리자드',
        tags: ['부표'],
      },
    ],
  },
  '노던 프릭클': {
    type: RSEquipmentType.WEAPON,
    grade: RS_GRADE.SSR,
    desc: '기본 속성: 공격력+40\n옵션: 자신이 부여하는 [족쇄]와 [속박]의 지속시간이 2초 증가합니다.(중첩 가능)',
    thumbnail:
      'https://nng-phinf.pstatic.net/MjAyNTAyMDhfMjc2/MDAxNzM5MDA1MzYyMzEw.o1D6yeX2L_BMGh3chsZ7VoYZXK1wbvL3UMORbxrCYIog.pU07NqGg8CmFNyE1PhS-2cZeeCwbMs-_SwvEcDI_Fjwg.PNG/%E5%8C%97%E9%A3%8E%E8%8D%86%E6%A3%98.png',
    faction: RS_FACTION.CHAOS,
    earnsPath: [
      {
        desc: '철도 주변의 베툴라 부표-베인링 퀸',
        tags: ['부표'],
      },
      {
        desc: '철도 주변의 베툴라 부표-더스트 리자드',
        tags: ['부표'],
      },
    ],
  },
  아구나토: {
    type: RSEquipmentType.WEAPON,
    grade: RS_GRADE.SSR,
    desc: '기본 속성: 공격력+40\n옵션: 자신이 부여하는 [붕괴]의 지속 시간이 2초 증가합니다.(\n중첩 가능)',
    thumbnail:
      'https://nng-phinf.pstatic.net/MjAyNTAyMDhfMTA4/MDAxNzM5MDA1MTg1NjM1.vYNTXhKBAzJ9F2_W4wt-KsrDnrIXrJxR9pNTWR6oiS0g.hwtzGSqcBjC_VP_y7HyyTF6HexKcEx2mZ6xp5Bx2zeQg.PNG/%E9%98%BF%E5%8F%A4%E7%BA%B3%E6%89%98.png',
    faction: RS_FACTION.CHAOS,
    earnsPath: [
      {
        desc: '철도 주변의 베툴라 부표-베인링 퀸',
        tags: ['부표'],
      },
      {
        desc: '철도 주변의 베툴라 부표-더스트 리자드',
        tags: ['부표'],
      },
    ],
  },
  '낙뢰의 심면나무 부적': {
    type: RSEquipmentType.ACCESSORY,
    grade: RS_GRADE.SSR,
    desc: '기본 속성: 체력+3888\n옵션: 6초마다 1회 발동하며, 피해를 입을 시 자신이 받은 피해를 40% 감소시킵니다.(2초간 지속)',
    thumbnail:
      'https://nng-phinf.pstatic.net/MjAyNTAyMTJfMjUg/MDAxNzM5MzQ0NDcwODkw.CcA0ZpDEFylVxs0lvXCSARrkqZi0vT1ELD3Zy_s3RMgg.Xo6RqOpOX5B9G4u0jYxKtpfkIKhhDqkH8TaZN2f-v6gg.PNG/%E9%9B%B7%E5%87%BB%E6%B7%B1%E7%9C%A0%E6%9C%A8%E6%8A%A4%E7%AC%A6.png',
    faction: RS_FACTION.CHAOS,
    earnsPath: [
      {
        desc: "'원더랜드에 노크를'-이벤트 상점",
        tags: [],
      },
      {
        desc: '철도 주변의 베툴라 부표-베인링 퀸',
        tags: ['부표'],
      },
      {
        desc: '철도 주변의 베툴라 부표-더스트 리자드',
        tags: ['부표'],
      },
    ],
  },
  '낙뢰의 심면나무 갑옷': {
    type: RSEquipmentType.ARMOR,
    grade: RS_GRADE.SSR,
    desc: '기본 속성: 방어력+37\n옵션: 받는 [참열]/[열상] 피해가 50% 감소하고 15% 확률로 공격 대상에게 [낙뢰]를 발동합니다.',
    thumbnail:
      'https://nng-phinf.pstatic.net/MjAyNTAyMTJfNTgg/MDAxNzM5MzQ0MzU1MjI1.qIp_gBhqj7i5MiYBaRfXRZVnPkiCrX9IGdNLEvI4Iekg.w4Hr-UQIaOsWicm188Nzug7C6G2dQPESo2WpYetalWIg.PNG/%E9%9B%B7%E5%87%BB%E6%B7%B1%E7%9C%A0%E6%9C%A8%E7%94%B2.png',
    faction: RS_FACTION.CHAOS,
    earnsPath: [
      {
        desc: "'원더랜드에 노크를'-이벤트 상점",
        tags: [],
      },
      {
        desc: '철도 주변의 베툴라 부표-베인링 퀸',
        tags: ['부표'],
      },
      {
        desc: '철도 주변의 베툴라 부표-더스트 리자드',
        tags: ['부표'],
      },
    ],
  },
  '낙뢰의 심면나무 검': {
    type: RSEquipmentType.WEAPON,
    grade: RS_GRADE.SSR,
    desc: '기본 속성: 공격력+40\n옵션: 자신이 [참열] 피해를 입힐 때 [인뢰]를 발동합니다.',
    thumbnail:
      'https://nng-phinf.pstatic.net/MjAyNTAyMTJfNTQg/MDAxNzM5MzQ0MjE4NTAy.1TwWjPZbb0gxLWc15u81Y3SfWoD7floKL-wEL2V5RgEg.dtBeqtP9_Ac8KTr2WkuhfV1c5dCnqmGBgnVcS5PfDiUg.PNG/%E9%9B%B7%E5%87%BB%E6%B7%B1%E7%9C%A0%E6%9C%A8%E5%89%91.png',
    faction: RS_FACTION.CHAOS,
    earnsPath: [
      {
        desc: "'원더랜드에 노크를'-이벤트 상점",
        tags: [],
      },
      {
        desc: '철도 주변의 베툴라 부표-베인링 퀸',
        tags: ['부표'],
      },
      {
        desc: '철도 주변의 베툴라 부표-더스트 리자드',
        tags: ['부표'],
      },
    ],
  },
  '불법 공예품': {
    type: RSEquipmentType.WEAPON,
    grade: RS_GRADE.SSR,
    desc: '기본 속성: 공격력+38\n옵션: 자신의 [일반 공격]의 공격 속도 25% 증가합니다.',
    thumbnail:
      'https://nng-phinf.pstatic.net/MjAyNTAyMTJfMTcz/MDAxNzM5MzQ0MDY0NDAz.1zqLJ4RZCNYhAWQoBCWSfY7YCL2MyZjhnx0unJggaJcg.NwViIsiy2uQZyRjl9zsFqjQlNm9XUmBxe6_F1LaHzWUg.PNG/%E8%BF%9D%E7%A6%81%E5%B7%A5%E8%89%BA%E5%93%81.png',
    faction: RS_FACTION.CHAOS,
    earnsPath: [
      {
        desc: '교정센터-교환 상점',
        tags: ['교환 상점'],
      },
      {
        desc: '철도 주변의 베툴라 부표-베인링 퀸',
        tags: ['부표'],
      },
      {
        desc: '철도 주변의 베툴라 부표-더스트 리자드',
        tags: ['부표'],
      },
    ],
  },
  '반항의 벌칙': {
    type: RSEquipmentType.WEAPON,
    grade: RS_GRADE.SSR,
    desc: '기본 속성: 공격력+37\n옵션: 자신이 주는 화염 피해가 15% 증가합니다.',
    thumbnail:
      'https://nng-phinf.pstatic.net/MjAyNTAyMTJfMjI2/MDAxNzM5MzQzODkwMTI2.8IdSU4dg8QtlsdUejihfqPxpZCvNkKsREZ7jdAYRsGMg.C6bn6yjHGzKenkm9C7ci15ILznxehlPu567LEIeeuJEg.PNG/%E6%8A%97%E6%8B%92%E4%BB%8E%E4%B8%A5.png',
    faction: RS_FACTION.CHAOS,
    earnsPath: [
      {
        desc: '교정센터-교환 상점',
        tags: ['교환 상점'],
      },
      {
        desc: '철도 주변의 베툴라 부표-베인링 퀸',
        tags: ['부표'],
      },
      {
        desc: '철도 주변의 베툴라 부표-더스트 리자드',
        tags: ['부표'],
      },
    ],
  },
  '보랏빛 써스데이': {
    type: RSEquipmentType.WEAPON,
    grade: RS_GRADE.SR,
    desc: '기본 속성: 공격력+30\n옵션: 자신이 주는 [광폭]의 지속 시간이 2초 증가합니다.(중첩가능)\n동시에 받는 [수면]의 지속 시간이 2초 감소합니다.(중첩가능)',
    thumbnail:
      'https://nng-phinf.pstatic.net/MjAyNTAyMDhfMjQy/MDAxNzM5MDA1MDYyMDMy.0xqn73mQ7-Sov3wnAJJS_p1ex1hKTyEBzuvotuE0bSMg.GwDCYijLFZ7xjsbScxc3D3JTXpSUSNcZ1xMnxGgwQNMg.PNG/%E3%80%8A%E7%B4%AB%E8%89%B2%E6%98%9F%E6%9C%9F%E5%9B%9B%E3%80%8B.png',
    faction: RS_FACTION.CHAOS,
    earnsPath: [
      {
        desc: '골든 원더랜드 작전 계획',
        tags: ['작전 계획'],
        map: '골든 원더랜드',
      },
      {
        desc: '철도 주변의 베툴라 부표-베인링 퀸',
        tags: ['부표'],
      },
      {
        desc: '철도 주변의 베툴라 부표-더스트 리자드',
        tags: ['부표'],
      },
    ],
  },
  '크리안 사진기': {
    type: RSEquipmentType.ACCESSORY,
    grade: RS_GRADE.SR,
    desc: '기본 속성: 체력+3053\n옵션: [저주] 효과에 면역됩니다.',
    thumbnail:
      'https://nng-phinf.pstatic.net/MjAyNTAyMDhfMTY2/MDAxNzM5MDA0OTAyMTYx.yhOjPgMoSKITAsXpFZDsN8Og4F8rSs8acj4-r-TO4C4g.Bmgy9jxvR463i3IbYCUNGUgOwAcKVNSAptdAgSN7km4g.PNG/%E5%85%8B%E9%87%8C%E5%AE%89%E7%85%A7%E7%9B%B8%E6%9C%BA.png',
    faction: RS_FACTION.CHAOS,
    earnsPath: [
      {
        desc: '골든 원더랜드 작전 계획',
        tags: ['작전 계획'],
        map: '골든 원더랜드',
      },
      {
        desc: '철도 주변의 베툴라 부표-베인링 퀸',
        tags: ['부표'],
      },
      {
        desc: '철도 주변의 베툴라 부표-더스트 리자드',
        tags: ['부표'],
      },
    ],
  },
  '응급 처치 기기': {
    type: RSEquipmentType.ACCESSORY,
    grade: RS_GRADE.SR,
    desc: '기본 속성: 체력+3149\n옵션: 받는 [기절]과 [수면]의 지속 시간이 1초 감소합니다.(중첩 가능)',
    thumbnail:
      'https://nng-phinf.pstatic.net/MjAyNTAyMTJfMTI4/MDAxNzM5MzQ0NzIyNTMz.9VQgd23zCfG1mdhLEdFiuTmGHx8VZZ66YCnSOTIrZ2Ug.bnxvJ3pheEsp9m8t_lkwLoQFsGwo2eyRJ5hGmHMcOcEg.PNG/%E6%8E%90%E4%BA%BA%E4%B8%AD%E6%8A%A2%E6%95%91%E5%99%A8.png',
    faction: RS_FACTION.CHAOS,
    earnsPath: [
      {
        desc: '골든 원더랜드 - 작전 계획',
        tags: ['작전 계획'],
        map: '골든 원더랜드',
      },
      {
        desc: '흑월 상점',
        tags: ['흑월 상점'],
      },
      {
        desc: '운행 노선 베툴라 부표 드랍',
        tags: ['부표'],
      },
    ],
  },
  '해리슨 장치': {
    type: RSEquipmentType.ACCESSORY,
    grade: RS_GRADE.R,
    desc: '기본 속성: 체력+2411\n옵션: 옐로카드 사용 시 비용을 0.3 얻습니다.(중첩 불가)',
    thumbnail:
      'https://nng-phinf.pstatic.net/MjAyNTAyMDhfMzYg/MDAxNzM5MDA0Mzk1NzA4.lE8rPOt8mH1yXo7bagOw9KKduPrO12r0yRJYapF5bEQg.0RF2RDed1R_pg9I8U0Gq4kbZlgyIXd3JD_xI0prLkKwg.PNG/%E5%93%88%E9%87%8C%E6%A3%AE%E8%A3%85%E7%BD%AE.png',
    faction: RS_FACTION.CHAOS,
    earnsPath: [
      {
        desc: '골든 원더랜드 작전 계획',
        tags: ['작전 계획'],
        map: '골든 원더랜드',
      },
      {
        desc: '철도 주변의 베툴라 부표-베인링 퀸',
        tags: ['부표'],
      },
      {
        desc: '철도 주변의 베툴라 부표-더스트 리자드',
        tags: ['부표'],
      },
    ],
  },
  '로크웰 금속': {
    type: RSEquipmentType.ARMOR,
    grade: RS_GRADE.R,
    desc: '기본 속성: 방어력+24\n옵션: 전투 시작 시 자신의 방어력이 5% 증가합니다.(중첩 가능)',
    thumbnail:
      'https://nng-phinf.pstatic.net/MjAyNTAyMDhfMjk0/MDAxNzM5MDA0Mjk2NzA5.6-NrZVihk_sFzQ_ujDsOLMk69GkUpA5-1vKSC8HiNUgg.yzwdjvF7FEpiv2OXxk5VUMIB4x-wsAEp2gp4RrMDIvIg.PNG/%E6%B4%9B%E5%85%8B%E7%BB%B4%E5%B0%94%E9%87%91%E5%B1%9E.png',
    faction: RS_FACTION.CHAOS,
    earnsPath: [
      {
        desc: '골든 원더랜드 작전 계획',
        tags: ['작전 계획'],
        map: '골든 원더랜드',
      },
      {
        desc: '철도 주변의 베툴라 부표-베인링 퀸',
        tags: ['부표'],
      },
      {
        desc: '철도 주변의 베툴라 부표-더스트 리자드',
        tags: ['부표'],
      },
    ],
  },
  '포일 모자': {
    type: RSEquipmentType.ACCESSORY,
    grade: RS_GRADE.R,
    desc: '기본 속성: 체력+2337\n옵션: [혼란] 효과에 면역됩니다.',
    thumbnail:
      'https://nng-phinf.pstatic.net/MjAyNTAyMDhfMjgw/MDAxNzM5MDA0MjA1NzQx.xEsWfbVvAYv5bZPvXJiGz8q9W0mUwE6PuMz8sv38p7Qg.KqgdSrPj3ct2M63-j3i5RToHjTPe54kPY0REoD-3lEUg.PNG/%E9%94%A1%E7%BA%B8%E5%B8%BD.png',
    faction: RS_FACTION.CHAOS,
    earnsPath: [
      {
        desc: '골든 원더랜드 작전 계획',
        tags: ['작전 계획'],
        map: '골든 원더랜드',
      },
      {
        desc: '철도 주변의 베툴라 부표-베인링 퀸',
        tags: ['부표'],
      },
      {
        desc: '철도 주변의 베툴라 부표-더스트 리자드',
        tags: ['부표'],
      },
    ],
  },
  'N-RAY 총': {
    type: RSEquipmentType.WEAPON,
    grade: RS_GRADE.R,
    desc: '기본 속성: 공격력+23\n옵션: 자신이 부여하는 [혼란]의 지속시간이 1초 증가합니다.(중첩 가능)',
    thumbnail:
      'https://nng-phinf.pstatic.net/MjAyNTAyMDhfMjI5/MDAxNzM5MDA0MDgwOTA3.rWkY5vzHgAz7KY6frW_TcO6lxxXXW0DzcaCop42OZpYg.GdOrZU-H8lEgg1jwLXEM_RaN_vGziYo8KLhwWwXxooUg.PNG/N%E5%B0%84%E7%BA%BF%E6%9E%AA.png',
    faction: RS_FACTION.CHAOS,
    earnsPath: [
      {
        desc: '골든 원더랜드 작전 계획',
        tags: ['작전 계획'],
        map: '골든 원더랜드',
      },
      {
        desc: '철도 주변의 베툴라 부표-베인링 퀸',
        tags: ['부표'],
      },
      {
        desc: '철도 주변의 베툴라 부표-더스트 리자드',
        tags: ['부표'],
      },
    ],
  },
  철가마: {
    type: RSEquipmentType.ACCESSORY,
    grade: RS_GRADE.R,
    desc: '기본 속성: 체력+2281\n옵션: 전투 시작 시 공격력이 5% 증가합니다.(중첩 가능)',
    thumbnail:
      'https://nng-phinf.pstatic.net/MjAyNTAyMDhfODYg/MDAxNzM5MDAzOTI0MjA3.3V01GdWIF0KwfAQn2k5SBWLudGjDCw9dCebfrky0NcYg.EitbIgcdMpXgmtBg3GG4xqSWnDOTtx49RFtURF2V1Q4g.PNG/%E6%8E%A5%E5%8A%9F%E9%93%81%E9%94%85.png',
    faction: RS_FACTION.CHAOS,
    earnsPath: [
      {
        desc: '골든 원더랜드 작전 계획',
        tags: ['작전 계획'],
        map: '골든 원더랜드',
      },
      {
        desc: '철도 주변의 베툴라 부표-베인링 퀸',
        tags: ['부표'],
      },
      {
        desc: '철도 주변의 베툴라 부표-더스트 리자드',
        tags: ['부표'],
      },
    ],
  },
}

export const CONVERTED_ALL_EQUIPMENTS = _.map(ALL_EQUIPMENTS, (value, key) => ({
  name: key,
  ...value,
}))

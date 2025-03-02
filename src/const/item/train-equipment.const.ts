import { RS_GRADE } from '@/const/character/character.enum'
import _ from 'lodash'
import { RSMaterial } from '@/const/material/material.type'

export interface RSTrainEquipment extends RSMaterial {
  trainEquipmentType?: any
}

export const TRAIN_EQUIPMENTS: { [key: string]: RSTrainEquipment } = {
  '합금 임팩트 플레이트': {
    trainEquipmentType: '충돌 무기',
    grade: RS_GRADE.R,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/2/2b/mxxnayscq53s4m9sotb9tcea9meqdz8.png',
  },
  '서큘러 쏘': {
    trainEquipmentType: '충돌 무기',
    grade: RS_GRADE.SR,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/e/e8/7oe6y595aktgf1sod6llxnj9m77zwj5.png',
  },
  '블랙아웃 충각': {
    trainEquipmentType: '충돌 무기',
    grade: RS_GRADE.SSR,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/c/c5/2s97vpygg0qvexqaodparytct0zzvcj.png',
  },
  '롤러 장치': {
    trainEquipmentType: '충돌 무기',
    grade: RS_GRADE.R,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/f/f2/hyxuetpygwjwl7jrcgydp0zedvdw8fw.png',
  },
  '분쇄 임팩트 롤러': {
    trainEquipmentType: '충돌 무기',
    grade: RS_GRADE.SR,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/b/bb/d3bcgfnu809277av47qukfepiicvn1n.png',
  },
  '분해 임팩트 롤러': {
    trainEquipmentType: '충돌 무기',
    grade: RS_GRADE.SSR,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/9/9c/79nh1wi7cm7uumgrbmjc2s55d4xqk5g.png',
  },
  '수압 파괴 굴삭기': {
    trainEquipmentType: '충돌 무기',
    grade: RS_GRADE.R,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/9/92/poxgtccuci8nf8bjftboi51tvp1tc0i.png',
  },
  '협음 파괴 굴삭기': {
    trainEquipmentType: '충돌 무기',
    grade: RS_GRADE.SR,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/3/34/ldll0rg3m7sheo7ygzqvh5y520mcq9c.png',
  },
  '스크림 파괴 굴삭기': {
    trainEquipmentType: '충돌 무기',
    grade: RS_GRADE.SSR,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/3/3f/q9g2wm9jn0o700yt2jn2gfepqp1bi3e.png',
  },
  '철강 드릴 비트': {
    trainEquipmentType: '충돌 무기',
    grade: RS_GRADE.SR,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/6/6c/jh46rrrm1eg8cy77ixd9oc8v5xin9yo.png',
  },
  '핫멜트 드릴 비트': {
    trainEquipmentType: '충돌 무기',
    grade: RS_GRADE.SSR,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/b/bc/800c05y4qt479dkrvhww5cpadig5r7b.png',
  },
  '레이저 드릴 비트': {
    trainEquipmentType: '충돌 무기',
    grade: RS_GRADE.UR,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/6/67/fma1owhq56taq0xdwsti39nd0g2lele.png',
  },
  '질화티탄 코팅': {
    trainEquipmentType: '코팅',
    grade: RS_GRADE.SR,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/3/39/68ow12pev0tkex2rh0581f8ox16vrh7.png',
  },
  '군사 장갑판': {
    trainEquipmentType: '장갑판',
    grade: RS_GRADE.SR,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/6/65/31hvmweg9mbamng21cjo7ap8oue6835.png',
  },
  '고회전력 모터': {
    trainEquipmentType: '보조 펜던트',
    grade: RS_GRADE.R,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/7/7b/e7ykeorzb34xqfmfvgjkpeu8x5vutta.png',
  },
  '화물 거치대': {
    trainEquipmentType: '보조 펜던트',
    grade: RS_GRADE.R,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/1/1a/l48s04xydtv6r61k42nyo2nyqq5eps9.png',
  },
  '유인용 전조등': {
    trainEquipmentType: '헤드 라이트',
    grade: RS_GRADE.SR,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/3/36/g3k23j2zzuxk5lacryf7gpzb711bhma.png',
  },
  '고출력 오디오 제너레이터(432Hz)': {
    trainEquipmentType: '소나',
    grade: RS_GRADE.SR,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/5/56/6l71ga77zxjn7ph1ab1hjc8vmz9zqol.png',
  },
  '초저주파 진동기': {
    trainEquipmentType: '소나',
    grade: RS_GRADE.SR,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/7/73/b1ivk40oyx5gfy4364icjkyqll12lqz.png',
  },
  '원더링 전조등': {
    trainEquipmentType: '헤드 라이트',
    grade: RS_GRADE.SSR,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/f/f2/p8bj89tughc53lbgma3ny62h0r27guv.png',
  },
  '보조 펜던트': {
    trainEquipmentType: '보조 펜던트',
    grade: RS_GRADE.SSR,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/c/c4/3vvbe8sh5y1kzbj5gpn1uirlfsvkrzd.png',
  },
  '운송 드론 787': {
    trainEquipmentType: '보조 펜던트',
    grade: RS_GRADE.SSR,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/7/70/0gozrlaaftuonopo0lwrusv50cda80j.png',
  },
}

export const CONVERTED_TRAIN_EQUIPMENTS = _.map(TRAIN_EQUIPMENTS, (value, key) => ({
  name: key,
  ...value,
}))

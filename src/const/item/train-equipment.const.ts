import { RS_GRADE } from '@/const/character/character.enum'
import _ from 'lodash'
import { DefaultRSItem } from '@/const/material/material.type'
import { RSItemType } from '@/const/item/item.enum'

export interface OriginRSTrainEquipment extends DefaultRSItem {
  trainEquipmentType: string
}

export interface RSTrainEquipment extends OriginRSTrainEquipment {
  iType: RSItemType
}

const DEFAULT_TRAIN_EQUIPMENTS: { [key: string]: OriginRSTrainEquipment } = {
  '파천의 드릴 비트': {
    trainEquipmentType: '충돌 무기',
    grade: RS_GRADE.UR,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/thumb/b/b0/ndwenr7iga6h2rh0slc1ljweyrygsi8.png/180px-%E7%A0%B4%E5%A4%A9%E9%92%BB%E5%A4%B4.png',
  },
  '플래시 발전기': {
    trainEquipmentType: '보조 펜던트',
    grade: RS_GRADE.UR,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/thumb/f/fb/r0x3drbhq0kbebcntcz1h2m80rsrdqy.png/180px-%E9%97%AA%E7%82%B9%E5%8F%91%E7%94%9F%E5%99%A8.png',
  },
  '운송 드론 진열 797': {
    trainEquipmentType: '보조 펜던트',
    grade: RS_GRADE.UR,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/thumb/f/f7/48kaa9ev9ic1kx3sm11z8c0rl8888t8.png/180px-%E8%BF%90%E8%BE%93%E6%97%A0%E4%BA%BA%E6%9C%BA%E9%98%B5%E5%88%97797.png',
  },
  '이상 공간 발생기': {
    trainEquipmentType: '보조 펜던트',
    grade: RS_GRADE.UR,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/thumb/c/c0/rsl6o28frsnaeabdb5josw9fiftohqp.png/180px-%E5%BC%82%E5%B8%B8%E7%A9%BA%E9%97%B4%E4%BA%A7%E7%94%9F%E5%99%A8.png',
  },
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
  '초음파 진동기': {
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
  '폭발 점화플러그': {
    trainEquipmentType: '보조 펜던트',
    grade: RS_GRADE.SSR,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/thumb/c/cb/h12wwet3ssxl7tojujgeak2htu13xsq.png/180px-%E7%88%86%E7%82%B8%E7%81%AB%E8%8A%B1%E5%A1%9E.png',
  },
  '탐사 드론 373': {
    trainEquipmentType: '보조 펜던트',
    grade: RS_GRADE.SSR,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/thumb/c/c4/3vvbe8sh5y1kzbj5gpn1uirlfsvkrzd.png/180px-%E8%B0%83%E6%9F%A5%E6%97%A0%E4%BA%BA%E6%9C%BA373.png',
  },
  '마이 소프': {
    trainEquipmentType: '보조 펜던트',
    grade: RS_GRADE.SSR,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/thumb/9/95/e5sgze8p7diymbqweoxpt8tgl5hw8cx.png/180px-%E6%88%91%E7%9A%82%E6%88%91%E8%B7%AF.png',
  },
  '형태장 가속기': {
    trainEquipmentType: '보조 펜던트',
    grade: RS_GRADE.SSR,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/thumb/1/1a/qll38kkyo3k56lp7yj7qhchrvamfyn6.png/180px-%E5%BD%A2%E6%80%81%E5%9C%BA%E5%8A%A0%E9%80%9F%E5%99%A8.png',
  },
  '질주 룬': {
    trainEquipmentType: '보조 펜던트',
    grade: RS_GRADE.SSR,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/thumb/6/60/k8by5ijwic78cx9btoviye2j854dv8r.png/180px-%E7%96%BE%E8%B5%B0%E6%9C%AF%E7%AC%A6%E6%96%87.png',
  },
  '법 집행 경고등': {
    trainEquipmentType: '헤드 라이트',
    grade: RS_GRADE.SSR,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/thumb/4/41/sy1i2runbr2ty5s4fp0diiqwokwk4q6.png/180px-%E6%89%A7%E6%B3%95%E8%AD%A6%E7%81%AF.png',
  },
  '천상의 불': {
    trainEquipmentType: '헤드 라이트',
    grade: RS_GRADE.SSR,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/thumb/c/c6/4lt3018udgrl099dhaw1ym8xqm37jff.png/180px-%E5%A4%A9%E7%81%AB.png',
  },
  '운수교 경적': {
    trainEquipmentType: '소나',
    grade: RS_GRADE.SSR,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/thumb/0/03/mt29x0la6vyisuv43z4w5mknrcvmzge.png/180px-%E4%BA%91%E5%B2%AB%E6%A1%A5%E8%AD%A6%E7%AC%9B.png',
  },
  '하드 록': {
    trainEquipmentType: '소나',
    grade: RS_GRADE.SSR,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/thumb/5/55/5dajya4nz1c1akp4jd0770upxdreh4v.png/180px-%E5%96%A7%E9%97%B9%E6%91%87%E6%BB%9A.png',
  },
  'URO 코팅': {
    trainEquipmentType: '코팅',
    grade: RS_GRADE.SSR,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/thumb/e/eb/qi2d3wdhosnfirf6xj99g7zsy15atdd.png/180px-URO%E6%B6%82%E8%A3%85.png',
  },
  '세라믹 장갑판': {
    trainEquipmentType: '장갑판',
    grade: RS_GRADE.SSR,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/thumb/a/ab/l7tg2slb90aj5ooeeas1fek5mebj9cg.png/180px-%E9%99%B6%E7%93%B7%E8%A3%85%E7%94%B2.png',
  },
  '탈부착식 나셀': {
    trainEquipmentType: '장갑판',
    grade: RS_GRADE.SSR,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/thumb/7/79/i9pc907pr3ie4p0argeutowbqfa131t.png/180px-%E6%8C%82%E7%A5%A8%E5%90%8A%E8%88%B1.png',
  },
  '베툴라 생명체 장갑판': {
    trainEquipmentType: '장갑판',
    grade: RS_GRADE.SSR,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/thumb/5/5a/c1lar6qzd89e3beyncwg3m3b48o6y23.png/180px-%E6%A1%A6%E6%A0%91%E7%94%9F%E7%89%A9%E8%A3%85%E7%94%B2.png',
  },
  '탄환 장치': {
    trainEquipmentType: '보조 펜던트',
    grade: RS_GRADE.SR,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/thumb/4/44/anxci0pi9jt260zvyzsiv1bw8t6ohub.png/180px-%E5%BC%B9%E4%B8%B8%E5%AE%9D.png',
  },
  '운송 드론 757': {
    trainEquipmentType: '보조 펜던트',
    grade: RS_GRADE.SR,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/thumb/0/04/lxpdr75yoeuzh8foc9xi66dot6asxyu.png/180px-%E8%BF%90%E8%BE%93%E6%97%A0%E4%BA%BA%E6%9C%BA757.png',
  },
  '탐사 드론 353': {
    trainEquipmentType: '보조 펜던트',
    grade: RS_GRADE.SR,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/thumb/d/dd/h61vpwq0fq5lexq64tuwemoxg5elem9.png/180px-%E8%B0%83%E6%9F%A5%E6%97%A0%E4%BA%BA%E6%9C%BA353.png',
  },
  '수리 로봇 919': {
    trainEquipmentType: '보조 펜던트',
    grade: RS_GRADE.SR,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/thumb/c/c5/qee2n1qu06z43j6sp6p1dazrq3ovy08.png/180px-%E4%BF%AE%E7%90%86%E6%9C%BA%E5%99%A8%E4%BA%BA919.png',
  },
  '로켓 부스터': {
    trainEquipmentType: '보조 펜던트',
    grade: RS_GRADE.SR,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/thumb/5/52/nn07e4wgydpef9h9y3s7eioctpmu5bn.png/180px-%E5%8A%A9%E6%8E%A8%E7%81%AB%E7%AE%AD.png',
  },
  '깃털 낙하 룬': {
    trainEquipmentType: '보조 펜던트',
    grade: RS_GRADE.SR,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/thumb/7/71/t6tidvlvvjvq51gx6ubtcwmxywejypd.png/180px-%E7%BE%BD%E8%90%BD%E6%9C%AF%E7%AC%A6%E6%96%87.png',
  },
  '퇴치용 전조등': {
    trainEquipmentType: '헤드 라이트',
    grade: RS_GRADE.SR,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/thumb/4/40/eb96x2hrkhqk90irfdhujp8vggmx5zm.png/180px-%E9%A9%B1%E7%A6%BB%E5%A4%A7%E7%81%AF.png',
  },
  '감옥 탐조등': {
    trainEquipmentType: '헤드 라이트',
    grade: RS_GRADE.SR,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/thumb/7/7b/ao296n86ekk5o2ekcmjrgl3go554gvn.png/180px-%E7%9B%91%E7%8B%B1%E6%8E%A2%E7%85%A7%E7%81%AF.png',
  },
  '형태 공명 코팅': {
    trainEquipmentType: '코팅',
    grade: RS_GRADE.SR,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/thumb/0/09/0sg1fm9iv9mfvu913n1jw5vjfruvsw3.png/180px-%E5%BD%A2%E6%80%81%E5%85%B1%E6%8C%AF%E6%B6%82%E5%B1%82.png',
  },
  '운수교 코팅': {
    trainEquipmentType: '코팅',
    grade: RS_GRADE.SR,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/thumb/b/b3/eah3h1kehraotgvvpjoxwsm7rk3bd96.png/180px-%E4%BA%91%E5%B2%AB%E6%A1%A5%E6%B6%82%E8%A3%85.png',
  },
  '진압 장갑판': {
    trainEquipmentType: '장갑판',
    grade: RS_GRADE.SR,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/thumb/d/d8/jjz2yiwwhpcqgc0vvy2vhc9b3qwmsku.png/180px-%E9%98%B2%E6%9A%B4%E8%A3%85%E7%94%B2.png',
  },
  '폭주 박스': {
    trainEquipmentType: '중앙 제어',
    grade: RS_GRADE.R,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/thumb/b/b5/09a8rtcnzp130kgcjore5f0mlnnd48f.png/180px-%E9%A3%99%E8%BD%A6%E7%9B%92%E5%AD%90.png',
  },
  '고성능 점화플러그': {
    trainEquipmentType: '보조 펜던트',
    grade: RS_GRADE.R,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/thumb/b/b3/0hea1hi3cdmntsykd6e2wugx8i7fol0.png/180px-%E9%AB%98%E6%80%A7%E8%83%BD%E7%81%AB%E8%8A%B1%E5%A1%9E.png',
  },
  '운송 드론 727': {
    trainEquipmentType: '보조 펜던트',
    grade: RS_GRADE.R,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/thumb/e/e0/dy735lis3mvzdh6hyiv17i0pkgbi2ld.png/180px-%E8%BF%90%E8%BE%93%E6%97%A0%E4%BA%BA%E6%9C%BA727.png',
  },
  '탐사 드론 313': {
    trainEquipmentType: '보조 펜던트',
    grade: RS_GRADE.R,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/thumb/9/97/0y34ytk2r636aviwqkjq6wttjztksdv.png/180px-%E8%B0%83%E6%9F%A5%E6%97%A0%E4%BA%BA%E6%9C%BA313.png',
  },
  '낙타 엠블럼': {
    trainEquipmentType: '보조 펜던트',
    grade: RS_GRADE.R,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/thumb/8/80/t2cz4bwj1z9hckqebkszrt2dbm1o41i.png/180px-%E9%AA%86%E9%A9%BC%E7%BA%B9%E7%AB%A0.png',
  },
  상향등: {
    trainEquipmentType: '헤드 라이트',
    grade: RS_GRADE.R,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/thumb/f/f1/19popkj4urm45ul26wb26noeiiqx9mm.png/180px-%E8%BF%9C%E5%85%89%E5%A4%A7%E7%81%AF.png',
  },
  '경적(440Hz)': {
    trainEquipmentType: '소나',
    grade: RS_GRADE.R,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/thumb/6/65/b13oqh65tjrg805p8km1xc21n5mvd7b.png/180px-%E5%A4%96%E6%94%BE%E5%96%87%E5%8F%AD%EF%BC%88440Hz%EF%BC%89.png',
  },
  '선인장 추출물 코팅': {
    trainEquipmentType: '코팅',
    grade: RS_GRADE.R,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/thumb/f/fd/jqg40iqf626tqz6rs9z60pgbp3c6h6x.png/180px-%E4%BB%99%E4%BA%BA%E6%8E%8C%E6%B1%81%E6%B6%82%E5%B1%82.png',
  },
  '철제 장갑판': {
    trainEquipmentType: '장갑판',
    grade: RS_GRADE.R,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/thumb/0/00/6h68nz0jmnqwp9j0pozfm359tmwpnqe.png/180px-%E9%93%81%E7%9A%AE%E8%A3%85%E7%94%B2.png',
  },
}
export const TRAIN_EQUIPMENTS: { [key: string]: RSTrainEquipment } = _.mapValues(
  DEFAULT_TRAIN_EQUIPMENTS,
  (value) => {
    return {
      ...value,
      iType: RSItemType.TRAIN_EQUIPMENT,
    }
  },
)

export const MAPPED_TRAIN_EQUIPMENTS = _.map(TRAIN_EQUIPMENTS, (value, key) => ({
  name: key,
  ...value,
}))

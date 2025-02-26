// 강적,정예,일반
export enum MonsterGrade {
  ARCHNEMESIS = '강적',
  ELITE = '정예',
  NORMAL = '일반',
}

export enum MonsterStatGrade {
  SSS = 'SSS',
  SS = 'SS',
  S = 'S',
  A = 'A',
  B = 'B',
  C = 'C',
  D = 'D',
}
export enum MonsterType {
  BETULA = '베툴라 생명체',
  DORMANT = '심면자',
  HUMAN = '인간형 유닛',
  MACHINE = '기계 유닛',
  ETC = '기타',
}

export interface RSMonster {
  detail: string
  thumbnail: string
  desc?: string
  grade: MonsterGrade
  attack: MonsterStatGrade
  defence: MonsterStatGrade
  hp: MonsterStatGrade
  type: MonsterType
}

export interface ExtendedRSMonster extends RSMonster {
  name: string
}

export const MONSTERS: {
  [key: string]: RSMonster
} = {
  '베인링 퀸': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E9%B8%A3%E7%88%86%E8%99%AB%E6%AF%8D',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/6/60/lif20mpbq1hjbp9g3d68jk2ogwb816k.png',
    grade: MonsterGrade.ARCHNEMESIS,
    attack: MonsterStatGrade.B,
    defence: MonsterStatGrade.C,
    hp: MonsterStatGrade.S,
    type: MonsterType.BETULA,
  },
  '스콜피언 머신': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E8%9D%8E%E5%9E%8B%E6%9C%BA%E6%A2%B0%E4%BD%93',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/9/94/e6itgya4qny8z0ai7rvpm1p7l72d5g6.png',
    grade: MonsterGrade.ARCHNEMESIS,
    attack: MonsterStatGrade.S,
    defence: MonsterStatGrade.S,
    hp: MonsterStatGrade.S,
    type: MonsterType.MACHINE,
  },
  '벌목용 중장비': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E4%BC%90%E6%9C%A8%E9%87%8D%E6%9C%BA',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/4/4e/16840hlm2ofooolmnwpuios5dnnnb97.png',
    grade: MonsterGrade.ARCHNEMESIS,
    attack: MonsterStatGrade.S,
    defence: MonsterStatGrade.S,
    hp: MonsterStatGrade.SS,
    type: MonsterType.MACHINE,
  },
  '블리자드 기포체': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E5%AF%92%E6%BD%AE%E6%B5%AE%E5%9B%8A%E4%BD%93',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/6/68/nmojqwwkbvt8unw6b03pej3j0gzhzv5.png',
    grade: MonsterGrade.ARCHNEMESIS,
    attack: MonsterStatGrade.A,
    defence: MonsterStatGrade.A,
    hp: MonsterStatGrade.S,
    type: MonsterType.BETULA,
  },
  '더스트 리자드': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E5%B0%98%E9%B8%A3%E6%B8%B8%E7%A3%B7',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/3/32/hk020c4kjn27myscp7jcpla2839cgy0.png',
    grade: MonsterGrade.ARCHNEMESIS,
    attack: MonsterStatGrade.S,
    defence: MonsterStatGrade.A,
    hp: MonsterStatGrade.S,
    type: MonsterType.BETULA,
  },
  '빙하 본드래곤': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E5%87%9B%E5%B7%9D%E9%AA%A8%E9%BE%99',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/f/f9/t21hi6jole50rugfc6u2knvujk486n7.png',
    grade: MonsterGrade.ARCHNEMESIS,
    attack: MonsterStatGrade.SS,
    defence: MonsterStatGrade.A,
    hp: MonsterStatGrade.SS,
    type: MonsterType.BETULA,
  },
  '머리가 갈라진 해골': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E8%A3%82%E9%A6%96%E9%AA%A8%E9%BE%99',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/6/6a/7zbjtdj0zibcas6kmtqcc3y1a56imxk.png',
    grade: MonsterGrade.ARCHNEMESIS,
    attack: MonsterStatGrade.SS,
    defence: MonsterStatGrade.A,
    hp: MonsterStatGrade.SS,
    type: MonsterType.BETULA,
  },
  시라누이: {
    detail: 'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E6%97%A0%E6%98%8E%E7%81%AB',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/8/82/c6erv259v3aktv4t8tmocgt4rob80ks.png',
    grade: MonsterGrade.ARCHNEMESIS,
    attack: MonsterStatGrade.SS,
    defence: MonsterStatGrade.A,
    hp: MonsterStatGrade.S,
    type: MonsterType.HUMAN,
  },
  우뢰: {
    detail: 'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E9%95%87%E9%9B%B7%E9%B8%A3',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/8/8b/dsoi2um06y7syghazcdkr33za45vs6v.png',
    grade: MonsterGrade.ARCHNEMESIS,
    attack: MonsterStatGrade.A,
    defence: MonsterStatGrade.SS,
    hp: MonsterStatGrade.S,
    type: MonsterType.HUMAN,
  },
  '다크 썬더 리추얼리스트': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E5%86%A5%E9%9C%86%E4%BB%AA%E8%80%85',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/e/ec/t81oo8hwplvc0xal6olscqigxt68pg1.png',
    grade: MonsterGrade.ARCHNEMESIS,
    attack: MonsterStatGrade.SS,
    defence: MonsterStatGrade.S,
    hp: MonsterStatGrade.SS,
    type: MonsterType.BETULA,
  },
  '마로더 톱': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E5%8A%AB%E6%8E%A0%E8%80%85%C2%B7%E6%89%A7%E9%94%AF',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/4/44/e655ylv4jq6bv51baomzfdh92awcnvp.png',
    grade: MonsterGrade.ARCHNEMESIS,
    attack: MonsterStatGrade.S,
    defence: MonsterStatGrade.B,
    hp: MonsterStatGrade.S,
    type: MonsterType.HUMAN,
  },
  '미스 골드': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E9%87%91%E5%AD%90%E5%B0%8F%E5%A7%90',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/d/de/eoqhjxm158fbrqgxnfo8na87gh18v7r.png',
    grade: MonsterGrade.ARCHNEMESIS,
    attack: MonsterStatGrade.S,
    defence: MonsterStatGrade.B,
    hp: MonsterStatGrade.S,
    type: MonsterType.MACHINE,
  },
  쥬드: {
    detail: 'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E6%9C%B1%E8%BF%AA',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/f/f2/1jhlrry48u3ltvc2i88sotzpsqcz19f.png',
    grade: MonsterGrade.ARCHNEMESIS,
    attack: MonsterStatGrade.A,
    defence: MonsterStatGrade.C,
    hp: MonsterStatGrade.C,
    type: MonsterType.ETC,
  },
  샤이어: {
    detail: 'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E5%A4%8F%E5%B0%94',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/e/e8/jzqqtpxpzgrcggxjipp889k19cgcmmy.png',
    grade: MonsterGrade.ARCHNEMESIS,
    attack: MonsterStatGrade.SS,
    defence: MonsterStatGrade.A,
    hp: MonsterStatGrade.S,
    type: MonsterType.HUMAN,
  },
  '암흑의 매머드': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E6%98%8F%E6%81%B6%E5%B7%A8%E8%B1%A1',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/e/e5/oi8iubgqnxn3t285ygo2v1bdc4jrzf0.png',
    grade: MonsterGrade.ARCHNEMESIS,
    attack: MonsterStatGrade.S,
    defence: MonsterStatGrade.S,
    hp: MonsterStatGrade.S,
    type: MonsterType.BETULA,
  },
  '혼란의 돌산호': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E6%B7%B7%E5%8E%84%E7%9F%B3%E8%8A%9D',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/e/e8/bsdxh5isjqspr8fq1e2d3zjsico31d1.png',
    grade: MonsterGrade.ARCHNEMESIS,
    attack: MonsterStatGrade.SS,
    defence: MonsterStatGrade.S,
    hp: MonsterStatGrade.S,
    type: MonsterType.BETULA,
  },
  '때리바 1000': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E6%8C%A8%E6%8F%8D%E5%AE%9D1000',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/2/26/9150r8u95iwz8xjzlweb1l0hq6we8ul.png',
    grade: MonsterGrade.ARCHNEMESIS,
    attack: MonsterStatGrade.S,
    defence: MonsterStatGrade.S,
    hp: MonsterStatGrade.C,
    type: MonsterType.MACHINE,
  },
  '때리바 2000': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E6%8C%A8%E6%8F%8D%E5%AE%9D2000',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/1/12/kt20akbr7i4yt8xhdotldrflyss0owv.png',
    grade: MonsterGrade.ARCHNEMESIS,
    attack: MonsterStatGrade.S,
    defence: MonsterStatGrade.S,
    hp: MonsterStatGrade.C,
    type: MonsterType.MACHINE,
  },
  '썬더스톰 BO-X 1000': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E9%9B%B7%E6%9A%B4%E6%B3%A2%E5%85%8B%E5%A3%AB1000',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/3/3f/dwu735yj8ljrzwldlq3rg2s7zebcmx1.png',
    grade: MonsterGrade.ARCHNEMESIS,
    attack: MonsterStatGrade.SS,
    defence: MonsterStatGrade.SS,
    hp: MonsterStatGrade.SSS,
    type: MonsterType.MACHINE,
  },
  '플레이밍 BO-X 1000': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E7%87%83%E7%84%B0%E6%B3%A2%E5%85%8B%E5%A3%AB1000',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/0/0a/0uk6huw44jclrc1r2ghs48d3phpnzi0.png',
    grade: MonsterGrade.ARCHNEMESIS,
    attack: MonsterStatGrade.SS,
    defence: MonsterStatGrade.SS,
    hp: MonsterStatGrade.SSS,
    type: MonsterType.MACHINE,
  },
  '콘덴싱 BO-X 1000': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E5%86%B7%E5%87%9D%E6%B3%A2%E5%85%8B%E5%A3%AB1000',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/5/5e/d8ann104fdufpwhjsw2hc0fm14ulc4k.png',
    grade: MonsterGrade.ARCHNEMESIS,
    attack: MonsterStatGrade.SS,
    defence: MonsterStatGrade.SS,
    hp: MonsterStatGrade.SSS,
    type: MonsterType.MACHINE,
  },
  MOM: {
    detail: 'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-MOM',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/b/b5/l4ny3rtz8to3zuabzaeghtv80dfv88r.png',
    grade: MonsterGrade.ARCHNEMESIS,
    attack: MonsterStatGrade.A,
    defence: MonsterStatGrade.A,
    hp: MonsterStatGrade.S,
    type: MonsterType.DORMANT,
  },
  '심면자-환술사': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E6%B7%B1%E7%9C%A0%E8%80%85%C2%B7%E8%BF%B7%E6%A2%A6',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/3/35/rhvaa4poajfjtohwiew0u3zlz2tqj8k.png',
    grade: MonsterGrade.ARCHNEMESIS,
    attack: MonsterStatGrade.A,
    defence: MonsterStatGrade.A,
    hp: MonsterStatGrade.S,
    type: MonsterType.DORMANT,
  },
  '심면자-나이트메어': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E6%B7%B1%E7%9C%A0%E8%80%85%C2%B7%E6%B2%89%E6%BA%BA',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/2/24/8x0ap5seifbvahojm7a5atsm95nw54x.png',
    grade: MonsterGrade.ARCHNEMESIS,
    attack: MonsterStatGrade.SS,
    defence: MonsterStatGrade.S,
    hp: MonsterStatGrade.S,
    type: MonsterType.DORMANT,
  },
  '사슬의 죄수': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E7%A5%B8%E9%93%BE%E5%9B%9A%E5%BE%92',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/c/ca/0crpop4x2xk1cr41csslgi0r0u1nlzf.png',
    grade: MonsterGrade.ARCHNEMESIS,
    attack: MonsterStatGrade.S,
    defence: MonsterStatGrade.S,
    hp: MonsterStatGrade.SS,
    type: MonsterType.DORMANT,
  },
  '멸망의 맹세': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E4%BD%9A%E4%BA%A1%E4%B9%8B%E8%AA%93',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/5/50/k1ofpkfrx3l6h21kse60uykhv67hbms.png',
    grade: MonsterGrade.ARCHNEMESIS,
    attack: MonsterStatGrade.SS,
    defence: MonsterStatGrade.S,
    hp: MonsterStatGrade.SS,
    type: MonsterType.DORMANT,
  },
  '조상들의 보복': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E8%BF%9C%E7%A5%96%E7%9A%84%E6%9E%9C%E6%8A%A5',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/5/5f/q5hitg6dthut03fz0ygrk8gbsu5c4d3.png',
    grade: MonsterGrade.ARCHNEMESIS,
    attack: MonsterStatGrade.SS,
    defence: MonsterStatGrade.B,
    hp: MonsterStatGrade.SS,
    type: MonsterType.DORMANT,
  },
  '황무지의 왕 - 피어싱 파워 아머': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E8%8D%92%E5%8E%9F%E7%8E%8B%C2%B7%E7%A9%BF%E5%87%BB%E5%8A%A8%E5%8A%9B%E7%94%B2',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/c/c7/lno0037lohscijetp708gidnzgdunc0.png',
    grade: MonsterGrade.ARCHNEMESIS,
    attack: MonsterStatGrade.B,
    defence: MonsterStatGrade.B,
    hp: MonsterStatGrade.S,
    type: MonsterType.HUMAN,
  },
  '위험방지장비 · ENI': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E5%BE%A1%E9%99%A9%E5%AF%B9%E7%AD%96%E6%9C%BA%E6%A2%B0%C2%B7%E8%89%BE%E5%B0%BC',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/2/2c/on1d1axsel2q4gnriunjrarqh1sxfit.png',
    grade: MonsterGrade.ARCHNEMESIS,
    attack: MonsterStatGrade.S,
    defence: MonsterStatGrade.S,
    hp: MonsterStatGrade.SS,
    type: MonsterType.MACHINE,
  },
  '슬레이어 전기톱': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E5%B1%A0%E6%88%AE%E8%80%85%C2%B7%E9%93%BE%E9%94%AF',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/9/97/4ngkro40oosutq53at96l07lt2g9sq5.png',
    grade: MonsterGrade.ARCHNEMESIS,
    attack: MonsterStatGrade.S,
    defence: MonsterStatGrade.S,
    hp: MonsterStatGrade.SS,
    type: MonsterType.HUMAN,
  },
  '죽지 않는': {
    detail: 'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E6%B0%B8%E7%94%9F%E8%80%85',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/9/9b/2ehqlychh57ty2m446skah0xgqajkkn.png',
    grade: MonsterGrade.ARCHNEMESIS,
    attack: MonsterStatGrade.SS,
    defence: MonsterStatGrade.A,
    hp: MonsterStatGrade.SS,
    type: MonsterType.ETC,
  },
  '두더지 기계': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E9%BC%B9%E9%BC%A0%E9%87%8D%E6%9C%BA',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/b/b0/pbtzbqtv7lgltmcgd9zomcrybpoul7t.png',
    grade: MonsterGrade.ARCHNEMESIS,
    attack: MonsterStatGrade.B,
    defence: MonsterStatGrade.C,
    hp: MonsterStatGrade.S,
    type: MonsterType.HUMAN,
  },
  두더지: {
    detail: 'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E9%BC%B9%E9%BC%A0',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/4/4d/f63qto4cdbdwifs9fw6dgei8qyx0jv8.png',
    grade: MonsterGrade.ARCHNEMESIS,
    attack: MonsterStatGrade.S,
    defence: MonsterStatGrade.A,
    hp: MonsterStatGrade.S,
    type: MonsterType.HUMAN,
  },
  '아니타 무장 초병': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E9%98%BF%E5%A6%AE%E5%A1%94%E6%AD%A6%E8%A3%85%E5%93%A8%E5%8D%AB',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/d/d5/b2qdi2dh6qhrfyw5tp96bpq41xj88wu.png',
    grade: MonsterGrade.ELITE,
    attack: MonsterStatGrade.A,
    defence: MonsterStatGrade.SS,
    hp: MonsterStatGrade.S,
    type: MonsterType.HUMAN,
  },
  '아니타 무장 위병': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E9%98%BF%E5%A6%AE%E5%A1%94%E6%AD%A6%E8%A3%85%E5%AE%88%E5%8D%AB',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/4/44/j3depdhm3sn5t6erbgo3wscqkomkyj8.png',
    grade: MonsterGrade.ELITE,
    attack: MonsterStatGrade.A,
    defence: MonsterStatGrade.SS,
    hp: MonsterStatGrade.S,
    type: MonsterType.HUMAN,
  },
  '방패배트 폭력배': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E7%9B%BE%E6%A3%92%E6%9A%B4%E5%BE%92',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/e/e6/preh1su014320gmclrpfxoyre11ojrv.png',
    grade: MonsterGrade.ELITE,
    attack: MonsterStatGrade.D,
    defence: MonsterStatGrade.C,
    hp: MonsterStatGrade.D,
    type: MonsterType.HUMAN,
  },
  '산탄총방패 폭력배': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E6%9E%AA%E7%9B%BE%E6%9A%B4%E5%BE%92',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/6/6a/ts2b5skkdovbld5y49ws32rglb8yd63.png',
    grade: MonsterGrade.ELITE,
    attack: MonsterStatGrade.D,
    defence: MonsterStatGrade.C,
    hp: MonsterStatGrade.D,
    type: MonsterType.HUMAN,
  },
  '방패소총 폭력배': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E7%9B%BE%E6%9E%AA%E6%9A%B4%E5%BE%92',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/3/34/1yaq84sycj5jl30frf026mmyfx1jlrb.png',
    grade: MonsterGrade.ELITE,
    attack: MonsterStatGrade.D,
    defence: MonsterStatGrade.C,
    hp: MonsterStatGrade.D,
    type: MonsterType.HUMAN,
  },
  '배트도끼 폭력배': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E6%A3%92%E6%96%A7%E6%9A%B4%E5%BE%92',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/3/3e/lbvp5grcyn1u2r10cn296xut04spugn.png',
    grade: MonsterGrade.ELITE,
    attack: MonsterStatGrade.D,
    defence: MonsterStatGrade.D,
    hp: MonsterStatGrade.D,
    type: MonsterType.HUMAN,
  },
  '쌍도끼 폭력배': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E5%8F%8C%E6%96%A7%E6%9A%B4%E5%BE%92',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/7/71/q1y3zeihshaixu4xhtcbvsoosy38a1q.png',
    grade: MonsterGrade.ELITE,
    attack: MonsterStatGrade.D,
    defence: MonsterStatGrade.C,
    hp: MonsterStatGrade.D,
    type: MonsterType.HUMAN,
  },
  '양손총 폭력배': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E5%8F%8C%E6%9E%AA%E6%9A%B4%E5%BE%92',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/4/4a/q49vi58xr511l2izu3d358kartrr6hm.png',
    grade: MonsterGrade.ELITE,
    attack: MonsterStatGrade.C,
    defence: MonsterStatGrade.D,
    hp: MonsterStatGrade.D,
    type: MonsterType.HUMAN,
  },
  '가시 베인링': {
    detail: 'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E9%B8%A3%E7%88%86%E8%99%AB',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/4/48/82jtt2wt6qixy4xabzapm16yb73ubg2.png',
    grade: MonsterGrade.ELITE,
    attack: MonsterStatGrade.D,
    defence: MonsterStatGrade.D,
    hp: MonsterStatGrade.D,
    type: MonsterType.BETULA,
  },
  '북부동맹 잔당-파워아머 선봉': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E5%8C%97%E9%98%B5%E6%AE%8B%E9%83%A8%C2%B7%E5%8A%A8%E5%8A%9B%E7%94%B2%E5%85%88%E9%94%8B',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/c/cc/k6qnts9zyga37nbdunj1v8igluy5pey.png',
    grade: MonsterGrade.ELITE,
    attack: MonsterStatGrade.A,
    defence: MonsterStatGrade.B,
    hp: MonsterStatGrade.C,
    type: MonsterType.HUMAN,
  },
  '북부동맹 잔당-파워아머 중포': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E5%8C%97%E9%98%B5%E6%AE%8B%E9%83%A8%C2%B7%E5%8A%A8%E5%8A%9B%E7%94%B2%E9%87%8D%E7%82%AE',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/8/82/qgdnz3b724541d0e6ifros9yov7ixn1.png',
    grade: MonsterGrade.ELITE,
    attack: MonsterStatGrade.A,
    defence: MonsterStatGrade.B,
    hp: MonsterStatGrade.C,
    type: MonsterType.HUMAN,
  },
  '북부동맹 잔당-파워아머 지원': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E5%8C%97%E9%98%B5%E6%AE%8B%E9%83%A8%C2%B7%E5%8A%A8%E5%8A%9B%E7%94%B2%E6%8F%B4%E6%8A%A4',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/f/fb/pipc1t8asay5mrb1sw5n3gbk6sgw2da.png',
    grade: MonsterGrade.ELITE,
    attack: MonsterStatGrade.A,
    defence: MonsterStatGrade.B,
    hp: MonsterStatGrade.C,
    type: MonsterType.HUMAN,
  },
  자주포: {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E8%87%AA%E8%B5%B0%E5%93%A8%E6%88%92%E7%82%AE',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/c/c0/4k8yemgz4o5g2dbeeysbuhyrvrd3o8t.png',
    grade: MonsterGrade.ELITE,
    attack: MonsterStatGrade.A,
    defence: MonsterStatGrade.B,
    hp: MonsterStatGrade.C,
    type: MonsterType.MACHINE,
  },
  '클로 베툴라 생명체': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E9%92%B5%E7%88%AA%E4%BD%93%E6%A1%A6%E6%A0%91%E7%94%9F%E7%89%A9',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/1/1e/g438rjj6iuvxkgu0t0z5fatrqdxlqkp.png',
    grade: MonsterGrade.ELITE,
    attack: MonsterStatGrade.B,
    defence: MonsterStatGrade.C,
    hp: MonsterStatGrade.S,
    type: MonsterType.BETULA,
  },
  '가시방벽 베툴라 생명체': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E5%88%BA%E5%A3%81%E4%BD%93%E6%A1%A6%E6%A0%91%E7%94%9F%E7%89%A9',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/7/7d/8n7i4upoe5f5l7p0gva1fkjcse6px3t.png',
    grade: MonsterGrade.ELITE,
    attack: MonsterStatGrade.B,
    defence: MonsterStatGrade.C,
    hp: MonsterStatGrade.S,
    type: MonsterType.BETULA,
  },
  '가시수염 베툴라 생명체': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E5%88%BA%E9%A1%BB%E4%BD%93%E6%A1%A6%E6%A0%91%E7%94%9F%E7%89%A9',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/a/a1/n91mh8wd24h0peq2ed33odlbmpgc2sw.png',
    grade: MonsterGrade.ELITE,
    attack: MonsterStatGrade.A,
    defence: MonsterStatGrade.C,
    hp: MonsterStatGrade.B,
    type: MonsterType.BETULA,
  },
  '배수체 베툴라 생명체': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E5%A4%9A%E5%80%8D%E4%BD%93%E6%A1%A6%E6%A0%91%E7%94%9F%E7%89%A9',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/0/01/tqnc944xsrpe2gzu0v83yi0nwyzpvkd.png',
    grade: MonsterGrade.ELITE,
    attack: MonsterStatGrade.B,
    defence: MonsterStatGrade.C,
    hp: MonsterStatGrade.B,
    type: MonsterType.BETULA,
  },
  '가도관 생명체': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E7%AE%A1%E8%83%9E%E4%BD%93%E6%A1%A6%E6%A0%91%E7%94%9F%E7%89%A9',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/7/74/091aqlioov1bnpgrgonxa049j7yu0f5.png',
    grade: MonsterGrade.ELITE,
    attack: MonsterStatGrade.B,
    defence: MonsterStatGrade.C,
    hp: MonsterStatGrade.B,
    type: MonsterType.BETULA,
  },
  '에너지 베툴라 생명체': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E6%91%84%E8%83%BD%E4%BD%93%E6%A1%A6%E6%A0%91%E7%94%9F%E7%89%A9',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/a/ac/adeyckjw2kwnhcq96cp1wwwigs14ska.png',
    grade: MonsterGrade.ELITE,
    attack: MonsterStatGrade.A,
    defence: MonsterStatGrade.C,
    hp: MonsterStatGrade.B,
    type: MonsterType.BETULA,
  },
  '반딧불 리자드': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E6%B5%AE%E8%90%A4%E6%B8%B8%E7%A3%B7',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/7/70/sav1frwul1pz4omed8lcemaoj83pc6s.png',
    grade: MonsterGrade.ELITE,
    attack: MonsterStatGrade.B,
    defence: MonsterStatGrade.A,
    hp: MonsterStatGrade.D,
    type: MonsterType.BETULA,
  },
  '왕관해마 베툴라 생명체': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E5%86%A0%E6%B5%B7%E9%A9%AC%E6%A1%A6%E6%A0%91%E7%94%9F%E7%89%A9',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/6/69/svgag527u9txpoebcs3ushu9cc0flgv.png',
    grade: MonsterGrade.ELITE,
    attack: MonsterStatGrade.A,
    defence: MonsterStatGrade.B,
    hp: MonsterStatGrade.B,
    type: MonsterType.BETULA,
  },
  '해룡 베툴라 생명체': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E6%B5%B7%E9%BE%99%E6%A1%A6%E6%A0%91%E7%94%9F%E7%89%A9',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/6/68/9hsktgfh043b6rpqcepfg8mnyu5v6xj.png',
    grade: MonsterGrade.ELITE,
    attack: MonsterStatGrade.A,
    defence: MonsterStatGrade.B,
    hp: MonsterStatGrade.B,
    type: MonsterType.BETULA,
  },
  '흑월 닌자': {
    detail: 'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E9%BB%91%E6%9C%88%E5%BF%8D',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/2/28/30revwzkjf8pw34swqznb6ow5kcpghb.png',
    grade: MonsterGrade.ELITE,
    attack: MonsterStatGrade.A,
    defence: MonsterStatGrade.A,
    hp: MonsterStatGrade.B,
    type: MonsterType.HUMAN,
  },
  '흑월 검사': {
    detail: 'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E9%BB%91%E6%9C%88%E5%89%91',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/a/a3/3xe1om90y9hq6adksjig5cv724y326w.png',
    grade: MonsterGrade.ELITE,
    attack: MonsterStatGrade.A,
    defence: MonsterStatGrade.A,
    hp: MonsterStatGrade.B,
    type: MonsterType.HUMAN,
  },
  '천둥 두개골': {
    detail: 'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E8%8D%92%E9%9B%B7%E9%A2%85',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/6/6c/dn648mzstqe5n7t16eun21fqnrm9zao.png',
    grade: MonsterGrade.ELITE,
    attack: MonsterStatGrade.S,
    defence: MonsterStatGrade.A,
    hp: MonsterStatGrade.B,
    type: MonsterType.BETULA,
  },
  '약탈자-해머': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E5%8A%AB%E6%8E%A0%E8%80%85%C2%B7%E6%89%A7%E9%94%A4',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/a/a8/h6mw25t49hff00hk547j6r18msw143p.png',
    grade: MonsterGrade.ELITE,
    attack: MonsterStatGrade.A,
    defence: MonsterStatGrade.C,
    hp: MonsterStatGrade.B,
    type: MonsterType.HUMAN,
  },
  '약탈자-썬더': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E5%8A%AB%E6%8E%A0%E8%80%85%C2%B7%E6%89%A7%E7%94%B5',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/1/14/dbsqnmdrklbmtxnwnpua6qyhaz8jb1w.png',
    grade: MonsterGrade.ELITE,
    attack: MonsterStatGrade.A,
    defence: MonsterStatGrade.C,
    hp: MonsterStatGrade.C,
    type: MonsterType.HUMAN,
  },
  '약탈자-파이어건': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E5%8A%AB%E6%8E%A0%E8%80%85%C2%B7%E6%89%A7%E7%81%AB',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/b/b3/ayofesg5lgvkqqyjnreq2fljryjljho.png',
    grade: MonsterGrade.ELITE,
    attack: MonsterStatGrade.S,
    defence: MonsterStatGrade.C,
    hp: MonsterStatGrade.B,
    type: MonsterType.HUMAN,
  },
  '약탈자-소드': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E5%8A%AB%E6%8E%A0%E8%80%85%C2%B7%E6%89%A7%E5%89%91',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/6/62/1n8w7sl101264crhzq6ccfdoixwj673.png',
    grade: MonsterGrade.ELITE,
    attack: MonsterStatGrade.A,
    defence: MonsterStatGrade.C,
    hp: MonsterStatGrade.B,
    type: MonsterType.HUMAN,
  },
  '골드 마이너 1호': {
    detail: 'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E6%8E%98%E9%87%911%E5%8F%B7',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/9/93/phezwfac0bev6u7vg16sh0qae07epdt.png',
    grade: MonsterGrade.ELITE,
    attack: MonsterStatGrade.B,
    defence: MonsterStatGrade.B,
    hp: MonsterStatGrade.B,
    type: MonsterType.MACHINE,
  },
  '골드 마이너 2호': {
    detail: 'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E6%8E%98%E9%87%912%E5%8F%B7',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/5/55/k9murcatu370s51idq8qb8tiyrxnfi6.png',
    grade: MonsterGrade.ELITE,
    attack: MonsterStatGrade.B,
    defence: MonsterStatGrade.B,
    hp: MonsterStatGrade.B,
    type: MonsterType.MACHINE,
  },
  '미친 곰': {
    detail: 'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E7%96%AF%E7%86%8A',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/5/5b/r6g0q5q2j8jgrrnu66rghl2j1cvl2wd.png',
    grade: MonsterGrade.ELITE,
    attack: MonsterStatGrade.SS,
    defence: MonsterStatGrade.S,
    hp: MonsterStatGrade.SS,
    type: MonsterType.HUMAN,
  },
  '팬텀 베어': {
    detail: 'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E5%B9%BB%E7%86%8A',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/a/a0/910qu40x7vsiv3j7qgim9ngtt7ia1w1.png',
    grade: MonsterGrade.ELITE,
    attack: MonsterStatGrade.SS,
    defence: MonsterStatGrade.S,
    hp: MonsterStatGrade.SS,
    type: MonsterType.HUMAN,
  },
  토끼: {
    detail: 'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E6%81%90%E5%85%94',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/3/31/ff5r1xjgjuzdge3qxmpumqvcckk7b7k.png',
    grade: MonsterGrade.ELITE,
    attack: MonsterStatGrade.SS,
    defence: MonsterStatGrade.S,
    hp: MonsterStatGrade.SS,
    type: MonsterType.HUMAN,
  },
  '미친 코끼리': {
    detail: 'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E7%8B%82%E8%B1%A1',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/6/6e/pdn2n8m1sh1edqlb3eoau1dhnftb37m.png',
    grade: MonsterGrade.ELITE,
    attack: MonsterStatGrade.SS,
    defence: MonsterStatGrade.S,
    hp: MonsterStatGrade.SS,
    type: MonsterType.HUMAN,
  },
  '혼란의 산호초': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E6%B7%B7%E5%8E%84%E6%9C%A8%E7%A4%81',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/6/60/9edradqgdczuh2tvs675msd7k3tlm70.png',
    grade: MonsterGrade.ELITE,
    attack: MonsterStatGrade.B,
    defence: MonsterStatGrade.C,
    hp: MonsterStatGrade.C,
    type: MonsterType.BETULA,
  },
  '혼돈의 시클펀': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E6%B5%91%E5%99%A9%E9%95%B0%E8%95%A8',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/f/f8/rgkv0m1qsj0yl9c8pe49xfu8sin8iqe.png',
    grade: MonsterGrade.ELITE,
    attack: MonsterStatGrade.B,
    defence: MonsterStatGrade.C,
    hp: MonsterStatGrade.C,
    type: MonsterType.BETULA,
  },
  '혼돈의 펑거스충': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E6%B5%91%E5%99%A9%E9%92%88%E8%95%88',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/0/07/o2akpijcw11duhd9d7nozvuch0kqjk4.png',
    grade: MonsterGrade.ELITE,
    attack: MonsterStatGrade.B,
    defence: MonsterStatGrade.C,
    hp: MonsterStatGrade.C,
    type: MonsterType.BETULA,
  },
  '혼란의 구골': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E6%B7%B7%E5%8E%84%E6%9E%B8%E9%AA%A8',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/6/67/3h072qob923gxkx2kt2adj004axmnmp.png',
    grade: MonsterGrade.ELITE,
    attack: MonsterStatGrade.B,
    defence: MonsterStatGrade.C,
    hp: MonsterStatGrade.C,
    type: MonsterType.BETULA,
  },
  '심면자-수호자': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E6%B7%B1%E7%9C%A0%E8%80%85%C2%B7%E8%BF%B7%E7%97%B4',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/6/67/svt61t8bs5wk64v9r630e9nx8gai4wm.png',
    grade: MonsterGrade.ELITE,
    attack: MonsterStatGrade.A,
    defence: MonsterStatGrade.SS,
    hp: MonsterStatGrade.S,
    type: MonsterType.DORMANT,
  },
  '심면자-전사': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E6%B7%B1%E7%9C%A0%E8%80%85%C2%B7%E8%BF%B7%E6%84%9A',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/e/ed/lbewrvqi8f0noq1tbz9e06i41yquywu.png',
    grade: MonsterGrade.ELITE,
    attack: MonsterStatGrade.A,
    defence: MonsterStatGrade.SS,
    hp: MonsterStatGrade.S,
    type: MonsterType.DORMANT,
  },
  '심면자-암살자': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E6%B7%B1%E7%9C%A0%E8%80%85%C2%B7%E8%BF%B7%E9%80%94',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/f/fa/niorc84atubjvnqp6kbfq2az576c02z.png',
    grade: MonsterGrade.ELITE,
    attack: MonsterStatGrade.A,
    defence: MonsterStatGrade.SS,
    hp: MonsterStatGrade.S,
    type: MonsterType.DORMANT,
  },
  '심면자-검사': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E6%B7%B1%E7%9C%A0%E8%80%85%C2%B7%E8%BF%B7%E8%B8%AA',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/c/c3/gsronn1pq255sr552djpt0qzwwbvvwr.png',
    grade: MonsterGrade.ELITE,
    attack: MonsterStatGrade.A,
    defence: MonsterStatGrade.SS,
    hp: MonsterStatGrade.S,
    type: MonsterType.DORMANT,
  },
  '심면자-마법사': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E6%B7%B1%E7%9C%A0%E8%80%85%C2%B7%E8%BF%B7%E6%83%98',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/a/a5/2pmbzobrsdbqb5xrr462q93xvqk8ksk.png',
    grade: MonsterGrade.ELITE,
    attack: MonsterStatGrade.A,
    defence: MonsterStatGrade.C,
    hp: MonsterStatGrade.B,
    type: MonsterType.DORMANT,
  },
  '심면자-냉기술사': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E6%B7%B1%E7%9C%A0%E8%80%85%C2%B7%E8%BF%B7%E7%A6%BB',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/3/3d/fy0jw7ovmaxfjbup7yi47ls9dlj6tbc.png',
    grade: MonsterGrade.ELITE,
    attack: MonsterStatGrade.A,
    defence: MonsterStatGrade.C,
    hp: MonsterStatGrade.C,
    type: MonsterType.DORMANT,
  },
  '방랑자-유탄발사병': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E6%8B%BE%E8%8D%92%E8%80%85%C2%B7%E6%A6%B4%E5%BC%B9%E7%BB%84',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/9/97/65c4dic30umviugezzhssrpaoumi4yg.png',
    grade: MonsterGrade.ELITE,
    attack: MonsterStatGrade.A,
    defence: MonsterStatGrade.D,
    hp: MonsterStatGrade.D,
    type: MonsterType.HUMAN,
  },
  '방랑자-철관강습병': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E6%8B%BE%E8%8D%92%E8%80%85%C2%B7%E9%93%81%E7%AE%A1%E5%8A%9B%E5%A3%AB',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/5/5d/kis8fk99mkvl5zlgo0j4yfetw4nyxrb.png',
    grade: MonsterGrade.ELITE,
    attack: MonsterStatGrade.A,
    defence: MonsterStatGrade.C,
    hp: MonsterStatGrade.C,
    type: MonsterType.HUMAN,
  },
  '방랑자-화염방사병': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E6%8B%BE%E8%8D%92%E8%80%85%C2%B7%E5%96%B7%E7%81%AB%E5%8A%9B%E5%A3%AB',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/8/88/amzfwoguduq37j3wzt609hc3fso60dq.png',
    grade: MonsterGrade.ELITE,
    attack: MonsterStatGrade.A,
    defence: MonsterStatGrade.C,
    hp: MonsterStatGrade.C,
    type: MonsterType.HUMAN,
  },
  플레이아데스: {
    detail: 'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E6%98%B4%E5%AE%BF%E4%B8%80',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/4/47/tnoxe4re7l8j7o7wd76naaciagvpfrq.png',
    grade: MonsterGrade.ELITE,
    attack: MonsterStatGrade.SS,
    defence: MonsterStatGrade.S,
    hp: MonsterStatGrade.SS,
    type: MonsterType.MACHINE,
  },
  알키오네: {
    detail: 'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E6%98%B4%E5%AE%BF%E5%85%AD',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/d/d1/b393c44bf5tdnkimr86colcgtg4n11u.png',
    grade: MonsterGrade.ELITE,
    attack: MonsterStatGrade.SS,
    defence: MonsterStatGrade.S,
    hp: MonsterStatGrade.SS,
    type: MonsterType.MACHINE,
  },
  '두더지파-파워아머 철권': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E9%BC%B9%E9%BC%A0%E5%B8%AE%C2%B7%E5%8A%A8%E5%8A%9B%E7%94%B2%E9%92%A2%E6%8B%B3',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/d/d8/f9pf4gtawulo341j4dxo2ezt7rsiqbg.png',
    grade: MonsterGrade.ELITE,
    attack: MonsterStatGrade.B,
    defence: MonsterStatGrade.B,
    hp: MonsterStatGrade.S,
    type: MonsterType.HUMAN,
  },
  '두더지파-파워아머 화포': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E9%BC%B9%E9%BC%A0%E5%B8%AE%C2%B7%E5%8A%A8%E5%8A%9B%E7%94%B2%E8%BD%B0%E7%81%AB',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/2/21/0a5gjwilf1uakxpzxdvj60ekhv8seeb.png',
    grade: MonsterGrade.ELITE,
    attack: MonsterStatGrade.B,
    defence: MonsterStatGrade.C,
    hp: MonsterStatGrade.B,
    type: MonsterType.HUMAN,
  },
  '두더지파-파워아머 전자포': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E9%BC%B9%E9%BC%A0%E5%B8%AE%C2%B7%E5%8A%A8%E5%8A%9B%E7%94%B2%E6%BF%80%E7%94%B5',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/9/9b/jmoh0vdh4ewadyuo99xnt917ss4mcfw.png',
    grade: MonsterGrade.ELITE,
    attack: MonsterStatGrade.B,
    defence: MonsterStatGrade.C,
    hp: MonsterStatGrade.B,
    type: MonsterType.HUMAN,
  },
  '두더지파-파워아머 전기톱': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E9%BC%B9%E9%BC%A0%E5%B8%AE%C2%B7%E5%8A%A8%E5%8A%9B%E7%94%B2%E9%93%BE%E9%94%AF',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/4/42/8qxc825bjlm1kf6oij7korfj48al8df.png',
    grade: MonsterGrade.ELITE,
    attack: MonsterStatGrade.B,
    defence: MonsterStatGrade.C,
    hp: MonsterStatGrade.B,
    type: MonsterType.HUMAN,
  },
  '두더지파-돌격차': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E9%BC%B9%E9%BC%A0%E5%B8%AE%C2%B7%E7%AA%81%E5%87%BB%E8%BD%A6%E6%9A%B4%E5%BE%92',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/d/d6/q0a8rc8v9wzq3zosst9o95q9z6aa9ip.png',
    grade: MonsterGrade.ELITE,
    attack: MonsterStatGrade.B,
    defence: MonsterStatGrade.C,
    hp: MonsterStatGrade.B,
    type: MonsterType.HUMAN,
  },
  장애물: {
    detail: 'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E8%B7%AF%E9%9A%9C',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/6/60/45vcipiggcmv85dmj1wzqmri7o0ekrt.png',
    grade: MonsterGrade.NORMAL,
    attack: MonsterStatGrade.D,
    defence: MonsterStatGrade.D,
    hp: MonsterStatGrade.D,
    type: MonsterType.MACHINE,
  },
  '방폭방패 폭력배': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E9%98%B2%E7%88%86%E7%9B%BE%E6%9A%B4%E5%BE%92',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/8/8f/a38b4im0pjh4plw9ruo13uzn652w00l.png',
    grade: MonsterGrade.NORMAL,
    attack: MonsterStatGrade.D,
    defence: MonsterStatGrade.C,
    hp: MonsterStatGrade.D,
    type: MonsterType.HUMAN,
  },
  '야구배트 폭력배': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E6%A3%92%E7%90%83%E6%9A%B4%E5%BE%92',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/5/58/s34e2d5f0x9j0069hi6ji056l8g60yr.png',
    grade: MonsterGrade.NORMAL,
    attack: MonsterStatGrade.D,
    defence: MonsterStatGrade.D,
    hp: MonsterStatGrade.D,
    type: MonsterType.HUMAN,
  },
  '소방도끼 폭력배': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E6%B6%88%E9%98%B2%E6%96%A7%E6%9A%B4%E5%BE%92',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/2/29/b251tjm5p84p8n9nm6tsit4uyn3zubz.png',
    grade: MonsterGrade.NORMAL,
    attack: MonsterStatGrade.D,
    defence: MonsterStatGrade.D,
    hp: MonsterStatGrade.D,
    type: MonsterType.HUMAN,
  },
  '산탄총 폭력배': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E9%9C%B0%E5%BC%B9%E6%9E%AA%E6%9A%B4%E5%BE%92',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/e/e1/r9po5n739b9eznqqwmeh5rpzkrgm8rz.png',
    grade: MonsterGrade.NORMAL,
    attack: MonsterStatGrade.D,
    defence: MonsterStatGrade.D,
    hp: MonsterStatGrade.D,
    type: MonsterType.HUMAN,
  },
  '소총 폭력배': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E6%AD%A5%E6%9E%AA%E6%9A%B4%E5%BE%92',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/4/4e/ql7es2asim0np2ciy4b6vx64rojg6q7.png',
    grade: MonsterGrade.NORMAL,
    attack: MonsterStatGrade.C,
    defence: MonsterStatGrade.D,
    hp: MonsterStatGrade.D,
    type: MonsterType.HUMAN,
  },
  '전자총 폭력배': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E7%94%B5%E6%9E%AA%E6%9A%B4%E5%BE%92',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/c/cd/5bu6e0fv357coeot9lyy8mqylnwczlc.png',
    grade: MonsterGrade.NORMAL,
    attack: MonsterStatGrade.D,
    defence: MonsterStatGrade.D,
    hp: MonsterStatGrade.D,
    type: MonsterType.HUMAN,
  },
  베인링: {
    detail: 'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E7%88%86%E8%99%AB',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/7/78/isol06udy5255czxjrcg661bzc5uzd9.png',
    grade: MonsterGrade.NORMAL,
    attack: MonsterStatGrade.D,
    defence: MonsterStatGrade.D,
    hp: MonsterStatGrade.D,
    type: MonsterType.BETULA,
  },
  '북부동맹 잔당-첨병': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E5%8C%97%E9%98%B5%E6%AE%8B%E9%83%A8%C2%B7%E5%B0%96%E5%85%B5',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/e/e3/r3c2ofe67cmtwbd7ia1y32qwstig7fe.png',
    grade: MonsterGrade.NORMAL,
    attack: MonsterStatGrade.B,
    defence: MonsterStatGrade.B,
    hp: MonsterStatGrade.C,
    type: MonsterType.HUMAN,
  },
  '북부동맹 잔당-중기관총병': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E5%8C%97%E9%98%B5%E6%AE%8B%E9%83%A8%C2%B7%E9%87%8D%E6%9C%BA%E6%9E%AA%E5%85%B5',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/a/a2/j96pkxodqjcttbuyzoylw2rwjb4vtcp.png',
    grade: MonsterGrade.NORMAL,
    attack: MonsterStatGrade.A,
    defence: MonsterStatGrade.B,
    hp: MonsterStatGrade.C,
    type: MonsterType.HUMAN,
  },
  '북부동맹 잔당-유탄소총병': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E5%8C%97%E9%98%B5%E6%AE%8B%E9%83%A8%C2%B7%E6%A6%B4%E5%BC%B9%E6%9E%AA%E5%85%B5',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/7/7d/k5sdzvk0zk840sgqkr3ghwcvffngpb0.png',
    grade: MonsterGrade.NORMAL,
    attack: MonsterStatGrade.A,
    defence: MonsterStatGrade.B,
    hp: MonsterStatGrade.C,
    type: MonsterType.HUMAN,
  },
  '봉오리 베툴라 생명체': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E9%AA%A8%E6%9C%B5%E6%A1%A6%E6%A0%91%E7%94%9F%E7%89%A9',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/e/e4/axjn9v7jvvu9utmwq43u55uk6k7h1l4.png',
    grade: MonsterGrade.NORMAL,
    attack: MonsterStatGrade.D,
    defence: MonsterStatGrade.D,
    hp: MonsterStatGrade.D,
    type: MonsterType.BETULA,
  },
  '자성 베툴라 생명체': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E9%9B%8C%E8%95%8A%E6%A1%A6%E6%A0%91%E7%94%9F%E7%89%A9',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/7/79/k95uci3ndt9wz9bxwo6xj4bfwzflap6.png',
    grade: MonsterGrade.NORMAL,
    attack: MonsterStatGrade.C,
    defence: MonsterStatGrade.C,
    hp: MonsterStatGrade.D,
    type: MonsterType.BETULA,
  },
  '웅성 베툴라 생명체': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E9%9B%84%E8%95%8A%E6%A1%A6%E6%A0%91%E7%94%9F%E7%89%A9',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/d/db/4xgs2hps27ng476344tv2oxtk9kl3sl.png',
    grade: MonsterGrade.NORMAL,
    attack: MonsterStatGrade.D,
    defence: MonsterStatGrade.D,
    hp: MonsterStatGrade.D,
    type: MonsterType.BETULA,
  },
  샌드비틀: {
    detail: 'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E6%BD%9C%E6%B2%99%E7%94%B2',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/f/f9/j87bgnwpoybfkywv1mqle6as88ym6lh.png',
    grade: MonsterGrade.NORMAL,
    attack: MonsterStatGrade.A,
    defence: MonsterStatGrade.A,
    hp: MonsterStatGrade.C,
    type: MonsterType.BETULA,
  },
  샌드웜: {
    detail: 'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E9%92%BB%E6%B2%99%E8%99%AB',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/b/bd/7qqguwvyosoondjckz06ytscqxl260j.png',
    grade: MonsterGrade.NORMAL,
    attack: MonsterStatGrade.B,
    defence: MonsterStatGrade.A,
    hp: MonsterStatGrade.D,
    type: MonsterType.BETULA,
  },
  '악룡어 베툴라 생명체': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E9%A2%8C%E9%BE%99%E9%B1%BC%E6%A1%A6%E6%A0%91%E7%94%9F%E7%89%A9',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/e/e7/0ipxoiaz523bs80kyci7vrtxcd26gqe.png',
    grade: MonsterGrade.NORMAL,
    attack: MonsterStatGrade.A,
    defence: MonsterStatGrade.B,
    hp: MonsterStatGrade.B,
    type: MonsterType.BETULA,
  },
  '해마 베툴라 생명체': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E6%B5%B7%E9%A9%AC%E6%A1%A6%E6%A0%91%E7%94%9F%E7%89%A9',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/5/51/8uk8eyaji222n4tlpavwdmivd4sun2w.png',
    grade: MonsterGrade.NORMAL,
    attack: MonsterStatGrade.A,
    defence: MonsterStatGrade.B,
    hp: MonsterStatGrade.B,
    type: MonsterType.BETULA,
  },
  '흑월 사수': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E9%BB%91%E6%9C%88%E7%94%B5%E6%9E%AA',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/6/63/4xg13ei2qm3x6nufq78e7jd5yepjo8s.png',
    grade: MonsterGrade.NORMAL,
    attack: MonsterStatGrade.A,
    defence: MonsterStatGrade.B,
    hp: MonsterStatGrade.C,
    type: MonsterType.HUMAN,
  },
  '뇌우 버그': {
    detail: 'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E9%9B%B7%E6%9A%B4%E8%99%AB',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/d/d3/0rfc35fqselbb0dj7vcea81o0w5esjy.png',
    grade: MonsterGrade.NORMAL,
    attack: MonsterStatGrade.S,
    defence: MonsterStatGrade.A,
    hp: MonsterStatGrade.B,
    type: MonsterType.BETULA,
  },
  '야생 번개막대': {
    detail: 'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E8%8D%92%E9%9B%B7%E9%92%88',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/0/02/2qn65c4ibl5wavq9ezyfzblxncx2bow.png',
    grade: MonsterGrade.NORMAL,
    attack: MonsterStatGrade.S,
    defence: MonsterStatGrade.A,
    hp: MonsterStatGrade.B,
    type: MonsterType.BETULA,
  },
  '사막 도적단 도끼잡이': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E6%B2%99%E7%9B%97%E6%96%A7%E6%89%8B',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/8/8b/mxn2w6lm63mzj9gsp5kvwhsgt9aklgg.png',
    grade: MonsterGrade.NORMAL,
    attack: MonsterStatGrade.B,
    defence: MonsterStatGrade.C,
    hp: MonsterStatGrade.C,
    type: MonsterType.HUMAN,
  },
  '사막 도적단 기사': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E6%B2%99%E7%9B%97%E9%AA%91%E5%A3%AB',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/b/b0/5zji0zbg67ho6qxb0zje696m7hi3oxx.png',
    grade: MonsterGrade.NORMAL,
    attack: MonsterStatGrade.A,
    defence: MonsterStatGrade.C,
    hp: MonsterStatGrade.C,
    type: MonsterType.HUMAN,
  },
  '혼란의 틸란시아': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E6%B7%B7%E5%8E%84%E9%93%81%E5%85%B0',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/a/a4/2c4gkm2yl2zaysf4b6x8yzuk6znlml4.png',
    grade: MonsterGrade.NORMAL,
    attack: MonsterStatGrade.A,
    defence: MonsterStatGrade.C,
    hp: MonsterStatGrade.B,
    type: MonsterType.BETULA,
  },
  '혼돈의 웜도브': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E6%B5%91%E5%99%A9%E8%99%AB%E9%B8%A0',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/7/73/o63y6iloi8zuwoqup1rme0vuyfb1s90.png',
    grade: MonsterGrade.NORMAL,
    attack: MonsterStatGrade.B,
    defence: MonsterStatGrade.C,
    hp: MonsterStatGrade.C,
    type: MonsterType.BETULA,
  },
  '암흑의 코르부스': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E6%98%8F%E6%81%B6%E6%B8%A1%E9%B8%A6',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/3/30/6e0wwui9b27ba56v237x3hwdgy06ftk.png',
    grade: MonsterGrade.NORMAL,
    attack: MonsterStatGrade.B,
    defence: MonsterStatGrade.C,
    hp: MonsterStatGrade.C,
    type: MonsterType.BETULA,
  },
  '방랑자-소총병': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E6%8B%BE%E8%8D%92%E8%80%85%C2%B7%E7%81%AB%E6%9E%AA%E7%BB%84',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/0/01/4im3siakhcdbe7i73qcx7s877jozr2d.png',
    grade: MonsterGrade.NORMAL,
    attack: MonsterStatGrade.B,
    defence: MonsterStatGrade.D,
    hp: MonsterStatGrade.D,
    type: MonsterType.HUMAN,
  },
  '방랑자-의료팀': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E6%8B%BE%E8%8D%92%E8%80%85%C2%B7%E6%89%B6%E5%8D%B1%E7%BB%84',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/d/d4/ia50g5eqkwmuvpvlsefnt0570zac7nj.png',
    grade: MonsterGrade.NORMAL,
    attack: MonsterStatGrade.C,
    defence: MonsterStatGrade.D,
    hp: MonsterStatGrade.D,
    type: MonsterType.HUMAN,
  },
  '방랑자-지원팀': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E6%8B%BE%E8%8D%92%E8%80%85%C2%B7%E5%90%8E%E6%8F%B4%E7%BB%84',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/e/e5/8j7rsn4elgg5qe5gnjs3mox32bvjp99.png',
    grade: MonsterGrade.NORMAL,
    attack: MonsterStatGrade.C,
    defence: MonsterStatGrade.D,
    hp: MonsterStatGrade.D,
    type: MonsterType.HUMAN,
  },
  '방랑자-머스킷 선봉': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E6%8B%BE%E8%8D%92%E8%80%85%C2%B7%E7%81%AB%E6%9E%AA%E5%85%88%E9%94%8B',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/d/df/tumvh9glyf322ucehvkf6pwvcz9ifkb.png',
    grade: MonsterGrade.NORMAL,
    attack: MonsterStatGrade.B,
    defence: MonsterStatGrade.C,
    hp: MonsterStatGrade.D,
    type: MonsterType.HUMAN,
  },
  '방랑자-스피어 선봉': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E6%8B%BE%E8%8D%92%E8%80%85%C2%B7%E9%95%BF%E6%9E%AA%E5%85%88%E9%94%8B',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/b/be/cizxhz45w9lxzchw9qgteka6a2b992a.png',
    grade: MonsterGrade.NORMAL,
    attack: MonsterStatGrade.C,
    defence: MonsterStatGrade.C,
    hp: MonsterStatGrade.D,
    type: MonsterType.HUMAN,
  },
}

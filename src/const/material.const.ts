import { RS_GRADE } from '@/const/character/character.enum'
import _ from 'lodash'
import { RSEquipmentEarnPath } from '@/const/archive/equipment.const'

export enum RSMaterialType {
  AVATAR = 'AVATAR',
  DRESS = 'DRESS',
}

export enum RSDressType {
  SET = '세트',
  SHOES = '신발',
  EYE = '눈 장식',
}

export interface RSMaterial {
  grade: RS_GRADE
  thumbnail: string
  desc: string
  type?: RSMaterialType
  dressType?: RSDressType
  earnsPath?: RSEquipmentEarnPath[]
}

export const MATERIALS: { [key: string]: RSMaterial } = {
  '디지털화 사고': {
    grade: RS_GRADE.R,
    desc: `캐릭터 공명에 필요한 필수 재료.\n공명 환경을 통해 실현된 생물의 사고를 디지털화한 기술의 산물. 자체로도 사용자의 능력을 어느정도 향상시킬 수 있지만, 주로 회수된 원시적 사고 조각을 안정화하고 희석하는 '용매'로 사용됩니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/f/f6/cowr2p94urdngkfpylo5d3vb7018oze.png',
  },
  '원시적 사고': {
    grade: RS_GRADE.SR,
    desc: `캐릭터 공명에 필요한 필수 재료.\n공명 환경을 통해 실현된, 다른 생물의 사고와 직접 공명하는 기술의 산물. 비록 적일지라도 전투 중에는 훌륭한 품격이 발휘됩니다. 이 품격은 형태장에 흔적을 남기며, 이러한 흔적은 회수되어 사용자의 다양한 능력을 강화하는데 사용될 수 있습니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/7/75/h8g5j6s0d38gn32bqiom4my25fn27og.png',
  },
  '철도연맹 코인': {
    grade: RS_GRADE.SSR,
    desc: `철도연맹에서 발행하는 에너지 본위제 재화입니다. '전자표'라고도 불리고 있습니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/d/dc/fpzfzpsg7iddangr3bt2u7iwr8ksnir.png',
  },
  '모노리스 조각': {
    grade: RS_GRADE.SSR,
    desc: `베툴라 공간에서 발견된 길이, 너비, 높이가 1:2:3 비율인 검은 돌판의 일부입니다. 이 돌판이 방출하는 형태 공명은 인간의 잠재력을 촉진하여 전방위적인 진화를 이끌어냅니다. 구체적인 원리는 아직 밝혀지지 않았습니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/7/73/e6c182cprplbhwggsmqlicm15ml5a7y.png',
  },

  '베툴라 자사낭': {
    grade: RS_GRADE.SR,
    desc: `촉수 베툴라 생명체의 기관으로, 이 기관은 베툴라 생명체가 형태장에서 '부유'할 수 있게 합니다. 이 기관은 열역학 제2법칙을 일정 부분 위반하여 일정 범위내에서 열을 흡수할 수 있습니다. 보고서에는 '차가운 맛을 느낄 수 있으며 빙수에 첨가할 수 있다. 가열하면 석회질 물질로 변해 먹을 수 없다'고 적혀 있습니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/thumb/4/4a/t8yhd3kxpo1dyt76aiwoqn2tf4y9zte.png/180px-%E6%A1%A6%E6%A0%91%E5%88%BA%E4%B8%9D%E5%9B%8A.png',
  },
  열화석: {
    grade: RS_GRADE.R,
    desc: ``,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/d/db/afxupxl6731dwzj7g68direzrth0mkn.png',
  },
  '베툴라 분비선': {
    grade: RS_GRADE.R,
    desc: `베툴라 생명체는 일반적인 환경에서 죽은 후, 분비선이 용이하게 네거필름 뉴트리노의 형태로 보존됩니다. 그래서 네거필름 뉴트리노 재료를 제조하는 기초 자원으로 사용됩니다.\n[베툴라 분비선]은 열차 전력 엔진을 업그레이드하는데 중요한 재료입니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/thumb/a/a2/8aii2fodj2jz8c43gn3useghh4hnxmp.png/180px-%E6%A1%A6%E6%A0%91%E8%85%BA%E4%BD%93.png',
  },

  '맨더 공구함': {
    grade: RS_GRADE.N,
    desc: ``,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/0/0d/m8v7ggchn96owg903ydr7kbrmvf4vj4.png',
  },

  '레일용 특수 강재': {
    grade: RS_GRADE.N,
    desc: ``,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/a/ac/eyzgn2a781uv63h2dtf1grn96ujffc1.png',
  },
  황동: {
    grade: RS_GRADE.N,
    desc: ``,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/b/b6/ate9jil117a1ls3zkmxkvk3yx9pq4vj.png',
  },
  '철근 콘크리트 침목': {
    grade: RS_GRADE.N,
    desc: ``,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/a/af/sq9zrcbvyur9jbwpplfn6rm7esxs38k.png',
  },
  건축자재: {
    grade: RS_GRADE.N,
    desc: ``,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/e/e1/m5t9ijfksyou3a2dee05go7xf4f1qse.png',
  },
  철광석: {
    grade: RS_GRADE.N,
    desc: ``,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/e/eb/qes5tq9ehq3wh5u9kdapv72smrofd6i.png',
  },
  석재: {
    grade: RS_GRADE.N,
    desc: ``,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/9/92/25l8faj5in4f8ef47pyj9183vuzv6vi.png',
  },
  '모래와 자갈': {
    grade: RS_GRADE.N,
    desc: ``,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/0/01/gtjvyd0j6blcn86dk0iswvtstbusl5s.png',
  },

  '도시 명성': {
    grade: RS_GRADE.SR,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/a/ae/p8mn1lnus6aof4infywlbh1jrq3jqyx.png',
  },
  '임무 의뢰서': {
    grade: RS_GRADE.R,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/thumb/6/6d/knrynilgw9rnhc1sp09nmvhp55pqt9w.png/180px-%E4%BB%BB%E5%8A%A1%E5%A7%94%E6%89%98%E4%B9%A6.png',
  },
  '구매 요청서': {
    grade: RS_GRADE.SR,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/thumb/9/93/lswtiv75k7ds46imxxldnjux9x60hc8.png/180px-%E8%BF%9B%E8%B4%A7%E9%87%87%E4%B9%B0%E4%B9%A6.png',
  },
  '재협상 신청서': {
    grade: RS_GRADE.SR,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/thumb/3/37/kl9btkjw6qzbwrez60smy15c2zia4za.png/180px-%E5%86%8D%E4%BA%A4%E6%B6%89%E8%AF%B7%E6%B1%82%E4%B9%A6.png',
  },
  '아니타 일반 장비함': {
    grade: RS_GRADE.R,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/2/25/082xcjkd8ifroajgj9st6fhqh7nneys.png',
  },
  '사과 박하 사탕': {
    grade: RS_GRADE.R,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/thumb/7/7b/0r0g6mcnsyjjrsxbk24g41zcxvmghwc.png/180px-%E9%93%B6%E6%9E%9D%E8%96%84%E8%8D%B7%E7%B3%96.png',
  },
  '광고 노출권': {
    grade: RS_GRADE.SR,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/thumb/4/48/5ulh2fkueceuwcor6w22ltxsndvk1ba.png/180px-%E5%B9%BF%E5%91%8A%E6%8A%95%E6%94%BE%E5%88%B8.png',
  },
  '아니타 정예 장비함': {
    grade: RS_GRADE.SR,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/0/0d/082xcjkd8ifroajgj9st6fhqh7nneys.png',
  },
  '소음 효소': {
    grade: RS_GRADE.SSR,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/a/a2/69xvwe7h9sh4ekdk1k19filbi4hpe2q.png',
  },
  일거양득: {
    grade: RS_GRADE.SR,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/thumb/4/44/r2rhxgq0646y6yw8hl22nxvlx4o6cky.png/180px-%E2%80%9C%E4%B8%80%E5%85%83%E4%BA%8C%E6%AC%A1%E2%80%9D.png',
  },
  '아니타 탐색 장비함': {
    grade: RS_GRADE.SSR,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/a/a6/082xcjkd8ifroajgj9st6fhqh7nneys.png',
  },
  '진저 릴리 향수': {
    grade: RS_GRADE.R,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/thumb/e/e3/5a5zzdax384ong05e8kt9ay7g0i8l6c.png/180px-%E2%80%9C%E8%B1%86%E8%94%BB%E5%A7%9C%E7%99%BE%E5%90%88%E2%80%9D.png',
  },
  '피쉬 동맹 휘장': {
    grade: RS_GRADE.SSR,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/thumb/4/45/ciitapaxa21tix4ae6u27x3v1xb4zgf.png/180px-%E5%A8%83%E5%A8%83%E9%B1%BC%E5%90%8C%E7%9B%9F%E5%BE%BD%E7%AB%A0.png',
  },

  '탄약 가속 장치': {
    grade: RS_GRADE.N,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/1/13/dsrgqjhy28lvd2tq9mzjfwzsmq3rbs4.png',
  },
  '자동차 부품': {
    grade: RS_GRADE.N,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/e/ed/88cga9agjiun02dlcw7qws3o7oj5s5h.png',
  },
  홍차: {
    grade: RS_GRADE.N,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/f/fb/d2kyjtvwjwplb49n5e7whzoa0fdz24o.png',
  },
  '고급 식기': {
    grade: RS_GRADE.N,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/b/b3/d7kyhrqgmtot2k3z4ur8pj3q8kgu4sw.png',
  },
  '와드 치킨': {
    grade: RS_GRADE.N,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/2/24/ctqrtilsqrvq6eufkpy1q26kcrfnj4t.png',
  },
  통조림: {
    grade: RS_GRADE.N,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/4/4b/0zedamqexxwf22h090m3tf7lg0lp0g6.png',
  },
  '와드 샘물': {
    grade: RS_GRADE.N,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/1/1d/ewqofm8cp50ifa90coboatvturb0mch.png',
  },

  게임기: {
    grade: RS_GRADE.N,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/b/b1/pd9p317r8y7tjc3ccx10mdycgo3xt5l.png',
  },
  스피커: {
    grade: RS_GRADE.N,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/3/36/q1lf59impymouoda0lq6sa9mjjkdu4h.png',
  },
  '게임 카트리지': {
    grade: RS_GRADE.N,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/a/ad/81g1kxafrcq0lbhjtl4b7mbmsw20u36.png',
  },
  '녹화 테이프': {
    grade: RS_GRADE.N,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/e/e8/t4wq1moc8ajzqh0b0xuzamc2xeatarv.png',
  },
  형광봉: {
    grade: RS_GRADE.N,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/c/c3/27oy0yqwl3o5fl0rmeaglnwf7aeurqy.png',
  },
  '열차 장난감': {
    grade: RS_GRADE.N,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/7/70/8hp1058uib7k4pzq8zq7t4ef3z4g1xl.png',
  },
  '녹음 테이프': {
    grade: RS_GRADE.N,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/f/ff/g7y3tjpyndorenxi012jxqgbu9mr4a5.png',
  },

  철강: {
    grade: RS_GRADE.N,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/4/48/th8zmhzfzhgoowem213rtk1p9xif3lp.png',
  },
  'C4 폭약': {
    grade: RS_GRADE.N,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/0/0e/rmqrtar13zc4h1uj233rr9qqp9416p3.png',
  },
  탄알: {
    grade: RS_GRADE.N,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/c/c4/n1uu1prg1c18znj186wkboadg25q903.png',
  },
  휘발유: {
    grade: RS_GRADE.N,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/d/d9/s286c9mbe14xw03hcl3yenesdq0jlcw.png',
  },
  '카민메이 군용식품': {
    grade: RS_GRADE.N,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/5/51/lqwib6n5ekrrhdxvsm6v5ry0g5pfpyl.png',
  },

  터키석: {
    grade: RS_GRADE.N,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/1/1d/fsus4gw219cvu16qihg27wtrt183mqd.png',
  },
  방연광: {
    grade: RS_GRADE.N,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/c/c0/q4bk7h01b8klowv28vrzze8mt1l50b9.png',
  },
  흑연: {
    grade: RS_GRADE.N,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/4/48/rcuek3v4vwbxpa8ejgzlaija1j1zlc1.png',
  },
  감자: {
    grade: RS_GRADE.N,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/4/49/swhccynzs241sjoq3gxqg6nvhn3c14m.png',
  },

  '라플라스 프로토콜': {
    grade: RS_GRADE.SSR,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/thumb/e/eb/4unxd4l5fwpmrbe5p069lpclkng5zzb.png/180px-%E6%8B%89%E6%99%AE%E6%8B%89%E6%96%AF%E5%8D%8F%E8%AE%AE.png',
  },
  크리스탈: {
    grade: RS_GRADE.SSR,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/thumb/2/2b/rp1wo85pcupesuquc4yignerkj96vf2.png/180px-%E6%A1%A6%E7%9F%B3.png',
  },

  '선인장 에너지 사탕': {
    grade: RS_GRADE.R,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/thumb/4/46/mawalthoapa7sm6o1w7aj2ygx918oe1.png/180px-%E4%BB%99%E4%BA%BA%E6%8E%8C%E8%83%BD%E9%87%8F%E6%A3%92%E6%A3%92%E7%B3%96.png',
  },
  '피로 회복 사탕': {
    grade: RS_GRADE.R,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/thumb/6/6c/gf981rrz1c7vgomhsti665qsyrwxomx.png/180px-%E6%8F%90%E7%A5%9E%E6%A3%92%E6%A3%92%E7%B3%96.png',
  },

  '크리스탈 화분': {
    grade: RS_GRADE.N,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/8/84/q07czctlc7dykkaz9vls65yn6088xgl.png',
  },
  '인조 수정꽃': {
    grade: RS_GRADE.N,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/6/64/2agx0tt8vxjj39h4c7rrhpdokgkq1jf.png',
  },

  /// //
  '전자 부품': {
    grade: RS_GRADE.N,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/c/c4/bhx3xjilkp3q1guxmbkwam0iptb40vu.png',
  },
  '순면 티셔츠': {
    grade: RS_GRADE.N,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/a/a9/sczr15wfgcacsd0q56xmyhrkpq7eyc0.png',
  },

  그래핀: {
    grade: RS_GRADE.N,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/8/84/toyko2cc7nzw1tu8u84nv5b0wo0v2xy.png',
  },

  '그래핀 배터리': {
    grade: RS_GRADE.N,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/d/d7/ogpld1svugk05j69huydxelpux7rllc.png',
  },
  '아니타 101 민간 드론': {
    grade: RS_GRADE.N,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/7/79/97nhqki39i7mkxbsqo7xwra9e45gpmh.png',
  },
  '아니타 소형 베툴라 발전기': {
    grade: RS_GRADE.N,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/c/cd/04rxw8afwjqrc7rxe0cm7p1iyaixpt9.png',
  },

  /// ///

  '항공 기념품': {
    grade: RS_GRADE.N,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/c/c5/kqn1mjf6xin1dhf791b3eytn8gu1lhl.png',
  },
  '블랙 타이거 새우': {
    grade: RS_GRADE.N,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/5/50/lg8kq0e5q8cxbn9vjlf94o0w1t5tw2a.png',
  },
  견과: {
    grade: RS_GRADE.N,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/2/25/e9edqp5eqspld66bqpo9z7c4pn1ckzr.png',
  },
  맥주: {
    grade: RS_GRADE.N,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/6/60/jyyvyh6qi3s1a3yyy42zlo1awr80po5.png',
  },
  천일염: {
    grade: RS_GRADE.N,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/d/d8/26jvlk5eapgdltx5i6kw3zso52vynzj.png',
  },

  사금: {
    grade: RS_GRADE.N,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/5/5c/bl1ybh4panod1p058693c14joxxo6sc.png',
  },
  마노: {
    grade: RS_GRADE.N,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/e/e4/qjrd9egbbp09idax288h9l7lf4ejdn4.png',
  },
  '블랙 슬래그': {
    grade: RS_GRADE.N,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/3/3e/6g0gwemxv561a3oqn2njaogeyg97gbf.png',
  },
  석영사: {
    grade: RS_GRADE.N,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/b/bc/lyo9dy7ru3es4cvza5jhrc4u6kpl9ae.png',
  },

  '재봉 도구 가방': {
    grade: RS_GRADE.N,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/d/d2/gcu3nzb0u95slqbg7wtgbxnkuq2aqyn.png',
  },
  아마: {
    grade: RS_GRADE.N,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/7/72/9x1az5h42w530fet54gvijsf39dgsaa.png',
  },
  비누: {
    grade: RS_GRADE.N,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/9/92/se3fn3kvu04tgasybp1pzina03sbwjk.png',
  },
  오리: {
    grade: RS_GRADE.N,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/9/99/7ydqkghdq6ab53rtki0j0n45noya05l.png',
  },
  폴리에스터: {
    grade: RS_GRADE.N,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/b/be/pvh4gc97vy2wjhcnhkaqq92mocq0oa6.png',
  },
  면양: {
    grade: RS_GRADE.N,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/5/5f/fibutskhzhvwgb4ahonoowx10o4xkom.png',
  },
  데님: {
    grade: RS_GRADE.N,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/5/5c/1rpg8cwx34r1tyr31g2hzfq9l2lnoh6.png',
  },
  '자수 실': {
    grade: RS_GRADE.N,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/d/db/m7brcpphma7s08jfzt731vjfj3w2n1t.png',
  },

  진주: {
    grade: RS_GRADE.N,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/6/66/pw55h2st4396on4nrw1qoxkem2qdfi9.png',
  },
  랍스터: {
    grade: RS_GRADE.N,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/f/fc/fxkfuenj0kq3h3nk4dmptwg8sk3su6h.png',
  },
  캐리어: {
    grade: RS_GRADE.N,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/7/74/miahvmv9eb782ngoxq5p8xu1uqinmzn.png',
  },
  야외용품: {
    grade: RS_GRADE.N,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/c/cf/n2hw5d33d4yg1z5d8nsidi00kipnltm.png',
  },
  갈치: {
    grade: RS_GRADE.N,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/c/cb/p155mkl4bb4ohq859b26eaxh35mwo8j.png',
  },
  오징어: {
    grade: RS_GRADE.N,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/f/f3/g1401xl4o3wttofc3veungt5vouk344.png',
  },
  고추: {
    grade: RS_GRADE.N,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/9/9e/krsmmwx1tk5ok3e5xze7wj7zt1twpxp.png',
  },

  '다운 침낭': {
    grade: RS_GRADE.N,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/2/2a/lk0p5f3jgcxni0ukiq0v5xtgw2vfh8i.png',
  },
  구스다운: {
    grade: RS_GRADE.N,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/f/fc/0igscb1ro1m8lzvrfxhzegowuzvvmxu.png',
  },
  수지: {
    grade: RS_GRADE.N,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/9/97/nwun9shxlhitu966izbbnn67eogju7w.png',
  },
  소: {
    grade: RS_GRADE.N,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/5/56/j4p9kwvh98rj9hk4b19glrzcwiu908m.png',
  },
  다운: {
    grade: RS_GRADE.N,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/b/bb/iv0haga901hx9h2misy5tcnug17fjul.png',
  },
  거위: {
    grade: RS_GRADE.N,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/7/70/8s6vr17jbk6unlffy8hrhwfoccrj3w7.png',
  },

  금박주: {
    grade: RS_GRADE.N,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/4/4a/mmc0lsjsjhyuajeh9jq3ejn8qhmxw6f.png',
  },
  도검: {
    grade: RS_GRADE.N,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/3/3b/rmpo5bgvz5dujfdqpw5blkmy3j5sv6u.png',
  },
  '접이식 부채': {
    grade: RS_GRADE.N,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/7/7a/pmojqmv57cihltrxw91rpb66f2mivuu.png',
  },
  미술용품: {
    grade: RS_GRADE.N,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/f/f3/r77y2w6xe5ax8a9y6g39g9518qhunmg.png',
  },
  나또: {
    grade: RS_GRADE.N,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/f/f9/5vjolcbddcl8r7omzlrvgbzmz1eccuw.png',
  },
  컵라면: {
    grade: RS_GRADE.N,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/6/64/rb9pb36ilefpznqxb237rjd72sq0fho.png',
  },

  '고열전도 세라믹': {
    grade: RS_GRADE.N,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/b/b7/d9pnnzs68umolh4ggutwd22n1ofnw8t.png',
  },
  '초내열 합금': {
    grade: RS_GRADE.N,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/6/67/phtxl4uv19z3u9yyoluna8giij3nslq.png',
  },
  '액체산소 메탄 연료': {
    grade: RS_GRADE.N,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/3/39/tgfa1ficjaedee0a46ou7kuyuvuint7.png',
  },
  '브러시리스 모터': {
    grade: RS_GRADE.N,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/0/07/a14er139mmmyigyyc7deui2q7mb6c2w.png',
  },
  '로켓 조립 장난감': {
    grade: RS_GRADE.N,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/d/de/tapm17c4ajslv77y9gsl8zrl8ssvvce.png',
  },

  '가정용 태양전지': {
    grade: RS_GRADE.N,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/f/f8/j8skaidpkqxhp8fbv960xx4cb79ssfs.png',
  },
  '리튬 배터리': {
    grade: RS_GRADE.N,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/e/ed/40my69s22xw8o0x95fap6zd7u3psfyk.png',
  },
  부직포: {
    grade: RS_GRADE.N,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/5/5c/i36v6a05w7hedu4dxyf3havc1eapmv4.png',
  },
  '충전 배터리': {
    grade: RS_GRADE.N,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/9/96/dufl1cvs8dmb69xg7pcljx2bd4gk2qj.png',
  },

  '아니타 202 군용 드론': {
    grade: RS_GRADE.N,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/2/22/52nh5tzw1s3kad5pua1ukamwwt1428y.png',
  },
  '티타늄 합금': {
    grade: RS_GRADE.N,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/b/b3/ll9injo21piqemc5sbn0gus4179nuqi.png',
  },
  '탄소 섬유': {
    grade: RS_GRADE.N,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/2/21/rkvcyemucd6okqnl7d6kakhtod1qf34.png',
  },
  '형태 공명 조준기': {
    grade: RS_GRADE.N,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/6/69/4plb2v8r3mm45iafmwxsgtqzr6qlobe.png',
  },
  '실리콘 철조각': {
    grade: RS_GRADE.N,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/a/a4/t3wk46l6jrgq8pyo07r6odomh1ypbkr.png',
  },
  '황동 코일': {
    grade: RS_GRADE.N,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/0/0e/6m88wkoxuvq8im4vwsslwpgottye7ex.png',
  },

  '황원역 건설 진행도': {
    grade: RS_GRADE.R,
    desc: '획득 시 황원역 건설 진행도가 증가합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/7/75/7x2prdvx86x8y1q0r5uezoiim6pt8vl.png',
  },
  '아니타 에너지 연구소 건설 진행도': {
    grade: RS_GRADE.R,
    desc: '획득 시 아니타 에너지 연구소 건설 진행도가 증가합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/7/75/7x2prdvx86x8y1q0r5uezoiim6pt8vl.png',
  },
  '철도연맹 초소 건설 진행도': {
    grade: RS_GRADE.R,
    desc: '획득 시 철도연맹 초소 건설 진행도 건설 진행도가 증가합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/7/75/7x2prdvx86x8y1q0r5uezoiim6pt8vl.png',
  },

  마일리지: {
    grade: RS_GRADE.R,
    desc: '콜룸바 상회 주문 완성시 획득하는 포인트입니다. 상회 마일리지 상점에서 아이템을 교환할 수 있습니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/c/c4/c5vvvt1hzfd35kf9hbabs2sf5ymvakn.png',
  },
  은광석: {
    grade: RS_GRADE.N,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/1/1e/qycdd6pihd1wkkbo1zdbbydpy9qdcau.png',
  },
  호박석: {
    grade: RS_GRADE.N,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/e/ea/706wybfkw46q7l52faqcr86bf5284ff.png',
  },

  목화: {
    grade: RS_GRADE.N,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/5/55/cp2qttsit21dnmzxijp3y122l1nfkid.png',
  },
  공작석: {
    grade: RS_GRADE.N,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/c/c3/lweuy7a9wv7n21kqjc9vb8dezxmqe79.png',
  },
  엔진: {
    grade: RS_GRADE.N,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/2/23/iilbhdxoykq14557ffqt0zsa91izfh6.png',
  },
  가전제품: {
    grade: RS_GRADE.N,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/c/c6/kmpiehjdo033o0s6oi4s2aymnsx4gtb.png',
  },

  화증석: {
    grade: RS_GRADE.N,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/4/4b/s7slb6gxxeotyqcd7y0x9pkmdbeujpj.png',
  },

  부전포탄: {
    grade: RS_GRADE.N,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/5/56/0zfh0mgzfb8jt826hrm4q2raixwnd0x.png',
  },
  '오염방지 보호복': {
    grade: RS_GRADE.N,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/9/9a/n511l1uu7yun93xwbfebb7gb6grpu0h.png',
  },

  '인식 방해 껍질': {
    grade: RS_GRADE.SSR,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/d/de/14zcrup38w1psqe4v8n4a2hb8ytnnhf.png',
  },
  '이명 껍질': {
    grade: RS_GRADE.SSR,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/a/a0/pv1r1bjr48msb4hqvqco5bbxll9gdzd.png',
  },
  '베툴라 촉수': {
    grade: RS_GRADE.SSR,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/6/67/fevshzn8lno2fy51tf32wm2fvgcre4k.png',
  },
  '베툴라 연골': {
    grade: RS_GRADE.N,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/d/dc/aiogqqby7s74b7p4orvuad0hyw0e1c2.png',
  },
  '소용돌이 꽃': {
    grade: RS_GRADE.SR,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/3/33/9aeuvwfk7wvzgnh40imq4t0u0vknzgn.png',
  },
  '심면 뿌리': {
    grade: RS_GRADE.R,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/2/28/hgxj3gpl4oadunkr9mso067k9o882r6.png',
  },
  '유성의 눈': {
    grade: RS_GRADE.SSR,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/8/80/q5pvcnnuefm5vkmpm092rns9jr5b7n0.png',
  },
  '트와일라잇 껍질': {
    grade: RS_GRADE.SR,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/d/d7/h0e3boeviehk5utjgeomftzs72foaeh.png',
  },
  '환각 산호초': {
    grade: RS_GRADE.SR,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/d/da/qv2dlw9d3ql7p09taltfn3kvqthd2xv.png',
  },
  '동력 유닛': {
    grade: RS_GRADE.SSR,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/1/1a/rc1wavstt8331tgpp3873bwmp0oa2hd.png',
  },
  '동력 파이프라인': {
    grade: RS_GRADE.SR,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/c/cd/tmq7lyxcwflmt2fqljncc7k4nji2s6r.png',
  },

  '수행 뱃지': {
    grade: RS_GRADE.SR,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/b/b8/b7epj7iq4552u8gmtlrzo3i2uay95pg.png',
  },
  '정예 뱃지': {
    grade: RS_GRADE.SSR,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/4/4f/r1f56qmnmou5yyf6nv1q5wh47lr7m0f.png',
  },
  '정밀 부품': {
    grade: RS_GRADE.R,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/7/7e/1yv0wyv3th5v4b1md5qq1iqothbo04r.png',
  },
  '낡은 부품': {
    grade: RS_GRADE.N,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/d/d4/hub3o6yylpnkf0rsq6ywvhzhdph662x.png',
  },
  '대형 톱니바퀴': {
    grade: RS_GRADE.SSR,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/c/c2/9b0u3u4bp4c4qtccltk8xf5edl3whzh.png',
  },
  '도금 부품': {
    grade: RS_GRADE.SR,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/thumb/3/30/q8hp7wk7ybnjo6t6tmrboxnzoidgyet.png/180px-%E9%95%80%E9%87%91%E9%9B%B6%E4%BB%B6.png',
  },
  '무기 파이프라인': {
    grade: RS_GRADE.SR,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/8/80/nhx6vdy32qplfsye2nfoa7rryn05wrj.png',
  },
  '사격 통제 유닛': {
    grade: RS_GRADE.SSR,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/1/1e/g1ydkii6u409e67uycpit9856n91a3v.png',
  },
  '순금 부품': {
    grade: RS_GRADE.SSR,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/c/c8/lepiqfkosl3kevbs1hjvgzofxljfr65.png',
  },
  '레코딩 증표': {
    grade: RS_GRADE.SR,
    desc: '데이터 수집과 레코딩 완성 증표입니다. [교환 상점]에서 보상을 교환할 수 있습니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/b/ba/57w4ys0jumbedjd7pe2ia28llqkw2vz.png',
  },
  '레코드 과정': {
    grade: RS_GRADE.SR,
    desc: '당신이 가상 공간에서 참여한 모의 전투 진행 상황을 기록했습니다. 협조해 주셔서 감사합니다. 데이터 수집이 원활하게 이루어지길 바랍니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/thumb/3/34/ck44p8opko42h6ecua22d1i4yuqe03c.png/180px-%E5%88%BB%E5%BD%95%E8%BF%9B%E7%A8%8B.png',
  },
  '베툴라 핵': {
    grade: RS_GRADE.SSR,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/9/9a/aj3mmrftg6bediyqgxzbxgy5260zosy.png',
  },
  '베인링 낭액': {
    grade: RS_GRADE.R,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/f/fa/hkc39b101p1767qaxouimce7gf5e42a.png',
  },
  '본드래곤 척추뼈': {
    grade: RS_GRADE.SSR,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/6/6b/cp8t56hdjefjbghh2dlk1p7qf66e6kb.png',
    earnsPath: [
      {
        desc: '빙하 본드래곤 드랍',
        tags: [],
      },
      {
        desc: '아니타 에너지 연구소 작전 계획-10',
        tags: ['아니타 에너지 연구소', '작전 계획'],
      },
      {
        desc: '야외 베툴라 부표-빙하 본드래곤',
        tags: ['잔향 부표'],
      },
    ],
  },
  '박명의 가시': {
    grade: RS_GRADE.SSR,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/thumb/c/cc/qsy7o0q0m730wenbbo045y334fyaxp5.png/180px-%E8%96%84%E6%9A%AE%E5%9D%9A%E6%A3%98%E5%88%BA.png',
  },
  '야행 삿갓': {
    grade: RS_GRADE.SSR,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/thumb/1/19/an2yt6ty2j557b6n90sbhhsbo17caur.png/180px-%E5%A4%9C%E8%A1%8C%E7%AC%A0.png',
  },
  '소음 호르몬': {
    grade: RS_GRADE.R,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/thumb/e/eb/agpswoovexmrzh9tg2ux0eavyyks7o2.png/180px-%E5%99%AA%E9%9F%B3%E8%85%BA%E7%B4%A0.png',
  },
  '밤을 밝히는 양날검': {
    grade: RS_GRADE.SSR,
    desc: '내열성 재료로 단조된 양날검.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/thumb/7/73/l9x195wx33xmenacfg5xfae3c2l5yoe.png/180px-%E7%85%A7%E5%A4%9C%E5%8F%8C%E5%88%83.png',
  },
  '심면 고엽': {
    grade: RS_GRADE.N,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/thumb/1/18/m86a48d0frtp39vr4k3r52d22qfnzsi.png/180px-%E6%B7%B1%E7%9C%A0%E6%9E%AF%E5%8F%B6.png',
  },
  '본드래곤 두개골': {
    grade: RS_GRADE.SSR,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/thumb/3/3d/aa68aa2kvfoqp8mfqkx574zjps3qkft.png/180px-%E9%AA%A8%E9%BE%99%E5%A4%B4%E9%AA%A8.png',
  },
  '두더지 선글라스': {
    grade: RS_GRADE.SSR,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/thumb/3/37/c5dle0nib77scoezy124yyu1lqqtqry.png/270px-%E9%BC%B9%E9%BC%A0%E7%9A%84%E5%A2%A8%E9%95%9C.png',
  },
  '기억 상실 가시': {
    grade: RS_GRADE.R,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/thumb/0/0c/dfkuu8d4p5avdgwe2d5wllafka98hau.png/180px-%E5%A4%B1%E5%BF%86%E8%8C%8E%E5%88%BA.png',
  },
  '본드래곤 꼬리뼈': {
    grade: RS_GRADE.SSR,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/thumb/c/cc/n9ejhj18pq44745yyv1zpwnbna4m21o.png/180px-%E9%AA%A8%E9%BE%99%E5%B0%BE%E9%AA%A8.png',
  },
  '앰피 본드래곤 두개골': {
    grade: RS_GRADE.SSR,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/1/1e/9vkndgpj0x1akya5y18wnkxod066cen.png',
    earnsPath: [
      {
        desc: '앰피 본드래곤 드랍',
        tags: [],
      },
      {
        desc: '야외 베툴라 부표-앰피 본드래곤',
        tags: ['잔향 부표'],
      },
      {
        desc: '아니타 발사 센터 철도관리국 용의 그림자 시리즈 임무',
        tags: ['아니타 발사 센터'],
      },
      {
        desc: '아니타 발사 센터-앰피 본드래곤-관련 현상금',
        tags: ['아니타 발사 센터', '현상금'],
      },
      {
        desc: '아니타 군수공장 작전 계획-19',
        tags: ['아니타 군수공장', '작전 계획'],
      },
      {
        desc: '아니타 군수공장 작전 계획-20',
        tags: ['아니타 군수공장', '작전 계획'],
      },
      {
        desc: '회류 타워 작전 계획-6',
        tags: ['회류 타워', '작전 계획'],
      },
    ],
  },
  '사슬 덩굴': {
    grade: RS_GRADE.SSR,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/f/f5/c0yjlvh6c7pratk5zt0lvddn96e4h74.png',
  },
  '항공 원자재': {
    grade: RS_GRADE.SSR,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/1/18/8ianlerjueo9b7qmfqw67xd1a9lfmfz.png',
  },
  '시타델 랜턴 코어': {
    grade: RS_GRADE.SSR,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/0/07/rj1o1w1bbra57c5ewsv51v3s4cbd39h.png',
  },
  '원조의 뿌리': {
    grade: RS_GRADE.SSR,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/e/e9/mafbszngx2eloi62gyid31ivjwbkz2w.png',
  },
  중화석: {
    grade: RS_GRADE.SSR,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/f/f4/60yvggts3dcdl1mgrc4ok3ngkqboszg.png',
  },
  '형이상 입자': {
    grade: RS_GRADE.SSR,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/6/67/q32cjrlhlpb8wgjvi6wtlktq5tkmk88.png',
  },
  '뇌정의 유물': {
    grade: RS_GRADE.SSR,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/e/eb/t8cae05p6ows8pi4sril8uesn2is6cg.png',
  },
  '심면 나무': {
    grade: RS_GRADE.SSR,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/a/a4/qms85fhfp1obhq7jyamj89r3xz3oblg.png',
  },
  '심면 나뭇가지': {
    grade: RS_GRADE.SR,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/0/05/pp6zjvdqmvktnv8qzbpy893gyqtshyq.png',
  },
  '리자드 뼈대': {
    grade: RS_GRADE.SSR,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/8/8c/nt02qccor7inwhhsloapoemwvitydur.png',
  },
  '베툴라 뼈대': {
    grade: RS_GRADE.SR,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/f/fb/bqofi9sepveub4505h6g01mjby0fgkv.png',
  },
  '해룡 꼬리 지느러미': {
    grade: RS_GRADE.SR,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/2/26/4ul65gqcryelf3havaenx3lt9b0efro.png',
  },
  '고통의 발톱': {
    grade: RS_GRADE.SR,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/b/b9/k8ebkheosfihbkf7e7ps2oypfdlw06x.png',
  },
  '소음 수액': {
    grade: RS_GRADE.SR,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/2/20/byt8wvopwjbao0xtiy9z7uv0exgl4if.png',
  },
  '베인링 울음낭': {
    grade: RS_GRADE.SSR,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/8/8f/lr1lmsjlkywjhh2nvs6op0erj12p8lb.png',
  },
  '초전도 코일': {
    grade: RS_GRADE.SSR,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/3/3c/pxvxau1o91wldhwj1daglgmqbfa3sda.png',
    earnsPath: [
      {
        desc: '차량용 가공선반-초전도 코일 공예 가이드',
        tags: ['제조 가공', '가공선반'],
      },
    ],
  },

  "'마이레일' 건설 포인트": {
    grade: RS_GRADE.SR,
    desc: "콜룸바 상회의 '마이레일' 건설 임무 완성 시 획득하는 포인트입니다. 상회 마일리지 상점에서 아이템을 교환할 수 있습니다.",
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/thumb/c/c5/8wpgp3eaua7vskcgmmq0tee6fy60lwn.png/180px-%E2%80%9C%E6%88%91%E9%80%A0%E6%88%91%E8%B7%AF%E2%80%9D%E5%BB%BA%E8%AE%BE%E7%82%B9%E6%95%B0.png',
  },
  '마이레일 건설 진행도': {
    grade: RS_GRADE.R,
    desc: '획득 시 마이레일 건설 단계가 증가합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/thumb/6/66/tkfhdunsn1yn6w3v905llneaqp6ekpe.png/180px-%E6%88%91%E9%80%A0%E6%88%91%E8%B7%AF%E5%B7%A5%E7%A8%8B%E5%BB%BA%E8%AE%BE%E8%BF%9B%E5%BA%A6.png',
  },

  '고전도 콘덴서 공예 가이드': {
    grade: RS_GRADE.SR,
    desc: '[고전도 콘덴서] 제작법을 기록한 파일입니다. 사용 시 [차량용 가공선반]에서 [황동 코일],[흑연] 및 [석영사]를 가공하여 [고전도 콘덴서]를 획득할 수 있습니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/3/34/hla4jc9l3q6pcn9mzankab77wt1i2kr.png',
  },

  '초전도 코일 공예 가이드': {
    grade: RS_GRADE.SSR,
    desc: '[초전도 코일] 제작법을 기록한 파일입니다. 사용 시 [차량용 가공선반]에서 [고전도 콘덴서],[베툴라 원액] 및 [순금 코일]를 가공하여 [초전도 코일]를 획득할 수 있습니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/0/03/hla4jc9l3q6pcn9mzankab77wt1i2kr.png',
    earnsPath: [
      {
        desc: '아니타 에너지 연구소-니콜라-교환',
        tags: ['아니타 에너지 연구소'],
        map: '아니타 에너지 연구소',
      },
    ],
  },

  '그래핀 박리 가이드': {
    grade: RS_GRADE.SSR,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/0/03/hla4jc9l3q6pcn9mzankab77wt1i2kr.png',
    earnsPath: [
      {
        desc: '아니타 에너지 연구소-캐롤라인-교환',
        tags: ['아니타 에너지 연구소'],
        map: '아니타 에너지 연구소',
      },
    ],
  },

  '소음 효소 추출법': {
    grade: RS_GRADE.SSR,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/thumb/a/a3/6ujvy212ohinv4zw2spuosanb24bsb5.png/180px-%E5%99%AA%E9%9F%B3%E6%BF%80%E9%85%B6%E6%8F%90%E5%8F%96%E6%B3%95.png',
  },

  '선인장즙 추출법': {
    grade: RS_GRADE.SSR,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/thumb/a/a3/6ujvy212ohinv4zw2spuosanb24bsb5.png/180px-%E5%99%AA%E9%9F%B3%E6%BF%80%E9%85%B6%E6%8F%90%E5%8F%96%E6%B3%95.png',
    earnsPath: [
      {
        desc: '황원역-건설 진행도 보상',
        tags: ['황원역'],
        map: '황원역',
      },
    ],
  },

  '심면 에센스 추출법': {
    grade: RS_GRADE.SSR,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/thumb/a/a3/6ujvy212ohinv4zw2spuosanb24bsb5.png/180px-%E5%99%AA%E9%9F%B3%E6%BF%80%E9%85%B6%E6%8F%90%E5%8F%96%E6%B3%95.png',
    earnsPath: [
      {
        desc: '슈그리스시-세실-교환',
        tags: ['슈그리스시', '교환'],
        map: '슈그리스시',
      },
    ],
  },
  '미끼 풍선 제조법': {
    grade: RS_GRADE.SSR,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/thumb/8/86/oslrlasdf29bwk068xrlugpeqvvcm7p.png/180px-%E6%B0%B4%E4%BA%A7%E7%94%84%E9%80%89%E7%A4%BC%E7%9B%92%E5%8C%85%E8%A3%85%E6%8C%87%E5%8D%97.png',
  },
  '도금 부품 제조법': {
    grade: RS_GRADE.SSR,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/thumb/8/86/oslrlasdf29bwk068xrlugpeqvvcm7p.png/180px-%E6%B0%B4%E4%BA%A7%E7%94%84%E9%80%89%E7%A4%BC%E7%9B%92%E5%8C%85%E8%A3%85%E6%8C%87%E5%8D%97.png',
  },
  '정밀 부품 연마법': {
    grade: RS_GRADE.SSR,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/thumb/8/86/oslrlasdf29bwk068xrlugpeqvvcm7p.png/180px-%E6%B0%B4%E4%BA%A7%E7%94%84%E9%80%89%E7%A4%BC%E7%9B%92%E5%8C%85%E8%A3%85%E6%8C%87%E5%8D%97.png',
  },
  '미끼 폭탄 풍선 제조법': {
    grade: RS_GRADE.SSR,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/thumb/8/86/oslrlasdf29bwk068xrlugpeqvvcm7p.png/180px-%E6%B0%B4%E4%BA%A7%E7%94%84%E9%80%89%E7%A4%BC%E7%9B%92%E5%8C%85%E8%A3%85%E6%8C%87%E5%8D%97.png',
  },

  '슈그리스 선물세트 포장 가이드': {
    grade: RS_GRADE.SSR,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/thumb/8/86/oslrlasdf29bwk068xrlugpeqvvcm7p.png/180px-%E6%B0%B4%E4%BA%A7%E7%94%84%E9%80%89%E7%A4%BC%E7%9B%92%E5%8C%85%E8%A3%85%E6%8C%87%E5%8D%97.png',
  },

  '순금 부품 제조법': {
    grade: RS_GRADE.SSR,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/thumb/8/86/oslrlasdf29bwk068xrlugpeqvvcm7p.png/180px-%E6%B0%B4%E4%BA%A7%E7%94%84%E9%80%89%E7%A4%BC%E7%9B%92%E5%8C%85%E8%A3%85%E6%8C%87%E5%8D%97.png',
    earnsPath: [
      {
        desc: '골든 원더랜드-미스 골드-교환',
        tags: ['골든 원더랜드', '교환'],
        map: '골든 원더랜드',
      },
    ],
  },

  '케이프시 선물세트 포장 가이드': {
    grade: RS_GRADE.SSR,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/thumb/8/86/oslrlasdf29bwk068xrlugpeqvvcm7p.png/180px-%E6%B0%B4%E4%BA%A7%E7%94%84%E9%80%89%E7%A4%BC%E7%9B%92%E5%8C%85%E8%A3%85%E6%8C%87%E5%8D%97.png',
    earnsPath: [
      {
        desc: '케이프시-도시 명성 5레벨 보상',
        tags: ['케이프시'],
        map: '케이프시',
      },
    ],
  },

  '수산물 선물세트 포장 가이드': {
    grade: RS_GRADE.SSR,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/thumb/8/86/oslrlasdf29bwk068xrlugpeqvvcm7p.png/180px-%E6%B0%B4%E4%BA%A7%E7%94%84%E9%80%89%E7%A4%BC%E7%9B%92%E5%8C%85%E8%A3%85%E6%8C%87%E5%8D%97.png',
    earnsPath: [
      {
        desc: '회류 타워-건설 진행도 보상',
        tags: ['회류 타워'],
        map: '회류 타워',
      },
    ],
  },

  '서대륙 선물세트 포장 가이드': {
    grade: RS_GRADE.SSR,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/thumb/8/86/oslrlasdf29bwk068xrlugpeqvvcm7p.png/180px-%E6%B0%B4%E4%BA%A7%E7%94%84%E9%80%89%E7%A4%BC%E7%9B%92%E5%8C%85%E8%A3%85%E6%8C%87%E5%8D%97.png',
    earnsPath: [
      {
        desc: '그로누시-도시 명성 5레벨 보사',
        tags: ['그로누시'],
        map: '그로누시',
      },
    ],
  },

  '실버 열차 공예품 제작 가이드': {
    grade: RS_GRADE.SSR,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/thumb/8/86/oslrlasdf29bwk068xrlugpeqvvcm7p.png/180px-%E6%B0%B4%E4%BA%A7%E7%94%84%E9%80%89%E7%A4%BC%E7%9B%92%E5%8C%85%E8%A3%85%E6%8C%87%E5%8D%97.png',
    earnsPath: [
      {
        desc: '버추얼 레코드-교환 상점',
        tags: [],
      },
    ],
  },

  '그래핀 배터리 공예 가이드': {
    grade: RS_GRADE.SSR,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/0/03/hla4jc9l3q6pcn9mzankab77wt1i2kr.png',
    earnsPath: [
      {
        desc: '아니타 에너지 연구소-캐롤라인-교환',
        tags: ['아니타 에너지 연구소'],
        map: '아니타 에너지 연구소',
      },
    ],
  },

  '황동 코일 공예 가이드': {
    grade: RS_GRADE.SSR,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/0/03/hla4jc9l3q6pcn9mzankab77wt1i2kr.png',
    earnsPath: [
      {
        desc: '아니타 군수공장-건설 진행도 보상',
        tags: ['아니타 군수공장'],
        map: '아니타 군수공장',
      },
    ],
  },

  '항공 원자재 제조 설명 가이드': {
    grade: RS_GRADE.SSR,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/0/03/hla4jc9l3q6pcn9mzankab77wt1i2kr.png',
    earnsPath: [
      {
        desc: '아니타 발사 센터-카리야-교환',
        tags: ['아니타 발사 센터', '교환'],
        map: '아니타 발사 센터',
      },
    ],
  },

  '탄소 섬유 로프 공예 가이드': {
    grade: RS_GRADE.SSR,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/0/03/hla4jc9l3q6pcn9mzankab77wt1i2kr.png',
    earnsPath: [
      {
        desc: '원성대교-건설 진행도 보상',
        tags: ['원성대교'],
        map: '원성대교',
      },
    ],
  },

  '열화석 제련법': {
    grade: RS_GRADE.SSR,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/thumb/f/f8/9zu5ypdjq2x9xvh0rcmz17uxfihvt10.png/180px-%E9%92%9B%E5%90%88%E9%87%91%E7%B2%BE%E7%82%BC%E6%B3%95.png',
  },
  '중화석 제련법': {
    grade: RS_GRADE.SSR,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/thumb/f/f8/9zu5ypdjq2x9xvh0rcmz17uxfihvt10.png/180px-%E9%92%9B%E5%90%88%E9%87%91%E7%B2%BE%E7%82%BC%E6%B3%95.png',
  },
  '다크 블랙 코딩제 제련법': {
    grade: RS_GRADE.SSR,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/thumb/f/f8/9zu5ypdjq2x9xvh0rcmz17uxfihvt10.png/180px-%E9%92%9B%E5%90%88%E9%87%91%E7%B2%BE%E7%82%BC%E6%B3%95.png',
  },
  '철강 제련법': {
    grade: RS_GRADE.SSR,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/thumb/f/f8/9zu5ypdjq2x9xvh0rcmz17uxfihvt10.png/180px-%E9%92%9B%E5%90%88%E9%87%91%E7%B2%BE%E7%82%BC%E6%B3%95.png',
  },
  '레일용 특수 강재 단조법': {
    grade: RS_GRADE.SSR,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/thumb/f/f8/9zu5ypdjq2x9xvh0rcmz17uxfihvt10.png/180px-%E9%92%9B%E5%90%88%E9%87%91%E7%B2%BE%E7%82%BC%E6%B3%95.png',
  },
  '에메랄드 코팅제 제련법': {
    grade: RS_GRADE.SSR,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/thumb/f/f8/9zu5ypdjq2x9xvh0rcmz17uxfihvt10.png/180px-%E9%92%9B%E5%90%88%E9%87%91%E7%B2%BE%E7%82%BC%E6%B3%95.png',
  },

  '고열전도 세라믹 제조법': {
    grade: RS_GRADE.SSR,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/thumb/f/f8/9zu5ypdjq2x9xvh0rcmz17uxfihvt10.png/180px-%E9%92%9B%E5%90%88%E9%87%91%E7%B2%BE%E7%82%BC%E6%B3%95.png',
    earnsPath: [
      {
        desc: '아니타 발사 센터-건설 진행도 보상',
        tags: ['아니타 발사 센터'],
        map: '아니타 발사 센터',
      },
    ],
  },

  '티타늄 합금 정련법': {
    grade: RS_GRADE.SSR,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/thumb/f/f8/9zu5ypdjq2x9xvh0rcmz17uxfihvt10.png/180px-%E9%92%9B%E5%90%88%E9%87%91%E7%B2%BE%E7%82%BC%E6%B3%95.png',
    earnsPath: [
      {
        desc: '아니타 군수공장-이엘-교환',
        tags: ['아니타 군수공장', '교환'],
        map: '아니타 군수공장',
      },
    ],
  },
  '다크 퍼플 코팅제 제련법': {
    grade: RS_GRADE.SSR,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/thumb/f/f8/9zu5ypdjq2x9xvh0rcmz17uxfihvt10.png/180px-%E9%92%9B%E5%90%88%E9%87%91%E7%B2%BE%E7%82%BC%E6%B3%95.png',
    earnsPath: [
      {
        desc: '아니타 군수공장-이엘-교환',
        tags: ['아니타 군수공장', '교환'],
        map: '아니타 군수공장',
      },
    ],
  },
  '선셋 레드 코팅제 제련법': {
    grade: RS_GRADE.SSR,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/thumb/f/f8/9zu5ypdjq2x9xvh0rcmz17uxfihvt10.png/180px-%E9%92%9B%E5%90%88%E9%87%91%E7%B2%BE%E7%82%BC%E6%B3%95.png',
    earnsPath: [
      {
        desc: '아니타 군수공장-이엘-교환',
        tags: ['아니타 군수공장', '교환'],
        map: '아니타 군수공장',
      },
    ],
  },
  '현무암 섬유 용제법': {
    grade: RS_GRADE.SSR,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/thumb/f/f8/9zu5ypdjq2x9xvh0rcmz17uxfihvt10.png/180px-%E9%92%9B%E5%90%88%E9%87%91%E7%B2%BE%E7%82%BC%E6%B3%95.png',
    earnsPath: [
      {
        desc: '원성대교-건설 진행도 보상',
        tags: ['원성대교'],
        map: '원성대교',
      },
    ],
  },

  '고전도 콘덴서': {
    grade: RS_GRADE.SR,
    desc: '형태장 제어 기술을 사용해 제작된 고전도 콘덴서입니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/f/f3/6p4dvd1qs0ooeqf5uyzij3vlkve84pn.png',
  },
  '베인링 가시': {
    grade: RS_GRADE.SR,
    desc: `대형 베인링 베툴라 생명체의 기관으로, 내부의 액체가 외부 형태장과 접촉하면 격렬하게 폭발합니다. 보고서에는 '폭발 후 남은 잔해는 화자오 맛의 팝핑 캔디와 비슷해 칵테일을 만드는 데 사용할 수 있다'고 적혀 있습니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/4/44/2zueb798vp72jphrtm9mlywa0ecrzfx.png',
  },
  '피로 회복 풍선껌': {
    grade: RS_GRADE.SR,
    desc: `사용 시 즉시 열차장의 [피로도]를 100포인트 제거합니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/9/94/237cx48gwjmul8fgd5npbnlcjd2dapn.png',
  },
  '어지럼 등껍질': {
    grade: RS_GRADE.R,
    desc: `일부 베툴라 생명체의 등껍질`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/7/7a/7t7v9x6c8uoln85q6dhjhwuxt9qkl27.png',
  },
  '해룡 지느러미줄': {
    grade: RS_GRADE.R,
    desc: `베툴라 생명체의 편모와 유사한 기능을 가진 기관`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/e/e4/nee7iewk0j4agy3jia5bstddebp9xvm.png',
  },
  '미끼 풍선': {
    grade: RS_GRADE.N,
    desc: `일정 확률로 길막이 베툴라 생명체를 유인할 수 있습니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/3/3d/s3igy425vhp13x2mnadbmjtzs3orlqu.png',
  },
  '비명의 부리': {
    grade: RS_GRADE.SR,
    desc: `일부 베툴라 생명체의 머리에 있는 새 부리와 유사한 기관`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/8/86/4mf43c9tm390nhcvt2x521nebfinqko.png',
  },
  '전투 메모리(4Ti)': {
    grade: RS_GRADE.SR,
    desc: `사용 후 파티원 경험치 2000포인트를 추가할 수 있습니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/2/20/llb1j0ro46ebf4kn7zq1cn1y4xhbfy5.png',
  },
  '뇌안개 포자': {
    grade: RS_GRADE.N,
    desc: `일부 베툴라 생명체가 생성하는 포자`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/a/a2/9ioy7w2jeu49vtzx2qiu7vl3rdkmb2u.png',
  },
  '성운상 물질(4Ti)': {
    grade: RS_GRADE.SR,
    desc: `사용 후 장비 경험치 2000포인트를 추가할 수 있습니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/8/8c/05zncpdbz8083prkuvle7o33xvgnzup.png',
  },
  '베툴라 편모': {
    grade: RS_GRADE.N,
    desc: `사용 후 장비 경험치 2000포인트를 추가할 수 있습니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/0/02/l92hy3jr7k1znn39ezx8loeiadqeefj.png',
  },
  '베툴라 더듬이': {
    grade: RS_GRADE.R,
    desc: '베툴라 생명체에서 흔히 발견되는 기관',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/thumb/9/94/f0nhem4c80ky5vpdfthq3klmq021vne.png/270px-%E6%A1%A6%E6%A0%91%E8%A7%A6%E9%A1%BB.png',
  },
  '기억 상실 가지': {
    grade: RS_GRADE.R,
    desc: '일부 베툴라 생명체의 몸에 있는 가시줄기와 유사한 기관',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/0/0c/dfkuu8d4p5avdgwe2d5wllafka98hau.png',
  },
  '베툴라 꼬리 수염': {
    grade: RS_GRADE.R,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/thumb/8/8c/glt2k4563o1olmlqbs82ciywkebf4kd.png/180px-%E6%A1%A6%E6%A0%91%E5%B0%BE%E9%A1%BB.png',
  },
  '베인링 낭': {
    grade: RS_GRADE.R,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/thumb/4/4a/j8eo0hhqnhr6tu183kebslaph1qjf7o.png/180px-%E7%88%86%E8%99%AB%E5%9B%8A%E8%A2%8B.png',
  },
  '자동 관측 필름': {
    grade: RS_GRADE.SR,
    earnsPath: [
      {
        desc: '버추얼 레코드-교환 상점',
        tags: ['교환 상점'],
      },
    ],
    desc: '특수한 기술적 수단으로 처리된 필름은 물체의 형태장이 처음에 붕괴되지 않았을 때의 이미지를 보여주고 특정 가이드를 따라 이를 사용하면 형태장을 재구성하여 장비에 새로운 특성을 부여할 수 있습니다. 생산 기술의 불완정성으로 인해 사용 후 장비가 획득할 수 있는 특성을 결정할 수 없습니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/e/e9/ctso7467rr30l75s0sfrk5u0myqvgbd.png',
  },
  선인장: {
    grade: RS_GRADE.R,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/thumb/d/d6/k41iwncg7dkcgxgkobhq5uiwr9rbqxj.png/180px-%E4%BB%99%E4%BA%BA%E7%90%83.png',
  },

  '응? 쥬드': {
    grade: RS_GRADE.N,
    type: RSMaterialType.AVATAR,
    desc: '',
    earnsPath: [
      {
        desc: '버추얼 레코드-교환 상점',
        tags: ['교환 상점'],
      },
    ],
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/c/c6/5bdwt9v3q4omh19al0v5s5j4z8cdy13.png',
  },
  '선인장 도적': {
    grade: RS_GRADE.N,
    earnsPath: [
      {
        desc: '버추얼 레코드-교환 상점',
        tags: ['교환 상점'],
      },
    ],
    type: RSMaterialType.AVATAR,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/b/bd/kzjlqkopxrk7qkiawrvrxabuu9k77f5.png',
  },
  '움직이지 않는 미스 골드': {
    grade: RS_GRADE.N,
    earnsPath: [
      {
        desc: '버추얼 레코드-교환 상점',
        tags: ['교환 상점'],
      },
    ],
    type: RSMaterialType.AVATAR,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/c/ce/7sbkfj4ag6us2qu04wivsn9p52ocfd2.png',
  },
  '가상 환경 생성 장치': {
    grade: RS_GRADE.N,
    earnsPath: [
      {
        desc: '버추얼 레코드-교환 상점',
        tags: ['교환 상점'],
      },
    ],
    type: RSMaterialType.DRESS,
    dressType: RSDressType.EYE,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/5/5f/d8a23b2xk1x4vkxutm9fjzfg7zolcg3.png',
  },
  '가상 환경 모니터링 슈트': {
    grade: RS_GRADE.N,
    earnsPath: [
      {
        desc: '버추얼 레코드-교환 상점',
        tags: ['교환 상점'],
      },
    ],
    type: RSMaterialType.AVATAR,
    dressType: RSDressType.SET,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/2/2c/231s071ykhwn8nvyij0eusll9gl9pav.png',
  },
  '가상 환경 전용 부츠': {
    grade: RS_GRADE.N,
    earnsPath: [
      {
        desc: '버추얼 레코드-교환 상점',
        tags: ['교환 상점'],
      },
    ],
    type: RSMaterialType.AVATAR,
    dressType: RSDressType.SHOES,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/a/a8/ogxuuvojva4nk31fulmvkm3746kwzao.png',
  },
  '자동 붕괴 필름-슈퍼아머 지속 시간 연장': {
    grade: RS_GRADE.SSR,
    earnsPath: [
      {
        desc: '버추얼 레코드-교환 상점',
        tags: ['교환 상점'],
      },
    ],
    desc: '사용 후 획득하는 장비 옵션:자신의 [슈퍼아머] 지속 시간이 x초 증가합니다.(중첩 가능)',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/2/2e/3h4nnmr67ff6wxtzwgmx3dqjgxdrmd2.png',
  },

  '자동 붕괴 필름-자신의 확률 증가': {
    grade: RS_GRADE.SSR,
    earnsPath: [
      {
        desc: '버추얼 레코드-교환 상점',
        tags: ['교환 상점'],
      },
    ],
    desc: '사용 후 획득하는 장비 옵션:자신의 모든 확률 발동 메커니즘의 확률이 x% 증가합니다.(중첩 가능)',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/2/2e/3h4nnmr67ff6wxtzwgmx3dqjgxdrmd2.png',
  },
  '자동 붕괴 필름-리더 스킬 방어력 증가': {
    grade: RS_GRADE.SSR,
    earnsPath: [
      {
        desc: '버추얼 레코드-교환 상점',
        tags: ['교환 상점'],
      },
    ],
    desc: '사용 후 획득하는 장비 옵션:[리더 스킬] 사용 시 자신의 방어력이 x% 증가합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/2/2e/3h4nnmr67ff6wxtzwgmx3dqjgxdrmd2.png',
  },
  '자동 붕괴 필름-방어력 증가': {
    grade: RS_GRADE.SSR,
    earnsPath: [
      {
        desc: '버추얼 레코드-교환 상점',
        tags: ['교환 상점'],
      },
    ],
    desc: '사용 후 획득하는 장비 옵션:자신의 방어력이 x% 증가합니다.(중첩 가능)',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/2/2e/3h4nnmr67ff6wxtzwgmx3dqjgxdrmd2.png',
  },
  '자동 붕괴 필름-버리기 시 방어력 증가': {
    grade: RS_GRADE.SSR,
    earnsPath: [
      {
        desc: '버추얼 레코드-교환 상점',
        tags: ['교환 상점'],
      },
    ],
    desc: '사용 후 획득하는 장비 옵션:카드를 1장 버릴 때마다 자신의 방어력이 x% 증가합니다.(중첩 가능)',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/2/2e/3h4nnmr67ff6wxtzwgmx3dqjgxdrmd2.png',
  },
  '자동 붕괴 필름-받는 최종 피해 감소': {
    grade: RS_GRADE.SSR,
    earnsPath: [
      {
        desc: '버추얼 레코드-교환 상점',
        tags: ['교환 상점'],
      },
    ],
    desc: '사용 후 획득하는 장비 옵션:받는 최종 피해가 x% 감소합니다.(중첩 가능)',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/2/2e/3h4nnmr67ff6wxtzwgmx3dqjgxdrmd2.png',
  },

  '자동 붕괴 필름-자신의 카드 사용 시 슈퍼아머': {
    grade: RS_GRADE.SSR,
    earnsPath: [
      {
        desc: '버추얼 레코드-교환 상점',
        tags: ['교환 상점'],
      },
    ],
    desc: '사용 후 획득하는 장비 옵션:자신의 스킬 카드 사용시 x초간 [슈퍼아머]를 얻습니다.(중첩 가능)',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/2/2e/3h4nnmr67ff6wxtzwgmx3dqjgxdrmd2.png',
  },
  '자동 붕괴 필름-리더 스킬 비용 회복': {
    grade: RS_GRADE.SSR,
    earnsPath: [
      {
        desc: '버추얼 레코드-교환 상점',
        tags: ['교환 상점'],
      },
    ],
    desc: '사용 후 획득하는 장비 옵션:[리더 스킬] 사용 시 비용을 x 얻습니다.(중첩 가능)',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/2/2e/3h4nnmr67ff6wxtzwgmx3dqjgxdrmd2.png',
  },
  '자동 붕괴 필름-리더 스킬 공격력 증가': {
    grade: RS_GRADE.SSR,
    earnsPath: [
      {
        desc: '버추얼 레코드-교환 상점',
        tags: ['교환 상점'],
      },
    ],
    desc: '사용 후 획득하는 장비 옵션:[리더 스킬] 사용 시 자신의 공격력이 x% 증가합니다.(중첩 가능)',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/2/2e/3h4nnmr67ff6wxtzwgmx3dqjgxdrmd2.png',
  },

  '자동 붕괴 필름-공격력 증가': {
    grade: RS_GRADE.SSR,
    earnsPath: [
      {
        desc: '버추얼 레코드-교환 상점',
        tags: ['교환 상점'],
      },
    ],
    desc: '사용 후 획득하는 장비 옵션:자신의 공격력이 x% 증가합니다.(중첩 가능)',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/2/2e/3h4nnmr67ff6wxtzwgmx3dqjgxdrmd2.png',
  },
  '자동 붕괴 필름-버리기 시 공격력 증가': {
    grade: RS_GRADE.SSR,
    earnsPath: [
      {
        desc: '버추얼 레코드-교환 상점',
        tags: ['교환 상점'],
      },
    ],
    desc: '사용 후 획득하는 장비 옵션:카드를 1장 버릴 때마다 자신의 공격력이 x% 증가합니다.(중첩 가능)',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/2/2e/3h4nnmr67ff6wxtzwgmx3dqjgxdrmd2.png',
  },

  '자동 붕괴 필름-주는 최종 피해 증가': {
    grade: RS_GRADE.SSR,
    earnsPath: [
      {
        desc: '버추얼 레코드-교환 상점',
        tags: ['교환 상점'],
      },
    ],
    desc: '사용 후 획득하는 장비 옵션:입히는 최종 피해가 x% 증가합니다.(중첩 가능)',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/2/2e/3h4nnmr67ff6wxtzwgmx3dqjgxdrmd2.png',
  },
  '자동 붕괴 필름-폭발 피해 증가': {
    grade: RS_GRADE.SSR,
    earnsPath: [
      {
        desc: '버추얼 레코드-교환 상점',
        tags: ['교환 상점'],
      },
    ],
    desc: '사용 후 획득하는 장비 옵션:자신이 입히는 [폭발물]의 피해가 x% 증가합니다.(중첩 가능)',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/2/2e/3h4nnmr67ff6wxtzwgmx3dqjgxdrmd2.png',
  },
  '자동 붕괴 필름-매초 비용 회복': {
    grade: RS_GRADE.SSR,
    earnsPath: [
      {
        desc: '버추얼 레코드-교환 상점',
        tags: ['교환 상점'],
      },
    ],
    desc: '사용 후 획득하는 장비 옵션:매초 비용을 x 얻습니다.(중첩 가능)',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/2/2e/3h4nnmr67ff6wxtzwgmx3dqjgxdrmd2.png',
  },
  '자동 붕괴 필름-버리기 시 체력 회복': {
    grade: RS_GRADE.SSR,
    earnsPath: [
      {
        desc: '버추얼 레코드-교환 상점',
        tags: ['교환 상점'],
      },
    ],
    desc: '사용 후 획득하는 장비 옵션:카드를 1장 버릴 때마다 자신의 체력을 x% 회복합니다.(중첩 가능)',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/2/2e/3h4nnmr67ff6wxtzwgmx3dqjgxdrmd2.png',
  },
  '자동 붕괴 필름-버리기 명령 비용 회복': {
    grade: RS_GRADE.SSR,
    earnsPath: [
      {
        desc: '버추얼 레코드-교환 상점',
        tags: ['교환 상점'],
      },
    ],
    desc: '사용 후 획득하는 장비 옵션:[버리기] 명령 사용 시 비용을 x 얻습니다.(중첩 가능)',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/2/2e/3h4nnmr67ff6wxtzwgmx3dqjgxdrmd2.png',
  },

  '자동 붕괴 필름-버리기 명령 쿨타임 감소': {
    grade: RS_GRADE.SSR,
    earnsPath: [
      {
        desc: '버추얼 레코드-교환 상점',
        tags: ['교환 상점'],
      },
    ],
    desc: '사용 후 획득하는 장비 옵션:[버리기] 명령의 쿨타임이 x% 감소합니다.(중첩 가능)',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/2/2e/3h4nnmr67ff6wxtzwgmx3dqjgxdrmd2.png',
  },
  '자동 붕괴 필름-자신의 레드카드 공격력 증가': {
    grade: RS_GRADE.SSR,
    earnsPath: [
      {
        desc: '버추얼 레코드-교환 상점',
        tags: ['교환 상점'],
      },
    ],
    desc: '사용 후 획득하는 장비 옵션:자신의 [레드카드] 사용 후 자신의 공격력이 x% 증가합니다.(중첩 가능)',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/2/2e/3h4nnmr67ff6wxtzwgmx3dqjgxdrmd2.png',
  },

  '약탈의 원형톱': {
    grade: RS_GRADE.SSR,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/thumb/f/f9/rx6o0vin95knjk306x9xnvoozusnc2f.png/180px-%E5%8A%AB%E6%8E%A0%E9%94%AF%E8%BD%AE.png',
  },
  '앰피 본드래곤 흉골': {
    grade: RS_GRADE.SSR,
    desc: '',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/thumb/f/f8/262x7haqdcaxtf49vfpt6ggjwoeh8kj.png/180px-%E8%A3%82%E9%A6%96%E9%AA%A8%E9%BE%99%E8%83%B8%E9%AA%A8.png',
  },
  '일반 무기 개조 증표': {
    grade: RS_GRADE.SR,
    desc: '표준 형식의 열차 무장 개조 증표는 종합 관제 센터에서 날인하고 승인을 완료했습니다. 열차장은 이 허가증으로 열차 무장 개조 공사를 할 수 있습니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/thumb/f/f4/h8nfrsu9ae1cd1yrr43qgjd3z38rv5z.png/270px-%E4%B8%80%E8%88%AC%E6%AD%A6%E8%A3%85%E6%94%B9%E9%80%A0%E5%87%AD%E8%AF%81.png',
  },
  '사과나무 가지': {
    grade: RS_GRADE.SR,
    desc: '사과 에이드의 원재료입니다. 사용 시 아리나가 한잔 더 만들어줄 수 있습니다.\n해당 아이템은 냉장고에 보관해야 합니다.\n상회 열차 가구 상점에서 [냉장고]를 구매하면 냉장고의 용량을 증가할 수 있습니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/d/d8/35fnnv2gzvss3ujrdzji4n84kpnpsng.png',
  },
  '흑월 구매권': {
    grade: RS_GRADE.SSR,
    desc: '흑월 상점의 상품 리스트를 갱신할 수 있습니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/thumb/3/36/gf5qazklcg6h1ob5ki831ay4p1v9ho2.png/180px-%E9%BB%91%E6%9C%88%E9%87%87%E8%B4%AD%E5%88%B8.png',
  },
  '기념 카드팩-마이레일 I기': {
    grade: RS_GRADE.UR,
    desc: '[마이레일 I기] 일상 임무 오픈기간 출시되는 카드팩입니다. 사용 시 기존에 획득하지 못한 카드 1장을 획득하게 됩니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/1/1b/f57m0nd8zgwhbz31acsecejzjq1dya4.png',
  },
  '특수 무기 개조 특허': {
    grade: RS_GRADE.SSR,
    desc: '철도연맹에서 일괄적으로 발행한 특수열차 무장개조 특허문서는 전체 배치,외부 구조, 내부 배치, 필요한 장비, 건설요건, 운영단계 등을 포함합니다. 문서의 지도하에 열차의 무장 개조를 완료하십시오.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/thumb/0/06/4mhxm2jnronqvgxz24e9lhbldddyg5b.png/180px-%E7%89%B9%E6%AE%8A%E6%AD%A6%E8%A3%85%E6%94%B9%E9%80%A0%E7%89%B9%E8%AE%B8.png',
  },
  '발사 센터 브릿지 통행증': {
    grade: RS_GRADE.SSR,
    desc: '해당 통행증을 받은 열차장은 발사 센터 브릿지를 왕복할 수 있는 자격이 주어집니다. 이 통행증은 발사 센터 브릿지 건설에 탁월한 공헌을 한 열차장들에게 수여됩니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/thumb/9/96/bd4vl4yemiu1arab7mm7agg07wpbk4t.png/180px-%E5%8F%91%E5%B0%84%E4%B8%AD%E5%BF%83%E5%A4%A7%E6%A1%A5%E9%80%9A%E8%A1%8C%E8%AF%81.png',
  },
  '성운상 물질(8Ti)': {
    grade: RS_GRADE.SSR,
    earnsPath: [
      {
        desc: '버추얼 레코드-교환 상점',
        tags: ['교환 상점'],
      },
    ],
    desc: '사용 후 장비 경험치 4000포인트를 추가할 수 있습니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/thumb/d/df/0iq84bp3xqyoua6tkcj3ysh9sanfwxn.png/180px-%E6%98%9F%E4%BA%91%E7%89%A9%E8%B4%A8%EF%BC%888%E9%92%9B%EF%BC%89.png',
  },
  '추가 투자 신청서': {
    grade: RS_GRADE.SSR,
    desc: '도시 투자 제한이 발생시 사용할 수있습니다. 추가 투자가 가능합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/thumb/1/10/qe5kc3tdv4njzt2c5w9oc1aq64101p9.png/180px-%E8%BF%BD%E5%8A%A0%E6%B3%A8%E8%B5%84%E7%94%B3%E8%AF%B7%E4%B9%A6.png',
  },
}

export const CONVERTED_MATERIALS = _.map(MATERIALS, (value, key) => ({
  name: key,
  ...value,
}))

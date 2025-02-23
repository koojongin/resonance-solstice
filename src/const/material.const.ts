import { RS_GRADE } from '@/const/character/character.enum'

export interface RSMaterial {
  grade: RS_GRADE
  thumbnail: string
  desc: string
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
  '철근 콘크리트 침묵': {
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

  마일리지: {
    grade: RS_GRADE.R,
    desc: '콜룸바 상회 주문 완성시 획득하는 포인트입니다. 상회 마일리지 상점에서 아이템을 교환할 수 있습니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/c/c4/c5vvvt1hzfd35kf9hbabs2sf5ymvakn.png',
  },
}

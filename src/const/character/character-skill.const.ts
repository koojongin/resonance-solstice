export interface CharacterSkill {
  amount: number
  cost: number
  name: string
  desc: string
  descSub?: string
  thumbnail: string

  isGeneratedCard?: boolean
}

export const CHARACTER_SKILLS: {
  [key: string]: CharacterSkill
} = {
  '플라잉 플래시': {
    amount: 2,
    cost: 3,
    name: '플라잉 플래시',
    desc: '[505] 1대를 보내 전장을 맴돌며 5초간 공격한 후 회수합니다. 지속시간 동안, 매초 적에게 1단 피해를 입히고 동시에 [인뢰]를 발동합니다. [505]는 [드론]입니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/8/8a/hybau7q492h37h32t9ui4jpw8xvhin2.png',
  },
  '자석 폭탄': {
    amount: 2,
    cost: 4,
    name: '자석 폭탄',
    desc: '자석폭탄 5개를 발사하여 범위 내의 적에게 5단 피해를 입히고 [자화]를 부여합니다. 동시에 [인뢰]를 발동합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/2/2f/kbc7rf94u6g34h1glaavbvl5r64psur.png',
  },
  '번개 소용돌이': {
    amount: 1,
    cost: 4,
    name: '번개 소용돌이',
    desc: '6초간 지속되는 번개 소용돌이를 시전합니다. 지속시간 동안, 아군의 모든 공격이 [인뢰]를 발동합니다. (피해형 특수 효과로 인한 명중 제외)',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/0/00/q34459nbh9znien31vonxqr7ryt2kyz.png',
  },

  '스타 아크': {
    amount: 3,
    cost: 2,
    name: '스타 아크',
    desc: '3발의 비술탄을 발사하여 무작위 적에게 1단 피해를 입힙니다.\n동시에 [냉동]을 발동합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/c/c0/i6m3oeqh0prqlzjckfflanauv6jp6ox.png',
    descSub: `'얼른 일어나! 어디로 날아갈지 나도 몰라!`,
  },
  '드림 파인더': {
    amount: 2,
    cost: 3,
    name: '드림 파인더',
    desc: '자신에게 [수면]을 부여합니다.\n자신의 앞에 사역마 [먼데이]를 소환합니다. 사역마는 적의 공격을 받지 않습니다.\n[먼데이]의 공격력은 베를렌의 공격력과 동일합니다.\n[공포의 밤]/[진혼가]/[마력샘] 중 1장을 선택하여 손으로 가져옵니다.\n사용 후 [드림 파인더]는 [드림 메이커]로 전환됩니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/6/66/0smwifhm43e15ykgpx4bpvqrwa1trhd.png',
    descSub: `먼데이와 같이 쿨쿨~`,
  },
  '드림 메이커': {
    amount: 0,
    cost: 2,
    name: '드림 메이커',
    desc: '자신에게 [수면]을 부여합니다.\n[공포의 밤], [진혼가]와 [마력샘] 중 1장을 선택하여 손으로 가져옵니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/1/16/pvswid5hw6qfynrch9iwlkc1uirhaju.png',
    descSub: `오늘은 무슨 꿈을 꿀까?`,
    isGeneratedCard: true,
  },
  '공포의 밤': {
    amount: 0,
    cost: 0,
    name: '공포의 밤',
    desc: '[스타 아크]의 비술탄 수량이 1 증가합니다.(중첩 가능, 최대 6회)\n사용 후 [소각]됩니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/6/65/p775m9fv0bakvr0hkzsmd23o08i96h2.png',
    descSub: `리바가 촉수를 흔들면서 날 쫓는 꿈을 꿨어`,
    isGeneratedCard: true,
  },
  진혼가: {
    amount: 0,
    cost: 0,
    name: '진혼가',
    desc: '아군에게 가호의 마법을 시전하여 대상의 방어력을 3% 증가시키고 그 대상이 받는 최종 피해를 자신에게로 전이합니다.\n동시에 대상에게 [수면]을 부여합니다.\n이 카드는 최대 1명의 아군에게 사용할 수 있으며 다른 아군에게 사용 시 이 전의 대상에게 부여된 피해 전이를 해제합니다.\n손에서 내면 [소각]됩니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/c/c0/ttk4iasqbm7ua9t5grid0ntz66l6klv.png',
    descSub: `나 아무 꿈도 못 꿨어, 너도 해볼래?`,
    isGeneratedCard: true,
  },
  마력샘: {
    amount: 0,
    cost: 0,
    name: '마력샘',
    desc: '매초 비용을 0.08 얻습니다.(중첩 가능,최대 6회)\n사용 후 [소각]됩니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/9/94/8lr34dmsm4u68u5im6snnkk83vj2f3g.png',
    descSub: `빛이 반짝반짝 나는 큰 호수를 봤어!`,
    isGeneratedCard: true,
  },
  '별의 꿈': {
    amount: 0,
    cost: 0,
    name: '별의 꿈',
    desc: '아군에게 치유의 마법을 시전하여 매초 대상의 체력을 0.8% 회복합니다.(중첩 가능, 최대 6회)\n사용 후 [소각]됩니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/d/d3/gw7f41mudessc9kwd6zee1jft6cc13p.png',
    descSub: `널 땅에 심으면 별나무로 자라서 별이 주렁주렁 달릴 거야!`,
    isGeneratedCard: true,
  },
  '드림 이터': {
    amount: 1,
    cost: 5,
    name: '드림 이터',
    desc: '최면술을 시전하여 모든 적에게 [수면]을 부여합니다.\n[먼데이]가 필드에 있는 동안 매초 [수면] 상태의 모든 적에게 1개의 비술탄을 발사하며, 입힌 피해의 30%만큼 자신을 치유합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/4/41/cvy7vrw6l0nycp8rat79h2pqs79yks2.png',
    descSub: `셋까지 세면 마음이 편안해질 거야... 얼른 눈 감아!`,
    isGeneratedCard: true,
  },

  소실: {
    amount: 2,
    cost: 2,
    name: '소실',
    desc: '아군을 5초간 [은신]시킵니다.\n동시에 대상의 공격력이 3% 증가합니다.(중첩 가능)',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/4/4c/4nl0s3objeckrlpt390mt992pkv20jg.png',
  },
  셔플: {
    amount: 1,
    cost: 3,
    name: '셔플',
    desc: '손에 있는 모든 카드를 버리고 버린 카드만큼 덱에서 카드를 뽑습니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/b/b4/tawsdboaoj7g315b3373zhiy8frwawg.png',
  },
  미스터리: {
    amount: 1,
    cost: 6,
    name: '미스터리',
    desc: '[해체의 상자]를 활성화하여 손에 있는 모든 카드를 덱으로 섞어넣은 후 카드를 3장 뽑습니다.\n뽑은 레드카드의 수만큼 [구축의 화염]을 생성하여 손으로 가져옵니다.\n뽑은 옐로카드의 수만큼 [해체의 번개]를 생성하여 손으로 가져옵니다.\n뽑은 블루카드의 수만큼 [재구축의 힘]을 생성하여 손으로 가져옵니다.\n뽑은 그린카드의 수만큼 [음에너지]를 생성하여 손으로 가져옵니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/7/7b/m72gnc79bmk2m7bop0p1n04omxuer44.png',
  },
  '해체의 번개': {
    amount: 0,
    cost: 0,
    name: '해체의 번개',
    desc: '카드를 1장 뽑습니다.\n레드카드일 경우 체력이 가장 높은 적을 상대로 [천둥]을 발동합니다.\n레드카드가 아니라면 카드를 1장 더 뽑고 무작위 적을 상대로 [천둥]을 발동합니다.\n사용 후 [소각]됩니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/a/ac/iff79b580e1ksrjppmqul2ip46qrlka.png',
    isGeneratedCard: true,
  },
  '재구축의 힘': {
    amount: 0,
    cost: 0,
    name: '재구축의 힘',
    desc: '대형 [역장]을 발동하여 모든 아군이 받는 피해를 80% 감소시킵니다.(10초간 지속)\n사용 후 [소각]됩니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/2/2f/b6xqle4rt07rhjjirer7llb3ajqnmxx.png',
    isGeneratedCard: true,
  },
  '구축의 화염': {
    amount: 0,
    cost: 0,
    name: '구축의 화염',
    desc: '범위 내의 적에게 1단 피해를 입히고 [족쇄]와 [속박]을 부여합니다.\n동시에 매초 [점화]를 1회 발동합니다.(6초간 지속)\n사용 후 [소각]됩니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/f/f3/e5a5fwxz2wrlsxy5a32c47irfe11v0u.png',
    isGeneratedCard: true,
  },
  '정화의 빛': {
    amount: 0,
    cost: 0,
    name: '정화의 빛',
    desc: '손에 있는 [음에너지] 1장을 [소각]하고, 아군에게 정화의 빛을 발사하여 모든 체력을 회복시킵니다.\n동시에 대상에게 걸린 제어와 피해형 특수 효과를 제거합니다.\n이 카드는 손에 [음에너지]가 있을 때에만 낼 수 있습니다.\n손에서 내면 [소각]됩니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/7/7d/ep9qkesclitiq5qr78yul1wp8zyfhji.png',
    isGeneratedCard: true,
  },

  '자석 플라이휠': {
    amount: 3,
    cost: 2,
    name: '자석 플라이휠',
    desc: '범위 내의 적에게 4단 피해를 입힙니다.\n동시에 [인뢰]를 발동합니다.\n[자석 플라이휠]을 우선으로 카드를 1장 뽑습니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/2/26/tcyh01qsbo9nn3lovkm82is4mw31ft6.png',
  },
  '동결의 자석별': {
    amount: 2,
    cost: 2,
    name: '동결의 자석별',
    desc: '동결의 자석별을 5개 발사하여 1개당 무작위 적에게 3단 피해를 입힙니다.\n동시에 [냉동]을 발동합니다.\n[동결의 자석별]은 [폭발물]입니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/b/b6/non4492oz9sblnmnc8uen08sf9d34u7.png',
  },
  '빙수 눈사태': {
    amount: 1,
    cost: 5,
    name: '빙수 눈사태',
    desc: '모든 적에게 [동결]을 부여하고 12단 피해를 입힙니다.\n1단의 피해를 입힐 때마다 25%의 확률로 [참열]을 부여하고 동시에 [인뢰]를 발동합니다.\n버려진 덱에서 자신의 스킬 카드를 2장 회수하여 손으로 가져옵니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/c/c0/rvx3i34d88t3n483eb79dmyp17efkpi.png',
  },

  섭취: {
    amount: 3,
    cost: 3,
    name: '섭취',
    desc: '적에게 1단 피해를 입히고 동시에 방어력을 3% 감소시킵니다.(중첩 가능)\n입힌 피해의 30%만큼 체력이 가장 낮은 아군을 치유합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/f/fa/9x4nj24sn0yrkfj3d5mq2sw4flz02yh.png',
  },
  '금단의 열매': {
    amount: 2,
    cost: 3,
    name: '금단의 열매',
    desc: '사과 하나를 전송하여 적에게 1단 피해를 입히고 [혼란]을 부여합니다.\n카드를 1장 뽑습니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/9/94/cuwnuhmardj6vmjwo9em7dzkh5ma1n0.png',
  },
  '무한 코어': {
    amount: 1,
    cost: 5,
    name: '무한 코어',
    desc: '목표 구역에 무한 코어를 시전하여 범위 내의 적에게 5단 피해를 입힙니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/e/e6/5rnhrqjnlctpmfxvhiwxflmzntld2qg.png',
  },
  과일씨: {
    amount: 0,
    cost: 0,
    name: '과일씨',
    desc: '평범한 과일씨입니다.\n해당 카드 생성 시 자신의 공격력이 3% 증가하고 동시에 [무한 코어] 공격 단수가 1 증가합니다.\n손에서 내면 [소각]됩니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/c/cf/4nrxcytb4tm5u9zviq9vp8jx1xl92qz.png',
    isGeneratedCard: true,
  },
  신성: {
    amount: 0,
    cost: 2,
    name: '신성',
    desc: '목표 구역을 향해 비술의 신성을 1개 발사하여 범위 내의 적에게 1단 피해를 입히고 [붕괴]를 부여합니다.\n이 카드의 [원소변화]:\n손에 [신성]과 [원소핵-전기]가 있을 때 자동으로 [번개 신성]으로 융합됩니다.\n손에 [신성]과 [원소핵-불]이 있을 때 자동으로 [화염 신성]으로 융합됩니다.\n손에 [신성]과 [원소핵-얼음]이 있을 때 자동으로 [서리 신성]으로 융합됩니다.\n이 카드의 [광붕괴]:\n손에 [신성]이 3장 있을 때 자동으로 [초신성]으로 융합됩니다.\n[신성]/[원소 신성]/[초신성]은 [파]입니다.\n사용 후 [소각]됩니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/c/c7/pajvu76k7mxw5iaxq5rokjzyxz113ij.png',
    isGeneratedCard: true,
  },
  '기이한 불꽃': {
    amount: 0,
    cost: 3,
    name: '기이한 불꽃',
    desc: '기이한 에너지가 넘치는 불꽃, 문두스의 소원탑에서 뿜어져나오는 빛을 닮았습니다.\n버려진 덱에서 기이한 불꽃을 1개 시전하여 모든 적에게 1단 방어 무시 피해를 입힙니다.\n버려진 덱에 있는 카드수가 많을수록 피해가 높습니다.\n손에 있는 [기이한 불꽃]은 동시에 3장을 초과할 수 없습니다.\n손에서 내면 [소각]됩니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/a/a5/ruq3gf2ht3awk8s0rjgxen85ia65ccz.png',
    isGeneratedCard: true,
  },
  '다크 아트': {
    amount: 0,
    cost: 2,
    name: '다크 아트',
    desc: '금지의 비술을 사용하여 적에게 1단 피해를 입히고 [중상]을 부여합니다.\n동시에 [저주]를 발동합니다.\n손에서 내면 [소각]됩니다.\n특수 효과 [다키스트 아워]\n이 카드를 누적 13장 사용 시 피의 마신을 소환하여 모든 적에게 1단의 파멸적인 피해를 입힙니다. 적이 기계형이라면 피해가 절반으로 감소합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/8/8d/c1bbc3pc35cnz42fctf2jnw20rhnnib.png',
    isGeneratedCard: true,
  },
  초신성: {
    amount: 0,
    cost: 3,
    name: '초신성',
    desc: '목표 구역을 향해 초신성을 1개 발사하여 모든 적에게 1단 피해를 입히고 [붕괴]를 부여합니다.\n동시에 중성미자 펄스를 5초간 시전하여 매초 모든 적에게 1단 피해를 입히고 [부식]을 발동합니다.\n이 카드의 [원소 핵분열]:\n1개의 [번개 신성]이 융합에 참여할 때마다 번개 운석 1개를 즉시 발사하여 모든적에게 1단 피해를 입히고 [우레]를 발동합니다.\n1개의 [화염 신성]이 융햡에 참여할 때마다 폭염 운석 1개를 즉시 발사하여 모든 적에게 1단 피해를 입히고 [광염]을 발동합니다.\n1개의 [서리 신성]이 융합에 참여할 때마다 서리 운석 1개를 즉시 발사하여 모든 적에게 1단 피해를 입히고 [동결]을 발동합니다.\n[신성]/[원소 신성]/[초신성]은 [파]입니다.\n사용 후 [소각]되며 블랙카드 [음에너지]를 1장 생성하여 덱의 가장 아래에 추가합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/5/54/0j8n5afo12ssnkc3z551qndy3uu0ymb.png',
    isGeneratedCard: true,
  },

  초음속: {
    amount: 2,
    cost: 2,
    name: '초음속',
    desc: '고스건 사격으로 전환하여 적에게 2단 피해를 입히고, [관통]을 부여합니다.\n동시에 [인뢰]를 발동합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/4/4a/aaa9rgrjxk1y64oqybawbc5dxlqezjh.png',
  },
  공습: {
    amount: 2,
    cost: 3,
    name: '공습',
    desc: '1대의 [606]으로 지속적인 공격을 가합니다. 4초 후 회수됩니다.\n지속시간 동안 매초 적에게 2단 피해를 입히고 동시에 [인뢰]를 발동합니다.\n[606]은 드론입니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/5/5a/dfoj5zsh3s7z00mmivlid24z8bc9qsa.png',
  },
  화력전개: {
    amount: 1,
    cost: 8,
    name: '화력전개',
    desc: '모든 적에게 발사:\n[일반공격]이 빠른 속도로 연속사격하며, 덱과 버려진 덱에 있는 [초음속]과 [공습]을 모두 사용합니다.\n동시에 [인뢰]를 발동합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/5/5c/mkmaptfsvg2c97lzany2zzlc4udbzda.png',
  },

  TATAKAE: {
    amount: 1,
    cost: 0,
    name: 'TATAKAE',
    desc: '2장의 [TATAKAU]를 생성하여 손으로 가져옵니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/4/4d/4ge1c4gh4hx27d6b7h90lnor95x2kdo.png',
  },
  'TATAKAU!': {
    amount: 0,
    cost: 1,
    name: 'TATAKAU!',
    desc: '적에게 1단 피해를 입히고 [중단]을 부여합니다.\n임의의 레드카드 사용 후 이 카드는 [TATAKAU!!]로 전환됩니다.\n손에서 내면 [소각]됩니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/9/9f/paojis5ua2msu6xgbx2ebj4tupcaubj.png',
    isGeneratedCard: true,
  },
  'TATAKAU!!': {
    amount: 0,
    cost: 1,
    name: 'TATAKAU!!',
    desc: '적에게 2단 피해를 입히고 [기절]을 부여합니다.\n임의의 레드카드 사용 후 이 카드는 [TATAKAU!!!]로 전환됩니다.\n손에서 내면 [소각]됩니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/e/e1/fl6be6ixbj30s2nz54wp4n83tjxzmcv.png',
    isGeneratedCard: true,
  },
  'TATAKAU!!!': {
    amount: 0,
    cost: 1,
    name: 'TATAKAU!!!',
    desc: '적에게 3단 피해를 입히고 [기절]을 부여합니다.\n동시에 [점화]를 발동합니다.\n손에서 내면 [소각]됩니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/c/cc/57fltu52aw9t1swprj96jmxrz74ueo5.png',
    isGeneratedCard: true,
  },
  우아: {
    amount: 2,
    cost: 0,
    name: '우아',
    desc: '[셀카]를 2장 생성하여 손으로 가져옵니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/d/da/q7fcxlhg0bvxby7escev5cnf9b5yxd2.png',
  },
  셀카: {
    amount: 0,
    cost: 2,
    name: '셀카',
    desc: '퍼플카드를 우선으로 카드를 1장 뽑습니다.\n앞열 아군의 공격력을 2% 증가합니다.(중첩 가능)\n손에서 내면 [소각]됩니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/8/81/nbfhf2td8izvo03812kvz5wocv9m6hf.png',
    isGeneratedCard: true,
  },
  뭇별: {
    amount: 1,
    cost: 4,
    name: '뭇별',
    desc: '[뭇별]을 형성하여 모든 아군이 받고 있는 제어 및 피해형 특수 효과를 제거 합니다.\n모든 카드의 비용이 1 감소하며 12초간 지속됩니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/8/8b/s79yutbekrgqm9ofb6sz3xmurqiv1f8.png',
  },
  노래: {
    amount: 0,
    cost: 0,
    name: '노래',
    desc: '비용을 7 얻으며 비용 상한을 초과할 수 있습니다.\n모든 적에게 [붕괴]와 [혼란]을 부여합니다.\n동시에 모든 아군의 공격력을 3% 증가시킵니다.(중첩 가능)\n사용 후 [소각]됩니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/6/63/q5mkpwwe30s7d28znx9780ct9citc40.png',
    isGeneratedCard: true,
  },

  피치: {
    amount: 2,
    cost: 2,
    name: '피치',
    desc: '분신 피치를 소환하여 아군에게 캐럿 사이다 1잔을 건네주며 [광폭]을 부여합니다.\n동시에 대상의 체력을 30% 회복합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/2/23/4nzwu5gsydyyj9661e13mjr7itnn17r.png',
  },
  블랙베리: {
    amount: 2,
    cost: 2,
    name: '블랙베리',
    desc: '분신 블랙베리를 소환하여 적에게 농축 마늘생강즙 1잔을 건네주며 대상에게 [혼란]을 부여합니다.\n동시에 비수 3자루를 던져 적에게 3단 피해를 입히고 입힌 피해의 150%만큼 체력이 가장 낮은 아군 1명을 치유합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/6/69/rbogf8v4txx5zvtwt6ja8aldm2534mr.png',
  },
  애플: {
    amount: 1,
    cost: 4,
    name: '애플',
    desc: '분신 애플을 소환하여 적에게 스파이시 아이스티 1잔을 건네주며 [수면]을 부여합니다.\n동시에 모든 분신이 합동 공격하여 적에게 10단 피해를 입히고 [열상]을 부여합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/8/81/q5p5hs7c08r6h5gyruxascpgdw7ia6k.png',
  },

  서막: {
    amount: 3,
    cost: 2,
    name: '서막',
    desc: '1개의 얼음벽을 생성하여 피해를 막습니다. 얼음벽의 체력은 자신 최대 체력의 30%입니다.\n[서막] 사용 후 [파열]을 1장 생성하여 손으로 가져옵니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/7/77/q0a3ww1s4ux1ebz44o9iubplb4kyq54.png',
  },
  파열: {
    amount: 0,
    cost: 0,
    name: '파열',
    desc: '얼음벽을 파괴하여 얼음벽의 남은 체력만큼 적에게 3단 피해를 입힙니다. 동시에 [냉동]을 발동합니다. 손에서 내면 [소각]됩니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/e/e2/ointvuus1vt69j85hthhqza4idyl1wm.png',
    isGeneratedCard: true,
  },
  '원소핵-얼음': {
    amount: 0,
    cost: 0,
    name: '원소핵-얼음',
    desc: '대상에게 [냉동]을 부여합니다.\n아군에게 걸린[점화]를 제거합니다.\n손에서 내면 [소각]됩니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/d/dd/2unhxm5p4kdregrynewn3iu5lq4qpb7.png',
    isGeneratedCard: true,
  },
  '서리 신성': {
    amount: 0,
    cost: 2,
    name: '서리 신성',
    desc: '목표 구역을 향해 서리 신성을 1개 발사하여 범위 내의 적에게 1단 피해를 입히고 [붕괴]를 부여합니다. 동시에 [동결]을 발동합니다.\n이 카드의 [광붕괴]:\n손에 [신성]이 3장 있을 때 자동으로 [초신성]으로 융합됩니다.\n[신성]/[원소 신성]/[초신성]은 [파]입니다.\n사용 후 [소각]됩니다.',
    thumbnail:
      'https://i.namu.wiki/i/FrUeNGArClAt1L8Khj21ElluoenXk9cZbPYpuzm5B-VjgI2_2CK3OiPC5zz4otAv57T6yFq8Azk0jZ2iiFNMCw.webp',
    isGeneratedCard: true,
  },
  급습: {
    amount: 0,
    cost: 0,
    name: '급습',
    desc: '양손 해머를 휘둘러 적에게 6단 피해를 입힙니다.\n필살기를 우선으로 카드를 1장 뽑습니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/b/b1/0k3tvx6jn3s5pcwo4i8zig0fcgr02k2.png',
  },
  종결: {
    amount: 0,
    cost: 0,
    name: '종결',
    desc: '지면을 결빙시킨 후 양손 해머를 휘둘러 범위 내의 적에게 12단 피해를 입히고 동시에 [냉동]을 발동합니다. [종결] 사용 후 [원소핵-얼음]을 1장 생성하여 손으로 가져옵니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/8/8e/pkq1k3icfcrdqelnwtq6s5uxlhvk4t4.png',
  },

  '조준 저격': {
    amount: 4,
    cost: 1,
    name: '조준 저격',
    desc: '저격할 대상을 [조준]하여 적에게 1단 피해를 입힙니다.\n[조준]은 공격 대상을 새로 조준한 대상으로 변경하며 해당 효과는 [일반공격]도 포함합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/f/f6/83wfllilacqcaauubcxw6sjsxvaiyks.png',
  },
  '광학 위장술': {
    amount: 2,
    cost: 2,
    name: '광학 위장술',
    desc: '10초간 자신을 [은신]시킵니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/6/62/db0vcwbaqqe2s2d2rxn2rcri62exyx9.png',
  },
  '저격 모드': {
    amount: 1,
    cost: 4,
    name: '저격 모드',
    desc: '12초간 저격 모드로 전환합니다.\n지속 시간 동안 자신은 [슈퍼아머]를 얻습니다.\n[레드카드]를 1장 사용할 때마다 1회 저격하여 적에게 1단 피해를 입히고 [관통]을 발동합니다.\n[조준 저격] 사용 시 [조준 저격]의 효과가 변경되어 전술견이 1발의 [전술 미사일]을 발사하여 [조준] 대상에게 1단 피해를 입힙니다.\n[전술 미사일]은 [폭발물]입니다.\n[전술견]은 [기계 유닛]입니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/5/58/exqrrtxm3m7ala6on470yuoyij2b5mj.png',
  },

  '진형 유지': {
    amount: 2,
    cost: 2,
    name: '진형 유지',
    desc: '적에게 1단 피해를 입히고 [기절]시킵니다.\n자신의 방어력이 2% 증가합니다.(중첩 가능)',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/c/c8/myheszcofxa1svvc1sufwo9b1lqdl1k.png',
  },
  '진형 유지II': {
    amount: 0,
    cost: 2,
    name: '진형 유지II',
    desc: '적에게 1단 피해를 입히고 [기절]시킵니다. 동시에 [냉동] 효과를 발동합니다.\n자신의 방어력이 3% 증가합니다.(중첩 가능)',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/7/77/ah1iuzl8ce0z3fxk6rhhs58dkkaqm6n.png',
    isGeneratedCard: true,
  },
  사방수호: {
    amount: 2,
    cost: 3,
    name: '사방수호',
    desc: '모든 아군이 10초간 지속되는 [실드]를 획득합니다.\n[실드]의 내구도는 자신의 방어력의 1000%입니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/e/e2/4brrx44lgk0x8q1fojc7bbztgu9o49w.png',
  },
  사방수호II: {
    amount: 0,
    cost: 3,
    name: '사방수호II',
    desc: '모든 아군이 10초간 지속되는 [실드]를 획득합니다.\n[실드]의 내구도는 자신의 방어력의 1000%입니다.\n동시에 [대지 붕괴]를 1장 생성하여 손으로 가져옵니다.\n[사방수호]의 [실드]가 파괴될 때 [실드] 1개당 모든 적에게 1단 피해를 입힙니다.\n해당 피해는 자신의 방어력의 1000%입니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/d/d9/a9yq70bftujjlit7mtedi4mjfudas54.png',
    isGeneratedCard: true,
  },
  '대지 붕괴': {
    amount: 0,
    cost: 1,
    name: '대지 붕괴',
    desc: '전장에 있는 [실드]를 모두 폭발시키고 [실드] 1개당 모든 적에게 1단 피해를 입힙니다.\n해당 피해는 자신의 방어력의 1500%입니다.\n대지 붕괴는 [파]입니다.\n손에서 내면 [소각]됩니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/d/d0/ef66sp0kk1c0h5gbrs0csd2qsm3ntju.png',
    isGeneratedCard: true,
  },
  진동파: {
    amount: 0,
    cost: 0,
    name: '진동파',
    desc: '하늘에서 떨어지는 중력 진동파를 시전하여 모든 적을 [기절]시킵니다.\n동시에 다음 내는 [레드카드]의 피해가 50% 증가합니다.(중첩 가능)\n손에서 내면 [소각]됩니다.',
    thumbnail: 'https://i.postimg.cc/nhbkkrTX/Zhen-Bo-red.png',
    isGeneratedCard: true,
  },
  '콜러서스 군진': {
    amount: 1,
    cost: 3,
    name: '콜러서스 군진',
    desc: '모든 [진형 유지]가 [진형 유지II]로 전환됩니다.\n동시에 모든 아군의 공격력과 방어력이 5% 증가합니다.\n사용 후 [콜로서스 군진]이 [콜로서스 군진II]로 전환됩니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/1/19/iof58qutcymxzn9mrvb8gvgqseoyy1r.png',
  },
  '콜로서스 군진II': {
    amount: 0,
    cost: 4,
    name: '콜로서스 군진II',
    desc: '[사방수호]가 [사방수호II]로 전환됩니다.\n동시에 모든 아군의 공격력과 방어력이 5% 증가합니다.\n사용 후 [콜로서스 군진II]는 [신성 돌격]으로 전환됩니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/f/fe/s7ja05kv09gioc3kq8k0pezzy54a6qo.png',
    isGeneratedCard: true,
  },
  '신성 돌격': {
    amount: 0,
    cost: 5,
    name: '신성 돌격',
    desc: '비술의 신성 1개와 비술의 운석 3개를 발사하여 범위 내의 적에게 4단 피해를 입히고 [붕괴]를 부여합니다.\n비술의 신성은 [파]입니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/0/09/h6khk6sg7gxcs988m3jza9i5c3142jj.png',
    isGeneratedCard: true,
  },

  흡수: {
    amount: 2,
    cost: 2,
    name: '흡수',
    desc: '[밸런스 키]흡수 모드를 활성화하여 6초간 [블록]상태에 진입합니다. 동시에 [블록]한 피해를 모두 흡수합니다.\n사용 후 [흡수]는 [반전]으로 전환되며 동시에 [반전]을 우선으로 카드를 1장 뽑습니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/5/57/auk2ufurrv9n55oeo0omf896oy80v1g.png',
  },
  반전: {
    amount: 0,
    cost: 2,
    name: '반전',
    desc: '[밸런스 키]로 흡수한 피해를 전환하여 범위 내에 적에게 1단 피해를 입히고 [족쇄]를 부여합니다. 입힌 피해는 [블록]으로 흡수한 피해와 동일합니다.\n동시에 [블랙카드] [음에너지]를 1장 생성하여 덱에 추가합니다.\n사용 후 [반전]은 [방열]로 전환됩니다. 동시에 [방열]을 우선으로 카드를 1장 뽑습니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/c/cb/9k7jsgcej3fowq10t9cbh8xpdet2uqy.png',
    isGeneratedCard: true,
  },
  방열: {
    amount: 0,
    cost: 0,
    name: '방열',
    desc: '[밸런스 키]를 방열시켜 모든 적에게 [점화] 효과를 부여하며 적군 필드에 [광염] 효과를 발동시킵니다.\n동시에 1장의 [블랙카드] [음에너지]를 생성하여 덱에 추가합니다.\n사용 후 [방열]은 [흡수]로 전환됩니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/a/a0/a8dz340fsdytlr9dda06n8m94a32kcy.png',
    isGeneratedCard: true,
  },
  음에너지: {
    amount: 0,
    cost: 0,
    name: '음에너지',
    desc: '강력한 무기나 주술을 사용한 후 생성되는 [음에너지], 승격자에게 이용될 수 있습니다.\n손에서 내면 [소각]됩니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/7/7e/50wgshxj0vv0uo8ag1s22mwymgrz6nr.png',
    isGeneratedCard: true,
  },
  반사: {
    amount: 2,
    cost: 2,
    name: '반사',
    desc: '[밸런스 키] 반사 모드를 활성화하여 다음 한 번 피격 시 피해를 준 적에게 1단 피해를 입히고 [기절]과 [속박]을 부여합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/2/2d/ewsmiy1pfieuey3a5abx3p90iikozcv.png',
  },
  '디펜스 트리거': {
    amount: 1,
    cost: 5,
    name: '디펜스 트리거',
    descSub: `'이리를 피하니 범이 앞을 막는다'`,
    desc: '모든 아군에게 3초간 지속되는 [철벽 실드]를 부여합니다.\n카드를 3장 뽑으며 손패 상한을 초과할 수 있습니다. [블랙카드]를 뽑았을 경우 [블랙카드] 1장당 [철벽 실드]의 지속시간이 2초 증가합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/6/6d/7luscsslvl69nxrj9m184mnvm1uo4y0.png',
  },

  '플레임 슬래시': {
    amount: 2,
    cost: 3,
    name: '플레임 슬래시',
    desc: '범위 내의 적에게 1단 피해를 입히고 [기절]을 부여하며, 동시에 [작열]과 [참열]을 부여합니다.\n덱 혹은 버려진 덱에서 [인터체인]을 1장 뽑아 손으로 가져옵니다.\n자신이 리더일 경우, 리더 스킬의 쿨타임이 10초 감소합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/f/f6/mcf5qye366k94gtt6jx4ydh1tjcv6do.png',
  },
  '에너지 풍선껌': {
    amount: 2,
    cost: 0,
    name: '에너지 풍선껌',
    desc: '비용을 3 얻습니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/1/1d/2l70jkogdmb8xef76zps7x13vr3a6ie.png',
  },
  '인터체인-I': {
    amount: 1,
    cost: 3,
    name: '인터체인-I',
    desc: '범위 내의 적에게 5단 피해를 입히고 [중단] 및 [열상]을 부여합니다.\n사용 후 [인터체인-1]은 [인터체인-II]로 전환됩니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/2/22/hibgj18g5gr1ans1fv3fbmt6d9lplh3.png',
  },
  '인터체인-II': {
    amount: 0,
    cost: 4,
    name: '인터체인-II',
    desc: '범위 내의 적에게 5단 피해를 입히고 [기절]과 [열상]을 부여합니다.\n사용 후 [인터체인-II]는 [인터체인-III]으로 전환됩니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/4/45/nxxv4tmkl4um95dizjckop6f51gp8u8.png',
    isGeneratedCard: true,
  },
  '인터체인-III': {
    amount: 0,
    cost: 5,
    name: '인터체인-III',
    desc: '범위 내의 적에게 5단 피해를 입히고 [기절]과 [열상]을 부여합니다.\n1개의 [화염휠]을 시전하여 모든 적에게 1단 피해를 입히고 동시에 [점화]를 발동합니다.\n사용 후 [인터체인-III]은 [인터체인-I]로 전환됩니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/f/f2/qbj2djecela44mlxxf9ancdut8uuyrn.png',
    isGeneratedCard: true,
  },
  '다크 엑스칼리버': {
    amount: 0,
    cost: 5,
    name: '다크 엑스칼리버',
    desc: '카타스의 궁극기\n[타오르는 마검의 다크엑스칼리버!!!]를 시전해 모든 적에게 1단 피해를 입히고 [참열]을 부여하며 동시에 [광염]을 발동합니다.\n사용 후 [소각]됩니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/0/08/4axcgr52mt44h81ioni7hshbfiebje1.png',
    isGeneratedCard: true,
  },

  '런닝 썬더': {
    amount: 2,
    cost: 4,
    name: '런닝 썬더',
    desc: '[디펜스 썬더]를 활성화 하여 목표 구역에 강력한 번개를 일으켜 범위 내의 적에게 5단 피해를 입히고 동시에 [인뢰]를 발동합니다. 사용 후 자신은 [기절]되며 [블랙카드] [음에너지]를 덱에 추가합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/f/f0/it7uvep7iux92kngq9s7ktfdh02fanj.png',
  },
  복주머니: {
    amount: 2,
    cost: 0,
    name: '복주머니',
    desc: '비용을 2 획득합니다.\n이 카드가 버려질 때 카드를 2장 뽑습니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/8/8f/s8490wcp3hleg0q90syny9wvujks4l0.png',
  },
  '승리의 아우라': {
    amount: 1,
    cost: 5,
    name: '승리의 아우라',
    desc: '무작위 적 3명에게 [우레]를 발동합니다.\n동시에 손에 있는 모든 카드를 버리며, 카드를 1장 버릴 때마다 무작위 적에게 추가로 [우레]를 1회 발동합니다. 버린 카드가 많을수록 피해가 높아집니다.\n[블랙카드]를 버릴 경우 2장 버린 것으로 간주됩니다.',
    descSub: '대지에 금빛을',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/0/02/0fik4q462hle6bigreymlujk03kgjv5.png',
    isGeneratedCard: true,
  },
}

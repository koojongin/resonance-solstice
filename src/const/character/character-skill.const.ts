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
  '기이한 불꽃 - 마키라': {
    amount: 0,
    cost: 3,
    name: '기이한 불꽃 - 마키라',
    desc: '기이한 에너지가 넘치는 불꽃, 문두스의 소원탑에서 뿜어져나오는 빛을 닮았습니다.\n버려진 덱에서 [기이한 불꽃 - 마키라]을 1개 시전하여 모든 적에게 1단 방어 무시 피해를 입힙니다.\n버려진 덱에 있는 카드수가 많을수록 피해가 높습니다.\n손에 있는 [기이한 불꽃]은 동시에 3장을 초과할 수 없습니다.\n손에서 내면 [소각]됩니다.',
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
    desc: '목표 구역을 향해 초신성을 1개 발사하여 모든 적에게 1단 피해를 입히고 [붕괴]를 부여합니다.\n동시에 중성미자 펄스를 5초간 시전하여 매초 모든 적에게 1단 피해를 입히고 [부식]을 발동합니다.\n이 카드의 [원소 핵분열]:\n1개의 [번개 신성]이 융합에 참여할 때마다 번개 운석 1개를 즉시 발사하여 모든적에게 1단 피해를 입히고 [우레]를 발동합니다.\n1개의 [화염 신성]이 융합에 참여할 때마다 폭염 운석 1개를 즉시 발사하여 모든 적에게 1단 피해를 입히고 [광염]을 발동합니다.\n1개의 [서리 신성]이 융합에 참여할 때마다 서리 운석 1개를 즉시 발사하여 모든 적에게 1단 피해를 입히고 [동결]을 발동합니다.\n[신성]/[원소 신성]/[초신성]은 [파]입니다.\n사용 후 [소각]되며 블랙카드 [음에너지]를 1장 생성하여 덱의 가장 아래에 추가합니다.',
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
    desc: '모든 적에게 발사:\n[일반 공격]이 빠른 속도로 연속사격하며, 덱과 버려진 덱에 있는 [초음속]과 [공습]을 모두 사용합니다.\n동시에 [인뢰]를 발동합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/5/5c/mkmaptfsvg2c97lzany2zzlc4udbzda.png',
  },

  TATAKAE: {
    amount: 1,
    cost: 0,
    name: 'TATAKAE',
    desc: '2장의 [TATAKAU!]를 생성하여 손으로 가져옵니다.',
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
      'https://imgproxy.shelter.id/sig/w:150/rt:fill/Z3M6Ly9zaGVsdGVyLW1lZGlhL3UvYkI1OHJHc2Z1SU0wVEQ2SUtKNDNFTTM3Ukt4MS9pbWFnZXMvMTc0MTk3MTI1MDkzMF9jMTgxMjNjNS0xMzlkLTQ0NWYtYWEzNi01MjExY2Y3MzZiMWQucG5n',
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
    desc: '저격할 대상을 [조준]하여 적에게 1단 피해를 입힙니다.\n[조준]은 공격 대상을 새로 조준한 대상으로 변경하며 해당 효과는 [일반 공격]도 포함합니다.',
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
    thumbnail:
      'https://imgproxy.shelter.id/sig/w:150/rt:fill/Z3M6Ly9zaGVsdGVyLW1lZGlhL3UvYkI1OHJHc2Z1SU0wVEQ2SUtKNDNFTTM3Ukt4MS9pbWFnZXMvMTc0MTk3MTExNzE0MV84ZTE1ZjQ5Zi1kYTQ3LTQ3YjMtOTQwMC00MDYxZDE1NmIyYjMucG5n',
    isGeneratedCard: true,
  },
  '콜로서스 군진': {
    amount: 1,
    cost: 3,
    name: '콜로서스 군진',
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
  '디펜스 썬더': {
    amount: 2,
    cost: 4,
    name: '디펜스 썬더',
    desc: '[디펜스 썬더]를 활성화 하여 목표 구역에 강력한 번개를 일으켜 범위 내의 적에게 5단 피해를 입히고 동시에 [인뢰]를 발동합니다. 사용 후 자신은 [기절]되며 [블랙카드] [음에너지]를 덱에 추가합니다.\n*[런닝 썬더]와 같은것 같은데 게임사에서 혼용중',
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

  부채술: {
    amount: 4,
    cost: 1,
    name: '부채술',
    desc: '부채를 흔들어 앞열 아군의 공격력을 2% 증가시킵니다.(중첩 가능)',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/2/25/5wezl2aml202vh725yiuzfgflp5cibw.png',
  },
  유세술: {
    amount: 1,
    cost: 10,
    name: '유세술',
    desc: '5장의 카드를 뽑습니다.\n이 카드가 손에 있는 동안 [레드카드]를 1장 낼 때마다 이 카드의 비용이 1 감소합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/e/e3/t680z5bguufb7qn74g39v2lw11rhtlf.png',
  },
  '오의-유풍': {
    amount: 1,
    cost: 5,
    name: '오의-유풍',
    desc: '[오의-유풍]을 시전하여 모든 적에게 6단 피해를 입힙니다.\n버려진 덱에 있는 [부채술] 1장당 공격력이 1% 증가합니다.(중첩 가능)',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/2/25/d91ch3vwdipmnanvgn7h6nwxzjzr7n1.png',
  },

  우매: {
    amount: 3,
    cost: 2,
    name: '우매',
    desc: '적에게 1단 피해를 입히고 무작위로 [족쇄] 혹은 [속박]을 부여합니다.\n사용 후 1장의 블랙카드 [음에너지]를 덱에 추가합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/b/b6/r3q8agu5135ph199yhjq5okg2dslav5.png',
  },
  지식: {
    amount: 2,
    cost: 2,
    name: '지식',
    desc: '사용 시 [검은 물결]을 1장 생성하여 손으로 가져옵니다.\n[블랙카드]를 우선으로 2장의 카드를 뽑습니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/b/be/gl7we5bw123dsh428nni5o72zhz0gzx.png',
  },
  '검은 물결': {
    amount: 0,
    cost: 0,
    name: '검은 물결',
    desc: '사용 시 손에 있는 모든 [블랙카드]를 [소각]하여 에너지를 추출합니다. [블랙카드]를 1장 [소각]할 때마다 비용을 3 얻으며, 비용 상한을 초과할 수 있습니다.\n이 카드는 버려질 때 비용을 2얻습니다.\n사용 후 [소각]됩니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/d/d5/r8z6nut14zi52fnj6qve1iitlp5f5bz.png',
    isGeneratedCard: true,
  },
  예고: {
    amount: 1,
    cost: 5,
    name: '예고',
    desc: '적에게 13단 피해를 입히고 [튕김]을 발동합니다.\n[다크 아트] 사용 후 이번 전투 동안 단수가 2 증가합니다.\n[다크 아트]를 사용하여 특수 효과 [다키스트 아워] 발동 시 비용을 13 얻습니다. 비용 상한을 초과할 수 있으며 동시에 [계시]를 1장 생성하여 손으로 가져옵니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/8/85/ofz8y0dpdkko17o74sa3xunnimehsdh.png',
  },
  계시: {
    amount: 0,
    cost: 0,
    name: '계시',
    desc: '모든 비용을 소모하고,소모한 비용만큼 무작위 적에게 2단 피해를 입힙니다.\n1단 피해를 입힐 때마다 10% 확률로 [다크 아트]를 1장 생성하여 손으로 가져옵니다.\n소모한 비용이 많을수록 피해가 높습니다.\n손에거 내면 [소각]됩니다.\n이 카드가 버려지면 [다크 아트]를 1장 생성하여 손으로 가져옵니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/8/89/k3fcnmv8xm3p19r3l1ry1xy7h9f6gpr.png',
    isGeneratedCard: true,
  },

  '나비의 축복': {
    amount: 2,
    cost: 2,
    name: '나비의 축복',
    desc: '초당 아군 대상의 체력을 2.5% 회복시킵니다.(10초간 지속)',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/6/65/o9pbzcjqbtzdh5n51hkuunny1qj72e8.png',
  },
  '자연의 메아리': {
    amount: 2,
    cost: 0,
    name: '자연의 메아리',
    desc: '자연의 에너지를 흡수하여 매초 0.3의 비용을 얻습니다.(10초간 지속)',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/2/26/afv6o4dndvy36vb8ec4wn2aoz08kaku.png',
  },
  '태초의 꿈': {
    amount: 1,
    cost: 4,
    name: '태초의 꿈',
    desc: '3초마다 버려진 덱에서 [태초의 꿈]을 제외한 1장의 카드를 손으로 가져옵니다.(2회 유효)',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/3/3c/d5isj07w1lrf8q2hito38p8lxc90dog.png',
  },

  '흐르는 불': {
    amount: 1,
    cost: 4,
    name: '흐르는 불',
    desc: '리더 스킬 조건: [천상의 불]를 9개 생성\n무작위 적에게 모든 [천상의 불]를 발동한다. 패에 있는 [블랙카드]와 [원소핵-불]을 모두 [소각]시키고, 소멸시킨 1장당 무작위 적에게 [작열]을 발동한다.\n적 필드에 [흐르는 불]를 1개 발사하여 적 전체에게 피해를 입히고, [광염]과 [폭발]을 발동한다. 사용 후 [블랙카드] [잿더미] 1장을 생성하여 패에 추가한다.\n[흐르는 불]는 [폭발물]이다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/b/b4/64q65t2p9wup9jrgagmwxzmws4t4fmu.png',
  },
  경칩: {
    amount: 4,
    cost: 2,
    name: '경칩',
    desc: '번개와 같은 일격으로 적 대상에게 1회 피해를 입혀 [기절]시키고, 동시에 [우레]를 발동시킨다.\n사용 후 [천상의 불]를 1개 생성한다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/9/97/0a20yd54vmvdjrln2tcge3vrxw4zlm7.png',
  },
  곡우: {
    amount: 1,
    cost: 2,
    name: '곡우',
    desc: '다음 카드의 비용을 0으로 만든다. 다음 카드를 낼 때, 그 카드의 원래 비용과 같은 양의 [천상의 불]를 생성한다.\n이 카드를 버릴 때, [천상의 불]를 1개 생성한다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/9/97/15eclil695a745dawjye6p7a6nnokwb.png',
  },

  '피의 이빨': {
    amount: 2,
    cost: 3,
    name: '피의 이빨',
    desc: '강력한 힘을 휘둘러 전방 범위 내의 적에게 1단 피해를 입히고 [참열]을 부여하며, 동시에 [기절]과 [붕괴]를 발동합니다.\n동시에 덱과 버려진 덱에서 [피의 함성]을 1장 뽑아 손을 가져옵니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/d/d5/p6tn912747v7ugi6eb24ulttr71pbhi.png',
  },
  '피의 함성': {
    amount: 2,
    cost: 2,
    name: '피의 함성',
    desc: '현재 체력의 20%를 잃고, 지면을 내리쳐 전방 범위 내의 적에게 1단 피해를 입히고 [참열]을 부여합니다.\n사용 후 50% 확률로 [다크 아트] 1장을 생성하여 손으로 가져옵니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/3/3c/fk3bctmjr1ut684id5maugujydouao7.png',
  },
  '피의 잠식': {
    amount: 1,
    cost: 5,
    name: '피의 잠식',
    desc: '현재 체력의 50%를 잃고, 무기 [탐식의 도끼]의 공격 범위가 13초간 증가합니다.\n지속시간 동안 다음 효과를 발동합니다.\n자신에게 [광폭]을 부여합니다.\n자신의 [레드카드]가 입히는 피해가 100% 증가합니다.\n손에 있는 모든 [블랙카드]와 [다크 아트]를 [소각]합니다. 카드를 1장 [소각]할 때마다 자신의 [레드카드]가 입히는 피해가 26% 증가합니다.\n동시에 덱 혹은 버려진 덱에서 [피의 함성]을 2장 뽑아 손으로 가져옵니다.\n사용 후 [피의 잠식]은 [핏빛 왕관]으로 전환됩니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/7/7e/0bw7etu0wcgsnr8ts3cbg2evpj4b7uv.png',
  },
  '핏빛 왕관': {
    amount: 0,
    cost: 5,
    name: '핏빛 왕관',
    desc: '현재 체력의 50%를 잃고, 목표 구역을 향해 혼신의 일격을 가해 범위 내의 적에게 1단 피해를 입히며 [참열]을 부여합니다.\n피못에서 검은 가시덤불이 자라나 적의 체력을 흡수하고 [속박]을 부여합니다.\n동시에 [블랙카드] [음에너지]를 1장 생성하여 손으로 가져옵니다.\n사용 후 [핏빛 왕관]은 [피의 잠식]으로 전환됩니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/d/dd/lqz9wy2p72l1dnz4n3tz4lcygky3jtn.png',
    isGeneratedCard: true,
  },

  의태: {
    amount: 3,
    cost: 1,
    name: '의태',
    desc: '안피아가 [백화]를 도와 분석을 진행합니다.\n[개조: 더스트 리자드],[개조: 암흑의 매머드]와 [개조: 빙하 본드래곤] 중 1장을 선택하여 손으로 가져옵니다.\n사용 후 [소각]됩니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/b/b6/g8t4t87xzktu5spjt7grv6trr17ze7g.png',
  },
  '개조: 더스트 리자드': {
    amount: 0,
    cost: 2,
    name: '개조: 더스트 리자드',
    desc: '[백화]가 [더스트 리자드]의 형태를 모방합니다.\n앞열의 아군이 [더스트 본케이지]를 획득합니다.(6초간 지속)\n지속시간 동안 대상에게 [광폭]을 부여하고, 동시에 받는 피해가 80% 감소합니다.\n공격을 받을 때마다 비용을 0.1 얻습니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/d/d0/eeft5so7mrfc3137z0uqvg52ql4g9xu.png',
    isGeneratedCard: true,
  },
  '개조: 암흑의 매머드': {
    amount: 0,
    cost: 2,
    name: '개조: 암흑의 매머드',
    desc: '[백화]가 [암흑의 매머드]의 형태를 모방합니다.\n음에너지 초신성 1발을 발사하여 모든 적에게 1단 피해를 입히고 [붕괴]를 부여합니다.\n동시에 [수면]을 발동합니다.\n음에너지 초신성은 [파]입니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/5/52/8540pxdwhtx0igba9frfsau45ym7dyy.png',
    isGeneratedCard: true,
  },
  '개조: 빙하 본드래곤': {
    amount: 0,
    cost: 2,
    name: '개조: 빙하 본드래곤',
    desc: '[백화]가 [빙하 본드래곤]의 형태를 모방합니다.\n모든 적에게 [속박]을 부여하고 5단 피해를 입힙니다.\n동시에 [냉동]을 발동합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/a/a6/123ugjsnh3yldnewoovmje4yhjf149c.png',
    isGeneratedCard: true,
  },
  '생과 사의 마법함': {
    amount: 1,
    cost: 3,
    name: '생과 사의 마법함',
    desc: '카드를 1장 뽑습니다.\n[퍼플카드]라면 5초마다 버려진 덱에서 카드를 1장 회수하여 손으로 가져옵니다.(2회 유효)\n아니라면 5초마다 카드를 1장 뽑습니다.(2회 유효)',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/1/1f/6w8n7ufmwb07syg5yc8cakt75vfrowq.png',
  },
  '허와 실의 관': {
    amount: 1,
    cost: 5,
    name: '허와 실의 관',
    desc: '안피아가 [백화]를 석방합니다.\n[백화]가 모든 적은 5초간 삼켜버립니다.\n지속시간 동안 [백화]가 받는 피해를 모든 적에게 전이시킵니다.\n지속시간 종료 후 [백화]가 피해를 받은 횟수만큼 모든 적에게 1단 피해를 입힙니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/9/99/4rce1v6a3m0nvgk9a848rvrkwqs4gl3.png',
  },

  '비스코스 폭탄': {
    amount: 3,
    cost: 2,
    name: '비스코스 폭탄',
    desc: '5초 동안 무작위 적에게 부착할 끈적끈적한 폭탄 3개를 던집니다 .\n지속 시간 동안 적 대상에게 초당 1의 피해를 입히고 20% 확률로 끈적끈적한 폭탄을 [중단]하여 [폭발물] 로 만듭니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/4/42/ifqyme79jy9uz8hu00vtf33k1irow3k.png',
  },
  '환각 가스': {
    amount: 2,
    cost: 2,
    name: '환각 가스',
    desc: '환각 가스를 던져 적의 에너지를 3% 감소시키고 환각\n가스를 폭발물 로 만듭니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/9/95/jc2pu9rsyipni79unzunl8exlccccrn.png',
  },
  울프팩: {
    amount: 1,
    cost: 4,
    name: '울프팩',
    desc: `기계 늑대 3마리를 소환하여 싸우게 하고 [일반 공격] 지원을 수행합니다. 공격은 재활용되기 전에 10초 동안 지속됩니다.
    지속 시간:
    [레드카드]를 사용하거나 [레드카드]를 버리는 구역에 버릴 때마다 기계 늑대는 늑대 송곳니 미사일을 발사하여 적에게 1의 피해를 입히고 [인뢰]를 발동합니다. [블루카드]를 사용하거나 [블루카드]를 버리는 구역에 버릴 때마다 기계 늑대는 치유 미사일을 발사하여 체력이 가장 낮은 아군을 치료하고 체력의 6%를 회복합니다.
    늑대 송곳니 미사일은 [폭발물] 입니다.
    기계 늑대는 기계 유닛 입니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/8/86/edhsncmyuwilfw8ha71w5qt5htbxjpk.png',
  },

  복음: {
    amount: 2,
    cost: 3,
    name: '복음',
    desc: `현재 체력의 13%를 잃고 [스칼렛 램프]를 흔들어 [일반 공격]을 다음과 같이 전환합니다.
    자신을 제외한 모든 아군의 체력을 3% 회복합니다.(14초간 지속, 중첩 가능)
    지속 시간이 종료되면 기본 [일반 공격]으로 전환돱니다.
    사용 후 [블랙카드] [음에너지]를 1장 생성하여 손으로 가져옵니다.
    이 카드가 버려지면 [다크 아트]를 1장 생성하여 손으로 가져옵니다.
    수엔의 기본 [일반 공격]은 다음과 같습니다.
    모든 적에게 1단 피해를 입히고, 자신의 체력을 3% 회복합니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/6/6f/r879nqtbk8guze0volssyx5itv5jutv.png',
  },
  형벌: {
    amount: 2,
    cost: 3,
    name: '형벌',
    desc: `현재 체력의 13%를 잃고 [스칼렛 램프]를 흔들어 범위 내의 적에게 1단 피해를 입히고, 동시에 [족쇄]와 [작열]을 부여합니다.\n사용 후 50% 확률로 [다크 아트]를 1장 생성하여 손으로 가져옵니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/5/55/5w9nbda64d49lgfx9duedgl0j9e6arp.png',
  },
  정화: {
    amount: 1,
    cost: 5,
    name: '정화',
    desc: `[스칼렛 램프]의 정화 모드를 활성화하여 모든 아군이 받는 제어 및 피해형 효과를 제거합니다.
    모든 아군의 체력을 30% 회복합니다.
    동시에 손에 있는 모든 [블랙카드]를 [소각]하고, 카드를 1장 소각할 때마다 모든 아군의 체력을 10% 회복합니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/b/b4/5prwcj9vou568lbeoegtrp1np196leb.png',
  },

  '폭파 작업': {
    amount: 3,
    cost: 2,
    name: '폭파 작업',
    desc: `1개의 [자동 폭탄]을 던집니다. [자동 폭탄]은 적의 필드 안으로 진입 후 자폭 카운트다운을 시작합니다.
    [자동 폭탄]은 [폭발물]로 10초 후 폭발하여 작은 범위 내의 적에게 1단 피해를 입히고 동시에 [낙뢰]를 발동합니다. 폭발 시 카드를 1장 뽑습니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/b/b6/ktnu6rmabbvna2l4l5865c653ef37n9.png',
  },
  '레드 버튼': {
    amount: 1,
    cost: 1,
    name: '레드 버튼',
    desc: `필드에 있는 모든 [폭발물]을 즉시 폭파시킵니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/1/17/dlefo7fz4hgczbf5tqjyq5n0r2et99z.png',
  },
  '가방 정리': {
    amount: 1,
    cost: 5,
    name: '가방 정리',
    desc: `3개의 [자동 폭탄]을 던집니다. [자동 폭탄]은 적의 필드 안으로 진입 후 자폭 카운트다운을 시작합니다. [레드 버튼]이 손에 없다면 덱 혹은 버려진 덱에서 [레드 버튼]을 1장 뽑아 손으로 가져옵니다.
    [자동 폭탄]은 [폭발물]로 10초 후에 폭발하여 작은 범위 내의 적에게 1단 피해를 입히고 동시에 [낙뢰]를 발동합니다. 폭발 시 카드를 1장 뽑습니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/7/7c/niy1bs6e8pd7gyv7d4e6eq7iew9bo38.png',
  },

  쇼크탄: {
    amount: 3,
    cost: 2,
    name: '쇼크탄',
    desc: `목표 구역을 향해 1개의 쇼크탄을 던져 범위 내에 적에게 1단 피해를 입히고 [기절]시킵니다.\n[쇼크탄]은 [폭발물]입니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/b/bc/62ecqktb8jjnnzonuz7wez6n8d75dpa.png',
  },
  '강제 돌파': {
    amount: 1,
    cost: 3,
    name: '강제 돌파',
    desc: `[레드카드]를 우선으로 카드를 2장 뽑습니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/d/d9/kll6m9rskpic82rfqm2lygzki96jjnb.png',
  },
  '강습 지령': {
    amount: 1,
    cost: 4,
    name: '강습 지령',
    desc: `모든 아군의 [일반 공격] 공격 속도를 10초간 최대로 증가시킵니다.
    지속시간 동안 아군의 모든 [돌격대원]의 [일반 공격]이 [강습 모드]로 진입합니다.
    [강습 모드]는 [돌격대원]의 무기를 연사모드로 전환하여 [일반 공격]시 발사하는 탄약수를 증가시킵니다.
    [돌격대원]은 [시즈루], [카렌], [줄리안]이 포함됩니다.`,
    descSub: '돌격!',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/3/39/j21dfh457iro3cj9d5ylp59m0it1lip.png',
  },

  출격: {
    amount: 2,
    cost: 2,
    name: '출격',
    desc: `1대의 [404]를 출전시켜 10초 후 다시 회수합니다. 상대를 선택한 후 배치가 가능합니다.\n적에게 사용 시 무기를 사용해 공격합니다.\n지속시간 동안 매초 적에게 1단 피해를 입히고 50% 확률로 [냉동]을 발동합니다.
    아군에게 사용 시 [보호막]을 펼쳐 아군을 보호합니다.\n지속시간 동안 아군이 받는 피해를 80% 감소시킵니다.
    [404]는 [드론]입니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/0/0b/bgnk0jvncfs11jukme4j808sandib5r.png',
  },
  '에너지 절약': {
    amount: 2,
    cost: 0,
    name: '에너지 절약',
    desc: `신호를 보내 아군의 모든 [404]를 즉시 회수하며 1대를 회수할 때마다 비용을 1 얻습니다.
    [404]는 [드론]입니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/5/5c/g30s4d22wystd4zf5dekwexn3ptlxlk.png',
  },
  재발동: {
    amount: 1,
    cost: 5,
    name: '재발동',
    desc: `2대의 [404]를 출전시키고 버려진 덱의 모든 [404]를 다시 활성화합니다. 10초 뒤 회수하며, 대상을 선택한 후 배치가 가능합니다.
    적에게 사용 시 모든 [404]는 공격 진형을 갖춰 적을 공격합니다.
    지속시간 동안 [404] 1대당 적에게 매초 1단 피해를 입히고 50%의 확률로 [냉동]을 발동합니다.
    아군에게 사용 시 모든 [404]는 치유 진형을 갖춰 아군을 치유합니다.
    지속시간 동안 [404] 1대당 매초 아군의 체력을 2% 회복시킵니다.
    [404]는 [드론]입니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/3/38/jznj2h5csc77dyykqhyccrpvsanpea1.png',
  },

  '롤링 썬더': {
    amount: 3,
    cost: 3,
    name: '롤링 썬더',
    desc: `적을 [관통]하는 썬더볼 1개를 시전하여 명중할 때마다 1단 피해를 입히고, 동시에 [인뢰]를 발동합니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/e/e6/c5bcou8909hdelkzmu121ub2zxj0xzu.png',
  },
  '플래시 코로나': {
    amount: 2,
    cost: 2,
    name: '플래시 코로나',
    desc: `범위 내의 적을 [기절]시키고, 아군에게 자기폭풍 코일 1개를 부여합니다.(6초간 지속)
    지속시간 동안, 매초 범위 내의 적에게 1단 피해를 입히며, 동시에 [인뢰]를 발동합니다.
    자기폭풍 코일 생성 시 범위 내의 적에게 [기절]을 부여합니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/e/e7/7nompom9qd51edfcmpqr1ftrvb34ai3.png',
  },
  전광석화: {
    amount: 1,
    cost: 4,
    name: '전광석화',
    desc: `한계 측정 장치를 펼쳐 [전광석화] 환경을 조성합니다. 필드의 모든 [인뢰]가 적과 아군을 가리지 않고 추가로 [낙뢰]를 1회 발동합니다.(12초간 지속)
    지속시간 동안,매초 무작위 적에게 1단 피해를 입히며 동시에 [인뢰]를 발동합니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/b/b3/2jerypqzfsx2pmkre8cufxx1ditf5by.png',
  },

  마이크로파: {
    amount: 2,
    cost: 3,
    name: '마이크로파',
    desc: `[303] 1대를 시전하여 마이크로파를 5초간 발사한 후 회수합니다.
    지속시간 동안 체력이 가장 낮은 아군의 체력을 초당 8% 회복시키며, 동시에 매초 무작위 적에게 [점화]를 발동합니다.
    [303]은 [드론]입니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/e/eb/rljj9smqdgzs9y89jtn1lh4jrtjh0nm.png',
  },
  '위치 전송': {
    amount: 2,
    cost: 3,
    name: '위치 전송',
    desc: `[점화],[작열]과 [광염] 키워드를 가진 카드를 우선으로 카드를 2장 뽑습니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/5/5a/ilf86cayla3anyst1wtb5jo35pev30h.png',
  },
  '유산소 대기': {
    amount: 1,
    cost: 4,
    name: '유산소 대기',
    desc: `산소 방출 장치를 펼쳐 [유산소 대기] 환경을 조성합니다.
    발동된 모든 [점화],[작열],[광염]과 [불바다]의 피해가 12초간 2배로 증가합니다.
    지속시간 동안, 매초 무작위 적에게 [점화]를 발동합니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/9/99/1c4v4qnw6hy3spef35uac8mxhwcojul.png',
  },

  충격검: {
    amount: 2,
    cost: 3,
    name: '충격검',
    desc: `지팡이검을 휘둘러 범의 내의 적에게 3단 피해를 입히고 [중단]을 발동합니다.
    [꾀고리의 야상곡]을 1장 뽑아 손으로 가져옵니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/f/f5/3ep9zzdizzvqki3u5vupr500amc44y5.png',
  },
  '꾀꼬리의 야상곡-레드': {
    amount: 2,
    cost: 3,
    name: '꾀꼬리의 야상곡-레드',
    desc: `지팡이 검을 휘둘러 범위 내의 적에게 1단 피해를 입히고 [격파]를 발동합니다.
    다음 내는 [레드카드]의 피해가 30% 증가합니다.(중첩 가능)
    이 카드의 [공명]: 앞에서 낸 카드에 따라 컬러가 바뀝니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/6/6b/demfzaualkmlf3x23syzumfxdw0wm78.png',
  },
  '꾀꼬리의 야상곡-블루': {
    amount: 0,
    cost: 3,
    name: '꾀꼬리의 야상곡-블루',
    desc: `아군이 10초간 지속되는 [실드]를 획득합니다. [실드]의 내구도는 자신의 방어력의 3000%입니다.
    이 카드의 [공명]: 앞에서 낸 카드에 따라 컬러가 바뀝니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/a/a9/brhztwusvwxpo4crran3335barbla3f.png',
    isGeneratedCard: true,
  },
  '꾀꼬리의 야상곡-옐로': {
    amount: 0,
    cost: 3,
    name: '꾀꼬리의 야상곡-옐로',
    desc: `[인뢰] 키워드를 가진 카드를 우선으로 카드를 2장 뽑습니다. 이 카드가 버려질 때 버려진 덱에서 카드를 1장 회수하여 손으로 가져옵니다.
    이 카드의 [공명]: 앞에서 낸 카드에 따라 컬러가 바뀝니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/f/f5/jdwe3l7wj64iuxmtmkx9gcaa1evwr6j.png',
    isGeneratedCard: true,
  },
  '꾀꼬리의 야상곡-그린': {
    amount: 0,
    cost: 3,
    name: '꾀꼬리의 야상곡-그린',
    desc: `체력이 가장 낮은 아군 1명의 체력을 30% 회복합니다.
    이 카드의 [공명]: 앞에서 낸 카드에 따라 컬러가 바뀝니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/9/98/awgodxdof6xtfu0dg8ujwwhz8pk71xt.png',
    isGeneratedCard: true,
  },
  '꾀꼬리의 야상곡-퍼플': {
    amount: 0,
    cost: 3,
    name: '꾀꼬리의 야상곡-퍼플',
    desc: `지팡이 검을 휘둘러 적에게 1단 피해를 입히고, 동시에 [변신]과 [혼란]을 발동합니다.
    이 카드의 [공명]: 앞에서 낸 카드에 따라 컬러가 바뀝니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/0/01/4nocs7mhor5uujjvx031o0cm8gz81fb.png',
    isGeneratedCard: true,
  },
  '종막의 원무곡-레드': {
    amount: 1,
    cost: 4,
    name: '종막의 원무곡-레드',
    desc: `모든 적에게 6단 피해를 입힙니다.
    동시에 자신의 공격력이 1% 증가합니다.(중첩가능)
    이 카드의 [공명]: 앞에서 낸 카드에 따라 컬러가 바뀝니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/b/bb/sxmrgxq6fpyhqdripgonhvrwqz9v0dm.png',
  },
  '종막의 원무곡-블루': {
    amount: 0,
    cost: 4,
    name: '종막의 원무곡-블루',
    desc: `모든 적에게 6단 피해를 입히며 동시에 모든 적에게 [냉동]을 부여합니다.
    이 카드의 [공명]: 앞에서 낸 카드에 따라 컬러가 바뀝니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/e/e4/j17om1xueh9vz1x8ar7348hi8zy7ny6.png',
    isGeneratedCard: true,
  },
  '종막의 원무곡-옐로': {
    amount: 0,
    cost: 4,
    name: '종막의 원무곡-옐로',
    desc: `모든 적에게 6단 피해를 입히고 동시에 [인뢰]를 발동합니다.
    이 카드의 [공명]: 앞에서 낸 카드에 따라 컬러가 바뀝니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/0/05/ofreo99x1j0yjjqi5o12lvnqs4ze2g6.png',
    isGeneratedCard: true,
  },
  '종막의 원무곡-그린': {
    amount: 0,
    cost: 4,
    name: '종막의 원무곡-그린',
    desc: `모든 적에게 6단 피해를 입히고 모든 아군의 체력을 10% 회복시킵니다.
    이 카드의 [공명]: 앞에서 낸 카드에 따라 컬러가 바뀝니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/5/56/sxec4pwvrlctxjhwmf93qigd5tgg6ur.png',
    isGeneratedCard: true,
  },
  '종막의 원무곡-퍼플': {
    amount: 0,
    cost: 4,
    name: '종막의 원무곡-퍼플',
    desc: `모든 적에게 6단 피해를 입히고, [기이한 불꽃 - 리비아]을 1장 생성하여 손으로 가져옵니다.
    이 카드의 [공명]: 앞에서 낸 카드에 따라 컬러가 바뀝니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/7/77/2ktpj52ho8lnr4wucm9slc6gkvlzilj.png',
    isGeneratedCard: true,
  },
  '기이한 불꽃 - 리비아': {
    amount: 0,
    cost: 3,
    name: '기이한 불꽃 - 리비아',
    desc: `기이한 에너지가 넘치는 불꽃, 문두스의 소원탑에서 뿜어져나오는 빛을 닮았습니다.
    버려진 덱에서 기이한 불꽃을 1개 시전하여 모든 적에게 1단 방어 무시 피해를 입힙니다.
    버려진 덱에 있는 카드수가 많을수록 피해가 높습니다.
    손에 있는 [기이한 불꽃 - 리비아]는 동시에 3장을 초과할 수 없습니다.
    손에서 내면 [소각]됩니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/a/a5/ruq3gf2ht3awk8s0rjgxen85ia65ccz.png',
    isGeneratedCard: true,
  },

  치유탄: {
    amount: 3,
    cost: 2,
    name: '치유탄',
    desc: `아군의 체력을 30% 회복합니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/9/96/d6uguc2fii8oh32sqe5lsfv8ns7f0zg.png',
  },
  폭염탄: {
    amount: 2,
    cost: 3,
    name: '폭염탄',
    desc: `카드를 1장 뽑습니다.
    적에게 폭염탄을 발사하여 대상 및 부근의 적에게 1단 피해를 입히고, 동시에 [점화]를 발동합니다.
    [폭염탄]은 [폭발물]입니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/1/18/bowfw6ixy8cbvvbk1cwwyymzqvic7no.png',
  },
  비전탄: {
    amount: 1,
    cost: 4,
    name: '비전탄',
    desc: `비용이 3 이상인 카드를 우선으로 버려진 덱에서 카드를 1장 회수하여 손으로 가져옵니다.
    회수한 카드의 비용의 3배만큼 비전탄을 발사합니다. 비전탄 1개당 무작위 적에게 1단 피해를 입히고, 동시에 [인뢰]를 발동합니다.
    [비전탄]은 [폭발물]입니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/b/b6/rx5cs6afc07kd9g71sk11mte5248w1x.png',
  },

  '도끼 투척': {
    amount: 4,
    cost: 2,
    name: '도끼 투척',
    desc: `도끼를 투척하여 적에게 2단 피해를 입히고 [열상]을 부여합니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/e/ea/milcd5ltqq168kt5v0pmgv9k1l61511.png',
  },
  '도끼 회수': {
    amount: 1,
    cost: 3,
    name: '도끼 회수',
    desc: `버려진 덱에서 [도끼 투척]을 최대 3장 회수하여 손으로 가져옵니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/3/32/j3zoygii8yyfrxhvomz2tsp0gncf52q.png',
  },
  '부메랑 도끼': {
    amount: 1,
    cost: 3,
    name: '부메랑 도끼',
    desc: `손에 있는 카드를 최대 4장 버립니다. 카드를 1장 버릴 때마다 모든 적에게 4단 피해를 입히는 부메랑 도끼를 1자루 투척합니다. 이 카드는 사용 시 버려진 카드로 간주됩니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/3/35/sfsocm21fqip9xjus121u5bgae67jw9.png',
  },

  플럼프탄: {
    amount: 2,
    cost: 1,
    name: '플럼프탄',
    desc: `아군의 체력을 15% 회복합니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/a/a8/c5bz07a4xqu5y835jn9b6a0antdhaxb.png',
  },
  '긴급 대응': {
    amount: 1,
    cost: 2,
    name: '긴급 대응',
    desc: `[플럼프탄]의 비용이 1 감소하고 동시에 2장의 [플라워탄]을 덱에 추가합니다. 사용 후 [긴급 대응]은 [쾌속 장전]으로 전환됩니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/e/e0/41urphscrk33f14l876tqgsbwlc8lod.png',
  },
  '쾌속 장전': {
    amount: 0,
    cost: 2,
    name: '쾌속 장전',
    desc: `[플럼프탄]과 [플라워탄]을 우선으로 카드를 2장 뽑습니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/6/6c/tfxz4r0qdmunejpi6j1tgy7zw2l4nxx.png',
    isGeneratedCard: true,
  },
  플라워탄: {
    amount: 0,
    cost: 3,
    name: '플라워탄',
    desc: `아군의 여성에게만 적용되는 특수 치유탄을 발사하여 대상의 체력을 35% 회복합니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/c/c2/8ipts4mddfegd40i8i1jsujke5e6vd5.png',
    isGeneratedCard: true,
  },
  '플라워 가든': {
    amount: 1,
    cost: 5,
    name: '플라워 가든',
    desc: `자신의 제외한 모든 여성 파티원의 체력을 25% 회복합니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/1/1a/r8z3h64lyh5457ojagjvdlhsxq4x8bu.png',
  },

  스파크: {
    amount: 3,
    cost: 2,
    name: '스파크',
    desc: `무작위 적 3명에게 1단 피해를 입히고 동시에 [점화]를 발동합니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/7/73/i154rjgyokkrpokee75w2i47zdrx3kf.png',
  },
  '원소핵-불': {
    amount: 0,
    cost: 0,
    name: '원소핵-불',
    desc: `대상에게 [점화]를 부여합니다.
    아군에게 걸린 [냉동]을 제거합니다.
    손에서 내면 [소각]됩니다.`,
    isGeneratedCard: true,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/3/36/8lweotwckbwzd5gnuwcr4ryl4tz90jt.png',
  },
  '화염 신성': {
    amount: 0,
    cost: 2,
    name: '화염 신성',
    desc: `목표 구역을 향해 화염 신성을 1개 발사하여 범위 내의 적에게 1단 피해를 입히고 [붕괴]를 부여합니다. 동시에 [광염]을 발동합니다.
    이 카드의 [광붕괴]:
    손에 [신성]이 3장 있을 때 자동으로 [초신성]으로 융합됩니다.
    [신성]/[원소 신성]/[초신성]은 [파]입니다.
    사용 후 [소각]됩니다.`,
    isGeneratedCard: true,
    thumbnail:
      'https://imgproxy.shelter.id/sig/w:150/rt:fill/Z3M6Ly9zaGVsdGVyLW1lZGlhL3UvYkI1OHJHc2Z1SU0wVEQ2SUtKNDNFTTM3Ukt4MS9pbWFnZXMvMTc0MTk3MTI1MDkyOV85ZTgyMGQ2Yy1iMjY5LTRiNGEtYjJhNS04NjRiZjE0NmUzY2IucG5n',
  },
  '번개 신성': {
    amount: 0,
    cost: 2,
    name: '화염 신성',
    desc: `목표 구역을 향해 번개 신성을 1개 발사하여 범위 내의 적에게 1단 피해를 입히고 [붕괴]를 부여합니다. 동시에 [우레]을 발동합니다.
    이 카드의 [광붕괴]:
    손에 [신성]이 3장 있을 때 자동으로 [초신성]으로 융합됩니다.
    [신성]/[원소 신성]/[초신성]은 [파]입니다.
    사용 후 [소각]됩니다.`,
    isGeneratedCard: true,
    thumbnail:
      'https://imgproxy.shelter.id/sig/w:150/rt:fill/Z3M6Ly9zaGVsdGVyLW1lZGlhL3UvYkI1OHJHc2Z1SU0wVEQ2SUtKNDNFTTM3Ukt4MS9pbWFnZXMvMTc0MTk3MTI1MDkzMF84Nzc3ODg4Yy0xNzg2LTRkMzUtYTBmZS1mY2Q1MTdlMjkxODAucG5n',
  },
  기원: {
    amount: 1,
    cost: 3,
    name: '기원',
    desc: `모든 적에게 [점화]를 부여합니다.
    동시에 즉시 [리더 스킬]을 활성화합니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/e/e2/tay8sfsenxesfw673m1ic2h5qh7n5mc.png',
  },
  휠윈드: {
    amount: 1,
    cost: 4,
    name: '휠윈드',
    desc: `토네이도를 시전하여 범위 내에 적에게 5단 피해를 입힙니다.
    동시에 모든 적에게 걸린 [점화]를 흡수하여 흡수한 [점화] 수만큼 추가로 5단 피해를 입힙니다.
    사용 후 [블랙카드] [잿더미]를 1장 생성하여 손으로 가져옵니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/5/5e/286eeamhh4nputp5jvn5xdy24yusu2i.png',
  },
  잿더미: {
    amount: 0,
    cost: 0,
    name: '잿더미',
    desc: `연소에 의해 생성된 잿더미입니다.
    손에서 내면 [소각]됩니다.`,
    isGeneratedCard: true,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/9/93/lzihx3ecq1k8qoibnvlouoy0qr4qmcl.png',
  },

  단비: {
    amount: 2,
    cost: 4,
    name: '단비',
    desc: `목표 구역에 [우견지술]을 시전하여 [작열]을 부여합니다. 매초 범위 내의 적에게 3단 피해를 입힙니다.(5초간 지속)`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/6/65/sgkx2c7br3nc4w3noz2ina938ov6fsj.png',
  },
  봄꽃: {
    amount: 2,
    cost: 3,
    name: '봄꽃',
    desc: `목표 구역에 [화견지술]을 시전하여 매초 범위 내 아군의 체력을 5% 회복합니다.(5초간 지속)
    사용 후 [봄꽃]은 [가을달]로 전환됩니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/7/7a/lsl739zd958ocaeio7gne6314z6h7qz.png',
  },
  가을달: {
    amount: 0,
    cost: 3,
    name: '가을달',
    desc: `목표 구역에 [월견지술]을 시전하며 초승달 [보호막] 1개를 부여하여 범위 내 아군이 받는 피해가 80% 감소합니다.(10초간 지속)
    사용 후 [가을달]은 [봄꽃]으로 전환됩니다.`,
    isGeneratedCard: true,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/a/af/3vg9r39m0r5afs5ag3bxiul0i00lor3.png',
  },
  '오의-유홍': {
    amount: 1,
    cost: 5,
    name: '오의-유홍',
    desc: `[오의-유홍]을 시전하여 버려진 덱에 있는 [레드카드]만큼 [도깨비불]을 생성하며 [도깨비불] 1개당 무작위 적에게 1단 피해를 입힙니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/a/ac/f2ck8foh84sr0vphfhomc7fnklht0vp.png',
  },

  변화무상: {
    amount: 3,
    cost: 2,
    name: '변화무상',
    desc: `무작위로 아래 3종 암살 무기 중 하나를 시전합니다.
    목비류-암살 무기 [배꽃], 적에게 12단 피해를 입히고 [화상]/[열상]을 발동합니다.
    몽현류-암살 무기 [찰풍], 무작위 적 3명에게 1단 피해를 입히고 [화상]/[참열]을 발동합니다.
    환우류-암살 무기 [흑사의 깃], 적에게 6단 피해를 입히고 [화상]/[점화]를 발동합니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/f/fb/asifeitzn8gh8iskt0kprh72v2lskaw.png',
  },
  개안: {
    amount: 2,
    cost: 2,
    name: '개안',
    desc: `적 필드에 [광염]을 발동하고, 동시에 모든 적에게 [혼란]을 부여합니다.
    덱의 맨 위에서부터 카드를 3장 확인한 후 1장 선택하여 손으로 가져오고 남은 카드는 덱에 다시 돌려놓습니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/b/b3/33rst1hlt4ks86m2ftegkiagxkdnjgy.png',
  },
  '무상-전륜': {
    amount: 1,
    cost: 5,
    name: '무상-전륜',
    desc: `오의 [무상-전륜]을 시전하여 모든 적에게 10단 피해를 입히고 동시에 [열상]/[광염]/[족쇄]/[속박]을 1회 발동합니다.
    동시에 1단 피해를 입힐 때마다 50% 확률로 [참열] 혹은 [화상]을 발동합니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/f/f7/id94xlfjcznlsievft0526bsu2a15tm.png',
  },

  '조준 폭탄': {
    amount: 3,
    cost: 3,
    name: '조준 폭탄',
    desc: `1개의 [조준 폭탄]을 적에게 투척하고 [범위 조준]을 발동합니다.
    [조준 폭탄]은 [폭발물]로 3초뒤에 폭발하여 범위 내의 적에게 3안 피해를 입힙니다.
    [조준 폭탄]은 착지 후 1개의 [연쇄 폭발 지뢰]를 설치합니다.
    [범위 조준]은 [일반 공격]의 공격 대상을 새로운 목표 구역으로 변경합니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/7/77/86vza0ncdt67r2susqe53avuo0t7ekl.png',
  },
  'Bingo!': {
    amount: 1,
    cost: 3,
    name: 'Bingo!',
    desc: `손에 있는 카드의 수만큼 [연쇄 폭발 지뢰]를 적에게 투척합니다.
    [연쇄 폭발 지뢰]는 [폭발물]로 근처에 폭발이 일어날 때 폭발합니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/c/c4/pz6vy5yb3l4a1j0vj71gduxhcqhca9u.png',
  },
  대폭주: {
    amount: 1,
    cost: 5,
    name: '대폭주',
    desc: `[레드카드]를 우선으로 카드를 3장 뽑습니다.
    뽑은 카드의 비용을 합한만큼 [연쇄 폭발 지뢰]를 투척합니다.
    [연쇄 폭발 지뢰]는 [폭발물]로 근처에 폭발이 일어날 때 폭발합니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/b/b1/jmj81ivgrvn132nwbwuifo2i8oil5iy.png',
  },

  모색: {
    amount: 2,
    cost: 0,
    name: '모색',
    desc: `[무궁무진] 1장과 [과욕] 1장을 생성하여 손으로 가져옵니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/f/f7/ah25muood6fdewfgnhxy2hk5qg19cap.png',
  },
  무궁무진: {
    amount: 0,
    cost: 3,
    name: '무궁무진',
    desc: `[포말하우트]로 적을 힘껏 내리쳐 적에게 1단 피해를 입히고 [기절]시킵니다.
    적의 체력이 50% 이상이라면 [다크 아트]를 1장 생성하여 손으로 가져옵니다.
    이 카드가 다른 카드 효과로 인해 버려질 경우 [다크 아트]를 1장 생성하여 손으로 가져옵니다.
    손에서 내면 [소각]됩니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/a/af/om2yslad554afo1i3axnnu9ed5d9ycz.png',
    isGeneratedCard: true,
  },
  '끝없는 욕망': {
    amount: 0,
    cost: 3,
    name: '끝없는 욕망',
    desc: `[포말하우트]를 휘둘러 범위 내의 적에게 1단 피해를 입히고 [붕괴]를 부여합니다.
    동시에 손에 있는 무작위 카드 1장을 버립니다. [무궁무진] 카드가 있다면 우선으로 버립니다. 동시에 [다크 아트]를 1장 생성하여 손으로 가져옵니다.
    사용 후 [소각]됩니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/7/76/m7mavwlgn207bz15tuje7hhldr682em.png',
    isGeneratedCard: true,
  },
  탐사: {
    amount: 1,
    cost: 3,
    name: '탐사',
    desc: `카드를 1장 뽑습니다.
    [레드카드] 혹은 [퍼플카드]라면 비용을 6 얻습니다.
    아닐 경우 모든 아군이 [철벽 실드]를 3초간 얻습니다. 손에 있는 카드 1장당 [철벽 실드]의 지속 시간이 0.5초 증가합니다. 동시에 [다크 아트]를 생성하여 손으로 가져옵니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/1/10/o9w29x3ep4borofg5lp4duyjp59ru74.png',
  },
  유성: {
    amount: 1,
    cost: 5,
    name: '유성',
    desc: `[포말하우트]로 힘껏 내리쳐 지진을 일으킵니다. 모든 적에게 7단 피해를 입히고 [기절]시키며, 동시에 [붕괴]와 [격파]를 부여합니다.
    손에 있는 카드수만큼 진동파를 발사하여 지진파 1개당 모든 적에게 1단 피해를 입힙니다.
    진동파는 [파]입니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/1/15/0e7gpi889pd6vua0qr4l4lto8436wp7.png',
  },

  배드: {
    amount: 4,
    cost: 1,
    name: '배드',
    desc: `[폭발 망치]를 사용하여 적에게 1단 피해를 입히고 [중단]을 부여합니다.
    동시에 [점화]를 발동합니다.
    [폭발 장치]는 [폭발물]입니다.`,
    descSub: 'Gonna lock you up',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/d/dc/h9g1dhg557c0m4tr2m5n674nr6gn1z3.png',
  },
  '디스 이즈 잇': {
    amount: 1,
    cost: 0,
    name: '디스 이즈 잇',
    desc: `비용이 가장 높은 카드를 우선으로 카드를 1장 뽑습니다.`,
    descSub: 'I`m the light of the world',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/d/d6/56v1hhty8qghdg4cu45lc4oslqxn07m.png',
  },
  '아윌 비 데어': {
    amount: 1,
    cost: 5,
    name: '아윌 비 데어',
    desc: `앞에 [때리바] 1개를 놓아 피해를 막습니다. [때리바]의 내구도는 자신의 체력의 80%입니다.
    사용 시 [아윌 비 데어]가 [유아 낫 얼론]으로 전환됩니다.
    [때리바]는 아무 감정이 없는 철벽이기에 파손되면 수리하여 계속 사용할 수 있습니다.`,
    descSub: 'Just call my name',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/7/7b/s2tu8yymzwxdwxtuwpf07pyggu19gfz.png',
  },
  '유 아 낫 얼론': {
    amount: 0,
    cost: 5,
    name: '유 아 낫 얼론',
    desc: `[때리바]를 수리하여 100%의 내구도를 회복합니다.`,
    descSub: 'I am here to stay',
    isGeneratedCard: true,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/8/81/1k0fpki3qh8bccpexexmhpy6cghpbdw.png',
  },

  일촉즉발: {
    amount: 2,
    cost: 2,
    name: '일촉즉발',
    desc: `고스건 차지모드로 적에게 1단 피해를 입히고 [격파]를 발동합니다.
    사용 후 [일촉즉발]은 [돌진]으로 전환됩니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/c/c9/7cx93nievnizibuzpeqgevur2wulseq.png',
  },
  돌진: {
    amount: 0,
    cost: 2,
    name: '돌진',
    desc: `방탄 조끼의 고성능 모드를 활성화하여 10초간 자신의 방어력을 2배 증가시킵니다.
    지속시간 동안, 자신은 [슈퍼아머]를 획득합니다.
    사용 후 [돌진]이 [일촉즉발]로 전환합니다.`,
    isGeneratedCard: true,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/4/45/865zwudmm2orxfj6xh40gkngj05awjw.png',
  },
  연막탄: {
    amount: 2,
    cost: 2,
    name: '연막탄',
    desc: `한 개의 연막탄을 투척하여 모든 적이 공격할 수 없게 합니다.(5초간 지속)
    [연막탄]은 [폭발물]입니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/4/45/fx9w8apf8utwb7m9dgufu5okkobpvx1.png',
  },
  '엄호 사격': {
    amount: 1,
    cost: 0,
    name: '엄호 사격',
    desc: `모든 비용을 소모하여 사격합니다. 1 비용당 4발의 총알을 발사하여 총알마다 무작위 적에게 1단 피해를 입힙니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/5/54/ckmlw9h20poz2vwazivhq22qa13khao.png',
  },

  '재앙의 달': {
    amount: 3,
    cost: 1,
    name: '재앙의 달',
    desc: `적을 [관통]하는 검기를 날립니다.
    모든 적에게 1단 피해를 입히고 [참열]을 부여합니다.
    검기는 [파]입니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/a/a8/6gwc3kczwtdqqi8dtwamclij9nikf9l.png',
  },
  '적막의 달': {
    amount: 1,
    cost: 3,
    name: '적막의 달',
    desc: `[재앙의 달]을 우선으로 카드를 3장 뽑습니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/1/11/9dys9gl3z75xajckk3j42ppjiz25w2c.png',
  },
  '지옥의 달': {
    amount: 1,
    cost: 6,
    name: '지옥의 달',
    desc: `모든 적에게 1단 피해를 입히고 [참열]을 부여합니다.
    동시에 버려진 덱의 모든 [재앙의 달]을 냅니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/d/d7/9ixkjpz6zq5qn3pwhkd4ha3gh2vr8uz.png',
  },

  '마그네틱 펄스': {
    amount: 3,
    cost: 1,
    name: '마그네틱 펄스',
    desc: `펄스 에로우를 발사하여 적에게 1단 피해를 입히고 [튕김]과 [인뢰]를 발동합니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/5/54/mjsq7yvjeaenkyx2yrevbot2tvjc2sm.png',
  },
  듈리: {
    amount: 1,
    cost: 3,
    name: '듈리',
    desc: `카드를 1장 뽑습니다.
    [레드카드] 혹은 [퍼플카드]를 뽑았다면 [아기곰 듈리-공격 모드]를 활성화합니다.
    [블루카드] 혹은 [그린카드]를 뽑았다면 [아기곰 듈리-방어 모드]를 활성화합니다.
    [옐로카드] 혹은 [블랙카드]를 뽑았다면 [듈리]를 활성화할 때까지 카드를 계속 뽑습니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/4/4a/11pgzsckxdjquurueasvqvdfpxa3hwa.png',
  },
  '공명 펄스': {
    amount: 1,
    cost: 5,
    name: '공명 펄스',
    desc: `힘껏 사격하여 적에게 3단 피해를 입히고 [튕김]과 [인뢰]를 발동합니다.
    덱에 있는 모든 [마그네틱 펄스]를 즉시 손으로 가져옵니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/8/85/g35mwdje1xcjhia5ghcdqabzea9w9si.png',
  },

  '썬더 워킹': {
    amount: 3,
    cost: 1,
    name: '썬더 워킹',
    desc: `분신을 하나 생성하여 범위 내의 적에게 1단 피해를 입히고 사라지며 동시에 [인뢰]/[참열]을 발동합니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/0/0d/45mfz810phxwan1dv70qmiq8zyahj7e.png',
  },
  청천벽력: {
    amount: 2,
    cost: 3,
    name: '청천벽력',
    desc: `자신이 주는 [인뢰]의 발동 확률이 8% 증가합니다.(중첩 가능)
    분신을 하나 생성하여 적에게 3단 피해를 입히고 사라집니다. 동시에 [인뢰]를 발동합니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/a/a7/azzjtj0xrfnt92tr2k8qpqbeiyfpomo.png',
  },
  '팬텀 서킷': {
    amount: 1,
    cost: 4,
    name: '팬텀 서킷',
    desc: `분신을 3개 생성하여 각 분신마다 적에게 3단 피해를 입히고 사라집니다.
    동시에 [인뢰]를 발동합니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/0/08/tvy8dpqcl8x1jfwfnxehm7sfcb7iw8y.png',
  },

  회복침: {
    amount: 2,
    cost: 3,
    name: '회복침',
    desc: `[회복침]을 발사하여 아군의 체력을 35% 회복시키며 방어력을 3% 증가시킵니다.(중첩 가능)`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/e/e5/hjez8zc51m2vlyav2p6x5didefgrpto.png',
  },
  공격침: {
    amount: 3,
    cost: 3,
    name: '공격침',
    desc: `[공격침]을 발사하여 적에게 1단 피해를 입히고 [기절] 시킵니다. 동시에 [화상]을 발동하여 적의 공격력을 2% 감소시킵니다.(중첩 가능)`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/4/47/o5gylwj7iigrst6oq9emc40llru63o8.png',
  },
  미혹탄: {
    amount: 1,
    cost: 6,
    name: '미혹탄',
    desc: `[미혹탄]으로 모든 적에게 5단 피해를 입히고 [혼란]을 부여합니다. 동시에 모든 적의 방어력을 3% 감소시킵니다.(중첩 가능)
    사용 후 [블랙카드] [스모킹 건]을 1장 생성하여 손으로 가져옵니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/9/94/hai7ppsomic06gd1mgy1feduvt66pdy.png',
  },
  '스모킹 건': {
    amount: 0,
    cost: 0,
    name: '스모킹 건',
    desc: `코끝에 남은 달짝지근한 향은 치명적인 독으로 다가옵니다.
    손에서 내면 [소각]됩니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/0/04/6ycuxyz1zvbj90e1k4k3ttlako084le.png',
    isGeneratedCard: true,
  },

  '배트 타격': {
    amount: 2,
    cost: 2,
    name: '배트 타격',
    desc: `배트로 내리쳐 적에게 1단 피해를 입히고 [기절]과 [점화]를 발동합니다`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/0/09/g0ix79oshbxr6u7hbb2yf4lbq5glk9u.png',
  },
  '어퍼 스윙': {
    amount: 2,
    cost: 3,
    name: '어퍼 스윙',
    desc: `전력으로 홈런을 쳐서 적에게 1단 피해를 입히고 [넉백]시킵니다. 동시에 20% 확률로 대상을 [에어본] 시킵니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/2/22/5kyxb166fea6qu2m95ri5rb2p9ifrx9.png',
  },
  무명: {
    amount: 1,
    cost: 4,
    name: '무명',
    desc: `지면을 내리쳐 범위 내에 적에게 1단 피해를 입힙니다.
    연소 가능한 기체를 방출하여 범위 내의 아군과 적에게 [점화]를 부여합니다.
    점화된 아군의 공격력이 3% 증가합니다.(중첩 가능)`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/a/ab/0cs7vrf95zt9r7xojfoeuxyu1p7ndkh.png',
  },

  바람베기: {
    amount: 2,
    cost: 3,
    name: '바람베기',
    desc: `[건어도]를 발도하여 3연타를 시전하여 적에게 3단 피해를 입힙니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/e/e8/7m1u5o6jfqff2qssvd9xqztrffzyjf6.png',
  },
  회천: {
    amount: 2,
    cost: 2,
    name: '회천',
    desc: `자신에게 6초간 [블록] 상태를 부여합니다.
    덱의 맨 위에 있는 카드를 확인한 후, [레드카드]일 경우 손으로 가져오고 아닐 경우 카드를 버립니다.
    [회천] 사용 후 [역풍]을 1장 생성하여 손으로 가져옵니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/f/f1/p7wkzwuck2q2khqcuyd62la9sct8fr2.png',
  },
  역풍: {
    amount: 0,
    cost: 0,
    name: '역풍',
    desc: `[건어도]를 발도하여 거합도를 시전하여 적에게 1단 피해를 입히고 [붕괴]를 부여합니다.
    손에서 내면 [소각]됩니다`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/4/4d/oih5o6sxk3ftnzofgwr4d29jacamsz0.png',
    isGeneratedCard: true,
  },
  '비검-날쥐 회귀': {
    amount: 1,
    cost: 4,
    name: '비검-날쥐 회귀',
    desc: `[건어도]를 발도하여 비천원무를 시전하여 적에게 #r단 피해를 입히고 [열상]을 부여합니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/2/28/68izfdw5rrk9oj0ln6kuodpy3vwgkj0.png',
  },

  '전술 수류탄': {
    amount: 3,
    cost: 2,
    name: '전술 수류탄',
    desc: `전술 수류탄을 1개 던져 범위 내의 적에게 1단 피해를 입히며 [중단]을 부여합니다.
    동시에 [냉동]을 발동합니다.
    [수류탄]은 [폭발물]입니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/4/43/84huri99394suu7nrsfoneryy4hm7cb.png',
  },
  '폭파 지원': {
    amount: 1,
    cost: 3,
    name: '폭파 지원',
    desc: `[폭발물] 키워드를 가진 카드를 우선으로 카드를 2장 뽑습니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/7/7c/7p2x095c69ecfplyp31sjs1hkrkcwk3.png',
  },
  '클러스터 폭탄': {
    amount: 1,
    cost: 4,
    name: '클러스터 폭탄',
    desc: `손에 있는 카드 중 비용이 가장 높은 카드의 비용만큼 [클러스터 폭탄]을 목표 구역에 던지고 범위 내 적에게 1단 피해를 입히며 [기절]을 부여합니다.
    [클러스터 폭탄]은 [폭발물]입니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/6/66/iapmr0mpsuqexfp4csr5ze9uzr2q7lh.png',
  },

  '구름 베기': {
    amount: 2,
    cost: 3,
    name: '구름 베기',
    desc: `[안령도]를 휘둘러 적에게 2단 피해를 입히고 [참열]을 부여합니다.
    자신이 [블록] 상태라면 추가로 [황야 슬래시]를 사용합니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/4/4d/drjvd3qczbjmu8p43kmvih5jqy2z3ua.png',
  },
  '바람 막기': {
    amount: 2,
    cost: 2,
    name: '바람 막기',
    desc: `[안령도]로 막기를 시전하여 6초간 [블록] 상태에 진입합니다.
    사용 후 덱에서 [구름 베기]를 1장 뽑아 손으로 가져옵니다.
    [블록]상태 해제 후 [까마귀 깃]을 1장 생성하여 손으로 가져옵니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/8/8b/r89xcgo700dd1v4zats4riboqzpszoz.png',
  },
  '까마귀 깃': {
    amount: 0,
    cost: 0,
    name: '까마귀 깃',
    desc: `암살 무기인 [까마귀 깃]을 시전하여 적에게 3단 피해를 입히고 [튕김]과 [열상]을 발동합니다.
    이 카드는 버려지면 사용된 것으로 간주합니다.
    사용 후 [소각]됩니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/e/e1/32r3x7g1zy9i3snihbudt5qcy0nbpv2.png',
    isGeneratedCard: true,
  },
  '무상-난새 회귀': {
    amount: 1,
    cost: 4,
    name: '무상-난새 회귀',
    desc: `[안령도]로 회전 베기를 시전하여 범위 내에 적에게 8단 피해를 입히고 5% 확률로 [참열]을 발동합니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/9/9c/aia662md64c818d8xikad2nj1vdw720.png',
  },

  눈사태: {
    amount: 2,
    cost: 3,
    name: '눈사태',
    desc: `자신의 앞에 눈덩이를 만들어 피해를 막습니다. 동시에 자신은 5초간 지속되는 [슈퍼아머]를 획득합니다.
    지속시간 동안, 눈덩이는 매초 자신의 체력의 10%만큼 내구도를 획득합니다.
    [슈퍼아머] 종료 후, 눈덩이를 적에게 던져 모든 적에게 1단 피해를 입히고 [냉동]을 발동합니다.
    눈덩이의 크기와 피해는 명중 시 눈덩이의 내구도에 의해 결정됩니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/d/d8/2c85jq9oxuond30aqcr0jbiaw2fmlho.png',
  },
  디스코팡팡: {
    amount: 2,
    cost: 3,
    name: '디스코팡팡',
    desc: `공중에서 회전하며 범위 내의 적에게 5단 피해를 입히고, [넉백]시킵니다.
    동시에 [냉동]과 [열상]을 발동합니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/9/94/3dl2d29g7ljht9iijpx7346k3anif78.png',
  },
  '켈빈 조크': {
    amount: 1,
    cost: 4,
    name: '켈빈 조크',
    desc: `액체질소 살포 장치를 펼쳐 [켈빈 조크] 환경을 조성합니다.
    필드의 모든 [냉동] 상태의 대상에게 [붕괴]를 부여합니다. (12초간 지속)
    지속시간 동안 매초 무작위 적에게 [냉동]을 부여합니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/c/cc/qs1ylnipt4lhx3k1twhbgvyyxsqmekk.png',
  },

  '전신주 커터': {
    amount: 2,
    cost: 3,
    name: '전신주 커터',
    desc: `[전신주 커터]를 발도하여 적에게 4단 피해를 입힙니다.
    이 카드의 [협세]:
    이 카드의 효과는 자신의 [은신] 상태에 따라 변화합니다.
    자신이 [은신] 상태일 경우 손에 있는 [전신주 커터]는 [레일 커터]로 전환되고, [은신] 상태가 아닐 경우 손에 있는 [레일 커터]는 [전신주 커터]로 전환됩니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/0/00/0ylil7dc6u3lt4ytj5idkpywkdd5qgr.png',
  },
  '레일 커터': {
    amount: 0,
    cost: 3,
    name: '레일 커터',
    desc: `[레일 커터]로 적에게 1단 피해를 입히며 [참열]을 부여합니다.
    이 카드의 [협세]:
    이 카드의 효과는 자신의 [은신] 상태에 따라 변화합니다.
    자신이 [은신] 상태일 경우 손에 있는 [전신주 커터]는 [레일 커터]로 전환되고, [은신] 상태가 아닐 경우 손에 있는 [레일 커터]는 [전신주 커터]로 전환됩니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/2/25/dntk40ipczqljfq32wbhvytva2k76k8.png',
    isGeneratedCard: true,
  },
  '버드 헌팅': {
    amount: 2,
    cost: 2,
    name: '버드 헌팅',
    desc: `어둠속에 숨어 5초간 [은신]합니다.
    이미 [은신] 상태일 경우 버려진 덱에서 최대 1장의 레드카드를 회수하여 손으로 가져옵니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/f/f7/p6y3cqn16io1fkz8bk8drhrh3tuuqkv.png',
  },
  '비검-철강 절단': {
    amount: 1,
    cost: 6,
    name: '비검-철강 절단',
    desc: `[전신주 커터]를 발도하여 전방 범위 내에 적에게 8단 피해를 입히고 [열상]을 부여합니다.
    [레일 커터]를 발도하여 전방 범위 내에 적에게 1단 피해를 입히고 [참열]을 부여합니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/4/44/efe0xtpuarvnj8kvb03fz833iyb50mi.png',
  },

  족제비술: {
    amount: 3,
    cost: 2,
    name: '족제비술',
    desc: `회오리 부채를 사용하여 적에게 3단 피해를 입히고 [열상]을 부여합니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/0/03/fda5g2kcr71lzgoxeryxui454ngrhxz.png',
  },
  안개: {
    amount: 1,
    cost: 3,
    name: '안개',
    desc: `안갯속으로 몸을 숨겨 10초간 [은신]합니다. 지속시간 동안 [일반 공격]의 부채 수량이 1개 증가합니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/b/b7/p1lagdz3kry4c4ko51gmfjuz5cqaz0b.png',
  },
  '오의-풍둔 족제비술': {
    amount: 1,
    cost: 4,
    name: '오의-풍둔 족제비술',
    desc: `바람속으로 몸을 숨겨 목표 구역에 [오의-풍둔 족제비술]을 시전하여 범위 내의 적에게 6단 피해를 입히고 [열상]을 부여합니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/3/30/sz67op01rhecr6cu24eswm2dz0zentf.png',
  },

  '방패 타격': {
    amount: 3,
    cost: 2,
    name: '방패 타격',
    desc: `방패를 내리쳐 범위 내에 적에게 1단 피해를 입히고 [중단]을 발동합니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/2/2f/5iowo2cpgv150vbalaoao8whksan1sj.png',
  },
  '에너지 실드': {
    amount: 2,
    cost: 2,
    name: '에너지 실드',
    desc: `아군이 10초간 지속되는 [실드]를 획득합니다. [실드]의 내구도는 자신의 방어력의 #r입니다.
    이 카드의 [공명]: 앞에서 낸 카드에 따라 컬러가 바뀝니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/d/da/dhevxrtq9uv4dwz7e33r5wtmvz49l3j.png',
  },
  '절대 승리': {
    amount: 1,
    cost: 5,
    name: '절대 승리',
    desc: `몸을 날려 방패로 지면을 강타하여 범위 내의 적에게 1단 피해를 입히고 [붕괴]를 부여합니다.
    주변 아군이 10초간 지속되는 [실드]를 획득합니다. [실드]의 내구도는 자신의 방어력의 2000%입니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/3/32/n7b1a8k6b0y0sbyswm8awkjprzaaqrs.png',
  },

  '마술 사탕': {
    amount: 3,
    cost: 2,
    name: '마술 사탕',
    desc: `아군의 체력을 25% 회복합니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/1/1a/8a9lrv51h95s63suw961zy7tjwc9vnm.png',
  },
  '무지개 병': {
    amount: 1,
    cost: 0,
    name: '무지개 병',
    desc: `2장의 [에너지 콩]을 덱에 추가합니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/9/9c/kszup1jqrw8xp6yhrny0s6n73sn0u5f.png',
  },
  '에너지 콩': {
    amount: 0,
    cost: 0,
    name: '에너지 콩',
    desc: `비용을 2 얻습니다.
    사용 후 [소각]됩니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/d/d3/roz2493gyo17abkcrxh81ppigaa0yqj.png',
    isGeneratedCard: true,
  },
  '전장의 의사': {
    amount: 1,
    cost: 4,
    name: '전장의 의사',
    desc: `앞열의 모든 아군을 치유하여 체력을 #r 회복합니다.
    덱에 있는 모든 [마술 사탕]을 손으로 가져옵니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/5/5a/o1ior1551scnfdlu474yp2jix75iby0.png',
  },

  분수: {
    amount: 2,
    cost: 2,
    name: '분수',
    desc: `카드를 1장 뽑습니다. 비용이 홀수라면 이번 전투동안 [일반 공격]이 발사하는 탄약수가 1 증가합니다.(10회 한정) 동시에 물총이 6초간 연사 모드에 진입합니다. 지속 시간 동안 [일반 공격]이 발사하는 탄약수가 2배로 증가합니다. 동시에 [일반 공격]을 선택된 대상에게로 전환합니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/2/2f/1f0qnk083f6l5rkmjk029oig2do9e6k.png',
  },
  '해변의 꽃': {
    amount: 3,
    cost: 2,
    name: '해변의 꽃',
    desc: `카드를 2장 뽑습니다. 카드를 1장 뽑을 때마다 모든 아군의 공격력이 +2% 증가합니다.(중첩 가능) 블루카드를 1장 뽑을 때마다 모든 아군의 방어력이 2%증가합니다.(중첩 가능) 옐로카드를 1장 뽑을 때마다 카드를 1장 뽑습니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/a/a1/j68p7wf4rhih2vkqdyg7k2buek2e43c.png',
  },
  '한여름의 물거품': {
    amount: 4,
    cost: 1,
    name: '한여름의 물거품',
    desc: `[일반 공격]을 다음과 같이 전환합니다. [일반 공격]의 탄약수만큼 [유영탄]을 발사합니다.(10초간 지속) [유영탄] 1발당 무작위 적에게 1단 피해를 입히고, 동시에 50% 확률로 [냉동]을 발동합니다. [유영탄]의 피해는 [일반 공격] 탄약의 3배입니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/2/2a/f4mkxj5lvdwavv5whwtcypz2npc6znn.png',
  },

  메로페: {
    name: '메로페',
    amount: 3,
    cost: 3,
    desc: '[메로페]를 부릅니다. 지속시간:8초\n사용한 레드카드에 따라:\n레드카드 사용 시 마이크로파 펄스를 발사하여 적에게 1단 피해를 입히고, 동시에 [점화]를 발동합니다.\n옐로카드 사용 시 전자기 펄스를 발사하여 적에게 1단 피해를 입히고, 동시에 [낙뢰]를 발동합니다.\n[메로페]는 [기계형 유닛]입니다.\n마이크로파 펄스/전자기 펄스는 [파]입니다.\n사용 후 블랙카드 [음에너지]를 1장 생성하여 덱의 맨아래에 추가합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/2/2b/5zn9z7kt06sfqmtg4bkhx4yoqhsov5g.png',
  },
  '비밀 통신': {
    name: '비밀 통신',
    amount: 3,
    cost: 1,
    desc: '다이얼을 돌려 0~9 중 하나를 무작위로 선택합니다.\n2/3/4/5/6/7/8이라면 해당 숫자에 따라 매초 비용을 0.2/0.3/0.4/0.5/0.6/0.7/0.8 회복합니다. (8초간 지속)\n0이라면 즉시 [버리기] 명령을 활성화합니다.\n1이라면 현재 손패에서 비용이 가장 높은 카드를 1장 선택하여 비용을 1로 변경합니다.\n9라면 즉시 [리더 스킬]을 활성화합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/3/38/k8vpgc6yqvzhtqjgn574kqlberx85at.png',
  },
  '조석의 비경': {
    name: '조석의 비경',
    amount: 1,
    cost: 3,
    desc: '명상하여 [조석의 비경]을 형성합니다.\n[조석의 비경]의 회복 속도가 100%초간 증가합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/2/22/7tyaywz6fqez5a9zvcnbk3wir8iajeh.png',
  },

  수난: {
    name: '수난',
    amount: 3,
    cost: 3,
    desc: '앞방향의 범위 내에 있는 적에게 4단 피해를 입히고 [저주]를 부여합니다.\n사용 후 [성흔]을 1장 생성하여 손으로 가져옵니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/4/47/8h8guvxrb4jpwen8vrbjccv48dwebxp.png',
  },
  서언: {
    name: '서언',
    amount: 1,
    cost: 3,
    desc: '[진리의 눈]을 소환하여 8초간 유지합니다. (유지시간: 8초)\n카드가 생성될 때마다 광선을 1도 발사하여 모든 적에게 1단 피해를 입히고 [부식]을 부여합니다.\n사용 후 블랙카드 [음에너지]를 1장 생성하여 덱의 맨 아래에 추가합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/6/6b/fc0xt3bsy7t5hanxn1g3ieb9tfg0wp3.png',
  },
  심판: {
    name: '심판',
    amount: 1,
    cost: 6,
    desc: '블랙카드를 우선으로 카드를 1장 뽑습니다.\n검은 감옥의 광선을 시전하여 모든 적에게 7단 피해를 입히고 [붕괴]를 부여합니다.\n손에 있는 블랙카드 1장당 입히는 피해가 30% 증가하고, 비 블랙카드는 10% 증가합니다.\n사용 후 손에 있는 모든 블랙카드를 버립니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/8/88/cuu30bw4zb9qtey26ycd2qknyf60lsw.png',
  },

  성흔: {
    name: '성흔',
    amount: 0,
    cost: 2,
    desc: '적에게 [성흔]을 부여합니다.(6초간 지속) 지속시간 동안 대상이 피해를 입을 때마다 [고통] 효과를 1중 스택을 증가시킵니다. [고통] 1중당 대상이 받는 피해가 2% 증가합니다.(12중첩 시 [성흔 붕괴] 발동) [성흔 붕괴]는 적에게 1단 피해를 입히며, 동시에 [고통] 효과를 모두 제거합니다. [성흥 붕괴]는 [파]입니다. 사용 후 [소각]됩니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/9/9a/301wrbc7l9u5p84twh9edkpv5tl9bs4.png',
    isGeneratedCard: true,
  },

  '멘탈 붕괴 레일건': {
    name: '멘탈 붕괴 레일건',
    amount: 2,
    cost: 3,
    desc: "'Into your heart'\n차지샷을 시전하여 범위 내의 적에게 1단 피해를 입히고, 동시에 [변신]과 [수면]을 발동합니다.",
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/7/77/3rmu6z6vtvao6dulc25v4mhzweui4ae.png',
  },
  소란탄: {
    name: '소란탄',
    amount: 2,
    cost: 1,
    desc: "'Plays it cool'\n적을 향해 발사 시 목표 범위 내의 적에게 1단 피해를 입히고 [혼란]을 발동합니다.\n아군을 향해 발사 시 목표 범위 내의 아군을 대상으로 [광폭]을 발동합니다.\n[소란탄]은 [폭발물]입니다.",
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/8/81/4jba2mtmyzftras0te1qpfniubwgrlf.png',
  },
  'MEGA 혼돈캐넌': {
    name: 'MEGA 혼돈캐넌',
    amount: 1,
    cost: 5,
    desc: "'MEGA 혼돈의 캐넌 발사!!!'\n적을 [관통]하는 레이저포를 발사하여 모든 적에게 10단 피해를 입히고 필드에 존재하는 [광폭]/[붕괴]/[혼란]/[수면]/[변신]/[속박]/[족쇄/[저주] 효과 1개당 입히는 피해가 20% 증가합니다.",
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/3/35/gu0629w9oz5ngrrf4dhr8qvj6rjvhf2.png',
  },
  좌충우돌: {
    name: '좌충우돌',
    amount: 0,
    cost: 0,
    desc: "'Na na na na na na na na na' 모든 아군에게 [광폭]을 부여합니다. 동시에 모든 아군에게 [혼란]을 부여합니다. 사막 도적단의 동료들과 같이 돌격하여 범위 내의 적에게 다단 피해를 입힙니다. 사용 후 [소각]됩니다.",
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/a/aa/2ulrmw12zl4pzz9pqm6fbt4rg70oz3s.png',
  },

  '자기력 함정': {
    name: '자기력 함정',
    amount: 3,
    cost: 2,
    desc: '6초간 지속되는 자기력 함정을 제조합니다.\n발동 시 범위 내의 적에게 1회 [마비]를 부여합니다.\n지속시간 동안, 뒷열 아군이 입히는 [인뢰]의 확률이 10% 증가합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/a/a2/80f1keoe15u6gmrhlja69j2meu9lfvt.png',
  },
  '자기력 미끼': {
    name: '자기력 미끼',
    amount: 1,
    cost: 3,
    desc: '1장에 적힌 [인뢰] 키워드를 가진 레드카드/오렌지 카드를 사용한 즉시 덱 혹은 버려진 덱에서 2장의 [인뢰] 키워드를 가진 카드를 뽑아 손으로 가져옵니다.\n그 후 아군이 가진 [인뢰] 키워드를 가진 레드카드/오렌지 카드가 입히는 피해가 100% 증가합니다.(1회 유효)',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/f/f9/4171m233x0h3298e5vxoahxkp0n3ig1.png',
  },
  '축전 자기장': {
    name: '축전 자기장',
    amount: 1,
    cost: 4,
    desc: '1개의 강력한 축전 자기장을 생성합니다. (10초간 지속)\n지속시간:\n필드의 아군 및 적이 1회 [인뢰]를 발동할 때마다 축전 자기장의 [볼트값]이 2000 증가합니다.\n[볼트값]을 1만큼 누적할 때마다 자기 파도를 1회 시전하여 모든 적에게 1단 피해를 입히고, 동시에 모든 아군의 체력을 2% 회복시킵니다.\n[볼트값]은 계속 누적되며, 감소하지 않습니다.\n자기 파도는 [파]입니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/e/e9/lqf6z7s4p7hwnrickn28rgzf137pcnz.png',
  },
  십만볼트: {
    name: '십만볼트',
    amount: 0,
    cost: 1,
    desc: '십만볼트를 시전하여 모든 적에게 10단 피해를 입히고, 동시에 20% 확률로 [우레]를 발동합니다. 사용 후 아군의 모든 [인뢰] 키워드를 가진 카드의 피해가 2% 증가합니다.(중첩 가능) 사용 후 [소각]됩니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/3/31/bpgjnzrk267fephsrymc8jyvkxlab0s.png',
  },
  백만볼트: {
    name: '백만볼트',
    amount: 0,
    cost: 5,
    desc: '백만볼트를 시전하여 모든 적에게 10단 피해를 입히고 동시에 20% 확률로 [천둥]을 발동합니다. 사용 후 즉시 덱 혹은 버려진 덱에서 비용이 5 이고 [인뢰] 키워드를 가진 카드를 즉시 손으로 가져오며 손패 상한을 초과할 수 있습니다. 사용 후 [소각]됩니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/d/d6/rrig6bu585tstmtj8weye95zuq39hko.png',
  },

  '베기!': {
    name: '베기!',
    amount: 3,
    cost: 2,
    desc: '[열천]을 휘둘러 적에게 1단 피해를 입히고 1~3회의 [참열]을 부여합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/1/1f/rng3rzqbcwd8oileatyvuyyl0k5echl.png',
  },
  '잠식의 영역': {
    name: '잠식의 영역',
    amount: 1,
    cost: 3,
    desc: '10초간 지속되는 [열상 법계]를 전개합니다.(지속시간 동안:) 지속시간 동안 아군이 [참열]을 부여할 때, 동시에 [부식]을 발동합니다.\n사용 후 블랙카드 [음에너지]를 1장 생성하여 덱의 제일 아래에 추가합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/5/52/mcocx46onkrkntgix3mj4q5acehmzby.png',
  },
  '밤을 베는 마력의 빛!': {
    name: '밤을 베는 마력의 빛!',
    amount: 1,
    cost: 9,
    desc: '모든 [열명]을 동시에 휘두르며 8도 열명파를 시전한 후 몸을 돌진하여 종결 참격을 시전해 모든 적에게 9단 피해를 입히고 [참열]을 부여합니다.\n열명파는 [파]입니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/8/88/t2wevfmd2jfzi01blimz49gclwx2jay.png',
  },

  '정신 포식': {
    name: '정신 포식',
    amount: 1,
    cost: 4,
    desc: '[동반체]가 혼돈을 감지합니다.\n아래 효과를 발동합니다.(3회 유효)\n퍼플카드 사용 시 강력한 정신 공격을 시전하여 대상에게 1단 피해를 입히고 [혼란]을 부여합니다. 동시에 대상의 공격력이 2% 감소하고, 자신의 공격력이 2% 증가합니다.(중첩 가능)\n이 카드는 사용 시 1회 카운트됩니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/3/3a/8i03esi2l7k4i8nr3un8xhgx7ll76j8.png',
  },
  감지: {
    name: '감지',
    amount: 1,
    cost: 3,
    desc: '손이 가득 찰 때까지 카드를 뽑습니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/d/da/15sof8gt48ghzkf2s7gv9ewewgdoarx.png',
  },
  '정신 폭풍': {
    name: '정신 폭풍',
    amount: 1,
    cost: 5,
    desc: '아일리와 [동반체]가 정신 폭풍을 일으켜 모든 적에게 5단 피해를 입히고 [저주]를 부여합니다.\n아래 효과를 발동합니다.(3회 유효)\n레드카드 사용 시 [감정-분노]를 1장 생성하여 손으로 가져옵니다.\n옐로카드 사용 시 [감정-유쾌]를 1장 생성하여 손으로 가져옵니다.\n블루카드/그린카드 사용 시 [감정-냉정]을 1장 생성하여 손으로 가져옵니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/5/5c/1q5gxes1c0akzs89bojqzzz1b1vya3u.png',
  },

  '정서-냉정': {
    name: '정서-냉정',
    amount: 0,
    cost: 1,
    desc: '아일리가 공격 대상을 선택된 적으로 변경하여 대상에게 2단 피해를 입히고 [속박]을 부여합니다. 동시에 체력이 가장 낮은 아군 1명이 10초간 [실드]를 얻습니다. [실드]의 내구도는 자신의 방어력의 2000%입니다. 사용 후 [소각]됩니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/2/23/k7y2rrox66xdweu2qijkzd1eooe6mnh.png',
  },
  '정서-기쁨': {
    name: '정서-기쁨',
    amount: 0,
    cost: 1,
    desc: '아일리가 공격 대상을 선택된 적으로 전환하여 해당 대상에게 5단 피해를 입히고 카드를 1장 뽑습니다. 사용 후 [소각]됩니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/2/2f/lpm7hwdb1pl16w7bedoru4lja0jf0z6.png',
  },
  '정서-분노': {
    name: '정서-분노',
    amount: 0,
    cost: 1,
    desc: '아일리가 공격 대상을 선택된 적으로 전환하여 해당 대상에게 10단 피해를 입히고 자신은 [광폭]을 얻습니다. 사용 후 [소각]됩니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/d/de/2iwbi1qo2kjb66hn9fu0n6bo8puuore.png',
  },

  '지각 개입': {
    name: '지각 개입',
    amount: 2,
    cost: 2,
    desc: '아군을 표식하고 표식한 대상의 체력을 매초 5% 회복합니다.(6초간 지속)\n지속 시간 동안 대상이 받는 피해가 50% 감소합니다.\n동시에 [일반 공격]의 치유 대상을 표식한 아군으로 전환합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/c/c9/q93mjz8i529qstj7qp92zft8ca594ml.png',
  },
  '약물 각성': {
    name: '약물 각성',
    amount: 3,
    cost: 1,
    desc: '아군을 치유하여 대상의 체력을 25% 회복합니다.\n동시에 대상이 받는 제어와 피해형 특수 효과를 제거합니다.\n사용 후 덱에서 [약물 각성]을 1장 뽑아 손으로 가져옵니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/7/7a/j1krwiobh4xy4meqcrv2mjvansp9u5h.png',
  },
  계약: {
    name: '계약',
    amount: 1,
    cost: 3,
    desc: '생명의 계약을 체결합니다.(10초간 지속)\n지속 시간 동안 임의 아군이 빈사 상태 시 대상의 체력을 20%회복하고 자신의 현재 체력을 20% 잃습니다.\n효과 발동 시 덱 혹은 버려진 덱에서 [지각 개입] 1장을 손으로 가져옵니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/3/37/9p8ko49237rj6mondpr3qj1xam14ob4.png',
  },

  '관통통 사격': {
    name: '관통통 사격',
    amount: 2,
    cost: 2,
    desc: '[관통통]을 적의 사격에 맞춰 저지합니다.\n적에게 1단 피해를 입히고 [붕괴]를 부여합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/b/bd/bx9kbzntn2vr5hda7hriw8ptv9c0di7.png',
  },
  차지: {
    name: '차지',
    amount: 2,
    cost: 1,
    desc: '힘을 모아 다음에 내는 [관통통 사격] 혹은 [파열 사격]이 입히는 피해가 50% 증가합니다.(중첩 가능)',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/3/3d/p4fz2m0tjlhmgn9nmysc2x9i4s07nuy.png',
  },
  '파열 사격': {
    name: '파열 사격',
    amount: 1,
    cost: 5,
    desc: '[관통통]을 적의 체내에 찔러 넣어 파열 사격합니다.\n적에게 5단 피해를 입히고 [참열]을 부여합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/3/33/59k3qnqg45sqknnqnv6fqqdnpji78ik.png',
  },

  '검은 물약': {
    name: '검은 물약',
    amount: 0,
    cost: 4,
    desc: '[검은 물약]을 주사하여 모든 적에게 방어력을 무시한 1단 피해를 입히고 매초 자신의 체력을 1%초간 제거합니다. 지속시간 동안 자신을 전면 강화합니다. 입히는 최종 피해가 30 증가합니다. 받는 최종 피해가 50% 감소합니다. 사용 후 [소각]됩니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/5/50/of8izub1keuw0u64m6pakshl2gjh0og.png',
  },

  철막: {
    name: '철막',
    amount: 1,
    cost: 3,
    desc: '[A-1SO]가 철막을 펼쳐 모든 아군의 피해를 막습니다. [철막]의 내구도는 파라디 최대 체력의 50%입니다.\n[철막]이 존재하는 동안 [일반 공격]이 [철막]의 내구도를 5% 수리합니다.\n[철막]의 방어력은 파라디의 방어력과 동일하며, 동시에 1개의 [철막]만 존재할 수 있습니다.\n[A-1SO]는 [기계 유닛]입니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/f/fa/dzmsucxv4eyhdxlvmloge9rasvak7rg.png',
  },
  화염벽: {
    name: '화염벽',
    amount: 2,
    cost: 2,
    desc: '[A-1SO]가 지면에 휘발유를 뿌리고 불을 붙여 적 필드에 [광염]을 발동하고 모든 적의 스태미나가 3% 감소합니다.\n동시에 모든 적의 공격력이 2% 감소합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/8/82/9ce8htka0liigu14qceemkguvso1jrz.png',
  },
  '강력 진압': {
    name: '강력 진압',
    amount: 1,
    cost: 5,
    desc: '파라디가 호루라기를 불어 로봇을 지휘하여 폭동을 진압합니다.\n[A-1SO]가 음파 빔을 발사하여 모든 적에게 8단 피해를 입히고 [기절]을 부여합니다.\n[A-1SO]가 고압 전류를 방출하여 모든 적에게 8단 피해를 입히고 [인뢰]를 발동합니다.\n[A-1SO]와 [A-2SO]는 [기계 유닛]입니다.\n음파 빔은 [파]입니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/c/ce/8xlqg3ox0tki11x2qt4qyixa9q8u9h9.png',
  },

  '나비의 춤': {
    name: '나비의 춤',
    amount: 3,
    cost: 2,
    desc: '숙련된 더블건 사격으로 적에게 6단 피해를 입힙니다.\n동시에 1단 피해를 입힐 때마다 10% 확률로 [점화]를 발동합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/1/12/2lrpzyrd5oallau40s2q10q1dt43bcn.png',
  },
  '유령의 춤': {
    name: '유령의 춤',
    amount: 2,
    cost: 3,
    desc: '적의 앞자리에 순간이동하여 적에게 3단 피해를 입힙니다.\n이후 대상에게 강력한 펀치를 날려 1단 피해를 입히고 대상의 공격력과 방어력을 3% 감소시킵니다.(최대 30%)\n동시에 [기절]/[중상]/[참열]을 발동합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/a/a7/8f8tmb9dybbd2wg6m1tjyxd541nls1e.png',
  },
  '환영 난무': {
    name: '환영 난무',
    amount: 1,
    cost: 5,
    desc: '총검의 춤을 춰 모든 적에게 12단 피해를 입히고 [열상]을 부여합니다.\n동시에 [광염]을 발동합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/f/fe/5j2o6peli8i1stw6ldrudrpn08up1do.png',
  },

  무기고: {
    name: '무기고',
    amount: 2,
    cost: 0,
    desc: "'Drop the beat!'\nBO-X가 소형 무기고를 검색합니다.\n무작위로 [권총]/[돌격소총]/[연소 수류탄]을 1장 생성하여 손으로 가져옵니다.",
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/3/38/4tqcxtsdlez1eoi0bad49r5iqd5iivy.png',
  },
  '음료수 배달': {
    name: '음료수 배달',
    amount: 2,
    cost: 0,
    desc: "'Life tastes good'\nBO-X가 음료수를 1잔 만듭니다.\n무작위로 [특제 홍차]/[단백질 파우더]/[민트 아이스]를 1장을 생성하여 손으로 가져옵니다.",
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/2/2d/th4b7vk6f3t8zd2gl8wydleiknnwagi.png',
  },
  '폐기 처분': {
    name: '폐기 처분',
    amount: 1,
    cost: 0,
    desc: "'I will be back!'\nBO-X가 자신을 폐기 처분하며 [디스크 복구] 1장을 생성하여 덱에 추가합니다.",
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/b/b7/m21k09il7vmphdr4dxzt3yupejv9zua.png',
  },

  권총: {
    name: '권총',
    amount: 0,
    cost: 1,
    desc: "'Bang! Bang! Bang!' 적에게 3단 피해를 입힙니다. 동시에 자신의 [일반 공격] 속도가 10% 증가합니다.(중첩 가능) 손에서 내면 [소각]됩니다.",
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/8/80/7r1jgu2xc83ttpw0gsjdl3cege4pa69.png',
  },
  돌격소총: {
    name: '돌격소총',
    amount: 0,
    cost: 2,
    desc: "'2! 2! 2! 2! 2! 2!' 적에게 6단 피해를 입힙니다. 동시에 자신의 공격력이 1% 증가합니다.(중첩 가능) 손에서 내면 [소각]됩니다.",
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/9/94/63713jdxuwytjurakb1tril0e3hhgbc.png',
  },
  '연소 수류탄': {
    name: '연소 수류탄',
    amount: 0,
    cost: 3,
    desc: "'Boom!' 목표 구역을 향해 연소 수류탄을 투척하여 범위 내의 적에게 1단 피해를 입히고, 동시에 [점화]를 발동합니다. 손에서 내면 [소각]됩니다.",
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/4/43/epyktd3yp5dlxyy9i3nrdedrez61hgc.png',
  },
  무전기: {
    name: '무전기',
    amount: 0,
    cost: 4,
    desc: "'Beee! Beee! Beee!' [플라잉 BO-X]를 호출하여 [BO-X MK2] 1개를 투하합니다. 여러개 존재할 수 있으며, 최대 5개입니다. 사용 후 [소각]됩니다.",
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/4/43/6kmqcdhnbej0maq44orib5b7uyh6119.png',
  },
  '디스크 복구': {
    name: '디스크 복구',
    amount: 0,
    cost: 3,
    desc: '파손된 [BO-X 시리즈] 하나의 체력을 30% 회복합니다. [BO-X 시리즈]: [BO-X]/[성검 BO-X]/[아이기스 BO-X]/[로켓펀치 BO-X]/[플라잉 BO-X]/[BO-F] [BO-X 시리즈]는 [로봇]입니다. 사용 후 [소각]됩니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/6/62/mp98y7mhra0ipeo4dgwqiicqqh7j9fy.png',
  },
  '특제 홍차': {
    name: '특제 홍차',
    amount: 0,
    cost: 1,
    desc: "'What you want is Livia' 리비아의 특제 홍차입니다. 아군의 체력을 20% 회복합니다. 손에서 내면 [소각]됩니다.",
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/5/5f/gedb65p1ggrn3d0v07c56oxllycg1qq.png',
  },
  '단백질 파우더': {
    name: '단백질 파우더',
    amount: 0,
    cost: 1,
    desc: "'Can’t beat the feeling' 근육맨의 필수 음료수입니다. 아군의 방어력을 3% 증가시킵니다.(중첩 가능) 손에서 내면 [소각]됩니다.",
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/5/5d/px3850typ1apsyahg8i5w9zictlxi70.png',
  },
  '민트 아이스': {
    name: '민트 아이스',
    amount: 0,
    cost: 1,
    desc: "'Thirst knows no reason' 3배 강력한 탄산입니다. 아군이 다음 내는 레드카드의 피해가 50% 증가합니다.(중첩 가능) 손에서 내면 [소각]됩니다.",
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/3/32/9667pfwidvsmozbzlhf6jcrt45etakt.png',
  },

  강타: {
    name: '강타',
    amount: 3,
    cost: 2,
    desc: '연속으로 공격하여 적에게 4단 피해를 입히고 동시에 [인뢰]를 발동합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/b/b1/6llaixawhouc6b43hcgh1iz8utkfn1l.png',
  },
  으르렁: {
    name: '으르렁',
    amount: 2,
    cost: 0,
    desc: '함성을 질러 모든 적을 [중단]시킵니다.\n비용을 1 얻습니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/1/11/rnzgjgmbn95q87jegao9f5ypal6bigl.png',
  },
  '자기류-교란 강타': {
    name: '자기류-교란 강타',
    amount: 1,
    cost: 4,
    desc: '광란의 공격으로 적에게 8단 피해를 입히고 [기절]시킵니다. 동시에 [인뢰]를 발동합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/4/4a/2of6sxvk5n14c25foo8jof4gtudp3f0.png',
  },
}

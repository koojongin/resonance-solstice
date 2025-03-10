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
    thumbnail: 'https://i.postimg.cc/jjTY3z9L/Shuang-Dong-Xin-Xing.png',
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
    desc: '안피아가 [백화]를 도와 분석을 진행합니다.\n[개조: 더스트리자드],[개조: 암흑의 매머드]와 [개조: 빙하 본드래곤] 중 1장을 선택하여 손으로 가져옵니다.\n사용 후 [소각]됩니다.',
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

  '끈적 끈적한 폭탄': {
    amount: 3,
    cost: 2,
    name: '끈적 끈적한 폭탄',
    desc: '5초 동안 무작위 적에게 부착할 끈적끈적한 폭탄 3개를 던집니다 .\n지속 시간 동안 적 대상에게 초당 1의 피해를 입히고 20% 확률로 끈적끈적한 폭탄을 [중단]하여 [폭발물] 로 만듭니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/4/42/ifqyme79jy9uz8hu00vtf33k1irow3k.png',
  },
  '환각성 가스': {
    amount: 2,
    cost: 2,
    name: '환각성 가스',
    desc: '환각 가스를 던져 적의 에너지를 3% 감소시키고 환각\n가스를 폭발물 로 만듭니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/9/95/jc2pu9rsyipni79unzunl8exlccccrn.png',
  },
  '기계 늑대 무리': {
    amount: 1,
    cost: 4,
    name: '기계 늑대 무리',
    desc: `기계 늑대 3마리를 소환하여 싸우게 하고 [일반공격] 지원을 수행합니다. 공격은 재활용되기 전에 10초 동안 지속됩니다.
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
    desc: `현재 체력의 13%를 잃고 [스칼렛 램프]를 흔들어 [일반공격]을 다음과 같이 전환합니다.
    자신을 제외한 모든 아군의 체력을 3% 회복합니다.(14초간 지속, 중첩 가능)
    지속 시간이 종료되면 기본 [일반공격]으로 전환돱니다.
    사용 후 [블랙카드] [음에너지]를 1장 생성하여 손으로 가져옵니다.
    이 카드가 버려지면 [다크 아트]를 1장 생성하여 손으로 가져옵니다.
    수엔의 기본 [일반공격]은 다음과 같습니다.
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
    desc: `모든 아군의 [일반공격] 공격 속도를 10초간 최대로 증가시킵니다.
    지속시간 동안 아군의 모든 [돌격대원]의 [일반공격]이 [강습 모드]로 진입합니다.
    [강습 모드]는 [돌격대원]의 무기를 연사모드로 전환하여 [일반공격]시 발사하는 탄약수를 증가시킵니다.
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
}

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
}

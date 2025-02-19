export interface CharacterResonance {
  name: string
  desc: string
  thumbnail: string
}

export const CHARACTER_RESONANCES: { [key: string]: CharacterResonance } = {
  '자석 감응': {
    name: '자석 감응',
    desc: '[자석 폭탄] 사용 후 [인뢰] 키워드를 가진 카드를 우선으로 카드를 2장 뽑습니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/7/74/96jk1s8vjysxkrhi72jl87hfzl0ieb4.png',
  },
  고압: {
    name: '고압',
    desc: '리더가 입히는 [인뢰]/[낙뢰]의 낙뢰 피해가 50% 증가합니다.\n[우레]/[천둥]의 낙뢰 피해가 100% 증가합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/9/95/98cyu537qheueck16n6nee8pl5idwed.png',
  },
  생기: {
    name: '생기',
    desc: '체력+10%',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/d/d3/itnqmwk06c66ag0s199svn6uayzs5py.png',
  },
  감전: {
    name: '감전',
    desc: '[자화]의 지속 시간이 3초 증가합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/6/6a/sn90hsmug036d65ze00sf5ia6114b6d.png',
  },
  '전력 회수': {
    name: '전력 회수',
    desc: '적과 아군을 포함한 모든 유닛이 [인뢰]를 발동할 때마다 비용을 0.1 얻습니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/0/0e/bs60q2yjhhgxentalwedlbmzyxfu6cl.png',
  },

  성맥: {
    name: '성맥',
    desc: '임의 퍼플카드 사용 후 [드림 파인더]를 우선으로 카드를 1장 뽑습니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/f/f2/jmnjbucw79wvfi9ojuwfk7lonrwihzn.png',
  },
  몽유: {
    name: '몽유',
    desc: '자신이 [수면] 상태일 경우 무작위 마법 공격을 시전합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/7/73/g7dj9i7eetzrkgt6rt2qqyru6d994aw.png',
  },
  '꿈의 여행자': {
    name: '꿈의 여행자',
    desc: `[드림 메이커] 강화:\n'오늘은 무슨 꿈을 꿀까?'\n자신에게 [수면]을 부여합니다.\n[공포의 밤]/[진혼가]/[마력샘] 중 1장을 선택하여 손으로 가져옵니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/f/f6/q3alkenh3g2szgjkxp1ematv59b0ple.png',
  },
  '기원의 꿈': {
    name: '기원의 꿈',
    desc: '[드림 이터] 사용 후 버려진 덱에서 [드림 메이커]를 우선으로 카드를 1장 회수하여 손으로 가져옵니다.\n회수한 카드는 다음에 낼 때 비용이 1 감소합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/7/7d/60fcf707hq4d0xzh7nt9nkdq07s9uyv.png',
  },

  독심술: {
    name: '독심술',
    desc: '[소실] 사용 후 레드카드를 우선으로 카드를 1장 뽑습니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/c/c8/oc22bcpieymhb0dle8eprw9y5u10hko.png',
  },
  '사기 마술': {
    name: '사기 마술',
    desc: '[셔플]이 손에 있을 때 손패 상한이 3 증가합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/1/1e/8j6h9ej6cqhwwpa1znx3gky8rnzoklw.png',
  },
  감응: {
    name: '감응',
    desc: '전투 시작 시 손으로 가져오는 처음 5장의 카드 중에 반드시 [셔플]이 포함됩니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/6/67/2dktmnn7w48dkp7s1u5viq9vk2i3da7.png',
  },
  '레비스의 불가사의': {
    name: '레비스의 불가사의',
    desc: '[미스터리] 강화: [해체의 상자]를 활성화하여 손에 있는 모든 카드를 덱으로 섞어넣은 후 카드를 3장 뽑습니다.\n뽑은 레드카드의 수만큼 [구축의 화염]을 생성하여 손으로 가져옵니다.\n뽑은 옐로카드의 수만큼 [해체의 번개]를 생성하여 손으로 가져옵니다.\n뽑은 블루카드의 수만큼 [재구축의 힘]을 생성하여 손으로 가져옵니다.\n뽑은 그린카드의 수만큼 [음에너지]를 생성하여 손으로 가져옵니다.\n뽑은 퍼플카드의 수만큼 [정화의 빛]을 생성하여 손으로 가져옵니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/3/36/55k33f5ylyhp8ppvvu949uqpwldfkfl.png',
  },
}

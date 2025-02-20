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

  얼음별: {
    name: '얼음별',
    desc: '블루카드를 낸 후 자신의 체력을 10% 회복합니다.\n동시에 자신은 5초간 [슈퍼아머]를 획득합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/4/4d/3lnj8hkx9zmc4uy3ku37bqm0s73lgpw.png',
  },
  '자석 제어': {
    name: '자석 제어',
    desc: '[자석 플라이휠] 사용 후 이번 전투 동안 [자석 플라이휠]의 공격 단수가 1 증가합니다. (12회 한정)',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/e/e5/4usv5aca1tr2b0xwjdizo1p2md0j31w.png',
  },
  성막: {
    name: '성막',
    desc: '비용이 2 이상인 블루카드를 낸 후 모든 아군에게 10초간 지속되는 [실드]를 부여합니다. [실드]의 내구도는 자신의 방어력의 500%입니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/4/4c/048gzikblascwxomtv48fowsd32tgys.png',
  },
  서리별: {
    name: '서리별',
    desc: '적과 아군을 포함한 임의 유닛이 [동결]을 발동할 때마다 비용을 0.3 획득합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/e/e6/9xhcketifjjvid7mayx5d62h9ql87uf.png',
  },

  신생: {
    name: '신생',
    desc: '[무한 코어] 사용 후 무작위로 [과일씨], [신성] 혹은 [기이한 불꽃]을 1장 생성하여 손으로 가져옵니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/f/ff/i2qxfessshagn1ysd97yszxawgfmfpb.png',
  },
  갈망: {
    name: '갈망',
    desc: '[섭취] 강화:\n적에게 1단 피해를 입히고 [저주]를 부여하며 동시에 대상의 방어력을 3% 감소시킵니다.(중첩가능)',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/3/3b/e4zagun70wj6vcpwax061hani8oli7i.png',
  },
  '비밀의 샘': {
    name: '비밀의 샘',
    desc: '[금단의 열매] 강화:\n사과 하나를 전송하여 적에게 1단 피해를 입히고 [기절]을 부여하며, 동시에 [혼란]을 발동합니다.\n퍼플카드를 우선으로 카드를 1장 뽑습니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/3/36/c552cp8ucsniaoga3qnjwslcexh9yrl.png',
  },
  혈맹: {
    name: '혈맹',
    desc: '마키라의 치유를 받을 때마다 공격력이 3% 증가합니다.(중첩 가능)',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/e/ed/c64ubxircc43swcob6cqr4ib5zez8og.png',
  },

  질풍: {
    name: '질풍',
    desc: '[일반공격]을 가 할 때마다 [일반공격]의 공격 속도가 3% 증가합니다. (최대 100%)',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/4/42/qj2ilbyo82w9kb80zhjcj8z9uzocg19.png',
  },
  '용량 확장': {
    name: '용량 확장',
    desc: '[공습]의 카드 수가 1 증가합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/9/91/addlj1pv9u6mr24i8t21ay1aob19o6r.png',
  },
  신속: {
    name: '신속',
    desc: '[공습]이 시전하는 [606]의 공격 속도가 50% 증가합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/a/aa/sgdl3wltrr0pyxdbuet1xkti7bdvl5h.png',
  },
  축전: {
    name: '축전',
    desc: '자신의 스킬 카드 사용 후 [일반공격]이 [인뢰]를 발동합니다. (8초간 지속, 중첩가능)',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/6/62/he7ev277sds21d1l9rynm9mf3fka9cc.png',
  },

  활력: {
    name: '활력',
    desc: '자신의 스킬 카드를 사용할 때마다 자신의 체력을 3% 회복합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/0/0e/5gxcfyyfbjsnkmrpgnvtph3saujoxke.png',
  },
  격앙: {
    name: '격앙',
    desc: '[TATAKAE] 강화:\n[TATAKAU]를 3장 생성하여 손으로 가져옵니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/2/2b/okop1hrrs7rqxlza0mps6p9plm4dpcs.png',
  },
  성원: {
    name: '성원',
    desc: '[셀카] 사용 후 모든 아군의 [일반공격]의 공격 속도가 최대로 증가합니다.(6초간 지속, 중첩 가능)',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/a/a8/hzlszfaedujdjoupfb6prkaxt58s51p.png',
  },
  수선화: {
    name: '수선화',
    desc: '[리더 스킬] 사용 후 [노래] 1장을 생성하여 덱의 맨 위에 올려놓습니다.(1회 한정)',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/a/a6/g2494n0lvsl20xsxand77ivzqnkcn7d.png',
  },

  '체리 폭탄': {
    name: '체리 폭탄',
    desc: '아리나와 분신의 비수 및 표창에 [튕김] 효과가 추가됩니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/b/b9/oj2b5ytj26h7ljla7uuwfowphyhup8u.png',
  },
  인연: {
    name: '인연',
    desc: '아리나 스킬 카드의 치유를 받을 때마다 방어력이 3% 증가합니다.(중첩 가능)',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/5/5e/1qnhq8d8io3zf02grus67wv2d8eaksg.png',
  },
  레드주스: {
    name: '레드주스',
    desc: '아군 1명이 빈사 상태일 경우, 즉시 [피치]를 사용합니다.(1회 한정)',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/0/05/90hzjicug6cjy377nc09xzdoxbgyihe.png',
  },
  '정열의 럼주': {
    name: '정열의 럼주',
    desc: '분신 [블랙베리]의 비수가 명중할 때마다 50% 확률로 [점화]를 부여합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/d/d2/cka9wctyem1inimgz3fnurjvigfrfl7.png',
  },
}

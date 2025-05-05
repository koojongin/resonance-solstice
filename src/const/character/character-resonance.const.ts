export interface CharacterResonance {
  name: string
  desc: string
  thumbnail: string
  clearMind?: string
  machiningTechnology?: string
}

export const CHARACTER_RESONANCES: { [key: string]: CharacterResonance } = {
  '자석 감응 - 캐롤라인': {
    name: '자석 감응 - 캐롤라인',
    desc: '[자석 폭탄] 사용 후 [인뢰] 키워드를 가진 카드를 우선으로 카드를 2장 뽑습니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/7/74/96jk1s8vjysxkrhi72jl87hfzl0ieb4.png',
    clearMind: '전력 상한+5.0%',
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
    clearMind: '구매 가능한 그래핀 수량+20.0%',
  },
  '전력 회수': {
    name: '전력 회수',
    desc: '적과 아군을 포함한 모든 유닛이 [인뢰]를 발동할 때마다 비용을 0.1 얻습니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/0/0e/bs60q2yjhhgxentalwedlbmzyxfu6cl.png',
    clearMind: '구매 가능한 그래핀 수량+30.0%',
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
    clearMind: '거래소 가격 인상 횟수+1',
  },
  '사기 마술': {
    name: '사기 마술',
    desc: '[셔플]이 손에 있을 때 손패 상한이 3 증가합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/1/1e/8j6h9ej6cqhwwpa1znx3gky8rnzoklw.png',
  },
  '감응 - 나유타': {
    name: '감응 - 나유타',
    desc: '전투 시작 시 손으로 가져오는 처음 5장의 카드 중에 반드시 [셔플]이 포함됩니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/6/67/2dktmnn7w48dkp7s1u5viq9vk2i3da7.png',
    clearMind: '미끼 풍선 사용 성공률+3.0%',
  },
  "레비스의 '불가사의'": {
    name: `레비스의 '불가사의'`,
    desc: '[미스터리] 강화: [해체의 상자]를 활성화하여 손에 있는 모든 카드를 덱으로 섞어넣은 후 카드를 3장 뽑습니다.\n뽑은 레드카드의 수만큼 [구축의 화염]을 생성하여 손으로 가져옵니다.\n뽑은 옐로카드의 수만큼 [해체의 번개]를 생성하여 손으로 가져옵니다.\n뽑은 블루카드의 수만큼 [재구축의 힘]을 생성하여 손으로 가져옵니다.\n뽑은 그린카드의 수만큼 [음에너지]를 생성하여 손으로 가져옵니다.\n뽑은 퍼플카드의 수만큼 [정화의 빛]을 생성하여 손으로 가져옵니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/3/36/55k33f5ylyhp8ppvvu949uqpwldfkfl.png',
    clearMind: '미끼 풍선 사용 성공률+5.0%',
  },

  얼음별: {
    name: '얼음별',
    desc: '블루카드를 낸 후 자신의 체력을 10% 회복합니다.\n동시에 자신은 5초간 [슈퍼아머]를 획득합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/4/4d/3lnj8hkx9zmc4uy3ku37bqm0s73lgpw.png',
    clearMind: '구매 가능한 벌집형 열단열재 및 티타늄 광석 수량+20.0%',
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
    clearMind: '거래소 가격 인상 성공률+1.0%',
  },
  서리별: {
    name: '서리별',
    desc: '적과 아군을 포함한 임의 유닛이 [동결]을 발동할 때마다 비용을 0.3 획득합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/e/e6/9xhcketifjjvid7mayx5d62h9ql87uf.png',
    clearMind: '구매 가능한 벌집형 열단열재 및 티타늄 광석 수량+50.0%',
  },

  '신생 - 마키라': {
    name: '신생 - 마키라',
    desc: '[무한 코어] 사용 후 무작위로 [과일씨], [신성] 혹은 [기이한 불꽃 - 마키라]을 1장 생성하여 손으로 가져옵니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/f/ff/i2qxfessshagn1ysd97yszxawgfmfpb.png',
    clearMind: '거래소 가격 인상폭+0.3%',
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
    clearMind: '거래소 가격 인상 횟수+1',
  },
  혈맹: {
    name: '혈맹',
    desc: '마키라의 치유를 받을 때마다 공격력이 3% 증가합니다.(중첩 가능)',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/e/ed/c64ubxircc43swcob6cqr4ib5zez8og.png',
    clearMind: '거래소 가격 인상폭+0.5%',
  },

  '질풍 - 니콜라': {
    name: '질풍 - 니콜라',
    desc: '[일반 공격]을 가 할 때마다 [일반 공격]의 공격 속도가 3% 증가합니다. (최대 100%)',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/4/42/qj2ilbyo82w9kb80zhjcj8z9uzocg19.png',
    clearMind: '열차 최고 시속+5km/시간',
  },
  '용량 확장 - 니콜라': {
    name: '용량 확장 - 니콜라',
    desc: '[공습]의 카드 수가 1 증가합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/9/91/addlj1pv9u6mr24i8t21ay1aob19o6r.png',
  },
  '신속 - 니콜라': {
    name: '신속 - 니콜라',
    desc: '[공습]이 시전하는 [606]의 공격 속도가 50% 증가합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/a/aa/sgdl3wltrr0pyxdbuet1xkti7bdvl5h.png',
    clearMind: '아니타 에너지 연구소 특산품 구매 가능한 수량+20.0%',
  },
  축전: {
    name: '축전',
    desc: '자신의 스킬 카드 사용 후 [일반 공격]이 [인뢰]를 발동합니다. (8초간 지속, 중첩가능)',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/6/62/he7ev277sds21d1l9rynm9mf3fka9cc.png',
    clearMind: '아니타 에너지 연구소 특산품 구매 가능한 수량+30.0%',
  },

  활력: {
    name: '활력',
    desc: '자신의 스킬 카드를 사용할 때마다 자신의 체력을 3% 회복합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/0/0e/5gxcfyyfbjsnkmrpgnvtph3saujoxke.png',
    clearMind: '구매 가능한 인조 수정 꽃 수량+20.0%',
  },
  격앙: {
    name: '격앙',
    desc: '[TATAKAE] 강화:\n[TATAKAU!]를 3장 생성하여 손으로 가져옵니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/2/2b/okop1hrrs7rqxlza0mps6p9plm4dpcs.png',
  },
  성원: {
    name: '성원',
    desc: '[셀카] 사용 후 모든 아군의 [일반 공격]의 공격 속도가 최대로 증가합니다.(6초간 지속, 중첩 가능)',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/a/a8/hzlszfaedujdjoupfb6prkaxt58s51p.png',
    clearMind: '광고 홍보를 통한 승객 모집 효과+5.0%',
  },
  수선화: {
    name: '수선화',
    desc: '[리더 스킬] 사용 후 [노래] 1장을 생성하여 덱의 맨 위에 올려놓습니다.(1회 한정)',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/a/a6/g2494n0lvsl20xsxand77ivzqnkcn7d.png',
    clearMind: '광고 홍보를 통한 승객 모집 효과+10.0%',
  },

  '체리 폭탄': {
    name: '체리 폭탄',
    desc: '아리나와 분신의 비수 및 표창에 [튕김] 효과가 추가됩니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/b/b9/oj2b5ytj26h7ljla7uuwfowphyhup8u.png',
  },
  '인연 - 아리나': {
    name: '인연 - 아리나',
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

  고정: {
    name: '고정',
    desc: '[서막] 사용 후 다음 3번 가하는 [일반 공격]이 [냉동]을 발동합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/2/2b/fb24wiqrp5j0g3lo1g57japumuza5c4.png',
  },
  냉정: {
    name: '냉정',
    desc: '자신의 스킬 카드를 사용할 때마다 자신의 방어력이 3% 증가합니다.(중첩 가능)',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/e/e1/65sfbyxny85z3h4vpmdzzfher905fr1.png',
  },
  개혁: {
    name: '개혁',
    desc: '[파열] 사용 후 [원소핵-얼음]을 1장 생성하여 손으로 가져옵니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/5/59/tcyezi0ppm3unufsoed1zf26stdzcyl.png',
  },
  톱스핀: {
    name: '톱스핀',
    desc: '[급습] 강화:\n양손 해머를 휘둘러 적에게 10단 피해를 입힙니다.\n필살기를 우선으로 카드를 1장 뽑습니다.\n동시에 [블루카드]를 우선으로 버려진 덱에서 카드 1장을 회수하여 손으로 가져옵니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/c/cf/m8zd45ihyj639gjcwond9wgz9tcc4kr.png',
  },

  탄도학: {
    name: '탄도학',
    desc: '이로나가 저격 시 20% 확률로 피해가 2배로 증가합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/5/5a/k2lyc59y4lcjp0vg27ohi8p8ilv2ocx.png',
  },
  '침묵의 사신': {
    name: '침묵의 사신',
    desc: '자신이 [은신] 상태일 경우 자신의 공격력이 초당 1% 증가합니다.(중첩 가능)',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/0/0b/e628l0o5hydjbm91hz6nxd7d083qudf.png',
  },
  '연속 조준': {
    name: '연속 조준',
    desc: '[조준 저격] 사용 후 덱에서 [조준 저격]을 1장 뽑아 손으로 가져옵니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/2/2d/dhkegx0z8nctxfnz5jjt243engkkq91.png',
  },
  '전술 타격': {
    name: '전술 타격',
    desc: '[저격 모드]의 [전술 미사일]을 한 개 더 발사합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/1/1b/8wfthh0ykglh3wsrogeb2buaabi1qwe.png',
  },

  고수: {
    name: '고수',
    desc: '[실드]의 내구도가 50% 증가합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/b/bc/1r3bplslr341uwccjyzmdexa123oia2.png',
  },
  저력: {
    name: '저력',
    desc: '체력이 50%/40%/30%/20%/10% 미만일 경우 받는 최종 피해가 10%/15%/20%/25%/30% 감소합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/4/42/o7xe1x7txatr7ju2kc6nw7ddeoapem1.png',
  },
  '에너지 회수': {
    name: '에너지 회수',
    desc: '아군의 [실드]가 사라지거나 폭발할 때 [실드] 보유자의 체력을 5% 회복합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/6/62/nfauott69xtdzwomhkmrton72gtr4ps.png',
  },
  배수진: {
    name: '배수진',
    desc: '[콜로서스 군진II] 사용 후 자신의 공격력이 방어력의 20% 만큼 증가합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/d/d8/3hkyly2n02zcons2hfz7xxj6mulqggm.png',
  },

  기선: {
    name: '기선',
    desc: '전투 시작 시 추가로 1장의 카드를 뽑습니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/5/5c/o2ucdjupzys04ezgzfgkp3gc7rzk1o8.png',
    clearMind: '거래소 가격 인상 성공률+1.0%',
  },
  제압: {
    name: '제압',
    desc: '[반사] 사용 후 옐로카드를 우선으로 카드를 1장 뽑습니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/8/8c/7u33rzsm82ezxlvtobe8w83a8az9yb4.png',
  },
  인내력: {
    name: '인내력',
    desc: '체력이 50% 이상일 경우 받는 최종 피해가 10% 감소합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/0/05/lxet596cxuegys9u1oeck4lhdtpqwch.png',
    clearMind: '열차 최대 화물 적재량+5',
  },
  "레비스의 '초개조' - 리나 본": {
    name: "레비스의 '초개조' - 리나 본",
    desc: `[디펜스 트리거] 강화:\n'이리를 피하니 범이 앞을 막는다'\n모든 아군에게 3초간 지속되는 [철벽 실드]를 부여합니다.\n[블랙카드]를 우선으로 카드를 3장 뽑으며 손패 상한을 초과할 수 있습니다. [블랙카드]를 뽑았을 경우 [블랙카드] 1장당 [철벽 실드]의 지속시간이 2초 증가합니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/3/30/ron8pn2vxmaudbcp12gwpcj3js6hzko.png',
    clearMind: '거래소 가격 인상 성공률+2.0%',
  },

  당분: {
    name: '당분',
    desc: `[에너지 풍선껌] 강화:\n비용을 5 얻습니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/9/9d/29cvuhdiyc464xphjs7zo8ny1ias0e2.png',
  },
  불굴: {
    name: '불굴',
    desc: `빈사 상태 시 [무적]을 얻습니다.(5초간 지속, 1회 한정)\n[무적] 상태 시 모든 피해에 면역되며 제어와 피해형 특수 효과를 제거하는 동시에 면역을 얻습니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/e/ee/qrc1nbqee59wc9uoqw9a6lcx2u1nomr.png',
  },
  "레비스의 '생일 선물'": {
    name: "레비스의 '생일 선물'",
    desc: `[인터체인] 사용 후 30% 확률로 [다크 엑스칼리버]를 1장 생성하여 손으로 가져옵니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/0/07/db5kq9u5c97uzbe2qxk3tv6fn9kfkt0.png',
  },
  잔열: {
    name: '잔열',
    desc: `[인터체인-III]은 사용 후 즉시 [인터체인-II]으로 전환됩니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/7/7d/p5cydxqwcdq3id636lnz9x5zy3zjm5c.png',
  },

  '감응 - 페니아': {
    name: '감응 - 페니아',
    desc: '전투 시작 시 손으로 가져오는 첫 5장의 카드에 반드시 [승리의 아우라]가 포함됩니다.\n자신이 리더일 경우 전투 시작 시 즉시 리더 스킬을 시전합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/9/9a/2dktmnn7w48dkp7s1u5viq9vk2i3da7.png',
    clearMind: '펫 친밀도 획득+5.0%',
  },
  축복: {
    name: '축복',
    desc: '[복주머니]를 뽑을 때마다 카드를 1장 뽑습니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/9/97/8azm7410p6n3hu6ie2k4dpkot4gkeh8.png',
  },
  묘책: {
    name: '묘책',
    desc: '[복주머니]를 손에서 낼 때 8% 확률로 [블랙카드] [블랙 8] 1장을 생성하여 손으로 가져옵니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/f/f7/5z9kj876zd8temkolm96ozo1546881f.png',
    clearMind: '구매 가능한 랍스터 수량+20.0%',
  },
  "레비스의 '초개조' - 페니아": {
    name: `레비스의 '초개조' - 페니아`,
    desc: '[런닝 썬더] 강화:\n[디펜스 썬더]를 활성화하여 목표 구역에 강력한 번개를 일으켜 범위 내의 적에게 7단 피해를 입히고, 동시에[인뢰]를 발동합니다.\n사용 후 [블랙카드] [음에너지]를 1장 생성하여 손으로 가져옵니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/4/41/ron8pn2vxmaudbcp12gwpcj3js6hzko.png',
    clearMind: '구매 가능한 랍스터 수량+30.0%',
  },

  부채바람: {
    name: '부채바람',
    desc: '[부채술] 강화:\n부채를 흔들어 자신과 앞열 아군의 공격력을 2% 증가시킵니다.(중첩 가능)\n동시에 앞열 아군에게 걸린 [점화]를 제거합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/0/0a/f9ecyf7aylutepcdbrhu4dh2ld3subb.png',
    clearMind: '거래소 가격 인상 횟수+1',
  },
  경운: {
    name: '경운',
    desc: '[유세술]이 손에 있을때 [부채술]이 소모하는 비용이 1 감소합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/0/0b/69wns4sos2slu288ad3y0hv64h98g39.png',
  },
  회전: {
    name: '회전',
    desc: '[부채술] 사용 후 30% 확률로 카드를 다시 손으로 가져옵니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/2/2e/1nn5r6oqcic7dsq6d72vy3vzuvaeou4.png',
    clearMind: '화초 평점+5.0%',
  },
  풍설: {
    name: '풍설',
    desc: '[오의-유풍] 강화:\n[오의-유풍]을 시전하여 모든 적에게 6단 피해를 입히고, 동시에 [냉동]을 발동합니다. 버려진 덱에 있는 [부채술] 1장당 자신의 공격력이 2% 증가합니다.(중첩 가능)',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/e/e9/9wnl8l3xmag1er33mcqy3u8hq9iwpgk.png',
    clearMind: '화초 평점+8.0%',
  },

  서지: {
    name: '서지',
    desc: '비용 상한+1',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/e/e8/mzcs2kps54mp56qaa54hil98cqqit10.png',
  },
  추구: {
    name: '추구',
    desc: '[블랙카드]가 [소각]될 때마다 50% 확률로 [다크 아트]를 생성하여 손으로 가져옵니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/1/1c/s3nnflrgxq2ns7iubagsxgr74rxgp7m.png',
  },
  징수: {
    name: '징수',
    desc: '[다크 아트]가 1장 생성될 때마다 자신의 공격력이 3% 증가합니다. (최대 39%)',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/2/28/9suiyo2y9srq28oaf8p4mlz87sap2fj.png',
  },
  치열: {
    name: '치열',
    desc: '명중할 때마다 10% 확률로 [작열]을 발동합니다.\n자신이 연소 상태일 경우 발동 확률이 10% 증가합니다.\n필드에 [작열]이 발동되면 비용을 0.5 얻습니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/2/28/nm3ryfs2arhz3gqzru7s5obrspvtuly.png',
  },

  '보급 - 아르카나': {
    name: '보급 - 아르카나',
    desc: '1웨이브의 적을 처치한 후 비용을 2 얻습니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/9/9c/rt04fk9f4lsbzel8wpz2uba5guhl5pk.png',
    clearMind: '의료 평점+5.0%',
  },
  '나비 서식': {
    name: '나비 서식',
    desc: '동일 대상에게 [나비의 축복]을 연속으로 사용 시 초당 회복 효과가 3% 증가합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/0/0c/mtg9u6mkma44rtzfydx6yhwiwlnyve1.png',
  },
  세례: {
    name: '세례',
    desc: '[태초의 꿈]을 사용해 회수한 카드는 다음 한번 낼 때 비용이 1 감소합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/8/81/2bnuy6xeefooh97fm7ufo684a3yubp2.png',
    clearMind: '가격 흥정 실패 시 증가하는 피로도-1',
  },

  뇌명: {
    name: '뇌명',
    desc: '[경칩]이 강화:\n번개와 같은 일격으로 적 대상에게 1회 피해를 입혀 [기절]시키고, 동시에 [우레]와 [작열]을 발동시킨다.\n사용 후 [천상의 불]를 1개 생성한다.',
    clearMind: '청명도 상한 +4',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/b/b6/bc3mdss2gbehwwclnabnqwi4gczkh5a.png',
  },
  청명: {
    name: '청명',
    desc: '[천상의 불]가 생성될 때 마다 자신과 HP가 가장 낮은 아군의 체력을 2% 회복한다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/5/51/felodpops746n4nn50g5ov152ttzz7y.png',
  },
  청정: {
    name: '청정',
    desc: '[천상의 불]를 1개 생성할 때 마다 비용을 0.2 획득한다.\n자신에 대한 [중단]과 [기절] 효과를 무효화한다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/e/ed/1wizj38jfi79249vigvc815gzwgrmp1.png',
    machiningTechnology: '제조공정 추가 생산 확률 +2.0%',
  },
  '불타는 마음': {
    name: '불타는 마음',
    desc: '[레드카드]를 낼 때 마다 [천상의 불]를 1개 생성한다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/f/fc/aargpykre5y82gepqeiyngvdqi0q5q6.png',
    clearMind: '청명도 상한 +8',
  },

  '가시의 서약': {
    name: '가시의 서약',
    desc: '빈사상태 시 검은 가시덤불을 시전하여 적의 체력을 흡수하고 [속박]을 부여합니다. (3회 한정)',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/7/7b/rp8sn1qol9n9qs4uty5pwiw8e89bcds.png',
  },
  '감응 - 소마': {
    name: '감응 - 소마',
    desc: '전투 시작 후 손으로 가져오는 처음 5장 카드 중에 반드시 [피의 잠식]이 포함됩니다.\n자신이 리더일 경우 전투 시작 시 즉시 리더 스킬을 시전합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/4/43/ljakaf4ndnm98kay9yzhk1088jp5aft.png',
  },
  혈전: {
    name: '혈전',
    desc: '[피의 잠식] 사용 후 [다크 아트]를 1장 생성하여 손으로 가져옵니다.\n동시에 자신의 공격력과 방어력이 3% 증가합니다.(최대 39%)',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/5/55/jmdubw5c0f2e8ff976dwcppribdalkb.png',
  },

  소환곡: {
    name: '소환곡',
    desc: '[의태] 사용 후 [옐로카드]를 우선으로 카드를 1장 뽑습니다.\n[개조] 사용 후 자신은 [광폭]을 얻습니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/f/f4/ko1dhhzwem8lhm8q9ui4tw5mvsu3jux.png',
  },
  '감응 - 안피아': {
    name: '감응 - 안피아',
    desc: '전투 시작 후 손으로 가져오는 처음 5장 카드 중에 반드시 [의태]가 포함됩니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/0/0c/ljakaf4ndnm98kay9yzhk1088jp5aft.png',
  },
  밀물: {
    name: '밀물',
    desc: '매초 비용을 0.1 얻습니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/c/cb/a1i1z36nr6f0ndl5stlj1wdvmfxhg3e.png',
  },
  탐욕: {
    name: '탐욕',
    desc: '[생과 사의 마법함] 강화:\n카드를 1장 뽑습니다.\n[퍼플카드]라면 5초마다 버려진 덱에서 카드를 1장 회수하여 손으로 가져옵니다.(3회 유효)\n아니라면 5초마다 카드를 1장 뽑습니다.(3회 유효)',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/5/5f/cd7x02lgometd58tcn31wcfbfn8ktln.png',
  },

  '전술 커버': {
    name: '전술 커버',
    desc: '적의 물결에 마주칠 때마다 환각 가스를 방출합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/a/a0/cdfimvbj93tl2iu39j7h5q0w2lblilz.png',
    clearMind: '애완동물 평가 +5.0%',
  },
  '신경교세포 확산': {
    name: '신경교세포 확산',
    desc: `[비스코스 폭탄] 강화:
    [비스코스 폭탄] 3개를 던져 5초 동안 무작위 적에게 부착합니다.
    지속 시간 동안 적 대상에게 초당 1의 피해를 입히고 50% 확률로 무작위로 [중단]/[기절]/[비스코스 폭탄]을 [폭발물]로 [점화]시킵니다 .`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/c/c9/kokf5ssy9egqsk0pk7u8pp0v8jpnd9y.png',
    clearMind: '청명 데이터 센터 거래소에서 구매 가능한 특산품 수량 +20.0%',
  },
  '전술적 그림자': {
    name: '전술적 그림자',
    desc: `[환각 가스]를 폐기 더미에 버리면 사용된 것으로 간주됩니다. [환각 가스]를 사용한 후, 진형의 뒷열은 5초간 [은신]상태가 됩니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/2/29/8ctd8y9mqxrdkvzp6cb2gu8hvgfpblr.png',
  },
  '삼각형 형성': {
    name: '삼각형 형성',
    desc: `[환각 가스]가 지속되는 동안:
    우리 전선의 최종 피해가 25% 감소합니다.
    우리 기계 유닛이 [광폭]상태가됩니다. 우리 후방의 최종 피해가 25% 증가합니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/2/2c/665hb7i4aflevhd29ej8xclkxiryff7.png',
    clearMind: '애완동물 평가 +8.0%',
  },

  은혜: {
    name: '은혜',
    desc: `6초마다 무작위 아군 1명을 치유하여 체력을 5% 회복시킵니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/1/10/7uu597gsttu479jp83l77k2733r3tmb.png',
    clearMind: '피로도 상한+8',
  },
  '지탱 - 수엔': {
    name: '지탱 - 수엔',
    desc: `피해를 입을 때마다 자신의 방어력이 0.5% 증가합니다. (최대 30%)`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/3/32/4ctvf1g3wkhxfea9zjgz7w6x5r3n872.png',
  },
  망녕: {
    name: '망녕',
    desc: `[형벌] 강화:
    현재 체력의 13%를 잃고 [스칼렛 램프]를 흔들어 범위 내의 적에게 1단 피해를 입히며, 동시에 [족쇄], [작열]과 [저주]를 발동합니다.
    사용 후 [다크 아트]를 1장 생성하여 손으로 가져옵니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/8/88/7vvqump1kv7m80n4gd2ytda86var374.png',
    clearMind: '청명도 상한+4',
  },
  일념: {
    name: '일념',
    desc: `[다크 아트]가 1장 [소각]될 때마다 모든 아군의 체력을 2% 회복합니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/c/c8/rgl4s2wdqd5l772mijggx2eyvi68v9t.png',
    clearMind: '청명도 상한+8',
  },

  '폭탄 해체 전문가': {
    name: '폭탄 해체 전문가',
    desc: `체력이 3600 증가하고, 5초마다 적의 [폭발물] 1개를 제거합니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/5/52/mfl12t44fpq2pksjuuugdo9j4nku1ot.png',
    clearMind: '어류 평점+5.0%',
  },
  '폭탄 마니아': {
    name: '폭탄 마니아',
    desc: `[가방 정리] 사용 시 [폭발물] 키워드를 가진 카드를 우선으로 카드를 1장 뽑습니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/5/58/jsyjotqlomibangieswpf9xjgtevmwe.png',
  },
  침착: {
    name: '침착',
    desc: `자신의 방어력이 초당 0.3% 증가합니다. (최대 30%)`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/6/65/0wogvvlp7ult4vfxycofegwvpd5f7cj.png',
    clearMind: '구매 가능한 맨더 공구함 수량+20.0%',
  },

  '아드레날린 - 시즈루': {
    name: '아드레날린 - 시즈루',
    desc: `[강제 돌파] 사용 시, 아드레날린을 주사하여 자신의 체력을 15% 회복하고, 동시에 자신의 [일반 공격]의 공격 속도가 최대로 증가합니다. (10초간 지속)`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/c/c5/kpxsoo28bu5hhoao7kd26iz9b1tm9nh.png',
    clearMind: '도시락으로 회복하는 피로도+3',
  },
  예비탄: {
    name: '예비탄',
    desc: `[쇼크탄] 사용 후 [쇼크탄]을 우선으로 카드를 1장 뽑습니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/b/b1/qv38wdqtkxhcie5ok4uwsc1wze6muk4.png',
  },
  '폭탄 장전': {
    name: '폭탄 장전',
    desc: `[쇼크탄]의 폭발 범위가 증가하고, 동시에 [격파]를 발동합니다.\n[쇼크탄]은 [폭발물]입니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/d/d1/bwrc8ryjslvr75yofetz0eklfir7ldw.png',
    clearMind: '케이프시 거래소 특산품 구매 가능한 수량+20.0%',
  },

  '신속 - 이엘': {
    name: '신속 - 이엘',
    desc: `자신의 [드론]의 공격 속도가 50% 증가합니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/a/a9/sgdl3wltrr0pyxdbuet1xkti7bdvl5h.png',
    clearMind: '구매 가능한 아니타 101 드론 수량+20.0%',
  },
  '용량 확장 - 이엘': {
    name: '용량 확장 - 이엘',
    desc: `[출격]의 카드 수가 1 증가합니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/a/a3/addlj1pv9u6mr24i8t21ay1aob19o6r.png',
  },
  구급: {
    name: '구급',
    desc: `아군 1명의 체력이 20%보다 낮을 시 [404]를 2대 시전하여 1대당 체력을 초당 2% 회복시킵니다.(10초간 지속, 1회 한정)`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/3/38/21ldn0pvuwelcwomtybav94umnn5k0y.png',
    clearMind: '의료 평점+5.0%',
  },
  클러스트: {
    name: '클러스트',
    desc: `[출격] 사용 후 [드론] 키워드를 가진 카드를 우선으로 카드를 1장 뽑습니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/7/77/3k5hqma6ip5ymbtlfq1ia4siertlim9.png',
    clearMind: '구매 가능한 아니타 101 드론 수량+30.0%',
  },

  '자석 감응 - 예주': {
    name: '자석 감응 - 예주',
    desc: `[전광석화] 사용 후 [인뢰] 키워드를 가진 카드를 우선으로 카드를 1장 뽑습니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/6/63/96jk1s8vjysxkrhi72jl87hfzl0ieb4.png',
    clearMind: '구매 가능한 홍차 수량+20.0%',
  },
  재난: {
    name: '재난',
    desc: `[전광석화]의 지속 시간 동안 [롤링 썬더]를 한 번 더 냅니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/a/ab/pq6dj84arzxdpk7lobbwgmgsorea6vg.png',
  },
  날벼락: {
    name: '날벼락',
    desc: `[플래시 코로나] 강화:
    아군에게 자기폭풍 코일 1개를 부여합니다.(6초간 지속)
    지속시간 동안, 매초 범위 내의 적에게 1단 피해를 입히고, 동시에 [인뢰]를 발동합니다.
    피해를 받으면 대상에게 아크를 반사하여 1단 피해를 입히며, 동시에 [인뢰]를 발동합니다.
    자기폭풍 코일 생성 시 범위 내의 적에게 [기절]을 부여합니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/7/78/7htgsyikwvbdmzo7ampyjyo06sf2zkq.png',
    clearMind: '구매 가능한 가정용 태양전지 수량+20.0%',
  },
  부상: {
    name: '부상',
    desc: `[롤링 썬더]의 이동속도가 절반 감소합니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/7/7f/sfiiw94yw24t8u4m8iu8uz7kq44dvk4.png',
    clearMind: '구매 가능한 홍차 수량+30.0%',
  },

  '보급 - 카리야': {
    name: '보급 - 카리야',
    desc: `덱의 카드가 전부 뽑혀 셔플이 발동될 때마다 카드를 1장 뽑습니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/a/a0/rt04fk9f4lsbzel8wpz2uba5guhl5pk.png',
    clearMind: '급행 탄환 최대 용량+1',
  },
  '체크 포인트': {
    name: '체크 포인트',
    desc: `[위치 전송] 강화:
    [점화],[작열]과 [광염] 키워드를 가진 카드를 우선으로 카드를 2장 뽑습니다.
    없다면 추가로 덱에서 무작위로 카드를 3장 뽑고 1장 선택하여 손으로 가져옵니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/3/39/74yv1jk2irvkgj8x151h9o4cb8sia2v.png',
  },
  증폭: {
    name: '증폭',
    desc: `[마이크로파] 강화:
    [303]을 1대 시전하여 마이크로파를 5초간 발사한 후 회수합니다.
    지속시간 동안 체력이 가장 낮은 아군의 체력을 10% 회복하고, 동시에 매초 무작위 적에게 [점화]를 발동합니다.
    [303]은 [드론]입니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/d/d0/ls5d4lmy2efhwvfna43w1jaohx8r4j8.png',
    clearMind: '의료 평점+5.0%',
  },
  '프로그 워프': {
    name: '프로그 워프',
    desc: `[위치 전송] 사용 후 다음에 [옐로카드]를 낼 때 카드를 추가로 1장 뽑습니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/f/f7/oawczcem69kfsgfh19z0epn8y2f3r0t.png',
    clearMind: '급행 탄환 최대 용량+2',
  },

  '공명-옐로': {
    name: '공명-옐로',
    desc: `[꾀꼬리의 야상곡]과 [종막의 원무곡]이 공명하여 [옐로카드]가 될 수 있습니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/9/9b/p84zpidu6m7g5qpjggnimmdi6nqa0nq.png',
  },
  '선물 - 리비아': {
    name: '선물 - 리비아',
    desc: `전투 시작 시 추가로 비용을 2 획득합니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/1/11/awfppbmvg36tgxrfgcvuwfw0f61pwji.png',
  },
  숙련: {
    name: '숙련',
    desc: `[꾀꼬리의 야상곡]이 소모하는 비용이 1 감소합니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/0/08/odq2fnoeubu72gvbvma725jxnuly0fm.png',
  },
  '공명-퍼플': {
    name: '공명-퍼플',
    desc: `[꾀꼬리의 야상곡]과 [종막의 원무곡]이 공명하여 [퍼플카드]가 될 수 있습니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/9/9c/e410iijcswni96zijtuaio3prcc9uha.png',
  },

  추격: {
    name: '추격',
    desc: `1웨이브의 적을 처치한 후 추가로 카드를 1장 뽑습니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/6/69/0dtqe6kv7w9hais6p96wuirbdr6rfpf.png',
  },
  '회심연사 - 엘리엇': {
    name: '회심연사 - 엘리엇',
    desc: `[치유탄]과 [폭염탄]을 30% 확률로 한번 더 냅니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/8/8b/jjh9dvgo35hmc9voxosha5i65wa6rha.png',
  },
  '선택 - 엘리엇': {
    name: '선택 - 엘리엇',
    desc: `[버리기] 명령으로 카드를 버릴 때마다 버려진 덱에서 [치유탄]을 1장 회수하여 손으로 가져옵니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/6/62/cmo6bwo1eylm30m8kgopyon3es5plck.png',
  },

  투척: {
    name: '투척',
    desc: `[도끼 투척]이 버려지면 사용한 것으로 간주합니다. 단 공격 대상이 무작위로 변경됩니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/0/03/q8ibf9m1npjboer0x6g77ayn32wcpz2.png',
  },
  진정: {
    name: '진정',
    desc: `카드가 1장 버려질 때마다 자신의 체력을 2% 회복합니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/0/0d/9h3b0dxgzj6ryr1axjbeq6yo0ni0ia2.png',
  },
  엔지니어: {
    name: '엔지니어',
    desc: `[도끼 회수] 강화:
    버려진 덱의 모든 [도끼 회수]를 회수하여 손으로 가져옵니다.
    1장 회수할 때마다 자신의 공격력이 1% 증가합니다.(최대 30%)`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/1/14/7os0cwf28i27sa25fw9pxfapubqu33n.png',
  },
  '포화 공격': {
    name: '포화 공격',
    desc: `[부메랑 도끼] 강화:
    손에 있는 카드를 최대 4장 버리고, 카드를 1장 버릴 때마다 부메랑 도끼르 1개 던져 모든 적에게 4단 피해를 입히며, [열상]을 부여합니다. 이 카드는 사용시 버려진 카드로 간주됩니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/f/fb/q9zdjkgqujpn7lw3xv1viqvx27gvbjd.png',
  },

  '아드레날린 - 카렌': {
    name: '아드레날린 - 카렌',
    desc: `[쾌속 장전] 사용 시 아드레날린을 주사하여 자신의 체력을 15% 회복하고, 동시에 자신의 [일반 공격]의 공격 속도가 최대로 증가합니다. (10초간 지속)`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/3/38/kpxsoo28bu5hhoao7kd26iz9b1tm9nh.png',
  },
  '회심연사 - 카렌': {
    name: '회심연사 - 카렌',
    desc: `[플럼프탄] 사용 시 30% 확률로 한 번 더 시전합니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/4/4c/jjh9dvgo35hmc9voxosha5i65wa6rha.png',
  },
  특효약: {
    name: '특효약',
    desc: `체력이 50% 미만인 아군을 치유할 때 추가로 체력을 10% 회복합니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/3/31/prg3h3e4h5dww4utk5545h2jcz0sf6p.png',
  },

  잔화: {
    name: '잔화',
    desc: `[스파크] 사용 후 모든 앞열 아군이 가하는 [일반 공격]이 [점화]를 발동합니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/4/47/lircw0v7kcue8o83aadwg4bxeupaenb.png',
  },
  방화: {
    name: '방화',
    desc: `연소 상태의 아군이 입는 최종 피해가 10% 감소합니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/8/80/bw0fx7wbgorlchs2p2z87sh547tfpyu.png',
  },
  '인연 - 발렌타인': {
    name: '인연 - 발렌타인',
    desc: `[기원] 사용 후 다음 내는 [그린카드]의 치유량이 100% 증가합니다.(중첩 가능)`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/4/40/1qnhq8d8io3zf02grus67wv2d8eaksg.png',
  },
  '회오리 불': {
    name: '회오리 불',
    desc: `[휠윈드] 강화:
    토네이도를 시전하여 모든 적에게 6단 피해를 입힙니다.
    동시에 모든 적과 아군에게 부여된 [점화]를 흡수하고, 흡수한 [점화]의 수량만큼 추가로 6단 피해를 입힙니다.
    사용 후 [블랙카드] [잿더미]를 2장 생성하여 손으로 가져옵니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/9/91/a34wzn7iv1r89m4ifdjz4y99g6hipar.png',
  },

  풍운: {
    name: '풍운',
    desc: `[단비] 강화:
    목표 구역을 향해 [우견지술]을 시전하고 [작열]을 부여합니다. 매초 범위 내의 적에게 3단 피해를 입힙니다.(5초간 지속)
    동시에 25% 확률로 [점화]를 발동합니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/8/81/mvo04028q21tylrdmpxek0r06h7ildk.png',
  },
  '가려진 달': {
    name: '가려진 달',
    desc: `전투 시작 시 손에 자신의 카드가 없다면 덱에서 모든 [단비]를 뽑아 손으로 가져옵니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/e/e7/p2rlff0buoghui011vjlr7uiun6u3uj.png',
  },
  발생: {
    name: '발생',
    desc: `[단비] 사용 후 [봄꽃] 혹은 [그린카드]를 우선으로 카드를 1장 뽑습니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/3/3b/cwgtk3vdqhaz1rxk9kb46j3zlfrq5uq.png',
  },
  화천: {
    name: '화천',
    desc: `[오의-유홍] 강화:
    [오의-유홍]을 시전하여 버려진 덱에 있는 [레드카드]만큼 [도깨비불]을 생성하며 [도깨비불] 1개당 적에게 1단 피해를 입힙니다.
    동시에 [점화]를 발동합니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/4/4b/ht20za151r5u0ax92u5p9kebnzbark7.png',
  },

  '무영 - 하야부사': {
    name: '무영 - 하야부사',
    desc: `자신의 스킬 카드를 사용할 때마다 3초간 [은신]합니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/6/60/hus7ub64y7tueuur1sm210adama36xc.png',
  },
  무형: {
    name: '무형',
    desc: `[은신]의 지속 시간이 2초 증가합니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/8/8b/qyarwge42gga0xczet2c7k9tr7owmg2.png',
  },
  '호시탐탐 - 하야부사': {
    name: '호시탐탐 - 하야부사',
    desc: `자신이 [은신]할 때마다 비용을 1 얻습니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/8/88/2y38tllmxvublr3wqknhb41693400rb.png',
  },
  심안: {
    name: '심안',
    desc: `하야부사의 [일반 공격]과 [변화무상]에 [튕김] 효과가 추가됩니다.
    동시에 [화상]/[점화] 상태의 적이 받는 [열상]/[참열] 피해가 100% 증가합니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/e/e6/9fwyv61fwtcpd350n2srh3dy3noufdd.png',
  },

  '선물!': {
    name: '선물!',
    desc: `1웨이브의 적을 만날때 마다 [Bingo!]를 1회 시전합니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/2/23/6yysxhnxetq3zibeyqk3rv9psvfi7ey.png',
  },
  '서프라이즈!': {
    name: '서프라이즈!',
    desc: `[조준 폭탄] 사용 후 30% 확률로 덱 혹은 버려진 덱에서 [Bingo!]를 1장 뽑아 손으로 가져오며, 그 카드의 비용이 0이 됩니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/7/76/g15uaklb3xfimb5y5gkkpn9ps3vzzl7.png',
  },
  '스텔스 폭탄': {
    name: '스텔스 폭탄',
    desc: `[조준 폭탄]이 버려진 덱으로 버려질 때 사용한 것으로 간주합니다.
    [조준 폭탄]을 정상적으로 사용 시 [버리기] 명령의 쿨타임이 5초 감소됩니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/a/a6/tbh1071si315vvw554o0jkleanuoee2.png',
  },
  '폭탄아, 안녕!': {
    name: '폭탄아, 안녕!',
    desc: `[버리기] 명령을 사용하여 카드를 버릴 때 버려진 카드의 수만큼 [연쇄 폭발 지뢰]를 적 구역으로 던집니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/8/8b/c5iarq5l0pw2r1o5jyszb8do2x7z0hh.png',
  },

  수혈: {
    name: '수혈',
    desc: `자신이 입힌 피해의 13%만큼 자신의 체력을 회복합니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/a/a1/f07eem07ylmkhue5hub1a5krioub28a.png',
  },
  기백: {
    name: '기백',
    desc: `자신의 스킬 카드 사용시 [슈퍼아머]를 2초간 얻습니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/d/d8/9z2qb8bma12qa29c8bkesyux5kfprwo.png',
  },
  냉혈: {
    name: '냉혈',
    desc: `자신의 공격력이 초당 0.5% 증가합니다.(최대 50%)`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/a/aa/8ksaa4q3mxextvee2fsj6vazbfc92eu.png',
  },
  '선택 - 리산드라': {
    name: '선택 - 리산드라',
    desc: `[무궁무진] 혹은 [과욕] 사용 후 다음 내는 [다크 아트]가 비용을 소모하지 않습니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/b/b4/qa6h73yv40chgj05c5sxufuoyfi87ao.png',
  },

  댄저러스: {
    name: '댄저러스',
    desc: `'The girl is so dangerous'
    [배드] 사용 후 이번 전투 동안 [배드]의 피해가 10% 증가합니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/0/0a/rtg4t7szhl9tmzy4w3fuoy9bz9yz4t3.png',
  },
  '맨 인 더 미러': {
    name: '맨 인 더 미러',
    desc: `'I\`m gonna make a change'
    1웨이브의 적을 만날 때 마다 [배드]를 우선으로 카드를 1~2장 뽑습니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/a/a7/8d241xohnjdklesfib8hp5skpte96aa.png',
  },
  '힐 더 월드': {
    name: '힐 더 월드',
    desc: `'Make a better place'
    [레드카드]를 1장 낼 때마다, 자신의 체력을 8% 회복합니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/d/df/htxe41kqffmu2g17nbcxj32gk2uy3aj.png',
  },

  '아드레날린 - 줄리안': {
    name: '아드레날린 - 줄리안',
    desc: `[엄호 사격] 사용 시 아드레날린을 주사하여 자신의 체력을 15% 회복하고 동시에 자신의 [일반 공격]의 공격 속도가 최대로 증가합니다.(10초간 지속)`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/7/77/kpxsoo28bu5hhoao7kd26iz9b1tm9nh.png',
  },
  신뢰: {
    name: '신뢰',
    desc: `[돌진] 사용 시 자신의 체력을 초당 5% 회복합니다.(5초간 지속)`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/3/33/siaqamj2cy4dsu5lfbhlonz6apz9wb5.png',
  },
  단결: {
    name: '단결',
    desc: `모든 아군이 살아있을 시 받는 최종 피해가 10% 감소합니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/d/d0/9glevbgoni5p95bpvpvf8c2xwl3r8hv.png',
  },

  '감응 - 샬롯': {
    name: '감응 - 샬롯',
    desc: `전투 시작 후 손으로 가져오는 처음 5장 카드 중에 반드시 [작막의 달]이 포함됩니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/0/03/2dktmnn7w48dkp7s1u5viq9vk2i3da7.png',
  },
  참월: {
    name: '참월',
    desc: `필살기 카드 사용 시 [재앙의 달]을 1장 생성하여 덱의 맨 위에 올려놓습니다.(3회 한정)`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/0/06/akq81nryzj2xqny60tyiikisl9e5azy.png',
  },
  완강: {
    name: '완강',
    desc: `체력이 60%/30% 미만일 때 자신의 체력을 30% 회복합니다.(각각 1회 한정)`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/7/7e/49deaaog92xhqk0ua2b6fddpc9wlj8t.png',
  },
  활성: {
    name: '활성',
    desc: `캐릭터의 치유를 받을 때 추가로 자신의 체력을 10% 회복하고 공격력이 1% 증가합니다.(최대 30%)
    초당 회복 효과 제외`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/2/28/hmeox7a9h4qeith7rnb8i5c3djw5th8.png',
  },

  '비상용 활집': {
    name: '비상용 활집',
    desc: `[마그네틱 펄스] 사용 시 30% 확률로 카드를 다시 손으로 가져옵니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/9/9d/84wxnuytsect5rkf5d5k504dbo8xrf0.png',
  },
  릴레이: {
    name: '릴레이',
    desc: `[듈리] 사용 후 다음 내는 [옐로카드]의 비용이 2 감소합니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/8/84/qrgky5u87sfiryvdnd1wmnm91pi1zcn.png',
  },
  '고성능 배터리': {
    name: '고성능 배터리',
    desc: `[아기곰 듈리]의 지속 시간이 2초 증가합니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/9/9c/4ofcszg4355pvu1iownf12p0eatl1zd.png',
  },
  '고감도 공명': {
    name: '고감도 공명',
    desc: `[공명 펄스] 강화:
    차지샷을 시전하여 적에게 3단 피해를 입히고 [튕김]과 [인뢰]를 발동합니다.
    동시에 덱에 버려진 덱에 있는 모든 [마그네틱 펄스]를 손으로 가져옵니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/4/4a/fmqk4l82x5vgcunyp4t9chmgvy5qj4l.png',
  },

  '무영 - 린': {
    name: '무영 - 린',
    desc: `체력이 60%/30%보다 낮을 시 5초간 [은신]합니다.(1회 한정)`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/e/ec/9spyqgq8m01ddrp3w5dhvhlwesvxhrm.png',
  },
  '그림자 분신': {
    name: '그림자 분신',
    desc: `분신이 사라질 때 자신의 체력을 5% 회복합니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/a/ac/3nbsc32l152cj45gvgc694sd8l6o8zy.png',
  },
  '번개 소환': {
    name: '번개 소환',
    desc: `[청천벽력] 강화:
    분신을 하나 생성하여 적에게 3단 피해를 입히고 사라지며 동시에 [인뢰]를 발동합니다.
    사용 후 자신이 주는 [인뢰]의 발동 확률이 13% 증가합니다.(중첩가능)`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/e/e8/r67a7n9nygyjjqdya4fn5ao3yeyexh2.png',
  },
  '그림자 습격': {
    name: '그림자 습격',
    desc: `분신이 사라지면 암살 무기를 발사하여 적에게 1단 피해를 입히고 동시에 [인뢰]를 발동합니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/2/24/b3zraxc6c8zdza3ik1pfd4p7zdcbsmx.png',
  },

  '눈 녹은 7번째 밤': {
    name: '눈 녹은 7번째 밤',
    desc: `[회복침] 강화:
    [회복침]을 발사하여 아군을 치유하여 체력을 30% 회복시키고, 동시에 대상의 방어력을 3% 증가시킵니다.(중첩 가능)
    대상이 가하는 다음 3회의 [일반 공격]이 [냉동]을 발동하고, 동시에 대상에게 부여된 [점화]를 제거합니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/1/11/6lsvbqns3c8l9e4bgqsvduxrpkcxsw1.png',
  },
  '호박 감귤': {
    name: '호박 감귤',
    desc: `[공격침] 강화:
    [공격침]을 발사하여 적에게 1단 피해를 입히고 [기절]을 부여합니다. 동시에 [혼란]과 [화상]을 발동하고, 대상의 공격력을 3% 감소시킵니다.(중첩 가능)`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/8/8b/5bqowdagrqrvic1nisbme4z1bogjx27.png',
  },
  '번 애프터 리딩': {
    name: '번 애프터 리딩',
    desc: `피해를 받으면 3초간 [은신]합니다. (쿨타임 15초)`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/d/d8/7jnnbdt9ms80vqq06rwggfp10vg4tnm.png',
  },
  '우울한 탑노트': {
    name: '우울한 탑노트',
    desc: `[스모킹 건]이 손에 있을 때 [회복침]과 [공격침]의 비용이 1 감소합니다.
    [회복침]을 사용하면 [스모킹 건]을 1장 [소각]하고, [회복침]을 받은 대상에 [광폭]을 부여합니다.
    [공격침]을 사용하면 [스모킹 건]을 1장 [소각]하고, [공격침]을 받은 대상에게 [붕괴]를 부여합니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/3/32/g68sk5fkyjw6v4gf110gv6aqx576yhd.png',
  },

  깨달음: {
    name: '깨달음',
    desc: `[배트 타격] 사용 시 자신의 다음 [레드카드]의 비용이 1 감소합니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/7/79/8e4puhbrs62k104as8dti8wwpossof6.png',
  },
  버닝: {
    name: '버닝',
    desc: `자신이 연소 상태일 경우 체력을 초당 3% 회복합니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/b/b5/p1ueypudp0evucs3m0k72bd1yhup0od.png',
  },
  요지부동: {
    name: '요지부동',
    desc: `[어퍼 스윙] 사용 시 5초간 [슈퍼아머]를 획득합니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/9/9e/qs4xfjwop2j2o7qw4ihk5kdrdi8xww7.png',
  },
  '요원의 불길': {
    name: '요원의 불길',
    desc: `자신이 연소 상태일 경우 입히는 최종 피해가 20% 증가합니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/c/c6/sueke5tpgckupny73ngcpp92v54g2i2.png',
  },

  선의선: {
    name: '선의선',
    desc: `1웨이브의 적을 만날 때마다 [역풍]을 1장 생성하여 손으로 가져옵니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/9/9c/e40zcy436z4bqykquev5wrlgqq35wrf.png',
  },
  후의선: {
    name: '후의선',
    desc: `[회천] 추가 효과:\n뒤집은 카드가 레드카드가 아니면 1장 더 뒤집습니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/c/ca/0w04pka1lq1pnvqmun9k95f7yisfozw.png',
  },
  '스파이크 스텝': {
    name: '스파이크 스텝',
    desc: '[비검-날쥐 회귀] 추가 효과:\n추가로 1단 스텝을 시전하여 적에게 1단 피해를 입히고 자신의 체력을 20% 회복합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/f/fa/7ynbpugh37quh4vm8eaj5x4qs37iyn4.png',
  },

  '돌진 전술': {
    name: '돌진 전술',
    desc: '1웨이브의 적을 만날 때마다 [전술 수류탄]을 즉시 1회 시전합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/9/92/cybvx9uogtfirz12qlkd22c8tzelcjw.png',
  },
  안정: {
    name: '안정',
    desc: `[폭파 지원] 사용 후 모든 아군이 [실드]를 획득합니다.(10초간 지속)
    [실드]의 내구도는 방어력의 1000%입니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/4/47/048gzikblascwxomtv48fowsd32tgys.png',
  },
  생존법칙: {
    name: '생존법칙',
    desc: `[전술 수류탄]이 버려진 덱으로 버려질 때 사용한 것으로 간주합니다.
    [전술 수류탄] 사용 후 자신의 체력을 10% 회복합니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/c/cc/silnf3w3n8wbrgtqsb6toetnwli7d8b.png',
  },
  '폭파 전문가': {
    name: '폭파 전문가',
    desc: `[클러스트 폭탄]의 폭발 범위가 증가하고, 동시에 [격파]와 [붕괴]를 발동합니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/9/9f/lpkueziwhimejb8w1b3dfz1grfzzzqh.png',
  },

  감응: {
    name: '감응',
    desc: `전투 시작 후 손으로 가져오는 처음 5장 카드 중에 반드시 [바람 막기]가 포함됩니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/d/d7/2dktmnn7w48dkp7s1u5viq9vk2i3da7.png',
  },
  '혼란 분무': {
    name: '혼란 분무',
    desc: `[안령도]의 한쪽 끝에 세실이 특별 제작한 [혼란 분무]를 뿌려 명중할 때마다 5% 확률로 [혼란]을 발동합니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/4/42/7ankl1t4us4a2e1cbmr9u94fd1un059.png',
  },
  '활성 분무': {
    name: '활성 분무',
    desc: `자신의 [블록] 상태 해제 휴 자신의 체력을 10% 회복합니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/4/49/g3qzhtzq1g6645afj9y6fir43ktc006.png',
  },
  난무: {
    name: '난무',
    desc: `자신이 [블록] 혹은 [은신] 상태일 경우 [무상-난새 회귀]가 추가로 4단 피해를 입힙니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/3/38/ngi69pw7aptdhp4tux7muw6287x7sgk.png',
  },

  풍화: {
    name: '풍화',
    desc: `[디스코팡팡] 사용 후 앞열 아군의 방어력이 2% 증가합니다.(중첩 가능)`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/6/65/15bxuz5wxv8kdpm9hj9gwx8wmc1tl5h.png',
  },
  눈꽃: {
    name: '눈꽃',
    desc: `[눈사태] 사용 후 다음 내는 [블루카드]가 자신의 체력을 10% 회복시켜줍니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/1/14/c8t2f4c1d604689bhu1gdnudlfpo149.png',
  },
  결벽증: {
    name: '결벽증',
    desc: `10초마다 1회 발동, 피해를 받으면 방어의 보호막을 전개하여 자신이 받는 피해를 50% 감소시킵니다. (3초간 지속)`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/5/56/dlwiufnqyskx68b68h40yv6ncrp7zww.png',
  },
  설옥: {
    name: '설옥',
    desc: `[눈사태]의 눈덩이 시작 내구도가 증가합니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/0/04/gf1c59a9le4y56s6b879l9n22a8ek1d.png',
  },

  무영: {
    name: '무영',
    desc: `[전신주 커터] 사용 후 그림자 속으로 몸을 감춰 5초간 [은신]합니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/c/c0/9spyqgq8m01ddrp3w5dhvhlwesvxhrm.png',
  },
  '참새 귀환': {
    name: '참새 귀환',
    desc: `[버드 헌팅] 강화:
    그림자 속으로 몸을 감춰 5초간 [은신]합니다.
    자신이 [은신] 상태일 경우 버려진 덱에서 레드카드를 최대 2장 회수하여 손으로 가져옵니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/3/37/p3rchm2yugh5tlflyxhcx2blrl4nr1o.png',
  },
  '호시탐탐 - 마루하': {
    name: '호시탐탐 - 마루하',
    desc: `자신이 [은신] 상태일 경우, 즉시 [전신주 커터]를 1회 시전합니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/2/2b/7iku1yy91vzrmcwzfiqgsn0sw1f51u9.png',
  },
  잔심: {
    name: '잔심',
    desc: `[비검-철강 절단] 사용 후, 버려진 덱에서 이 카드를 제외한 레드카드를 1장 회수하여 손으로 가져옵니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/1/1d/3yneahoxqwglwaaeffsg00hfn3hbnkv.png',
  },

  '질풍 - 야마아라시': {
    name: '질풍 - 야마아라시',
    desc: `[족제비술]을 사용할 때마다 자신의 [일반 공격]의 공격 속도가 10% 증가합니다. (최대 100%)`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/3/32/qj2ilbyo82w9kb80zhjcj8z9uzocg19.png',
  },
  '호시탐탐 - 야마아라시': {
    name: '호시탐탐 - 야마아라시',
    desc: `자신이 [은신] 상태일 경우 자신의 레드카드의 비용이 1 감소합니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/0/09/7iku1yy91vzrmcwzfiqgsn0sw1f51u9.png',
  },
  눈보라: {
    name: '눈보라',
    desc: `[족제비술] 강화:
    회오리 부채를 시전하여 대상에게 3단 피해를 입히고 [열상]을 부여하며, 동시에 [냉동]을 발동합니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/e/e0/teb2zo1knfwjfgzujibwq4vh85qc8uv.png',
  },

  연속작전: {
    name: '연속작전',
    desc: `1웨이브의 적을 처치한 후 자신의 체력을 30% 회복합니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/b/bd/8l41q1b4tsdu2jgboyicdqyrddflnsi.png',
  },
  '기절 강타': {
    name: '기절 강타',
    desc: `[방패 타격] 강화:
    방패로 내리쳐 범위 내의 적에게 1단 피해를 입히고 [기절]을 부여합니다.
    동시에 대상의 방어력을 3% 감소시킵니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/2/2e/9glevbgoni5p95bpvpvf8c2xwl3r8hv.png',
  },

  '아드레날린 - 레이첼': {
    name: '아드레날린 - 레이첼',
    desc: `아군 1명의 체력이 30%보다 낮을 경우 아드레날린을 주사하여 체력을 20% 회복시키고, 동시에 [일반 공격]의 공격 속도를 최대로 증가시킵니다. (10초간 지속, 1회 한정)`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/c/c2/kpxsoo28bu5hhoao7kd26iz9b1tm9nh.png',
  },
  약리학: {
    name: '약리학',
    desc: `[마술 사탕], [전장의 의사]와 [아드레날린]의 치유량이 5% 증가합니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/a/a1/jesdoo0cbh2n71kxwheqa8daflhsoxe.png',
  },
  인연: {
    name: '인연',
    desc: `[무지개 병] 사용 후 다음 내는 그린카드의 치유량이 100% 증가합니다.(중첩 가능)`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/4/45/kirhuf2qlkdhsnqvrm3nmw2xehb0nuk.png',
  },

  '래피드 파이어': {
    name: '래피드 파이어',
    desc: `[분수] 강화: 카드를 1장 뽑습니다. 비용이 홀수라면 이번 전투동안 [일반 공격]이 발사하는 탄약수가 1 증가합니다.(10회 한정) 비용이 짝수라면 모든 아군의 [일반 공격] 피해가 40% 증가합니다.(10회 한정) 동시에 물총이 6초간 연사 모드에 진입합니다. 지속 시간 동안 [일반 공격]이 발사하는 탄약수가 2배로 증가합니다. 동시에 [일반 공격]을 선택된 대상에게로 전환합니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/0/0e/fz2w9nbaml8ajz1pd74giq72ttfw52i.png',
    clearMind: '레이스 원피스 구매 가능 수량 +20%',
  },
  쿨썸머: {
    name: '쿨썸머',
    desc: `[한여름의 물거품] 사용 후 모든 아군의 체력이 5% 회복합니다. 필드의 [더위]/[폭염]/[열대야] 날씨를 제거합니다. 동시에 아군 필드의 [작열]/[광염]/[불바다]를 제거합니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/d/da/9s1igwtm82d5fnddipznuodsj8ha2fi.png',
  },
  '치유의 물결': {
    name: '치유의 물결',
    desc: `[분수] 강화: 카드를 1장 뽑습니다. 비용이 홀수라면 이번 전투동안 [일반 공격]이 발사하는 탄약수가 1 증가합니다.(10회 한정) 비용이 짝수라면 모든 아군의 [일반 공격] 피해가 40% 증가합니다.(10회 한정) 동시에 물총이 6초간 연사 모드에 진입합니다. 지속 시간 동안 [일반 공격]이 발사하는 탄약수가 2배로 증가합니다. 동시에 [일반 공격]을 선택된 대상에게로 전환합니다. 아군에게 사용 시 [일반 공격]이 발사하는 물탄환 1발당 체력을 0.5% 회복시켜 주고, 동시에 대상에게 걸린 [점화]를 제거합니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/0/00/h9mry3cm9tfumei8u82ph9g95m61mnx.png',
    clearMind: '요리 기술: 음식 평점+5%',
  },
  '여름의 추억': {
    name: '여름의 추억',
    desc: `전투 시작 시 추가로 비용을 2 얻습니다. 시즈루가 현재 비용과 손패 수를 기록으로 남기고, [여름의 추억]을 1장 생성하여 덱에 추가합니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/f/ff/ntc2qirg9osf9w285d0e62isdnaz1xe.png',
    clearMind: '레이스 원피스 구매 가능 수량 +30%',
  },

  플레어별: {
    name: '플레어별',
    desc: '[북두칠점]이 사라질 때 [신성]을 1장 생성하여 손으로 가져옵니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/6/6e/dirfao8ryeyeltg1nuk28mw8ypmj16x.png',
  },
  '음원 흡수': {
    name: '음원 흡수',
    desc: '덱 혹은 손에 있는 블랙카드 1장당 매초 비용을 0.05 얻습니다.\n[음에너지]를 덱에서 추운할 때 버려진 덱에서 카드를 1장 회수하여 손으로 가져옵니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/1/17/i45ee1g9fcs013su7orwa8wi44fzcsa.png',
  },
  '변화하는 별': {
    name: '변화하는 별',
    desc: "[항성 7] 강화:\n[항성 7]을 소환합니다.(8초간 지속)', 지속구간:\n레드카드 사용 시, 마이크로파 펄스를 시전하여 적에게 1단 피해를 입히고, 동시에 [점화]를 발동합니다.\n옐로카드 사용 시, 전자기 펄스를 시전하여 적에게 1단 피해를 입히고, 동시에 [낙뢰]를 발동합니다.\n퍼플카드 사용 시, 중성미자 펄스를 시전하여 적에게 1단 피해를 입히고, 동시에 [부식]을 발동합니다.\n[항성 7]은 [기계 유닛]입니다.\n마이크로파/전자기/중성미자 펄스는 [파]입니다.\n사용 후 블랙카드 [음에너지]를 1장 생성하여 덱의 맨 밑에 추가합니다.",
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/1/15/on25tfcowuq4ssd18ahzvoc3i8wzs91.png',
  },
  펄서: {
    name: '펄서',
    desc: '[신성] 사용 후 매초 비용을 0.1 얻습니다.(8초간 지속)\n[초신성] 사용 후 매초 비용을 0.5 얻습니다.(8초간 지속)',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/1/12/rlk282r55acrfu28bss0y65ucgxvcdd.png',
  },

  복음: {
    name: '복음',
    desc: '[수난]을 뽑을 때마다 비용을 1~2 얻습니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/a/ae/q7xlcq76r3pjwc1uh057wbvw3vcff5v.png',
  },
  경고: {
    name: '경고',
    desc: '[서언]을 뽑을 때마다 자신의 스킬 카드를 우선으로 1~2장 뽑습니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/e/e6/15jqn523mmskzcrb316fjhloeonattw.png',
  },
  헌신: {
    name: '헌신',
    desc: '[성흔] 지속시간 동안 매초 비용을 0.1 얻습니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/f/f8/4vo13ux8786t2onv2audntbs2exjga6.png',
  },
  '신의 법칙': {
    name: '신의 법칙',
    desc: '[성흔] 사용 후 자신에게 [몰락의 장막]을 부여합니다.(6초간 지속) \n지속시간 동안, 매초 근처에 있는 적에게 [붕괴]를 1회 발동하며 입힌 피해만큼 자신의 체력을 회복합니다.\n지속시간 동안 [성흔 붕괴]를 부여할 때마다 지속시간이 1초 증가합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/3/37/p9pourqgexl4cal18nimevwt6778bvf.png',
  },

  '헤이, 쥬드': {
    name: '헤이, 쥬드',
    desc: "'Hey Jude'\n샤이어의 친구인 쥬드가 등장하여 전투를 돕습니다.",
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/3/3f/pxh5lq247cm532y33mb50vo7ibw4jer.png',
  },
  '구원의 손길': {
    name: '구원의 손길',
    desc: "'Don't be afraid'\n[MEGA 혼돈 캐넌]을 사용할 때마다 쥬드가 구급탄을 1개 발사하여 체력이 가장 낮은 아군의 체력을 10% 회복시켜줍니다.\n동시에 덱 혹은 버려진 덱에서 자신의 스킬 카드를 1장 뽑아 손으로 가져옵니다.",
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/0/06/j1n7y23kimlx42h553hsbzehh4ihczl.png',
  },
  '장난 공세': {
    name: '장난 공세',
    desc: "'Don't let me down'\n자신의 퍼플카드를 획득하거나 [MEGA 혼돈 캐넌]을 사용할 때마다 쥬드가 옥수수 폭탄을 2개 발사하여 무작위 적에게 1단 피해를 입히고[붕괴]를 부여합니다.\n[옥수수 폭탄]은 [폭발물]입니다.",
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/2/28/85dnas4o7t4y9wr9nlyogpkgtjbhxm2.png',
  },
  '나나나~ 나~': {
    name: '나나나~ 나~',
    desc: "'Upon your shoulders'\n전투 시작 시 덱이 비어 셔플이 발동될 때마다 쥬드가 신호탄을 1개 발사하며 [좌충우돌]을 1장 생성하여 덱의 맨 밑에 추가합니다.",
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/5/58/ms1j5bubj9z7pvfwgm4mfgmuh1bxe0j.png',
  },

  '자력 실드': {
    name: '자력 실드',
    desc: '[자기력 함정] 사라진 후 체력이 가장 낮은 아군 1명에게 자기력 실드를 10초간 부여합니다. [자기력 실드]의 내구도는 자신의 방어력의 2000%입니다.\n[자기력 실드]가 존재할 경우 받는 전자기 피해가 50% 감소합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/2/28/q7nwue98esa8un3q6kf081uqqlon8xs.png',
  },
  '자력 위치추적': {
    name: '자력 위치추적',
    desc: '[자기력 미끼] 강화:\n다음 내는 [인뢰] 키워드를 가진 레드카드/오렌지카드를 사용한 후 즉시 덱 혹은 버려진 덱에서 [인뢰] 키워드를 가진 카드를 3장 뽑아 손으로 가져옵니다.\n그 후 다음 내는 [인뢰] 키워드를 가진 레드카드/오렌지카드가 입히는 피해가 100% 증가합니다.(1회 유효)',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/3/3b/jngt9pxb3c1et8kyvrq59viz7d0bfh9.png',
  },
  '감응의 수칙': {
    name: '감응의 수칙',
    desc: '[자력 함정]과 [축전 자기장]의 지속 시간이 2초 증가합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/f/f3/5wf6ouaxcjqcmg20us16s8ukjnm6lpj.png',
  },
  '이중 감전': {
    name: '이중 감전',
    desc: '10만 [볼트]를 누적할 때마다 [십만 볼트]를 1장 생성하여 손으로 가져옵니다.\n100만 [볼트]를 누적할 때마다 [백만 볼트]를 1장 생성하여 덱의 맨 위에 올려놓습니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/f/f7/d2eagmyuf1g50221wblymuivzg8xcrk.png',
  },

  '노 상대': {
    name: '노 상대',
    desc: '우샤나가 보유할 수 있는 최대 분노치 250\n[참!]을 사용할 때마다 10의 분노치를 얻고, 자신이 처치할 때마다 10의 분노치를 얻습니다.\n아군이 [참열]을 부여할 때마다 1의 분노치를 얻습니다.\n분노치가 50/150/250에 도달하면 이번 전투 동안 [참!]이 추가로 [참열]을 1~2/1~3/1~5회 부여합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/7/79/ahcsrr56eadleluqa0qyx8k9tkun8sy.png',
  },
  '핑거 스냅': {
    name: '핑거 스냅',
    desc: '[슬래시!] 강화:\n[열력]을 휘두르며 적에게 1단 피해를 입히고 [참열]을 1~3회 부여합니다.\n동시에 무작위로 [속박]/[족쇄]를 발동합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/6/6f/494kcfxw08apn8dsjd0xriin3j202ly.png',
  },
  순간: {
    name: '순간',
    desc: '블랙카드가 덱 혹은 손에 있을 때마다 자신의 체력을 초당 1% 회복합니다.\n[음에너지]를 덱에서 뽑을 때 덱 혹은 버려진 덱에서 [!(조준)]을 1장 뽑아 손으로 가져옵니다.\n동시에 [열풍]을 시전하여 적을 관통합니다. [열풍]은 적에게 1단 피해를 입히고 [열상]을 부여합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/e/e4/f20134bs3cgq04py17mf7m3dj2um1rg.png',
  },
  찰나: {
    name: '찰나',
    desc: '자신이 입히는 [참열]이 20% 확률로 [열상]을 발동합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/5/53/f9saqm2ax0k3o61iogy8swp24yhfi7t.png',
  },

  "'보이지 않는 친구'": {
    name: "'보이지 않는 친구'",
    desc: '[동반체]가 최대 200의 스태미나를 가지고 [일반 공격]을 시작합니다.\n아일리와 [동반체]가 공격을 명중할 때마다 스태미나를 1 얻습니다.\n카드를 획득할 때마다 스태미나를 2 얻습니다.\n스태미나 1당 아일리와 [동반체]의 [일반 공격]의 피해가 1% 증가합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/5/5a/2dzcssnjdg4gw51bxzs2jlqnj5wvzur.png',
  },
  '선물 - 아일리': {
    name: '선물 - 아일리',
    desc: '덱의 카드가 전부 뽑혀 셔플이 발동될 때마다 비용을 2 얻습니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/3/33/ijgpeaayhs1nx311sn0m2v9jiecvz7f.png',
  },
  '정신 위압': {
    name: '정신 위압',
    desc: '[정신 탐식] 강화:\n[동반체]가 혼돈을 감지하여 모든 적이 받는 잔향 피해가 20% 증가합니다.(12초간 지속)\n아래 효과를 발동합니다.(3회 유효)\n퍼플카드 사용 시 스태미나를 10 얻고, 강력한 정신 공격을 시전하여 적에게 1단 피해를 입히고 [혼란]을 부여합니다. 동시에 적의 공격력이 2% 감소하고 자신의 공격력이 2% 증가합니다.(중첩 가능)\n이 카드 사용 시 1회 카운트됩니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/0/03/id4f2sqcr6zqnoztsive37t0c25fzmp.png',
  },
  완벽체: {
    name: '완벽체',
    desc: '[동반체]의 스태미나가 1000에 도달 시 아일리가 모든 이상 효과에 면역됩니다.\n [동반체]의 스태미나가 200에 도달 시 비용을 10 얻습니다.(최대 비용 초과 가능, 1회 한정)\n아일리가 빈사 상태에 빠지면 [동반체]가 모든 스태미나를 소모하여 아일리를 치유합니다. 스태미나 1당 아일리의 체력을 1% 회복합니다.(1회 한정)',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/2/2b/7p79nzd297mq6g9cuo5ti84b1p5yip8.png',
  },

  '서방성 약제': {
    name: '서방성 약제',
    desc: '[지각 개입]과 [계약]의 지속 시간이 2초 증가합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/b/b4/3cigarnhct9n6sjqzit67piziw4nftl.png',
  },
  '지각 유도': {
    name: '지각 유도',
    desc: '[지각 개입] 강화: 아군을 표식하고 표식한 대상의 체력을 매초 5% 회복합니다.(6초간 지속)\n지속시간 동안 대상이 받는 피해가 50% 감소합니다.\n동시에 [일반 공격]의 치유 대상을 표식한 아군으로 전환합니다.\n표식된 아군이 내는 다음 카드의 비용이 1 감소합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/6/60/8r1bjz1m5j8e1m94r9rofs2s982mfuc.png',
  },
  '표적 치료': {
    name: '표적 치료',
    desc: '10초마다 1회 발동합니다. [지각 개입]에 의해 표식된 아군이 공격을 받을 때마다 덱 혹은 버려진 덱에서 [약물 각성]을 1장 뽑아 손으로 가져옵니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/5/58/1406ufew9mc5e9tjuznf1cnfg63vnh5.png',
  },
  휴양: {
    name: '휴양',
    desc: '[계약] 지속 시간 동안 모든 아군이 받는 치유량이 2배로 증가합니다.\n[계약] 지속 시간 동안 자신이 빈사 시 3초간 [무적]을 얻고, 동시에 블랙카드 [음에너지]를 1장 생성하여 덱에 추가합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/f/fb/6gzq3m758mtaszf6p8j655pp13mxg6e.png',
  },

  '휘감기 - 이코마': {
    name: '휘감기 - 이코마',
    desc: '[차지] 사용 후 자신의 스킬 카드를 우선으로 카드를 1장 뽑습니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/9/9f/h0g77grui3j644sc7p6bgsy7yqdd26d.png',
  },
  회심연사: {
    name: '회심연사',
    desc: '[관통 사격]과 [폭열 사격]을 30% 확률로 1회 더 시전합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/2/23/86ariiwb5119zosaz5ba0xfn3r8kanc.png',
  },
  '카바네리의 힘 - 이코마': {
    name: '카바네리의 힘 - 이코마',
    desc: '전투 시작 후, 혹은 덱의 카드가 전부 뽑혀 셔플이 발동될 때마다 [차지]를 1장 뽑아 손으로 가져옵니다.\n체력이 가장 높은 아군 1명의 현재 체력의 10%만큼 자신의 체력을 회복하며 자신이 입히는 최종 피해가 35% 증가합니다.\n동시에 자신은 12초간 [광폭]과 [슈퍼아머]를 얻습니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/1/1d/a6iystgkcooea0dac96afkkobjs6vmy.png',
  },
  '검은 물약': {
    name: '검은 물약',
    desc: '전투 시작 시 [검은 물약] 1장을 생성하여 덱의 맨 아래에 추가합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/0/0f/fd2rpjoowfvmbklfi0dx9vy9t14b9a0.png',
  },

  태연: {
    name: '태연',
    desc: '[철막]이 존재하는 동안 파라디가 [슈퍼아머]를 획득하고 앞열의 아군이 [중단]/[기절]에 면역됩니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/2/29/qsahijtlsqb6u12o62m5d2ift3oojfu.png',
  },
  화재현장: {
    name: '화재현장',
    desc: '[화염벽] 강화: [A-1SO]가 지면에 휘발유를 뿌리고 불을 붙여 적 필드에 [광염]을 발동하고 모든 적의 스태미나가 3% 감소합니다.\n동시에 모든 적의 공격력과 방어력이 2% 감소합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/8/88/ao9w1yoluivgubvdyutx98a26th9bud.png',
  },
  '비상 경계': {
    name: '비상 경계',
    desc: '[철막]이 파괴될 때 즉시 [화염벽]을 1회 시전합니다.\n동시에 모든 아군의 방어력이 3% 증가합니다.(중첩 가능)',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/a/ab/8gdtrdnvzz314smaxy848eh53vir25w.png',
  },
  '전면 봉쇄': {
    name: '전면 봉쇄',
    desc: '[강력 진압] 사용 후 [A-2SO]가 적 구역을 철저히 봉쇄한 후 맹렬한 사격을 가하여 무작위 적에게 6단 피해를 입힙니다.\n동시에 다음 회차의 [강력 진압]에 참여하는 [A-2SO] 로봇의 수가 1개 증가하며 [일반 공격] 지원을 제공합니다.(최대 4개)',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/3/3c/atf4gr42mk67od88xiuj7i23n8mo4n8.png',
  },

  '휘감기 - 무메이': {
    name: '휘감기 - 무메이',
    desc: '[나비의 춤] 사용 후 덱에서 [유령의 춤]을 1장 뽑아 손으로 가져옵니다.\n[유령의 춤] 사용 후 덱에서 [나비의 춤]을 1장 뽑아 손으로 가져옵니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/6/65/mu4a1qzyqc0o1v7phlabuwhrwgxcgky.png',
  },
  '바람의 춤': {
    name: '바람의 춤',
    desc: '20% 확률로 공격을 회피합니다.\n회피 성공 시 비용을 0.5 얻습니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/c/c8/tcu7q6ssjib51yjma7y7mwsyvlazee1.png',
  },
  '카바네리의 힘 - 무메이': {
    name: '카바네리의 힘 - 무메이',
    desc: '전투 시작 시 혹은 덱의 카드를 전부 뽑아 셔플이 발동될 때마다 덱에서 [나비의 춤]을 1장 뽑아 손으로 가져옵니다.\n체력이 가장 높은 아군의 현재 체력의 10%만큼 체력을 흡혈하여 자신의 최종 피해를 35% 증가시킵니다.\n동시에 자신은 12초간 [광폭]과 [슈퍼아머]를 얻습니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/0/04/nkqejlocpmcigwf479e992o09bnkiow.png',
  },
  플레잉: {
    name: '플레잉',
    desc: '[나비의 춤] 사용 후 이번 전투 동안 [나비의 춤]의 공격 단수가 2 증가합니다.(6회 한정)\n[유령의 춤] 사용 후 다음 내는 [환영 난무]의 피해가 50% 증가합니다.(중첩 가능)',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/6/6d/mvrdd8j0jnxd47vps69o06o302cbvbn.png',
  },

  탈출: {
    name: '탈출',
    desc: '10% 확률로 공격을 회피합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/0/05/dg0cqcoxzepw0yq3wbmo4lq9i513y5z.png',
  },
  '용량 확장': {
    name: '용량 확장',
    desc: '[음료수 배달]의 카드수가 1 증가합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/b/bc/addlj1pv9u6mr24i8t21ay1aob19o6r.png',
  },
  '정복자 BO-X': {
    name: '정복자 BO-X',
    desc: '[권총]/[돌격소총]/[연소 수류탄]/[무전기]의 비용이 1 감소합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/5/5b/r1yk7akykhm2iwxl34x867ldn5mv495.png',
  },
  허장성세: {
    name: '허장성세',
    desc: '[으르렁] 사용 후 카드를 1장 뽑습니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/6/6f/bi36qcx1ihqn9dfphleb6442cx0ufba.png',
  },
  집착: {
    name: '집착',
    desc: '명중할 때마다 자신의 체력을 0.3% 회복합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/9/9a/svtde4k36xvwn0igcpw16t0v9mpgn7k.png',
  },
  '지탱 - 솔럼': {
    name: '지탱 - 솔럼',
    desc: '피해를 입을 때마다 자신의 방어력이 0.5% 증가합니다. (최대 30%)',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/b/b6/frragkrmlfs5jmlbi6d4djv1d1gwye7.png',
  },
}

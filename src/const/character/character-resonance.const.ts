export interface CharacterResonance {
  name: string
  desc: string
  thumbnail: string
  clearMind?: string
  machiningTechnology?: string
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
  '감응 - 나유타': {
    name: '감응 - 나유타',
    desc: '전투 시작 시 손으로 가져오는 처음 5장의 카드 중에 반드시 [셔플]이 포함됩니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/6/67/2dktmnn7w48dkp7s1u5viq9vk2i3da7.png',
  },
  "레비스의 '불가사의'": {
    name: `레비스의 '불가사의'`,
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

  고정: {
    name: '고정',
    desc: '[서막] 사용 후 다음 3번 가하는 [일반공격]이 [냉동]을 발동합니다.',
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
  },
  "레비스의 '초개조' - 리나 본": {
    name: "레비스의 '초개조' - 리나 본",
    desc: `[디펜스 트리거] 강화:\n'이리를 피하니 범이 앞을 막는다'\n모든 아군에게 3초간 지속되는 [철벽 실드]를 부여합니다.\n[블랙카드]를 우선으로 카드를 3장 뽑으며 손패 상한을 초과할 수 있습니다. [블랙카드]를 뽑았을 경우 [블랙카드] 1장당 [철벽 실드]의 지속시간이 2초 증가합니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/3/30/ron8pn2vxmaudbcp12gwpcj3js6hzko.png',
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
  },
  "레비스의 '초개조' - 페니아": {
    name: `레비스의 '초개조' - 페니아`,
    desc: '[런닝 썬더] 강화:\n[디펜스 썬더]를 활성화하여 목표 구역에 강력한 번개를 일으켜 범위 내의 적에게 7단 피해를 입히고, 동시에[인뢰]를 발동합니다.\n사용 후 [블랙카드] [음에너지]를 1장 생성하여 손으로 가져옵니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/4/41/ron8pn2vxmaudbcp12gwpcj3js6hzko.png',
  },

  부채바람: {
    name: '부채바람',
    desc: '[부채술] 강화:\n부채를 흔들어 자신과 앞열 아군의 공격력을 2% 증가시킵니다.(중첩 가능)\n동시에 앞열 아군에게 걸린 [점화]를 제거합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/0/0a/f9ecyf7aylutepcdbrhu4dh2ld3subb.png',
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
  },
  풍설: {
    name: '풍설',
    desc: '[오의-유풍] 강화:\n[오의-유풍]을 시전하여 모든 적에게 6단 피해를 입히고, 동시에 [냉동]을 발동합니다. 버려진 덱에 있는 [부채술] 1장당 자신의 공격력이 2% 증가합니다.(중첩 가능)',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/e/e9/9wnl8l3xmag1er33mcqy3u8hq9iwpgk.png',
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

  보급: {
    name: '보급',
    desc: '1웨이브의 적을 처치한 후 비용을 2 얻습니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/9/9c/rt04fk9f4lsbzel8wpz2uba5guhl5pk.png',
  },
  '나비 서식': {
    name: '나비 서식',
    desc: '동일 대상에게 [나비의 춤]을 연속으로 사용 시 초당 회복 효과가 3% 증가합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/0/0c/mtg9u6mkma44rtzfydx6yhwiwlnyve1.png',
  },
  세례: {
    name: '세례',
    desc: '[태초의 꿈]을 사용해 회수한 카드는 다음 한번 낼 때 비용이 1 감소합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/8/81/2bnuy6xeefooh97fm7ufo684a3yubp2.png',
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
}

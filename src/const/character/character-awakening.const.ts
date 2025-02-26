export interface CharacterAwakening {
  name: string
  desc: string
  thumbnail: string
}

export const CHARACTER_AWAKENINGS: { [key: string]: CharacterAwakening } = {
  추격: {
    name: '추격',
    desc: '[리더 스킬] 사용 시 [드론] 키워드를 가진 카드를 우선으로 카드를 1장 뽑습니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/a/a1/0dtqe6kv7w9hais6p96wuirbdr6rfpf.png',
  },
  격전: {
    name: '격전',
    desc: '[번개 소용돌이]의 지속 시간이 3초 증가합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/5/59/gspaoqfxzb54jc47qne875ldrpdaw8u.png',
  },
  투지: {
    name: '투지',
    desc: '공격력+150\n방어력+150',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/7/7c/j9w7ln8sfzgwhp8hdcxlh7oan2bpkzx.png',
  },
  '뇌운 프로토콜': {
    name: '뇌운 프로토콜',
    desc: '[드론]이 회수될 때마다 체력이 가장 높은 적에게 [우레]를 1회 발동하며, 동시에 10% 확률로 [천둥]을 발동합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/b/ba/9frhs5bteeq029t124i6j79dqq57y4w.png',
  },
  '무선 충전': {
    name: '무선 충전',
    desc: '원격으로 [드론]을 충전하여 아군의 모든 [드론]의 지속 시간이 2초 증가합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/e/ec/jvqlqlq0jx33ndf460eu4j766gj1qph.png',
  },

  예지몽: {
    name: '예지몽',
    desc: '[먼데이]가 필드에 있을 시 [수면] 상태인 아군을 치유하여 체력을 초당 5% 회복합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/1/13/4q64boom93qf3k3687p7mzp7fev2u4z.png',
  },
  샘물: {
    name: '샘물',
    desc: '비술탄 한 발마다 30% 확률로 3발 공격을 발동합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/6/6c/118kcf4cr86gj2jt4jn5azyvvfi40ks.png',
  },
  잠꼬대: {
    name: '잠꼬대',
    desc: '[리더 스킬] 사용 시 [스타 아크]를 즉시 1회 시전합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/9/9d/9frhs5bteeq029t124i6j79dqq57y4w.png',
  },
  단꿈: {
    name: '단꿈',
    desc: '자신이 부여한 [수면] 상태의 지속 시간이 2초 증가합니다.\n[먼데이]가 필드에 있을 때, [수면] 상태에 있는 아군의 공격력이 초당 1% 증가합니다.(최대 50%)',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/6/6f/i9naepobotls7c6o8fqshr4xpp3squ9.png',
  },

  강적: {
    name: '강적',
    desc: '[버리기] 명령으로 카드를 버릴 때, 추가로 카드를 1장 뽑습니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/6/6f/o2c9wqvl2xx7hbq5cx2m5z4zj2cftpc.png',
  },
  아라야: {
    name: '아라야',
    desc: '[은신] 상태인 아군의 체력을 초당 2% 회복합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/f/fa/jqdw73edl78sw4s3i2v5wkpr7w96apc.png',
  },
  항하사: {
    name: '항하사',
    desc: '버려진 덱으로 카드를 1장 버릴 때마다 자신의 공격력이 0.3% 증가합니다.(최대 30%)',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/e/e5/9frhs5bteeq029t124i6j79dqq57y4w.png',
  },
  무량: {
    name: '무량',
    desc: '[미스터리]를 사용해 [음에너지]를 뽑았을 때, 모든 아군이 [은신] 상태가 되며, [음에너지] 1장당 5초간 지속됩니다.\n덱이 비어 셔플이 발동될 때마다 모든 아군의 공격력이 10% 증가하며, 5초간 지속됩니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/b/b2/prflxry3bbpvua7xqkef9yjma5zhtwi.png',
  },

  '자기 냉각': {
    name: '자기 냉각',
    desc: '자신이 [동결]을 부여할 확률이 10% 증가합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/b/be/8q8w1ybxh4uu1wh28velzqh4bhqpjrl.png',
  },
  별자리: {
    name: '별자리',
    desc: '비용이 2 이상인 카드가 버려진 덱에서 회수될 때마다 비용을 1 얻습니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/f/fa/to1by9e9gmku79zs3lawc8o82re7sf5.png',
  },
  소용돌이: {
    name: '소용돌이',
    desc: '카드를 1장 회수할 때마다 자신의 공격력과 방어력이 1% 증가합니다.(최대 50%)',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/b/b7/9frhs5bteeq029t124i6j79dqq57y4w.png',
  },
  '얼음 조각': {
    name: '얼음 조각',
    desc: '[동결]을 부여할 때마다 동시에 [중상]을 발동합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/3/32/4f1w58vp73z4it4qufsps35n8526fza.png',
  },

  '마녀의 조건': {
    name: '마녀의 조건',
    desc: '전투 시작 시 비용을 1 소모하여 이번 전투 동안 손패 보충 쿨타임을 1초 감소시킵니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/6/66/puw19mg84kd9vglw2awzxv3hzxyu4z8.png',
  },
  '다크 아트': {
    name: '다크 아트',
    desc: '자신의 슼리 카드 사용 시 50% 확률로 [다크 아트]를 1장 생성하여 손으로 가져옵니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/2/25/dp83oo7xs1zofccsdnkotz9oipnp59i.png',
  },
  새싹: {
    name: '새싹',
    desc: '[신성]이 1장 생성될 때마다 비용을 0.5 얻습니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/4/45/9frhs5bteeq029t124i6j79dqq57y4w.png',
  },
  자물쇠: {
    name: '자물쇠',
    desc: '[기이한 불꽃] 사용 후 [과일씨]를 1장 생성하여 손으로 가져옵니다.\n자신은 [족쇄]와 [속박] 효과에 면역됩니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/b/bd/asmq9tz3rvubicg5jpw4djd1s11wmda.png',
  },

  초전도: {
    name: '초전도',
    desc: '자신이 [인뢰]를 부여할 확률이 10% 증가합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/b/b6/oxv7efz5eyaxlzv6tzr4gafqczw06w7.png',
  },
  쌍권총: {
    name: '쌍권총',
    desc: '[일반공격] 강화: 가우스 권총 2자루를 동시에 들고 사격합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/e/ef/ka8g5wkqgt70vsbajmb4e4baa233lqj.png',
  },
  과부하: {
    name: '과부하',
    desc: '자신이 [인뢰]를 30회 부여할 때마다 다음 [일반공격] 명중 시 반드시 [우레]를 발동합니다.\n동시에 자신의 공격력이 100 증가합니다.(6초간 지속)',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/8/83/9frhs5bteeq029t124i6j79dqq57y4w.png',
  },
  '고독한 늑대': {
    name: '고독한 늑대',
    desc: '[인뢰] 확률이 높을수록 입히는 최종 피해가 증가합니다.(최대 50%)\n전장에 니콜라만 살아남았을 경우, 공격력과 방어력이 추가로 150 증가합니다.\n동시에 자신의 스킬 카드를 우선으로 손이 가득 찰 때까지 카드를 뽑습니다.\n자신이 리더일 경우, 즉시 [리더 스킬]을 활성화합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/2/23/8ymj9hxr6ln6rdc5a42onyf48q15z0t.png',
  },

  계략: {
    name: '계략',
    desc: '손패 상한+1',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/f/fb/edtxpimbacawq566x2qfyzu2a6i4836.png',
  },
  '별의 꽃': {
    name: '별의 꽃',
    desc: '[뭇별]의 지속 시간이 3초 증가합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/a/aa/8pqvb90tfntusi9ada7tm933ehz2nra.png',
  },
  '전투 의지': {
    name: '전투 의지',
    desc: '[TATAKAU]의 초기 상태가 [TATAKAU!!]로 변경됩니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/c/c7/9frhs5bteeq029t124i6j79dqq57y4w.png',
  },
  페어: {
    name: '페어',
    desc: '같은 카드를 연속으로 2장 내면 카드를 1장 뽑습니다.(7회 한정)',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/f/fa/28sil2ts474gfge2qpv2a9afg7s9306.png',
  },

  사랑: {
    name: '사랑',
    desc: '모든 아군이 초당 0.5%의 체력을 회복합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/9/93/70zuk3t370qb4fyppaqmw2zegrh88vl.png',
  },
  동반: {
    name: '동반',
    desc: '퍼플카드와 그린카드를 사용할 때 50% 확률로 [블랙베리]가 나타나 적에게 5자루의 비수를 던지고, 입힌 피해의 50%만큼 체력이 가장 낮은 아군 1명을 치유합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/a/ac/inieiklsjj12zcpongqifl620vvm4d8.png',
  },
  '다크 위스퍼': {
    name: '다크 위스퍼',
    desc: '[블랙베리]가 나타날 때마다 자신의 공격력이 0.5% 증가합니다.(최대 50%)',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/1/14/9frhs5bteeq029t124i6j79dqq57y4w.png',
  },
  바텐더: {
    name: '바텐더',
    desc: '모든 분신이 주는 치유량, 피해와 디버프의 지속 시간이 20% 증가합니다.\n동시에 레드카드도 [동반]을 발동할 수 있습니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/5/5a/o52eciokcbel74b13escmcmnqkqnlvc.png',
  },

  '얼음 칼날': {
    name: '얼음 칼날',
    desc: '[냉동]/[동결] 상태인 적에게 주는 최종 피해가 20%/35% 증가합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/0/09/4s45co8xghznv3tkw805me50hbzuws4.png',
  },
  서리꽃: {
    name: '서리꽃',
    desc: '[원소핵-얼음] 사용 후 50% 확률로 [블루카드]를 우선으로 카드를 1장 뽑습니다.\n아군에게 [원소핵-얼음] 사용 시 대상의 체력을 20% 회복합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/6/68/h8od4kxl1yesvpa1ldmz0of474cjly8.png',
  },
  혹한: {
    name: '혹한',
    desc: '[동결]을 부여할 때마다 자신의 공격력이 1% 증가합니다.(최대 50%)',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/d/d5/9frhs5bteeq029t124i6j79dqq57y4w.png',
  },
  얼음장: {
    name: '얼음장',
    desc: '[원소핵-얼음] 사용 후 체력이 가장 낮은 아군 1명에게 10초간 지속되는 [실드]를 부여합니다. [실드]의 내구도는 자신 방어력의 2000%입니다. 동시에 자신은 [냉동]과 [동결] 효과에 면역됩니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/1/12/czxfrjvqzeyjaakg6bpprlidsnn0o2t.png',
  },

  '저격 강화': {
    name: '저격 강화',
    desc: '이로나가 저격 시 [중상]을 발동합니다.\n[중상]은 목표가 받는 최종 피해를 15% 증가시키며 5초간 지속됩니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/3/31/e2b9xqrvyyhcr56gbhkcfvtmu7607g3.png',
  },
  '페이탈 껌': {
    name: '페이탈 껌',
    desc: '[광학 위장술] 사용 후 [레드카드]를 우선으로 카드를 2장 뽑습니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/2/29/o3z4pbluem72mo7tgnwrkm4nbskbc5r.png',
  },
  '유령 타격': {
    name: '유령 타격',
    desc: '임의 아군이 [은신] 상태일 때 즉시 [전술 유도탄]을 1회 시전합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/c/c2/9frhs5bteeq029t124i6j79dqq57y4w.png',
  },
  '정신 집중': {
    name: '정신 집중',
    desc: '[저격 모드]의 지속 시간이 3초간 연장됩니다.\n[저격 모드] 상태에서 [탄도학]의 확률이 20% 증가합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/8/85/2efximefj5felpirlg7ocllj907nh6m.png',
  },

  '전투 타임': {
    name: '전투 타임',
    desc: '[콜로서스 군진] 사용 후 이번 전투 동안 [진형 유지II]의 비용이 1 감소합니다.\n[콜로서스 군진II] 사용 후 이번 전투 동안 [사방수호II]의 비용이 1 감소합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/0/0d/gl2pz6jiebi9yjevka69uq23f74f7xe.png',
  },
  '베니싱 필드': {
    name: '베니싱 필드',
    desc: '아군의 [실드]가 사라지거나 폭발할 때 [실드] 보유자가 받는 피해가 15% 감소합니다.(5초간 지속)',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/b/b2/axylmjcqpq1u5eqw04nickecuut6u4l.png',
  },
  붕성: {
    name: '붕성',
    desc: '[붕괴]를 부여할 때마다 자신의 공격력이 1% 증가합니다.(최대 30%)',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/2/20/9frhs5bteeq029t124i6j79dqq57y4w.png',
  },
  여파: {
    name: '여파',
    desc: '[대지 붕괴] 사용 후 [진동파]를 1장 생성하여 손으로 가져옵니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/7/7e/8vdd8sr7khowfl1rskthfj0pylnmfd4.png',
  },

  '에너지 흡수': {
    name: '에너지 흡수',
    desc: '[흡수]의 지속 시간이 2초 증가합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/8/8a/offub2j2ixtw52wp36uy38ing8r6dfz.png',
  },
  속박: {
    name: '속박',
    desc: '[반전] 사용 후 다음 퍼플카드 사용 시 모든 적에게 [속박]을 부여합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/4/4e/n23xj16isrgh7jy645nlfrfmx86o006.png',
  },
  열기: {
    name: '열기',
    desc: '[광염] 상태의 적이 입히는 최종 피해가 10% 감소합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/0/01/9frhs5bteeq029t124i6j79dqq57y4w.png',
  },
  '순환 - 리나 본': {
    name: '순환 - 리나 본',
    desc: '[블랙카드]를 1장 얻을 때마다 비용을 1 얻습니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/4/48/5scekfm7740r4w3eiv2jjfkixrbkb19.png',
  },

  광전: {
    name: '광전',
    desc: '자신의 스킬 카드를 사용할 때마다 자신의 공격력이 3% 증가합니다.(중첩 가능)',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/5/55/89yr44d92ia8tmwtel0885u8av5e9p8.png',
  },
  열혈: {
    name: '열혈',
    desc: '[에너지 풍선껌] 사용 후 다음 내는 [레드카드]의 피해가 50% 증가합니다.(중첩 가능)',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/3/3e/hqyduwvqsvs33fzcfl803lzo74d7ckq.png',
  },
  '마검의 주인': {
    name: '마검의 주인',
    desc: '전투 시작 시 [다크 엑스칼리버]를 1장 생성하여 손으로 가져옵니다.\n[다크 엑스칼리버]가 손에 있는 동안 지속적으로 손에 있는 모든 [블랙카드]와 [다크 아트]를 [소각]합니다. 1장 [소각]할 때마다 이번 전투 동안 [다크 엑스칼리버]의 피해가 10% 증가합니다.(최대 200%',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/e/eb/9frhs5bteeq029t124i6j79dqq57y4w.png',
  },
  격노: {
    name: '격노',
    desc: '[다크 엑스칼리버] 사용 후, 덱 혹은 버려진 덱에서 [인터체인]을 1장 손으로 가져옵니다.\n자신이 리더일 경우, 즉시 리더 스킬을 활성화횝니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/e/e8/ag10cibh6t7pcg1syi26gvtkdpaq4qt.png',
  },

  자신감: {
    name: '자신감',
    desc: '모든 아군이 살아있을 시 입히는 최종 피해가 10% 증가합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/4/49/bcdglpo5p5zfmhgmmlw2avyxoxlwond.png',
  },
  여명: {
    name: '여명',
    desc: '[런닝 썬더]의 공격 범위가 증가합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/e/e1/kyrncuepondxq4mlpyi7p6e9r12s6jn.png',
  },
  신기: {
    name: '신기',
    desc: '[복주머니]를 손으로 가져올 때 8% 확률로 블랙카드 [블랙 8]을 1장 생성하여 손으로 가져옵니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/5/58/9frhs5bteeq029t124i6j79dqq57y4w.png',
  },
  '순환 - 페니아': {
    name: '순환 - 페니아',
    desc: '[승리의 아우라]로 [블랙카드]를 버릴 때 비용을 1 얻습니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/d/db/5scekfm7740r4w3eiv2jjfkixrbkb19.png',
  },

  종횡: {
    name: '종횡',
    desc: '[유세술]이 버려질 때 비용을 5 얻습니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/8/85/lm0kfugk17o3mykw2s8b13ivb9ew933.png',
  },
  운명: {
    name: '운명',
    desc: '전투 시작 시 덱에서 [유세술]을 1장 뽑아 손으로 가져옵니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/f/f0/8bcu0bqa1gnyv6d60o7a74wm4suvq3u.png',
  },
  임기응변: {
    name: '임기응변',
    desc: '[부채술] 사용 시 자신이 무작위로 [무적]/[슈퍼아머]/[은신]을 2초간 발동합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/8/85/9frhs5bteeq029t124i6j79dqq57y4w.png',
  },
  깡쯔: {
    name: '깡쯔',
    desc: '손에 같은 카드를 4장 가지고 있을 시 비용을 4 얻습니다.(2회 한정)',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/c/c9/ekenyyx3oy8cqhlj0g63neoaa68x35a.png',
  },
}

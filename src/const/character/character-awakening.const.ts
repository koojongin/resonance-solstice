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
  '샘물-베를린': {
    name: '샘물-베를린',
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
    desc: '자신의 스킬 카드 사용 시 50% 확률로 [다크 아트]를 1장 생성하여 손으로 가져옵니다.',
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
    desc: '[기이한 불꽃 - 마키라] 사용 후 [과일씨]를 1장 생성하여 손으로 가져옵니다.\n자신은 [족쇄]와 [속박] 효과에 면역됩니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/b/bd/asmq9tz3rvubicg5jpw4djd1s11wmda.png',
  },

  '초전도 - 니콜라': {
    name: '초전도 - 니콜라',
    desc: '자신이 [인뢰]를 부여할 확률이 10% 증가합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/b/b6/oxv7efz5eyaxlzv6tzr4gafqczw06w7.png',
  },
  쌍권총: {
    name: '쌍권총',
    desc: '[일반 공격] 강화: 가우스 권총 2자루를 동시에 들고 사격합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/e/ef/ka8g5wkqgt70vsbajmb4e4baa233lqj.png',
  },
  과부하: {
    name: '과부하',
    desc: '자신이 [인뢰]를 30회 부여할 때마다 다음 [일반 공격] 명중 시 반드시 [우레]를 발동합니다.\n동시에 자신의 공격력이 100 증가합니다.(6초간 지속)',
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
  '운명 - 아오바': {
    name: '운명 - 아오바',
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

  '영감 - 조슈아': {
    name: '영감 - 조슈아',
    desc: '1장의 [블랙카드]가 생성될 때마다 자신의 공격력이 3% 증가합니다.(최대 39%)',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/f/fd/72vjp3tqdv2yaqgh4wefk3bq9yid77q.png',
  },
  역류: {
    name: '역류',
    desc: '[예고] 사용 후 버려진 덱에서 [우매]를 1장 회수하여 손으로 가져옵니다.\n[계시] 사용 후 소모된 비용의 20%를 돌려받습니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/a/a2/9vmu50kp3z8flrsmszscyqmvwxilfg1.png',
  },

  '신생 - 조슈아': {
    name: '신생 - 조슈아',
    desc: '[다크 아트]를 사용할 때마다 자신과 체력이 가장 낮은 아군에게 체력을 3% 회복합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/9/98/9frhs5bteeq029t124i6j79dqq57y4w.png',
  },
  유혹: {
    name: '유혹',
    desc: '모든 아군이 [다크 아트]를 생성할 확률이 13% 증가합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/6/60/435io6uvb1zw6eeowmazbz5z4t6v6tu.png',
  },

  '천년의 노래': {
    name: '천년의 노래',
    desc: '체력이 30% 미만일 때 버려진 덱에서 비용이 2 이상인 카드를 우선으로 카드를 1장 회수합니다.(1회 한정)\n동시에 이번 전투 동안 해당 카드의 비용이 1 감소합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/1/10/bo9uylkyqmwdgc55y3xftly40lzabtg.png',
  },
  '샘물-아르카나': {
    name: '샘물-아르카나',
    desc: '[자연의 메아리]와 [나비의 축복] 지속 시간이 2초 증가합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/c/c1/118kcf4cr86gj2jt4jn5azyvvfi40ks.png',
  },
  '자연의 선물': {
    name: '자연의 선물',
    desc: '[자연의 메아리] 지속시간 동안 매초 무작위 아군의 체력을 1% 회복합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/8/88/9frhs5bteeq029t124i6j79dqq57y4w.png',
  },
  '나비의 꿈': {
    name: '나비의 꿈',
    desc: '[태초의 꿈]의 유효 횟수가 1회 증가합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/f/f1/n8occh0uh0wt74z7f5bqmifhadporm6.png',
  },

  통찰: {
    name: '통찰',
    desc: '모든 아군이 연소 상태의 적에게 입히는 최종 피해가 10% 증가합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/9/9f/bfsixe7zgvmm0josua2xs07ht3frq8d.png',
  },
  집법: {
    name: '집법',
    desc: '[옐로카드]를 내거나 버린 후 [천상의 불]를 1개 생성합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/9/97/m080fgwcstdiim2fg9vvqzkhlgd50i6.png',
  },
  망종: {
    name: '망종',
    desc: '[천상의 불]가 1개 생성될 때 마다 자신이 받는 피해가 3% 감소합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/3/3b/9frhs5bteeq029t124i6j79dqq57y4w.png',
  },
  '순환 - 더스틴': {
    name: '순환 - 더스틴',
    desc: '[블랙카드] 또는 [다크 아트]가 1장 생성될 때 마다 [천상의 불] 1개를 생성.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/8/85/tlcmzxu1cah0yip4zs8i7jdowzjd874.png',
  },

  철혈: {
    name: '철혈',
    desc: '체력이 50%/40%/30%/20%/10% 미만일 경우 입히는 최종 피해가 10%/15%/20%/25%/30% 증가합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/f/f2/t4kxa70oetyxk82yzwtesva74bz078d.png',
  },
  하트킹: {
    name: '하트킹',
    desc: '[레드카드]를 연속으로 2장 냈을 경우, 다음 내는 자신의 [레드카드]의 피해가 39% 증가합니다. [하트킹] 버프를 받은 카드는 사용 시 횟수를 카운팅하지 않습니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/2/21/3n0tgnszjjf1ux00jnzumwsmelyyemb.png',
  },
  혈맹: {
    name: '혈맹',
    desc: '아군이 빈사상태 시 검은 가시덤불을 시전하여 적의 체력을 흡수하고 [속박]을 부여합니다.(2회 한정)',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/9/96/9frhs5bteeq029t124i6j79dqq57y4w.png',
  },
  혈족: {
    name: '혈족',
    desc: '[다크 아트]를 1장 [소각]할 때마다 자신의 최대 체력이 13% 증가합니다.(13회 한정)\n[블랙카드]를 1장 [소각]할 때마다 자신의 공격력과 방어력이 2% 증가합니다.(13회 한정)',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/7/7c/jcpxpqcx3r8d6jyax7srp0fzujv3huu.png',
  },

  해체: {
    name: '해체',
    desc: '[의태] 사용 후 뒷열에 있는 아군의 공격력이 6% 증가합니다.(중첩 가능)',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/d/d1/dxfllhnpfo4mpm82kfsjork6qd65fdx.png',
  },
  무실: {
    name: '무실',
    desc: '[허와 실의 관]의 지속시간이 3초 증가합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/8/8a/6r0l2ev6wtzn84utbnobh7u1mb9am98.png',
  },
  허상: {
    name: '허상',
    desc: '[백화]가 [더스트 리자드]/[암흑의 매머드]/[빙하 본드래곤]으로 의태 시, 앞열/중간열/뒷열 아군의 공격력이 80 증가합니다.(6초간 지속)',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/3/38/9frhs5bteeq029t124i6j79dqq57y4w.png',
  },
  '독단 행동': {
    name: '독단 행동',
    desc: '모든 아군의 [일반 공격] 피해가 2배로 증가합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/d/d4/nfceqbtpt7uv5ld4zfc1ur7zeemwu4o.png',
  },

  '반응이 심화되다': {
    name: '반응이 심화되다',
    desc: `[비스코스 폭탄]을 가진 적이 다른 폭발물에 의해 피해를 입으면 폭발물이 받는 피해가 25% 증가합니다.
    강화된 반응이 발동되면 폭발물 소지자의 공격력이 1% 증가하며 최대 한도는 50%입니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/6/68/mm2tk4qll6w78dn34byepn9h4zu7sy4.png',
  },
  '폭발 충전': {
    name: '폭발 충전',
    desc: '[폭발물]이 터질 때 마다 비용이 0.15포인트 증가합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/b/b5/lq9je21vgm5y9ubtikhpxuln0nel46d.png',
  },
  '섀도우 울프 가드': {
    name: '섀도우 울프 가드',
    desc: `각 기계 늑대의 지속시간 동안, 그것은 우리 팀원 모두의 12% 피해를 저항할 것입니다. [리더 스킬] 이나 특수 스킬 카드를 사용할 때, [은신]하고 5초간 싸우도록 추가 기계 늑대를 부릅니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/6/6f/lhcusg0w256u75xozse7sjbdauxe03p.png',
  },
  '잡지 수정': {
    name: '잡지 수정',
    desc: '[울프팩] 탄약 수 +1',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/d/da/99i5tz2k4csxlp3qplfa6zzqmo5absf.png',
  },

  기적: {
    name: '기적',
    desc: '체력이 20% 미만일 때 즉시 [정화]를 사용합니다.(1회 한정)',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/f/fa/ifb58jslfp1fs8yvmqkdnp0l01c2y8a.png',
  },
  무심: {
    name: '무심',
    desc: '자신의 스킬 카드를 사용할 때마다 [광폭]을 얻습니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/5/5a/h1mnvsozhu5c83e8oi582p6eal8ehsz.png',
  },
  유리: {
    name: '유리',
    desc: '[복음] 지속시간 동안, 모든 아군이 받는 최종 피해가 10% 감소합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/7/7f/9frhs5bteeq029t124i6j79dqq57y4w.png',
  },
  집념: {
    name: '집념',
    desc: '[다크 아트]가 1장 생성될 때마다 비용을 0.5 얻습니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/2/28/4tqjk13m5mivv500xgrrywa5rg4op8e.png',
  },

  정비: {
    name: '정비',
    desc: '전투 시작 시 맨 처음 내는 카드 3장의 비용이 1 감소합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/a/a4/9h5doh3kcaj70w5aj7j0hdaor427dgo.png',
  },
  '폭탄 장전': {
    name: '폭탄 장전',
    desc: '[레드 버튼]을 사용하여 터뜨린 [폭발물]이 입히는 최종 피해가 30% 증가합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/a/a5/blk4lrf2cbo2stdgjycaw0zxybkjdt5.png',
  },
  '폭발 지시': {
    name: '폭발 지시',
    desc: '[레드 버튼] 사용 시 앞열의 아군이 10초간 지속되는 [실드]를 얻습니다.\n[실드]의 내구도는 자신의 방어력의 2000%입니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/e/ec/9frhs5bteeq029t124i6j79dqq57y4w.png',
  },
  메아리: {
    name: '메아리',
    desc: '[폭파 작업] 추가효과:\n이 카드가 카드 효과로 인해 버려질 때 버려진 [폭파 작업] 카드가 이번 전투 동안 소모하는 비용이 1 감소합니다.(중첩 가능)',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/8/86/3zytv8ts831977qk2gmg5zv096ca8h9.png',
  },

  유비무환: {
    name: '유비무환',
    desc: '[리더 스킬] 사용 시 비용을 1 얻습니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/9/9c/7shns5n9qi0c7ady3grg18srvs487u5.png',
  },
  '추가 탄창': {
    name: '추가 탄창',
    desc: '[일반 공격]의 탄약 수가 1 증가합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/b/be/16vfugc41vc6cyaz7s4sjnjlvusnzf7.png',
  },
  역습: {
    name: '역습',
    desc: '임의 아군의 체력이 30% 미만일 때 [강습 지령]을 즉시 1회 시전합니다.(1회 한정)\n동시에 아군의 모든 [돌격대원]이 10초간 [슈퍼아머]를 얻습니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/3/3a/9frhs5bteeq029t124i6j79dqq57y4w.png',
  },
  지휘관: {
    name: '지휘관',
    desc: '전투 시작 시 모든 아군의 공격력과 방어력이 3% 증가합니다.(중첩 가능)',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/8/83/rgdarvj82smp0rmifz119ylpmafnlem.png',
  },

  '파이어 컨트롤': {
    name: '파이어 컨트롤',
    desc: '아군 필드에 [드론] 있는 드론 1대당 아군의 [드론]이 입히는 최종 피해가 2% 증가합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/f/f5/kdo2euycg9figy7njjm8ipfplrcnc09.png',
  },
  '비상 장치': {
    name: '비상 장치',
    desc: '[버리기] 명령 사용 시 [드론] 키워드를 가진 카드를 우선으로 카드를 1장 뽑습니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/5/5c/1cmhnq296pvkhgumhj7bnbpzq82ksz4.png',
  },
  '벌떼 프로토콜': {
    name: '벌떼 프로토콜',
    desc: '[드론]이 회수될 때마다 자신의 공격력이 0.5% 증가합니다.(최대 30%)',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/7/74/9frhs5bteeq029t124i6j79dqq57y4w.png',
  },
  간섭: {
    name: '간섭',
    desc: '[에너지 절약]강화:\n간섭 신호를 보내 아군의 모든 [드론]을 회수하고 1대 회수할 때마다 비용을 1 얻습니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/6/6e/n73yiidwfp9p1k319mcufq6jzp8umjk.png',
  },

  분출: {
    name: '분출',
    desc: '[전광석화] 지속 시간이 3초 증가합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/e/eb/da50rxqg9kl43irutxn48ibdijs4lyu.png',
  },
  초전도: {
    name: '초전도',
    desc: '자신이 부여하는 [인뢰]의 발동 확률이 10% 증가합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/8/8e/oxv7efz5eyaxlzv6tzr4gafqczw06w7.png',
  },
  뇌명: {
    name: '뇌명',
    desc: '[플래시 코로나] 사용 후 사용 대상의 카드를 1장 뽑아 손으로 가져옵니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/c/ce/9frhs5bteeq029t124i6j79dqq57y4w.png',
  },
  '기상학 - 예주': {
    name: '기상학 - 예주',
    desc: `[전광석화] 사용 시 50% 확률로 [비]/[호우]/[폭우] 날씨를 발동합니다.(1회 한정)
    동시에 [비]/[호우]/[폭우] 날씨에서 모든 아군이 입히는 전자기 피해가 10% 증가합니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/7/79/l7eqs1dzdfav8pzzejugu3w8kwxr0fd.png',
  },

  '충분한 연소': {
    name: '충분한 연소',
    desc: `[유산소 대기]의 지속 시간이 3초 증가합니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/9/92/gorbtot9nw0vnbuwtaw3tyhfychc2yd.png',
  },
  '연소 촉진': {
    name: '연소 촉진',
    desc: `자신이 부여하는 [점화],[작열]과 [광염]의 지속 시간이 3초 증가합니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/f/fa/pkywp0ze6wrla26tpe6tqjj349mtrzw.png',
  },
  '연쇄 산화': {
    name: '연쇄 산화',
    desc: `[유산소 대기] 지속시간 동안, 자신의 [점화]를 부여할 때마다 비용을 0.1 얻습니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/7/7c/9frhs5bteeq029t124i6j79dqq57y4w.png',
  },
  '기상학 - 카리야': {
    name: '기상학 - 카리야',
    desc: `[유산소 대기] 사용 시 50% 확률로 [더위]/[폭염]/[열대야] 날씨를 발동합니다.(1회 한정)
    동시에 [더위]/[폭염]/[열대야] 날씨에서 모든 아군이 입히는 화염 피해가 10% 증가합니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/7/78/0xnv8jnt4mq3hnqwog92tln1bgli9fd.png',
  },

  '운명 - 리비아': {
    name: '운명 - 리비아',
    desc: `전투 시작 시 덱에서 [충격검]을 1장 뽑아 손으로 가져옵니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/4/46/8bcu0bqa1gnyv6d60o7a74wm4suvq3u.png',
  },
  '사경 - 리비아': {
    name: '사경 - 리비아',
    desc: `빈사 시 [무적]을 3초간 얻고, 동시에 [종막의 원무곡-레드]를 즉시 사용합니다.(1회 한정)`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/9/9b/scm0w7xu5zuxrnrd2egtpdlgbdyxnco.png',
  },
  '화음의 여운': {
    name: '화음의 여운',
    desc: `[기이한 불꽃 - 리비아] 사용 후 모든 아군의 공격력과 방어력이 1% 증가합니다. (최대 15%)`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/8/8c/9frhs5bteeq029t124i6j79dqq57y4w.png',
  },
  '순환 - 리비아': {
    name: '순환 - 리비아',
    desc: '[블랙카드]가 [소각]될 때마다 체력이 가장 낮은 아군의 체력을 5% 회복합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/0/0e/5scekfm7740r4w3eiv2jjfkixrbkb19.png',
  },

  비책: {
    name: '비책',
    desc: `[버리기] 명령의 쿨타임이 1초 감소합니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/7/7d/a1b8g5zhxhkul7fh9182qgykozc2gsy.png',
  },
  운수: {
    name: '운수',
    desc: `[비전탄] 강화:
    버려진 덱에서 필살기를 우선으로 카드를 1장 회수하여 손으로 가져옵니다.
    회수한 카드 비용의 3배만큼 비전탄을 발사합니다. 비전탄 1개당 무작위 대상에게 1단 피해를 입히고, [인뢰]를 발동합니다.
    [비전탄]은 [폭발물]입니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/2/28/49p4bkv63wy4eqbt3b7ecvxkjhi8hli.png',
  },
  '탄창 충전': {
    name: '탄창 충전',
    desc: `[비전탄]으로 회수한 카드를 다음 한번 낼 때 비용이 1 감소합니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/1/16/9frhs5bteeq029t124i6j79dqq57y4w.png',
  },
  '팡류게임 마스터': {
    name: '팡류게임 마스터',
    desc: `같은 색의 카드를 연속 3장 냈을 경우 카드를 1장 뽑습니다.(5회 한정)`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/d/dd/gg9b3ek8zyctx1xpj6i4xeb7o8j5zsn.png',
  },

  일고작기: {
    name: '일고작기',
    desc: `도끼를 1자루 던질 때마다 25% 확률로 1회 추가 공격합니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/3/3c/ba7xlgj8qr6ijm7y6lo1szuxsgh2lz9.png',
  },
  '전술 회전': {
    name: '전술 회전',
    desc: `[부메랑 도끼] 시전 시 25% 확률로 받은 공격을 [블록]합니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/5/5d/9frhs5bteeq029t124i6j79dqq57y4w.png',
  },
  올인: {
    name: '올인',
    desc: `빈사 시 3초간 [무적]을 얻고, 자신의 스킬 카드를 우선으로 카드를 3장 뽑습니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/d/de/9gh1eyz4ugfps4h0vp92f46cys8i1zu.png',
  },

  응원: {
    name: '응원',
    desc: `[리더 스킬] 사용 시 리더의 체력을 5% 회복합니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/d/da/f3x1yeqq0fjxgp8htxkbp7in2y4j81j.png',
  },
  '활력 장전': {
    name: '활력 장전',
    desc: `아군이 카렌의 치유를 받을 때마다 [일반 공격]의 피해가 10% 증가합니다.(최대 100%)`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/a/a2/9frhs5bteeq029t124i6j79dqq57y4w.png',
  },
  '경화 장전': {
    name: '경화 장전',
    desc: `[플라워탄] 강화:
    아군의 여성에게만 적용되는 특수 치유탄을 발사하여 대상의 체력을 35% 회복합니다.
    대상의 방어력이 3% 증가합니다.(중첩 가능)`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/7/7f/18a2kd7i4ah7qe5nqmz97swtbb4qg3y.png',
  },

  불씨: {
    name: '불씨',
    desc: `[스파크] 사용 후 50% 확률로 [원소핵-불] 카드를 1장 생성하여 손으로 가져옵니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/5/56/e3gddk0ijwkywc1nbffx28cpr3ejj9s.png',
  },
  희망: {
    name: '희망',
    desc: `[원소핵-불] 사용 후 비용을 1 얻습니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/2/2a/lloryw21jjetyds52olmxf8kbjdwo5v.png',
  },
  협력: {
    name: '협력',
    desc: `[점화]를 부여할 때마다 무작위 아군의 체력을 1% 회복합니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/e/e4/9frhs5bteeq029t124i6j79dqq57y4w.png',
  },
  재연소: {
    name: '재연소',
    desc: `[스파크] 사용 후 손에 있는 [블랙카드] [잿더미]를 [원소핵-불]로 전환합니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/9/9f/4v4eeuknsvxpn6lrsmr6kui1rrk4hk6.png',
  },

  반항: {
    name: '반항',
    desc: `피해를 입힐 때 자신의 공격력이 대상의 방어력보다 낮다면 입히는 최종 피해가 10% 증가합니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/6/62/2vcibyxfwlqb4gsd1at8qso0ehreq6z.png',
  },
  화양연화: {
    name: '화양연화',
    desc: `[단비],[봄꽃]과 [가을달]의 지속 시간이 1초 증가합니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/5/5f/nturxwexqx49numk1oi069c9d94svma.png',
  },
  결실: {
    name: '결실',
    desc: `[화견지술]의 치유를 받은 아군의 공격력이 매초 0.2% 증가합니다.(최대 30%)
    [월견지술]의 보호를 받은 아군의 방어력이 0.1% 증가합니다.(최대 30%)`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/c/ca/9frhs5bteeq029t124i6j79dqq57y4w.png',
  },
  영상개화: {
    name: '영상개화',
    desc: `같은 카드를 연속으로 4장 냈을 경우 손이 가득찰 때까지 카드를 뽑습니다.(1회 한정)`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/e/eb/ddvwtrpa1gabw9byo13bwel50dxejuw.png',
  },

  암살술: {
    name: '암살술',
    desc: `자신이 [은신]할 때마다 공격력이 3% 증가합니다.(최대 60%)`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/4/44/7i168thrxqdtvqm1stto640dqqxtbb5.png',
  },
  '소소한 마음': {
    name: '소소한 마음',
    desc: `[리더 스킬] 혹은 필살기 카드를 사용할 때 즉시 [변화무상]을 1장 냅니다.
    [변화무상]을 손에서 내면 사용된 것으로 간주합니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/a/a6/nyc7kqynwhjfspxgeo984rcia6fr9k4.png',
  },
  중생팔고: {
    name: '중생팔고',
    desc: `[무상]이 33% 확률로 적에게 랜덤으로 1종의 [팔고] 상태를 부여합니다.
    1종의 상태가 존재할 때마다 [무상-전륜]의 피해가 12% 증가합니다.
    [팔고] 생고/노고/병고/사고/애별리고/원증회고/구부득고/오음성고`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/1/11/9frhs5bteeq029t124i6j79dqq57y4w.png',
  },
  샤이닝: {
    name: '샤이닝',
    desc: `자신이 [은신] 상태일 때 입히는 최종 피해가 20% 증가합니다.
    동시에 자신이 힙히는 [열상]/[참열]의 피해가 2배로 증가합니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/d/d4/4cpyp813xfq011ikwc9nesgaxmb931l.png',
  },

  폭발객: {
    name: '폭발객',
    desc: `자신의 [폭발물]이 폭발할 때마다 자신의 공격력이 0.5% 증가합니다.(중첩 가능, 최대 60%)`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/d/db/be5toh76j2lc6faeopa0xiuvtk3gh1p.png',
  },
  다발장전: {
    name: '다발장전',
    desc: `자신의 [폭발물]이 무작위로 [낙뢰]/[점화]/[냉동]을 발동합니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/c/c7/c2ywjclscnq2nevmgb8xtq4ajsudh0r.png',
  },
  '연쇄폭발 반응': {
    name: '연쇄폭발 반응',
    desc: `[연쇄 폭발 지뢰]가 폭발 시 33% 확률로 피해가 2배로 증가합니다.
    해당 효과 발동 시 33% 확률로 [다발장전]이 발동하는 효과가 [우레]/[작열]/[동결]로 업그레이드 됩니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/e/e8/9frhs5bteeq029t124i6j79dqq57y4w.png',
  },
  '폭발의 예술': {
    name: '폭발의 예술',
    desc: `모든 [폭발물]의 피해량을 20% 증가시킵니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/a/aa/7qyi8f7zouvv7h1ftok5vus792qhzn0.png',
  },

  해결사: {
    name: '해결사',
    desc: `체력이 30% 미만인 적에게 입히는 최종 피해가 50% 증가합니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/9/94/4nu2htpnehqit5g5y3gyp6yikb00ini.png',
  },
  피투성이: {
    name: '피투성이',
    desc: `[다크 아트] 사용 후 다음 내는 자신의 [레드카드]의 피해가 39% 증가합니다.(중첩 가능)`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/3/31/1zndtkvu6tve2uhtcyhgycz02o3b8sd.png',
  },
  추적: {
    name: '추적',
    desc: `[탐사] 사용 후 현재 손패 수와 비용 수에 비례하여 자신을 강화합니다.
    손패 1장당 모든 아군의 공격력이 0.5% 증가합니다.(최대 30%)
    비용 1당 모든 아군의 방어력이 0.5% 증가합니다.(최대 30%)`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/d/d2/9frhs5bteeq029t124i6j79dqq57y4w.png',
  },
  혈제: {
    name: '혈제',
    desc: `[유성]의 여진으로 발생하는 진동파의 피해가 2배로 증가합니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/e/e8/3txly6ibjgy3kvx33078do2yrlp0ymr.png',
  },

  '비트 잇': {
    name: '비트 잇',
    desc: `'Just beat it'
    하루카가 치명 공격을 1회 회피할 수 있으며 동시에 자신의 체력을 30% 회복합니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/9/98/hwcvtbssgpqzvum3sqebtthfkdwzohi.png',
  },
  '그들은 우리를 신경 쓰지 않는다': {
    name: '그들은 우리를 신경 쓰지 않는다',
    desc: `'You can nver kill me'
    [때리바]가 필드에 있는 동안:
    30%의 내구도가 감소할 때마다 덱 혹은 버려진 덱에서 [배드]를 1장 손으로 가져옵니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/5/5a/5oni7nmm147l5hxkf5czqkubwt1wlcj.png',
  },
  '위 아 더 월드': {
    name: '위 아 더 월드',
    desc: `'Just you and me'
    [디스 이즈 잇] 사용 후 매초 비용을 1 얻습니다.(5초간 지속)`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/7/7f/9frhs5bteeq029t124i6j79dqq57y4w.png',
  },
  커쯔: {
    name: '커쯔',
    desc: `손에 같은 카드를 3장 가지고 있을 시 비용을 2 얻습니다.(5회 한정)`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/c/c1/a0be0v8hjiqv5wwprws54u5wklfhk62.png',
  },

  강습: {
    name: '강습',
    desc: `체력이 50% 이상인 적에게 입히는 최종 피해가 10% 증가합니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/d/de/3fcwdfb74rolwxcj5aybqzy5ac6qh5q.png',
  },
  '독성 가스': {
    name: '독성 가스',
    desc: `[연막탄]의 타게팅 대상이 받는 최종 피해가 20% 감소합니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/9/96/9frhs5bteeq029t124i6j79dqq57y4w.png',
  },
  우정: {
    name: '우정',
    desc: `[돌진] 사용 후 생존한 아군 인원수만큼 비용을 추가로 얻습니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/e/e1/mq3x85s3pmsj7w6a81u6zrng63i7ocl.png',
  },

  여유만만: {
    name: '여유만만',
    desc: `체력이 50% 이상일 때 입히는 최종 피해가 10% 증가합니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/5/5b/thvykuefoqnfv9wk2bf8p3zcfa60dep.png',
  },
  연월: {
    name: '연월',
    desc: `[옐로카드]/[그린카드]/[블루카드]/[퍼플카드] 사용 시 50% 확률로 버려진 덱에서 [재앙의 달] 1장을 회수하여 손으로 가져옵니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/1/17/rib3ed9249l301w8giygkbw8vm8v4l5.png',
  },
  명월: {
    name: '명월',
    desc: `자신을 제외한 아군이 필살기 혹은 [리더 스킬] 사용 시 즉시 [재앙의 달]을 1회 시전합니다. 동시에 자신이 입히는 [참열] 피해가 10% 증가합니다.(최대 100%)`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/9/9e/9frhs5bteeq029t124i6j79dqq57y4w.png',
  },
  죄월: {
    name: '죄월',
    desc: `[재앙의 달]이 2단 피해를 입히는 대신 비용이 1 증가합니다.
    [리더 스킬] 조건 변경: [재앙의 달] 2회 사용`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/a/a2/r1nm72pq5lyibdwe6ukb55iop6dajqt.png',
  },

  화살비: {
    name: '화살비',
    desc: `[일반 공격] 과 [마그네틱 펄스] 사용 시 30% 확률로 3개의 화살을 동시에 발사합니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/9/9b/pggyrs00b5yjtiqm85kc5br9g7hp92s.png',
  },
  '고탄력 화살': {
    name: '고탄력 화살',
    desc: `[튕김] 횟수가 2회 증가합니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/b/b2/6luznkpcl342ocgclnza5faucc63uty.png',
  },
  '펄스 공명': {
    name: '펄스 공명',
    desc: `[마그네틱 펄스]를 획득할 때마다 자신의 공격력이 0.5% 증가합니다.(최대 30%)`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/4/4f/9frhs5bteeq029t124i6j79dqq57y4w.png',
  },
  순환: {
    name: '순환',
    desc: `[아기곰 듈리]가 필드에 있을 시 [블랙카드]를 손에 가지고 있다면 [아기곰 듈리]의 지속 시간 종료 후`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/2/28/5scekfm7740r4w3eiv2jjfkixrbkb19.png',
  },

  '검무 - 린': {
    name: '검무 - 린',
    desc: `비용이 2 이하인 [레드카드]를 사용할 때마다 자신의 공격력이 2% 증가합니다.(최대 30%)`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/7/7e/84gjc549tox1stz7zqgep2tfnkfx64h.png',
  },
  '그림자 환영': {
    name: '그림자 환영',
    desc: `15% 확률로 환영을 발동하여 받는 공격을 [회피]하고 해당 피해에 면역됩니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/9/91/po752wq8fgmlf8db71r01bg9rdih3yc.png',
  },
  신기루: {
    name: '신기루',
    desc: `[회피] 성공 시 자신이 3초간 [은신]합니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/b/bc/9frhs5bteeq029t124i6j79dqq57y4w.png',
  },
  '그림자 캐스팅': {
    name: '그림자 캐스팅',
    desc: `임의 아군이 [은신] 상태일 때 즉시 [썬더 워킹]을 1회 시전합니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/e/ef/4ly0udc39dzneq8uwpjjqta9ipr35ku.png',
  },

  조향사: {
    name: '조향사',
    desc: `이상 상태인 대상에게 입히는 최종 피해가 20% 증가합니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/9/98/dkjvczwfwas0808ne4ptpqqhr2rhuey.png',
  },
  '혼란의 베이스노트': {
    name: '혼란의 베이스노트',
    desc: `자신이 부여하는 [혼란]과 [광폭]의 지속 시간이 3초 증가합니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/2/2b/jj32hloigue10qaiwlwha4ze9754m22.png',
  },
  '붉은 노을': {
    name: '붉은 노을',
    desc: `[스모킹 건]이 [소각]될 때마다 뒷열 아군의 공격력이 1% 증가합니다.(최대 30%)`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/e/e3/9frhs5bteeq029t124i6j79dqq57y4w.png',
  },
  '들새의 만남': {
    name: '들새의 만남',
    desc: `전투 시작 시 덱의 맨 아래에 있는 카드 3장을 확인하고, 1장 선택하여 손으로 가져옵니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/d/de/qvjcrq6pqvr93momzyt9cmiebnvf00c.png',
  },

  횃불: {
    name: '횃불',
    desc: `자신이 연소 상태일 때 [일반 공격]이 [점화]를 발동합니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/e/ef/7w54kgiiksxpbtyphntoiywykmwfmta.png',
  },
  집착: {
    name: '집착',
    desc: `[무명] 강화:
    지면을 강타하여 범위 내의 적에게 1단 피해를 입힙니다.
    대량의 가연성 기체를 방출하여 모든 아군과 적에게 [점화]를 부여합니다. 연소 상태인 아군의 공격력이 3% 증가합니다.(중첩 가능)
    사용 후 [원소핵-불] 카드를 1장 생성하여 손으로 가져옵니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/2/20/kh00t3qn6ghpx23f11acs2wdvo2ydp1.png',
  },
  무명업화: {
    name: '무명업화',
    desc: `[무명] 사용 후 다음 내는 [어퍼 스윙]이 입히는 피해가 100% 증가합니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/f/ff/9frhs5bteeq029t124i6j79dqq57y4w.png',
  },
  비우기: {
    name: '비우기',
    desc: `[리더 스킬] 사용 시 자신의 체력을 5% 회복합니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/4/49/5sosyxe7mjv5ro5xtf080bq8ejrgqpj.png',
  },

  '검무 - 네즈미': {
    name: '검무 - 네즈미',
    desc: `비용이 2 이하인 레드카드를 사용할 때마다 자신의 공격력이 2% 증가합니다.(최대 30%)`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/0/0e/84gjc549tox1stz7zqgep2tfnkfx64h.png',
  },
  '바람의 형태': {
    name: '바람의 형태',
    desc: `[역풍] 사용 후 이번 전투 동안 [비검-날쥐 회귀]의 공격 단수가 3회 증가합니다. (12회 한정)`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/4/4c/86te8apoc4f54qpovoe5rhq3l96rxrh.png',
  },
  '바람의 그림자': {
    name: '바람의 그림자',
    desc: `[역풍] 사용 후 자신이 3초간 [은신]합니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/6/66/9frhs5bteeq029t124i6j79dqq57y4w.png',
  },
  앙코르: {
    name: '앙코르',
    desc: `[레드카드] 사용 후 10% 확률로 레드카드를 우선으로 카드를 1장 회수합니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/8/8b/poiuhrgke31jp2xzbuo9oh5fiyraeg3.png',
  },

  돌격: {
    name: '돌격',
    desc: `[전술 수류탄] 또는 [클러스터 폭탄] 사용 후 다음 내는 레드카드의 비용이 1 감소합니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/d/d3/f9uvhla9bnhl5vgbhr667eko03ir9o9.png',
  },
  '전략적 위협': {
    name: '전략적 위협',
    desc: `손에 있는 [폭발물] 키워드를 가진 카드 1장당 적이 입히는 최종 피해가 3% 감소합니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/b/bd/9frhs5bteeq029t124i6j79dqq57y4w.png',
  },
  연쇄폭파: {
    name: '연쇄폭파',
    desc: `[클러스터 폭탄] 사용 후 다음 내는 [폭발물] 키워드를 가진 카드를 한 번 더 냅니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/d/d1/pdrot4gezj780pbc7xv8pmehosuabd0.png',
  },

  '화력 분무': {
    name: '화력 분무',
    desc: `[안령도]의 한쪽 끝에 세실이 특별 제작한 [화력 분무]를 뿌려 명중할 때마다 5% 확률로 [화상]을 발동합니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/7/77/qg0t7l16bf6ziryxow5973beb6yrodq.png',
  },
  비약: {
    name: '비약',
    desc: `[블록] 상태 해제 후 자신에게 [광폭]을 부여합니다`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/c/c0/cfaz8qjbrwk53hvq2gh9e6u8nz4l3g3.png',
  },
  이중혼란: {
    name: '이중혼란',
    desc: `[화상]을 부여할 때마다 자신의 공격력이 1% 증가합니다.(최대 30%)
    [혼란]을 부여할 때마다 자신의 방어력이 1% 증가합니다.(최대 30%)`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/7/74/9frhs5bteeq029t124i6j79dqq57y4w.png',
  },
  '썬더 고스트': {
    name: '썬더 고스트',
    desc: `자신의 모든 [레드카드]가 [인뢰]를 발동합니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/d/d0/s89qqe869r0br63mkbr7odaptm6q8vg.png',
  },

  확성기: {
    name: '확성기',
    desc: `[켈빈 조크]의 지속 시간이 3초 증가합니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/b/b6/esit35l9qw3ezgivngiyg9x888d7xse.png',
  },
  '급속 동결': {
    name: '급속 동결',
    desc: `자신이 부여하는 [냉동]의 지속 시간이 3초 증가합니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/7/75/28q3mds0tf8tm8qwfk758z3reqd7jlm.png',
  },
  '얼음의 칼날': {
    name: '얼음의 칼날',
    desc: `[켈빈 조크] 지속시간 동안, 아군이 입히는 [참열]/[열상] 피해가 50% 증가합니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/2/2c/9frhs5bteeq029t124i6j79dqq57y4w.png',
  },
  기상학: {
    name: '기상학',
    desc: `[켈빈 조크] 사용 시 50% 확률로 [눈]/[대설]/[폭설] 날씨를 발동합니다.(1회 한정)
    동시에 [눈]/[대설]/[폭설] 날씨에서 모든 아군이 입히는 얼음 피해가 10% 증가합니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/7/7a/n3xxrsn7qjyhayjmdlwdvamdebfnf5g.png',
  },

  검무: {
    name: '검무',
    desc: `비용이 2 이하인 레드카드를 사용할 때마다 자신의 공격력이 2% 증가합니다.(최대 30%)`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/1/1e/84gjc549tox1stz7zqgep2tfnkfx64h.png',
  },
  서식: {
    name: '서식',
    desc: `자신이 [은신] 상태라면 레드카드를 1장 사용할 때마다 자신의 체력을 10% 회복합니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/f/fb/eh5iwm9f8x30s69iu2oph2ion7hnvxi.png',
  },
  역날: {
    name: '역날',
    desc: `자신이 [은신] 상태일 경우, 즉시 [전신주 커터]를 1회 시전합니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/8/8b/9frhs5bteeq029t124i6j79dqq57y4w.png',
  },
  '플로잉 하트': {
    name: '플로잉 하트',
    desc: `[버리기] 명령어 사용 시 레드카드를 우선으로 카드를 1장 뽑습니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/7/7b/0ayna4sm3t779v783qny5c0f03uh1li.png',
  },

  맹렬: {
    name: '맹렬',
    desc: `스킬을 명중할 때마다 자신의 공격력이 0.5% 증가합니다.(최대 30%, 피해형 특수 효과로 입히는 명중 제외)`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/8/8d/nsjnnpq4g47cdi9etwtrm2ko2aep088.png',
  },
  산신령: {
    name: '산신령',
    desc: `[오의-풍둔 족제비술] 사용 후 버려진 덱에서 모든 [족제비술]을 회수하여 손으로 가져옵니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/e/e5/lhtr7ddpbyfg7ohjysv84oh1stouuay.png',
  },
  '바람의 칼날': {
    name: '바람의 칼날',
    desc: `[열상] 상태의 적이 받는 최종 피해가 10% 증가합니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/e/eb/9frhs5bteeq029t124i6j79dqq57y4w.png',
  },
  맹화: {
    name: '맹화',
    desc: `[일반 공격]이 30% 확률로 [점화]를 발동합니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/b/b1/k076yszlawp1f2fi6wzx9lh5slwj7cp.png',
  },

  충전: {
    name: '충전',
    desc: `자신의 [실드]가 사라질 때 체력을 10% 회복합니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/e/eb/bdyvpy1if73ysi3t3nkfqfzrct8okao.png',
  },
  후원: {
    name: '후원',
    desc: `[절대 승리] 강화:
    몸을 날려 방패로 지면을 강타하여 범위 내의 적에게 1단 피해를 입히고 [붕괴]를 부여합니다.
    모든 아군이 10초간 지속되는 [실드]를 얻습니다. [실드]의 내구도는 자신의 방어력의 2000%입니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/1/18/34raog2c70o62cyusb9uu8xl9w2r1m7.png',
  },
  '철막의 반향': {
    name: '철막의 반향',
    desc: `자신의 [실드]가 존재하는 동안 자신의 일반 공격이 15% 확률로 [방패 타격]을 즉시 1회 시전합니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/8/81/9frhs5bteeq029t124i6j79dqq57y4w.png',
  },
  강심장: {
    name: '강심장',
    desc: `자신의 [실드], [무적] 혹은 [은신]의 지속 시간이 2초 증가합니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/5/58/om1gy5hkjdzp1wncb9jkkvnson1tdrb.png',
  },

  리필: {
    name: '리필',
    desc: `[무지개병] 사용 후 30% 확률로 무지개병을 하나 더 얻습니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/5/58/r1libpdfdacqcqqctx6140fpi0mkm5z.png',
  },
  '의료 부서': {
    name: '의료 부서',
    desc: `전투 시작 시 덱에서 그린카드를 1장 뽑아 손으로 가져옵니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/5/5f/1v19igr7yqu8x6d9vj8fjgn7gk3s5ay.png',
  },
  의료자원: {
    name: '의료자원',
    desc: `[아드레날린] 발동 시 덱 혹은 버려진 덱에서 그린카드를 1장 뽑아 손으로 가져옵니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/d/dc/9frhs5bteeq029t124i6j79dqq57y4w.png',
  },
  녹일색: {
    name: '녹일색',
    desc: `손에 그린카드를 5장 가지고 있을 시 비용을 10 얻습니다.(비용 상한 초과 가능, 1회 한정)`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/e/e8/3hcertb5ou8vqeuw7gl7zlg4c7fxvr0.png',
  },
  '잔잔한 물결': {
    name: '잔잔한 물결',
    desc: `[해변의 꽃] 강화: 카드를 2장 뽑습니다 레드카드를 1장 뽑을 때마다 모든 아군의 공격력이 2% 증가합니다.(중첩 가능) 블루카드를 뽑을 때마다 모든 아군의 방어력이 2% 증가합니다.(중첩 가능) 옐로카드를 뽑을 때마다 카드 1장을 추가로 뽑습니다. 그린카드를 뽑을 때마다 카드 1장을 회수합니다. 퍼플카드를 뽑을 때마다 비용을 1만큼 얻습니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/f/f9/bv0ry5yx6w36zqljbuw6bwdw0zo9hup.png',
  },
  '세찬 조수': {
    name: '세찬 조수',
    desc: `매번 [분수]와 [한여름의 물거품]을 사용할 때마다 모든 아군이 [광폭] 상태가 됩니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/9/9b/teauai01r0fwn6q09j1mgwts7yzx0pb.png',
  },
  '설레는 추억': {
    name: '설레는 추억',
    desc: `[여름의 추억] 강화: 손에 있는 모든 카드를 덱으로 섞어넣습니다. 기록 중인 비용에 따라 현재 비용을 수정합니다. 기록한 손패 수만큼 카드를 뽑습니다. 기록한 체력만큼 아군의 체력을 회복합니다. 모든 아군의 공격력과 방어력이 3% 증가합니다.(중첩 가능) 사용 후 [소각]됩니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/b/b7/9frhs5bteeq029t124i6j79dqq57y4w.png',
  },
  습윤: {
    name: '습윤',
    desc: `이번 전투에서 [일반 공격]으로 발사되는 탄약 수가 1 증가합니다. 시즈루의 물탄환이 대상에게 [습윤] 상태를 부여합니다. 대상이 받는 전자기 피해가 20% 증가합니다. 대상이 주는 화염 피해가 20% 감소합니다. 대상이 [동결] 상태가 될 확률이 10% 증가합니다.`,
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/6/67/7vahqn04z88a5y0gghav6ylty8e8sdh.png',
  },

  '태초의 조석': {
    name: '태초의 조석',
    desc: '[메로페]/[비밀 통신]/[조석의 비경]/[펄서]/[초신성]의 지속시간이 2초 증가합니다.\n[조석의 비경] 지속시간 동안 모든 아군의 공격력과 방어력이 15% 증가합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/5/5c/exm26k5z8the0z7tfu429tvi5bg4qca.png',
  },
  '웨이브 가이드': {
    name: '웨이브 가이드',
    desc: '모든 아군의 [파]가 입히는 피해가 50% 증가합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/c/cd/sc5cci31mtdbst1e9se11wfmly448fy.png',
  },
  성핵: {
    name: '성핵',
    desc: '[신성]/[원소 신성]/[초신성]이 1장 생성될 때마다 무작위 아군의 공격력이 1% 증가합니다.(최대 30%)',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/e/e1/9frhs5bteeq029t124i6j79dqq57y4w.png',
  },
  '트리플 스타': {
    name: '트리플 스타',
    desc: '손에 같은 카드가 3장 있을 경우 비용이 0인 이 카드를 1장 복사하여 손으로 가져옵니다.(손패 상한 초과 가능, 1회 한정)\n파생 카드 제외',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/f/f0/4h6pr5k95tu6qtf1hsvuxdvg5ih69xt.png',
  },

  '영감 - 라지엘': {
    name: '영감 - 라지엘',
    desc: '[성흔 붕괴]를 입힐 때마다 자신의 공격력이 3% 증가하빈다.(최대 99%)',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/8/8f/m3yyzdms2otf3fpzlw3jph7b49lvm5l.png',
  },
  '신성한 재판': {
    name: '신성한 재판',
    desc: '카드가 [소각]될 때마다 30% 확률로 [옥령탄]을 1발 발사하여 적 필드를 폭격하며 모든 적에게 1단 음에너지 피해를 입히고 [부식]을 부여합니다.\n블랙카드가 [소각]되었을 경우 확률이 100%로 증가합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/9/9d/e9wuajf84vxh0yozfsx1rhmx2zwzk1s.png',
  },
  '신생 - 라지엘': {
    name: '신생 - 라지엘',
    desc: '카드가 생성될 때마다 체력이 가장 낮은 아군의 체력을 5% 회복합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/e/e1/9frhs5bteeq029t124i6j79dqq57y4w.png',
  },
  성은: {
    name: '성은',
    desc: '[진리의 눈]이 빛을 한 줄기 발사할 때마다 [동조의 눈]이 생성됩니다.(2초간 지속, 중첩 가능)\n지속시간 동안, 최대 손패 수+1, 자신의 공격력/방어력+아군의 평균 공격력/방어력의 10%',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/e/e1/liug317en57s31xrcgks9tv9yxr2970.png',
  },

  '광란 공세': {
    name: '광란 공세',
    desc: "'Make it better'\n[광폭] 상태의 아군의 공격력이 2% 증가합니다.(최대 50%)\n[혼란] 상태의 적의 방어력이 2% 감소합니다.(최대 50%)",
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/5/5b/2wql7g97n098fogt6pexptg5mphaqfb.png',
  },
  '반란 세력': {
    name: '반란 세력',
    desc: "'Don't make it bad'\n자신이 레드카드를 획득할 때마다 쥬드가 무작위 대상에게 [소란탄]을 1개 발사합니다.",
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/8/8d/joyt23j9opg2bw3nngw0lfiemoq3pyf.png',
  },
  '수확의 기쁨': {
    name: '수확의 기쁨',
    desc: "'Better better better'\n[광폭] 상태에 처한 아군 1명당 매초 비용을 0.02 회복합니다.",
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/e/e1/9frhs5bteeq029t124i6j79dqq57y4w.png',
  },
  '혼돈 세력': {
    name: '혼돈 세력',
    desc: "'under your skin'\n[혼란]/[수면]/[변신]/[속박]/[족쇄]/[저주] 상태인 적에게 입히는 최종 피해가 25% 증가합니다.",
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/7/77/7t3iqfhtc9mtw885jzj0lxj9utp2d42.png',
  },

  '자기력 베리어': {
    name: '자기력 베리어',
    desc: '1만 [볼트]를 누적할 때마다 [축전 자기장]의 지속시간 동안 모든 아군이 받는 최종 피해가 1% 감소합니다.(최대 50%)',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/b/ba/eyjd9m3tyubd40ztpuypya2b32fbi2m.png',
  },
  '자기극 반전': {
    name: '자기극 반전',
    desc: '[자기력 함정]의 지속시간 동안, 뒷열의 아군이 [인뢰]를 5회 발동할 때마다 공격력이 1% 증가합니다.(중첩 가능)',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/4/47/mwrh46q7v8vj0gu3atpkc0hejzmsck3.png',
  },
  '볼트 과부하': {
    name: '볼트 과부하',
    desc: '[볼트]를 20만 이상 누적 시, 자기력 파도가 입히는 피해가 20% 증가합니다.\n[볼트]를 50만 이상 누적 시 자기력 파도가 입히는 피해가 30% 증가합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/c/c6/9frhs5bteeq029t124i6j79dqq57y4w.png',
  },
  '볼트 썬더': {
    name: '볼트 썬더',
    desc: '[볼트]를 추가로 500 얻습니다.\n[백만볼트] 사용 후 아군의 모든 [인뢰] 키워드를 가진 카드가 입히는 피해가 15% 증가합니다.(중첩 가능)',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/e/ea/fxjlkeyrsowba4ujylu7erikvcs6vuu.png',
  },

  영감: {
    name: '영감',
    desc: '아군이 [부식]/[잠식]을 부여할 때마다 자신의 공격력이 0.5% 증가합니다.(최대 99%)',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/d/dd/m3yyzdms2otf3fpzlw3jph7b49lvm5l.png',
  },
  정적: {
    name: '정적',
    desc: '분노치가 150 이상 도달 시 [밤을 베는 마력의 빛!]이 궁극의 검술을 시전하여 모든 [창공검]으로 적을 관통하여 검 하나당 1단 피해를 입히고 [잠식]을 부여합니다.\n동시에 덱에 있는 블랙카드의 수만큼 [창공검]을 추가로 시전하여 적을 관통합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/d/d7/2aitus0lq38temdwq99h0sg3jjhyrqv.png',
  },
  찰나: {
    name: '찰나',
    desc: '[잠식의 영역] 지속시간 동안 자신이 받는 피해가 50% 감소합니다. 동시에 매초 자신의 체력을 1% 회복합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/e/e1/9frhs5bteeq029t124i6j79dqq57y4w.png',
  },
  적멸: {
    name: '적멸',
    desc: '전투 시작 시 3장의 [베기!]를 손으로 가져옵니다.\n자신의 분노치가 높을수록 [잠식] 상태의 적이 받는 피해가 높아집니다.(최대 50%)',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/d/d8/mmakhkgw6ey4qtk90y39v9wuimvldes.png',
  },

  '거센 파도': {
    name: '거센 파도',
    desc: '[정신 폭풍] 사용 후, 6초 동안 카드를 1장 낼 때마다 [동반체]가 10 스태미나를 소모하여 정신 파동을 한 번 방출하고 모든 적에게 1단 피해를 입히는 동시에 방어력을 1% 감소시킵니다.(중첩 가능)\n정신 파동은 [파]입니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/b/b9/0mbggv5i7nix1qbikmulrxc38hhhhd4.png',
  },
  '당신과 함께': {
    name: '당신과 함께',
    desc: '[동반체]는 최소 50 스태미나를 가집니다.\n동시에 카드를 획득할 때마다 추가로 3 스태미나를 획득합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/f/fa/gs9ucfdirjfvhwzjmp0t7ocuhpsq099.png',
  },
  멘탈에코: {
    name: '멘탈에코',
    desc: '[동반체]가 최대 300 스태미나를 가집니다.\n동시에 카드를 사용할 때마다 추가로 5 스태미나를 얻습니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/e/e1/9frhs5bteeq029t124i6j79dqq57y4w.png',
  },
  극변체: {
    name: '극변체',
    desc: '[동반체]의 스태미나가 높을수록 아일리와 [동반체]가 입히는 최종 피해가 높아집니다.(최대 85%)\n동시에 받는 최종 피해도 높아집니다.(최대 30%)',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/2/2b/s31x9qygckjbiqxef7vjvdf6qvir73k.png',
  },

  '호르몬 유도': {
    name: '호르몬 유도',
    desc: '[리더 스킬] 사용 시 모든 아군의 체력을 3% 회복합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/a/a0/80juvo1al28esxju4d4hdak4ta6rcxu.png',
  },
  계발: {
    name: '계발',
    desc: '[약물 각성] 강화:\n아군을 치유하여 25%의 체력을 회복합니다.\n동시에 대상에게 걸린 제어 및 피해형 특수 효과를 제거합니다.\n대상의 체력이 30% 이상일 경우, 대상의 공격력이 2% 증가합니다.(중첩 가능)\n대상의 체력이 30% 미만일 경우, 대상의 방어력이 2% 증가합니다.(중첩 가능)',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/7/70/cx0iaazp7rdobao27limvxaez86rgfb.png',
  },
  약사: {
    name: '약사',
    desc: '치유량+20%\n방어력+150',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/a/a6/6vxpztrsln69oi0yp1z8ma37mlzfz4m.png',
  },
  '대체 요법': {
    name: '대체 요법',
    desc: '[버리기] 명령 사용 시, 카드를 1장 버릴 때마다 모든 아군의 체력을 5% 회복합니다. ',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/e/e1/9frhs5bteeq029t124i6j79dqq57y4w.png',
  },
  '성장 인자': {
    name: '성장 인자',
    desc: '자신의 [일반 공격]이 주는 치유량이 2배로 증가하고, 동시에 자신을 치유합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/c/c3/is8etmaktpgeeayjnx7qbf6hj5t1i6j.png',
  },

  '확고한 의지': {
    name: '확고한 의지',
    desc: '[리더 스킬] 혹은 필살기 사용 시 자신의 공격력과 방어력이 1% 증가합니다.(최대 50%)',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/c/c3/er1kg8my22o4bt1zvk99vt4ys9466pz.png',
  },
  '강화 제트탄': {
    name: '강화 제트탄',
    desc: '[관통통 사격]과 [파열 사격]이 피해를 입히는 동시에 [점화]와 [중상]을 발동합니다.\n[차지] 사용 후 [관통통 사격]과 [파열 사격]의 피해가 5% 증가합니다.(최대 100%)',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/f/fa/klt9ly274unmkfzzeylzdze9m8wjg7y.png',
  },
  '피의 사쿠라 - 이코마': {
    name: '피의 사쿠라 - 이코마',
    desc: '[카바네리의 힘]에 의해 체력이 흡수된 아군의 공격력과 방어력이 3% 증가합니다.(최대 30%)',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/e/e1/9frhs5bteeq029t124i6j79dqq57y4w.png',
  },
  '사경 - 이코마': {
    name: '사경 - 이코마',
    desc: '[검은 물약] 효과 종료 시 자신의 체력이 50% 이상일 경우 [검은 물약]을 1장 생성하여 손으로 가져옵니다. 손패 상한을 초과할 수 있지만, 체력 소모가 1% 증가합니다.\n체력이 10% 미만일 경우 [무적]을 5초간 얻고 자신의 체력을 50% 회복합니다. 동시에 덱과 버려진 덱에서 자신의 모든 스킬 카드를 손으로 가져옵니다.(1회 한정)',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/4/4d/pcfjauk7oujjqncl3o0j714ytnhc9kj.png',
  },

  '유연한 대처': {
    name: '유연한 대처',
    desc: '30초마다 1회 발동합니다. 피해를 입을 때 필드에 [철막]이 없을 경우, 덱 혹은 버려진 덱에서 [철막] 1장을 손으로 가져옵니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/2/2f/czzwvni3q4zdbu9e5w5y0krkfz54cr7.png',
  },
  '껌 미사일': {
    name: '껌 미사일',
    desc: '[A-2SO]가 2회 사격할 때마다 추가로 [껌 미사일]을 1개 발사하여 적에게 1단 피해를 입히고, 동시에 [인뢰]를 발동합니다.\n[껌 미사일]은 [폭발물]입니다.\n[A-2SO]의 사격 스킬은 [일반 스킬]과 [강력 진압] 두 가지가 있습니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/7/72/k7e1l0oiufjeph1ee4osqyjfhk1x88k.png',
  },
  '협동 모듈': {
    name: '협동 모듈',
    desc: '아군 필드에 있는 [기계 유닛] 1개당 아군의 [기계 유닛]이 입히는 최종 피해가 5% 증가합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/e/e1/9frhs5bteeq029t124i6j79dqq57y4w.png',
  },
  '블루 파이어': {
    name: '블루 파이어',
    desc: '[광염] 상태의 적이 받는 최종 피해가 20% 증가합니다.\n[광염]이 1중첩 부여될 때마다 받는 최종 피해가 추가로 5% 증가합니다.(최대 6중첩)',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/a/ad/qpa87r90cd3sxqwmf7ov67cf2au7orf.png',
  },

  '단단한 마음': {
    name: '단단한 마음',
    desc: '[리더 스킬] 혹은 필살기 사용 시 자신의 공격력이 3% 증가합니다.(최대 99%)',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/6/67/eu4tahk066409wu1mevjm69jbbwidpi.png',
  },
  '원기 회복': {
    name: '원기 회복',
    desc: '[나비의 춤]/[유령의 춤]이 명중할 때마다 비용을 0.06 얻습니다. 동시에 입힌 피해의 5%만큼 자신의 체력을 치유합니다.\n[환영 난무] 사용 시/[회피] 성공 시, 모든 아군의 체력을 5% 회복합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/8/80/3ddebv3tg01e9beqyduxfls6f1cx18e.png',
  },
  '피의 사쿠라 - 무메이': {
    name: '피의 사쿠라 - 무메이',
    desc: '[카바네리의 힘]에 의해 체력이 흡수된 아군의 공격력과 방어력이 3% 증가합니다.(최대 30%)',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/e/e1/9frhs5bteeq029t124i6j79dqq57y4w.png',
  },
  '나비의 부름': {
    name: '나비의 부름',
    desc: '자신을 제외한 아군이 [리더 스킬] 혹은 필살기 사용 시 즉시 [나비의 춤] 혹은 [유령의 춤]을 1회 시전합니다.\n[환영 난무] 사용 후 모든 적이 받는 피해가 20% 증가합니다.(5초간 지속)',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/5/58/ismogoqlt8noyzi1u8d4de3x9mc8l3t.png',
  },

  '하드 디스크': {
    name: '하드 디스크',
    desc: '[디스크 복구] 강화:\n파손된 [BO-X 시리즈] 하나의 체력을 50% 회복합니다.\n[BO-X 시리즈]:\n[BO-X]/[성검 BO-X]/[아이기스 BO-X]/[로켓펀치 BO-X]/[플라잉 BO-X]/[BO-F]\n[BO-X 시리즈]는 [로봇]입니다.\n사용 후 [소각]됩니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/c/c3/l98p4elwzb0a5nm4hqwmeg7b8au8cb9.png',
  },
  '공중 투하': {
    name: '공중 투하',
    desc: "[무기고] 강화:\n'Drop the beat!'\nBO-X가 소형 무기고를 검색합니다.\n[권총]/[돌격소총]/[연소 수류탄]/[무전기]를 무작위로 1장 생성하여 손으로 가져옵니다.",
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/2/23/1nkooioktwxczya10a99lrm4ruu0zse.png',
  },
  '전술 준비': {
    name: '전술 준비',
    desc: "[무기고] 강화:\n'Drop the beat!'\nBO-X가 소형 무기고를 검색합니다.\n[권총]/[돌격소총]/[연소 수류탄]/[무전기] 중에서 1장 선택하여 손으로 가져옵니다.",
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/e/e1/9frhs5bteeq029t124i6j79dqq57y4w.png',
  },
  '봉사자 BO-X': {
    name: '봉사자 BO-X',
    desc: '[폐기 처분] 강화:\nBO-X가 자신을 폐기 처분하고 [디스크 복구]를 2장 생성하여 덱에 추가합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/6/68/e5r3weww5y42qmxdmgo6v25d3yfpj0i.png',
  },

  선전포고: {
    name: '선전포고',
    desc: '[강타] 사용 후 다음 내는 레드카드의 비용이 1 감소합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/f/f7/4poyhkb6gqc1xrcpb8179foy2287cq0.png',
  },
  '강타 콤보': {
    name: '강타 콤보',
    desc: '[강타] 사용 후 이번 전투 동안 [교란 강타]의 공격 단수가 1 증가합니다.(8회 한정)',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/f/f1/krzz0hhqhycd3ptf1utuf2b8pdnmwi3.png',
  },
  MIX: {
    name: 'MIX',
    desc: '[으르렁] 사용 후 모든 아군의 방어력이 15% 증가합니다.(6초간 지속)',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/e/e1/9frhs5bteeq029t124i6j79dqq57y4w.png',
  },
  치얼업: {
    name: '치얼업',
    desc: '[강타] 사용 후 모든 아군의 공격력이 0.5% 증가합니다.(중첩 가능)',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/1/18/sdz6f5jd6r94tg7lxxxzghz4o9gefdy.png',
  },
}

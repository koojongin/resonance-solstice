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

  영감: {
    name: '영감',
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
  신생: {
    name: '신생',
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
    desc: `[끈적 끈적한 폭탄]을 가진 적이 다른 폭발물에 의해 피해를 입으면 폭발물이 받는 피해가 25% 증가합니다.
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
    desc: '[기계 늑대 무리] 탄약 수 +1',
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
    desc: '[일반공격]의 탄약 수가 1 증가합니다.',
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
  사경: {
    name: '사경',
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
}

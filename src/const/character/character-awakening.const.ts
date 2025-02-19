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
}

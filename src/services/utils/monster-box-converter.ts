import { MonsterGrade, MonsterType } from '@/const/monster/monster.const'

export function getMonsterFrameUrl(grade: MonsterGrade) {
  if (grade === MonsterGrade.ARCHNEMESIS) {
    return 'https://patchwiki.biligame.com/images/resonance/e/ea/iu2hdx97a7elrwb5nb51jagkzkz9bri.png'
  }

  if (grade === MonsterGrade.ELITE) {
    return 'https://patchwiki.biligame.com/images/resonance/5/55/2qlnktvae5tj6zpbsl311m95b47xoau.png'
  }

  if (grade === MonsterGrade.NORMAL) {
    return 'https://patchwiki.biligame.com/images/resonance/0/02/8x2dlz9hl4pborqmfnvnlk7vr8tjjct.png'
  }
}

export function getMonsterTypeIconUrl(type: MonsterType) {
  if (type === MonsterType.BETULA) {
    return 'https://patchwiki.biligame.com/images/resonance/thumb/6/66/8hb0rz7xi9f5gbh1q429t01liedeass.png/15px-%E5%88%86%E7%B1%BB-%E5%8F%8D%E7%9B%B8-%E6%A1%A6%E6%A0%91%E7%94%9F%E7%89%A9.png'
  }

  if (type === MonsterType.DORMANT)
    return 'https://patchwiki.biligame.com/images/resonance/thumb/a/ad/f6ok0nkkv6zd6833yqwz07gtxr2tdlu.png/15px-%E5%88%86%E7%B1%BB-%E5%8F%8D%E7%9B%B8-%E6%B7%B1%E7%9C%A0%E8%80%85.png'
  if (type === MonsterType.HUMAN)
    return 'https://patchwiki.biligame.com/images/resonance/thumb/1/18/soelbm09y19cengr4kzpb24kjdjgqep.png/15px-%E5%88%86%E7%B1%BB-%E5%8F%8D%E7%9B%B8-%E4%BA%BA%E5%BD%A2%E5%8D%95%E4%BD%8D.png'
  if (type === MonsterType.MACHINE)
    return 'https://patchwiki.biligame.com/images/resonance/thumb/9/90/7xsv2qcvmwff1j21c50qns6i4fec3z3.png/15px-%E5%88%86%E7%B1%BB-%E5%8F%8D%E7%9B%B8-%E6%9C%BA%E6%A2%B0%E5%8D%95%E4%BD%8D.png'
  if (type === MonsterType.ETC)
    return 'https://patchwiki.biligame.com/images/resonance/thumb/1/17/hl76tlrm6urs7mzgmhbec11ctmuh0v0.png/15px-%E5%88%86%E7%B1%BB-%E5%8F%8D%E7%9B%B8-%E5%85%B6%E4%BB%96.png'
}

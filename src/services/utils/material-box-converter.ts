import { RS_GRADE } from '@/const/character/character.enum'
import { RSEquipmentType } from '@/const/archive/equipment.const'

export function getMaterialBottomFrameUrl(grade: RS_GRADE) {
  if (grade === RS_GRADE.N) {
    return 'https://patchwiki.biligame.com/images/resonance/8/88/qmr3qmooggniwgj2r49kx7kqigw9k48.png'
  }
  if (grade === RS_GRADE.R) {
    return 'https://patchwiki.biligame.com/images/resonance/4/4d/1ly0evn7gztzkch72v5t7fnxfhsryhh.png'
  }
  if (grade === RS_GRADE.SR) {
    return 'https://patchwiki.biligame.com/images/resonance/7/79/c0uvio93e6tjdqe3h41afvty1jmed9n.png'
  }
  if (grade === RS_GRADE.SSR) {
    return 'https://patchwiki.biligame.com/images/resonance/8/86/mq5058ghk5zlm8su2bhl6nbjmn1y8wu.png'
  }
  if (grade === RS_GRADE.UR) {
    return 'https://patchwiki.biligame.com/images/resonance/7/70/gssude2g7eu83yeu0o0y6khsyjq40pd.png'
  }

  return 'https://patchwiki.biligame.com/images/resonance/4/4d/1ly0evn7gztzkch72v5t7fnxfhsryhh.png'
}

export function getMaterialBgFrameUrl(grade: RS_GRADE) {
  if (grade === RS_GRADE.N) {
    return 'https://patchwiki.biligame.com/images/resonance/c/cb/gim350p4q9d72mwatey6z1y25oo75f0.png'
  }
  if (grade === RS_GRADE.R) {
    return 'https://patchwiki.biligame.com/images/resonance/2/21/q27kpj7czhcj0sekumhmzcck41u5usl.png'
  }
  if (grade === RS_GRADE.SR) {
    return 'https://patchwiki.biligame.com/images/resonance/1/19/5d3f61y43kbcha49q3nxt932ikgmdnh.png'
  }
  if (grade === RS_GRADE.SSR) {
    return 'https://patchwiki.biligame.com/images/resonance/8/87/b7tbcl0t8sagqwv47ztq1jy4p32px2p.png'
  }
  if (grade === RS_GRADE.UR) {
    return 'https://patchwiki.biligame.com/images/resonance/2/28/aht3i50cc4enuj4bmu0r5jc8llq188n.png'
  }

  return 'https://patchwiki.biligame.com/images/resonance/8/87/b7tbcl0t8sagqwv47ztq1jy4p32px2p.png'
}

export function getEquipmentBgMaskUrl(grade: RS_GRADE) {
  if (grade === RS_GRADE.N) {
    return 'https://patchwiki.biligame.com/images/resonance/6/68/opi01nanz30tudv97vgmfmnv04imbbr.png'
  }
  if (grade === RS_GRADE.R) {
    return 'https://patchwiki.biligame.com/images/resonance/6/68/opi01nanz30tudv97vgmfmnv04imbbr.png'
  }
  if (grade === RS_GRADE.SR) {
    return 'https://patchwiki.biligame.com/images/resonance/5/51/lgyfpw6fkwoy497wngbitsd4docw1ko.png'
  }
  if (grade === RS_GRADE.SSR) {
    return 'https://patchwiki.biligame.com/images/resonance/8/88/hqz129emxnhx4lgdkp277vbxdso8sc3.png'
  }
  if (grade === RS_GRADE.UR) {
    return 'https://patchwiki.biligame.com/images/resonance/9/9f/r61gvwlpw4lws2th3if2w9007m7xmez.png'
  }
}

export function getEquipmentIconUrl(type: RSEquipmentType) {
  if (type === RSEquipmentType.WEAPON) {
    return 'https://patchwiki.biligame.com/images/resonance/9/94/pklfj8wjwrmncothdrhr93vftclmybf.png'
  }
  if (type === RSEquipmentType.ARMOR) {
    return 'https://patchwiki.biligame.com/images/resonance/6/6d/324uys4oni4dhx5r2a5c14yzjzv4mzl.png'
  }
  if (type === RSEquipmentType.ACCESSORY) {
    return 'https://patchwiki.biligame.com/images/resonance/b/b6/67s64813ovyfjqe806zqk1wg8dxfsk8.png'
  }
}

export const SPECIALTY_FRAME_URL =
  'https://patchwiki.biligame.com/images/resonance/3/37/hiu8mr7dyjuyvj5j0cjrcz44fvla2ql.png'

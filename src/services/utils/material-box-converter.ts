import { RS_GRADE } from '@/const/character/character.enum'

export function getMaterialBottomFrameUrl(grade: RS_GRADE) {
  if (grade === RS_GRADE.R) {
    return 'https://patchwiki.biligame.com/images/resonance/4/4d/1ly0evn7gztzkch72v5t7fnxfhsryhh.png'
  }
  if (grade === RS_GRADE.SR) {
    return 'https://patchwiki.biligame.com/images/resonance/7/79/c0uvio93e6tjdqe3h41afvty1jmed9n.png'
  }
  if (grade === RS_GRADE.SSR) {
    return 'https://patchwiki.biligame.com/images/resonance/8/86/mq5058ghk5zlm8su2bhl6nbjmn1y8wu.png'
  }

  return 'https://patchwiki.biligame.com/images/resonance/4/4d/1ly0evn7gztzkch72v5t7fnxfhsryhh.png'
}

export function getMaterialBgFrameUrl(grade: RS_GRADE) {
  if (grade === RS_GRADE.R) {
    return 'https://patchwiki.biligame.com/images/resonance/2/21/q27kpj7czhcj0sekumhmzcck41u5usl.png'
  }
  if (grade === RS_GRADE.SR) {
    return 'https://patchwiki.biligame.com/images/resonance/1/19/5d3f61y43kbcha49q3nxt932ikgmdnh.png'
  }
  if (grade === RS_GRADE.SSR) {
    return 'https://patchwiki.biligame.com/images/resonance/8/87/b7tbcl0t8sagqwv47ztq1jy4p32px2p.png'
  }

  return 'https://patchwiki.biligame.com/images/resonance/8/87/b7tbcl0t8sagqwv47ztq1jy4p32px2p.png'
}

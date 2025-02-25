import { RSArchive } from '@/const/archive/archive.interface'

export const ARCHIVE_CARD_MECHANISM: { [key: string]: RSArchive } = {
  레드카드: { desc: '공격형 카드' },
  블루카드: { desc: '방어형 카드' },
  그린카드: { desc: '치유형 카드' },
  옐로카드: { desc: '자원형 카드로, 보통 카드 뽑기, 카드 회수, 비용 회복 등의 효과를 가집니다.' },
  퍼플카드: {
    desc: '특수 카드로, 보통 파생 카드 생성, 환경 생성, 소환, 제어 및 특수 메커니즘을 가진 카드입니다.',
  },
  블랙카드: { desc: '직접 낼 수 없는 카드로, 보통 버려질 때 해당되는 효과를 발동합니다.' },
  오렌지카드: { desc: '강력한 효과를 가진 카드로, 보통 특정 조건을 달성해야 생성됩니다.' },

  '전투 시작 시 손패 수': { desc: '3장' },
  '전투 시작 비용 수': { desc: '4' },
  '손패 보충': { desc: '5초마다 손패를 1장 보충합니다.' },
  '비용 보충': { desc: '파티에 5명의 캐릭터가 있을 때, 매초 0.67만큼 비용을 회복합니다.' },
  '버리기 명령': { desc: '사용 후 손에 있는 모든 카드를 버리고 카드를 1장 뽑습니다.(쿨타임:20초)' },
  셔플: { desc: '덱의 카드가 다 뽑히면 자동으로 버려진 덱의 카드를 덱에 섞어 넣습니다.' },
  소각: {
    desc: '이 키워드를 가진 카드는 보통 파생 카드이며, 소각된 카드는 더이상 덱이나 버려진 덱의 로테이션에 포함되지 않습니다.',
  },
  '사용 후 소각': {
    desc: '해당 카드는 사용되지 않는 경우 덱과 버려진 덱의 로테이션에 포함됩니다. 사용 후 즉시 소각되며 더이상 로테이션에 포함되지 않습니다.',
  },
  '손에서 내면 소각': {
    desc: '해당 카드는 버려지거나 사용되면 소각되어 더이상 로테이션에 포함되지 않습니다.',
  },
  '다키스트 아워': {
    desc: '이 카드를 누적 13장 사용 시 피의 마신을 소환하여 모든 적에게 1단의 파멸적인 피해를 입힙니다. 적이 기계형이라면 피해가 절반으로 감소합니다.',
  },
}

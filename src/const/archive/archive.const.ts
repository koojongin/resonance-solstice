import { RSArchive } from '@/const/archive/archive.interface'

export const NORMAL_ARCHIVES: { [key: string]: RSArchive } = {
  화음도: { desc: '높을수록 이동 중에 몬스터를 만날 확률이 줄어듭니다.' },
  위협도: { desc: '높을수록 이동 중에 강도를 만날 확률이 줄어듭니다.' },
  '도시 명성 레벨': {
    desc: '레벨 마다 화물 매매 보너스가 제공되고, 일부 거래 아이템, 모집권, 크리스탈을 제공합니다. 최대 레벨: 20\n이 기능의 핵심은 도시 거래소에 있는 구매 가능 화물 수량이 증가한다는 점',
  },
  휴게소: {
    desc: `'흑월 상점', '한잔하기'가 있다.\n휴게소의 핵심은 '한잔하기'에 있음. 여기서 '사과 에이드'를 한 잔 마시면, 피로도 50에 30분 지속되는 거래소 버프(가격 인상 성공률+15%)를 받을 수 있음.`,
  },
  '천상의 불': {
    desc: '지정 범위에 적에게 1회 피해를 입혀 [점화]시킨다. [천상의 불]는 [폭발물]이다. [천상의 불]의 수가 18을 초과하면 초과한 수 만큼 [천상의 불]가 자동으로 발동한다.',
  },
  '강습 모드': {
    desc: '[강습 모드]는 [돌격대원]의 무기를 연사모드로 전환하여 [일반공격]시 발사하는 탄약수를 증가시킵니다.\n    [돌격대원]은 [시즈루], [카렌], [줄리안]이 포함됩니다.',
  },
  돌격대원: {
    desc: '[돌격대원]은 [시즈루], [카렌], [줄리안]이 포함됩니다.',
  },
  '606': {
    desc: '[606]는 [드론]입니다',
  },
  '505': {
    desc: '[505]는 [드론]입니다',
  },
  '404': {
    desc: '[404]는 [드론]입니다',
  },
  '303': {
    desc: '[303]은 [드론]입니다.',
  },
  드론: {
    desc: '특정 지속 시간동안 날아다니는 비행 기체 입니다.',
  },
  '꾀꼬리의 야상곡': {
    desc: '[리비아]의 스킬 카드',
  },
  '종막의 원무곡': {
    desc: '[리비아]의 스킬 카드',
  },
  팔고: {
    desc: '[팔고] 생고/노고/병고/사고/애별리고/원증회고/구부득고/오음성고',
  },
  '연쇄 폭발 지뢰': {
    desc: '[연쇄 폭발 지뢰]는 [폭발물]로 근처에 폭발이 일어날 때 폭발합니다.',
  },
  폭발물: {
    desc: '폭발물입니다.',
  },
  파: {
    desc: '뭔지 정확히 알수없음. [신성]/[원소 신성]/[초신성]은 [파]입니다.',
  },
  포말하우트: {
    desc: '[리산드라]가 들고있는 망치를 표현하는 것 같음.',
  },
  과욕: {
    desc: '[리산드라]의 스킬 [모색] 사용시 손패로 1장을 가져옵니다.',
  },
}

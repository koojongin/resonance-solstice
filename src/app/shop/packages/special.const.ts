import { SaleItemEarnType, ShopSaleItemType, ThumbnailDirection } from '@/app/shop/shop.enum'

export const salePackagesSpecialPackage = [
  {
    name: '스타트업 자금 패키지',
    category: '스타트업',
    thumbnail:
      'https://res.cloudinary.com/dqihpypxi/image/upload/v1739771948/resonance/shop/special/startup_스타트업_자금_패키지_cv3zye.webp',
    price: 1500,
    thumbnailDirection: ThumbnailDirection.VERTICAL,
    items: [
      { name: '크리스탈', amount: 60 },
      { name: '철도연맹 코인', amount: 1000000 },
    ],
  },
  {
    name: '열차장 취임 모집 패키지',
    category: '스타트업',
    thumbnail:
      'https://res.cloudinary.com/dqihpypxi/image/upload/v1739771948/resonance/shop/special/startup_열차장_취임_모집_패키지_hkuhxf.webp',
    price: 30000,
    thumbnailDirection: ThumbnailDirection.VERTICAL,
    items: [{ name: '라플라스 프로토콜', amount: 20 }],
  },
  {
    name: '열차장 취임 육성 패키지',
    category: '스타트업',
    thumbnail:
      'https://res.cloudinary.com/dqihpypxi/image/upload/v1739771948/resonance/shop/special/startup_열차장_취임_육성_패키지_lu6qyi.webp',
    price: 17000,
    thumbnailDirection: ThumbnailDirection.VERTICAL,
    items: [
      { name: '크리스탈', amount: 680 },
      { name: '철도연맹 코인', amount: 400000 },
      { name: '전투 메모리(8Ti)', amount: 50 },
      { name: '디지털화 사고', amount: 500 },
      { name: '원시적 사고', amount: 200 },
    ],
  },
  {
    name: '콜룸바 승무원 지원 패키지',
    category: '스타트업',
    thumbnail:
      'https://res.cloudinary.com/dqihpypxi/image/upload/v1739771948/resonance/shop/special/startup_콜룸바_승무원_지원_패키지_mqnpir.webp',
    price: 4500,
    thumbnailDirection: ThumbnailDirection.VERTICAL,
    items: [
      { name: '크리스탈', amount: 180 },
      { name: 'DESIREE', amount: 1, iType: ShopSaleItemType.CHARACTER },
      { name: '스피릿 보우', amount: 1 },
    ],
  },
  {
    name: '크리스탈 트리 재배 키트',
    category: '스타트업',
    thumbnail:
      'https://res.cloudinary.com/dqihpypxi/image/upload/v1739771948/resonance/shop/special/startup_크리스탈_트리_재배_키트_gwvwai.webp',
    price: 7500,
    thumbnailDirection: ThumbnailDirection.VERTICAL,
    desc: '구매 시 재배키트의 30일 사용권을 받을 수 있습니다. 직행 서비스 매일 무료 서비스 횟수 +2, 직행속도 +30 KM/H, 일일 좋아요 횟수 +1',
    items: [
      { name: '크리스탈', amount: 300, earnType: SaleItemEarnType.DIRECT },
      { name: '크리스탈', amount: 90, earnType: SaleItemEarnType.DAILY_LOGIN },
      { name: '선인장 에너지 사탕', amount: 1, earnType: SaleItemEarnType.DAILY_LOGIN },
      { name: '피로 회복 사탕', amount: 1, earnType: SaleItemEarnType.DAILY_LOGIN },
    ],
  },
  {
    name: '호화 스타트업 자금 패키지',
    category: '스타트업',
    thumbnail:
      'https://res.cloudinary.com/dqihpypxi/image/upload/v1739771948/resonance/shop/special/startup_호화_스타트업_자금_패키지_ted3w2.webp',
    price: 17000,
    thumbnailDirection: ThumbnailDirection.VERTICAL,
    items: [
      { name: '크리스탈', amount: 680 },
      { name: '철도연맹 코인', amount: 8000000 },
    ],
  },
  {
    name: 'SR 승무원 선택 패키지',
    category: '모집',
    thumbnail:
      'https://res.cloudinary.com/dqihpypxi/image/upload/v1739771948/resonance/shop/special/모집_SR_승무원_선택_패키지_xa646h.webp',
    price: 17000,
    thumbnailDirection: ThumbnailDirection.VERTICAL,
    items: [
      { name: '크리스탈', amount: 680 },
      { name: '미트닉 프로토콜', amount: 1 },
    ],
  },
  {
    name: 'SSR 승무원 선택 패키지',
    category: '모집',
    thumbnail:
      'https://res.cloudinary.com/dqihpypxi/image/upload/v1739771948/resonance/shop/special/모집_SSR_승무원_선택_패키지_jiemaq.webp',
    price: 75000,
    thumbnailDirection: ThumbnailDirection.VERTICAL,
    items: [
      { name: '크리스탈', amount: 3280 },
      { name: '안티키테라 프로토콜', amount: 1 },
    ],
  },
  {
    name: '이중 분열 승무원 모집 패키지',
    category: '모집',
    thumbnail:
      'https://res.cloudinary.com/dqihpypxi/image/upload/v1739771948/resonance/shop/special/모집__이중_분열__승무원_모집_패키지_xzt5mf.webp',
    price: 39000,
    thumbnailDirection: ThumbnailDirection.VERTICAL,
    items: [
      { name: '크리스탈', amount: 1680 },
      { name: '라플라스 프로토콜', amount: 10 },
    ],
  },
  {
    name: '취중고백 승무원 이력서 패키지',
    category: '모집',
    thumbnail:
      'https://res.cloudinary.com/dqihpypxi/image/upload/v1739771948/resonance/shop/special/모집__취중고백__승무원_이력서_패키지_thfep4.webp',
    price: 66000,
    thumbnailDirection: ThumbnailDirection.VERTICAL,
    items: [
      { name: '크리스탈', amount: 2880 },
      { name: '아리나의 보충 이력서', amount: 1 },
    ],
  },
  {
    name: '월간 승무원 모집 패키지',
    category: '모집',
    thumbnail:
      'https://res.cloudinary.com/dqihpypxi/image/upload/v1739771948/resonance/shop/special/모집_월간_승무원_모집_패키지_rywkh6.webp',
    price: 39000,
    thumbnailDirection: ThumbnailDirection.VERTICAL,
    items: [
      { name: '크리스탈', amount: 1680 },
      { name: '라플라스 프로토콜', amount: 10 },
    ],
  },
  {
    name: '주간 모집 패키지',
    category: '모집',
    thumbnail:
      'https://res.cloudinary.com/dqihpypxi/image/upload/v1739771948/resonance/shop/special/모집_주간_모집_패키지_ymofv2.webp',
    price: 1500,
    thumbnailDirection: ThumbnailDirection.VERTICAL,
    items: [
      { name: '라플라스 프로토콜', amount: 1 },
      { name: '전투 메모리(8Ti)', amount: 1 },
      { name: '자동 관측 필름', amount: 1 },
    ],
  },
  {
    name: '선인장 보충 패키지 1',
    category: '아이템',
    thumbnail:
      'https://res.cloudinary.com/dqihpypxi/image/upload/v1739771948/resonance/shop/special/아이템_선인장_보충_패키지_1_jz6bra.webp',
    price: 7500,
    thumbnailDirection: ThumbnailDirection.VERTICAL,
    items: [
      { name: '크리스탈', amount: 300 },
      { name: '선인장 에너지 풍선껌', amount: 6 },
    ],
  },
  {
    name: '선인장 보충 패키지 2',
    category: '아이템',
    thumbnail:
      'https://res.cloudinary.com/dqihpypxi/image/upload/v1739771948/resonance/shop/special/아이템_선인장_보충_패키지_2_hpzy6z.webp',
    price: 17000,
    thumbnailDirection: ThumbnailDirection.VERTICAL,
    items: [
      { name: '크리스탈', amount: 680 },
      { name: '선인장 에너지 팝캔디', amount: 8 },
    ],
  },
  {
    name: '월간 SSR 장비 선택 패키지',
    category: '아이템',
    thumbnail:
      'https://res.cloudinary.com/dqihpypxi/image/upload/v1739771948/resonance/shop/special/아이템_월간_SSR_장비_선택_패키지_d2wibi.webp',
    price: 17000,
    thumbnailDirection: ThumbnailDirection.VERTICAL,
    items: [
      { name: '크리스탈', amount: 680 },
      { name: 'SSR 선택 장비함', amount: 1 },
      { name: '성운상 물질(8Ti)', amount: 100 },
    ],
  },
  {
    name: '월간 승무원 육성 패키지',
    category: '아이템',
    thumbnail:
      'https://res.cloudinary.com/dqihpypxi/image/upload/v1739771948/resonance/shop/special/아이템_월간_승무원_육성_패키지_zz4i4d.webp',
    price: 23000,
    thumbnailDirection: ThumbnailDirection.VERTICAL,
    items: [
      { name: '크리스탈', amount: 680 },
      { name: '자동 관측 필름', amount: 80 },
    ],
  },
  {
    name: '월간 자동관측 특선 패키지',
    category: '아이템',
    thumbnail:
      'https://res.cloudinary.com/dqihpypxi/image/upload/v1739771948/resonance/shop/special/아이템_월간_자동관측_특선_패키지_ymxd6t.webp',
    price: 39000,
    thumbnailDirection: ThumbnailDirection.VERTICAL,
    items: [
      { name: '크리스탈', amount: 1680 },
      { name: '자동 붕괴 프로토콜', amount: 5 },
      { name: '자동 관측 필름', amount: 200 },
    ],
  },
  {
    name: '월간 자동관측 패키지',
    category: '아이템',
    thumbnail:
      'https://res.cloudinary.com/dqihpypxi/image/upload/v1739771948/resonance/shop/special/아이템_월간_자동관측_패키지_mrd9ex.webp',
    price: 17000,
    thumbnailDirection: ThumbnailDirection.VERTICAL,
    items: [
      { name: '크리스탈', amount: 680 },
      { name: '자동 관측 필름', amount: 80 },
    ],
  },
  {
    name: '월간 장비 강화 패키지',
    category: '아이템',
    thumbnail:
      'https://res.cloudinary.com/dqihpypxi/image/upload/v1739771948/resonance/shop/special/아이템_월간_장비_강화_패키지_two0yv.webp',
    price: 30000,
    thumbnailDirection: ThumbnailDirection.VERTICAL,
    items: [
      { name: '크리스탈', amount: 1280 },
      { name: '성운상 물질(8Ti)', amount: 100 },
      { name: '자동 관측 필름', amount: 100 },
    ],
  },
  {
    name: '이클립스의 거울 패키지',
    category: '아이템',
    thumbnail:
      'https://res.cloudinary.com/dqihpypxi/image/upload/v1739771948/resonance/shop/special/아이템_이클립스의_거울_패키지_ayekd3.webp',
    price: 7500,
    thumbnailDirection: ThumbnailDirection.VERTICAL,
    items: [
      { name: '크리스탈', amount: 300 },
      { name: '이클립스의 거울', amount: 1 },
    ],
  },
  {
    name: '주간 성운상 물질 패키지',
    category: '아이템',
    thumbnail:
      'https://res.cloudinary.com/dqihpypxi/image/upload/v1739771948/resonance/shop/special/아이템_주간_성운상_물질_패키지_jmcpld.webp',
    price: 7500,
    thumbnailDirection: ThumbnailDirection.VERTICAL,
    items: [
      { name: '크리스탈', amount: 300 },
      { name: '성운상 물질(8Ti)', amount: 50 },
    ],
  },
  {
    name: '주간 자동관측 패키지',
    category: '아이템',
    thumbnail:
      'https://res.cloudinary.com/dqihpypxi/image/upload/v1739771948/resonance/shop/special/아이템_주간_자동관측_패키지_xoxucd.webp',
    price: 7500,
    thumbnailDirection: ThumbnailDirection.VERTICAL,
    items: [
      { name: '크리스탈', amount: 300 },
      { name: '자동 관측 필름', amount: 30 },
    ],
  },
  {
    name: '피로 회복 패키지 1',
    category: '아이템',
    thumbnail:
      'https://res.cloudinary.com/dqihpypxi/image/upload/v1739771948/resonance/shop/special/아이템_피로_회복_패키지_1_f5z8k3.webp',
    price: 7500,
    thumbnailDirection: ThumbnailDirection.VERTICAL,
    items: [
      { name: '크리스탈', amount: 300 },
      { name: '피로 회복 풍선껌', amount: 15 },
    ],
  },
  {
    name: '피로 회복 패키지 2',
    category: '아이템',
    thumbnail:
      'https://res.cloudinary.com/dqihpypxi/image/upload/v1739771948/resonance/shop/special/아이템_피로_회복_패키지_2_x1aaee.webp',
    price: 17000,
    thumbnailDirection: ThumbnailDirection.VERTICAL,
    items: [
      { name: '크리스탈', amount: 680 },
      { name: '피로 회복 팝캔디', amount: 5 },
    ],
  },
  {
    name: '개인 창고 확장 패키지 1',
    category: '지원',
    thumbnail:
      'https://res.cloudinary.com/dqihpypxi/image/upload/v1739771948/resonance/shop/special/지원_개인_창고_확장_패키지_1_ojaqiv.webp',
    price: 4500,
    thumbnailDirection: ThumbnailDirection.VERTICAL,
    items: [
      { name: '크리스탈', amount: 180 },
      { name: '창고 확장 허가증', amount: 1 },
    ],
  },
  {
    name: '개인 창고 확장 패키지 2',
    category: '지원',
    thumbnail:
      'https://res.cloudinary.com/dqihpypxi/image/upload/v1739771948/resonance/shop/special/지원_개인_창고_확장_패키지_2_bnh7qf.webp',
    price: 23000,
    thumbnailDirection: ThumbnailDirection.VERTICAL,
    items: [
      { name: '크리스탈', amount: 980 },
      { name: '창고 확장 허가증', amount: 5 },
      { name: '철도연맹 코인', amount: 5000000 },
    ],
  },
  {
    name: '드론 지원 패키지',
    category: '지원',
    thumbnail:
      'https://res.cloudinary.com/dqihpypxi/image/upload/v1739771948/resonance/shop/special/지원_드론_지원_패키지_zgabmy.webp',
    price: 17000,
    thumbnailDirection: ThumbnailDirection.VERTICAL,
    items: [
      { name: '크리스탈', amount: 680 },
      { name: '운송 드론 진열 797', amount: 1 },
    ],
  },
  {
    name: '월간 상회 지원 패키지',
    category: '지원',
    thumbnail:
      'https://res.cloudinary.com/dqihpypxi/image/upload/v1739771948/resonance/shop/special/지원_월간_상회_지원_패키지_cozwip.webp',
    price: 17000,
    thumbnailDirection: ThumbnailDirection.VERTICAL,
    items: [
      { name: '크리스탈', amount: 680 },
      { name: '구매 요청서', amount: 60 },
      { name: '피로 회복 팝캔디', amount: 3 },
      { name: '피로 동맹 휘장', amount: 3 },
      { name: '흑월 구매권', amount: 2 },
    ],
  },
  {
    name: '이상 공간 적재 패키지',
    category: '지원',
    thumbnail:
      'https://res.cloudinary.com/dqihpypxi/image/upload/v1739771948/resonance/shop/special/지원_이상_공간_적재_패키지_crmztt.webp',
    price: 17000,
    thumbnailDirection: ThumbnailDirection.VERTICAL,
    items: [
      { name: '크리스탈', amount: 680 },
      { name: '이상 공간 발생기', amount: 1 },
      { name: '아니타 걸이식 배터리팩', amount: 1 },
    ],
  },
  {
    name: '전력 레벨업 패키지',
    category: '지원',
    thumbnail:
      'https://res.cloudinary.com/dqihpypxi/image/upload/v1739771948/resonance/shop/special/지원_전력_레벨업_패키지_ifrqmk.webp',
    price: 7500,
    thumbnailDirection: ThumbnailDirection.VERTICAL,
    items: [
      { name: '크리스탈', amount: 300 },
      { name: '베툴라 핵', amount: 2 },
      { name: '순금 부품', amount: 2 },
      { name: '베툴라 분비선', amount: 1500 },
      { name: '열화석', amount: 150 },
      { name: '철도연맹 코인', amount: 1500000 },
    ],
  },
  {
    name: '주간 상회 지원 패키지',
    category: '지원',
    thumbnail:
      'https://res.cloudinary.com/dqihpypxi/image/upload/v1739771948/resonance/shop/special/지원_주간_상회_지원_패키지_dve8ij.webp',
    price: 7500,
    thumbnailDirection: ThumbnailDirection.VERTICAL,
    items: [
      { name: '크리스탈', amount: 300 },
      { name: '구매 요청서', amount: 30 },
      { name: '피로 회복 풍선껌', amount: 10 },
      { name: '재협상 신청서', amount: 10 },
      { name: '피쉬 동맹 휘장', amount: 1 },
      { name: '흑월 구매권', amount: 1 },
      { name: '진저 릴리 향수', amount: 3 },
    ],
  },
  {
    name: '파천의 드릴 비트 패키지',
    category: '지원',
    thumbnail:
      'https://res.cloudinary.com/dqihpypxi/image/upload/v1739771948/resonance/shop/special/지원_파천의_드릴_비트_패키지_zdepsg.webp',
    price: 66000,
    thumbnailDirection: ThumbnailDirection.VERTICAL,
    items: [
      { name: '크리스탈', amount: 2880 },
      { name: '파천의 드릴 비트', amount: 1 },
      { name: '특수 무기 개조 특허', amount: 10 },
      { name: '아니타 걸이식 배터리팩', amount: 1 },
    ],
  },
]

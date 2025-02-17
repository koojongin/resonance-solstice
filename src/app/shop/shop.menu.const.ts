import { SaleItemEarnType, ShopMenu, ShopMenuName, ThumbnailDirection } from '@/app/shop/shop.enum'

export const saleItemsRecommendation = [
  {
    name: '크리스탈 트리 재배 키트',
    thumbnail:
      'https://res.cloudinary.com/dqihpypxi/image/upload/v1739760064/resonance/shop/%ED%81%AC%EB%A6%AC%EC%8A%A4%ED%83%88_%ED%8A%B8%EB%A6%AC_%EC%9E%AC%EB%B0%B0_%ED%82%A4%ED%8A%B8_j80ulh.webp',
    price: 7500,
    thumbnailDirection: ThumbnailDirection.HORIZONTAL,
    items: [
      { name: '크리스탈', amount: 300, earnType: SaleItemEarnType.DIRECT },
      { name: '크리스탈', amount: 90, earnType: SaleItemEarnType.DAILY_LOGIN },
      { name: '선인장 에너지 사탕', amount: 1, earnType: SaleItemEarnType.DAILY_LOGIN },
    ],
  },
  {
    name: '눈부신 순간',
    thumbnail:
      'https://res.cloudinary.com/dqihpypxi/image/upload/v1739760064/resonance/shop/%EB%88%88%EB%B6%80%EC%8B%A0_%EC%88%9C%EA%B0%84_drju3b.webp',
    price: 17000,
    thumbnailDirection: ThumbnailDirection.HORIZONTAL,
    items: [
      { name: '눈부신 순간', amount: 1 },
      { name: '크리스탈', amount: 680 },
    ],
  },
  {
    name: '꿈의 여정 - 개척 수첩',
    thumbnail:
      'https://res.cloudinary.com/dqihpypxi/image/upload/v1739760064/resonance/shop/%EA%BF%88%EC%9D%98_%EC%97%AC%EC%A0%95-%EB%8B%AC%EC%BD%A4%ED%95%9C_%EA%BF%88%EC%9D%98_%ED%8F%AC%ED%9A%8D%EC%9E%90_vwqu2u.webp',
    price: 17000,
    thumbnailDirection: ThumbnailDirection.HORIZONTAL,
    items: [
      { name: '크리스탈', amount: 680, earnType: SaleItemEarnType.DIRECT },
      { name: '라플라스 프로토콜', amount: 5, earnType: SaleItemEarnType.DIRECT },
      { name: '달콤한 꿈의 포획자(스킨)', amount: 1, earnType: SaleItemEarnType.DIRECT },
      { name: '선인장 에너지 풍선껌', amount: 6, earnType: SaleItemEarnType.DIRECT },
      { name: '피로 회복 풍선껌', amount: 6, earnType: SaleItemEarnType.DIRECT },
    ],
  },
  {
    name: '꿈의 여정 - 무한 수첩',
    thumbnail:
      'https://res.cloudinary.com/dqihpypxi/image/upload/v1739760064/resonance/shop/%EA%BF%88%EC%9D%98_%EC%97%AC%EC%A0%95-%EB%8B%AC%EC%BD%A4%ED%95%9C_%EA%BF%88%EC%9D%98_%ED%8F%AC%ED%9A%8D%EC%9E%90_vwqu2u.webp',
    price: 30000,
    thumbnailDirection: ThumbnailDirection.HORIZONTAL,
    items: [
      { name: '크리스탈', amount: 680, earnType: SaleItemEarnType.DIRECT },
      { name: '라플라스 프로토콜', amount: 5, earnType: SaleItemEarnType.DIRECT },
      { name: '달콤한 꿈의 포획자(스킨)', amount: 1, earnType: SaleItemEarnType.DIRECT },
      { name: '선인장 에너지 풍선껌', amount: 6, earnType: SaleItemEarnType.DIRECT },
      { name: '피로 회복 풍선껌', amount: 6, earnType: SaleItemEarnType.DIRECT },

      { name: '아리나 테마 열차 스킨', amount: 1, earnType: SaleItemEarnType.DIRECT },
      { name: '힐링 타임(캐릭터 아바타)', amount: 1, earnType: SaleItemEarnType.DIRECT },
      { name: '힐링 타임(가구)', amount: 1, earnType: SaleItemEarnType.DIRECT },
      { name: '샴고양이의 외출 가방', amount: 1, earnType: SaleItemEarnType.DIRECT },
      { name: '자동 붕괴 필름-공격력 증가', amount: 1, earnType: SaleItemEarnType.DIRECT },
      { name: '피쉬 동맹 휘장', amount: 4, earnType: SaleItemEarnType.DIRECT },
      { name: '다이나소 연구 외투(의상-세트)', amount: 1, earnType: SaleItemEarnType.DIRECT },
      { name: '다이나소 스컬(의상-머리장식)', amount: 1, earnType: SaleItemEarnType.DIRECT },
      { name: '다이나소 연구 신발(의상-신발)', amount: 1, earnType: SaleItemEarnType.DIRECT },
      { name: '우표(100)', amount: 10, earnType: SaleItemEarnType.DIRECT },
      { name: '선인장 에너지 풍선껌', amount: 5, earnType: SaleItemEarnType.DIRECT },
    ],
  },
  {
    name: '베어랜드',
    thumbnail:
      'https://res.cloudinary.com/dqihpypxi/image/upload/v1739760065/resonance/shop/%EB%B2%A0%EC%96%B4%EB%9E%9C%EB%93%9C_uptii4.webp',
    price: 30000,
    thumbnailDirection: ThumbnailDirection.HORIZONTAL,
    items: [
      { name: '베어랜드', amount: 1 },
      { name: '크리스탈', amount: 1280 },
    ],
  },
]

export const saleItemsCrystal = [
  {
    name: '60 크리스탈',
    thumbnail:
      'https://res.cloudinary.com/dqihpypxi/image/upload/v1739765328/resonance/shop/60crystal_jahiiq.webp',
    price: 1500,
    thumbnailDirection: ThumbnailDirection.HORIZONTAL,
    items: [
      { name: '크리스탈', amount: 60 },
      { name: '크리스탈', amount: 60, earnType: SaleItemEarnType.FIRST_PURCHASE },
    ],
  },
  {
    name: '300 크리스탈',
    thumbnail:
      'https://res.cloudinary.com/dqihpypxi/image/upload/v1739765328/resonance/shop/300cry_ayn2lm.webp',
    price: 7500,
    thumbnailDirection: ThumbnailDirection.HORIZONTAL,
    items: [
      { name: '크리스탈', amount: 300 },
      { name: '크리스탈', amount: 300, earnType: SaleItemEarnType.FIRST_PURCHASE },
    ],
  },
  {
    name: '980 크리스탈',
    thumbnail:
      'https://res.cloudinary.com/dqihpypxi/image/upload/v1739765328/resonance/shop/980cry_vwhrsz.webp',
    price: 23000,
    thumbnailDirection: ThumbnailDirection.HORIZONTAL,
    items: [
      { name: '크리스탈', amount: 980 },
      { name: '크리스탈', amount: 980, earnType: SaleItemEarnType.FIRST_PURCHASE },
    ],
  },
  {
    name: '1980 크리스탈',
    thumbnail:
      'https://res.cloudinary.com/dqihpypxi/image/upload/v1739765328/resonance/shop/1980cry_m8hzbs.webp',
    price: 45000,
    thumbnailDirection: ThumbnailDirection.HORIZONTAL,
    items: [
      { name: '크리스탈', amount: 1980 },
      { name: '크리스탈', amount: 1980, earnType: SaleItemEarnType.FIRST_PURCHASE },
    ],
  },
  {
    name: '3280 크리스탈',
    thumbnail:
      'https://res.cloudinary.com/dqihpypxi/image/upload/v1739765328/resonance/shop/3280cry_gzcawl.webp',
    price: 75000,
    thumbnailDirection: ThumbnailDirection.HORIZONTAL,
    items: [
      { name: '크리스탈', amount: 3280 },
      { name: '크리스탈', amount: 3280, earnType: SaleItemEarnType.FIRST_PURCHASE },
    ],
  },
  {
    name: '4880 크리스탈',
    thumbnail:
      'https://res.cloudinary.com/dqihpypxi/image/upload/v1739765328/resonance/shop/4880cry_bfspse.webp',
    price: 110000,
    thumbnailDirection: ThumbnailDirection.HORIZONTAL,
    items: [
      { name: '크리스탈', amount: 4880 },
      { name: '크리스탈', amount: 4880, earnType: SaleItemEarnType.FIRST_PURCHASE },
    ],
  },
  {
    name: '6480 크리스탈',
    thumbnail:
      'https://res.cloudinary.com/dqihpypxi/image/upload/v1739765328/resonance/shop/6480cry_msdlej.webp',
    price: 149000,
    thumbnailDirection: ThumbnailDirection.HORIZONTAL,
    items: [
      { name: '크리스탈', amount: 6480 },
      { name: '크리스탈', amount: 6480, earnType: SaleItemEarnType.FIRST_PURCHASE },
    ],
  },
]

export const saleItemsSpecialPackage = [
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
  },
  {
    name: '열차장 취임 육성 패키지',
    category: '스타트업',
    thumbnail:
      'https://res.cloudinary.com/dqihpypxi/image/upload/v1739771948/resonance/shop/special/startup_열차장_취임_육성_패키지_lu6qyi.webp',
    price: 17000,
    thumbnailDirection: ThumbnailDirection.VERTICAL,
  },
  {
    name: '콜룸바 승무원 지원 패키지',
    category: '스타트업',
    thumbnail:
      'https://res.cloudinary.com/dqihpypxi/image/upload/v1739771948/resonance/shop/special/startup_콜룸바_승무원_지원_패키지_mqnpir.webp',
    price: 4500,
    thumbnailDirection: ThumbnailDirection.VERTICAL,
  },
  {
    name: '크리스탈 트리 재배 키트',
    category: '스타트업',
    thumbnail:
      'https://res.cloudinary.com/dqihpypxi/image/upload/v1739771948/resonance/shop/special/startup_크리스탈_트리_재배_키트_gwvwai.webp',
    price: 7500,
    thumbnailDirection: ThumbnailDirection.VERTICAL,
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
  },
  {
    name: 'SSR 승무원 선택 패키지',
    category: '모집',
    thumbnail:
      'https://res.cloudinary.com/dqihpypxi/image/upload/v1739771948/resonance/shop/special/모집_SSR_승무원_선택_패키지_jiemaq.webp',
    price: 75000,
    thumbnailDirection: ThumbnailDirection.VERTICAL,
  },
  {
    name: '이중 분열 승무원 모집 패키지',
    category: '모집',
    thumbnail:
      'https://res.cloudinary.com/dqihpypxi/image/upload/v1739771948/resonance/shop/special/모집__이중_분열__승무원_모집_패키지_xzt5mf.webp',
    price: 39000,
    thumbnailDirection: ThumbnailDirection.VERTICAL,
  },
  {
    name: '취중고백 승무원 이력서 패키지',
    category: '모집',
    thumbnail:
      'https://res.cloudinary.com/dqihpypxi/image/upload/v1739771948/resonance/shop/special/모집__취중고백__승무원_이력서_패키지_thfep4.webp',
    price: 66000,
    thumbnailDirection: ThumbnailDirection.VERTICAL,
  },
  {
    name: '월간 승무원 모집 패키지',
    category: '모집',
    thumbnail:
      'https://res.cloudinary.com/dqihpypxi/image/upload/v1739771948/resonance/shop/special/모집_월간_승무원_모집_패키지_rywkh6.webp',
    price: 39000,
    thumbnailDirection: ThumbnailDirection.VERTICAL,
  },
  {
    name: '주간 모집 패키지',
    category: '모집',
    thumbnail:
      'https://res.cloudinary.com/dqihpypxi/image/upload/v1739771948/resonance/shop/special/모집_주간_모집_패키지_ymofv2.webp',
    price: 1500,
    thumbnailDirection: ThumbnailDirection.VERTICAL,
  },
  {
    name: '선인장 보충 패키지 1',
    category: '아이템',
    thumbnail:
      'https://res.cloudinary.com/dqihpypxi/image/upload/v1739771948/resonance/shop/special/아이템_선인장_보충_패키지_1_jz6bra.webp',
    price: 7500,
    thumbnailDirection: ThumbnailDirection.VERTICAL,
  },
  {
    name: '선인장 보충 패키지 2',
    category: '아이템',
    thumbnail:
      'https://res.cloudinary.com/dqihpypxi/image/upload/v1739771948/resonance/shop/special/아이템_선인장_보충_패키지_2_hpzy6z.webp',
    price: 17000,
    thumbnailDirection: ThumbnailDirection.VERTICAL,
  },
  {
    name: '월간 SSR 장비 선택 패키지',
    category: '아이템',
    thumbnail:
      'https://res.cloudinary.com/dqihpypxi/image/upload/v1739771948/resonance/shop/special/아이템_월간_SSR_장비_선택_패키지_d2wibi.webp',
    price: 17000,
    thumbnailDirection: ThumbnailDirection.VERTICAL,
  },
  {
    name: '월간 승무원 육성 패키지',
    category: '아이템',
    thumbnail:
      'https://res.cloudinary.com/dqihpypxi/image/upload/v1739771948/resonance/shop/special/아이템_월간_승무원_육성_패키지_zz4i4d.webp',
    price: 23000,
    thumbnailDirection: ThumbnailDirection.VERTICAL,
  },
  {
    name: '월간 자동관측 특선 패키지',
    category: '아이템',
    thumbnail:
      'https://res.cloudinary.com/dqihpypxi/image/upload/v1739771948/resonance/shop/special/아이템_월간_자동관측_특선_패키지_ymxd6t.webp',
    price: 39000,
    thumbnailDirection: ThumbnailDirection.VERTICAL,
  },
  {
    name: '월간 자동관측 패키지',
    category: '아이템',
    thumbnail:
      'https://res.cloudinary.com/dqihpypxi/image/upload/v1739771948/resonance/shop/special/아이템_월간_자동관측_패키지_mrd9ex.webp',
    price: 17000,
    thumbnailDirection: ThumbnailDirection.VERTICAL,
  },
  {
    name: '월간 장비 강화 패키지',
    category: '아이템',
    thumbnail:
      'https://res.cloudinary.com/dqihpypxi/image/upload/v1739771948/resonance/shop/special/아이템_월간_장비_강화_패키지_two0yv.webp',
    price: 30000,
    thumbnailDirection: ThumbnailDirection.VERTICAL,
  },
  {
    name: '이클립스의 거울 패키지',
    category: '아이템',
    thumbnail:
      'https://res.cloudinary.com/dqihpypxi/image/upload/v1739771948/resonance/shop/special/아이템_이클립스의_거울_패키지_ayekd3.webp',
    price: 7500,
    thumbnailDirection: ThumbnailDirection.VERTICAL,
  },
  {
    name: '주간 성운상 물질 패키지',
    category: '아이템',
    thumbnail:
      'https://res.cloudinary.com/dqihpypxi/image/upload/v1739771948/resonance/shop/special/아이템_주간_성운상_물질_패키지_jmcpld.webp',
    price: 7500,
    thumbnailDirection: ThumbnailDirection.VERTICAL,
  },
  {
    name: '주간 자동관측 패키지',
    category: '아이템',
    thumbnail:
      'https://res.cloudinary.com/dqihpypxi/image/upload/v1739771948/resonance/shop/special/아이템_주간_자동관측_패키지_xoxucd.webp',
    price: 7500,
    thumbnailDirection: ThumbnailDirection.VERTICAL,
  },
  {
    name: '피로 회복 패키지 1',
    category: '아이템',
    thumbnail:
      'https://res.cloudinary.com/dqihpypxi/image/upload/v1739771948/resonance/shop/special/아이템_피로_회복_패키지_1_f5z8k3.webp',
    price: 7500,
    thumbnailDirection: ThumbnailDirection.VERTICAL,
  },
  {
    name: '피로 회복 패키지 2',
    category: '아이템',
    thumbnail:
      'https://res.cloudinary.com/dqihpypxi/image/upload/v1739771948/resonance/shop/special/아이템_피로_회복_패키지_2_x1aaee.webp',
    price: 17000,
    thumbnailDirection: ThumbnailDirection.VERTICAL,
  },
  {
    name: '개인 창고 확장 패키지 1',
    category: '지원',
    thumbnail:
      'https://res.cloudinary.com/dqihpypxi/image/upload/v1739771948/resonance/shop/special/지원_개인_창고_확장_패키지_1_ojaqiv.webp',
    price: 4500,
    thumbnailDirection: ThumbnailDirection.VERTICAL,
  },
  {
    name: '개인 창고 확장 패키지 2',
    category: '지원',
    thumbnail:
      'https://res.cloudinary.com/dqihpypxi/image/upload/v1739771948/resonance/shop/special/지원_개인_창고_확장_패키지_2_bnh7qf.webp',
    price: 23000,
    thumbnailDirection: ThumbnailDirection.VERTICAL,
  },
  {
    name: '드론 지원 패키지',
    category: '지원',
    thumbnail:
      'https://res.cloudinary.com/dqihpypxi/image/upload/v1739771948/resonance/shop/special/지원_드론_지원_패키지_zgabmy.webp',
    price: 17000,
    thumbnailDirection: ThumbnailDirection.VERTICAL,
  },
  {
    name: '월간 상회 지원 패키지',
    category: '지원',
    thumbnail:
      'https://res.cloudinary.com/dqihpypxi/image/upload/v1739771948/resonance/shop/special/지원_월간_상회_지원_패키지_cozwip.webp',
    price: 17000,
    thumbnailDirection: ThumbnailDirection.VERTICAL,
  },
  {
    name: '이상 공간 적재 패키지',
    category: '지원',
    thumbnail:
      'https://res.cloudinary.com/dqihpypxi/image/upload/v1739771948/resonance/shop/special/지원_이상_공간_적재_패키지_crmztt.webp',
    price: 17000,
    thumbnailDirection: ThumbnailDirection.VERTICAL,
  },
  {
    name: '전력 레벨업 패키지',
    category: '지원',
    thumbnail:
      'https://res.cloudinary.com/dqihpypxi/image/upload/v1739771948/resonance/shop/special/지원_전력_레벨업_패키지_ifrqmk.webp',
    price: 7500,
    thumbnailDirection: ThumbnailDirection.VERTICAL,
  },
  {
    name: '주간 상회 지원 패키지',
    category: '지원',
    thumbnail:
      'https://res.cloudinary.com/dqihpypxi/image/upload/v1739771948/resonance/shop/special/지원_주간_상회_지원_패키지_dve8ij.webp',
    price: 7500,
    thumbnailDirection: ThumbnailDirection.VERTICAL,
  },
  {
    name: '파천의 드릴 비트 패키지',
    category: '지원',
    thumbnail:
      'https://res.cloudinary.com/dqihpypxi/image/upload/v1739771948/resonance/shop/special/지원_파천의_드릴_비트_패키지_zdepsg.webp',
    price: 66000,
    thumbnailDirection: ThumbnailDirection.VERTICAL,
  },
]

export const saleItemsLimitedSkin = [
  {
    name: '비밀 휴가',
    category: '스킨',
    thumbnail:
      'https://res.cloudinary.com/dqihpypxi/image/upload/v1739787720/resonance/shop/skin/스킨_비밀_휴가_neekou.webp',
    price: 17000,
    thumbnailDirection: ThumbnailDirection.VERTICAL,
  },
  {
    name: '푸른 하늘의 속삭임',
    category: '스킨',
    thumbnail:
      'https://res.cloudinary.com/dqihpypxi/image/upload/v1739787720/resonance/shop/skin/스킨_푸른_하늘의_속삭임_sbpeiz.webp',
    price: 17000,
    thumbnailDirection: ThumbnailDirection.VERTICAL,
  },
  {
    name: '오후의 마검사',
    category: '스킨',
    thumbnail:
      'https://res.cloudinary.com/dqihpypxi/image/upload/v1739787720/resonance/shop/skin/스킨_오후의_마검사_ivw8mc.webp',
    price: 17000,
    thumbnailDirection: ThumbnailDirection.VERTICAL,
  },
  {
    name: '눈부신 순간',
    category: '스킨',
    thumbnail:
      'https://res.cloudinary.com/dqihpypxi/image/upload/v1739787720/resonance/shop/skin/스킨_눈부신_순간_bhx5d1.webp',
    price: 17000,
    thumbnailDirection: ThumbnailDirection.VERTICAL,
  },
  {
    name: '베어랜드',
    category: '스킨',
    thumbnail:
      'https://res.cloudinary.com/dqihpypxi/image/upload/v1739787720/resonance/shop/skin/스킨_베어랜드_kzwoyr.webp',
    price: 30000,
    thumbnailDirection: ThumbnailDirection.VERTICAL,
  },
  {
    name: '꿈의 마법사',
    category: '스킨',
    thumbnail:
      'https://res.cloudinary.com/dqihpypxi/image/upload/v1739787720/resonance/shop/skin/스킨_꿈의_마법사_jznwf3.webp',
    price: 17000,
    thumbnailDirection: ThumbnailDirection.VERTICAL,
  },
  {
    name: '깊은 밤의 온기',
    category: '스킨',
    thumbnail:
      'https://res.cloudinary.com/dqihpypxi/image/upload/v1739787720/resonance/shop/skin/스킨_깊은_밤의_온기_uytyb6.webp',
    price: 17000,
    thumbnailDirection: ThumbnailDirection.VERTICAL,
  },
]

export const saleItemsTrainSkin = [
  {
    name: '마징가Z 무한호',
    category: '열차 외관',
    thumbnail:
      'https://res.cloudinary.com/dqihpypxi/image/upload/v1739787720/resonance/shop/skin_train/열차스킨_마징가Z_무한호_kch0ux.webp',
    price: 30000,
    thumbnailDirection: ThumbnailDirection.VERTICAL,
  },
  {
    name: '애쉬호',
    category: '열차 외관',
    thumbnail:
      'https://res.cloudinary.com/dqihpypxi/image/upload/v1739787720/resonance/shop/skin_train/열차스킨_애쉬호_ocyzbc.webp',
    price: 17000,
    thumbnailDirection: ThumbnailDirection.VERTICAL,
  },
  {
    name: '보스보로트호',
    category: '열차 외관',
    thumbnail:
      'https://res.cloudinary.com/dqihpypxi/image/upload/v1739787720/resonance/shop/skin_train/열차스킨_보스보로트호_srevn4.webp',
    price: 30000,
    thumbnailDirection: ThumbnailDirection.VERTICAL,
  },
  {
    name: '사업번창',
    category: '열차 외관',
    thumbnail:
      'https://res.cloudinary.com/dqihpypxi/image/upload/v1739787720/resonance/shop/skin_train/열차스킨_사업번창_oediet.webp',
    price: 17000,
    thumbnailDirection: ThumbnailDirection.VERTICAL,
  },
  {
    name: '흑월 익스프레스',
    category: '열차 외관',
    thumbnail:
      'https://res.cloudinary.com/dqihpypxi/image/upload/v1739787720/resonance/shop/skin_train/열차스킨_흑월_익스프레스_urowbz.webp',
    price: 17000,
    thumbnailDirection: ThumbnailDirection.VERTICAL,
  },
]

export const saleItemsCommandMarket = []

export const ALL_SALE_ITEMS = [
  ...saleItemsRecommendation,
  ...saleItemsCrystal,
  ...saleItemsSpecialPackage,
  ...saleItemsLimitedSkin,
  ...saleItemsTrainSkin,
  ...saleItemsCommandMarket,
]

export const SHOP_MENUS: ShopMenu[] = [
  { key: ShopMenuName.RECOMMENDATION, name: '특별 추천', saleItems: saleItemsRecommendation },
  { key: ShopMenuName.CRYSTAL, name: '크리스탈', saleItems: saleItemsCrystal },
  { key: ShopMenuName.SPECIAL_PACKAGE, name: '특혜 패키지', saleItems: saleItemsSpecialPackage },
  { key: ShopMenuName.LIMITED_SKIN, name: '한정 스킨', saleItems: saleItemsLimitedSkin },
  { key: ShopMenuName.TRAIN_SKIN, name: '열차 외관', saleItems: saleItemsTrainSkin },
  { key: ShopMenuName.COMMAND_MARKET, name: '본부 상점', saleItems: saleItemsCommandMarket },
]

import createKey from '@/services/key-generator'

enum RSCityType {
  CORE_CITY = '핵심 도시',
}

export default function MapNamedPage() {
  const list = [
    {
      name: '청명 데이터 센터',
      type: 'YELLOW',
    },
    { name: '자유 무역항-7', type: 'YELLOW' },
    { name: '아니타 군수공장', type: 'BLUE' },
    { name: '슈그리스시', type: 'YELLOW' },
    { name: '철도연맹 초소', type: 'BLUE' },
    {
      desc: '슈그리 시티라는 이름의 오래된 광산은 서부 대륙에서 가장 큰 인공 광산입니다. 채굴과 거친 가공을 통합하고 레일용 특수 강철을 생산하는 것으로 유명합니다.',
      recommendationLevel: 15,
      name: '맨더 광산',
      thumbnail:
        'https://patchwiki.biligame.com/images/resonance/thumb/7/7b/jx9iwc9yuoxnxvjw7cknsdoryrbwplp.png/500px-%E6%9B%BC%E5%BE%B7%E7%9F%BF%E5%9C%BA%E7%95%8C%E9%9D%A2.png',
      type: 'YELLOW',
      퇴치: [],
      현상금: [],
      뱃지: [],
      거래소: [
        { name: '멘더 공구함', isSpecialty: true },
        { name: '레일용 특수 강재' },
        { name: '황동' },
        { name: '철근 콘크리트 침묵' },
        { name: '건축자재' },
        { name: '철광석' },
        { name: '석재' },
        { name: '모래와 자갈' },
      ],
    },
    { name: '아니타 발사 센터', type: 'YELLOW' },
    { name: '아니타 에너지 연구소', type: 'GREEN' },
    { name: '원성대교', type: 'RED' },
    { name: '회류 타워', type: 'GREEN' },
    { name: '케이프시', type: 'YELLOW' },
    { name: '그로누시', type: 'YELLOW' },
    { name: '골든 원더랜드', type: 'GREEN' },
    { name: '황원역', type: 'RED' },
    { name: '운수교 기지', type: 'BLUE' },
    { name: '서우역', type: 'BLUE' },
  ]
  return (
    <div>
      {list.map((map) => {
        return <div key={createKey()}>{map.name}</div>
      })}
    </div>
  )
}

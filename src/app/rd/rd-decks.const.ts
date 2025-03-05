import {
  ACHIWA,
  AKIRA,
  AOBA,
  ARCANA,
  ARINA,
  CAROLINE,
  CHARLOTTE,
  CONNOR,
  DUSTIN,
  ELIOT,
  FENIA,
  FLAN,
  GANYA,
  ILONA,
  JERBOA,
  JOSHUA,
  KALEYA,
  KAREN,
  KATAS,
  LIVIA,
  MARGIELA,
  NAYUTA,
  NICOLA,
  PRIMING,
  RACHEL,
  RAZIEL_THE_REMINISCE,
  RINA_F,
  SHIZURU,
  STELLA,
  SUEN,
  SUMMERSHIZURU,
  TENNIE,
  VALENTINE,
  VERLAINE,
  WENSHENG,
  YEJUE,
  YER,
  YOIDUKI,
} from '@/const/character/character.const'
import { EXTERNAL_USERS, ExternalUser } from '@/const/external-users'
import { RSCharacter } from '@/const/character/character.interface'

export interface RecommendationDeck {
  id: string
  title: string
  leaderName?: string
  desc?: string
  descLink?: string
  characters: { character: RSCharacter; equipments?: string[] }[]
  owner?: ExternalUser

  autoPreset?: string
}

export const RECOMMENDATION_DECKS: RecommendationDeck[] = [
  {
    id: '1',
    title: '싼마이 페니아 인뢰덱',
    leaderName: FENIA.name,
    characters: [
      { character: FENIA },
      { character: CAROLINE },
      { character: YEJUE },
      { character: RINA_F },
      { character: KALEYA },
    ],
    desc: '장점 : 싸고 맞추기 쉬움\n단점 : 싼마이인 만큼 화력이 비교적 딸림',
    descLink: 'https://arca.live/b/resonance/128678257',
    owner: EXTERNAL_USERS['1'],
  },

  {
    id: '2',
    title: '순환 메인 페니아 인뢰덱1',
    leaderName: FENIA.name,
    characters: [
      { character: FENIA },
      { character: CAROLINE },
      { character: NAYUTA },
      { character: RINA_F },
      { character: KALEYA },
    ],
    desc: '장점 : 덱순환이 빨리 딜이 쎔\n단점 : 안정성을 포기함',
    descLink: 'https://arca.live/b/resonance/128678257',
    owner: EXTERNAL_USERS['1'],
  },

  {
    id: '3',
    title: '순환 메인 페니아 인뢰덱2',
    leaderName: FENIA.name,
    characters: [
      { character: FENIA },
      { character: CAROLINE },
      { character: STELLA },
      { character: RINA_F },
      { character: KALEYA },
    ],
    desc: '장점 : [순환 메인 페니아 인뢰덱1]보다 순환력을 조금 줄이고 안정성을 챙김, [스텔라] 궁쓰고 코스트 감소 상태로 카드 난사가 재밌음\n단점 : 카드 쓸 때 생각 잘해야함',
    descLink: 'https://arca.live/b/resonance/128678257',
    owner: EXTERNAL_USERS['1'],
  },

  {
    id: '4',
    title: '안정성 메인 페니아 인뢰덱',
    leaderName: FENIA.name,
    characters: [
      { character: FENIA },
      { character: CAROLINE },
      { character: TENNIE },
      { character: RINA_F },
      { character: KALEYA },
    ],
    desc: '장점 : 안정성과 적당한 순환력을 챙김\n단점 : 화력은 [순환 메인 페니아 인뢰덱1]보다 딸림',
    descLink: 'https://arca.live/b/resonance/128678257',
    owner: EXTERNAL_USERS['1'],
  },

  {
    id: '5',
    title: '[카타스] 화염덱',
    leaderName: KATAS.name,
    characters: [
      { character: KATAS },
      { character: KALEYA },
      { character: YOIDUKI },
      { character: ARCANA },
      { character: VALENTINE },
    ],
    desc: '장점 : [카타스]만 있으면 됨, 쌈\n단점 : 다른 화염덱으로 파생이 어려움',
    descLink: 'https://arca.live/b/resonance/128678257',
    owner: EXTERNAL_USERS['1'],
  },

  {
    id: '6',
    title: '마르기엘라덱 / 마키라덱',
    leaderName: MARGIELA.name,
    characters: [
      { character: MARGIELA },
      { character: KALEYA },
      { character: RINA_F },
      { character: ARCANA },
      { character: FENIA },
    ],
    desc: '장점 : 화력 하나는 ㅈㄴ 쎔\n단점 : 순환력이나 코스트 회복력이 부족하여 답답함 유발',
    descLink: 'https://arca.live/b/resonance/128678257',
    owner: EXTERNAL_USERS['1'],
  },

  {
    id: '7',
    title: '단일 화염 [나유타] 덱',
    leaderName: NAYUTA.name,
    characters: [
      {
        character: NAYUTA,
        equipments: ['불꽃 침식자', '시뮬레이트 스타', '해리슨 장치'],
      },
      {
        character: KALEYA,
        equipments: ['불꽃 침식자', '시뮬레이트 스타', '모노폴 마그네타'],
      },
      {
        character: VALENTINE,
        equipments: ['불꽃 침식자', '시뮬레이트 스타', '춘추합성인장'],
      },
      {
        character: RINA_F,
        equipments: ['공간 위치 측정기', '시뮬레이트 스타', '베타 세계선 박스'],
      },
      {
        character: AOBA,
        equipments: ['불꽃 침식자', '시뮬레이트 스타', '춘추합성인장'],
      },
    ],
    desc: '-',
    descLink:
      'https://wiki.biligame.com/resonance/%E5%8D%95%E9%87%91%E7%81%AB%E6%A0%B8%EF%BC%9A%E9%82%A3%E7%94%B1%E4%BB%96',
    autoPreset:
      'vVdNj9MwEP0vPgdpxh+JnSsuHBDe0h4gYiLbblqQVoGr/O7ZT6NR2aXeTUvUy9njey8xzZrJnbTd8bvr246+NZTUWrBvubNPa/rVbfLdi9ZdmOdiCeZ9F+6bZsHrPEEoAoXg4EAwwhhhSHA00QN3waAhQxFDEjZuS7EgSGisCykugAZAGIKFRa7 KjKU5FQ2ticEXPVBUFJQwQBX0eSXPgjacxcXfdsGX1pz3bDfZ90zePhzy6w8q5DA/dcrlonT8XgFLrgq1/rGwflsD/Kl78PcvqVxissWRuZ9v0X+12NKFg9vuu2yz+gN67kro4x5o9Fftc+IiEEWcR8XmIcC2inAsRc4iAESKUSs+D6GudIgptYkQh cB5Er9VcVpE6eXUTBixQQKflKRzGcKvW/gzyjiQd50WwRMqyiuFjhgLYRE4ZsdG0V글란GpmS4tIKSCcVqaElIIyfN7KXCFHmEuO+twFIE4m89DczCdHfplCxTOlL+GWeQ+CJ3fC5C6lKP+j+nyfSiiUoG9JIX416YwW0MjbUsj0nPN99Xk9R2bfx3 HpMVd6ccsLkJRe5Upv5qUQTTkyHDvMOkQDSifdIdzXf3cHWU3oDiJDzxGDU2JGpW0rncCSDiKmtq3LxMoXEZOU2BXz4qWCJsT8GJwSS2aduJSophK7OONJ/vIWxxC1l2nF7k+bt5uh3Uq/XtqDpwtL/t57+LCJPqAerA1Lb3ePAWu9/TZ+ZPlk/gY=',
  },

  {
    id: '8',
    title: '단일 냉기 [나유타] 덱',
    leaderName: NAYUTA.name,
    characters: [
      {
        character: NAYUTA,
        equipments: ['에비서레이터MK0', '시뮬레이트 스타', '해리슨 장치'],
      },
      {
        character: ELIOT,
        equipments: ['에비서레이터MK0', '시뮬레이트 스타', '춘추합성인장'],
      },
      {
        character: YER,
        equipments: ['에비서레이터MK0', '시뮬레이트 스타', '모노폴 마그네타'],
      },
      {
        character: RINA_F,
        equipments: ['에비서레이터MK0', '시뮬레이트 스타', '베타 세계선 박스'],
      },
      {
        character: AOBA,
        equipments: ['에비서레이터MK0', '시뮬레이트 스타', '춘추합성인장'],
      },
    ],
    desc: '-',
    descLink:
      'https://wiki.biligame.com/resonance/%E5%8D%95%E9%87%91%E5%86%B0%E6%A0%B8%EF%BC%9A%E9%82%A3%E7%94%B1%E4%BB%96',
    autoPreset:
      'tVdLj9sgEP4vnF2JYfwAX3uKtH1I7W21B6umXWuzSWonaqso/72A8xg7sA6R1yfGY2Y+hm8+8J413bfNx6qtv6xY+bNadjphP4y5qD9VG1buGfCcc8yAlZD0BuT8YmDGqYd8JlRGPxPEUxRkjkTiwYx6JPHQPJgqYkDOSn6aozidQwOkFJukqKWiqHM KlHigIEsAsKgPCXvWVa1bM+b2KUTC2vVSPzTdlpWP55f9IMPjoIB+AJj2A5Tqqa/7ceaedS/NcrmoTWSBHFKVJqwx1mU/Erbr9NeqrV5Z+cHg0r93zWZxCmDCrf+sdOsinLGZGd//bbRbx7Zqf+ltb/JDcp0Rhxn5O2fkiEAz2m2JzGjKeGtG5lKCYe Loq3HK8Zp8KPqoq1r/dVkpgst6LJk8EITM4yBY0twJwXauhUCLjCwY7YwRVSRGS/UgJLzMdRrz+OQpiyFc7M6IibJgeGcK5qMjH9JRvjsdhYqko8vw5qJFkAuK++hoXHNDCNPRKOqQjlakp+mY8tiuHdMRY+kIKp1bKMJ0lPyajkaPxUCP02h1jNDjk zRFLnpamsJ0NFcHHwR30M0KIVz3zNsRkM7elG9AkN6mRJxbDMPHlLm2jc4IuOWMAIgWbAhzQ4yacs/QctTTFlLOUJnrXNlhiIbehK5Uyx2PUwUyLXvHJt5RIALMHaLTchoLbCyntwAzeZvuwd2WR78b6+1z/84lftHa/Y983r06u246ey8+MvXwHw==',
  },

  {
    id: '9',
    title: '페니아 인뢰덱 찐종결 올인원덱',
    leaderName: FENIA.name,
    characters: [
      { character: FENIA },
      { character: STELLA },
      { character: CAROLINE },
      { character: TENNIE },
      { character: NAYUTA },
    ],
    desc: '해당 덱은 모든 캐릭터의 모든 장비와 옵션작이 되어 있는 상태이므로\n현재 실현 가능성이 매우 낮음',
    descLink: 'https://arca.live/b/resonance/129033582',
    owner: EXTERNAL_USERS['1'],
    autoPreset:
      'vVfLrpswEP2XWVPJHj/AbLuKdPuQ2l3VBSpuL7ppbgpEbRXl32tIgDHQEOfSsvNrzvHMmfFwhC9ZmT8UVQ3ppyMUOaTAmWYMRQwRHCr78ffeQsojsD8OxX7T7f0cwfPPnS037gRn7hOMRVBn5Tdbn4+4YfVUbLebXW5/QSpaa++zMvsO6SveLbaA6A5LbeAUHYfpdlYlKqKsJIMZJiNYnxiaZAw9XGuCyKWRFFEoHozIYgxDFD5i+B2DEdFDlGZ9xME8x0AptRF7gZS4luBTEFoEUoj1VQp8gQImwldzx2w2tp2pN9ke0iMIB3eKPA8qCHVSiCAcL+Hj6X+YZmdXsPhGV6iRK3iwK7xgsb8LFY0KU0mbBC9QCRNiLFRMwihwYcJk4FPgXOCcUF1NuC060osOGj2JzpKTPIaSXF7M8lL3JBDGcTAvcaNqBJp1Q7ZQ3lzIJqrRct3ytqAaJjmfUGDrUljsF9CMKKAK9MJSy7KUvg5zJnc4R1zUaDNBJTSV55JKJuT6i2PDaYLmF3ymE7+qzlK+u+DfRCHmPgXx3ylwZD6F2aK3IoX+QRv1Y0nid4Dh0bjWj+FMIZU6uauQimmBX0qja8SaNKg+7F+7n5B3O0i/ZtvKRvBos9yW1HxeVM2PyuVhcAzqR1s2p1q08nlrL3foj/TR6bOpLzudwxx4Y3STX27bP2FNcvW9eD9oHpFhIOg2JCuNioZtkhho+myyTZFtRlFQJAPXuZIzgjLwQJEOYmqAMtCSsjYUlNOVhOAoSU1rOuDtawhP1rYhfHs4P5VF9dBGsAtrXR7s6Q8=',
  },

  {
    id: '10',
    title: '샬롯 덱 1',
    leaderName: CHARLOTTE.name,
    characters: [
      { character: CHARLOTTE },
      { character: NAYUTA },
      { character: LIVIA },
      { character: ARCANA },
      { character: SHIZURU },
    ],
    desc: '주로 적이 많은 무대에서 활약할 수 있습니다.\n드로우 범용으로서 [나유타]나 [스텔라] 를 편성해, 한층 더 [레드카드]를 드로우 하기 쉽게 [시즈루]나 [타라] 등을 편성하면 좋을 것입니다.\n공격을 받기 쉬운 샬롯을 지킬 수 있도록 [아리나],[아르카나] 등의 회복역도 편성합시다.',
    descLink: 'https://gamerch.com/resonance/877307',
  },

  {
    id: '11',
    title: '샬롯 덱 2',
    leaderName: CHARLOTTE.name,
    characters: [
      { character: CHARLOTTE },
      { character: NAYUTA },
      { character: ARINA },
      { character: ARCANA },
      { character: SHIZURU },
    ],
    desc: '주로 적이 많은 무대에서 활약할 수 있습니다.\n드로우 범용으로서 [나유타]나 [스텔라] 를 편성해, 한층 더 [레드카드]를 드로우 하기 쉽게 시즈 르나 [타라] 등을 편성하면 좋을 것입니다.\n공격을 받기 쉬운 샬롯을 지킬 수 있도록 [아리나],[아르카나] 등의 회복역도 편성합시다.',
    descLink: 'https://gamerch.com/resonance/877307',
  },

  {
    id: '12',
    title: '초반 초보자용 무과금 덱 1',
    leaderName: FENIA.name,
    characters: [
      { character: FENIA },
      { character: YEJUE },
      { character: LIVIA },
      { character: FLAN },
      { character: ARCANA },
    ],
    desc: '배포 캐릭터를 중심으로 매우 편성하기 쉬운 SR 페니아 번개 덱입니다.\n프란(R)이 탱커로 녹기 쉽기 때문에, [아르카나](R)로 HP나 코스트의 회복을 돕습니다.',
    descLink: 'https://gamerch.com/resonance/877307',
  },

  {
    id: '13',
    title: '초반 초보자용 무과금 덱 2',
    leaderName: JERBOA.name,
    characters: [
      { character: JERBOA },
      { character: PRIMING },
      { character: LIVIA },
      { character: ARCANA },
      { character: KAREN },
    ],
    desc: '네즈미(R)의 [레드카드]를 끌어당기는 덱입니다.\n앞열이 버틸수 있도록 카렌(R) 등의 힐러를 편성합시다.\n[타라](R)도 궁합이 좋습니다.',
    descLink: 'https://gamerch.com/resonance/877307',
  },

  {
    id: '14',
    title: '냉기 덱 1',
    leaderName: WENSHENG.name,
    characters: [
      { character: WENSHENG },
      { character: TENNIE },
      { character: VERLAINE },
      { character: LIVIA },
      { character: YER },
    ],
    desc: '동결을 사용할 수 있는 캐릭터는 많지 않기 때문에 약간 제한이 있습니다만, 동결 상태의 적은 찢어지는 것이 효과가 있기 때문에 샬롯과도 궁합이 좋을 것입니다.',
    descLink: 'https://gamerch.com/resonance/877307',
  },

  {
    id: '15',
    title: '냉기 덱 2',
    leaderName: WENSHENG.name,
    characters: [
      { character: WENSHENG },
      { character: CONNOR },
      { character: ELIOT },
      { character: LIVIA },
      { character: AKIRA },
    ],
    desc: '동결을 사용할 수 있는 캐릭터는 많지 않기 때문에 약간 제한이 있습니다만, 동결 상태의 적은 찢어지는 것이 효과가 있기 때문에 샬롯과도 궁합이 좋을 것입니다.',
    descLink: 'https://gamerch.com/resonance/877307',
  },

  {
    id: '16',
    title: '보라 카드 덱 1',
    leaderName: MARGIELA.name,
    characters: [
      { character: MARGIELA },
      { character: ARINA },
      { character: STELLA },
      { character: NAYUTA },
      { character: VERLAINE },
    ],
    desc: '마키라 의 강력한 일격으로 적을 닦을 수 있습니다.\n보라색 카드의 특징으로서 혼수 나 혼돈 등의 상태 이상 부여를 자랑으로 하는 캐릭터를 편성하고 있습니다.',
    descLink: 'https://gamerch.com/resonance/877307',
  },

  {
    id: '17',
    title: '[레드카드] 샬롯 덱',
    leaderName: CHARLOTTE.name,
    characters: [
      { character: CHARLOTTE },
      { character: STELLA },
      { character: ELIOT },
      { character: ARCANA },
      { character: RACHEL },
    ],
    desc: '드로우 범용으로서 [나유타],[스텔라]를 편성해, 한층 더 [레드카드]를 드로우 하기 쉽게 시즈루, [타라] 등을 편성하면 좋을 것입니다.\n공격을 받기 쉬운 샬롯을 지킬 수 있도록 [아리나], [아르카나] 등의 회복역도 편성합시다.',
    descLink: 'https://gamerch.com/resonance/877307',
  },

  {
    id: '18',
    title: '인뢰 30렙 코어 클리어 덱',
    leaderName: NAYUTA.name,
    characters: [
      { character: NAYUTA },
      {
        character: AOBA,
        equipments: ['에비서레이터MK0'],
      },
      { character: YEJUE },
      { character: ELIOT },
      { character: RINA_F },
    ],
    desc: '클릭 시 가이드 링크로 이동합니다.',
    descLink: 'https://arca.live/b/resonance/129123153',
    owner: EXTERNAL_USERS['2'],
    autoPreset:
      'rZZNj5swEIb/i89U8ifYXHuKtO1Wam+rPaDidtFmkywkaquI/17bZMnYsATW5ITt8cyTmdcen9HPoi435ZfigPIzIjjFmAmMcpJ0AyLldUAzClZSYEalGeC3FWhGMwFWFNjDBDRj0Ewq6ICDgUoBAYGghAEzAamFF5RA19k1KOMwqBLwnxLoAMbJvIF10Caoar4fPpu03u9Q/qvYNjpBz1q7qa+nFxfxSRelro05tr+M2k13bi7YWFaNrdCPfwftIu2PT52Nc1Pvt/quao4of+g9XT5I98GY6D4I45cZqR4TV/bLzjM6NfpbURcvTgUPZtVM9BGPRf1bH7uhCalfT9Vh87bX2O7/7HS9KeF/aZ6r7dZNUYYJVzzpQ6D8k/FZmbVrPdokQDgjk1bRrs7BpjjwkCMuFSbRAYKpBnkfwar+gvBexAFd7x45/8QIOgzQmexK/dd5vJk3j8lqeglTX7kAjMo0EszqFyYrxcvB8BDMFH4SjM1TGhQSc2CDXYtJZ6gJT6lJLlbTiBSWZSaUo+LIYyLLijbikqpphdN5xxIwqWim1BzcOA3ZW9o7dTSeKfYmGDDxWKYMT5+1GbULmdg6l4C5TCKTFYjqWsCR6Ct3NTrR1fgHru+RBFHJIys3uL7JOmDm+RB39AIwKpb2Fe4mx9se4dOncMbN4AvLPmzXaXss+qHgtT37YPbA6Ie63I2eM6azMOVEBD3nVj+eQypGSIdHUcqpByZdJ0GD474wQeZSQH7lUtQ+tv8B',
  },

  {
    id: '19',
    title: '점화 30렙 코어 클리어 덱',
    leaderName: NAYUTA.name,
    characters: [
      { character: NAYUTA },
      { character: ACHIWA },
      {
        character: AOBA,
        equipments: ['에비서레이터MK0'],
      },
      { character: ELIOT },
      { character: RINA_F },
    ],
    desc: '클릭 시 가이드 링크로 이동합니다.',
    descLink: 'https://arca.live/b/resonance/129123153',
    owner: EXTERNAL_USERS['2'],
    autoPreset:
      'vVfJbtswEP0XnlWAiyiRuvZkIGkLtLciB6FiGyGO7Uo22sLQv3dI2fFIZJgYVOKTKM7yZnsjH8mPumtWzW29I9WRMFpQKiQlFcvGAysUPjB0kBLfIB3BClLR803J0Y0UlwMvy4uYkEiMlsg0V/QixiWCw3WBEDCKbzA2hXUmwWl0oHmOrQmMGoUtco3EJjpK4+DsYchI23/dfYQcf96Q6me97k1GHoxxrz4dHl1k96ZuTAfi1P5KbpVu3LuZYtP2tlzf/u2M87Td348yzky3XZubtt+T6vuTJfcgVJmd3rDxgYn8fKXvMtcDJ80jOfTmycG+7n6Z/XgED+b3od2tzqKguP2zMd2qwdD7h3a9dq+4gPzoPLMWv9RdDcF+AJst3F3yOmSLexQxjzTRIyRs5pEKwZ73aJvCehxVNo3565ymhMwQAOIQMJik5yHYVlwUgu2eOQSuiggESw8v5P2s6pgolPdybh7HIwKgpwgZ45JMMSkvLSKtMtxLC3RcJC2WDt80LezFtEB30GlagNbfYERobET8QvCUQkwBnMLUsRGxi2DREQlBAEcxCLAnF27HAFHoPAaBpbJjkI95ZAByn5qSSh+mpmjQBVs270EIsOkiBC397kuCEOo+lkd3hPRnMHFNhchQxCDoGfHwOBkeCXyi0cEPlPmUO+uv10wOHouRpT2tq5DK4TXDolRsW/BFEgRTl5wgPq1ccRWwq9dYCJHH73y6xuDLPF60q3ctGJ3vtUJG6kXfBUIpI6vV/pEa7ob/',
  },

  {
    id: '20',
    title: '냉동 30렙 코어 클리어 덱',
    leaderName: NAYUTA.name,
    characters: [
      { character: NAYUTA },
      {
        character: AOBA,
        equipments: ['에비서레이터MK0'],
      },
      { character: YER },
      { character: ELIOT },
      { character: RINA_F },
    ],
    desc: '클릭 시 가이드 링크로 이동합니다.',
    descLink: 'https://arca.live/b/resonance/129123153',
    owner: EXTERNAL_USERS['2'],
    autoPreset:
      'tVbBTuMwEP0Xn7OS7XFSO9c9VYLdleCGOETEQEQp2aQVoCr/ju3QdBIHA3LozfV43pvJm2cfyE3RlOvyvKhJfiCMZpRCSknOkn7BpDwtuGBoJ0NhwDKS0+POiqMzq9VpB1KOE+BsDFC2FC24ynDYiBsOgxQtcAlc0hMDrkZhEoNiOgoXJxQGVbg4u+gS18Wzqt2R/OpA9q2+fK21C9sVzZ3e9UvDQf/fV/X6GHqdkKfnrW7WpYml9rfiCWkfqs3G/cWBMqFEYjP+K5rikeS/TM7K7J04d8niiBBCpJGIINUEkQKwjxFtwy1if2Rb6hcHGlMyQwSIY8CMSj+mYD/zohQYCI8Cl1mAgp22Ud/BwzwedbNsMScAoHyASUWfdS6F8ZcBry0Q92W4x9ooLtAW6xQ/IEcakqP0iuYxRY8JvGtBheRozWlROc5RMEAhCsbiI+UoqF/jREnfk6O9nRaW44xRKBFqC4t1x1k/5oEBEL41Rclx3pqCRWcL932WgrnpAgad+hMRRWFuIpgI3hGp7wuR19ScGUKIgnnbjNTHw0N5IOb9RDu/UOZb7kRfX5kcPBa9S3unvsU07b4yLFKGbgu+SIPM1EU3iI+/XLYIMUGjiU081dy+nQl60Lr+bd64f/aPjs29Lkrd4GLKqrWP4EHsVXvmYuypv1uS3xabVhu03X3/n0vTPG30O5Mh0yCggc9gCsfRvLbpL+pR6u4N',
  },

  {
    id: '21',
    title: '[나유타] 무한 순환 덱',
    leaderName: NAYUTA.name,
    characters: [
      { character: NAYUTA },
      { character: ARINA },
      { character: STELLA },
      { character: AOBA },
      { character: RINA_F },
    ],
    desc: '클릭 시 가이드 링크로 이동합니다.',
    descLink: 'https://arca.live/b/resonance/129066118',
    owner: EXTERNAL_USERS['3'],
    autoPreset:
      'rVdNj5swEP0vPlPJ4w+Mc+0p0rZbqb1VPaDidtFmkywkaqso/702EDC2WRaT3CYMfm/e2G/MBf3Mq+KhrE9o8/2CzrX6klf5C9p8gATVz+Vuty3QBgjFwLIsMQnf/h2V/itBp7z6rU5tiBOkXs/lcXtb60eCSv0mApxiTDlBCTr82auqWQ6bnyDXZAZRsnhEiEOk8Yh4CrHF2BfqL9q064cIIMMAQ8pQLAUgwqNAZOZSILMU8AoK/B4UGI+nQLhPAXMIUHBAiTTyWbVIv6M0ky71OWa37E/5sf+jK8vlBHOyEFghS+BE+LLMUcBizebwKQQ2xxwFECJeBSEDpxRmfAFTCtFFZz6i3kXziDgeMZtCXOJE2tFWyOw70WC//YIDPvedmDhH54Kozrsu8mQW6rbnyaHa6cgKiAx4ihi5GCy1gqYe0FtvkIQGeuQwo0Q6JuWfqbUm1SqdIKZzr2/5lU+PucLxNOQ6d/bQQUC3I+NDBSmdbMISG/NrirAxvGbMCv9CNZhKu8L0jO3gs4CuS1TwKXQqvJuCgJUU6FoKQPBKCuwNCpOwPOPR1sr8W0n4huWOTeBj5wBfvVFHmkWWGwexLSN0//V4pQ6v0EX6jpbhcfK10pPD8f+AjY39n8ZoRcda6RzzObYtuox+nJst0g/WIdBTqQ/M5cpKk9YTLaiVRq1A2u/oGoeAj5ZmdmClmctNH5ivPCvNJspTO82mI63AjOvhiSD2OzZROzAfHMMTZi8NdqWENLMCHU5PqvqoRW5a9KTyQlV2Q8v669E8ftyjza98V6sEVYed6prY5/WD7Hb+kn6f3sxYN7Moa9PP/pSX9UMD6AA8K9Vgfj6/mIn7Hw==',
  },

  {
    id: '22',
    title: '코어 60렙 돌파 덱 - 과부화 - 인뢰',
    leaderName: NAYUTA.name,
    characters: [
      { character: NAYUTA },
      { character: AOBA },
      { character: RINA_F },
      { character: PRIMING },
      { character: YEJUE },
    ],
    desc: '[나유타](SSR) / [아오바](SR) / 리나 본(SR) / 레이카(R)\n위 4명 승무원을 고정 후 각 코어별 1개의 승무원만 추가하면 됨\n장점: 편성에 한명만 제외하고 나머지가 동일 승무원이라 성장 재화를 아낄수 있음',
    descLink: 'https://arca.live/b/resonance/129243432',
    owner: EXTERNAL_USERS['4'],
    autoPreset:
      'tZdNj5swEIb/y5yp5LH5sLn2FGm3rdTeqh5Qcbtos1kKRG0V5b/XA6EMkIRA2JzsmMz7MF+eHCArH2yS2uJ9UqQfdxBXxd568GxtTt982L9ALDz47tab9DHJIT4AilAI5RuI0Ws2Moq6jTCab8Jug6jYRrPHMJJsY7AWbXQCyXV6BgzXibiO4AaQG2C/UYHgJ1xH85OQnwSc2vDHTMBNq45Ach/IyHebowfF69Y+ZGUF8VcU9Imkd1pgs1DanBYqOB2FwTcP0qykeHz5m9va7lMdQLdszbigfs7bgP5ItqVtIniSO4D9tc/yTbt3JrMU4i6UHlRJ8dNWjYJ7jX1pPyVF4nLhndMrn7PtdrNL7R+IVX34H6U5qo1JReSBM/b6e2cL+rIFPHpXESguQ80x0FiTJNE3aoki3vbSnYrfh2gfrkuEjJ9F4G6WcOZXA9eOkC8wNd4OXUH0qQZv1GdyWTXhFsrVPhMuiUtLF41y4RYEMycd8SoCRmMEV20TCNRaZiDI6whCjhHCKS9QF13PCwIXIFCvW80L0pzJBW2mEOqaWckLzuASBHdpLW1NLtvHNXiDorlHES8o8gpTU51Izu9Eet1ORNPGHVeCnOzHNLSs3Y9RqDlemK5BGj5Wu5vRX1KDNOWsV4NKXRoPmKIW60fG+LMi09wR3AvhkOkANPEd7ywcl+gcTE6CDZxFE/abgCEG88CmblWa6+eNXFr3AcZv6ernltEPEDUVUwT91A7l8k7ry7EPBB5pEKyemn9XFIV/',
  },

  {
    id: '23',
    title: '코어 60렙 돌파 덱 - 용광로 - 점화',
    leaderName: NAYUTA.name,
    characters: [
      { character: NAYUTA },
      { character: AOBA },
      { character: RINA_F },
      { character: PRIMING },
      { character: KALEYA },
    ],
    desc: '[나유타](SSR) / [아오바](SR) / 리나 본(SR) / 레이카(R)\n위 4명 승무원을 고정 후 각 코어별 1개의 승무원만 추가하면 됨\n장점: 편성에 한명만 제외하고 나머지가 동일 승무원이라 성장 재화를 아낄수 있음',
    descLink: 'https://arca.live/b/resonance/129243432',
    owner: EXTERNAL_USERS['4'],
    autoPreset:
      'rVZNj5wwDP0vPlPJTvgK155G2nZXam/VHlBJu2insxQYtdWI/94kzAxhYCEwcEqwYz/7OXZOkFcPMs1k+TEts8cDJHV5lB68SlnoP5+PvyBBD76r9S77lBaQnIAwRCSBkJDXblBE3YZF9iaIjYGzWmifiS01W8Ix6DYUW2o8YPaGd6ZJkGUtxk7CfWFbszfErTMh2hK047HPRDYC9G049hkR2BKNrfFUrr8Ulzz/SPeVSvSLSb4So/4i5kGWVzrbX/8V0pgo3/byIa9qSL5dlc4Lahc8Fu2C8PwHw+DZg7f6peX1SuHZzgnk72Ne7C57pVu95vv9TmkCMa5tBuDBsZJPaZmqEviggNRp+VPWLS40wivG9vQhk38h4SpOY+dSCwrIn4MstfFLAI03AqHv7QpI4yFf8L7HGzCdR02Dq8dbH/58yEZo7oE2YLsl6CMchdA331fR7A0xvh+oKr5JFgZobzgOMYbptLR6ZDhcVQvUrwUxwgy5QAgE2wZCOCwOlfY5ZtR1WsKM7obvA2LzzBAy2BxTOIGJXDCRU7UwsbpamA1Yz5fbmFWjc4GAhuX7q0X3elcIE80LOUfH5qWH3TYeydnj8FI6pjlEsQnTetyvuZTRonapR/pd7ZKEP34BpucWc51b/lh3nB0ai9tAfGcWkLsNDX91G+D9NkCr2wDn2wwNMaxPF2b0Y86dGdZv0Gx6aJxAv32bkZj9+cmx9OLwDYARBTN1096XOF7yBjPegqb/EGM3cIfMPTf/AQ==',
  },

  {
    id: '24',
    title: '코어 60렙 돌파 덱 - 콘덴싱 - 냉동',
    leaderName: NAYUTA.name,
    characters: [
      { character: NAYUTA },
      { character: AOBA },
      { character: RINA_F },
      { character: PRIMING },
      { character: YER },
    ],
    desc: '[나유타](SSR) / [아오바](SR) / 리나 본(SR) / 레이카(R)\n위 4명 승무원을 고정 후 각 코어별 1개의 승무원만 추가하면 됨\n장점: 편성에 한명만 제외하고 나머지가 동일 승무원이라 성장 재화를 아낄수 있음',
    descLink: 'https://arca.live/b/resonance/129243432',
    owner: EXTERNAL_USERS['4'],
    autoPreset:
      'tVbPb5swFP5f3plJfrYJNtedInVtpe025YCGt6JmCQWitYryv8+G4BhKsVtSbg8/v+/z+32Eor5RWa6qr1mV3+0gbaqDiuBRqdL8uT38hZREsG8eOpVWKurvZa//O9vW+sJDawRSJOZLaAR5Uf/SOj9eSqV/R2CEm6JuIP15BPV0KMp1L28iqB+L7XatzQNSpi2wGCI41Oo+qzJN4Qv2KrtcPUPK2kNru8mqP6rpRMOvtUNWhNAk0Xb2/3aqMsZ7dqdogsIUmrmj+SCXoYgsJsGIYww+JjFC6Q+/ZWVnwIVFGDKcpDA0P1KJ9Rvf4Gi97riWDxCZn+0oxpwksJwTupxQsGWcmFzBfKg6PWzz6u38xOD8lBPZgl63rGKPW6iLQmQCs4R8bkFC/aHycsIhp9VSThgUKirnQ0UDQ4XydWEzIUMo6OtXyRZMaDCFmW5GGCOhiEJcCTH4jeJ1RZwRZ7Mvwfc0L0SyMPskn86++SkSmmyMT/UFfwv31iAb1qBYWoMsrF3y+RoMHa4o8cM1yNh1OraMPxQZsxKFd2w67I50PjJHYPrnaeLN3N+2vYVDh4XDrkAMMfbkTVcvQrxnI2rR4tNwLaIjup+wFg0j12+uixzEiY7cplua1/lZ1Y4hk6B2sFvB7LoXIRYtmp21jpp0BPfENHsrGM85ArtYMy+83NEVebEmiKPG0TXtgJocck5cAYkL6ghm9DnPFu4THDqmbzoGDAPt3Gq/VefQ2WK0yd83kchGu2+lm9N/',
  },

  {
    id: '25',
    title: '캐롤 테니 없찐이 몸 비틀어 쓰는 니콜라덱',
    leaderName: NICOLA.name,
    characters: [
      {
        character: NICOLA,
        equipments: ['번개 소환 권선기MK1', '북부동맹 방어 섬유', '히포크레네'],
      },
      {
        character: NAYUTA,
        equipments: ['에비서레이터MK0', '구급 아머', '기능성 음료수'],
      },
      {
        character: STELLA,
        equipments: ['마술봉', '구급 아머', '기능성 음료수'],
      },
      {
        character: ARCANA,
        equipments: ['구급 아머', '기능성 음료수'],
      },
      {
        character: RINA_F,
        equipments: ['사냥칼', '구급 아머', '고열량 식량'],
      },
    ],
    desc: '캐롤 테니 없찐이 몸 비틀어 쓰는 니콜라덱(니나스아리)',
    descLink: 'https://arca.live/b/resonance/129403908',
    owner: EXTERNAL_USERS['5'],
    autoPreset:
      'tVfLbtswEPwXnlWAL4mSrj0ZSB9AeytyECq2EeLYriSjLQz/e0nKjpePSGSq+KS1qd3hzuyQPqF+v5V33TCi+hvB+sNoNj2IywOtyumB5GJ6YGV1n6Fu+HJ43/Ttpx2qfzTbQWbouwo37YfmgOoTIrhQ7wiKapJNActBQKviFhAKgwrDXwR8J4e/MBBg6x0OAmEFVoIcYoMJyhIGFVjGK5iAQgQEZiOwKNwchj3gsChWqfFzD2ACCgIqdEPOuv93smllf+Vg7I+KggfznVpxJRO13aB5+fr3IFHNMvQopeHt4/HJ1NuPD1MSE+mlFz2ckPx17A6ba6w4Pw7yc9M3T4biyxdTYgVvbPqfcpxClalTCW/kZGh47Lbbza6VfwyMaypUv1Pv7n/vZL9pIe5pvUlCGSakYOicnZz37EWYYY6syopvuzL1cHqbtLFo1YNt+hBu1TSddku83E5tu5SetNuOzIbyMtcV54k4ITUJ+BzLhlKT3RMyz4YNa2o0FhitDyxAViowUuCATG5F9AA7TSa8oqlUaXeMVIV2Fr8ie9OKJFCRv2lF6lcsyxUqhgT2LCWoHbFkMQmjd5USj9V4YYmczYlc8LnpKzxkxn88m2NhZO6UstyyQ312/E+XIvmBzeEmjWpRHm0DletPC6eFuo74HaLV+v4kaJpxhoDhYn3j1NeiJGCGR08rL2jKB0Zjxa7veDOOTuNw8YChh7sF/aBAs91bOPUDR7G6gKyvKLc/C1IPm0EeQVzCZc0dv4VTOHBZU7e1mPFLwJQ4eWFM0QJ3tKT+DbhiYAwnOaexghTnjO9N5V6uF/gKuRKtRCRfsC3eTUq1xSNm/bbAKafOlL/6yL+Yc5kOga0LQbyiC3xVCITi8/35Hw==',
  },

  {
    id: '26',
    title: '니콜라 오토 프리셋 (니콜라 [나유타] [캐롤라인] 테니 [스텔라])',
    leaderName: NICOLA.name,
    characters: [
      {
        character: NICOLA,
        equipments: ['이차 상전이', '공명체 섬유', '모노폴 마그네타'],
      },
      {
        character: NAYUTA,
        equipments: ['에비서레이터MK0', '시뮬레이트 스타', '베타 세계선 박스'],
      },
      {
        character: CAROLINE,
        equipments: ['에비서레이터MK0', '시뮬레이트 스타', '뫼비우스'],
      },
      {
        character: TENNIE,
        equipments: ['에비서레이터MK0', '시뮬레이트 스타', '해리슨 장치'],
      },
      {
        character: STELLA,
        equipments: ['마술봉', '공간이동', '춘추합성인장'],
      },
    ],
    desc: '니콜라 오토 프리셋 (니콜라 [나유타] [캐롤라인] 테니 [스텔라])',
    descLink: 'https://arca.live/b/resonance/129397795',
    owner: EXTERNAL_USERS['2'],
    autoPreset:
      'rVdNj5swEP0vPlPJMzaf155W2nZXam+rHlBxu2izSQREbYX477UhgB2MgSW3mLHnPY/fPDs1eRPi/Dktsq+Xd5JQj+Tlo0gzUahvT0eSVMVFeORUvXaf2jk/5Y+H7Et6JklNgAaUIqckAa8bsMAY8HEAVIsAhuMAw7BNfY2gPs3XE4CWWk8A1FgTaNN4rEeYnkCLMN9IoOFgrGfDSF+jZ/ONbRsR0FNzPbXaXKPK/u3cl/xXeihlzbO8VIX+/u8sSMK6qj/mZUWSl5pcSvGcFul7ewgvPzxSvuWHw4M8HyK3SAEkvqdmdcslXt7G+lPwSJUWv0XVhak3JCTJJzn59OcoCpVNzqVq0z3AMRN/JZvGq0dEBUj9yDfxzBQYR7cYNwRGfkpMEwDgMboAaIirAZQibAD8bgDywG0A7H4AXYkMGdREas5vvFvYKLofLE5hR/VdxWGimcKkIP3AgaBMYVE7ixTATQGYk4J0EmsHbKKACxRiNwXYRWG0ATZvA8r9NtkAsNhiA1MJ0maLIKSoXKVQFrso2SUeAxhGjnoEFlm46oFhcCO71TwgoPP2jJaCOHmo/jC0t4LHlQabZxGQBV+YsFi7fSlLdMgy2inLNdvvtTcvB3U1b7slQ1ySg61D0VWKcGcp1lCgHMDRFBa73tQU60+Dt4Y0tYrBReZNom0nC5EPmQQNXc0JO5tzhgezqZPrPJipzsDFgy2Kc3oshjI6AoH+csA9bzol8zWIIZiIega235CmiID0fnvkpJEAxekgrg/14eYeDmHo00GkPY5c+dr+9Rov/OY/',
  },

  {
    id: '27',
    title: '테니없찐의 니콜라덱',
    leaderName: NICOLA.name,
    characters: [
      { character: NICOLA },
      { character: NAYUTA },
      { character: CAROLINE },
      { character: RINA_F },
      { character: STELLA },
    ],
    desc: '테니없찐의 니콜라덱',
    descLink: 'https://arca.live/b/resonance/129347319',
    owner: EXTERNAL_USERS['6'],
    autoPreset:
      'xZdLj9MwEMe/i89B8iMPO1dOlXYXJLghDhExbLSlLUkrQFW+O2MnVcdJ1m7Wi7anuH7Mz/OfmUzOpOk+Hd5Xbf1hR8rv1bbTCdkfH3Vr/iMlTciT1nbBw+mnHbf7rb5ruiMpvzAKPyZUYh9owccHMT5wJYcHIdXXhHyDUzb1fXUg5ZkwmsNenpGSJcNAZPQ64ArNMCnRQDHLMSzL0IzgeBnn6LSiwDMpGlDHaI5nON4j8AzDRhVexvDAMZrjPQW+NrZT4IHERysEKlKFD0BGeWqW9QnoeqeretARaWs0GNU7k+6p2W43u1r/IaVIxiGoTuC6lLFckIToX6fmsLnsARVPnf5YtRUEwzsweqzaH/r4+e9BW1Eau/viWLt4mGPXjTYAzEn73zvdGnuXqOmTAJP1tpcp8yCZYPEgnUlq94PSWT+lgwgO04EUEXQQo4hOzOgWuSDpDJdXFHeHScoruOXOZOaQpF7pLAntZxddyWHKhcvBUsUxh4nyN+IQDkcW9kf2Ao6p0dQ1yiZGF7Bf/+ZSuhD8P958SCM2T6PC+BuVEu53hY3oBQRshc+ssJzGlDee3RSbM9KVGkHdmWarEMwhkd4sMXcK+GZeyFieRvmmWFf6R7d49WJMcD8T9SCZ1mC9XNDahOMIylRE0YeO442KPrzeXdHyoIfS5VQPZLMItBHC659wmonn/BPgisv/IlwZ5wE1dhGx+e+SyNtCe3WB5KqIcZBa2f8tdFgLRZsF+r9ATzp9kazvSeeBBJUpiskbSM8yRSY/n1Ts9LXfIeCVGLcMjf4KtyzU6plUzHwUxjA57zV+K1OcVDSXrlQ8BBHXFS4hFG7HwcVaBPjr0X6OXoM4IXXTmc/RUeH+Hw==',
  },

  {
    id: '28',
    title: '[카타스] 점화덱',
    leaderName: KATAS.name,
    characters: [
      {
        character: KATAS,
        equipments: ['토르', '뫼비우스'],
      },
      {
        character: STELLA,
        equipments: ['에비서레이터MK0', '춘추합성인장'],
      },
      {
        character: VALENTINE,
        equipments: ['라바 파이어', '뫼비우스'],
      },
      {
        character: KALEYA,
        equipments: ['에비서레이터MK0', '춘추합성인장'],
      },
      {
        character: YOIDUKI,
        equipments: ['에비서레이터MK0', '춘추합성인장'],
      },
    ],
    desc: '[카타스] 점화덱',
    descLink: 'https://arca.live/b/resonance/129295335',
    owner: EXTERNAL_USERS['7'],
    autoPreset:
      'tVfLrpswEP2XWVPJD2we264i3T6kdld1gYrbi25ubgpEbRXx77VNgCGmuK0hO2cGn+Nz7PH4Co+qKFUNOSX2F0fwpajLh6ppIf90hbaov6n246+zgpxE0DxVx+OhhBwo4zqdcYjg5cdJ1ebPaY7KphBphzrl0qj3RV08Q/6KDrOcSvUTcmaDPYAOqe+X6nwY8D93kY8C5QsU4mRGIaM7UegZSH5PgGUpJkCZdAjcoSAKbEp9U5whvwLXqJ2Xh0iFhweLicMjSHxJMkd8SijG5ETs6r8W16Ug+Mz/hWVvSUFkCxTmKjC5TiHUCG2t/yCuG8GDKbgq3FPg67UgVAXKibcWxHxnCtJfjrKdjOgZ0MRjA6WuDWGIqRfR3XshiEQ6iE7JZdsiJtSL6O6sIFUZ8SJu66NIHMR7HxdOT2DRWLhA5tWbpsm+dUt4LxCt+05Fo79FxcL5ofOqta3TiVhweo6YbHZibzInbm129vN6n+ansDC9p+vyVHN7bWOGRpU/9Q7/0bgNMO7t7WgTegoW+pMgbSRJYd7oxbDKaabNXxXA2NfY/VNffU/B2iO6TudUzYN9Br3WT593J8jb+qL6h9ChvOWO/pt5xitmHJgeE0UojnAckdPAKDZFdJlDaTjCZhE0m+mnpghFA9PsIQY4klHMAKWZKjcNJMHfZGiQYA0oHuCVMiwIwcsmdtldBPXLUd18Gi+bce+PndO4XYcdYP36cB68+locG21WWTXGr95q8yBrH3s/7c56Usp+8PbybLB/Aw==',
  },

  {
    id: '29',
    title: '니콜라 [스텔라] 케롤라인 [나유타] 예주',
    leaderName: NICOLA.name,
    characters: [
      { character: NICOLA },
      { character: STELLA },
      { character: CAROLINE },
      { character: NAYUTA },
      { character: YEJUE },
    ],
    desc: '니콜라 [스텔라] 케롤라인 [나유타] 예주',
    descLink: 'https://arca.live/b/resonance/129343448',
    owner: EXTERNAL_USERS['8'],
    autoPreset:
      'rZbLTuswEIbfxescyZ5J4iTbs0LiJsEOsYhOfCCitFVSBKji3bGT0E4mUKc1XWXqyzfj+WfsrXg0ZWUaUSjpfgiReDJm/bdsqsuXZ1HISNTtTWdfLUXxv1y0JhL/rHlWXZRrUWyFkqldmIDdI+oN0EiNeG9gQkYskkyLiaFA0TWKrhlxdOfhYACdRtdAQtbkKR2h7kBMt072WyNoOo0YCDl1dBRCSqdl1APiDsY5XeNC+HBHft6lhR17s1qY87rdiOJul67uA/Ks/1CY9x9SD0OIyX2fsGHlVqxel6Y5q4acu7WittY+D5F4ac3t+9p0rm3K5sFselN2Q9dlU1pt/LGD7VO9WHR7AUqZZMlHxAHOFQJwSjkVoOIsmwFQAYA8ngE4/YgsAL8B4AjgCmMM2O0huk1UiuLrz2Vl3kSBnDpyyR+SlWFASDDjzPBgSG5GYEhMyK5ODxJVGgcSXbXRGIEfIk8bhqZtQsx8RGBEOJJo+8eoPWhevexU0yz/7TymPxGHNKJHrV/WcF+ho87AJj75yMCjZSXibiZPiXDBwq9EPuk+vH/yyBVP8dGRc6JHVFbHjKhCZRz7ZKwDiZNSPdyOlLv8w4gTBXvyKDVXcDCRN/kj3g5SqxmA098OLqczAFwXRwAUzBHeXsm7RGj5fa85ocjv7mf0GU9nk5NryqML+8Cs6ta9Mft/bENebR7756sb/wQ=',
  },

  {
    id: '30',
    title: '[카타스] 순환덱',
    leaderName: KATAS.name,
    characters: [
      { character: KATAS },
      { character: ARINA },
      { character: AOBA },
      { character: NAYUTA },
      { character: STELLA },
    ],
    desc: '[카타스] 순환덱',
    descLink: 'https://arca.live/b/resonance/129240119',
    owner: EXTERNAL_USERS['9'],
    autoPreset:
      'tZhLj5swEMe/y5yp5CcGrj1F2j6k9lbtATVuF22aTSFRW63y3WsDgQGbgBM2J/z+zfjvGTuvsC2q73m5/frvoCHjERTVg863unxvKj/tITuWJx3By/GpqYKM2D5fDpf2H/muMh2e6kGQUVL/RATly04/FNURsm9NpaRR86G6D9Z8sDSJLgMfI3jWup7+4+lXvZzla2d6Bf37VBw2l7Lpfar057zMTdd3NILqudjtNvut/gsZM9x/9rrcbDFXYUpASVwX4TKirmTcwnCoJ208YqY85uVPfWyKpF/vQ36A7BW4qTyfo1CwbgGGiVgae4i4AP+yDtvIXMUsmFMZLWO1I8z6VKRsavkrbuqN4iKFdTi4j0Mu5pBkJQ4x4mhHLEGg6yAkyZ2uYBCoWTqcup+LMurRrCIwlqM95UsPk2ckXlHCpH+a9WlMYPrMua4ZOWKxb9oNITKRXnMX7QYTfmEO3MxUOmu0UnB10+aN9pgQ5AcSj4W5+GxQxjxeCEegbKyrAASxCkK9dbci8KkIgdPE7AEgnN+rhTCvx/z2A0BZ7A9HKFcPkqDfZCMgx+TrCZIITLjA6PmYi3ZJegKjqKPlCEO6oAMzVgeTHjDpRuw5MM/1wgnVaj5Ui9G28TdRqjcNIFLKXadQKl2nqOV3wrHc6BgfKE1s1KQwc74Ui28NKSxZlOynJx/GHu7xk4iV4ydTva6qxwZjQXuuzaIGDRM0D1QTn/RSQjxqSkW4moIVzqe8xKW7c+YyG3uY2Fu8epwE4TzHPGHJXI4CnmMTzsKn/EoaaY+88uju7jSCEa4k7xbBd4laE0HwGQSpfJeoIITH5uG+2baS6TRoN7F7OXQFG6X6AkfdbLpCY+K+YJ8xfYvZWtRtMAEaY5/YqIXiMYN1ME6KWwSa2mq2xzEPXWQPQd04YmOK1+7r/oNAi+ICxSaoFHdTuBsmkAQXsHuFbTmf/wM=',
  },

  {
    id: '31',
    title: '[아리나]없찐 무한순환덱([나유타] 메인딜)',
    leaderName: NAYUTA.name,
    characters: [
      { character: NAYUTA },
      { character: AOBA },
      { character: PRIMING },
      { character: ARCANA },
      { character: RINA_F },
    ],
    desc: '[아리나]없찐 무한순환덱([나유타] 메인딜)',
    descLink: 'https://arca.live/b/resonance/129521925',
    owner: EXTERNAL_USERS['10'],
    autoPreset:
      'tZdLj5swEID/y5yp5LF5mWtPkbYPqb1VOaDidtGmSQqJ2irKf+8YCBjjkJjN5mQDM/ON5+HJCcr6y/59XhWftpD9yDe1CuBFqebRx+MvyFgAzyovVAUZMv1LeEBCT80zS7DabdRTWR8g+9Z/2y2wW8RRu8AoaRcilesAirL+Trq+/tsryEQAetNpOsHuz1ZVq6ID0JJwrNXnvMqJ7x02u1aS1vVLudmstoX6C5kmJTFAFpNcEkEAh7z6qQ7t1+Sa+n0s96uLqfVFvBHiguhYCOfARiDmOQTLhoGQShgEP+T71uZ1iJZBoEYY27NsjPnaGPVmRcRgTDhvEUMptEXLxnWHb1hHf6cJIXwgQjg59xMI0ni+g4NP49+oH7NM1FxNAhFxJ0x0diVyz5Gm4ySQbJzr6NIpnR466sksk3BaJk6uS4UImKanSSbuPvobeSS8wEjAv3QtbuNYJC7oHly+DgHHkeH+CCToGR5ncVqRoS5ugDGZekUGb6aMncxLmGJPJrzBxB/AlHgycYtJzCM1lSW8K4vPnpVwVFb4RiU/6UV+QRRsQcnP3NbpwluDrmz28GRq3DAbEvM6G07J51d0C/s0l445qwfjjmx6i26QjFonT6Rf5aFvhvszIfoFEDH27FD3B9ACm7topwFEpKpbtzP7qugs94On9qSfe/oNMtmo7UcO4zMcNjqXBhniGt5QRIc30pDRc76xMYzqe2p4k5obZKY2ZsrE5iYx2WJTmzRdMED17GlQJ6bbWgGFZ3d4bv9K6Wj9Bw==',
  },

  {
    id: '32',
    title: '이로나향 첨가 무순덱',
    leaderName: NAYUTA.name,
    characters: [
      {
        character: NAYUTA,
        equipments: ['에비서레이터MK0', '구급 아머', '동력식 회수 기계'],
      },
      {
        character: STELLA,
        equipments: ['북두항마검', '북부동맹 방어 섬유', '리프팅 수술 장비'],
      },
      {
        character: ILONA,
        equipments: ['축퇴 흑석', '진홍의 예언', '동력식 회수 기계'],
      },
      {
        character: ARINA,
        equipments: ['보랏빛 써스데이', '흑석 아머', '사자 엠블럼'],
      },
      {
        character: ARCANA,
        equipments: ['비트레이얼', '구급 아머', '최면의 시계'],
      },
    ],
    desc: '이로나향 첨가 무순덱',
    descLink: 'https://arca.live/b/resonance/129535208',
    owner: EXTERNAL_USERS['11'],
    autoPreset:
      'tVbLrpswEP2XWVPJD2wD264i3T6kdldlgYrbG900oUDUVlH+vTaPZLCBcOEmysJj7DnHc8YzPsOL1vn7tMg+nn5BQgLYlU86zXRh5z4dIKmKkw7guZ6DhBL7UyyA4rjXT7uyguTbdbIesDhqBlSEzYAI2s2obQDH6rlxX+N9N4NN9iHNITkDJdKsUsIABY3BBL0ZXDD8Rd4MqnoGxwZBRiRq0NYBxomRQUIEyiTD3kJkMIa5oT3U7iHXZQLvwa5jiR0gokwpvAefh/UYoGU8jJGDEB+bWZyLFfdL3gn7I92XRtlsV1oJvv7Ldb3BGq2uZzj+Oehik3W6E/P9VOrPaZGaZHlnrPJlt9/XCxg3YWM2gYx1i1wA+vdpl286n0BpZEOvwGRClRY/ddVAk9p1S+MSnJEfq2fgcLHJ5e6/koGajflDN3nI9F9IuMtm655nlIIJtEvBJvodClSGKym4p1b3T20hO5ftvTL5Qy5BL6QChrVsaLJhmiOxoUtiQ5QrD10hj1gmj0th5Nwz5akL48QFoWHMsAr2xg4ATl6LVyPyHqIgj0cM+4j04YhR1Ef0y85rig1ZUmxMtq3M5oHsnaq1RPYObXvRujDfR1S0j8gfjUj7/cS2vuXC2o44WCOmGIhITACM1VmH4sI6LmbVcTlZx0fazUjmhwOZP4Mof7M6zoTfSuzrcUwjaJ8d1GcwIdqAPJiC30pmUBADnWQ5BbmEAnd14Msp2BfwoioYr2yoKArxgBDKD6v7rPDCsCIdlf/qm0VBvOmrbxbk8KtP+tUII0tPLBz/trQ0mNx9cfk5er+ey+mUnFdNt5f/',
  },

  {
    id: '33',
    title: '리비아 쓰는 [나유타] 순환덱',
    leaderName: NAYUTA.name,
    characters: [
      { character: NAYUTA },
      { character: STELLA },
      { character: FENIA },
      { character: LIVIA },
      { character: ARCANA },
    ],
    desc: '리비아 쓰는 [나유타] 순환덱',
    descLink: 'https://arca.live/b/resonance/129616233',
    owner: EXTERNAL_USERS['12'],
    autoPreset:
      'vZhLj9sgEMe/C2dXwuZl+9pTpO1Dam+rHKyGdq1Nk9RO1FZRvnsBb5LBEDB51Cdj7OHHMPxn8B5166V8avstqp9zrC/GMnNDMB5uciaGm6IqhxssinmG2v7L5n3TLT6tUP29WfYyQ99Uc7b40GxQvUc55upVjlGdZ8cGOzfyQoCG4OdGIUAPYQXooRj2QNOMw0YJvqmsngpaA68RCnsIgaDQAIHUBYUNAg1Yk2Owx7JWQu/kkNpyVQ4bBTRNoUOgAWE5HrJRawp6nEOGXqU0q/lx9xPVOEPr7Yvs9APTepHNQnbqzbfl16v/ZJ6NImDR9joIvv7dSFSTISLewmuPtk33Q26HPmW0f22Xy9lqIf+YV3e9/Nx0jRr+naJr1cDnQDn3muB6VuEnf+3azexofH40Zz4rVPDmnKrP1r9XstMPTxGsLQ0IatpBpiLExMZMe6R8jA9TwPCNYHkILL8aDIu7glXMAhPUC1axCWQEE4dMy1KYzB1MeN1wMkLAwINHaAlnJPAYQqslmKTez5NAeCoIqSAIj4OIaSBe75+9OuLIaWk5hDkYRhpOGFq8H4JROXoR4cATOVLXhVsiwaLrojQ+BuIVt5AvaKIv7o2gRAeHEYyKQJGi90bAwhHFCAKZFhHhgHA4WMmSOHRFE09D0wCOWgmF1odglBMqM4shBLKzLtauTjiEObJuovUemVBXUNeDufkmDuaORdOCJ+eWo2k0hvkjYlgpilP5hBVFlc4PUHk9v3CyGWkr82JcjGNibwLujRYyqTpxw9iuTkhKpWn5Vh8XfFzFBC7KS4dLn+qmc5EAl3/bT+OqbuQqLq6jPu1du44qkCO7PsYVkCN9QL1ajphwwRhLkaPUdMrLsAQ4UhQv9BIReBmr8fAoEUUzKUnLpFpQIghjBfKW/ymSR/xjXIwq7s3dtxVzVdqkubeSmpqlTaZNPtxT7u4IW0JuONxjc0BP/+FQ/O9dykik7h4tlf7h9ZCiNzFk9B+ow/zwDw==',
  },

  {
    id: '34',
    title: '대충 정리한 [카타스] 덱',
    leaderName: KATAS.name,
    characters: [
      {
        character: KATAS,
        equipments: ['불꽃 침식자', '정원 수호', '베타 세계선 박스'],
      },
      { character: KALEYA },
      { character: YOIDUKI },
      { character: VALENTINE },
      { character: VERLAINE },
    ],
    desc: '대충 정리한 [카타스] 덱',
    descLink: 'https://arca.live/b/resonance/129574796',
    owner: EXTERNAL_USERS['13'],
    autoPreset:
      'tVfLjtMwFP0Xr4PkZ15bVpWGhwQ7xCIihomm0wlJKkBV/x3bbeLr2LR2gK7qxPE5vufec+0T6sYH2bRyeN0M7bsDqqfhKDP0RY0eunFC9acTmprhm5w+/uolqnGGjqO8/Cfm//tmaJ5R/UqNuhbViOAcqx9HGRqfuv1+Zx5Spp5Rph7K78eu382rf87Qy4+DHPQsgs2P22XfND2qT4gp3PO83KGVP1FNz9kJ4DHGIJ6GI4RV2S3uLm6hZ7vbWTFdI3IfkeP/iIi5h4hzUSYgYuxJdmePNBDVFMT0qJIAYvHPEVfLeTm5ylxi0gtIUWmaq+Dy4lZteMmbSAFT7lLAwqdwrZ0ICsyNu0pdL7cISYm7U7cRShMiAohp2ZyIyD2PwKJIqdg4xGRhqSusMZbNwpIAhfCXeusWlubYd2xR0fuOTaCrWMcu1pa9lRnmAWaYxDATLIrZlnrMceXIxgL1OEcm1hKAGgGvF0n1uMkHY1o75SKQKCS/L4dDychh4wpcKVEIYYwECCH8+pmRN3pzVFiqwg8LYRFhmRvHnRPPltgoVk5saBlI0muRxDaN5DopV3Xiy5NQJyEKUQdS1/xnefAWedZZG29s65QpA8ZmfCXZ2IKcwPYLv9sWIq33pZ0dVUNB3vKrdk+DR31xvsXD2Xqyr9E/q0FEQA1hzkV/7WvkrD+aHi/XLEPp0dy6YH/Xd65de43DkiA6AsuFYxnos4wdKAe00zAY6DYC3jCDvJwyljf6tmYHBVxNncfBAs43YBqGdLTylltZAFBIR/cR+01F4H7gTsvcLqA1AqAYrFY6rCl4k8NpyqXtNAHpsAoQrcBA3y11PaHhZS+vObCotvjXkpyLacy5oaRvu1Gre8lBlb9PUvY6E94enw1ON37o5wv412Y/yvNv',
  },

  {
    id: '35',
    title: '깡딜)내가 쓰는 간야덱',
    leaderName: GANYA.name,
    characters: [
      { character: GANYA },
      { character: KAREN },
      { character: KALEYA },
      { character: FENIA },
      { character: NAYUTA },
    ],
    desc: '간야를 리더로 부메랑 도끼를 메인딜로 넣는 덱임\n\n장점\n1. 패수급 운만 좋으면 연속으로 리더스킬 사용해서 폭딜 가능함\n2. 모든 범위의 적 공격 가능\n3. 수동 조작 시 코스트가 남아돔\n4. 간야 페니아 [나유타] 3명만 있으면 굴릴 수 있음\n\n단점\n1. 패수급 ㅈ박으면 딜도 ㅈ박음\n2. 자동전투로 스테이지가 나뉜 적을 상대할 경우 맵 이동전에 패를 버리는 경우가 있음\n3. 특정 장비+간야5공명 없으면 덱 내구도가 많이 낮음',
    descLink: 'https://arca.live/b/resonance/129504461',
    owner: EXTERNAL_USERS['14'],
    autoPreset:
      'vZdNj9sgEIb/C2dXGhhsYl97irTbVmpvVQ5WQ7vWZpPUTtRWUf57wXZixuCPTVZ7Y8DMPLwzMMmJ/cjL9XL9mO9ZdmIcEgCByDIeNQYkojMw5p0h0qQzOIJjSGcFQTp7lGIZXFzHyllJwN0Tu3EcA2Xq4jigyB0HAhP3CMRQrgNwV6S7Ilxvds85YuuisnJ9+7fX9eru8KTLj2amtp50vtalGRpfwLmIWFE91HP2k89blv3MN5W201/3valyt9EPRXVg2ffr9magoB0AbwYI7QwosYrYs9a1s0/Hl1paC9h6OrFDXv7Sh4bXrFXPxWaztLQCTZZSjNix0l/yMn9pC8AIGpuD7v5sdVl/2AaKmP59LPbLi+tVvfMqxMULyz4YqzAbO4HP0cnffCVhFsV8mrKoT0sh7PlJzMbFdq3/skyMIJhamoMAKp5EMLm4BcEW4DhCS7AIRuwxzdHd1rKNOJF/Eco/vGX+zXW1HK5QwaLDcFA3hltVyPz8oc1fB4KecL0TzCkKkcJkUXAxXBQ4LI19MfvS8OB99BNC7wK6bu076h0jTgXRJvarKiDOdNL8p4JeEaQ1qQJZUwnNWjyHbKysjUsVhA3IqHz3lN4BA3oWMS95YiDqgERxUCJJJBKzkjf+1nC58N6a+sLd8NbYVjmlhQWg0WwX69wLUsIYuN6yrh7K8AYlLL30UDB6tzCQHpmkBEzey+VrRa+7oN1N+kgJLO7UamZjGE1iEtLqXrDgJRvoWANgaRxqHvg+io2CBRQzHfQGsIm2LycrbqLjj/3cMn8RXv8a0CZKK5z7DY1DeossN+RrBMz+y/HABLwabHX+Dw==',
  },

  {
    id: '36',
    title: '셔플 더 다크 아트 (2025.01.21)',
    leaderName: NAYUTA.name,
    characters: [
      {
        character: NAYUTA,
        equipments: ['비트레이얼', '시뮬레이트 스타', '초인과의 주사위'],
      },
      {
        character: AOBA,
        equipments: ['비트레이얼', '시뮬레이트 스타', '초인과의 주사위'],
      },
      {
        character: JOSHUA,
        equipments: ['후회의 갈고리', '시뮬레이트 스타', '트라페조헤드론'],
      },
      {
        character: RINA_F,
        equipments: ['비트레이얼', '시뮬레이트 스타', '초인과의 주사위'],
      },
      {
        character: TENNIE,
        equipments: ['비트레이얼', '시뮬레이트 스타', '춘추합성인장'],
      },
    ],
    desc: '완전한 생존 전문화를 갖춘 팀은 주로 고압 환경과 장기 전투에 사용됩니다.\n일반적인 사업 운영에는 권장되지 않습니다.\n교활함과 배신은 필수는 아니지만, 악마가 많을수록 더 빨리 나타납니다.\n\n다크아츠 셔플 초반에는 [아리나]가 쓰이겠지만, 압박이 커질수록 보스의 데미지가 너무 높아서 체력이 가득 찬 상태에서도 즉사할 수 있고, [아리나]의 회복도 잘 안 되기 때문에 여기서는 가장 안정적인 포지션을 가진 팀으로 전환합니다.',
    descLink:
      'https://wiki.biligame.com/resonance/%E7%88%AC%E5%A1%94-%E6%B4%97%E7%89%8C%E6%9A%97%E8%89%BA',
    autoPreset:
      'pVdRj5swDP4veWZSnBACvO6p0u02aXub7gGNbIeua3vQapsq/vscQg9TKCWXPuHE8Wf7s530zKrm6+FjUZefdyz/WWwbE7F6vzUPVXNk+Xfg9qdF5D4kuA+hE/ch06zf0vAUsRdjOmOPp98s5xHbH59NbRc6qWoeTFG6BQL33C2y/A2L/UCFTfmpOLD8z IAniKMAFSInAMhBkAkfBJFyuqPJmTQjOzERhCYCaEF2MoIDmaDWUqoWUzXqjhqpKeooOSMV9VpRDxIUxJuBhHqtaaTUWmK9bl0WexrPbP9nZ+pNeckyEslOjflS1AUy9cFJ3/4dTGeneam2205ZSM5jYblDafApYsei/mWO7gRum9dTddhc4BhAaqPX7K mNQrAhATXBGlyxDM8A6HUArIsOMJETCKezK83f7ggJHotlDlGsDynO4qWQsNCnALbNVvMlbYJvAthGeH8ELmfo5XLO5Dhn8yzdRhSTnKXpOEkzJXix1Y8NbALVBlMlF6nic3H5tFYCeokqHDnvB+ipUneoGpc3Trzg6uOL1ZcGALiQRHanY8U4iSEs9Un UM/V2u97xPgieSmjDAzGdi9Evq2jHo1DsPTlFtM+C9YgxgAeP9o4Lbmex1M7x7GD07LbEIyT7CAh노킬B232bRBMm8g8StM+z8KvG58Y7TsrtBkgvjNixu2n3FC70l/o/+GO4u343iMtBjbqsctXpXTtNag1fgg/P+yz088PbCXW4r+BsmrsG7RPcvsf',
  },

  {
    id: '37',
    title: '조나아리+[아리나]',
    leaderName: NAYUTA.name,
    characters: [
      { character: NAYUTA },
      { character: AOBA },
      {
        character: JOSHUA,
        equipments: ['후회의 갈고리', '시뮬레이트 스타', '트라페조헤드론'],
      },
      { character: RINA_F },
      { character: ARINA },
    ],
    desc: '조나아리+[아리나]\n\n[조슈아]+[아리나] 암예덱',
    descLink: 'https://arca.live/b/resonance/130152631',
    owner: EXTERNAL_USERS[15],
    autoPreset:
      'tVdNb9swDP0vOnuAPmxL8nWnAG03YLsVPRizthrNksxOsA1B/vsopVEoS4lTu8uNkkw+Pj5Syp6st8+m+1h3DaloRl6M2VjjYffT2c+mbkxHKkbtT/KMNG3/DQ58/bsxsJwRayya+3pDqj1htKSUMeF2nMGlRoZGO6JgaKcozwaTHBmaYgcF/iYwGHYdfINda453cmQoZIgcoRalxMew6xK8cY9AoThKY0NhbBwbAVUQhx6OlN61/ZZUj3uy683nuquhHB/gYP/SLpcLqBXjgtKcQ4nWv1emc0uuRgJOtWCdEWbWh6/Xtu5+mO3RhK/Nr127WZzCEcaUzUSSp0O2D6OxkhWZh/NacHFEfBWD5e8qBpziOeyqMX/caY+CuKSZtO4GEWWYNYhuQsRTornO4wA8SAnUNj0AFZaggMnHp2FEoTSOaAU1mUQRYhckIhVWE6TyS/WeTq1SKZ9FrKEh4YGO+ZsrKkYD0DkVLZmc1Bt2Hs3pDaR5nSprkShrJL7ZZQVBR4Mo0q+aniiPEuM6HgLDiHpSRRMdY++JmFrJb6DW9vV0CMPJ53Bcn3xqRtLxrAWXozTLGQrm4XaQSUq6RQwxH2vc8IZL3Gu55mPDIZ8xfHlYn5SU4PHzP7vUV/cy1+w2rvnItXeRay/pyxASHKQgCDELQkLjzuPV+ttn53v2cT46vOxj8n0UZ1/jMQKWuu7HFXfrvZtSvi5Tz47URBt/dozggKHbrZfmVQPeq28sry5P/YkB+LLtv7i/QJ9WpPpeL3tjl+7c/6Bg+fAP',
  },

  {
    id: '38',
    title: '조나아리+수엔',
    leaderName: NAYUTA.name,
    characters: [
      { character: NAYUTA },
      { character: AOBA },
      {
        character: JOSHUA,
        equipments: ['후회의 갈고리', '시뮬레이트 스타', '트라페조헤드론'],
      },
      { character: RINA_F },
      { character: SUEN },
    ],
    owner: EXTERNAL_USERS[4],
    desc: '조나아리+수엔',
    descLink: 'https://arca.live/b/resonance/130145554',
    autoPreset:
      'rVdNb9swDP0vOnuAvj983SlAuxbYbkMPxqytRtPUsxNsQ5D/PklpHMYSYtlNbrQkPvKRelT26NlWte1QSbD/KVqgH1VXr+r7qkXlHhEsMWbcuA3F0SCGAoOws0GFBobGYJsGDigFZ5gA26iR0AGHK8BgUoEVBQ3pYuPDGQEdwEAp9CYoXJFwhcC0YaAKEqJB2kR5b4cji3dNv0Xl9z1qalSeYy9Q/9Ks1yv3kVCGiSSiQNuq+2W33/61FpW4QG9/NrYLO0JdmPO/6+1j1VWvqPx0tI6bHRgE8BSMADCnOAKwv3dNuzqFiAjRvoAKPX0E29ECsFEAJ8pnfD09RU7HNrX9G9jMQ/QlGtPJDZ/Eo7kAvnPHdDLPyFUApk0+ZyrmzOU1zRm95Izlc4YTnLHbcebvWpySmE6JLW0DfwXjKsVNv7xKTjEuY6MTNyq6R05nIlJkUIPMHA2OWaVm8nKFLEeR59aRJ+qo6Ow6ZremHxqxgIQw5glIPqIT/KjpPl5YTvIL6+dhFP0tQjD5vaVootISz+6tfOHmka46EYov1XIR0qnmFXJ28+aPChNPXknUDUe7EalRwWaPinxEoRP3kc/XnBnDKSKRcK0X9UWw3t+x7vUnDgCWjmpHEiOLkMTIOntIilAMiw/j0C66a1ximSpxQgCvxUGXxOFFZftsu8/u4RoQmv4u/DfwHx42qPxZrXtboBdrW//py+41bOve1vZdlwb4QZSGbhgYOjX9kwf42o6c103vH86n1vgP',
  },

  {
    id: '39',
    title: '조리수베마',
    characters: [
      { character: MARGIELA },
      { character: VERLAINE },
      {
        character: JOSHUA,
        equipments: ['후회의 갈고리', '시뮬레이트 스타', '트라페조헤드론'],
      },
      { character: RINA_F },
      { character: SUEN },
    ],
    owner: EXTERNAL_USERS[4],
    desc: '조리수베마',
    descLink: 'https://arca.live/b/resonance/130145554',
    autoPreset:
      'xVdLj5swEP4vPlPJbwPXniJtH1J7q3pAxe2izSYpJGqrKP+9NpuYGRPhELRabiM8M59nvnn4SH5Ubf3QdHtSfjuS7qlZr1eb2v4lpcjI9s/GtqualIz6T7CMHDr7uWqrZ1K+c9K+an/Z/dd/O0tKmp3V3XnCuHAKhpOMNL1MNaW8kKS38KLg9O3vQ7NbXfx/P2XH2CSGIPJipBRjCiB6DMKDHiCwvIggXJQ/VLsLhLuv7T0yzRT0KLRJXxp7NKKY5ZH588CjEK/uUVLs8YbELr2jwR7ZXI8z80g1Qx5ZwdMeYf3w5fWjNK6ffH79RCYlO/N/4PyRCFJqdcqmq18oDtFrRHLOEeXEXcjMVWQxMJYAFuHSSyNmuLyKq6ApYFRJCKxAJUOlSkdskk4zKqi/CVNUIjoJ9epVK3PUfbmZn44opnSsND0AJEdx5zou4/QAoPMah+EaV+0NjWOZR50LHGY6r1WNqTu/Valo1N8wgyYhzKU3VQzTm6n8DbYNireNGMK4j9BTstKjDpcOhe53DtgGFw8OZ+ZqG0x2wT6IGDwIkFk8VHGTTcfGcMxUKhePCMGvD1XjjkpSyuRoxSGSKHWYxTIZoZH1OwopWjvwqEonafxymJskqgROkroBwrRJXoz2C1/N04U3yd3ihi67dOnN8dKbqhZ3oaZ7sFVt2/fuXfdpQ8p9e7AZqZvOP/SC4mN/Bnb7J2t3Xufj4blH4o+v6jOZw/T2uoEUQfDbeBB8roZjbtx60oZ2OPxxy+wgcGCaQtN+eg6CG2zAKTDACtajDu0OWIOo3VgadNxbECAQ8Bg0rSBqKPh8AAGaNhxiQwK8ggJ+/EOxZK5XtNu1PWc0pCeUUeBRIOhlRLjcb/ePL4nvY9F0X3YXFvys1p09/Qc=',
  },

  {
    id: '40',
    title: '조카스카시',
    characters: [
      { character: KATAS },
      { character: STELLA },
      {
        character: JOSHUA,
        equipments: ['후회의 갈고리', '시뮬레이트 스타', '트라페조헤드론'],
      },
      { character: KALEYA },
      { character: SHIZURU },
    ],
    owner: EXTERNAL_USERS[4],
    desc: '조카스카시',
    descLink: 'https://arca.live/b/resonance/130145554',
    autoPreset:
      'rVfLjtsgFP0X1q7EBQO2t11Fmj6kdld1YdW0E02auHaitory7wUysa8Ng8s4WYWH7zmc++ByJo+6bnRHKqDul2dk2z+4ubd113zYk+rYnXRGnrRu7cz7009S0Ywcjo/XLW70zfx52PZHUn05k8Pvve42Dbapf5227ea25asBMcsEqLTrgmSkf9rudhs3ybiZY7mZPNbdD338/LfVDuS6Z9/oP6TiGTn1+roE7v/HuqsNtTdwyc4xPIAc4zk4AJWFaGOIGZkkRBFALNYiBr6efRFVfVThqihD4DzgEE5GCu/qllRnwkklLpiY8HmxsogSYTn1xBGFmJLxcfklog8PyMMhSgNK5tGQNipCUTbSoDEaNF0NYMpPBpDrkmFKAagfWjH/SDoLFJiizcgKJ6SvVEknkVLSpaRhgTRldJ40TtB1SRPLEp6HahOLuwNS3OECM8EdJU9yBxUi6I6pN4JxImRSQRFzYvGCwqkKElMTYmq9YEVioRPydbyWU1v6AS35UqFTsQrzEo3/lweYSJIHXDnwacqJPHIxubmnBVVw3+ROLHScpikhafm6QHGJFRMnL7yiY1oIccei46SJahGoe5IWd7yGltPFv5CpLMIQTn37fVKALFOAQPVXdJUjoletf+Tcv/IohaSsiIaan4dCBRBXdaapN9y8YM/iynOI13BYg3e93EAVSZy4S5VETkstKpdq7iyQgDtlltyiGh4Wo//U3l573+tdb5573WGnn0kMITAkzUB3KCY3UY2xZtvb1+BQNu1g0zzzGfLKijY8RIaBPeIwsME5Dkw5GAfmQYVW8ACQNXv1jwPzzhhxKPrGdi7ImsTc0DbbCCMDyLTtEhHrAlvD52EYp0TnYUo5vwwd3rhS4iNIrAHDoMqCXi7/AA==',
  },

  {
    id: '41',
    title: '여름-시즈루 순환 핵폭발 (2025.01.21)',
    leaderName: NAYUTA.name,
    characters: [
      {
        character: NAYUTA,
        equipments: ['에비서레이터MK0', '시뮬레이트 스타', '해리슨 장치'],
      },
      {
        character: SUMMERSHIZURU,
        equipments: ['부러진 검의 불', '시뮬레이트 스타', '초인과의 주사위'],
      },
      {
        character: DUSTIN,
        equipments: ['블루 일루전', '시뮬레이트 스타', '트라페조헤드론'],
      },
      {
        character: TENNIE,
        equipments: ['축퇴 폭탄 3호', '시뮬레이트 스타', '베타 세계선 박스'],
      },
      {
        character: STELLA,
        equipments: ['이차 상전이', '시뮬레이트 스타', '여명의 옥새'],
      },
    ],
    desc: `[더스틴]의 [천상의 불] 메커니즘으로 인해 [레드카드], [옐로카드] 사용 시, 그리고 [옐로카드] 폐기 시 [더스틴]은 [천상의 불]를 생성합니다.
    [천상의 불]는 최대 18개의 [폭발물]입니다. 최대 한계를 초과하면 자동으로 방출됩니다.
    따라서 [나유타]+[더스틴]의 순환 팀은 [옐로카드]를 반복해서 섞어서 [천상의 불]를 생성하고, 핵폭탄을 터뜨려 대규모 데미지를 입힐 수 있습니다.
    사이클 동안 [천상의 불]의 생성은 [혈액 회복]을 유발하고, [천상의 불]의 방출은 [비용 회복]을 유발합니다.
    이 기간 동안 [나유타]의 [재구축의 힘]를 사용하여 피해를 피하고 [더스틴], 여름-시즈루, 테니를 제어하여 팀은 극도로 강력한 생존력을 갖게 되었습니다.
    [나유타]+소머의 조합과 비교했을 때, 여름-시즈루 자체는 일정한 장기적 출력 능력을 제공할 수 있습니다.
    동시에, 여름-시즈루의 궁극기로 인한 동결은 테니와 조합하여 코스트 회수를 상당히 증가시킬 수 있으므로 소머를 대체할 수 있습니다.
    캐릭터의 각성과 공명이 낮고 코스트 압박이 클 경우, 테니 대신 [아오바]를 들고 다니는 것이 좋습니다.`,
    descLink:
      'https://wiki.biligame.com/resonance/%E6%B4%97%E7%89%8C%E6%A0%B8%E7%88%86%E9%98%9F-%E6%B0%B4%E9%9D%99%E6%B5%81%E7%89%88',
    autoPreset:
      'rZZRT8MgEMe/C8814YAC7atPS9T44JvZQ2OJLk5duhk1y7670G3dHVQXpXuCHrsfd/zhbsueXNO6jtXAw8+IgnVvS3e1WG9Yfd9/FJUt+oHSh0FYth/Icj8QRs8L9uzc6rLp2pv3F1bzgr1tnlwXPvSzdrF+8OO7r5XzuIKFyYGzZe9rNxjWz 4vlcvbauk9WS+/l49V1sxZvcdN0j26z/wM//sGvYCBkvytWBI+3Tdf4nVx4n4veynXYqkHW62bF6i2T3s9uV9B9UHBIw4nUg0pbEs+KJ1yy098BfWQEAKqSGCDL6QGKAmBqgLUUIHIA6AwGeUSHD1oxTARhskLyCidEiImgeUWJUE1KTGIEjy FECang/5fVo7JBS5pEPemxiZFj49GxZYUUnqozSbQySqLN0v5IErkBGpKcGqAtBUx1uQYZCE4BalIZJHfJpyyWQd6hGH1OeAqAykBnxYiewB9jlJIQRfUXqatRqf9UEA9KN1ToVCZqtBoWTHnTmZqYXLMkv2AVj65Z1i1IiOl7bCV9j6XJe4/ HqqYgAJUFSESaSkZYGYk07ymJiWkZVSJKos5rPe킬고페BkVtb9cRJG4/0fbmALxLcUlkLSN830vO2sPX4cjCnkYGrdhEvoDZAFk8WV2mIRu8rTMV3j0H4EtCjtAlvCuIAt2YBE0qBctk3iCl1niWuNlBi/DYWsctlDYgiahIz9ZTNjObvcN',
  },

  {
    id: '42',
    title: '순환 핵폭발 (2025.01.21)',
    leaderName: NAYUTA.name,
    characters: [
      {
        character: NAYUTA,
        equipments: ['비트레이얼', '시뮬레이트 스타', '춘추합성인장'],
      },
      {
        character: AOBA,
        equipments: ['비트레이얼', '시뮬레이트 스타', '춘추합성인장'],
      },
      {
        character: DUSTIN,
        equipments: ['부러진 검의 불', '시뮬레이트 스타', '트라페조헤드론'],
      },
      {
        character: TENNIE,
        equipments: ['축퇴 폭탄 3호', '시뮬레이트 스타', '베타 세계선 박스'],
      },
      {
        character: STELLA,
        equipments: ['이차 상전이', '시뮬레이트 스타', '여명의 옥새'],
      },
    ],
    desc: `[레드카드], [옐로카드] 사용 시, [옐로카드] 폐기 시. [더스틴]이 [천상의 불]를 생성합니다.
    [천상의 불]는 상한이 18인 폭발물입니다. 상한을 초과하면 자동으로 방출됩니다.
    [천상의 불]가 방출되면 [더스틴]은 자신과 HP가 가장 낮은 팀원을 발동시켜 HP를 회복합니다.
    [천상의 불]가 방출되면 [더스틴]은 0.2 코스트 회수합니다.`,
    descLink:
      'https://wiki.biligame.com/resonance/%E7%88%AC%E5%A1%94-%E6%B4%97%E7%89%8C%E6%A0%B8%E7%88%86',
    autoPreset:
      'rZbLbuowEIbfZdau5FucONuukHqOzqK7qouosVpUCihQnVaId6+dQphxAg4K2Vmx55vLP2Pv4M1VtWugFDx8uWTwUjX1rP5TraHcgeCGc2WU38AOi4yfFkJY/EegP9KcFlKjM0pk+IzE1hBH5hZby/AiRwaMxqbRQlpyBoegiWlyxmDTOFJJ gpPYUeSOLMKZPYN359b3PpN/Pz+g5L9ZfZhvtlA+7eBz4x6/1649tnmfLxazZe2+oFQMVv+XrpnVuCB+97+qqbydu26/3wA+Jh4yCAzm7froDYNt1by67S+DnywciupTwfd7Rv2gYGkLhGpJWZERkK/pWVBw9TKgjYwAhLYKA4LQbg3QFCBu DSgKCpBTAAM1EIakKDRZEoAFJgcZkYFIYcJwoNCgOCrKUxAxsSfpUUQdEfMpRF+HBFF4DCGGGXWZeEULi2S8VvdoqNEKDlELPz2npBl51Z8bop0TeG7Yng/E6zjNfWg6zYZbWljRh55Pc7I72rCxbNSN24+bggJu3t+SU4C+rr+HGZfVx/O4 v8UV3dafKLlJEbUQtNtMX//nicODOBGjUlTt9pr+HnGxSBKPtlPLlk6iLFSURDVpLI8om7QRkU8RyqixnEVjOSWUbiVZgj7iZaUjzVy4bM++rNJ+pK+HgcsIz1AVXw9HP54Z1PNNeHl2Um5WC3d4hnbzofOjS0xXn6M0vKXV9s014UUbTP8A',
  },

  {
    id: '43',
    title: '[카타스] 천둥불검(2025.02.05)',
    leaderName: KATAS.name,
    characters: [
      {
        character: KATAS,
        equipments: ['부러진 검의 불', '자각몽 섬유', '트라페조헤드론'],
      },
      {
        character: DUSTIN,
        equipments: ['축퇴 폭탄 3호', '시뮬레이트 스타', '뫼비우스'],
      },
      {
        character: STELLA,
        equipments: ['에비서레이터MK0', '시뮬레이트 스타', '여명의 옥새'],
      },
      {
        character: JOSHUA,
        equipments: ['공간 위치 측정기', '시뮬레이트 스타', '베타 세계선 박스'],
      },
      {
        character: CAROLINE,
        equipments: ['에비서레이터MK0', '시뮬레이트 스타', '모노폴 마그네타'],
      },
    ],
    desc: `소방대 소개: 새로운 자기 훈련

천둥과 불의 검은 불 팀의 하이엔드 유닛으로, 단기적으로 매우 강력한 버스트 능력을 가지고 있습니다.
[조슈아]의 특수 기술은 [카타스]의 특수 기술을 직접 끌어낼 수 있습니다(특히 적이 여러 유닛으로 구성된 경우).
불 팀의 느린 시작 문제를 해결합니다. [스텔라] [수선화]>[노래]의 시작 비용에 의존하여 2분 동안 카드를 지속적으로 출력하고 뽑을 수 있지만 3분 후에는 [다크 아트]와 [블랙카드]가 핸드 위치를 차지하기 때문에 사이클이 영향을 받습니다.
이 팀은 주로 [캐롤라인]의 각성 효과에 의지해 카드를 뽑지만, 리더의 스킬이 발동되는 특수한 방식(즉, [점화] 효과), [카타스]의 5코스트 [레드카드] [다크 엑스칼리버]의 무작위성, 그리고 코스트가 회복되는 방식([조슈아]의 [검은 물결]는 [블랙카드]를 소모하고, [카타스]의 [에너지 풍선껌]과 [더스틴]의 [천상의 불])으로 인해, 팀의 카드 뽑기와 코스트 회복은 종종 폭발적이다.
[더스틴]이 [흐르는 불]를 낼 때, [카타스]는 리더의 스킬을 여러 개 연속으로 사용해, 폭발적인 카드 뽑기와 코스트 폭발을 초래한다.

하지만 꼭 언급해야 할 점은 [조슈아]의 [블랙카드]가 바닥으로 가라앉을 수 있고, [카타스]가 큰 움직임이 충분하지 않을 때 카드가 부족할 수 있다는 것입니다. [퍼플카드]의 낮은 우선순위는 불필요한 [스텔라] 카드와 [다크 아트]를 가능한 한 적게 플레이하는 것이고, [스텔라] [퍼플카드]는 [블랙카드]가 막혔을 때 핵심 카드 뽑기 효과를 낼 수도 있지만, 이는 이후 사이클에도 영향을 미칩니다.


역할 세부 정보:

[카타스]: [카타스]의 리더 스킬은 재사용 대기시간을 갱신하기 위해 점화/불타는 땅/초원의 불꽃에 의존하므로, 팀원은 주로 이 세 가지 효과를 발동할 수 있는 캐릭터에게 접근해야 합니다. [카타스]의 두 장의 [옐로카드][에너지 풍선껌]도 출력 외에도 비용을 회수하는 중요한 수단입니다.

[더스틴]: [더스틴]은 많은 양의 점화와 비용 회복을 제공할 수 있습니다. 2스트라이크 효과는 [더스틴]이 일정량의 치유를 제공할 수 있게 합니다. 4스트라이크 효과는 [더스틴]이 많은 비용을 제공할 수 있게 합니다. 5스트라이크 효과는 모든 팀의 [레드카드]가 [더스틴]에게 점화 효과를 제공할 수 있게 하며, 점화는 자연스럽게 [카타스]의 주장 기술을 새로 고칠 수 있습니다. 특히 [천상의 불]이 대량으로 저장되어 있을 경우 [흐르는 불]을 사용하면 [카타스]의 궁극기를 빠르게 새로고침하고 대량의 마나를 제공할 수 있습니다. 동시에 [천상의 불]이 폭발물인 만큼 화력팀은 UR [퇴각폭탄 3호]의 보조공격력도 함께 활용해 큰 데미지를 입힐 수 있다.

[스텔라]: [스텔라]는 이상적인 조건에서 팀에서 [뭇별]의 비용 감소 효과만 제공하면 됩니다. 다른 [퍼플카드]에 저장된 [옐로카드], [레드카드]도 사이클이 막혔을 때 역할을 할 수 있습니다.

[조슈아]: [조슈아]는 많은 불타는 땅 효과를 제공할 수 있습니다. UR [공간 위치 측정기]는 [조슈아]가 게임 시작 시 그의 시그니처 스킬을 사용할 수 있게 해줍니다. 상대가 여러 유닛을 보유하고 있다면, 그는 [카타스]의 리더 스킬을 직접 새로 고칠 수 있어, 불 팀을 시작하는 데 어려움이 있는 문제를 해결할 수 있습니다. [옐로카드] 자체도 자신이 생산한 [블랙카드]를 소모하여 많은 수수료를 제공할 수 있습니다.

[캐롤라인]: 파이어팀에서 [캐롤라인]의 주요 역할은 자신의 리더 스킬 드로우 효과를 통해 높은 빈도로 파이어팀에 많은 수의 카드 드로우를 제공하는 것입니다.`,
    descLink:
      'https://wiki.biligame.com/resonance/%E5%8D%A1%E5%A1%94%E6%96%AF%E9%9B%B7%E7%81%AB%E5%89%91',
    autoPreset:
      'rVZNb9swDP0vPHuAKNnyx3WnAt0HsN2KHIxZW41mSWCn2IYg/32SnCxUm5LOkpzEiPLjIx8p7aAfv2zet0P3aQXN93Y5ugy6fvzm//n6Z+OgMZl3uXdt54YXbo/xT2hQxV+ewXr7OHlBozIY1kt3349baB7+ucSFrqtpgaaeFsrgcVEsMnhyLsb08fln/ FKI5q770G6g2QEqG/wLD5wdDF2dDNQlNZAY9Iy2mhi1oWeogTkx8sTNkgiom87VyVCqoGc0jbomhi3pTkKBRl3RcHROcahhqFutKZ+a0g5u+ym/h0rtoPfVO53MYNsOP9x2EoOvxfjUL5d33sfnSSmLZQbPo5u2/YfXv1ZuiNvHuobtz+3Q+lK+82AUIG RKACiqggMIUnoFMH1h1bnf0OiM4IUkvY0HEVD58rOUgtA5RJMiFjMQ88sRSZWQIxURUKiSBMBxOABUV+UsqZJhCcWcIca8csIrLqhSaASxSqUWEFmphwbnk4gWWamfBXiTUhiDEiW0vPDONheByI3YvaW6XS8ZVodHXdjrdIFJ95o580LQhcQxQQzzWeJ oVX1DjuHuEzkWUrcJ0nyxnQoV4bR7uOP9Pav2Z1pQyXpNmLBzJlymMnNJT2zXoxZvUGXZ0Sn1oJaHv2Z7UAQQm1yVeAVAeIgJADnPQKyBFVNkze0eGeHBJk/eGUqef2H69684GA0/psJT/H9b2MS7Jmnhh8XrCNJBqc9GwHav4UKo54RgzKUhLPZ/AQ==',
  },
]

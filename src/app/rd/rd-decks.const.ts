import {
  ACHIWA,
  AKIRA,
  AOBA,
  ARCANA,
  ARINA,
  CAROLINE,
  CHARLOTTE,
  CONNOR,
  ELIOT,
  FENIA,
  FLAN,
  JERBOA,
  KALEYA,
  KAREN,
  KATAS,
  LIVIA,
  MARGIELA,
  NAYUTA,
  PRIMING,
  RACHEL,
  RINA_F,
  SHIZURU,
  STELLA,
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
  title: string
  leaderName: string
  desc?: string
  descLink?: string
  characters: RSCharacter[]
  owner?: ExternalUser

  autoPreset?: string
}

export const RECOMMENDATION_DECKS: RecommendationDeck[] = [
  {
    title: '싼마이 페니아 인뢰덱',
    leaderName: FENIA.name,
    characters: [FENIA, CAROLINE, YEJUE, RINA_F, KALEYA],
    desc: '장점 : 싸고 맞추기 쉬움\n단점 : 싼마이인 만큼 화력이 비교적 딸림',
    descLink: 'https://arca.live/b/resonance/128678257',
    owner: EXTERNAL_USERS['1'],
  },

  {
    title: '순환 메인 페니아 인뢰덱1',
    leaderName: FENIA.name,
    characters: [FENIA, CAROLINE, NAYUTA, RINA_F, KALEYA],
    desc: '장점 : 덱순환이 빨리 딜이 쎔\n단점 : 안정성을 포기함',
    descLink: 'https://arca.live/b/resonance/128678257',
    owner: EXTERNAL_USERS['1'],
  },

  {
    title: '순환 메인 페니아 인뢰덱2',
    leaderName: FENIA.name,
    characters: [FENIA, CAROLINE, STELLA, RINA_F, KALEYA],
    desc: '장점 : [순환 메인 페니아 인뢰덱1]보다 순환력을 조금 줄이고 안정성을 챙김, 스텔라 궁쓰고 코스트 감소 상태로 카드 난사가 재밌음\n단점 : 카드 쓸 때 생각 잘해야함',
    descLink: 'https://arca.live/b/resonance/128678257',
    owner: EXTERNAL_USERS['1'],
  },

  {
    title: '안정성 메인 페니아 인뢰덱',
    leaderName: FENIA.name,
    characters: [FENIA, CAROLINE, TENNIE, RINA_F, KALEYA],
    desc: '장점 : 안정성과 적당한 순환력을 챙김\n단점 : 화력은 [순환 메인 페니아 인뢰덱1]보다 딸림',
    descLink: 'https://arca.live/b/resonance/128678257',
    owner: EXTERNAL_USERS['1'],
  },

  {
    title: '카타스 화염덱',
    leaderName: KATAS.name,
    characters: [KATAS, KALEYA, YOIDUKI, ARCANA, VALENTINE],
    desc: '장점 : 카타스만 있으면 됨, 쌈\n단점 : 다른 화염덱으로 파생이 어려움',
    descLink: 'https://arca.live/b/resonance/128678257',
    owner: EXTERNAL_USERS['1'],
  },

  {
    title: '마르기엘라덱 / 마키라덱',
    leaderName: MARGIELA.name,
    characters: [MARGIELA, KALEYA, RINA_F, ARCANA, FENIA],
    desc: '장점 : 화력 하나는 ㅈㄴ 쎔\n단점 : 순환력이나 코스트 회복력이 부족하여 답답함 유발',
    descLink: 'https://arca.live/b/resonance/128678257',
    owner: EXTERNAL_USERS['1'],
  },

  {
    title: '단일 화염 나유타 덱',
    leaderName: NAYUTA.name,
    characters: [NAYUTA, KALEYA, CAROLINE, RINA_F, AOBA],
    desc: '클릭 시 상세 가이드 링크로 이동합니다.',
    descLink:
      'https://wiki.biligame.com/resonance/%E5%8D%95%E9%87%91%E7%81%AB%E6%A0%B8%EF%BC%9A%E9%82%A3%E7%94%B1%E4%BB%96',
    autoPreset:
      'vVdNj9MwEP0vPgdpxh+JnSsuHBDe0h4gYiLbblqQVoGr/O7ZT6NR2aXeTUvUy9njey8xzZrJnbTd8bvr246+NZTUWrBvubNPa/rVbfLdi9ZdmOdiCeZ9F+6bZsHrPEEoAoXg4EAwwhhhSHA00QN3waAhQxFDEjZuS7EgSGisCykugAZAGIKFRa7 KjKU5FQ2ticEXPVBUFJQwQBX0eSXPgjacxcXfdsGX1pz3bDfZ90zePhzy6w8q5DA/dcrlonT8XgFLrgq1/rGwflsD/Kl78PcvqVxissWRuZ9v0X+12NKFg9vuu2yz+gN67kro4x5o9Fftc+IiEEWcR8XmIcC2inAsRc4iAESKUSs+D6GudIgptYkQh cB5Er9VcVpE6eXUTBixQQKflKRzGcKvW/gzyjiQd50WwRMqyiuFjhgLYRE4ZsdG0V글란GpmS4tIKSCcVqaElIIyfN7KXCFHmEuO+twFIE4m89DczCdHfplCxTOlL+GWeQ+CJ3fC5C6lKP+j+nyfSiiUoG9JIX416YwW0MjbUsj0nPN99Xk9R2bfx3 HpMVd6ccsLkJRe5Upv5qUQTTkyHDvMOkQDSifdIdzXf3cHWU3oDiJDzxGDU2JGpW0rncCSDiKmtq3LxMoXEZOU2BXz4qWCJsT8GJwSS2aduJSophK7OONJ/vIWxxC1l2nF7k+bt5uh3Uq/XtqDpwtL/t57+LCJPqAerA1Lb3ePAWu9/TZ+ZPlk/gY=',
  },

  {
    title: '단일 냉기 나유타 덱',
    leaderName: NAYUTA.name,
    characters: [NAYUTA, ELIOT, YER, RINA_F, AOBA],
    desc: '클릭 시 상세 가이드 링크로 이동합니다.',
    descLink:
      'https://wiki.biligame.com/resonance/%E5%8D%95%E9%87%91%E5%86%B0%E6%A0%B8%EF%BC%9A%E9%82%A3%E7%94%B1%E4%BB%96',
    autoPreset:
      'tVdLj9sgEP4vnF2JYfwAX3uKtH1I7W21B6umXWuzSWonaqso/72A8xg7sA6R1yfGY2Y+hm8+8J413bfNx6qtv6xY+bNadjphP4y5qD9VG1buGfCcc8yAlZD0BuT8YmDGqYd8JlRGPxPEUxRkjkTiwYx6JPHQPJgqYkDOSn6aozidQwOkFJukqKWiqHM KlHigIEsAsKgPCXvWVa1bM+b2KUTC2vVSPzTdlpWP55f9IMPjoIB+AJj2A5Tqqa/7ceaedS/NcrmoTWSBHFKVJqwx1mU/Erbr9NeqrV5Z+cHg0r93zWZxCmDCrf+sdOsinLGZGd//bbRbx7Zqf+ltb/JDcp0Rhxn5O2fkiEAz2m2JzGjKeGtG5lKCYe Loq3HK8Zp8KPqoq1r/dVkpgst6LJk8EITM4yBY0twJwXauhUCLjCwY7YwRVSRGS/UgJLzMdRrz+OQpiyFc7M6IibJgeGcK5qMjH9JRvjsdhYqko8vw5qJFkAuK++hoXHNDCNPRKOqQjlakp+mY8tiuHdMRY+kIKp1bKMJ0lPyajkaPxUCP02h1jNDjk zRFLnpamsJ0NFcHHwR30M0KIVz3zNsRkM7elG9AkN6mRJxbDMPHlLm2jc4IuOWMAIgWbAhzQ4yacs/QctTTFlLOUJnrXNlhiIbehK5Uyx2PUwUyLXvHJt5RIALMHaLTchoLbCyntwAzeZvuwd2WR78b6+1z/84lftHa/Y983r06u246ey8+MvXwHw==',
  },

  {
    title: '페니아 인뢰덱 찐종결 올인원덱',
    leaderName: FENIA.name,
    characters: [FENIA, STELLA, CAROLINE, TENNIE, NAYUTA],
    desc: '해당 덱은 모든 캐릭터의 모든 장비와 옵션작이 되어 있는 상태이므로\n현재 실현 가능성이 매우 낮음',
    descLink: 'https://arca.live/b/resonance/129033582',
    owner: EXTERNAL_USERS['1'],
    autoPreset:
      'vVfLrpswEP2XWVPJHj/AbLuKdPuQ2l3VBSpuL7ppbgpEbRXl32tIgDHQEOfSsvNrzvHMmfFwhC9ZmT8UVQ3ppyMUOaTAmWYMRQwRHCr78ffeQsojsD8OxX7T7f0cwfPPnS037gRn7hOMRVBn5Tdbn4+4YfVUbLebXW5/QSpaa++zMvsO6SveLbaA6A5LbeAUHYfpdlYlKqKsJIMZJiNYnxiaZAw9XGuCyKWRFFEoHozIYgxDFD5i+B2DEdFDlGZ9xME8x0AptRF7gZS4luBTEFoEUoj1VQp8gQImwldzx2w2tp2pN9ke0iMIB3eKPA8qCHVSiCAcL+Hj6X+YZmdXsPhGV6iRK3iwK7xgsb8LFY0KU0mbBC9QCRNiLFRMwihwYcJk4FPgXOCcUF1NuC060osOGj2JzpKTPIaSXF7M8lL3JBDGcTAvcaNqBJp1Q7ZQ3lzIJqrRct3ytqAaJjmfUGDrUljsF9CMKKAK9MJSy7KUvg5zJnc4R1zUaDNBJTSV55JKJuT6i2PDaYLmF3ymE7+qzlK+u+DfRCHmPgXx3ylwZD6F2aK3IoX+QRv1Y0nid4Dh0bjWj+FMIZU6uauQimmBX0qja8SaNKg+7F+7n5B3O0i/ZtvKRvBos9yW1HxeVM2PyuVhcAzqR1s2p1q08nlrL3foj/TR6bOpLzudwxx4Y3STX27bP2FNcvW9eD9oHpFhIOg2JCuNioZtkhho+myyTZFtRlFQJAPXuZIzgjLwQJEOYmqAMtCSsjYUlNOVhOAoSU1rOuDtawhP1rYhfHs4P5VF9dBGsAtrXR7s6Q8=',
  },

  {
    title: '샬롯 덱 1',
    leaderName: CHARLOTTE.name,
    characters: [CHARLOTTE, NAYUTA, LIVIA, ARCANA, SHIZURU],
    desc: '주로 적이 많은 무대에서 활약할 수 있습니다.\n드로우 범용으로서 나유타나 스텔라 를 편성해, 한층 더 레드 카드를 드로우 하기 쉽게 시즈 르나 타라 등을 편성하면 좋을 것입니다.\n공격을 받기 쉬운 샬롯을 지킬 수 있도록 아리나,아르카나 등의 회복역도 편성합시다.',
    descLink: 'https://gamerch.com/resonance/877307',
  },

  {
    title: '샬롯 덱 2',
    leaderName: CHARLOTTE.name,
    characters: [CHARLOTTE, NAYUTA, ARINA, ARCANA, SHIZURU],
    desc: '주로 적이 많은 무대에서 활약할 수 있습니다.\n드로우 범용으로서 나유타나 스텔라 를 편성해, 한층 더 레드 카드를 드로우 하기 쉽게 시즈 르나 타라 등을 편성하면 좋을 것입니다.\n공격을 받기 쉬운 샬롯을 지킬 수 있도록 아리나,아르카나 등의 회복역도 편성합시다.',
    descLink: 'https://gamerch.com/resonance/877307',
  },

  {
    title: '초반 초보자용 무과금 덱 1',
    leaderName: FENIA.name,
    characters: [FENIA, YEJUE, LIVIA, FLAN, ARCANA],
    desc: '배포 캐릭터를 중심으로 매우 편성하기 쉬운 SR 페니아 번개 덱입니다.\n프란(R)이 탱커로 녹기 쉽기 때문에, 아르카나(R)로 HP나 코스트의 회복을 돕습니다.',
    descLink: 'https://gamerch.com/resonance/877307',
  },

  {
    title: '초반 초보자용 무과금 덱 2',
    leaderName: JERBOA.name,
    characters: [JERBOA, PRIMING, LIVIA, ARCANA, KAREN],
    desc: '네즈미(R)의 레드 카드를 끌어당기는 덱입니다.\n앞열이 버틸수 있도록 카렌(R) 등의 힐러를 편성합시다.\n타라(R)도 궁합이 좋습니다.',
    descLink: 'https://gamerch.com/resonance/877307',
  },

  {
    title: '냉기 덱 1',
    leaderName: WENSHENG.name,
    characters: [WENSHENG, TENNIE, VERLAINE, LIVIA, YER],
    desc: '동결을 사용할 수 있는 캐릭터는 많지 않기 때문에 약간 제한이 있습니다만, 동결 상태의 적은 찢어지는 것이 효과가 있기 때문에 샬롯과도 궁합이 좋을 것입니다.',
    descLink: 'https://gamerch.com/resonance/877307',
  },

  {
    title: '냉기 덱 2',
    leaderName: WENSHENG.name,
    characters: [WENSHENG, CONNOR, ELIOT, LIVIA, AKIRA],
    desc: '동결을 사용할 수 있는 캐릭터는 많지 않기 때문에 약간 제한이 있습니다만, 동결 상태의 적은 찢어지는 것이 효과가 있기 때문에 샬롯과도 궁합이 좋을 것입니다.',
    descLink: 'https://gamerch.com/resonance/877307',
  },

  {
    title: '보라 카드 덱 1',
    leaderName: MARGIELA.name,
    characters: [MARGIELA, ARINA, STELLA, NAYUTA, VERLAINE],
    desc: '마키라 의 강력한 일격으로 적을 닦을 수 있습니다.\n보라색 카드의 특징으로서 혼수 나 혼돈 등의 상태 이상 부여를 자랑으로 하는 캐릭터를 편성하고 있습니다.',
    descLink: 'https://gamerch.com/resonance/877307',
  },

  {
    title: '레드 카드 샬롯 덱',
    leaderName: CHARLOTTE.name,
    characters: [CHARLOTTE, STELLA, ELIOT, ARCANA, RACHEL],
    desc: '드로우 범용으로서 나유타,스텔라를 편성해, 한층 더 레드 카드를 드로우 하기 쉽게 시즈루, 타라 등을 편성하면 좋을 것입니다.\n공격을 받기 쉬운 샬롯을 지킬 수 있도록 아리나, 아르카나 등의 회복역도 편성합시다.',
    descLink: 'https://gamerch.com/resonance/877307',
  },

  {
    title: '인뢰 30렙 코어 클리어 덱',
    leaderName: NAYUTA.name,
    characters: [NAYUTA, AOBA, YEJUE, ELIOT, RINA_F],
    desc: '클릭 시 가이드 링크로 이동합니다.',
    descLink: 'https://arca.live/b/resonance/129123153',
    owner: EXTERNAL_USERS['2'],
    autoPreset:
      'rZZNj5swEIb/i89U8ifYXHuKtO1Wam+rPaDidtFmkywkaquI/17bZMnYsATW5ITt8cyTmdcen9HPoi435ZfigPIzIjjFmAmMcpJ0AyLldUAzClZSYEalGeC3FWhGMwFWFNjDBDRj0Ewq6ICDgUoBAYGghAEzAamFF5RA19k1KOMwqBLwnxLoAMbJvIF10Caoar4fPpu03u9Q/qvYNjpBz1q7qa+nFxfxSRelro05tr+M2k13bi7YWFaNrdCPfwftIu2PT52Nc1Pvt/quao4of+g9XT5I98GY6D4I45cZqR4TV/bLzjM6NfpbURcvTgUPZtVM9BGPRf1bH7uhCalfT9Vh87bX2O7/7HS9KeF/aZ6r7dZNUYYJVzzpQ6D8k/FZmbVrPdokQDgjk1bRrs7BpjjwkCMuFSbRAYKpBnkfwar+gvBexAFd7x45/8QIOgzQmexK/dd5vJk3j8lqeglTX7kAjMo0EszqFyYrxcvB8BDMFH4SjM1TGhQSc2CDXYtJZ6gJT6lJLlbTiBSWZSaUo+LIYyLLijbikqpphdN5xxIwqWim1BzcOA3ZW9o7dTSeKfYmGDDxWKYMT5+1GbULmdg6l4C5TCKTFYjqWsCR6Ct3NTrR1fgHru+RBFHJIys3uL7JOmDm+RB39AIwKpb2Fe4mx9se4dOncMbN4AvLPmzXaXss+qHgtT37YPbA6Ie63I2eM6azMOVEBD3nVj+eQypGSIdHUcqpByZdJ0GD474wQeZSQH7lUtQ+tv8B',
  },

  {
    title: '점화 30렙 코어 클리어 덱',
    leaderName: NAYUTA.name,
    characters: [NAYUTA, ACHIWA, AOBA, ELIOT, RINA_F],
    desc: '클릭 시 가이드 링크로 이동합니다.',
    descLink: 'https://arca.live/b/resonance/129123153',
    owner: EXTERNAL_USERS['2'],
    autoPreset:
      'vVfJbtswEP0XnlWAiyiRuvZkIGkLtLciB6FiGyGO7Uo22sLQv3dI2fFIZJgYVOKTKM7yZnsjH8mPumtWzW29I9WRMFpQKiQlFcvGAysUPjB0kBLfIB3BClLR803J0Y0UlwMvy4uYkEiMlsg0V/QixiWCw3WBEDCKbzA2hXUmwWl0oHmOrQmMGoUtco3EJjpK4+DsYchI23/dfYQcf96Q6me97k1GHoxxrz4dHl1k96ZuTAfi1P5KbpVu3LuZYtP2tlzf/u2M87Td348yzky3XZubtt+T6vuTJfcgVJmd3rDxgYn8fKXvMtcDJ80jOfTmycG+7n6Z/XgED+b3od2tzqKguP2zMd2qwdD7h3a9dq+4gPzoPLMWv9RdDcF+AJst3F3yOmSLexQxjzTRIyRs5pEKwZ73aJvCehxVNo3565ymhMwQAOIQMJik5yHYVlwUgu2eOQSuiggESw8v5P2s6pgolPdybh7HIwKgpwgZ45JMMSkvLSKtMtxLC3RcJC2WDt80LezFtEB30GlagNbfYERobET8QvCUQkwBnMLUsRGxi2DREQlBAEcxCLAnF27HAFHoPAaBpbJjkI95ZAByn5qSSh+mpmjQBVs270EIsOkiBC397kuCEOo+lkd3hPRnMHFNhchQxCDoGfHwOBkeCXyi0cEPlPmUO+uv10wOHouRpT2tq5DK4TXDolRsW/BFEgRTl5wgPq1ccRWwq9dYCJHH73y6xuDLPF60q3ctGJ3vtUJG6kXfBUIpI6vV/pEa7ob/',
  },

  {
    title: '냉동 30렙 코어 클리어 덱',
    leaderName: NAYUTA.name,
    characters: [NAYUTA, AOBA, YER, ELIOT, RINA_F],
    desc: '클릭 시 가이드 링크로 이동합니다.',
    descLink: 'https://arca.live/b/resonance/129123153',
    owner: EXTERNAL_USERS['2'],
    autoPreset:
      'tVbBTuMwEP0Xn7OS7XFSO9c9VYLdleCGOETEQEQp2aQVoCr/ju3QdBIHA3LozfV43pvJm2cfyE3RlOvyvKhJfiCMZpRCSknOkn7BpDwtuGBoJ0NhwDKS0+POiqMzq9VpB1KOE+BsDFC2FC24ynDYiBsOgxQtcAlc0hMDrkZhEoNiOgoXJxQGVbg4u+gS18Wzqt2R/OpA9q2+fK21C9sVzZ3e9UvDQf/fV/X6GHqdkKfnrW7WpYml9rfiCWkfqs3G/cWBMqFEYjP+K5rikeS/TM7K7J04d8niiBBCpJGIINUEkQKwjxFtwy1if2Rb6hcHGlMyQwSIY8CMSj+mYD/zohQYCI8Cl1mAgp22Ud/BwzwedbNsMScAoHyASUWfdS6F8ZcBry0Q92W4x9ooLtAW6xQ/IEcakqP0iuYxRY8JvGtBheRozWlROc5RMEAhCsbiI+UoqF/jREnfk6O9nRaW44xRKBFqC4t1x1k/5oEBEL41Rclx3pqCRWcL932WgrnpAgad+hMRRWFuIpgI3hGp7wuR19ScGUKIgnnbjNTHw0N5IOb9RDu/UOZb7kRfX5kcPBa9S3unvsU07b4yLFKGbgu+SIPM1EU3iI+/XLYIMUGjiU081dy+nQl60Lr+bd64f/aPjs29Lkrd4GLKqrWP4EHsVXvmYuypv1uS3xabVhu03X3/n0vTPG30O5Mh0yCggc9gCsfRvLbpL+pR6u4N',
  },

  {
    title: '나유타 무한 순환 덱',
    leaderName: NAYUTA.name,
    characters: [NAYUTA, ARINA, STELLA, AOBA, RINA_F],
    desc: '클릭 시 가이드 링크로 이동합니다.',
    descLink: 'https://arca.live/b/resonance/129066118',
    owner: EXTERNAL_USERS['3'],
    autoPreset:
      'rVdNj5swEP0vPlPJ4w+Mc+0p0rZbqb1VPaDidtFmkywkaqso/702EDC2WRaT3CYMfm/e2G/MBf3Mq+KhrE9o8/2CzrX6klf5C9p8gATVz+Vuty3QBgjFwLIsMQnf/h2V/itBp7z6rU5tiBOkXs/lcXtb60eCSv0mApxiTDlBCTr82auqWQ6bnyDXZAZRsnhEiEOk8Yh4CrHF2BfqL9q064cIIMMAQ8pQLAUgwqNAZOZSILMU8AoK/B4UGI+nQLhPAXMIUHBAiTTyWbVIv6M0ky71OWa37E/5sf+jK8vlBHOyEFghS+BE+LLMUcBizebwKQQ2xxwFECJeBSEDpxRmfAFTCtFFZz6i3kXziDgeMZtCXOJE2tFWyOw70WC//YIDPvedmDhH54Kozrsu8mQW6rbnyaHa6cgKiAx4ihi5GCy1gqYe0FtvkIQGeuQwo0Q6JuWfqbUm1SqdIKZzr2/5lU+PucLxNOQ6d/bQQUC3I+NDBSmdbMISG/NrirAxvGbMCv9CNZhKu8L0jO3gs4CuS1TwKXQqvJuCgJUU6FoKQPBKCuwNCpOwPOPR1sr8W0n4huWOTeBj5wBfvVFHmkWWGwexLSN0//V4pQ6v0EX6jpbhcfK10pPD8f+AjY39n8ZoRcda6RzzObYtuox+nJst0g/WIdBTqQ/M5cpKk9YTLaiVRq1A2u/oGoeAj5ZmdmClmctNH5ivPCvNJspTO82mI63AjOvhiSD2OzZROzAfHMMTZi8NdqWENLMCHU5PqvqoRW5a9KTyQlV2Q8v669E8ftyjza98V6sEVYed6prY5/WD7Hb+kn6f3sxYN7Moa9PP/pSX9UMD6AA8K9Vgfj6/mIn7Hw==',
  },
]

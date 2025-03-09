import {
  ANFIYA,
  AOBA,
  ARINA,
  CONNOR,
  DUSTIN,
  ILONA,
  JOSHUA,
  MARGIELA,
  NAYUTA,
  RINA_F,
  SOMMER,
  STELLA,
  TENNIE,
  VERLAINE,
} from '@/const/character/character.const'
import { RecommendationDeck } from '@/app/rd/rd-decks.const'

export const RECOMMENDATION_ES_DECKS: RecommendationDeck[] = [
  {
    id: '10000',
    title: '무한난투 - 소마 덱1',
    leaderName: SOMMER.name,
    characters: [
      { character: SOMMER },
      { character: JOSHUA },
      { character: STELLA },
      { character: ILONA },
      { character: DUSTIN },
    ],
    desc: '무한난투 덱',
    descLink: '',
  },
  {
    id: '10001',
    title: '무한난투 - 퍼플카드 마키라 덱 2',
    leaderName: MARGIELA.name,
    characters: [
      { character: MARGIELA },
      { character: ARINA },
      { character: STELLA },
      { character: VERLAINE },
      { character: JOSHUA },
    ],
    desc: '무한난투 덱',
    descLink: '',
  },
  {
    id: '10002',
    title: '무한난투 - 블루카드 코나 덱',
    leaderName: CONNOR.name,
    characters: [
      { character: CONNOR },
      { character: TENNIE },
      { character: STELLA },
      { character: ILONA },
      { character: NAYUTA },
    ],
    desc: '무한난투 덱',
    descLink: '',
  },
  {
    id: '10003',
    title: '무한난투 - 블루카드 코나 덱 2',
    leaderName: CONNOR.name,
    characters: [
      { character: CONNOR },
      { character: ANFIYA },
      { character: TENNIE },
      { character: STELLA },
      { character: ILONA },
    ],
    desc: '무한난투 덱',
    descLink: '',
  },
  {
    id: '10004',
    title: '무한난투 - 소마',
    leaderName: SOMMER.name,
    characters: [
      { character: SOMMER },
      { character: VERLAINE },
      { character: ARINA },
      { character: STELLA },
      { character: MARGIELA },
    ],
    desc: `덱 돌리는 우선순위
    1) 0코스트 스킬
    1-2) [베를렌] 0코스트 회복([별의 꿈])을 가장 앞에 배치
    2) [스텔라] [뭇별]
    3) 탱킹 스킬
    4) 낮은 코스트 난사
    5) 카드 드로우`,
    descLink: '',
  },
  {
    id: '10005',
    title: '무한난투 - 냉동 소마&베를렌',
    leaderName: SOMMER.name,
    characters: [
      { character: SOMMER },
      { character: VERLAINE },
      { character: DUSTIN },
      { character: STELLA },
      { character: JOSHUA },
    ],
    desc: `덱 돌리는 우선순위
    1) 0코스트 스킬
    1-2) [베를렌] 0코스트 회복([별의 꿈])을 가장 앞에 배치
    2) [스텔라] [뭇별]
    3) 탱킹 스킬
    4) 낮은 코스트 난사
    5) 카드 드로우
    
    클리어 기록이 존재하는 덱입니다.
    `,
    descLink: '',
    autoPreset:
      'tVhLb9swDP4vOnuAqJetXHcK0D2A7VbkYMzaajRNPTvBNgT575Nsx6Zsx4+66amsJH6fSOoj3TNJiwcTJyb/GOfJlwPZHPOTCcgPa22TT3FGNmcCVFHKVUg2ENQGF60BjKMVkK1BI9UaLMJnQKMVLbBrhlYExYa3jWMGCJQp64A1K+gM4wiUhti19q7gXY5hQ2EDMB3Arr0zIb4CIgoce9P4jIyscQnIU5ka+zt1P1oEJEkLl5vv/zJT7n82JnOp+3x6IRsakNfjU5XL0nJbH9LiSDaPZ3IqzNc4j+0+aZesVTnh9tCfg8m3SY0Tch2Q4jnd78s/MW6zJeyJY5z/MsfqkDXN71Oaba/udwFJ7e62PIIGr64i7nAvlwAT+QBdcKYjxA2mUT2iVEYSE3H1M4VYXvfNiAA89K8O90eMfEQ2iWhreg2iAi+qTgr6iNj9QE7b4+7hXBEOiflbnrjNgJSJdc+1Q/vuYdZ+mPm6S8vOpdn0pUEtvvS6TFMFXjU7VaoRG4ej6BS6HgVbJB1OvTvS8bhbFfewE3c+J+7iRtwb0CmPiIGV+SExtC7HY+nkvhM4nycoBr30TL2rllj1pO5BzDb+Snc7uya99tx0lWLo0eAb1cVTR2NR6Xr4VXhdM5lfum7aGY7n0lBw2U811TNEE1Ud6F4oVlIAOkfCkGKCGMrGrFdcyhhSBTufLW8ZUk6r53wKkVgu4FSqpQK+cgCiqiN/08PBWsQQfMShPvmuiOBaCkYUd0dU3EdUi2aB0B8l3Hi/uJol3OpJb6HgPoUWV7OEGQ/qPWcwixj647wY7Xfjjdh9fPVGi3EZLOmPtzoJagUnDos5ldI8PhdY12vipHtfb9Oc+qntDfBWiRxO8S27/q/hZ7wvTEDy172piTStuHHbPN8mIdco7C7/AQ==',
  },

  {
    id: '10006',
    title: '무한난투 - 소마 덱2',
    leaderName: SOMMER.name,
    characters: [
      { character: SOMMER },
      { character: STELLA },
      { character: JOSHUA },
      { character: DUSTIN },
      { character: ARINA },
    ],
    desc: `클리어 기록이 존재하는 덱입니다.`,
    descLink: 'https://arca.live/b/resonance/130667970',
    autoPreset:
      'tZdLj5swEID/i89U8gM7wLWnSNuHtHtb9YCK20WbJikQbaso/71jU8iACTbJ5sZge+bzzHjGPpJXrfcf86r4fPhFMhqR7/C9Lj7le5IdCaOKUi4lyVjUCoIhgQmFBI5HOENCyvHI6izwJMYj4izQBKnmcmAHj6R4zYpjgSJqhY1KzMY51oZweIwVsAEonqZAAe9GWAojp4jsmhddGbdan5b1o/Xxly3JfuSbWrdufijrhmTPR7J72+pqDXMZcANFAktAOjssIodaf82rHGL0gVnp6e9eWwr9+1Du152ybxGpX8vNZr0t9B+SiYg0efVTN+102o1a7VyAdhWTUzRGgP8YwexxjNDrsWpiTidIuhU2m8yPEct5GxMIQk4ocEwgP4HvL0LazTJFzRTsH3ZfJpM2HiZG5YiJ35tJ+pkU8eVRz8QnmOQwfeDAzVuE/DFTZlN5YajGCL5N01hSH8LCyEi2LDKmzPkghbgtMmk8YjoSqKD0NAtmaqkHjCb0tqN1JdhMYerA2G3n6yow0xl9xYiPwWZCeQkMuSKZsdgaTKSvRvdbW8DhtCv3sAe3KzdnxtGETAxAcLNiFuGSzdakSgIsive0uApxs9tZrrfIOA2w6JbQ4MC6Z865hwQF1s3xGzathNeiuQS+n0WZyKkGPuxU6cJUWnZ+oA9eQFhc48zlfY50Ufwp9D6vb8xDYpFvgorbMEaKrUIc5GvlabhvvHd00+W8vjFPnDv7hikmT7DyReeFrnAbqnYb/V9zf4p6yP6a2t+KuoXGZfWD1dY9j5rqAK+joqzNA6nrOf8A',
  },

  {
    id: '10007',
    title: '무한난투 - 조슈아 덱 1',
    leaderName: JOSHUA.name,
    characters: [
      { character: JOSHUA },
      { character: STELLA },
      { character: ANFIYA },
      { character: MARGIELA },
      { character: ARINA },
    ],
    desc: `클리어 기록이 존재하는 덱입니다.`,
    descLink: 'https://arca.live/b/resonance/130671483',
    autoPreset:
      'tZhLj5swEMe/i89U8tvAtadI24fU3qo9oMbtRptmU0jUVlG+e8dmScYQzGPDjQl4/PPMf+xxTuTZ2v37olx/PP4iOU3Ipvri7U87kv8otpVNyHpTfYdfvv7bW5KzhDhjtf5Q7El+IoxqSnkm/Zva0AwZSl0NKjL0JhPIkBQZKUdjsAMu0RjGDXpjkANq9NUQVOMxiI1lHL/RmBobGj7jjetUYDa0bKExTooDonBAZIATrEdiQ2EDB8Q4b2eXqQdbrG3ZZOtQHiFZ5cvWPmyqA8m/MfgYwpwm/kEYXj9QwV4f1OVBPibk5fBUO/M6ePK+YaZmiE/7q+cTsb+Pm/2qsWH0oSh/2kOtERhePW+22xW4IrBGWIGWJCHHyn4uygKE9o556yKp+vPd2v4luYCl+YFNkgHtz86WzluzpHNyA6Fx75XpfrhAeAbJaQzhOqdLeGdBIQKA3USIR0GC+kYiKPcljgrrIKhZCIqORlAtBN6DEJ2RGZkR7Nfpt00QT+WJQJXQcycemDsEA63PUAgzirXJEDdUfjhnVCF9CPH0UBNPTysCuE7Y6DrpQ6gJdBr65VGge8xoWisRS8/I3E6AZ4xvTjdnHMijr18kHhVOYdQo0RsVUb3olqMcJmOaknDx6h7lyO+fJN06CPTSslCpCjZAGa/Ft83Y6KQb/VH17rqnTv7F8HYMM+og/65TueHoHiLAy5qeDc1MLDK3aZBeMj4rQHAIhAXi2tmlC+T1sBjInG4dpCJbHGzUlkINDyOWzZLU9Ty+9IF3UxPTTL1FTa6571HT9CaD9zcZ7oKDyPjMJmMQQcQQ9AyEgZpi4abj7mTTpDsgjjnlpETriJ56EE5iGlVJUoRM3G/WnaZ76UoauEgZriPySfmUNrnvIjWAoNOYgpsmelGEaB27fyAmIjye/wM=',
  },

  {
    id: '10008',
    title: '무한난투 - 조슈아 덱 2',
    leaderName: JOSHUA.name,
    characters: [
      { character: JOSHUA },
      { character: STELLA },
      { character: ANFIYA },
      { character: DUSTIN },
      { character: ARINA },
    ],
    desc: `클리어 기록이 존재하는 덱입니다.`,
    descLink: 'https://arca.live/b/resonance/130721037',
    autoPreset:
      'vZfBjtsgEIbfhbMrMWAg9rWnSLttpfZW5WA1tGttNkntRG0V5d0LToLHhhg7iXZPS8AzHzPzD3Agr1pvPxbV8tP+jeQ0IZvdi67sD81oWdY/zP/f/m01ySEhZf2ki+Vpwec1yXfVXifELnkq6x3Jvx/IvtZuef1arlZzY4oA45SCTEliF3wpquLtudiaDxYJ2RXVL707fWR8ls16Ks16psz6zZ+1rqwRoOaPZbOL3fVS/yU5T4j+vS+38wvConVB8g9wTA59Dw7LUoEEgZ1yaZ2GTLptdYkoh67H3hYPhBuvxxgHFbMOB0tpiCMQDYfGMYcIYYg4hgTVyUHG3isc2CaKg2Skb7DnkUKAsLurlFGv8gIIPcOiSyLAI/Gr/VSVg0TkjARkOoIYjcBGIAjaIFzXLKg062v2nMEB4VIFnnC5YvEQRYQbrhA645EKaXwPVwgo0a/UERXS6A83rIdWCFWx9Jj6ENPTwzLupaeR7Z3pwYE4i/ZKk7j0LRSniICpnEU88kd7VLE9pg/2CIxG1Cipp8bhExSyQKbF9EwPnup0egkCE/GjPSTa8WBG0TeAMTmidd0JBtQT7WAWOaTxLN7HZBqJvCFYsxDYiHNoygXNFBjvlo6cejEafSMZCpBik5LGshGxueHy6hBZ97b4mDOQjTkDryHIhyDwIMKQzsEr3WE5URmX+JjMDFRLyvm0ahE+U3P3u5mJBdrOxDiB36O9thNlWthX49ft5cX4s1jV5sn40jwjsSyqzUqfTbjdO5cuR279ReWL0/NzvjxL2TVxmxQnxHZgXlVuYE9HNCPRjHn1tAOGZmzLawcCzxgJuoGNXTsjkTV7W20HCrCfjlOBBxw7BewH4dinK/pG4W8wToZBKd426+BY08fjfw==',
  },

  {
    id: '10009',
    title: '무한난투 - 소마 덱3',
    leaderName: SOMMER.name,
    characters: [
      { character: SOMMER },
      { character: STELLA },
      { character: VERLAINE },
      { character: TENNIE },
      { character: ARINA },
    ],
    desc: `클리어 기록이 존재하는 덱입니다.`,
    descLink: 'https://arca.live/b/resonance/130801564',
  },
]

import {
  ANFIYA,
  AOBA,
  ARINA,
  CONNOR,
  DUSTIN,
  ILONA,
  JOSHUA,
  KATAS,
  MARGIELA,
  NAYUTA,
  RINA_F,
  SOMMER,
  STELLA,
  SUEN,
  TENNIE,
  VERLAINE,
  WENSHENG,
} from '@/const/character/character.const'
import { RecommendationDeck } from '@/app/rd/rd-decks.const'
import { EXTERNAL_USERS } from '@/const/external-users'

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
    owner: EXTERNAL_USERS[19],
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
    owner: EXTERNAL_USERS[19],
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
    owner: EXTERNAL_USERS[19],
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
    owner: EXTERNAL_USERS[18],
    desc: `클리어 기록이 존재하는 덱입니다.`,
    descLink: 'https://arca.live/b/resonance/130801564',
  },

  {
    id: '10010',
    title: '무한난투 - 소마 덱4',
    leaderName: SOMMER.name,
    characters: [
      { character: SOMMER },
      { character: STELLA },
      { character: VERLAINE },
      { character: SUEN },
      { character: DUSTIN },
    ],
    desc: `클리어 기록이 존재하는 덱입니다.`,
    descLink: 'https://arca.live/b/resonance/130829516',
    owner: EXTERNAL_USERS[17],
    autoPreset:
      'vVfLjpswFP0Xr6nk6wcGtl1Fmj6kdld1gYrbQZPJpEDUVtH8e20C4dqmBDeTWTox955z7tNH8q1sqk31rtyT4kiAppQylZICkuEg6HTgIKYDVWw6AEPfcM6xAYmvMXwNG4AcfZOaf/j5G4UNcAwHmWYYAWPYKU+xAUAGpMBwAF/DTDPHNEbABf5GYnWQbiAzc3hOerHv6rYjxZcj6crmh+4+/9lrUtCEtA/1drupzEXGKZWZTEhtTlMYEvL0a6eb/opxQFmeJeTQ6o9lUz6S4o3xpn8e6v1mdPG1//vkwHg/Ti6I9QGp0cI3SnPhGx1PQ44Y+vQZW058JgGKiYeNxUh1V+nfJswW2JIUkFopFmza8LwAjVAgYzlU/cYC2bxxBZoH9uqRs+XuAmMzkQsMuKEEQbFNWz4+DcVzTEPRORrK4TGXQpeAWC8YCL8EJNAzLK/VEE5BhNSGGtWG6R+ewj6A+QbwbwhewQO1HhaCbBt8FATTQq9WQXgqKL9DvJgKvUPBnBy0syZgRSGys8aRBkld0nYQRek+JudK0iAycEirsGXO5HscaX+60Hw52ezI91pddLJ5ySRABby4DLQMG4r8775o946Zhr2ojcGZLWvDYnvByHJtFUDK3aoLEyJ+v4gs/dOswyAgLiFiS5+mmesvLP2rSXsyu83GrpU39kgVuB7DyXbzwErwerrM4gI7096CUTaz9A39Yd3Ejily+9KYWVuDqs5fv/vwFfv05XilxH1tBHSvHUcX9zHl7mPhfnvDfWyAkLkQwuYQCcFGqr3TZaWbt+bh92FHiq45aGO1uz/91OOq20/78f/v5bY1F5qnrR5wnnf7M4JzDZ+Tfsw04/C+d4efBA9a9+bfHx57d1Xd2mfoCPIv',
  },

  {
    id: '10011',
    title: '무한난투 - 소마 덱5',
    leaderName: SOMMER.name,
    characters: [
      { character: SOMMER },
      { character: KATAS },
      { character: ARINA },
      { character: SUEN },
      { character: VERLAINE },
    ],
    desc: `클리어 기록이 존재하는 덱입니다.`,
    descLink: 'https://arca.live/b/resonance/130827964',
    owner: EXTERNAL_USERS[16],
    autoPreset:
      'tVdLj5tADP4vc6bS2DMGkmtPkbYPqb1VPaBm2kWbJikkaqso/70eyMIwXoG2EE7zwv5sf7ZnLqqsH1yxddXbotp+2Kv1qTq7hFc/HZ9Xvhe7mpeqw849lPVJrb+A9h9B0gwMYTvIzKodaG1vg5X9mqjD6bGVr9Y6UU/ONaLfn3828288vsm9qJLPKNCp1piiSlT9VO52G14ENCwV+fy5dp//Hh0vNeOPRVWwoDc8c7/O5XHzLIwVn4rqhzu1p/nPw++9qxphLUi4JqFGlq+G4jvtqlGv0XSQ9lv3R61xLgQbQcj0BIRcRxDmemElIOAUBFjYCzEEMOkoBEgxhmCW9kKexuyDNKcX/nut4t6soUZjQGgEk8UafY4tptFKjVb4ZrbGiD8WMklhIXGIwZeYDsO74qjWF2U46voaQjNaIAnqCQ5JNfQFIo2z3kK+LOvZpAhCJilnc7hzOIC0lYZNhKPBEBCJboUzwCQhRLG7hW6MJyuZ5P/HE6QBT5BGeWJGeALWiK5E2UuFfaksBcrHmUkQB3BmS+Doxo1xIjk0xhDm1uO4MQKIWsVrojou6HdtJm8DuHArlkbTC0bndzQaCSbKoOi8c40m0ZVEhnEfXN2xDyKNXze0NfG9by69Y6ORptoPxfe+uZcuAcFOQCBIl/WCqDPGiCs/h17wfV7oefOxefCEVzj/Btlsbw2jS3/vhI4hwQT6iYfc72BwzCdvv2Mp/CcQ4K/b/SQPBPjnSPBPOCEbHgv1cPPqEXDn6Hey0AQM/6Fwwq8uH9cuFXtpZmBciIAfLf2ONU2CqW1Ze6+2bjfXfw==',
  },
  {
    id: '10012',
    title: '무한난투 - 소마 덱6',
    leaderName: SOMMER.name,
    characters: [
      { character: SOMMER },
      { character: VERLAINE },
      { character: JOSHUA },
      { character: SUEN },
      { character: DUSTIN },
    ],
    desc: `클리어 기록이 존재하는 덱입니다.`,
    descLink: 'https://arca.live/b/resonance/130822134',
    owner: EXTERNAL_USERS[14],
    autoPreset:
      'tVdLj5swEP4vPqeSxy8w154ibR9Se6t6QMXtos1mUyBqq6j/vbYJMDjg7G5cbjbjmW9en8cnUtXtt7KpPv85GFLwDanbT4e3duPDnhTfy11r3NadKSvTDNtdc7S77tRd3Xak+HIi5uexPmyH9dcNaR/q3W67r8zvXmtFCgJUUQpckQ05tqa3CIOoF2CcgmJgBZ5+7U3jNoG6Twt/5mPZlI+keGNPdWXzw3S9Evp3swBhriLjGsPgHNZgeBTAs1stUg4ziyqLWlQgJ4vvygMpToR7S6k951c81wEOpzIxBBGHIOhSKGT6ULArocgThAK3wqwiGIu3AhWQXbQClywhBJrROASa0zTdiCGwOYTVJAwQEhHCKgQOq/XYcxJQeQmBy5sZwnmBIpGv1kPPEPkrLK6mHmQej7v0UVlooKS0yPSZjhZ4LywE6bIQOIQdSAxMhMCmeE6YfPUGt93/w5RfYFoPliIXJZ8OmKchTGXLWcwWkAnQkZBxjCyjrwgZnYdMhfQyd3zWYlSw8OZxBm7MGujoNUMVZGtJTdftPuixsYvqNBS3OvlxkNdYVqWHEJRpHIKtzTzNjRudOxjXz21jCSHnJW3jEJiIDmYWTbJKvYJDPoN7JYQU9wLuteru/asG38XuTbOtzo6N07JTNc6L48J19bhwgKeFneumM3bsn85whcVmqgGJ2WZFfwRaALbDNUaAxNzdPi7cFYUUCIxAYjGK/uRYzFJoIQaxHLugOV64M7YUmqedOSd6DO2Y5bGrR6YcmswVRXffPzO91gdj/FP0/fHRZewf',
  },

  {
    id: '10013',
    title: '무한난투 - 마키라 덱 3',
    leaderName: MARGIELA.name,
    characters: [
      { character: MARGIELA },
      { character: VERLAINE },
      { character: JOSHUA },
      { character: SUEN },
      { character: STELLA },
    ],
    desc: `클리어 기록이 존재하는 덱입니다.`,
    descLink: 'https://arca.live/b/resonance/130821918',
    owner: EXTERNAL_USERS[19],
    autoPreset:
      'rVjJbtswEP0XnhWAi7jI154MJG2B9lb0IFRsI8RxXMlGWxj+94pKLA+XkKJsn0xLM+9x3nBm6CP6UXfNfdvv0erbEbUNWiGCBcZUUFSg/qndbNbDj4QyjEuKC6R/H9rd+mzyvUCHXn/9t9PDO+P3z3VXPz/Uu9eH+7r7pfevzwfjlz9b3Y3+8PgBJmh1R07F0VoXgBBjDN0UXbLK2SAhrIpToFEK7CYUVJxCmRWFI2JoxU8LeJTY8ADIQqaQbQ+C8JT+LKA/SMESZyFirlKItFKpjPMU9AgEXF5IEyqnc7Nt9N9zVviU0ciZCCOoRTrBaZ6kjFNIi1Lh0CJRWiUJqG0T4zhIbKCfCpnHjUVCxgLcqiUhm0FsTEhArHKJxYOGOY8TU8GQKZwSE/MS8hqWEV5+wDAnKTHviO2Qzj14ZwTh7jwVW1Ui+7iTKl5dveMuiFxSYObkSZYarEJe8GKxElWuGiRTDYlTanhVi7hq0Ew1sFBLii9ETDZ4B1GSaxGTzdRGJGYAurbBXHHMiMgXlnvCisxNC3bjrjq3HHt9wi178YMmxoklp0/MG9hALLnKahCcBBLuWk5ec+BZAwjmgWPnDGLvVDib8vub5qGECwQ2IRWcDBdMwcm67k/BA3cZn8YDjRXwoIvyy70QBChclbW0zMsQTgIVI17XWG7DornjQ+WOD1QZHzOyckSUVKSnQez2FwdxbLNzEYUKBSUPEUuRs0ceai9JxOGdtr/XdaO7D3XXfNqi1b476AI9ab0zv3w8PI8CdS8b/eZ3SrOpIk2NYarkZxkNh/3jq/PRT9P25k+IaRePI7ZV3fovuzOXn/WmH8gYi3Xzdrqn27kxn+7J08I0QfCEwAW7LEzlBDYCLIY6Py3MtfRiI8Fr5op8sakAHdO6LouhnF4WEngzFw5gAxlQ6E1Zm4OuS7AFbOEoCm0kxIGgpeWawOhAHDF4KyfWlo3xdjr9Bw==',
    autoPresetPreviews: [
      '다크 아트',
      '마력샘',
      '진혼가',
      '별의 꿈',
      '계시',
      '노래',
      '뭇별',
      '복음',
      '정화',
      '우매',
      '섭취',
      '지식',
      '검은 물결',
      '금단의 열매',
      'TATAKAE',
      'TATAKAU!',
      'TATAKAU!!',
      'TATAKAU!!!',
      '우아',
      '셀카',
      '형벌',
      '스타 아크',
      '무한 코어',
      '드림 파인더',
      '드림 메이커',
      '드림 이터',
      '예고',
      '신성',
      '기이한 불꽃',
      '초신성',
    ],
    autoPresetPreviewBans: ['공포의 밤'],
  },
  {
    id: '10014',
    title: '무한난투 - 조슈아 덱 3',
    leaderName: JOSHUA.name,
    characters: [
      { character: JOSHUA },
      { character: TENNIE },
      { character: WENSHENG },
      { character: SUEN },
      { character: STELLA },
    ],
    desc: `클리어 기록이 존재하는 덱입니다.`,
    descLink: 'https://arca.live/b/resonance/130818494',
    owner: EXTERNAL_USERS[19],
    autoPreset:
      'tVdNj5swEP0vc6aSPQbzce0p0ra7Unur9oCK20WbTVJI1FZR/nuxScwYHAhLk5vNZN74zfPM+AgvKi9UBRln+id4AGX9YPY+5lXxuIFsXx1UAN+b1UNZ7yH7dgT161DuVpf1cwCHWj3lVf72Kd+1G/u8+qn2X//uFGQsgPq1XK9XRQODgrEQm62yWQFnkjGUCAFsf29UZUxMJIwbr60H3iFA9oGfAk8IPcTOPUMO/QjiKLknokAPIr8jIoYMXF8uFKZJP6AoiYaIPYBBWlsXm0L9gUx4QXzSsEHZCMCEwGUI9BQcY7iBBfIHKeC61loQwbpktIEP2BFJMjMR1Ph6UlBOIkc4CDjkPhbGMnME0WyeJrDM5Z6THhZFTnowFbek5yofbbpdFQqcn41JKqI+FwOpGt6vcyE8SUldLtDlQkO+WydJ2NMJenM3SI9clo4UR2uGi2kgJY//1+XgpCpfEaxbtM6HjtmyQ+P4oT2FkslkGaKYjRgvagYcw7mIHNk9Sg7Gcl7JwUQ410zIm0rOjYqLpq6ZT3Fc+hQ3m5sBlilzoyehlTMCT2NLF14FOVsmUiybGYaMz1VIyHlPIeF90jPeIYaBSRn3OoQvsPdJVxgNjg9fmsg+V3iTQqjO5PQ8hZOx3GueSvt9coDs7ZMxLronQsYz+ySXvD9bNwDb/Uv7qGr91192lxfWj3xdN0+sV6XM1ufDmzGptmt1js9eSJtrS7RV6yWY5/axtirOardPEi1y+yKyC82qPpRtVmQRdQv9SNN820mQmCExQ+JNy7Yzk9RbSL80Yz/5j+OA4jTi7BYpUgf0i3TOw2lsxEwPXcQspGaCRhBT1/pLUzmKstYUnwVx+gc=',
  },
  {
    id: '10015',
    title: '무한난투 - 카타스 덱 1',
    leaderName: KATAS.name,
    characters: [
      { character: KATAS },
      { character: VERLAINE },
      { character: ARINA },
      { character: DUSTIN },
      { character: STELLA },
    ],
    desc: `클리어 기록이 존재하는 덱입니다.`,
    descLink: 'https://arca.live/b/resonance/130810498',
    owner: EXTERNAL_USERS[20],
    autoPreset:
      'vVdLj5swEP4vPlPJY2MgXHuKtH1I7a3qATVuF202SSFRW0X732sbCOMHryS7OWGbzPfNNw8PZ/KjqDbrzYfiQPIzAZpQCrAiOUTNgsWiXwBL0SLm+ETg/1C0EPhEQL/gnOFFjK1xfGItAL+G/kOpRdR6LcGvxZgoBgWLAeZmnYgMWcOsmUjwf7DbfIVx9MlLRJ6kPLxX6n88PZOcRqSsv5j1px3JfxbbWkak2m/lQ1kfSf4NqPnFUfMgoHlgq6x5SPmqPeLie0T2x0dZaWvG9KMsNrJSsJ0RBfZg9jrAY3VSeDoZWrwzOdXyc1EVz21uqChQxVr+PpWHdfeWQqqfyu12vdvIvyRnETkW1S95/PrvIA1yZ4Tk78CsmhP1XCpqfUw6O2aTce0ZV5v7PztZ6c2O+Ut0tqw4cPb7WhyfQcCpnovOXcTFUBGZ8Px2edjAOhjIqE7hUSK9ji0mgLbgOBegMBoNXx7kp6rEseg40YgZ+NEQoClMeB67cqo6ozaWzWLa6QlE5iPy7DbEUZn5iMy6Ky2QWaXfSNLb+eKbudCZrIJBvrrDe6wg0azCBWBzeoXmoJuvywjAyOroxEUwVA6mU9qp7X6MCxVLjXh64cHUbypKaqplQbawoWyZUgG5DDMxm1SA9A6IM2uiRczmVkSgLzjKD/cAR1phVEGc1a0/p1H414tYfmfiLt1KNdiXBfW0DHbpZaU61tL0mDPOKXDbvQqnee1DhNpHMtQ+lnHyi3kOJz1ge5wSuhrhNHfOCF7q43NGeuWV6+QwShDuu6ci7mby0jt4tgp6qp839jl3AdxDCm5T8bNP4bgFdIUUAW8uFpkXnFsGgoAHKlkHB4ILhZsmc52omIQ301GaZG9LgfsUUnhbCt4srfaWZMjVgwkExn9D3p1IUv866tW4qzaBbzf9oe8JlHBfIOX5pqz1x243tf0H',
  },
]

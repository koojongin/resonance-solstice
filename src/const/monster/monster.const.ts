import {
  MonsterAbility,
  MonsterGrade,
  MonsterStatGrade,
  MonsterType,
  RSMonster,
} from '@/const/monster/monster.interface'
import _ from 'lodash'

export const MONSTERS: {
  [key: string]: RSMonster
} = {
  '베인링 퀸': {
    drops: ['베인링 낭액', '베인링 낭', '베인링 가시', '베인링 울음낭'],
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E9%B8%A3%E7%88%86%E8%99%AB%E6%AF%8D',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/6/60/lif20mpbq1hjbp9g3d68jk2ogwb816k.png',
    grade: MonsterGrade.ARCHNEMESIS,
    attack: MonsterStatGrade.B,
    defence: MonsterStatGrade.C,
    hp: MonsterStatGrade.S,
    type: MonsterType.BETULA,
    traits: {
      skills: [
        {
          name: MonsterAbility.SUMMON,
        },
        {
          name: MonsterAbility.BURN,
        },
        {
          name: MonsterAbility.CRASH,
        },
      ],
    },
    resistance: {
      skills: [
        {
          name: MonsterAbility.SLEEP,
        },
      ],
    },
    weakness: {
      skills: [
        {
          name: MonsterAbility.FREEZING,
        },
        {
          name: MonsterAbility.IGNITE,
        },
        {
          name: MonsterAbility.LIGHTNING_STRIKE,
        },
        {
          name: MonsterAbility.SCORCHING_HEAT,
        },
        {
          name: MonsterAbility.BURN_INJURY,
        },
      ],
    },
    thumbnailFull:
      'https://patchwiki.biligame.com/images/resonance/4/47/anp6xbj0eskt8wbmpf27lu00zdw9gi5.png',
    camp: 'https://patchwiki.biligame.com/images/resonance/2/2f/no501iad0px5870m35pi7gir9dkar5o.png',
  },
  '스콜피언 머신': {
    drops: [
      '낡은 부품',
      '정밀 부품',
      '동력 파이프라인',
      '무기 파이프라인',
      '동력 유닛',
      '사격 통제 유닛',
    ],
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E8%9D%8E%E5%9E%8B%E6%9C%BA%E6%A2%B0%E4%BD%93',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/9/94/e6itgya4qny8z0ai7rvpm1p7l72d5g6.png',
    grade: MonsterGrade.ARCHNEMESIS,
    attack: MonsterStatGrade.S,
    defence: MonsterStatGrade.S,
    hp: MonsterStatGrade.S,
    type: MonsterType.MACHINE,
    traits: {
      skills: [
        {
          name: MonsterAbility.INTERRUPTION,
        },
        {
          name: MonsterAbility.STUN,
        },
        {
          name: MonsterAbility.IGNITE,
        },
      ],
    },
    resistance: {
      skills: [
        {
          name: MonsterAbility.FREEZING,
        },
        {
          name: MonsterAbility.SLEEP,
        },
        {
          name: MonsterAbility.BURN_INJURY,
        },
      ],
    },
    weakness: {
      skills: [
        {
          name: MonsterAbility.SCORCHING_HEAT,
        },
      ],
    },
    thumbnailFull:
      'https://patchwiki.biligame.com/images/resonance/2/20/gqcm31zwl3uy43fdsvjtuibn0dp2xp0.png',
    camp: 'https://patchwiki.biligame.com/images/resonance/d/da/jief5dxw2exbksqhozaqb0srxud6cr1.png',
  },
  '벌목용 중장비': {
    drops: [
      '낡은 부품',
      '정밀 부품',
      '동력 파이프라인',
      '무기 파이프라인',
      '동력 유닛',
      '사격 통제 유닛',
    ],
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E4%BC%90%E6%9C%A8%E9%87%8D%E6%9C%BA',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/4/4e/16840hlm2ofooolmnwpuios5dnnnb97.png',
    grade: MonsterGrade.ARCHNEMESIS,
    attack: MonsterStatGrade.S,
    defence: MonsterStatGrade.S,
    hp: MonsterStatGrade.SS,
    type: MonsterType.MACHINE,
    traits: {
      skills: [
        {
          name: MonsterAbility.SERIOUS_INJURY,
        },
        {
          name: MonsterAbility.FREEZING,
        },
      ],
    },
    resistance: {
      skills: [
        {
          name: MonsterAbility.FREEZING,
        },
        {
          name: MonsterAbility.SLEEP,
        },
        {
          name: MonsterAbility.BURN_INJURY,
        },
      ],
    },
    weakness: {
      skills: [
        {
          name: MonsterAbility.SCORCHING_HEAT,
        },
      ],
    },
    thumbnailFull:
      'https://patchwiki.biligame.com/images/resonance/3/3c/dulpxwgluwp6llpokb3mvqauj8re6xk.png',
    camp: 'https://patchwiki.biligame.com/images/resonance/d/da/jief5dxw2exbksqhozaqb0srxud6cr1.png',
  },
  '블리자드 기포체': {
    drops: ['베툴라 편모', '베툴라 더듬이', '베툴라 자사낭', '베툴라 촉수'],
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E5%AF%92%E6%BD%AE%E6%B5%AE%E5%9B%8A%E4%BD%93',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/6/68/nmojqwwkbvt8unw6b03pej3j0gzhzv5.png',
    grade: MonsterGrade.ARCHNEMESIS,
    attack: MonsterStatGrade.A,
    defence: MonsterStatGrade.A,
    hp: MonsterStatGrade.S,
    type: MonsterType.BETULA,
    traits: {
      skills: [
        {
          name: MonsterAbility.FREEZING,
        },
      ],
    },
    resistance: {
      skills: [
        {
          name: MonsterAbility.FREEZING,
        },
      ],
    },
    weakness: {
      skills: [
        {
          name: MonsterAbility.LIGHTNING_STRIKE,
        },
      ],
    },
    thumbnailFull:
      'https://patchwiki.biligame.com/images/resonance/f/f2/qkzegelrelsv1pz9bjntizjzae52tg4.png',
    camp: 'https://patchwiki.biligame.com/images/resonance/7/79/r9gwbxmp4mfxucpaea4sq36aee329pi.png',
  },
  '더스트 리자드': {
    drops: ['베툴라 연골', '베툴라 꼬리 수염', '베툴라 뼈대', '리자드 뼈대'],
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E5%B0%98%E9%B8%A3%E6%B8%B8%E7%A3%B7',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/3/32/hk020c4kjn27myscp7jcpla2839cgy0.png',
    grade: MonsterGrade.ARCHNEMESIS,
    attack: MonsterStatGrade.S,
    defence: MonsterStatGrade.A,
    hp: MonsterStatGrade.S,
    type: MonsterType.BETULA,
    traits: {
      skills: [
        {
          name: MonsterAbility.SUMMON,
        },
        {
          name: MonsterAbility.COST_ABSORPTION,
        },
        {
          name: MonsterAbility.SMASH,
        },
        {
          name: MonsterAbility.STUN,
        },
        {
          name: MonsterAbility.IGNITE,
        },
      ],
    },
    resistance: {
      skills: [
        {
          name: MonsterAbility.IGNITE,
        },
        {
          name: MonsterAbility.LIGHTNING_STRIKE,
        },
        {
          name: MonsterAbility.SLEEP,
        },
      ],
    },
    weakness: {
      skills: [
        {
          name: MonsterAbility.SCORCHING_HEAT,
        },
      ],
    },
    thumbnailFull:
      'https://patchwiki.biligame.com/images/resonance/1/18/nsvzxn3hevqzzvc2oj6xvvt646wtbhg.png',
    camp: 'https://patchwiki.biligame.com/images/resonance/4/46/kxsvnvj2bq6cx1iotkuymskxllvj954.png',
  },
  '빙하 본드래곤': {
    drops: ['본드래곤 척추뼈'],
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E5%87%9B%E5%B7%9D%E9%AA%A8%E9%BE%99',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/f/f9/t21hi6jole50rugfc6u2knvujk486n7.png',
    grade: MonsterGrade.ARCHNEMESIS,
    attack: MonsterStatGrade.SS,
    defence: MonsterStatGrade.A,
    hp: MonsterStatGrade.SS,
    type: MonsterType.BETULA,
    traits: {
      skills: [
        {
          name: MonsterAbility.SHACKLES,
        },
        {
          name: MonsterAbility.RESTRAINT,
        },
        {
          name: MonsterAbility.BERSERK,
        },
        {
          name: MonsterAbility.FREEZING,
        },
        {
          name: MonsterAbility.SMASH,
        },
      ],
    },
    resistance: {
      skills: [
        {
          name: MonsterAbility.FREEZING,
        },
        {
          name: MonsterAbility.SLEEP,
        },
        {
          name: MonsterAbility.RESTRAINT,
        },
        {
          name: MonsterAbility.SHACKLES,
        },
        {
          name: MonsterAbility.CURSE,
        },
        {
          name: MonsterAbility.CHAOS,
        },
        {
          name: MonsterAbility.IGNITE,
        },
      ],
    },
    weakness: {
      skills: [
        {
          name: MonsterAbility.LIGHTNING_STRIKE,
        },
        {
          name: MonsterAbility.SCORCHING_HEAT,
        },
      ],
    },
    thumbnailFull:
      'https://patchwiki.biligame.com/images/resonance/a/a7/7mju2h1crystlhxonnx15oucz8m4f0o.png',
    camp: 'https://patchwiki.biligame.com/images/resonance/a/a3/8dqqd5k3eudc4iks8icdt7jksjfv61f.png',
  },
  '앰피 본드래곤': {
    drops: ['앰피 본드래곤 두개골', '앰피 본드래곤 흉골'],
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E8%A3%82%E9%A6%96%E9%AA%A8%E9%BE%99',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/6/6a/7zbjtdj0zibcas6kmtqcc3y1a56imxk.png',
    grade: MonsterGrade.ARCHNEMESIS,
    attack: MonsterStatGrade.SS,
    defence: MonsterStatGrade.A,
    hp: MonsterStatGrade.SS,
    type: MonsterType.BETULA,
    traits: {
      skills: [
        {
          name: MonsterAbility.SHACKLES,
        },
        {
          name: MonsterAbility.RESTRAINT,
        },
        {
          name: MonsterAbility.BERSERK,
        },
        {
          name: MonsterAbility.FREEZING,
        },
        {
          name: MonsterAbility.SMASH,
        },
      ],
    },
    resistance: {
      skills: [
        {
          name: MonsterAbility.FREEZING,
        },
        {
          name: MonsterAbility.SLEEP,
        },
        {
          name: MonsterAbility.RESTRAINT,
        },
        {
          name: MonsterAbility.SHACKLES,
        },
        {
          name: MonsterAbility.CURSE,
        },
        {
          name: MonsterAbility.CHAOS,
        },
      ],
    },
    weakness: {
      skills: [
        {
          name: MonsterAbility.LIGHTNING_STRIKE,
        },
        {
          name: MonsterAbility.IGNITE,
        },
        {
          name: MonsterAbility.SCORCHING_HEAT,
        },
      ],
    },
    thumbnailFull:
      'https://patchwiki.biligame.com/images/resonance/c/c2/rsky5zsoh41gqvzx9j6r09d9c0susz4.png',
    camp: 'https://patchwiki.biligame.com/images/resonance/a/a3/8dqqd5k3eudc4iks8icdt7jksjfv61f.png',
  },
  시라누이: {
    drops: ['소음 호르몬', '소음 수액', '소음 효소', '밤을 밝히는 양날검', '야행 삿갓'],
    detail: 'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E6%97%A0%E6%98%8E%E7%81%AB',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/8/82/c6erv259v3aktv4t8tmocgt4rob80ks.png',
    grade: MonsterGrade.ARCHNEMESIS,
    attack: MonsterStatGrade.SS,
    defence: MonsterStatGrade.A,
    hp: MonsterStatGrade.S,
    type: MonsterType.HUMAN,
    traits: {
      skills: [
        {
          name: MonsterAbility.SERIOUS_INJURY,
        },
        {
          name: MonsterAbility.SCORCHING_HEAT,
        },
        {
          name: MonsterAbility.BURN_INJURY,
        },
        {
          name: MonsterAbility.IGNITE,
        },
      ],
    },
    resistance: {
      skills: [
        {
          name: MonsterAbility.STUN,
        },
        {
          name: MonsterAbility.SLEEP,
        },
        {
          name: MonsterAbility.BURN,
        },
        {
          name: MonsterAbility.FREEZING,
        },
        {
          name: MonsterAbility.IGNITE,
        },
      ],
    },
    weakness: {
      skills: [
        {
          name: MonsterAbility.LIGHTNING_STRIKE,
        },
      ],
    },
    thumbnailFull:
      'https://patchwiki.biligame.com/images/resonance/8/86/77hi6iz8jf3cl10g0li9t3squ6w5m3m.png',
    camp: 'https://patchwiki.biligame.com/images/resonance/f/f2/72fwsi6q426gygxui8q4u6n5e42jd60.png',
  },
  우뢰: {
    detail: 'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E9%95%87%E9%9B%B7%E9%B8%A3',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/8/8b/dsoi2um06y7syghazcdkr33za45vs6v.png',
    grade: MonsterGrade.ARCHNEMESIS,
    attack: MonsterStatGrade.A,
    defence: MonsterStatGrade.SS,
    hp: MonsterStatGrade.S,
    type: MonsterType.HUMAN,
    traits: {
      skills: [
        {
          name: MonsterAbility.LIGHTNING_STRIKE,
        },
        {
          name: MonsterAbility.INTERRUPTION,
        },
        {
          name: MonsterAbility.STUN,
        },
      ],
    },
    resistance: {
      skills: [
        {
          name: MonsterAbility.STUN,
        },
        {
          name: MonsterAbility.SLEEP,
        },
        {
          name: MonsterAbility.BURN,
        },
        {
          name: MonsterAbility.FREEZING,
        },
        {
          name: MonsterAbility.LIGHTNING_STRIKE,
        },
      ],
    },
    weakness: {
      skills: [
        {
          name: MonsterAbility.IGNITE,
        },
      ],
    },
    thumbnailFull:
      'https://patchwiki.biligame.com/images/resonance/0/0e/888buzqrr96ckuv9282vz2uxugwjdnt.png',
    camp: 'https://patchwiki.biligame.com/images/resonance/f/f2/72fwsi6q426gygxui8q4u6n5e42jd60.png',
  },
  '다크 썬더 리추얼리스트': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E5%86%A5%E9%9C%86%E4%BB%AA%E8%80%85',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/e/ec/t81oo8hwplvc0xal6olscqigxt68pg1.png',
    grade: MonsterGrade.ARCHNEMESIS,
    attack: MonsterStatGrade.SS,
    defence: MonsterStatGrade.S,
    hp: MonsterStatGrade.SS,
    type: MonsterType.BETULA,
    traits: {
      skills: [
        {
          name: MonsterAbility.LIGHTNING_STRIKE,
        },
        {
          name: MonsterAbility.CHAOS,
        },
        {
          name: MonsterAbility.AIRBORNE,
        },
        {
          name: MonsterAbility.CURSE,
        },
        {
          name: MonsterAbility.BURN,
        },
      ],
    },
    resistance: { skills: [] },
    weakness: {
      skills: [
        {
          name: MonsterAbility.SCORCHING_HEAT,
        },
      ],
    },
    thumbnailFull:
      'https://patchwiki.biligame.com/images/resonance/6/69/k8milwq8au3xpthsipc6z5zb2u2xjfe.png',
    camp: 'https://patchwiki.biligame.com/images/resonance/a/a0/fbdc315jmg3h5b8w2mq80rci6dtyvxd.png',
  },
  '약탈자-쏘우': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E5%8A%AB%E6%8E%A0%E8%80%85%C2%B7%E6%89%A7%E9%94%AF',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/4/44/e655ylv4jq6bv51baomzfdh92awcnvp.png',
    grade: MonsterGrade.ARCHNEMESIS,
    attack: MonsterStatGrade.S,
    defence: MonsterStatGrade.B,
    hp: MonsterStatGrade.S,
    type: MonsterType.HUMAN,
    traits: {
      skills: [
        {
          name: MonsterAbility.IGNITE,
        },
        {
          name: MonsterAbility.BLAZE,
        },
        {
          name: MonsterAbility.FIRESTORM,
        },
        {
          name: MonsterAbility.LIGHTNING_STRIKE,
        },
        {
          name: MonsterAbility.SUPER_ARMOR,
        },
        {
          name: MonsterAbility.AIRBORNE,
        },
        {
          name: MonsterAbility.IMMORTAL,
        },
      ],
    },
    resistance: {
      skills: [
        {
          name: MonsterAbility.BURN_INJURY,
        },
        {
          name: MonsterAbility.LIGHTNING_STRIKE,
        },
        {
          name: MonsterAbility.IGNITE,
        },
        {
          name: MonsterAbility.STUN,
        },
      ],
    },
    weakness: {
      skills: [
        {
          name: MonsterAbility.SCORCHING_HEAT,
        },
        {
          name: MonsterAbility.SLEEP,
        },
      ],
    },
    thumbnailFull:
      'https://patchwiki.biligame.com/images/resonance/b/be/hwb1pl01z629x504kv9mb06nbdj17uo.png',
    camp: 'https://patchwiki.biligame.com/images/resonance/9/90/jroz2h6d737fki59s4i558tr3ofiwau.png',
    drops: ['약탈의 원형톱'],
  },
  '미스 골드': {
    drops: ['낡은 부품', '정밀 부품', '도금 부품', '순금 부품'],
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E9%87%91%E5%AD%90%E5%B0%8F%E5%A7%90',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/d/de/eoqhjxm158fbrqgxnfo8na87gh18v7r.png',
    grade: MonsterGrade.ARCHNEMESIS,
    attack: MonsterStatGrade.S,
    defence: MonsterStatGrade.B,
    hp: MonsterStatGrade.S,
    type: MonsterType.MACHINE,
    traits: {
      skills: [
        {
          name: MonsterAbility.COST_ABSORPTION,
        },
        {
          name: MonsterAbility.SUMMON,
        },
        {
          name: MonsterAbility.BERSERK,
        },
        {
          name: MonsterAbility.KNOCK_BACK,
        },
        {
          name: MonsterAbility.LIGHTNING_STRIKE,
        },
        {
          name: MonsterAbility.SMASH,
        },
      ],
    },
    resistance: {
      skills: [
        {
          name: MonsterAbility.LIGHTNING_STRIKE,
        },
        {
          name: MonsterAbility.SLEEP,
        },
      ],
    },
    weakness: {
      skills: [
        {
          name: MonsterAbility.SCORCHING_HEAT,
        },
        {
          name: MonsterAbility.FREEZING,
        },
      ],
    },
    thumbnailFull:
      'https://patchwiki.biligame.com/images/resonance/5/5c/g6ssh3m00aqwiikvq8clb8kny19jipq.png',
    camp: 'https://patchwiki.biligame.com/images/resonance/5/58/tp942kij34ugn8wz5k7sgv2ud2xc2js.png',
  },
  쥬드: {
    drops: [],
    detail: 'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E6%9C%B1%E8%BF%AA',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/f/f2/1jhlrry48u3ltvc2i88sotzpsqcz19f.png',
    grade: MonsterGrade.ARCHNEMESIS,
    attack: MonsterStatGrade.A,
    defence: MonsterStatGrade.C,
    hp: MonsterStatGrade.C,
    type: MonsterType.ETC,
    traits: { skills: [] },
    resistance: {
      skills: [
        {
          name: MonsterAbility.FREEZING,
        },
      ],
    },
    weakness: {
      skills: [
        {
          name: MonsterAbility.BURN_INJURY,
        },
        {
          name: MonsterAbility.IGNITE,
        },
        {
          name: MonsterAbility.LIGHTNING_STRIKE,
        },
      ],
    },
    thumbnailFull:
      'https://patchwiki.biligame.com/images/resonance/2/2a/scmoquxu9ursvkzbn2c2dzb3jmgr59e.png',
    camp: 'https://patchwiki.biligame.com/images/resonance/6/61/lsmb7fgc7o8dj8nuo3jqzt9zhew099w.png',
  },
  샤이어: {
    detail: 'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E5%A4%8F%E5%B0%94',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/e/e8/jzqqtpxpzgrcggxjipp889k19cgcmmy.png',
    grade: MonsterGrade.ARCHNEMESIS,
    attack: MonsterStatGrade.SS,
    defence: MonsterStatGrade.A,
    hp: MonsterStatGrade.S,
    type: MonsterType.HUMAN,
    traits: {
      skills: [
        {
          name: MonsterAbility.COST_ABSORPTION,
        },
        {
          name: MonsterAbility.CRASH,
        },
        {
          name: MonsterAbility.BERSERK,
        },
      ],
    },
    resistance: {
      skills: [
        {
          name: MonsterAbility.FREEZING,
        },
      ],
    },
    weakness: {
      skills: [
        {
          name: MonsterAbility.BURN_INJURY,
        },
        {
          name: MonsterAbility.SLEEP,
        },
      ],
    },
    thumbnailFull:
      'https://patchwiki.biligame.com/images/resonance/b/b8/qlq7ix17yu8d491jdt65fap41dy0ejn.png',
    camp: 'https://patchwiki.biligame.com/images/resonance/6/61/lsmb7fgc7o8dj8nuo3jqzt9zhew099w.png',
  },
  '암흑의 매머드': {
    drops: ['뇌안개 포자', '트와일라잇 껍질', '인식 방해 껍질', '이명 껍질'],
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E6%98%8F%E6%81%B6%E5%B7%A8%E8%B1%A1',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/e/e5/oi8iubgqnxn3t285ygo2v1bdc4jrzf0.png',
    grade: MonsterGrade.ARCHNEMESIS,
    attack: MonsterStatGrade.S,
    defence: MonsterStatGrade.S,
    hp: MonsterStatGrade.S,
    type: MonsterType.BETULA,
    traits: {
      skills: [
        {
          name: MonsterAbility.STUN,
        },
        {
          name: MonsterAbility.CURSE,
        },
        {
          name: MonsterAbility.SLEEP,
        },
        {
          name: MonsterAbility.SMASH,
        },
        {
          name: MonsterAbility.INTERRUPTION,
        },
        {
          name: MonsterAbility.SUPER_ARMOR,
        },
      ],
    },
    resistance: {
      skills: [
        {
          name: MonsterAbility.FREEZING,
        },
        {
          name: MonsterAbility.SLEEP,
        },
        {
          name: MonsterAbility.CURSE,
        },
        {
          name: MonsterAbility.RESTRAINT,
        },
        {
          name: MonsterAbility.SHACKLES,
        },
        {
          name: MonsterAbility.STUN,
        },
      ],
    },
    weakness: {
      skills: [
        {
          name: MonsterAbility.IGNITE,
        },
        {
          name: MonsterAbility.BURN_INJURY,
        },
      ],
    },
    thumbnailFull:
      'https://patchwiki.biligame.com/images/resonance/e/ec/n6cklekeyae6zqa6hvuz8r4clliuwtn.png',
    camp: 'https://patchwiki.biligame.com/images/resonance/8/8b/88cs95z6hi13s7cpzwshg2670jomxmq.png',
  },
  '혼란의 돌산호': {
    drops: ['뇌안개 포자', '트와일라잇 껍질', '박명의 가시', '유성의 눈'],
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E6%B7%B7%E5%8E%84%E7%9F%B3%E8%8A%9D',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/e/e8/bsdxh5isjqspr8fq1e2d3zjsico31d1.png',
    grade: MonsterGrade.ARCHNEMESIS,
    attack: MonsterStatGrade.SS,
    defence: MonsterStatGrade.S,
    hp: MonsterStatGrade.S,
    type: MonsterType.BETULA,
    traits: {
      skills: [
        {
          name: MonsterAbility.SCORCHING_HEAT,
        },
        {
          name: MonsterAbility.BERSERK,
        },
        {
          name: MonsterAbility.BURN,
        },
        {
          name: MonsterAbility.CHAOS,
        },
        {
          name: MonsterAbility.SERIOUS_INJURY,
        },
        {
          name: MonsterAbility.INTERRUPTION,
        },
        {
          name: MonsterAbility.SUPER_ARMOR,
        },
        {
          name: MonsterAbility.COST_ABSORPTION,
        },
      ],
    },
    resistance: {
      skills: [
        {
          name: MonsterAbility.TRANSFORMATION,
        },
        {
          name: MonsterAbility.CURSE,
        },
        {
          name: MonsterAbility.SLEEP,
        },
        {
          name: MonsterAbility.SHACKLES,
        },
        {
          name: MonsterAbility.RESTRAINT,
        },
        {
          name: MonsterAbility.FREEZING,
        },
      ],
    },
    weakness: {
      skills: [
        {
          name: MonsterAbility.IGNITE,
        },
      ],
    },
    thumbnailFull:
      'https://patchwiki.biligame.com/images/resonance/9/95/05n3mdimiv8z581wjf8o8x5gxyidb31.png',
    camp: 'https://patchwiki.biligame.com/images/resonance/8/8b/88cs95z6hi13s7cpzwshg2670jomxmq.png',
  },
  '때리바 1000': {
    drops: [],
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E6%8C%A8%E6%8F%8D%E5%AE%9D1000',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/2/26/9150r8u95iwz8xjzlweb1l0hq6we8ul.png',
    grade: MonsterGrade.ARCHNEMESIS,
    attack: MonsterStatGrade.S,
    defence: MonsterStatGrade.S,
    hp: MonsterStatGrade.C,
    type: MonsterType.MACHINE,
    traits: { skills: [] },
    resistance: { skills: [] },
    weakness: { skills: [] },
    thumbnailFull:
      'https://patchwiki.biligame.com/images/resonance/0/08/j31y1wfvs7i4yi7jtdad3rksv0gs3xe.png',
    camp: 'https://patchwiki.biligame.com/images/resonance/d/d6/fqk1fqk41vtbvbjjn4oubj3gb2q8die.png',
  },
  '때리바 2000': {
    drops: [],
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E6%8C%A8%E6%8F%8D%E5%AE%9D2000',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/1/12/kt20akbr7i4yt8xhdotldrflyss0owv.png',
    grade: MonsterGrade.ARCHNEMESIS,
    attack: MonsterStatGrade.S,
    defence: MonsterStatGrade.S,
    hp: MonsterStatGrade.C,
    type: MonsterType.MACHINE,
    traits: { skills: [] },
    resistance: { skills: [] },
    weakness: { skills: [] },
    thumbnailFull:
      'https://patchwiki.biligame.com/images/resonance/a/a0/d8hse39tdx21rh8eex7mirysn2sbu77.png',
    camp: 'https://patchwiki.biligame.com/images/resonance/d/d6/fqk1fqk41vtbvbjjn4oubj3gb2q8die.png',
  },
  '썬더스톰 BO-X 1000': {
    drops: [],
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E9%9B%B7%E6%9A%B4%E6%B3%A2%E5%85%8B%E5%A3%AB1000',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/3/3f/dwu735yj8ljrzwldlq3rg2s7zebcmx1.png',
    grade: MonsterGrade.ARCHNEMESIS,
    attack: MonsterStatGrade.SS,
    defence: MonsterStatGrade.SS,
    hp: MonsterStatGrade.SSS,
    type: MonsterType.MACHINE,
    traits: {
      skills: [
        {
          name: MonsterAbility.LIGHTNING_STRIKE,
        },
      ],
    },
    resistance: {
      skills: [
        {
          name: MonsterAbility.STUN,
        },
        {
          name: MonsterAbility.SLEEP,
        },
      ],
    },
    weakness: { skills: [] },
    thumbnailFull:
      'https://patchwiki.biligame.com/images/resonance/f/f1/l5okvbdscysv44mnaehfxv8p2590a29.png',
    camp: 'https://patchwiki.biligame.com/images/resonance/d/d6/fqk1fqk41vtbvbjjn4oubj3gb2q8die.png',
  },
  '플레이밍 BO-X 1000': {
    drops: [],
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E7%87%83%E7%84%B0%E6%B3%A2%E5%85%8B%E5%A3%AB1000',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/0/0a/0uk6huw44jclrc1r2ghs48d3phpnzi0.png',
    grade: MonsterGrade.ARCHNEMESIS,
    attack: MonsterStatGrade.SS,
    defence: MonsterStatGrade.SS,
    hp: MonsterStatGrade.SSS,
    type: MonsterType.MACHINE,
    traits: {
      skills: [
        {
          name: MonsterAbility.IGNITE,
        },
      ],
    },
    resistance: {
      skills: [
        {
          name: MonsterAbility.STUN,
        },
        {
          name: MonsterAbility.SLEEP,
        },
      ],
    },
    weakness: { skills: [] },
    thumbnailFull:
      'https://patchwiki.biligame.com/images/resonance/5/5b/mvf26d2m1ju4v9i5qpcry69oawzglul.png',
    camp: 'https://patchwiki.biligame.com/images/resonance/d/d6/fqk1fqk41vtbvbjjn4oubj3gb2q8die.png',
  },
  '콘덴싱 BO-X 1000': {
    drops: [],
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E5%86%B7%E5%87%9D%E6%B3%A2%E5%85%8B%E5%A3%AB1000',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/5/5e/d8ann104fdufpwhjsw2hc0fm14ulc4k.png',
    grade: MonsterGrade.ARCHNEMESIS,
    attack: MonsterStatGrade.SS,
    defence: MonsterStatGrade.SS,
    hp: MonsterStatGrade.SSS,
    type: MonsterType.MACHINE,
    traits: {
      skills: [
        {
          name: MonsterAbility.FREEZING,
        },
      ],
    },
    resistance: {
      skills: [
        {
          name: MonsterAbility.STUN,
        },
        {
          name: MonsterAbility.SLEEP,
        },
      ],
    },
    weakness: { skills: [] },
    thumbnailFull:
      'https://patchwiki.biligame.com/images/resonance/b/be/22u455lg2z4sbkitjcizz0tbh9qdjng.png',
    camp: 'https://patchwiki.biligame.com/images/resonance/d/d6/fqk1fqk41vtbvbjjn4oubj3gb2q8die.png',
  },
  MOM: {
    drops: ['심면 고엽', '심면 뿌리', '심면 나뭇가지', '심면 나무'],
    detail: 'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-MOM',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/b/b5/l4ny3rtz8to3zuabzaeghtv80dfv88r.png',
    grade: MonsterGrade.ARCHNEMESIS,
    attack: MonsterStatGrade.A,
    defence: MonsterStatGrade.A,
    hp: MonsterStatGrade.S,
    type: MonsterType.DORMANT,
    traits: {
      skills: [
        {
          name: MonsterAbility.CARD_PRINT,
        },
        {
          name: MonsterAbility.SUMMON,
        },
      ],
    },
    resistance: {
      skills: [
        {
          name: MonsterAbility.SLEEP,
        },
        {
          name: MonsterAbility.FREEZING,
        },
      ],
    },
    weakness: {
      skills: [
        {
          name: MonsterAbility.IGNITE,
        },
      ],
    },
    thumbnailFull:
      'https://patchwiki.biligame.com/images/resonance/e/ec/llptml6hmezaf7a2g2kjdilekf6jukr.png',
    camp: 'https://patchwiki.biligame.com/images/resonance/e/ef/jx24anrrg2438ypj6wqb5wrbcrm8j2a.png',
  },
  '심면자-환술사': {
    drops: ['심면 고엽', '심면 뿌리', '심면 나뭇가지', '심면 나무'],
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E6%B7%B1%E7%9C%A0%E8%80%85%C2%B7%E8%BF%B7%E6%A2%A6',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/3/35/rhvaa4poajfjtohwiew0u3zlz2tqj8k.png',
    grade: MonsterGrade.ARCHNEMESIS,
    attack: MonsterStatGrade.A,
    defence: MonsterStatGrade.A,
    hp: MonsterStatGrade.S,
    type: MonsterType.DORMANT,
    traits: {
      skills: [
        {
          name: MonsterAbility.CARD_PRINT,
        },
        {
          name: MonsterAbility.SUMMON,
        },
      ],
    },
    resistance: {
      skills: [
        {
          name: MonsterAbility.SLEEP,
        },
        {
          name: MonsterAbility.FREEZING,
        },
      ],
    },
    weakness: {
      skills: [
        {
          name: MonsterAbility.IGNITE,
        },
      ],
    },
    thumbnailFull:
      'https://patchwiki.biligame.com/images/resonance/c/c9/3p0cq3g921m36bq04xbhw5t68smu54p.png',
    camp: 'https://patchwiki.biligame.com/images/resonance/e/ef/jx24anrrg2438ypj6wqb5wrbcrm8j2a.png',
  },
  '심면자-나이트메어': {
    drops: ['심면 고엽', '심면 뿌리', '심면 나뭇가지', '심면 나무'],
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E6%B7%B1%E7%9C%A0%E8%80%85%C2%B7%E6%B2%89%E6%BA%BA',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/2/24/8x0ap5seifbvahojm7a5atsm95nw54x.png',
    grade: MonsterGrade.ARCHNEMESIS,
    attack: MonsterStatGrade.SS,
    defence: MonsterStatGrade.S,
    hp: MonsterStatGrade.S,
    type: MonsterType.DORMANT,
    traits: {
      skills: [
        {
          name: MonsterAbility.CURSE,
        },
        {
          name: MonsterAbility.RESTRAINT,
        },
      ],
    },
    resistance: {
      skills: [
        {
          name: MonsterAbility.SLEEP,
        },
        {
          name: MonsterAbility.FREEZING,
        },
        {
          name: MonsterAbility.RESTRAINT,
        },
        {
          name: MonsterAbility.SHACKLES,
        },
        {
          name: MonsterAbility.CURSE,
        },
        {
          name: MonsterAbility.BURN_INJURY,
        },
      ],
    },
    weakness: {
      skills: [
        {
          name: MonsterAbility.IGNITE,
        },
        {
          name: MonsterAbility.CRASH,
        },
      ],
    },
    thumbnailFull:
      'https://patchwiki.biligame.com/images/resonance/8/84/8kqjfcdlc25ebh1m3fo968enxzmrhhb.png',
    camp: 'https://patchwiki.biligame.com/images/resonance/e/ef/jx24anrrg2438ypj6wqb5wrbcrm8j2a.png',
  },
  '사슬의 죄수': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E7%A5%B8%E9%93%BE%E5%9B%9A%E5%BE%92',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/c/ca/0crpop4x2xk1cr41csslgi0r0u1nlzf.png',
    grade: MonsterGrade.ARCHNEMESIS,
    attack: MonsterStatGrade.S,
    defence: MonsterStatGrade.S,
    hp: MonsterStatGrade.SS,
    type: MonsterType.DORMANT,
    traits: {
      skills: [
        {
          name: MonsterAbility.COST_ABSORPTION,
        },
        {
          name: MonsterAbility.INTERRUPTION,
        },
        {
          name: MonsterAbility.STUN,
        },
        {
          name: MonsterAbility.RESTRAINT,
        },
        {
          name: MonsterAbility.CURSE,
        },
        {
          name: MonsterAbility.SMASH,
        },
        {
          name: MonsterAbility.BURN,
        },
      ],
    },
    resistance: {
      skills: [
        {
          name: MonsterAbility.SLEEP,
        },
        {
          name: MonsterAbility.STUN,
        },
        {
          name: MonsterAbility.LIGHTNING_STRIKE,
        },
        {
          name: MonsterAbility.FREEZING,
        },
      ],
    },
    weakness: {
      skills: [
        {
          name: MonsterAbility.IGNITE,
        },
        {
          name: MonsterAbility.BURN_INJURY,
        },
      ],
    },
    thumbnailFull:
      'https://patchwiki.biligame.com/images/resonance/b/b8/9ntfqieo2jolewdzepw7uzrgp06apsq.png',
    camp: 'https://patchwiki.biligame.com/images/resonance/e/ef/jx24anrrg2438ypj6wqb5wrbcrm8j2a.png',
  },
  '멸망의 맹세': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E4%BD%9A%E4%BA%A1%E4%B9%8B%E8%AA%93',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/5/50/k1ofpkfrx3l6h21kse60uykhv67hbms.png',
    grade: MonsterGrade.ARCHNEMESIS,
    attack: MonsterStatGrade.SS,
    defence: MonsterStatGrade.S,
    hp: MonsterStatGrade.SS,
    type: MonsterType.DORMANT,
    traits: {
      skills: [
        {
          name: MonsterAbility.CHAOS,
        },
        {
          name: MonsterAbility.CRASH,
        },
        {
          name: MonsterAbility.LIGHTNING_STRIKE,
        },
        {
          name: MonsterAbility.IGNITE,
        },
        {
          name: MonsterAbility.FREEZING,
        },
      ],
    },
    resistance: {
      skills: [
        {
          name: MonsterAbility.SLEEP,
        },
        {
          name: MonsterAbility.CURSE,
        },
        {
          name: MonsterAbility.SHACKLES,
        },
        {
          name: MonsterAbility.RESTRAINT,
        },
        {
          name: MonsterAbility.FREEZING,
        },
      ],
    },
    weakness: {
      skills: [
        {
          name: MonsterAbility.IGNITE,
        },
        {
          name: MonsterAbility.CRASH,
        },
      ],
    },
    thumbnailFull:
      'https://patchwiki.biligame.com/images/resonance/d/d5/6bz4znisiaqlc8m4f1tqpyvt53jm10k.png',
    camp: 'https://patchwiki.biligame.com/images/resonance/e/ef/jx24anrrg2438ypj6wqb5wrbcrm8j2a.png',
  },
  '조상들의 보복': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E8%BF%9C%E7%A5%96%E7%9A%84%E6%9E%9C%E6%8A%A5',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/5/5f/q5hitg6dthut03fz0ygrk8gbsu5c4d3.png',
    grade: MonsterGrade.ARCHNEMESIS,
    attack: MonsterStatGrade.SS,
    defence: MonsterStatGrade.B,
    hp: MonsterStatGrade.SS,
    type: MonsterType.DORMANT,
    traits: {
      skills: [
        {
          name: MonsterAbility.SCORCHING_HEAT,
        },
        {
          name: MonsterAbility.BURN,
        },
        {
          name: MonsterAbility.SMASH,
        },
        {
          name: MonsterAbility.BURN_INJURY,
        },
      ],
    },
    resistance: {
      skills: [
        {
          name: MonsterAbility.SLEEP,
        },
        {
          name: MonsterAbility.TRANSFORMATION,
        },
        {
          name: MonsterAbility.BURN_INJURY,
        },
        {
          name: MonsterAbility.SCORCHING_HEAT,
        },
        {
          name: MonsterAbility.STUN,
        },
        {
          name: MonsterAbility.RESTRAINT,
        },
        {
          name: MonsterAbility.SHACKLES,
        },
      ],
    },
    weakness: {
      skills: [
        {
          name: MonsterAbility.IGNITE,
        },
        {
          name: MonsterAbility.FREEZING,
        },
        {
          name: MonsterAbility.LIGHTNING_STRIKE,
        },
      ],
    },
    thumbnailFull:
      'https://patchwiki.biligame.com/images/resonance/0/01/mtu12qkw20odds7t7k7w6jqlvovxh0q.png',
    camp: 'https://patchwiki.biligame.com/images/resonance/e/ef/jx24anrrg2438ypj6wqb5wrbcrm8j2a.png',
  },
  '황원의 제왕-드릴 파워아머': {
    drops: ['낡은 부품', '정밀 부품'],
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E8%8D%92%E5%8E%9F%E7%8E%8B%C2%B7%E7%A9%BF%E5%87%BB%E5%8A%A8%E5%8A%9B%E7%94%B2',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/c/c7/lno0037lohscijetp708gidnzgdunc0.png',
    grade: MonsterGrade.ARCHNEMESIS,
    attack: MonsterStatGrade.B,
    defence: MonsterStatGrade.B,
    hp: MonsterStatGrade.S,
    type: MonsterType.HUMAN,
    traits: {
      skills: [
        {
          name: MonsterAbility.STUN,
        },
        {
          name: MonsterAbility.SMASH,
        },
        {
          name: MonsterAbility.CRASH,
        },
      ],
    },
    resistance: {
      skills: [
        {
          name: MonsterAbility.FREEZING,
        },
        {
          name: MonsterAbility.SLEEP,
        },
      ],
    },
    weakness: {
      skills: [
        {
          name: MonsterAbility.SCORCHING_HEAT,
        },
      ],
    },
    thumbnailFull:
      'https://patchwiki.biligame.com/images/resonance/b/bc/jnqullmw3gqmytnc1uof0clplko9f4o.png',
    camp: 'https://patchwiki.biligame.com/images/resonance/0/00/qdastc7p24sf8r44ketmdkl4b1370j0.png',
  },
  '위험방지장비-ENI': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E5%BE%A1%E9%99%A9%E5%AF%B9%E7%AD%96%E6%9C%BA%E6%A2%B0%C2%B7%E8%89%BE%E5%B0%BC',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/2/2c/on1d1axsel2q4gnriunjrarqh1sxfit.png',
    grade: MonsterGrade.ARCHNEMESIS,
    attack: MonsterStatGrade.S,
    defence: MonsterStatGrade.S,
    hp: MonsterStatGrade.SS,
    type: MonsterType.MACHINE,
    traits: {
      skills: [
        {
          name: MonsterAbility.KNOCK_BACK,
        },
        {
          name: MonsterAbility.AIRBORNE,
        },
        {
          name: MonsterAbility.RESTRAINT,
        },
        {
          name: MonsterAbility.CHAOS,
        },
        {
          name: MonsterAbility.SHACKLES,
        },
        {
          name: MonsterAbility.FIRESTORM,
        },
      ],
    },
    resistance: {
      skills: [
        {
          name: MonsterAbility.FREEZING,
        },
        {
          name: MonsterAbility.LIGHTNING_STRIKE,
        },
        {
          name: MonsterAbility.IGNITE,
        },
        {
          name: MonsterAbility.SLEEP,
        },
      ],
    },
    weakness: {
      skills: [
        {
          name: MonsterAbility.SCORCHING_HEAT,
        },
      ],
    },
    thumbnailFull:
      'https://patchwiki.biligame.com/images/resonance/d/d5/7rg9rjhalp1r7lrxeqts676172b8x3z.png',
    camp: 'https://patchwiki.biligame.com/images/resonance/6/63/dc60cj3zxglq3um638rpqk1hkxtptjz.png',
  },
  '슬레이어 전기톱': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E5%B1%A0%E6%88%AE%E8%80%85%C2%B7%E9%93%BE%E9%94%AF',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/9/97/4ngkro40oosutq53at96l07lt2g9sq5.png',
    grade: MonsterGrade.ARCHNEMESIS,
    attack: MonsterStatGrade.S,
    defence: MonsterStatGrade.S,
    hp: MonsterStatGrade.SS,
    type: MonsterType.HUMAN,
    traits: {
      skills: [
        {
          name: MonsterAbility.BURN_INJURY,
        },
        {
          name: MonsterAbility.CRASH,
        },
        {
          name: MonsterAbility.STUN,
        },
      ],
    },
    resistance: {
      skills: [
        {
          name: MonsterAbility.FREEZING,
        },
        {
          name: MonsterAbility.IGNITE,
        },
        {
          name: MonsterAbility.LIGHTNING_STRIKE,
        },
        {
          name: MonsterAbility.BURN_INJURY,
        },
        {
          name: MonsterAbility.INTERRUPTION,
        },
      ],
    },
    weakness: {
      skills: [
        {
          name: MonsterAbility.SCORCHING_HEAT,
        },
      ],
    },
    thumbnailFull:
      'https://patchwiki.biligame.com/images/resonance/2/2c/1ep1m5toqgr5n1zak5nz6n3se24wddp.png',
    camp: 'https://patchwiki.biligame.com/images/resonance/c/c9/gylzv59aumb0nn4fit07ezjqvh38z7m.png',
  },
  '죽지 않는': {
    detail: 'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E6%B0%B8%E7%94%9F%E8%80%85',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/9/9b/2ehqlychh57ty2m446skah0xgqajkkn.png',
    grade: MonsterGrade.ARCHNEMESIS,
    attack: MonsterStatGrade.SS,
    defence: MonsterStatGrade.A,
    hp: MonsterStatGrade.SS,
    type: MonsterType.ETC,
    traits: {
      skills: [
        {
          name: MonsterAbility.SERIOUS_INJURY,
        },
        {
          name: MonsterAbility.SUPER_ARMOR,
        },
        {
          name: MonsterAbility.SCORCH,
        },
      ],
    },
    resistance: {
      skills: [
        {
          name: MonsterAbility.LIGHTNING_STRIKE,
        },
        {
          name: MonsterAbility.BURN,
        },
        {
          name: MonsterAbility.CHAOS,
        },
        {
          name: MonsterAbility.RESTRAINT,
        },
        {
          name: MonsterAbility.SHACKLES,
        },
      ],
    },
    weakness: {
      skills: [
        {
          name: MonsterAbility.FREEZING,
        },
        {
          name: MonsterAbility.BURN_INJURY,
        },
        {
          name: MonsterAbility.CRASH,
        },
      ],
    },
    thumbnailFull:
      'https://patchwiki.biligame.com/images/resonance/3/3b/euuh9rp2ps3b349mscr1fvxix4ee7dd.png',
    camp: 'https://patchwiki.biligame.com/images/resonance/9/9f/ewannjsdfylbscs56ql2xsl6ebwh0k4.png',
  },
  '두더지파 중장비': {
    drops: ['낡은 부품', '정밀 부품', '대형 톱니바퀴'],
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E9%BC%B9%E9%BC%A0%E9%87%8D%E6%9C%BA',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/b/b0/pbtzbqtv7lgltmcgd9zomcrybpoul7t.png',
    grade: MonsterGrade.ARCHNEMESIS,
    attack: MonsterStatGrade.B,
    defence: MonsterStatGrade.C,
    hp: MonsterStatGrade.S,
    type: MonsterType.HUMAN,
    traits: {
      skills: [
        {
          name: MonsterAbility.SUMMON,
        },
        {
          name: MonsterAbility.IGNITE,
        },
        {
          name: MonsterAbility.STUN,
        },
      ],
    },
    resistance: {
      skills: [
        {
          name: MonsterAbility.SLEEP,
        },
        {
          name: MonsterAbility.STUN,
        },
      ],
    },
    weakness: {
      skills: [
        {
          name: MonsterAbility.FREEZING,
        },
        {
          name: MonsterAbility.LIGHTNING_STRIKE,
        },
        {
          name: MonsterAbility.SCORCHING_HEAT,
        },
      ],
    },
    thumbnailFull:
      'https://patchwiki.biligame.com/images/resonance/b/b2/scj7xwwbuaog03bfkqjk38a7v307fgk.png',
    camp: 'https://patchwiki.biligame.com/images/resonance/c/c5/h0od7spwstsarfp47okis1jl3h4m4n6.png',
  },
  두더지: {
    drops: ['낡은 부품', '정밀 부품', '두더지 선글라스'],
    detail: 'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E9%BC%B9%E9%BC%A0',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/4/4d/f63qto4cdbdwifs9fw6dgei8qyx0jv8.png',
    grade: MonsterGrade.ARCHNEMESIS,
    attack: MonsterStatGrade.S,
    defence: MonsterStatGrade.A,
    hp: MonsterStatGrade.S,
    type: MonsterType.HUMAN,
    traits: {
      skills: [
        {
          name: MonsterAbility.SUMMON,
        },
        {
          name: MonsterAbility.IGNITE,
        },
      ],
    },
    resistance: {
      skills: [
        {
          name: MonsterAbility.FREEZING,
        },
        {
          name: MonsterAbility.SLEEP,
        },
      ],
    },
    weakness: {
      skills: [
        {
          name: MonsterAbility.BURN_INJURY,
        },
      ],
    },
    thumbnailFull:
      'https://patchwiki.biligame.com/images/resonance/0/06/paf1llni8b53gprr3nrrpf6e3syesmu.png',
    camp: 'https://patchwiki.biligame.com/images/resonance/c/c5/h0od7spwstsarfp47okis1jl3h4m4n6.png',
  },
  '아니타 무장 초병': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E9%98%BF%E5%A6%AE%E5%A1%94%E6%AD%A6%E8%A3%85%E5%93%A8%E5%8D%AB',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/d/d5/b2qdi2dh6qhrfyw5tp96bpq41xj88wu.png',
    grade: MonsterGrade.ELITE,
    attack: MonsterStatGrade.A,
    defence: MonsterStatGrade.SS,
    hp: MonsterStatGrade.S,
    type: MonsterType.HUMAN,
    traits: {
      skills: [
        {
          name: MonsterAbility.SMASH,
        },
      ],
    },
    resistance: {
      skills: [
        {
          name: MonsterAbility.RESTRAINT,
        },
        {
          name: MonsterAbility.SHACKLES,
        },
      ],
    },
    weakness: {
      skills: [
        {
          name: MonsterAbility.BURN,
        },
      ],
    },
    thumbnailFull:
      'https://patchwiki.biligame.com/images/resonance/e/e4/pa1a806psqg6psuy2rttapg2otzn7tk.png',
    camp: 'https://patchwiki.biligame.com/images/resonance/a/ad/9926buo6j73a0k5nphis0yupsgcfn9j.png',
  },
  '아니타 무장 위병': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E9%98%BF%E5%A6%AE%E5%A1%94%E6%AD%A6%E8%A3%85%E5%AE%88%E5%8D%AB',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/4/44/j3depdhm3sn5t6erbgo3wscqkomkyj8.png',
    grade: MonsterGrade.ELITE,
    attack: MonsterStatGrade.A,
    defence: MonsterStatGrade.SS,
    hp: MonsterStatGrade.S,
    type: MonsterType.HUMAN,
    traits: {
      skills: [
        {
          name: MonsterAbility.STUN,
        },
      ],
    },
    resistance: {
      skills: [
        {
          name: MonsterAbility.RESTRAINT,
        },
        {
          name: MonsterAbility.SHACKLES,
        },
      ],
    },
    weakness: {
      skills: [
        {
          name: MonsterAbility.BURN,
        },
      ],
    },
    thumbnailFull:
      'https://patchwiki.biligame.com/images/resonance/0/0d/nd12w920sv9rxa48oagb1zap5l7omxw.png',
    camp: 'https://patchwiki.biligame.com/images/resonance/a/ad/9926buo6j73a0k5nphis0yupsgcfn9j.png',
  },
  '방패배트 폭력배': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E7%9B%BE%E6%A3%92%E6%9A%B4%E5%BE%92',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/e/e6/preh1su014320gmclrpfxoyre11ojrv.png',
    grade: MonsterGrade.ELITE,
    attack: MonsterStatGrade.D,
    defence: MonsterStatGrade.C,
    hp: MonsterStatGrade.D,
    type: MonsterType.HUMAN,
    traits: {
      skills: [
        {
          name: MonsterAbility.INTERRUPTION,
        },
      ],
    },
    resistance: { skills: [] },
    weakness: {
      skills: [
        {
          name: MonsterAbility.BURN_INJURY,
        },
      ],
    },
    thumbnailFull:
      'https://patchwiki.biligame.com/images/resonance/5/5b/ehh6a5g537153evmmpk99kgu9lc6hk2.png',
    camp: 'https://patchwiki.biligame.com/images/resonance/3/37/rksexwx0jz8jregf65ewxei7bouempn.png',
  },
  '산탄총방패 폭력배': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E6%9E%AA%E7%9B%BE%E6%9A%B4%E5%BE%92',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/6/6a/ts2b5skkdovbld5y49ws32rglb8yd63.png',
    grade: MonsterGrade.ELITE,
    attack: MonsterStatGrade.D,
    defence: MonsterStatGrade.C,
    hp: MonsterStatGrade.D,
    type: MonsterType.HUMAN,
    traits: { skills: [] },
    resistance: { skills: [] },
    weakness: {
      skills: [
        {
          name: MonsterAbility.BURN_INJURY,
        },
      ],
    },
    thumbnailFull:
      'https://patchwiki.biligame.com/images/resonance/2/20/37wplcddaj4njljujrcb42vzybmpusa.png',
    camp: 'https://patchwiki.biligame.com/images/resonance/3/37/rksexwx0jz8jregf65ewxei7bouempn.png',
  },
  '방패소총 폭력배': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E7%9B%BE%E6%9E%AA%E6%9A%B4%E5%BE%92',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/3/34/1yaq84sycj5jl30frf026mmyfx1jlrb.png',
    grade: MonsterGrade.ELITE,
    attack: MonsterStatGrade.D,
    defence: MonsterStatGrade.C,
    hp: MonsterStatGrade.D,
    type: MonsterType.HUMAN,
    traits: { skills: [] },
    resistance: { skills: [] },
    weakness: {
      skills: [
        {
          name: MonsterAbility.BURN_INJURY,
        },
      ],
    },
    thumbnailFull:
      'https://patchwiki.biligame.com/images/resonance/d/db/9d2te33sfkayuo2tw99vdgkpd5frwjm.png',
    camp: 'https://patchwiki.biligame.com/images/resonance/3/37/rksexwx0jz8jregf65ewxei7bouempn.png',
  },
  '배트도끼 폭력배': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E6%A3%92%E6%96%A7%E6%9A%B4%E5%BE%92',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/3/3e/lbvp5grcyn1u2r10cn296xut04spugn.png',
    grade: MonsterGrade.ELITE,
    attack: MonsterStatGrade.D,
    defence: MonsterStatGrade.D,
    hp: MonsterStatGrade.D,
    type: MonsterType.HUMAN,
    traits: {
      skills: [
        {
          name: MonsterAbility.INTERRUPTION,
        },
        {
          name: MonsterAbility.BURN_INJURY,
        },
      ],
    },
    resistance: { skills: [] },
    weakness: {
      skills: [
        {
          name: MonsterAbility.BURN_INJURY,
        },
      ],
    },
    thumbnailFull:
      'https://patchwiki.biligame.com/images/resonance/a/a7/ro4mx6yrwpirt304jjx6h7y2g29dncu.png',
    camp: 'https://patchwiki.biligame.com/images/resonance/3/37/rksexwx0jz8jregf65ewxei7bouempn.png',
  },
  '쌍도끼 폭력배': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E5%8F%8C%E6%96%A7%E6%9A%B4%E5%BE%92',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/7/71/q1y3zeihshaixu4xhtcbvsoosy38a1q.png',
    grade: MonsterGrade.ELITE,
    attack: MonsterStatGrade.D,
    defence: MonsterStatGrade.C,
    hp: MonsterStatGrade.D,
    type: MonsterType.HUMAN,
    traits: { skills: [] },
    resistance: { skills: [] },
    weakness: {
      skills: [
        {
          name: MonsterAbility.BURN_INJURY,
        },
      ],
    },
    thumbnailFull:
      'https://patchwiki.biligame.com/images/resonance/1/13/lflwji9wv4r2qx3nni1ylcs86o2lprf.png',
    camp: 'https://patchwiki.biligame.com/images/resonance/3/37/rksexwx0jz8jregf65ewxei7bouempn.png',
  },
  '양손총 폭력배': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E5%8F%8C%E6%9E%AA%E6%9A%B4%E5%BE%92',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/4/4a/q49vi58xr511l2izu3d358kartrr6hm.png',
    grade: MonsterGrade.ELITE,
    attack: MonsterStatGrade.C,
    defence: MonsterStatGrade.D,
    hp: MonsterStatGrade.D,
    type: MonsterType.HUMAN,
    traits: { skills: [] },
    resistance: { skills: [] },
    weakness: {
      skills: [
        {
          name: MonsterAbility.BURN_INJURY,
        },
      ],
    },
    thumbnailFull:
      'https://patchwiki.biligame.com/images/resonance/4/4e/gzpvml140vtpitgqtjot88xm4a4zipn.png',
    camp: 'https://patchwiki.biligame.com/images/resonance/3/37/rksexwx0jz8jregf65ewxei7bouempn.png',
  },
  '가시 베인링': {
    drops: ['베인링 낭액', '베인링 낭', '베인링 가시'],
    detail: 'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E9%B8%A3%E7%88%86%E8%99%AB',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/4/48/82jtt2wt6qixy4xabzapm16yb73ubg2.png',
    grade: MonsterGrade.ELITE,
    attack: MonsterStatGrade.D,
    defence: MonsterStatGrade.D,
    hp: MonsterStatGrade.D,
    type: MonsterType.BETULA,
    traits: {
      skills: [
        {
          name: MonsterAbility.SUICIDE_ATTACK,
        },
        {
          name: MonsterAbility.BURN,
        },
      ],
    },
    resistance: { skills: [] },
    weakness: {
      skills: [
        {
          name: MonsterAbility.FREEZING,
        },
        {
          name: MonsterAbility.IGNITE,
        },
        {
          name: MonsterAbility.LIGHTNING_STRIKE,
        },
        {
          name: MonsterAbility.SCORCHING_HEAT,
        },
        {
          name: MonsterAbility.BURN_INJURY,
        },
      ],
    },
    thumbnailFull:
      'https://patchwiki.biligame.com/images/resonance/9/98/jlmclk2ke79amempkyhbjvtorjeuww2.png',
    camp: 'https://patchwiki.biligame.com/images/resonance/2/2f/no501iad0px5870m35pi7gir9dkar5o.png',
  },
  '북부동맹 잔당-파워아머 선봉': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E5%8C%97%E9%98%B5%E6%AE%8B%E9%83%A8%C2%B7%E5%8A%A8%E5%8A%9B%E7%94%B2%E5%85%88%E9%94%8B',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/c/cc/k6qnts9zyga37nbdunj1v8igluy5pey.png',
    grade: MonsterGrade.ELITE,
    attack: MonsterStatGrade.A,
    defence: MonsterStatGrade.B,
    hp: MonsterStatGrade.C,
    type: MonsterType.HUMAN,
    traits: {
      skills: [
        {
          name: MonsterAbility.INTERRUPTION,
        },
      ],
    },
    resistance: {
      skills: [
        {
          name: MonsterAbility.BURN_INJURY,
        },
        {
          name: MonsterAbility.STUN,
        },
      ],
    },
    weakness: {
      skills: [
        {
          name: MonsterAbility.SCORCHING_HEAT,
        },
        {
          name: MonsterAbility.FREEZING,
        },
      ],
    },
    thumbnailFull:
      'https://patchwiki.biligame.com/images/resonance/3/32/52f1h3pe7pgju7l3cnk4sow1kircasm.png',
    camp: 'https://patchwiki.biligame.com/images/resonance/d/da/jief5dxw2exbksqhozaqb0srxud6cr1.png',
  },
  '북부동맹 잔당-파워아머 중포': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E5%8C%97%E9%98%B5%E6%AE%8B%E9%83%A8%C2%B7%E5%8A%A8%E5%8A%9B%E7%94%B2%E9%87%8D%E7%82%AE',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/8/82/qgdnz3b724541d0e6ifros9yov7ixn1.png',
    grade: MonsterGrade.ELITE,
    attack: MonsterStatGrade.A,
    defence: MonsterStatGrade.B,
    hp: MonsterStatGrade.C,
    type: MonsterType.HUMAN,
    traits: {
      skills: [
        {
          name: MonsterAbility.IGNITE,
        },
      ],
    },
    resistance: {
      skills: [
        {
          name: MonsterAbility.IGNITE,
        },
        {
          name: MonsterAbility.BURN_INJURY,
        },
      ],
    },
    weakness: {
      skills: [
        {
          name: MonsterAbility.SCORCHING_HEAT,
        },
        {
          name: MonsterAbility.FREEZING,
        },
      ],
    },
    thumbnailFull:
      'https://patchwiki.biligame.com/images/resonance/6/6c/48thp1rgj0plibxjigcud2l7847c5gn.png',
    camp: 'https://patchwiki.biligame.com/images/resonance/d/da/jief5dxw2exbksqhozaqb0srxud6cr1.png',
  },
  '북부동맹 잔당-파워아머 지원': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E5%8C%97%E9%98%B5%E6%AE%8B%E9%83%A8%C2%B7%E5%8A%A8%E5%8A%9B%E7%94%B2%E6%8F%B4%E6%8A%A4',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/f/fb/pipc1t8asay5mrb1sw5n3gbk6sgw2da.png',
    grade: MonsterGrade.ELITE,
    attack: MonsterStatGrade.A,
    defence: MonsterStatGrade.B,
    hp: MonsterStatGrade.C,
    type: MonsterType.HUMAN,
    traits: {
      skills: [
        {
          name: MonsterAbility.LIGHTNING_STRIKE,
        },
      ],
    },
    resistance: {
      skills: [
        {
          name: MonsterAbility.LIGHTNING_STRIKE,
        },
        {
          name: MonsterAbility.BURN_INJURY,
        },
      ],
    },
    weakness: {
      skills: [
        {
          name: MonsterAbility.SCORCHING_HEAT,
        },
        {
          name: MonsterAbility.FREEZING,
        },
      ],
    },
    thumbnailFull:
      'https://patchwiki.biligame.com/images/resonance/c/cf/hdhdmn2y3hswbefehmrnfevb7po4p9w.png',
    camp: 'https://patchwiki.biligame.com/images/resonance/d/da/jief5dxw2exbksqhozaqb0srxud6cr1.png',
  },
  자주포: {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E8%87%AA%E8%B5%B0%E5%93%A8%E6%88%92%E7%82%AE',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/c/c0/4k8yemgz4o5g2dbeeysbuhyrvrd3o8t.png',
    grade: MonsterGrade.ELITE,
    attack: MonsterStatGrade.A,
    defence: MonsterStatGrade.B,
    hp: MonsterStatGrade.C,
    type: MonsterType.MACHINE,
    traits: {
      skills: [
        {
          name: MonsterAbility.IGNITE,
        },
      ],
    },
    resistance: {
      skills: [
        {
          name: MonsterAbility.FREEZING,
        },
        {
          name: MonsterAbility.SLEEP,
        },
        {
          name: MonsterAbility.BURN_INJURY,
        },
      ],
    },
    weakness: {
      skills: [
        {
          name: MonsterAbility.SCORCHING_HEAT,
        },
      ],
    },
    thumbnailFull:
      'https://patchwiki.biligame.com/images/resonance/7/75/4jcxmxpaq7ouht0oxj9j7q3mmqjwsyr.png',
    camp: 'https://patchwiki.biligame.com/images/resonance/d/da/jief5dxw2exbksqhozaqb0srxud6cr1.png',
  },
  '클로 베툴라 생명체': {
    drops: ['베툴라 편모', '베툴라 더듬이', '베툴라 자사낭'],
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E9%92%B5%E7%88%AA%E4%BD%93%E6%A1%A6%E6%A0%91%E7%94%9F%E7%89%A9',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/1/1e/g438rjj6iuvxkgu0t0z5fatrqdxlqkp.png',
    grade: MonsterGrade.ELITE,
    attack: MonsterStatGrade.B,
    defence: MonsterStatGrade.C,
    hp: MonsterStatGrade.S,
    type: MonsterType.BETULA,
    traits: { skills: [] },
    resistance: { skills: [] },
    weakness: {
      skills: [
        {
          name: MonsterAbility.LIGHTNING_STRIKE,
        },
      ],
    },
    thumbnailFull:
      'https://patchwiki.biligame.com/images/resonance/8/80/443x17zht8bb7h9p74u8utypy9rtbyh.png',
    camp: 'https://patchwiki.biligame.com/images/resonance/7/79/r9gwbxmp4mfxucpaea4sq36aee329pi.png',
  },
  '가시방벽 베툴라 생명체': {
    drops: ['베툴라 편모', '베툴라 더듬이'],
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E5%88%BA%E5%A3%81%E4%BD%93%E6%A1%A6%E6%A0%91%E7%94%9F%E7%89%A9',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/7/7d/8n7i4upoe5f5l7p0gva1fkjcse6px3t.png',
    grade: MonsterGrade.ELITE,
    attack: MonsterStatGrade.B,
    defence: MonsterStatGrade.C,
    hp: MonsterStatGrade.S,
    type: MonsterType.BETULA,
    traits: { skills: [] },
    resistance: {
      skills: [
        {
          name: MonsterAbility.FREEZING,
        },
      ],
    },
    weakness: {
      skills: [
        {
          name: MonsterAbility.LIGHTNING_STRIKE,
        },
      ],
    },
    thumbnailFull:
      'https://patchwiki.biligame.com/images/resonance/d/da/e49gk89wbwxvcwc605wbmylex3uanqh.png',
    camp: 'https://patchwiki.biligame.com/images/resonance/7/79/r9gwbxmp4mfxucpaea4sq36aee329pi.png',
  },
  '가시수염 베툴라 생명체': {
    drops: ['베툴라 편모', '베툴라 더듬이'],
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E5%88%BA%E9%A1%BB%E4%BD%93%E6%A1%A6%E6%A0%91%E7%94%9F%E7%89%A9',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/a/a1/n91mh8wd24h0peq2ed33odlbmpgc2sw.png',
    grade: MonsterGrade.ELITE,
    attack: MonsterStatGrade.A,
    defence: MonsterStatGrade.C,
    hp: MonsterStatGrade.B,
    type: MonsterType.BETULA,
    traits: { skills: [] },
    resistance: { skills: [] },
    weakness: {
      skills: [
        {
          name: MonsterAbility.LIGHTNING_STRIKE,
        },
      ],
    },
    thumbnailFull:
      'https://patchwiki.biligame.com/images/resonance/7/7e/gjcsaxj0fn7nawl7rgejayuon5swazu.png',
    camp: 'https://patchwiki.biligame.com/images/resonance/7/79/r9gwbxmp4mfxucpaea4sq36aee329pi.png',
  },
  '배수체 베툴라 생명체': {
    drops: ['베툴라 편모', '베툴라 더듬이'],
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E5%A4%9A%E5%80%8D%E4%BD%93%E6%A1%A6%E6%A0%91%E7%94%9F%E7%89%A9',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/0/01/tqnc944xsrpe2gzu0v83yi0nwyzpvkd.png',
    grade: MonsterGrade.ELITE,
    attack: MonsterStatGrade.B,
    defence: MonsterStatGrade.C,
    hp: MonsterStatGrade.B,
    type: MonsterType.BETULA,
    traits: { skills: [] },
    resistance: { skills: [] },
    weakness: {
      skills: [
        {
          name: MonsterAbility.LIGHTNING_STRIKE,
        },
      ],
    },
    thumbnailFull:
      'https://patchwiki.biligame.com/images/resonance/1/11/jax28q7cz4w10i1znys7l6rvfschnfy.png',
    camp: 'https://patchwiki.biligame.com/images/resonance/7/79/r9gwbxmp4mfxucpaea4sq36aee329pi.png',
  },
  '가도관 생명체': {
    drops: ['베툴라 편모', '베툴라 더듬이', '베툴라 자사낭'],
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E7%AE%A1%E8%83%9E%E4%BD%93%E6%A1%A6%E6%A0%91%E7%94%9F%E7%89%A9',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/7/74/091aqlioov1bnpgrgonxa049j7yu0f5.png',
    grade: MonsterGrade.ELITE,
    attack: MonsterStatGrade.B,
    defence: MonsterStatGrade.C,
    hp: MonsterStatGrade.B,
    type: MonsterType.BETULA,
    traits: { skills: [] },
    resistance: {
      skills: [
        {
          name: MonsterAbility.FREEZING,
        },
      ],
    },
    weakness: {
      skills: [
        {
          name: MonsterAbility.LIGHTNING_STRIKE,
        },
      ],
    },
    thumbnailFull:
      'https://patchwiki.biligame.com/images/resonance/f/fb/cfadupbszu0pif41fajnaj2iujof8qx.png',
    camp: 'https://patchwiki.biligame.com/images/resonance/7/79/r9gwbxmp4mfxucpaea4sq36aee329pi.png',
  },
  '에너지 베툴라 생명체': {
    drops: ['베툴라 편모', '베툴라 더듬이'],
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E6%91%84%E8%83%BD%E4%BD%93%E6%A1%A6%E6%A0%91%E7%94%9F%E7%89%A9',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/a/ac/adeyckjw2kwnhcq96cp1wwwigs14ska.png',
    grade: MonsterGrade.ELITE,
    attack: MonsterStatGrade.A,
    defence: MonsterStatGrade.C,
    hp: MonsterStatGrade.B,
    type: MonsterType.BETULA,
    traits: { skills: [] },
    resistance: { skills: [] },
    weakness: {
      skills: [
        {
          name: MonsterAbility.LIGHTNING_STRIKE,
        },
      ],
    },
    thumbnailFull:
      'https://patchwiki.biligame.com/images/resonance/3/37/97i0543l398vi1kbola45ywevfaeuy7.png',
    camp: 'https://patchwiki.biligame.com/images/resonance/7/79/r9gwbxmp4mfxucpaea4sq36aee329pi.png',
  },
  '반딧불 리자드': {
    drops: ['베툴라 연골', '베툴라 꼬리 수염', '베툴라 뼈대'],
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E6%B5%AE%E8%90%A4%E6%B8%B8%E7%A3%B7',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/7/70/sav1frwul1pz4omed8lcemaoj83pc6s.png',
    grade: MonsterGrade.ELITE,
    attack: MonsterStatGrade.B,
    defence: MonsterStatGrade.A,
    hp: MonsterStatGrade.D,
    type: MonsterType.BETULA,
    traits: {
      skills: [
        {
          name: MonsterAbility.BERSERK,
        },
        {
          name: MonsterAbility.IGNITE,
        },
      ],
    },
    resistance: {
      skills: [
        {
          name: MonsterAbility.IGNITE,
        },
        {
          name: MonsterAbility.LIGHTNING_STRIKE,
        },
      ],
    },
    weakness: {
      skills: [
        {
          name: MonsterAbility.SCORCHING_HEAT,
        },
      ],
    },
    thumbnailFull:
      'https://patchwiki.biligame.com/images/resonance/4/4e/pahdqkaoefcskecujnp31d6k2s4wbm8.png',
    camp: 'https://patchwiki.biligame.com/images/resonance/4/46/kxsvnvj2bq6cx1iotkuymskxllvj954.png',
  },
  '왕관해마 베툴라 생명체': {
    drops: ['해룡 지느러미줄', '해룡 꼬리 지느러미'],
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E5%86%A0%E6%B5%B7%E9%A9%AC%E6%A1%A6%E6%A0%91%E7%94%9F%E7%89%A9',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/6/69/svgag527u9txpoebcs3ushu9cc0flgv.png',
    grade: MonsterGrade.ELITE,
    attack: MonsterStatGrade.A,
    defence: MonsterStatGrade.B,
    hp: MonsterStatGrade.B,
    type: MonsterType.BETULA,
    traits: {
      skills: [
        {
          name: MonsterAbility.CHAOS,
        },
        {
          name: MonsterAbility.FREEZING,
        },
      ],
    },
    resistance: {
      skills: [
        {
          name: MonsterAbility.FREEZING,
        },
        {
          name: MonsterAbility.CHAOS,
        },
        {
          name: MonsterAbility.SLEEP,
        },
        {
          name: MonsterAbility.IGNITE,
        },
        {
          name: MonsterAbility.BURN_INJURY,
        },
      ],
    },
    weakness: {
      skills: [
        {
          name: MonsterAbility.LIGHTNING_STRIKE,
        },
      ],
    },
    thumbnailFull:
      'https://patchwiki.biligame.com/images/resonance/2/27/sad0g392gz44142tqtgz672daxesl4r.png',
    camp: 'https://patchwiki.biligame.com/images/resonance/a/a3/8dqqd5k3eudc4iks8icdt7jksjfv61f.png',
  },
  '해룡 베툴라 생명체': {
    drops: ['해룡 지느러미줄', '해룡 꼬리 지느러미'],
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E6%B5%B7%E9%BE%99%E6%A1%A6%E6%A0%91%E7%94%9F%E7%89%A9',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/6/68/9hsktgfh043b6rpqcepfg8mnyu5v6xj.png',
    grade: MonsterGrade.ELITE,
    attack: MonsterStatGrade.A,
    defence: MonsterStatGrade.B,
    hp: MonsterStatGrade.B,
    type: MonsterType.BETULA,
    traits: {
      skills: [
        {
          name: MonsterAbility.STUN,
        },
        {
          name: MonsterAbility.SHACKLES,
        },
        {
          name: MonsterAbility.FREEZING,
        },
        {
          name: MonsterAbility.CHAOS,
        },
      ],
    },
    resistance: {
      skills: [
        {
          name: MonsterAbility.FREEZING,
        },
        {
          name: MonsterAbility.CHAOS,
        },
        {
          name: MonsterAbility.SLEEP,
        },
        {
          name: MonsterAbility.IGNITE,
        },
        {
          name: MonsterAbility.BURN_INJURY,
        },
      ],
    },
    weakness: {
      skills: [
        {
          name: MonsterAbility.LIGHTNING_STRIKE,
        },
      ],
    },
    thumbnailFull:
      'https://patchwiki.biligame.com/images/resonance/0/07/dfxw6xl5bilos5f25ooii421ianqspn.png',
    camp: 'https://patchwiki.biligame.com/images/resonance/a/a3/8dqqd5k3eudc4iks8icdt7jksjfv61f.png',
  },
  '흑월 닌자': {
    drops: ['소음 호르몬', '소음 수액'],
    detail: 'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E9%BB%91%E6%9C%88%E5%BF%8D',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/2/28/30revwzkjf8pw34swqznb6ow5kcpghb.png',
    grade: MonsterGrade.ELITE,
    attack: MonsterStatGrade.A,
    defence: MonsterStatGrade.A,
    hp: MonsterStatGrade.B,
    type: MonsterType.HUMAN,
    traits: {
      skills: [
        {
          name: MonsterAbility.CHAOS,
        },
      ],
    },
    resistance: {
      skills: [
        {
          name: MonsterAbility.STUN,
        },
        {
          name: MonsterAbility.SLEEP,
        },
        {
          name: MonsterAbility.BURN,
        },
      ],
    },
    weakness: {
      skills: [
        {
          name: MonsterAbility.BURN_INJURY,
        },
      ],
    },
    thumbnailFull:
      'https://patchwiki.biligame.com/images/resonance/e/e6/qku3qlyf3ux86zko6wyimb66tfl507r.png',
    camp: 'https://patchwiki.biligame.com/images/resonance/f/f2/72fwsi6q426gygxui8q4u6n5e42jd60.png',
  },
  '흑월 검사': {
    drops: ['소음 호르몬', '소음 수액'],
    detail: 'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E9%BB%91%E6%9C%88%E5%89%91',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/a/a3/3xe1om90y9hq6adksjig5cv724y326w.png',
    grade: MonsterGrade.ELITE,
    attack: MonsterStatGrade.A,
    defence: MonsterStatGrade.A,
    hp: MonsterStatGrade.B,
    type: MonsterType.HUMAN,
    traits: {
      skills: [
        {
          name: MonsterAbility.SCORCHING_HEAT,
        },
      ],
    },
    resistance: {
      skills: [
        {
          name: MonsterAbility.STUN,
        },
        {
          name: MonsterAbility.SLEEP,
        },
        {
          name: MonsterAbility.BURN,
        },
      ],
    },
    weakness: {
      skills: [
        {
          name: MonsterAbility.BURN_INJURY,
        },
      ],
    },
    thumbnailFull:
      'https://patchwiki.biligame.com/images/resonance/2/27/2d4h5gi1xprj6gab3orez0d4q3m6fn0.png',
    camp: 'https://patchwiki.biligame.com/images/resonance/f/f2/72fwsi6q426gygxui8q4u6n5e42jd60.png',
  },
  '약탈자-해머': {
    drops: [],
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E5%8A%AB%E6%8E%A0%E8%80%85%C2%B7%E6%89%A7%E9%94%A4',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/a/a8/h6mw25t49hff00hk547j6r18msw143p.png',
    grade: MonsterGrade.ELITE,
    attack: MonsterStatGrade.A,
    defence: MonsterStatGrade.C,
    hp: MonsterStatGrade.B,
    type: MonsterType.HUMAN,
    traits: {
      skills: [
        {
          name: MonsterAbility.STUN,
        },
        {
          name: MonsterAbility.INTERRUPTION,
        },
      ],
    },
    resistance: {
      skills: [
        {
          name: MonsterAbility.BURN_INJURY,
        },
      ],
    },
    weakness: {
      skills: [
        {
          name: MonsterAbility.SCORCHING_HEAT,
        },
      ],
    },
    thumbnailFull:
      'https://patchwiki.biligame.com/images/resonance/a/a1/fx5nw2f79s468ktkv24vwgq8wno5qda.png',
    camp: 'https://patchwiki.biligame.com/images/resonance/9/90/jroz2h6d737fki59s4i558tr3ofiwau.png',
  },
  '약탈자-썬더': {
    drops: [],
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E5%8A%AB%E6%8E%A0%E8%80%85%C2%B7%E6%89%A7%E7%94%B5',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/1/14/dbsqnmdrklbmtxnwnpua6qyhaz8jb1w.png',
    grade: MonsterGrade.ELITE,
    attack: MonsterStatGrade.A,
    defence: MonsterStatGrade.C,
    hp: MonsterStatGrade.C,
    type: MonsterType.HUMAN,
    traits: {
      skills: [
        {
          name: MonsterAbility.LIGHTNING_STRIKE,
        },
      ],
    },
    resistance: {
      skills: [
        {
          name: MonsterAbility.BURN_INJURY,
        },
        {
          name: MonsterAbility.LIGHTNING_STRIKE,
        },
      ],
    },
    weakness: {
      skills: [
        {
          name: MonsterAbility.SCORCHING_HEAT,
        },
      ],
    },
    thumbnailFull:
      'https://patchwiki.biligame.com/images/resonance/3/35/4kaz0obq0rozlhjcy8xwm702qdo5nhz.png',
    camp: 'https://patchwiki.biligame.com/images/resonance/9/90/jroz2h6d737fki59s4i558tr3ofiwau.png',
  },
  '약탈자-파이어건': {
    drops: [],
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E5%8A%AB%E6%8E%A0%E8%80%85%C2%B7%E6%89%A7%E7%81%AB',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/b/b3/ayofesg5lgvkqqyjnreq2fljryjljho.png',
    grade: MonsterGrade.ELITE,
    attack: MonsterStatGrade.S,
    defence: MonsterStatGrade.C,
    hp: MonsterStatGrade.B,
    type: MonsterType.HUMAN,
    traits: {
      skills: [
        {
          name: MonsterAbility.IGNITE,
        },
      ],
    },
    resistance: {
      skills: [
        {
          name: MonsterAbility.IGNITE,
        },
        {
          name: MonsterAbility.BURN_INJURY,
        },
      ],
    },
    weakness: {
      skills: [
        {
          name: MonsterAbility.SCORCHING_HEAT,
        },
      ],
    },
    thumbnailFull:
      'https://patchwiki.biligame.com/images/resonance/6/6a/kzraamb6sw980kvbolxg5zdr13f7rus.png',
    camp: 'https://patchwiki.biligame.com/images/resonance/9/90/jroz2h6d737fki59s4i558tr3ofiwau.png',
  },
  '약탈자-소드': {
    drops: [],
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E5%8A%AB%E6%8E%A0%E8%80%85%C2%B7%E6%89%A7%E5%89%91',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/6/62/1n8w7sl101264crhzq6ccfdoixwj673.png',
    grade: MonsterGrade.ELITE,
    attack: MonsterStatGrade.A,
    defence: MonsterStatGrade.C,
    hp: MonsterStatGrade.B,
    type: MonsterType.HUMAN,
    traits: {
      skills: [
        {
          name: MonsterAbility.INTERRUPTION,
        },
      ],
    },
    resistance: {
      skills: [
        {
          name: MonsterAbility.BURN_INJURY,
        },
      ],
    },
    weakness: {
      skills: [
        {
          name: MonsterAbility.SCORCHING_HEAT,
        },
      ],
    },
    thumbnailFull:
      'https://patchwiki.biligame.com/images/resonance/9/91/6vq0gsys7zrdxd24s9gcjavvilce3d1.png',
    camp: 'https://patchwiki.biligame.com/images/resonance/9/90/jroz2h6d737fki59s4i558tr3ofiwau.png',
  },
  '골드 마이너 1호': {
    drops: ['낡은 부품', '정밀 부품', '도금 부품'],
    detail: 'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E6%8E%98%E9%87%911%E5%8F%B7',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/9/93/phezwfac0bev6u7vg16sh0qae07epdt.png',
    grade: MonsterGrade.ELITE,
    attack: MonsterStatGrade.B,
    defence: MonsterStatGrade.B,
    hp: MonsterStatGrade.B,
    type: MonsterType.MACHINE,
    traits: {
      skills: [
        {
          name: MonsterAbility.SUICIDE_ATTACK,
        },
        {
          name: MonsterAbility.AIRBORNE,
        },
        {
          name: MonsterAbility.LIGHTNING_STRIKE,
        },
      ],
    },
    resistance: {
      skills: [
        {
          name: MonsterAbility.LIGHTNING_STRIKE,
        },
        {
          name: MonsterAbility.SLEEP,
        },
      ],
    },
    weakness: {
      skills: [
        {
          name: MonsterAbility.FREEZING,
        },
        {
          name: MonsterAbility.SCORCHING_HEAT,
        },
      ],
    },
    thumbnailFull:
      'https://patchwiki.biligame.com/images/resonance/f/f4/6697haa7hxzwig5v0b0hfphvtbt1ico.png',
    camp: 'https://patchwiki.biligame.com/images/resonance/5/58/tp942kij34ugn8wz5k7sgv2ud2xc2js.png',
  },
  '골드 마이너 2호': {
    drops: ['낡은 부품', '정밀 부품'],
    detail: 'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E6%8E%98%E9%87%912%E5%8F%B7',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/5/55/k9murcatu370s51idq8qb8tiyrxnfi6.png',
    grade: MonsterGrade.ELITE,
    attack: MonsterStatGrade.B,
    defence: MonsterStatGrade.B,
    hp: MonsterStatGrade.B,
    type: MonsterType.MACHINE,
    traits: {
      skills: [
        {
          name: MonsterAbility.COST_ABSORPTION,
        },
        {
          name: MonsterAbility.LIGHTNING_STRIKE,
        },
      ],
    },
    resistance: {
      skills: [
        {
          name: MonsterAbility.LIGHTNING_STRIKE,
        },
        {
          name: MonsterAbility.SLEEP,
        },
      ],
    },
    weakness: {
      skills: [
        {
          name: MonsterAbility.FREEZING,
        },
        {
          name: MonsterAbility.SCORCHING_HEAT,
        },
      ],
    },
    thumbnailFull:
      'https://patchwiki.biligame.com/images/resonance/7/7c/akqc8bydtjwct7mv6p7c7ge43wfbc7b.png',
    camp: 'https://patchwiki.biligame.com/images/resonance/5/58/tp942kij34ugn8wz5k7sgv2ud2xc2js.png',
  },
  '미친 곰': {
    detail: 'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E7%96%AF%E7%86%8A',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/5/5b/r6g0q5q2j8jgrrnu66rghl2j1cvl2wd.png',
    grade: MonsterGrade.ELITE,
    attack: MonsterStatGrade.SS,
    defence: MonsterStatGrade.S,
    hp: MonsterStatGrade.SS,
    type: MonsterType.HUMAN,
    traits: {
      skills: [
        {
          name: MonsterAbility.BERSERK,
        },
        {
          name: MonsterAbility.SCORCH,
        },
      ],
    },
    resistance: {
      skills: [
        {
          name: MonsterAbility.CHAOS,
        },
        {
          name: MonsterAbility.SLEEP,
        },
      ],
    },
    weakness: {
      skills: [
        {
          name: MonsterAbility.BURN,
        },
      ],
    },
    thumbnailFull:
      'https://patchwiki.biligame.com/images/resonance/e/e6/b7ylf4z70koq28klxu8g7ww6jdm2hxq.png',
    camp: 'https://patchwiki.biligame.com/images/resonance/e/e1/elndxhhn7xswvjzsdmy4qf1uspkmv9w.png',
  },
  '팬텀 베어': {
    detail: 'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E5%B9%BB%E7%86%8A',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/a/a0/910qu40x7vsiv3j7qgim9ngtt7ia1w1.png',
    grade: MonsterGrade.ELITE,
    attack: MonsterStatGrade.SS,
    defence: MonsterStatGrade.S,
    hp: MonsterStatGrade.SS,
    type: MonsterType.HUMAN,
    traits: {
      skills: [
        {
          name: MonsterAbility.BERSERK,
        },
        {
          name: MonsterAbility.CURSE,
        },
        {
          name: MonsterAbility.RESTRAINT,
        },
      ],
    },
    resistance: {
      skills: [
        {
          name: MonsterAbility.CHAOS,
        },
        {
          name: MonsterAbility.SLEEP,
        },
      ],
    },
    weakness: {
      skills: [
        {
          name: MonsterAbility.BURN,
        },
      ],
    },
    thumbnailFull:
      'https://patchwiki.biligame.com/images/resonance/d/df/fzl6bpan9ecs8jfi54ndj08pf6ysh0i.png',
    camp: 'https://patchwiki.biligame.com/images/resonance/e/e1/elndxhhn7xswvjzsdmy4qf1uspkmv9w.png',
  },
  토끼: {
    detail: 'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E6%81%90%E5%85%94',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/3/31/ff5r1xjgjuzdge3qxmpumqvcckk7b7k.png',
    grade: MonsterGrade.ELITE,
    attack: MonsterStatGrade.SS,
    defence: MonsterStatGrade.S,
    hp: MonsterStatGrade.SS,
    type: MonsterType.HUMAN,
    traits: {
      skills: [
        {
          name: MonsterAbility.BERSERK,
        },
        {
          name: MonsterAbility.CRASH,
        },
        {
          name: MonsterAbility.CHAOS,
        },
        {
          name: MonsterAbility.SUPER_ARMOR,
        },
      ],
    },
    resistance: {
      skills: [
        {
          name: MonsterAbility.CHAOS,
        },
        {
          name: MonsterAbility.SLEEP,
        },
      ],
    },
    weakness: {
      skills: [
        {
          name: MonsterAbility.BURN,
        },
      ],
    },
    thumbnailFull:
      'https://patchwiki.biligame.com/images/resonance/9/91/2s8pljk62gxm6i27u5v3hwe9ctto0bg.png',
    camp: 'https://patchwiki.biligame.com/images/resonance/e/e1/elndxhhn7xswvjzsdmy4qf1uspkmv9w.png',
  },
  '미친 코끼리': {
    detail: 'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E7%8B%82%E8%B1%A1',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/6/6e/pdn2n8m1sh1edqlb3eoau1dhnftb37m.png',
    grade: MonsterGrade.ELITE,
    attack: MonsterStatGrade.SS,
    defence: MonsterStatGrade.S,
    hp: MonsterStatGrade.SS,
    type: MonsterType.HUMAN,
    traits: {
      skills: [
        {
          name: MonsterAbility.BERSERK,
        },
        {
          name: MonsterAbility.STUN,
        },
        {
          name: MonsterAbility.AIRBORNE,
        },
      ],
    },
    resistance: {
      skills: [
        {
          name: MonsterAbility.CHAOS,
        },
        {
          name: MonsterAbility.SLEEP,
        },
      ],
    },
    weakness: {
      skills: [
        {
          name: MonsterAbility.BURN,
        },
      ],
    },
    thumbnailFull:
      'https://patchwiki.biligame.com/images/resonance/3/36/197d7t6l2nfnphmngcqpnwi2tcr8279.png',
    camp: 'https://patchwiki.biligame.com/images/resonance/e/e1/elndxhhn7xswvjzsdmy4qf1uspkmv9w.png',
  },
  '혼란의 산호초': {
    drops: ['뇌안개 포자', '환각 산호초'],
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E6%B7%B7%E5%8E%84%E6%9C%A8%E7%A4%81',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/6/60/9edradqgdczuh2tvs675msd7k3tlm70.png',
    grade: MonsterGrade.ELITE,
    attack: MonsterStatGrade.B,
    defence: MonsterStatGrade.C,
    hp: MonsterStatGrade.C,
    type: MonsterType.BETULA,
    traits: {
      skills: [
        {
          name: MonsterAbility.SHACKLES,
        },
      ],
    },
    resistance: {
      skills: [
        {
          name: MonsterAbility.CURSE,
        },
        {
          name: MonsterAbility.SHACKLES,
        },
      ],
    },
    weakness: {
      skills: [
        {
          name: MonsterAbility.IGNITE,
        },
        {
          name: MonsterAbility.BURN_INJURY,
        },
      ],
    },
    thumbnailFull:
      'https://patchwiki.biligame.com/images/resonance/8/8a/c1xlx0m8pqsw6gapqfy33aev1ckc1nj.png',
    camp: 'https://patchwiki.biligame.com/images/resonance/8/8b/88cs95z6hi13s7cpzwshg2670jomxmq.png',
  },
  '혼돈의 시클펀': {
    drops: ['뇌안개 포자', '고통의 발톱'],
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E6%B5%91%E5%99%A9%E9%95%B0%E8%95%A8',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/f/f8/rgkv0m1qsj0yl9c8pe49xfu8sin8iqe.png',
    grade: MonsterGrade.ELITE,
    attack: MonsterStatGrade.B,
    defence: MonsterStatGrade.C,
    hp: MonsterStatGrade.C,
    type: MonsterType.BETULA,
    traits: {
      skills: [
        {
          name: MonsterAbility.SCORCHING_HEAT,
        },
        {
          name: MonsterAbility.BURN,
        },
        {
          name: MonsterAbility.CURSE,
        },
      ],
    },
    resistance: {
      skills: [
        {
          name: MonsterAbility.CURSE,
        },
        {
          name: MonsterAbility.SHACKLES,
        },
      ],
    },
    weakness: {
      skills: [
        {
          name: MonsterAbility.IGNITE,
        },
        {
          name: MonsterAbility.BURN_INJURY,
        },
      ],
    },
    thumbnailFull:
      'https://patchwiki.biligame.com/images/resonance/3/3e/kgnkf0bpi6zn623o3ijvsqv2jo7m9kb.png',
    camp: 'https://patchwiki.biligame.com/images/resonance/8/8b/88cs95z6hi13s7cpzwshg2670jomxmq.png',
  },
  '혼돈의 펑거스충': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E6%B5%91%E5%99%A9%E9%92%88%E8%95%88',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/0/07/o2akpijcw11duhd9d7nozvuch0kqjk4.png',
    grade: MonsterGrade.ELITE,
    attack: MonsterStatGrade.B,
    defence: MonsterStatGrade.C,
    hp: MonsterStatGrade.C,
    type: MonsterType.BETULA,
    traits: {
      skills: [
        {
          name: MonsterAbility.BERSERK,
        },
        {
          name: MonsterAbility.CHAOS,
        },
        {
          name: MonsterAbility.CURSE,
        },
        {
          name: MonsterAbility.BURN,
        },
      ],
    },
    resistance: {
      skills: [
        {
          name: MonsterAbility.CURSE,
        },
        {
          name: MonsterAbility.RESTRAINT,
        },
      ],
    },
    weakness: {
      skills: [
        {
          name: MonsterAbility.IGNITE,
        },
        {
          name: MonsterAbility.BURN_INJURY,
        },
      ],
    },
    thumbnailFull:
      'https://patchwiki.biligame.com/images/resonance/a/aa/8f5hzint9os2111j97pr9w58aixe9uu.png',
    camp: 'https://patchwiki.biligame.com/images/resonance/8/8b/88cs95z6hi13s7cpzwshg2670jomxmq.png',
  },
  '혼란의 구골': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E6%B7%B7%E5%8E%84%E6%9E%B8%E9%AA%A8',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/6/67/3h072qob923gxkx2kt2adj004axmnmp.png',
    grade: MonsterGrade.ELITE,
    attack: MonsterStatGrade.B,
    defence: MonsterStatGrade.C,
    hp: MonsterStatGrade.C,
    type: MonsterType.BETULA,
    traits: {
      skills: [
        {
          name: MonsterAbility.RESTRAINT,
        },
        {
          name: MonsterAbility.BURN,
        },
      ],
    },
    resistance: {
      skills: [
        {
          name: MonsterAbility.CURSE,
        },
        {
          name: MonsterAbility.RESTRAINT,
        },
      ],
    },
    weakness: {
      skills: [
        {
          name: MonsterAbility.IGNITE,
        },
        {
          name: MonsterAbility.BURN_INJURY,
        },
      ],
    },
    thumbnailFull:
      'https://patchwiki.biligame.com/images/resonance/8/88/m3ie4e95hnrv54swe2h6etmf169slca.png',
    camp: 'https://patchwiki.biligame.com/images/resonance/8/8b/88cs95z6hi13s7cpzwshg2670jomxmq.png',
  },
  '심면자-수호자': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E6%B7%B1%E7%9C%A0%E8%80%85%C2%B7%E8%BF%B7%E7%97%B4',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/6/67/svt61t8bs5wk64v9r630e9nx8gai4wm.png',
    grade: MonsterGrade.ELITE,
    attack: MonsterStatGrade.A,
    defence: MonsterStatGrade.SS,
    hp: MonsterStatGrade.S,
    type: MonsterType.DORMANT,
    traits: {
      skills: [
        {
          name: MonsterAbility.CHAOS,
        },
      ],
    },
    resistance: {
      skills: [
        {
          name: MonsterAbility.SLEEP,
        },
        {
          name: MonsterAbility.BURN_INJURY,
        },
      ],
    },
    weakness: {
      skills: [
        {
          name: MonsterAbility.IGNITE,
        },
      ],
    },
    thumbnailFull:
      'https://patchwiki.biligame.com/images/resonance/4/40/3lwqjdrxyu6rftn37u8cfu72083fdae.png',
    camp: 'https://patchwiki.biligame.com/images/resonance/e/ef/jx24anrrg2438ypj6wqb5wrbcrm8j2a.png',
  },
  '심면자-전사': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E6%B7%B1%E7%9C%A0%E8%80%85%C2%B7%E8%BF%B7%E6%84%9A',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/e/ed/lbewrvqi8f0noq1tbz9e06i41yquywu.png',
    grade: MonsterGrade.ELITE,
    attack: MonsterStatGrade.A,
    defence: MonsterStatGrade.SS,
    hp: MonsterStatGrade.S,
    type: MonsterType.DORMANT,
    traits: {
      skills: [
        {
          name: MonsterAbility.BURN_INJURY,
        },
        {
          name: MonsterAbility.CRASH,
        },
      ],
    },
    resistance: {
      skills: [
        {
          name: MonsterAbility.SLEEP,
        },
        {
          name: MonsterAbility.BURN_INJURY,
        },
      ],
    },
    weakness: {
      skills: [
        {
          name: MonsterAbility.IGNITE,
        },
      ],
    },
    thumbnailFull:
      'https://patchwiki.biligame.com/images/resonance/3/35/jo7nvro9occqc2osgu0zlku2opkomkn.png',
    camp: 'https://patchwiki.biligame.com/images/resonance/e/ef/jx24anrrg2438ypj6wqb5wrbcrm8j2a.png',
  },
  '심면자-암살자': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E6%B7%B1%E7%9C%A0%E8%80%85%C2%B7%E8%BF%B7%E9%80%94',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/f/fa/niorc84atubjvnqp6kbfq2az576c02z.png',
    grade: MonsterGrade.ELITE,
    attack: MonsterStatGrade.A,
    defence: MonsterStatGrade.SS,
    hp: MonsterStatGrade.S,
    type: MonsterType.DORMANT,
    traits: {
      skills: [
        {
          name: MonsterAbility.COST_ABSORPTION,
        },
        {
          name: MonsterAbility.IGNITE,
        },
        {
          name: MonsterAbility.RESTRAINT,
        },
      ],
    },
    resistance: {
      skills: [
        {
          name: MonsterAbility.SLEEP,
        },
      ],
    },
    weakness: {
      skills: [
        {
          name: MonsterAbility.IGNITE,
        },
      ],
    },
    thumbnailFull:
      'https://patchwiki.biligame.com/images/resonance/a/aa/fwe88ijviwpc4jipten8eae465qq15t.png',
    camp: 'https://patchwiki.biligame.com/images/resonance/e/ef/jx24anrrg2438ypj6wqb5wrbcrm8j2a.png',
  },
  '심면자-검사': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E6%B7%B1%E7%9C%A0%E8%80%85%C2%B7%E8%BF%B7%E8%B8%AA',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/c/c3/gsronn1pq255sr552djpt0qzwwbvvwr.png',
    grade: MonsterGrade.ELITE,
    attack: MonsterStatGrade.A,
    defence: MonsterStatGrade.SS,
    hp: MonsterStatGrade.S,
    type: MonsterType.DORMANT,
    traits: {
      skills: [
        {
          name: MonsterAbility.LIGHTNING_STRIKE,
        },
        {
          name: MonsterAbility.BLOCK,
        },
      ],
    },
    resistance: {
      skills: [
        {
          name: MonsterAbility.SLEEP,
        },
        {
          name: MonsterAbility.LIGHTNING_STRIKE,
        },
      ],
    },
    weakness: {
      skills: [
        {
          name: MonsterAbility.IGNITE,
        },
      ],
    },
    thumbnailFull:
      'https://patchwiki.biligame.com/images/resonance/8/8b/bjgezrbduwo4r8kktt8twoliwv000sf.png',
    camp: 'https://patchwiki.biligame.com/images/resonance/e/ef/jx24anrrg2438ypj6wqb5wrbcrm8j2a.png',
  },
  '심면자-마법사': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E6%B7%B1%E7%9C%A0%E8%80%85%C2%B7%E8%BF%B7%E6%83%98',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/a/a5/2pmbzobrsdbqb5xrr462q93xvqk8ksk.png',
    grade: MonsterGrade.ELITE,
    attack: MonsterStatGrade.A,
    defence: MonsterStatGrade.C,
    hp: MonsterStatGrade.B,
    type: MonsterType.DORMANT,
    traits: {
      skills: [
        {
          name: MonsterAbility.CURSE,
        },
        {
          name: MonsterAbility.SHACKLES,
        },
      ],
    },
    resistance: {
      skills: [
        {
          name: MonsterAbility.SLEEP,
        },
        {
          name: MonsterAbility.CURSE,
        },
      ],
    },
    weakness: {
      skills: [
        {
          name: MonsterAbility.IGNITE,
        },
      ],
    },
    thumbnailFull:
      'https://patchwiki.biligame.com/images/resonance/a/ac/h43yp4hfzlhas4glptyx1sc9aj6l7bg.png',
    camp: 'https://patchwiki.biligame.com/images/resonance/e/ef/jx24anrrg2438ypj6wqb5wrbcrm8j2a.png',
  },
  '심면자-냉기술사': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E6%B7%B1%E7%9C%A0%E8%80%85%C2%B7%E8%BF%B7%E7%A6%BB',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/3/3d/fy0jw7ovmaxfjbup7yi47ls9dlj6tbc.png',
    grade: MonsterGrade.ELITE,
    attack: MonsterStatGrade.A,
    defence: MonsterStatGrade.C,
    hp: MonsterStatGrade.C,
    type: MonsterType.DORMANT,
    traits: {
      skills: [
        {
          name: MonsterAbility.BARRIER,
        },
      ],
    },
    resistance: {
      skills: [
        {
          name: MonsterAbility.SLEEP,
        },
        {
          name: MonsterAbility.FREEZING,
        },
      ],
    },
    weakness: {
      skills: [
        {
          name: MonsterAbility.IGNITE,
        },
      ],
    },
    thumbnailFull:
      'https://patchwiki.biligame.com/images/resonance/4/4b/t8lnjfqolopfrpt9dzenpvovwnhcs27.png',
    camp: 'https://patchwiki.biligame.com/images/resonance/e/ef/jx24anrrg2438ypj6wqb5wrbcrm8j2a.png',
  },
  '방랑자-유탄발사병': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E6%8B%BE%E8%8D%92%E8%80%85%C2%B7%E6%A6%B4%E5%BC%B9%E7%BB%84',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/9/97/65c4dic30umviugezzhssrpaoumi4yg.png',
    grade: MonsterGrade.ELITE,
    attack: MonsterStatGrade.A,
    defence: MonsterStatGrade.D,
    hp: MonsterStatGrade.D,
    type: MonsterType.HUMAN,
    traits: {
      skills: [
        {
          name: MonsterAbility.IGNITE,
        },
      ],
    },
    resistance: { skills: [] },
    weakness: {
      skills: [
        {
          name: MonsterAbility.SCORCHING_HEAT,
        },
      ],
    },
    thumbnailFull:
      'https://patchwiki.biligame.com/images/resonance/c/c7/30ti7riwjtffgg8eedrnhn3qajxfnyn.png',
    camp: 'https://patchwiki.biligame.com/images/resonance/0/00/qdastc7p24sf8r44ketmdkl4b1370j0.png',
  },
  '방랑자-철관강습병': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E6%8B%BE%E8%8D%92%E8%80%85%C2%B7%E9%93%81%E7%AE%A1%E5%8A%9B%E5%A3%AB',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/5/5d/kis8fk99mkvl5zlgo0j4yfetw4nyxrb.png',
    grade: MonsterGrade.ELITE,
    attack: MonsterStatGrade.A,
    defence: MonsterStatGrade.C,
    hp: MonsterStatGrade.C,
    type: MonsterType.HUMAN,
    traits: {
      skills: [
        {
          name: MonsterAbility.INTERRUPTION,
        },
        {
          name: MonsterAbility.STUN,
        },
      ],
    },
    resistance: {
      skills: [
        {
          name: MonsterAbility.BURN_INJURY,
        },
      ],
    },
    weakness: {
      skills: [
        {
          name: MonsterAbility.SCORCHING_HEAT,
        },
      ],
    },
    thumbnailFull:
      'https://patchwiki.biligame.com/images/resonance/2/21/am9hhqmius86bvf436lkfjpbrtkk1jc.png',
    camp: 'https://patchwiki.biligame.com/images/resonance/0/00/qdastc7p24sf8r44ketmdkl4b1370j0.png',
  },
  '방랑자-화염방사병': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E6%8B%BE%E8%8D%92%E8%80%85%C2%B7%E5%96%B7%E7%81%AB%E5%8A%9B%E5%A3%AB',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/8/88/amzfwoguduq37j3wzt609hc3fso60dq.png',
    grade: MonsterGrade.ELITE,
    attack: MonsterStatGrade.A,
    defence: MonsterStatGrade.C,
    hp: MonsterStatGrade.C,
    type: MonsterType.HUMAN,
    traits: {
      skills: [
        {
          name: MonsterAbility.STUN,
        },
        {
          name: MonsterAbility.IGNITE,
        },
      ],
    },
    resistance: {
      skills: [
        {
          name: MonsterAbility.BURN_INJURY,
        },
      ],
    },
    weakness: {
      skills: [
        {
          name: MonsterAbility.SCORCHING_HEAT,
        },
      ],
    },
    thumbnailFull:
      'https://patchwiki.biligame.com/images/resonance/3/31/0za4eafke49fihgmjx1wcmtrob0939u.png',
    camp: 'https://patchwiki.biligame.com/images/resonance/0/00/qdastc7p24sf8r44ketmdkl4b1370j0.png',
  },
  플레이아데스: {
    detail: 'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E6%98%B4%E5%AE%BF%E4%B8%80',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/4/47/tnoxe4re7l8j7o7wd76naaciagvpfrq.png',
    grade: MonsterGrade.ELITE,
    attack: MonsterStatGrade.SS,
    defence: MonsterStatGrade.S,
    hp: MonsterStatGrade.SS,
    type: MonsterType.MACHINE,
    traits: { skills: [] },
    resistance: {
      skills: [
        {
          name: MonsterAbility.FREEZING,
        },
        {
          name: MonsterAbility.LIGHTNING_STRIKE,
        },
        {
          name: MonsterAbility.IGNITE,
        },
        {
          name: MonsterAbility.SLEEP,
        },
      ],
    },
    weakness: {
      skills: [
        {
          name: MonsterAbility.SCORCHING_HEAT,
        },
      ],
    },
    thumbnailFull:
      'https://patchwiki.biligame.com/images/resonance/6/6a/5o94m206o8dw3syloor3hkxw51h73ar.png',
    camp: 'https://patchwiki.biligame.com/images/resonance/6/63/dc60cj3zxglq3um638rpqk1hkxtptjz.png',
  },

  '두더지파-파워아머 철권': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E9%BC%B9%E9%BC%A0%E5%B8%AE%C2%B7%E5%8A%A8%E5%8A%9B%E7%94%B2%E9%92%A2%E6%8B%B3',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/d/d8/f9pf4gtawulo341j4dxo2ezt7rsiqbg.png',
    grade: MonsterGrade.ELITE,
    attack: MonsterStatGrade.B,
    defence: MonsterStatGrade.B,
    hp: MonsterStatGrade.S,
    type: MonsterType.HUMAN,
    traits: {
      skills: [
        {
          name: MonsterAbility.INTERRUPTION,
        },
      ],
    },
    resistance: {
      skills: [
        {
          name: MonsterAbility.BURN_INJURY,
        },
      ],
    },
    weakness: {
      skills: [
        {
          name: MonsterAbility.FREEZING,
        },
        {
          name: MonsterAbility.SCORCHING_HEAT,
        },
      ],
    },
    thumbnailFull:
      'https://patchwiki.biligame.com/images/resonance/2/2e/7v22qj7di8e0c2amcyeeku67woit2mi.png',
    camp: 'https://patchwiki.biligame.com/images/resonance/c/c5/h0od7spwstsarfp47okis1jl3h4m4n6.png',
  },
  '두더지파-파워아머 화포': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E9%BC%B9%E9%BC%A0%E5%B8%AE%C2%B7%E5%8A%A8%E5%8A%9B%E7%94%B2%E8%BD%B0%E7%81%AB',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/2/21/0a5gjwilf1uakxpzxdvj60ekhv8seeb.png',
    grade: MonsterGrade.ELITE,
    attack: MonsterStatGrade.B,
    defence: MonsterStatGrade.C,
    hp: MonsterStatGrade.B,
    type: MonsterType.HUMAN,
    traits: {
      skills: [
        {
          name: MonsterAbility.IGNITE,
        },
      ],
    },
    resistance: {
      skills: [
        {
          name: MonsterAbility.BURN_INJURY,
        },
        {
          name: MonsterAbility.IGNITE,
        },
      ],
    },
    weakness: {
      skills: [
        {
          name: MonsterAbility.FREEZING,
        },
        {
          name: MonsterAbility.SCORCHING_HEAT,
        },
      ],
    },
    thumbnailFull:
      'https://patchwiki.biligame.com/images/resonance/8/83/51c3cnzp42vyrxc5thon9o87aokj6fh.png',
    camp: 'https://patchwiki.biligame.com/images/resonance/c/c5/h0od7spwstsarfp47okis1jl3h4m4n6.png',
  },
  '두더지파-파워아머 전자포': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E9%BC%B9%E9%BC%A0%E5%B8%AE%C2%B7%E5%8A%A8%E5%8A%9B%E7%94%B2%E6%BF%80%E7%94%B5',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/9/9b/jmoh0vdh4ewadyuo99xnt917ss4mcfw.png',
    grade: MonsterGrade.ELITE,
    attack: MonsterStatGrade.B,
    defence: MonsterStatGrade.C,
    hp: MonsterStatGrade.B,
    type: MonsterType.HUMAN,
    traits: {
      skills: [
        {
          name: MonsterAbility.LIGHTNING_STRIKE,
        },
      ],
    },
    resistance: {
      skills: [
        {
          name: MonsterAbility.BURN_INJURY,
        },
        {
          name: MonsterAbility.LIGHTNING_STRIKE,
        },
      ],
    },
    weakness: {
      skills: [
        {
          name: MonsterAbility.FREEZING,
        },
        {
          name: MonsterAbility.SCORCHING_HEAT,
        },
      ],
    },
    thumbnailFull:
      'https://patchwiki.biligame.com/images/resonance/b/b5/gxgpemb1o0g159cqt9ld85cb26sfn8p.png',
    camp: 'https://patchwiki.biligame.com/images/resonance/c/c5/h0od7spwstsarfp47okis1jl3h4m4n6.png',
  },
  '두더지파-파워아머 전기톱': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E9%BC%B9%E9%BC%A0%E5%B8%AE%C2%B7%E5%8A%A8%E5%8A%9B%E7%94%B2%E9%93%BE%E9%94%AF',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/4/42/8qxc825bjlm1kf6oij7korfj48al8df.png',
    grade: MonsterGrade.ELITE,
    attack: MonsterStatGrade.B,
    defence: MonsterStatGrade.C,
    hp: MonsterStatGrade.B,
    type: MonsterType.HUMAN,
    traits: {
      skills: [
        {
          name: MonsterAbility.IGNITE,
        },
      ],
    },
    resistance: {
      skills: [
        {
          name: MonsterAbility.BURN_INJURY,
        },
      ],
    },
    weakness: {
      skills: [
        {
          name: MonsterAbility.FREEZING,
        },
        {
          name: MonsterAbility.SCORCHING_HEAT,
        },
      ],
    },
    thumbnailFull:
      'https://patchwiki.biligame.com/images/resonance/b/b0/tmpu26w23nzbgbzy26vsyt3zle04wfs.png',
    camp: 'https://patchwiki.biligame.com/images/resonance/c/c5/h0od7spwstsarfp47okis1jl3h4m4n6.png',
  },
  '두더지파-돌격차': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E9%BC%B9%E9%BC%A0%E5%B8%AE%C2%B7%E7%AA%81%E5%87%BB%E8%BD%A6%E6%9A%B4%E5%BE%92',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/d/d6/q0a8rc8v9wzq3zosst9o95q9z6aa9ip.png',
    grade: MonsterGrade.ELITE,
    attack: MonsterStatGrade.B,
    defence: MonsterStatGrade.C,
    hp: MonsterStatGrade.B,
    type: MonsterType.HUMAN,
    traits: {
      skills: [
        {
          name: MonsterAbility.IGNITE,
        },
      ],
    },
    resistance: {
      skills: [
        {
          name: MonsterAbility.BURN_INJURY,
        },
      ],
    },
    weakness: {
      skills: [
        {
          name: MonsterAbility.FREEZING,
        },
        {
          name: MonsterAbility.LIGHTNING_STRIKE,
        },
        {
          name: MonsterAbility.SCORCHING_HEAT,
        },
      ],
    },
    thumbnailFull:
      'https://patchwiki.biligame.com/images/resonance/5/5c/ehz0bvg31ifopq06olcwlini8c9fcm9.png',
    camp: 'https://patchwiki.biligame.com/images/resonance/c/c5/h0od7spwstsarfp47okis1jl3h4m4n6.png',
  },
  장애물: {
    detail: 'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E8%B7%AF%E9%9A%9C',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/6/60/45vcipiggcmv85dmj1wzqmri7o0ekrt.png',
    grade: MonsterGrade.NORMAL,
    attack: MonsterStatGrade.D,
    defence: MonsterStatGrade.D,
    hp: MonsterStatGrade.D,
    type: MonsterType.MACHINE,
    traits: { skills: [] },
    resistance: { skills: [] },
    weakness: { skills: [] },
    thumbnailFull:
      'https://patchwiki.biligame.com/images/resonance/1/19/1j5yp5fpcix9frzsrpezvdokqrwyy8v.png',
    camp: 'https://patchwiki.biligame.com/images/resonance/3/37/rksexwx0jz8jregf65ewxei7bouempn.png',
  },
  '방폭방패 폭력배': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E9%98%B2%E7%88%86%E7%9B%BE%E6%9A%B4%E5%BE%92',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/8/8f/a38b4im0pjh4plw9ruo13uzn652w00l.png',
    grade: MonsterGrade.NORMAL,
    attack: MonsterStatGrade.D,
    defence: MonsterStatGrade.C,
    hp: MonsterStatGrade.D,
    type: MonsterType.HUMAN,
    traits: { skills: [] },
    resistance: { skills: [] },
    weakness: {
      skills: [
        {
          name: MonsterAbility.BURN_INJURY,
        },
      ],
    },
    thumbnailFull:
      'https://patchwiki.biligame.com/images/resonance/d/d5/qo1zx13axikryzxxevnwps33ot1gghi.png',
    camp: 'https://patchwiki.biligame.com/images/resonance/3/37/rksexwx0jz8jregf65ewxei7bouempn.png',
  },
  '야구배트 폭력배': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E6%A3%92%E7%90%83%E6%9A%B4%E5%BE%92',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/5/58/s34e2d5f0x9j0069hi6ji056l8g60yr.png',
    grade: MonsterGrade.NORMAL,
    attack: MonsterStatGrade.D,
    defence: MonsterStatGrade.D,
    hp: MonsterStatGrade.D,
    type: MonsterType.HUMAN,
    traits: {
      skills: [
        {
          name: MonsterAbility.INTERRUPTION,
        },
      ],
    },
    resistance: { skills: [] },
    weakness: {
      skills: [
        {
          name: MonsterAbility.BURN_INJURY,
        },
      ],
    },
    thumbnailFull:
      'https://patchwiki.biligame.com/images/resonance/8/81/ozw5kgv930zp0u4tj3awrcbaqspsfpc.png',
    camp: 'https://patchwiki.biligame.com/images/resonance/3/37/rksexwx0jz8jregf65ewxei7bouempn.png',
  },
  '소방도끼 폭력배': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E6%B6%88%E9%98%B2%E6%96%A7%E6%9A%B4%E5%BE%92',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/2/29/b251tjm5p84p8n9nm6tsit4uyn3zubz.png',
    grade: MonsterGrade.NORMAL,
    attack: MonsterStatGrade.D,
    defence: MonsterStatGrade.D,
    hp: MonsterStatGrade.D,
    type: MonsterType.HUMAN,
    traits: {
      skills: [
        {
          name: MonsterAbility.BURN_INJURY,
        },
      ],
    },
    resistance: { skills: [] },
    weakness: {
      skills: [
        {
          name: MonsterAbility.BURN_INJURY,
        },
      ],
    },
    thumbnailFull:
      'https://patchwiki.biligame.com/images/resonance/7/77/7xxjvn5tsk03oc2u0jvlflax88kjuzh.png',
    camp: 'https://patchwiki.biligame.com/images/resonance/3/37/rksexwx0jz8jregf65ewxei7bouempn.png',
  },
  '산탄총 폭력배': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E9%9C%B0%E5%BC%B9%E6%9E%AA%E6%9A%B4%E5%BE%92',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/e/e1/r9po5n739b9eznqqwmeh5rpzkrgm8rz.png',
    grade: MonsterGrade.NORMAL,
    attack: MonsterStatGrade.D,
    defence: MonsterStatGrade.D,
    hp: MonsterStatGrade.D,
    type: MonsterType.HUMAN,
    traits: { skills: [] },
    resistance: { skills: [] },
    weakness: {
      skills: [
        {
          name: MonsterAbility.BURN_INJURY,
        },
      ],
    },
    thumbnailFull:
      'https://patchwiki.biligame.com/images/resonance/e/e3/rdomgl25c1wzpejs51pjjpo0zvaddal.png',
    camp: 'https://patchwiki.biligame.com/images/resonance/3/37/rksexwx0jz8jregf65ewxei7bouempn.png',
  },
  '소총 폭력배': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E6%AD%A5%E6%9E%AA%E6%9A%B4%E5%BE%92',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/4/4e/ql7es2asim0np2ciy4b6vx64rojg6q7.png',
    grade: MonsterGrade.NORMAL,
    attack: MonsterStatGrade.C,
    defence: MonsterStatGrade.D,
    hp: MonsterStatGrade.D,
    type: MonsterType.HUMAN,
    traits: { skills: [] },
    resistance: { skills: [] },
    weakness: {
      skills: [
        {
          name: MonsterAbility.BURN_INJURY,
        },
      ],
    },
    thumbnailFull:
      'https://patchwiki.biligame.com/images/resonance/8/8f/j7x0xjv5x32bsukx59ihetexnrlofe1.png',
    camp: 'https://patchwiki.biligame.com/images/resonance/3/37/rksexwx0jz8jregf65ewxei7bouempn.png',
  },
  '전자총 폭력배': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E7%94%B5%E6%9E%AA%E6%9A%B4%E5%BE%92',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/c/cd/5bu6e0fv357coeot9lyy8mqylnwczlc.png',
    grade: MonsterGrade.NORMAL,
    attack: MonsterStatGrade.D,
    defence: MonsterStatGrade.D,
    hp: MonsterStatGrade.D,
    type: MonsterType.HUMAN,
    traits: {
      skills: [
        {
          name: MonsterAbility.LIGHTNING_STRIKE,
        },
      ],
    },
    resistance: { skills: [] },
    weakness: {
      skills: [
        {
          name: MonsterAbility.BURN_INJURY,
        },
      ],
    },
    thumbnailFull:
      'https://patchwiki.biligame.com/images/resonance/6/64/9rcj2k688ogdee7ysnqyd58oibt6mt2.png',
    camp: 'https://patchwiki.biligame.com/images/resonance/3/37/rksexwx0jz8jregf65ewxei7bouempn.png',
  },
  베인링: {
    detail: 'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E7%88%86%E8%99%AB',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/7/78/isol06udy5255czxjrcg661bzc5uzd9.png',
    grade: MonsterGrade.NORMAL,
    attack: MonsterStatGrade.D,
    defence: MonsterStatGrade.D,
    hp: MonsterStatGrade.D,
    type: MonsterType.BETULA,
    traits: {
      skills: [
        {
          name: MonsterAbility.SUICIDE_ATTACK,
        },
        {
          name: MonsterAbility.BURN,
        },
      ],
    },
    resistance: { skills: [] },
    weakness: {
      skills: [
        {
          name: MonsterAbility.FREEZING,
        },
        {
          name: MonsterAbility.IGNITE,
        },
        {
          name: MonsterAbility.LIGHTNING_STRIKE,
        },
        {
          name: MonsterAbility.SCORCHING_HEAT,
        },
        {
          name: MonsterAbility.BURN_INJURY,
        },
      ],
    },
    thumbnailFull:
      'https://patchwiki.biligame.com/images/resonance/e/ea/qwi85s045xft3fkoo9nncayte8sjakf.png',
    camp: 'https://patchwiki.biligame.com/images/resonance/2/2f/no501iad0px5870m35pi7gir9dkar5o.png',
  },
  '북부동맹 잔당-첨병': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E5%8C%97%E9%98%B5%E6%AE%8B%E9%83%A8%C2%B7%E5%B0%96%E5%85%B5',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/e/e3/r3c2ofe67cmtwbd7ia1y32qwstig7fe.png',
    grade: MonsterGrade.NORMAL,
    attack: MonsterStatGrade.B,
    defence: MonsterStatGrade.B,
    hp: MonsterStatGrade.C,
    type: MonsterType.HUMAN,
    traits: {
      skills: [
        {
          name: MonsterAbility.SCORCHING_HEAT,
        },
      ],
    },
    resistance: { skills: [] },
    weakness: {
      skills: [
        {
          name: MonsterAbility.SCORCHING_HEAT,
        },
      ],
    },
    thumbnailFull:
      'https://patchwiki.biligame.com/images/resonance/1/14/lf00iaieh8zs4m47nnhghz8ghnv3zvb.png',
    camp: 'https://patchwiki.biligame.com/images/resonance/d/da/jief5dxw2exbksqhozaqb0srxud6cr1.png',
  },
  '북부동맹 잔당-중기관총병': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E5%8C%97%E9%98%B5%E6%AE%8B%E9%83%A8%C2%B7%E9%87%8D%E6%9C%BA%E6%9E%AA%E5%85%B5',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/a/a2/j96pkxodqjcttbuyzoylw2rwjb4vtcp.png',
    grade: MonsterGrade.NORMAL,
    attack: MonsterStatGrade.A,
    defence: MonsterStatGrade.B,
    hp: MonsterStatGrade.C,
    type: MonsterType.HUMAN,
    traits: { skills: [] },
    resistance: { skills: [] },
    weakness: {
      skills: [
        {
          name: MonsterAbility.SCORCHING_HEAT,
        },
      ],
    },
    thumbnailFull:
      'https://patchwiki.biligame.com/images/resonance/9/94/c58svcfnhcq4kn46nduq9dossn7ylfx.png',
    camp: 'https://patchwiki.biligame.com/images/resonance/d/da/jief5dxw2exbksqhozaqb0srxud6cr1.png',
  },
  '북부동맹 잔당-유탄소총병': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E5%8C%97%E9%98%B5%E6%AE%8B%E9%83%A8%C2%B7%E6%A6%B4%E5%BC%B9%E6%9E%AA%E5%85%B5',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/7/7d/k5sdzvk0zk840sgqkr3ghwcvffngpb0.png',
    grade: MonsterGrade.NORMAL,
    attack: MonsterStatGrade.A,
    defence: MonsterStatGrade.B,
    hp: MonsterStatGrade.C,
    type: MonsterType.HUMAN,
    traits: {
      skills: [
        {
          name: MonsterAbility.IGNITE,
        },
      ],
    },
    resistance: { skills: [] },
    weakness: {
      skills: [
        {
          name: MonsterAbility.SCORCHING_HEAT,
        },
      ],
    },
    thumbnailFull:
      'https://patchwiki.biligame.com/images/resonance/8/82/h59jm4aa768zhzm7s6mioddk0s1mamd.png',
    camp: 'https://patchwiki.biligame.com/images/resonance/d/da/jief5dxw2exbksqhozaqb0srxud6cr1.png',
  },
  '봉오리 베툴라 생명체': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E9%AA%A8%E6%9C%B5%E6%A1%A6%E6%A0%91%E7%94%9F%E7%89%A9',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/e/e4/axjn9v7jvvu9utmwq43u55uk6k7h1l4.png',
    grade: MonsterGrade.NORMAL,
    attack: MonsterStatGrade.D,
    defence: MonsterStatGrade.D,
    hp: MonsterStatGrade.D,
    type: MonsterType.BETULA,
    traits: { skills: [] },
    resistance: { skills: [] },
    weakness: {
      skills: [
        {
          name: MonsterAbility.LIGHTNING_STRIKE,
        },
      ],
    },
    thumbnailFull:
      'https://patchwiki.biligame.com/images/resonance/2/27/1lo3hziyxu54dmvedxycv5th4zsjqkm.png',
    camp: 'https://patchwiki.biligame.com/images/resonance/8/85/n7q2fcxrzbm137o0fkg06winmnve2iy.png',
  },
  '자성 베툴라 생명체': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E9%9B%8C%E8%95%8A%E6%A1%A6%E6%A0%91%E7%94%9F%E7%89%A9',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/7/79/k95uci3ndt9wz9bxwo6xj4bfwzflap6.png',
    grade: MonsterGrade.NORMAL,
    attack: MonsterStatGrade.C,
    defence: MonsterStatGrade.C,
    hp: MonsterStatGrade.D,
    type: MonsterType.BETULA,
    traits: { skills: [] },
    resistance: { skills: [] },
    weakness: {
      skills: [
        {
          name: MonsterAbility.LIGHTNING_STRIKE,
        },
      ],
    },
    thumbnailFull:
      'https://patchwiki.biligame.com/images/resonance/5/57/q80l2djb02r87oy8cd75cd54xwpm4dg.png',
    camp: 'https://patchwiki.biligame.com/images/resonance/8/85/n7q2fcxrzbm137o0fkg06winmnve2iy.png',
  },
  '웅성 베툴라 생명체': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E9%9B%84%E8%95%8A%E6%A1%A6%E6%A0%91%E7%94%9F%E7%89%A9',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/d/db/4xgs2hps27ng476344tv2oxtk9kl3sl.png',
    grade: MonsterGrade.NORMAL,
    attack: MonsterStatGrade.D,
    defence: MonsterStatGrade.D,
    hp: MonsterStatGrade.D,
    type: MonsterType.BETULA,
    traits: { skills: [] },
    resistance: { skills: [] },
    weakness: {
      skills: [
        {
          name: MonsterAbility.LIGHTNING_STRIKE,
        },
      ],
    },
    thumbnailFull:
      'https://patchwiki.biligame.com/images/resonance/4/40/0tcmhmjxdrm7j16qp216q70ldk9v1cn.png',
    camp: 'https://patchwiki.biligame.com/images/resonance/8/85/n7q2fcxrzbm137o0fkg06winmnve2iy.png',
  },
  샌드비틀: {
    detail: 'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E6%BD%9C%E6%B2%99%E7%94%B2',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/f/f9/j87bgnwpoybfkywv1mqle6as88ym6lh.png',
    grade: MonsterGrade.NORMAL,
    attack: MonsterStatGrade.A,
    defence: MonsterStatGrade.A,
    hp: MonsterStatGrade.C,
    type: MonsterType.BETULA,
    traits: {
      skills: [
        {
          name: MonsterAbility.SUPER_ARMOR,
        },
        {
          name: MonsterAbility.IGNITE,
        },
      ],
    },
    resistance: {
      skills: [
        {
          name: MonsterAbility.IGNITE,
        },
        {
          name: MonsterAbility.LIGHTNING_STRIKE,
        },
      ],
    },
    weakness: {
      skills: [
        {
          name: MonsterAbility.SCORCHING_HEAT,
        },
      ],
    },
    thumbnailFull:
      'https://patchwiki.biligame.com/images/resonance/2/21/36jfabvyn5aj3cxxivr0uzani0ycct1.png',
    camp: 'https://patchwiki.biligame.com/images/resonance/4/46/kxsvnvj2bq6cx1iotkuymskxllvj954.png',
  },
  샌드웜: {
    detail: 'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E9%92%BB%E6%B2%99%E8%99%AB',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/b/bd/7qqguwvyosoondjckz06ytscqxl260j.png',
    grade: MonsterGrade.NORMAL,
    attack: MonsterStatGrade.B,
    defence: MonsterStatGrade.A,
    hp: MonsterStatGrade.D,
    type: MonsterType.BETULA,
    traits: {
      skills: [
        {
          name: MonsterAbility.IGNITE,
        },
      ],
    },
    resistance: {
      skills: [
        {
          name: MonsterAbility.IGNITE,
        },
        {
          name: MonsterAbility.LIGHTNING_STRIKE,
        },
      ],
    },
    weakness: {
      skills: [
        {
          name: MonsterAbility.SCORCHING_HEAT,
        },
      ],
    },
    thumbnailFull:
      'https://patchwiki.biligame.com/images/resonance/9/9f/1flth8oh8wvombqp43vldqarsk6vxk5.png',
    camp: 'https://patchwiki.biligame.com/images/resonance/4/46/kxsvnvj2bq6cx1iotkuymskxllvj954.png',
  },
  '악룡어 베툴라 생명체': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E9%A2%8C%E9%BE%99%E9%B1%BC%E6%A1%A6%E6%A0%91%E7%94%9F%E7%89%A9',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/e/e7/0ipxoiaz523bs80kyci7vrtxcd26gqe.png',
    grade: MonsterGrade.NORMAL,
    attack: MonsterStatGrade.A,
    defence: MonsterStatGrade.B,
    hp: MonsterStatGrade.B,
    type: MonsterType.BETULA,
    traits: {
      skills: [
        {
          name: MonsterAbility.FREEZING,
        },
      ],
    },
    resistance: {
      skills: [
        {
          name: MonsterAbility.FREEZING,
        },
        {
          name: MonsterAbility.CHAOS,
        },
        {
          name: MonsterAbility.IGNITE,
        },
        {
          name: MonsterAbility.BURN_INJURY,
        },
      ],
    },
    weakness: {
      skills: [
        {
          name: MonsterAbility.LIGHTNING_STRIKE,
        },
      ],
    },
    thumbnailFull:
      'https://patchwiki.biligame.com/images/resonance/3/36/mt95d32ykjqlfg0f6728bxd2p4sytgq.png',
    camp: 'https://patchwiki.biligame.com/images/resonance/a/a3/8dqqd5k3eudc4iks8icdt7jksjfv61f.png',
  },
  '해마 베툴라 생명체': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E6%B5%B7%E9%A9%AC%E6%A1%A6%E6%A0%91%E7%94%9F%E7%89%A9',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/5/51/8uk8eyaji222n4tlpavwdmivd4sun2w.png',
    grade: MonsterGrade.NORMAL,
    attack: MonsterStatGrade.A,
    defence: MonsterStatGrade.B,
    hp: MonsterStatGrade.B,
    type: MonsterType.BETULA,
    traits: {
      skills: [
        {
          name: MonsterAbility.STEALTH,
        },
        {
          name: MonsterAbility.FREEZING,
        },
      ],
    },
    resistance: {
      skills: [
        {
          name: MonsterAbility.FREEZING,
        },
        {
          name: MonsterAbility.CHAOS,
        },
        {
          name: MonsterAbility.SLEEP,
        },
        {
          name: MonsterAbility.BURN_INJURY,
        },
        {
          name: MonsterAbility.IGNITE,
        },
      ],
    },
    weakness: {
      skills: [
        {
          name: MonsterAbility.LIGHTNING_STRIKE,
        },
      ],
    },
    thumbnailFull:
      'https://patchwiki.biligame.com/images/resonance/2/2c/e0vtj77ue82m1ti2rxq3vkgr0yrqelh.png',
    camp: 'https://patchwiki.biligame.com/images/resonance/a/a3/8dqqd5k3eudc4iks8icdt7jksjfv61f.png',
  },
  '흑월 사수': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E9%BB%91%E6%9C%88%E7%94%B5%E6%9E%AA',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/6/63/4xg13ei2qm3x6nufq78e7jd5yepjo8s.png',
    grade: MonsterGrade.NORMAL,
    attack: MonsterStatGrade.A,
    defence: MonsterStatGrade.B,
    hp: MonsterStatGrade.C,
    type: MonsterType.HUMAN,
    traits: {
      skills: [
        {
          name: MonsterAbility.LIGHTNING_STRIKE,
        },
      ],
    },
    resistance: {
      skills: [
        {
          name: MonsterAbility.STUN,
        },
        {
          name: MonsterAbility.SLEEP,
        },
        {
          name: MonsterAbility.BURN,
        },
      ],
    },
    weakness: {
      skills: [
        {
          name: MonsterAbility.BURN_INJURY,
        },
      ],
    },
    thumbnailFull:
      'https://patchwiki.biligame.com/images/resonance/6/66/aahkou1zpqamicpvi7xtaz1gsdqlygj.png',
    camp: 'https://patchwiki.biligame.com/images/resonance/f/f2/72fwsi6q426gygxui8q4u6n5e42jd60.png',
  },
  '뇌우 버그': {
    detail: 'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E9%9B%B7%E6%9A%B4%E8%99%AB',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/d/d3/0rfc35fqselbb0dj7vcea81o0w5esjy.png',
    grade: MonsterGrade.NORMAL,
    attack: MonsterStatGrade.S,
    defence: MonsterStatGrade.A,
    hp: MonsterStatGrade.B,
    type: MonsterType.BETULA,
    traits: {
      skills: [
        {
          name: MonsterAbility.LIGHTNING_STRIKE,
        },
      ],
    },
    resistance: {
      skills: [
        {
          name: MonsterAbility.LIGHTNING_STRIKE,
        },
        {
          name: MonsterAbility.BURN,
        },
        {
          name: MonsterAbility.RESTRAINT,
        },
      ],
    },
    weakness: {
      skills: [
        {
          name: MonsterAbility.SCORCHING_HEAT,
        },
      ],
    },
    thumbnailFull:
      'https://patchwiki.biligame.com/images/resonance/8/8c/7q1m9oftcuh7ccp7jj4cnwbcaiyxjif.png',
    camp: 'https://patchwiki.biligame.com/images/resonance/a/a0/fbdc315jmg3h5b8w2mq80rci6dtyvxd.png',
  },
  '사막 도적단 도끼잡이': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E6%B2%99%E7%9B%97%E6%96%A7%E6%89%8B',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/8/8b/mxn2w6lm63mzj9gsp5kvwhsgt9aklgg.png',
    grade: MonsterGrade.NORMAL,
    attack: MonsterStatGrade.B,
    defence: MonsterStatGrade.C,
    hp: MonsterStatGrade.C,
    type: MonsterType.HUMAN,
    traits: {
      skills: [
        {
          name: MonsterAbility.IGNITE,
        },
        {
          name: MonsterAbility.BURN_INJURY,
        },
      ],
    },
    resistance: { skills: [] },
    weakness: {
      skills: [
        {
          name: MonsterAbility.BURN_INJURY,
        },
      ],
    },
    thumbnailFull:
      'https://patchwiki.biligame.com/images/resonance/e/e3/cjzsrrfrjtsn7xjommefkavg2gl205o.png',
    camp: 'https://patchwiki.biligame.com/images/resonance/6/61/lsmb7fgc7o8dj8nuo3jqzt9zhew099w.png',
  },
  '사막 도적단 기사': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E6%B2%99%E7%9B%97%E9%AA%91%E5%A3%AB',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/b/b0/5zji0zbg67ho6qxb0zje696m7hi3oxx.png',
    grade: MonsterGrade.NORMAL,
    attack: MonsterStatGrade.A,
    defence: MonsterStatGrade.C,
    hp: MonsterStatGrade.C,
    type: MonsterType.HUMAN,
    traits: {
      skills: [
        {
          name: MonsterAbility.IGNITE,
        },
        {
          name: MonsterAbility.SMASH,
        },
      ],
    },
    resistance: { skills: [] },
    weakness: {
      skills: [
        {
          name: MonsterAbility.BURN_INJURY,
        },
      ],
    },
    thumbnailFull:
      'https://patchwiki.biligame.com/images/resonance/0/01/mgdwmzs7zva4en1db662dypdh45vbyk.png',
    camp: 'https://patchwiki.biligame.com/images/resonance/6/61/lsmb7fgc7o8dj8nuo3jqzt9zhew099w.png',
  },
  '혼란의 틸란시아': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E6%B7%B7%E5%8E%84%E9%93%81%E5%85%B0',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/a/a4/2c4gkm2yl2zaysf4b6x8yzuk6znlml4.png',
    grade: MonsterGrade.NORMAL,
    attack: MonsterStatGrade.A,
    defence: MonsterStatGrade.C,
    hp: MonsterStatGrade.B,
    type: MonsterType.BETULA,
    traits: { skills: [] },
    resistance: {
      skills: [
        {
          name: MonsterAbility.CURSE,
        },
        {
          name: MonsterAbility.RESTRAINT,
        },
      ],
    },
    weakness: {
      skills: [
        {
          name: MonsterAbility.IGNITE,
        },
        {
          name: MonsterAbility.BURN_INJURY,
        },
      ],
    },
    thumbnailFull:
      'https://patchwiki.biligame.com/images/resonance/d/d6/of4771ggmyw6kym3yz11tognwza9wcu.png',
    camp: 'https://patchwiki.biligame.com/images/resonance/8/8b/88cs95z6hi13s7cpzwshg2670jomxmq.png',
  },
  '혼돈의 웜도브': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E6%B5%91%E5%99%A9%E8%99%AB%E9%B8%A0',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/7/73/o63y6iloi8zuwoqup1rme0vuyfb1s90.png',
    grade: MonsterGrade.NORMAL,
    attack: MonsterStatGrade.B,
    defence: MonsterStatGrade.C,
    hp: MonsterStatGrade.C,
    type: MonsterType.BETULA,
    traits: {
      skills: [
        {
          name: MonsterAbility.CHAOS,
        },
      ],
    },
    resistance: {
      skills: [
        {
          name: MonsterAbility.CURSE,
        },
      ],
    },
    weakness: {
      skills: [
        {
          name: MonsterAbility.IGNITE,
        },
        {
          name: MonsterAbility.BURN_INJURY,
        },
      ],
    },
    thumbnailFull:
      'https://patchwiki.biligame.com/images/resonance/a/ad/oqt4w04n0f0wklww4qc45hpxagvuid0.png',
    camp: 'https://patchwiki.biligame.com/images/resonance/8/8b/88cs95z6hi13s7cpzwshg2670jomxmq.png',
  },
  '암흑의 코르부스': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E6%98%8F%E6%81%B6%E6%B8%A1%E9%B8%A6',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/3/30/6e0wwui9b27ba56v237x3hwdgy06ftk.png',
    grade: MonsterGrade.NORMAL,
    attack: MonsterStatGrade.B,
    defence: MonsterStatGrade.C,
    hp: MonsterStatGrade.C,
    type: MonsterType.BETULA,
    traits: {
      skills: [
        {
          name: MonsterAbility.CHAOS,
        },
        {
          name: MonsterAbility.STUN,
        },
      ],
    },
    resistance: {
      skills: [
        {
          name: MonsterAbility.CURSE,
        },
        {
          name: MonsterAbility.SLEEP,
        },
      ],
    },
    weakness: {
      skills: [
        {
          name: MonsterAbility.IGNITE,
        },
        {
          name: MonsterAbility.BURN_INJURY,
        },
      ],
    },
    thumbnailFull:
      'https://patchwiki.biligame.com/images/resonance/8/8a/l1tk20wd7qrr53oovf4af2gh7bk6x4l.png',
    camp: 'https://patchwiki.biligame.com/images/resonance/8/8b/88cs95z6hi13s7cpzwshg2670jomxmq.png',
  },
  '방랑자-소총병': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E6%8B%BE%E8%8D%92%E8%80%85%C2%B7%E7%81%AB%E6%9E%AA%E7%BB%84',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/0/01/4im3siakhcdbe7i73qcx7s877jozr2d.png',
    grade: MonsterGrade.NORMAL,
    attack: MonsterStatGrade.B,
    defence: MonsterStatGrade.D,
    hp: MonsterStatGrade.D,
    type: MonsterType.HUMAN,
    traits: {
      skills: [
        {
          name: MonsterAbility.IGNITE,
        },
      ],
    },
    resistance: { skills: [] },
    weakness: {
      skills: [
        {
          name: MonsterAbility.SCORCHING_HEAT,
        },
      ],
    },
    thumbnailFull:
      'https://patchwiki.biligame.com/images/resonance/0/04/jmknsvfeyltvleli26jd2c5e0dd6cv5.png',
    camp: 'https://patchwiki.biligame.com/images/resonance/0/00/qdastc7p24sf8r44ketmdkl4b1370j0.png',
  },
  '방랑자-의료팀': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E6%8B%BE%E8%8D%92%E8%80%85%C2%B7%E6%89%B6%E5%8D%B1%E7%BB%84',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/d/d4/ia50g5eqkwmuvpvlsefnt0570zac7nj.png',
    grade: MonsterGrade.NORMAL,
    attack: MonsterStatGrade.C,
    defence: MonsterStatGrade.D,
    hp: MonsterStatGrade.D,
    type: MonsterType.HUMAN,
    traits: {
      skills: [
        {
          name: MonsterAbility.STUN,
        },
      ],
    },
    resistance: { skills: [] },
    weakness: {
      skills: [
        {
          name: MonsterAbility.SCORCHING_HEAT,
        },
      ],
    },
    thumbnailFull:
      'https://patchwiki.biligame.com/images/resonance/7/73/h0ddn3t4wydu8707hanyq0nzh8kucr7.png',
    camp: 'https://patchwiki.biligame.com/images/resonance/0/00/qdastc7p24sf8r44ketmdkl4b1370j0.png',
  },
  '방랑자-지원팀': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E6%8B%BE%E8%8D%92%E8%80%85%C2%B7%E5%90%8E%E6%8F%B4%E7%BB%84',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/e/e5/8j7rsn4elgg5qe5gnjs3mox32bvjp99.png',
    grade: MonsterGrade.NORMAL,
    attack: MonsterStatGrade.C,
    defence: MonsterStatGrade.D,
    hp: MonsterStatGrade.D,
    type: MonsterType.HUMAN,
    traits: {
      skills: [
        {
          name: MonsterAbility.SUMMON,
        },
      ],
    },
    resistance: { skills: [] },
    weakness: {
      skills: [
        {
          name: MonsterAbility.SCORCHING_HEAT,
        },
      ],
    },
    thumbnailFull:
      'https://patchwiki.biligame.com/images/resonance/4/4d/15m78cfs0vmxgj1yw9w52uzt8551sq7.png',
    camp: 'https://patchwiki.biligame.com/images/resonance/0/00/qdastc7p24sf8r44ketmdkl4b1370j0.png',
  },
  '방랑자-머스킷 선봉': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E6%8B%BE%E8%8D%92%E8%80%85%C2%B7%E7%81%AB%E6%9E%AA%E5%85%88%E9%94%8B',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/d/df/tumvh9glyf322ucehvkf6pwvcz9ifkb.png',
    grade: MonsterGrade.NORMAL,
    attack: MonsterStatGrade.B,
    defence: MonsterStatGrade.C,
    hp: MonsterStatGrade.D,
    type: MonsterType.HUMAN,
    traits: {
      skills: [
        {
          name: MonsterAbility.INTERRUPTION,
        },
        {
          name: MonsterAbility.IGNITE,
        },
      ],
    },
    resistance: { skills: [] },
    weakness: {
      skills: [
        {
          name: MonsterAbility.SCORCHING_HEAT,
        },
      ],
    },
    thumbnailFull:
      'https://patchwiki.biligame.com/images/resonance/1/10/0nokdhdh5tapksde4p1o28isi82q5ft.png',
    camp: 'https://patchwiki.biligame.com/images/resonance/0/00/qdastc7p24sf8r44ketmdkl4b1370j0.png',
  },
  '방랑자-스피어 선봉': {
    detail:
      'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E6%8B%BE%E8%8D%92%E8%80%85%C2%B7%E9%95%BF%E6%9E%AA%E5%85%88%E9%94%8B',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/b/be/cizxhz45w9lxzchw9qgteka6a2b992a.png',
    grade: MonsterGrade.NORMAL,
    attack: MonsterStatGrade.C,
    defence: MonsterStatGrade.C,
    hp: MonsterStatGrade.D,
    type: MonsterType.HUMAN,
    traits: {
      skills: [
        {
          name: MonsterAbility.INTERRUPTION,
        },
      ],
    },
    resistance: { skills: [] },
    weakness: {
      skills: [
        {
          name: MonsterAbility.SCORCHING_HEAT,
        },
      ],
    },
    thumbnailFull:
      'https://patchwiki.biligame.com/images/resonance/4/4b/cczr916iouynwjdd0qcwu14twjvle4m.png',
    camp: 'https://patchwiki.biligame.com/images/resonance/0/00/qdastc7p24sf8r44ketmdkl4b1370j0.png',
  },

  '천둥 두개골': {
    detail: 'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E8%8D%92%E9%9B%B7%E9%A2%85',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/6/6c/dn648mzstqe5n7t16eun21fqnrm9zao.png',
    grade: MonsterGrade.ELITE,
    attack: MonsterStatGrade.S,
    defence: MonsterStatGrade.A,
    hp: MonsterStatGrade.B,
    type: MonsterType.BETULA,
  },
  알키오네: {
    detail: 'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E6%98%B4%E5%AE%BF%E5%85%AD',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/d/d1/b393c44bf5tdnkimr86colcgtg4n11u.png',
    grade: MonsterGrade.ELITE,
    attack: MonsterStatGrade.SS,
    defence: MonsterStatGrade.S,
    hp: MonsterStatGrade.SS,
    type: MonsterType.MACHINE,
  },
  '야생 번개막대': {
    detail: 'https://wiki.biligame.com/resonance/%E6%95%8C%E4%BA%BA-%E8%8D%92%E9%9B%B7%E9%92%88',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/0/02/2qn65c4ibl5wavq9ezyfzblxncx2bow.png',
    grade: MonsterGrade.NORMAL,
    attack: MonsterStatGrade.S,
    defence: MonsterStatGrade.A,
    hp: MonsterStatGrade.B,
    type: MonsterType.BETULA,
  },
}

export const CONVERTED_MONSTERS = _.map(MONSTERS, (value, key) => ({
  name: key,
  ...value,
}))

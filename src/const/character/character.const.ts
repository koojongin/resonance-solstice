import { RS_COLUMN, RS_FACTION, RS_GENDER, RS_GRADE } from '@/const/character/character.enum'
import { EngineCore, RSCharacter } from '@/const/character/character.interface'
import _ from 'lodash'

export const LYCAGIA: RSCharacter = {
  cores: [],
  originName: 'LYCAGIA',
  name: '레카지아',
  faction: RS_FACTION.RAILWAY,
  grade: RS_GRADE.SSR,
  column: RS_COLUMN.MIDDLE,
  thumbnail:
    'https://patchwiki.biligame.com/images/resonance/f/fe/lrq1s72q7guhec4kildxpzy46ktxkie.png',
  thumbnailLarge:
    'https://patchwiki.biligame.com/images/resonance/8/8d/luqzinye881o0kp57qlhyesndkktlzy.png',
  gender: RS_GENDER.FEMALE,
}
export const RAZIEL: RSCharacter = {
  cores: [],
  originName: 'RAZIEL',
  name: '라지엘',
  faction: RS_FACTION.SOURCE_CITADEL,
  grade: RS_GRADE.SSR,
  column: RS_COLUMN.FRONT,
  thumbnail:
    'https://patchwiki.biligame.com/images/resonance/0/00/e3vvqlx9150fyg7ydza0q9ugvybfkev.png',
  thumbnailLarge:
    'https://patchwiki.biligame.com/images/resonance/3/35/qwoiqembujmf6lcrokv70rfz9zj49vp.png',
  gender: RS_GENDER.FEMALE,
}
export const RAZIEL_THE_REMINISCE: RSCharacter = {
  cores: [EngineCore.IGNITE],
  originName: 'RAZIEL_THE_REMINISCE',
  name: '라지엘 - 회상',
  faction: RS_FACTION.SOURCE_CITADEL,
  grade: RS_GRADE.SSR,
  column: RS_COLUMN.BACK,
  thumbnail:
    'https://patchwiki.biligame.com/images/resonance/6/6f/4kzapk57banre12zs90982f8wqxza4b.png',
  thumbnailLarge:
    'https://patchwiki.biligame.com/images/resonance/7/70/7gs2pbi5d6ik1aoupvevwx06ginu2pz.png',
  gender: RS_GENDER.FEMALE,
}
export const SHIRE: RSCharacter = {
  cores: [],
  originName: 'SHIRE',
  name: '샤이어',
  faction: RS_FACTION.CHAOS,
  grade: RS_GRADE.SSR,
  column: RS_COLUMN.BACK,
  thumbnail:
    'https://patchwiki.biligame.com/images/resonance/b/b0/9ie7g5kbg77kxa3wpma3qkwijb585ma.png',
  thumbnailLarge:
    'https://patchwiki.biligame.com/images/resonance/6/68/9mmcj7lmk4g2zltt3hs9n1c7p6fhf8t.png',
  gender: RS_GENDER.FEMALE,
}
export const PELOTA: RSCharacter = {
  cores: [EngineCore.LIGHTNING_STRIKE],
  originName: 'PELOTA',
  name: '페로타',
  faction: RS_FACTION.GARDENERS,
  grade: RS_GRADE.SSR,
  column: RS_COLUMN.BACK,
  thumbnail:
    'https://patchwiki.biligame.com/images/resonance/3/34/6xw8nyrrm1ioa97qj48f9y0k4d255zl.png',
  thumbnailLarge:
    'https://patchwiki.biligame.com/images/resonance/a/af/ls5mioc4m8xbpy9xvkzcqlvh6ljtun5.png',
  gender: RS_GENDER.FEMALE,
}

export const DOROTHY: RSCharacter = {
  cores: [EngineCore.IGNITE, EngineCore.FREEZING],
  originName: 'DOROTHY',
  name: '도로시',
  faction: RS_FACTION.RAILWAY,
  grade: RS_GRADE.SSR,
  column: RS_COLUMN.BACK,
  thumbnail:
    'https://patchwiki.biligame.com/images/resonance/5/55/824lzhgqjvy0tdxuleasjmhcd43xl54.png',
  thumbnailLarge:
    'https://patchwiki.biligame.com/images/resonance/0/05/f8qhtxzx5f58jq7mbfetsxib42t8nic.png',
  gender: RS_GENDER.FEMALE,
}
export const JOSHUA: RSCharacter = {
  cores: [],
  originName: 'JOSHUA',
  name: '조슈아',
  faction: RS_FACTION.SOURCE_CITADEL,
  grade: RS_GRADE.SSR,
  column: RS_COLUMN.MIDDLE,
  thumbnail:
    'https://patchwiki.biligame.com/images/resonance/9/9e/jn2p7d9fuxa2b4kijg6vljnsyctac2x.png',
  thumbnailLarge:
    'https://patchwiki.biligame.com/images/resonance/5/57/3kup3cenwdozp42f8vdc325slyohgr0.png',
  gender: RS_GENDER.UNKNOWN,
}
export const SOMMER: RSCharacter = {
  cores: [],
  originName: 'SOMMER',
  name: '소마',
  faction: RS_FACTION.SOURCE_CITADEL,
  grade: RS_GRADE.SSR,
  column: RS_COLUMN.FRONT,
  thumbnail:
    'https://patchwiki.biligame.com/images/resonance/8/83/l2wwi95nt3abfwicfoqm26rmt494mnx.png',
  thumbnailLarge:
    'https://patchwiki.biligame.com/images/resonance/b/b6/07qf581995pkz0uaiyke42d912jkyu6.png',
  gender: RS_GENDER.FEMALE,
}
export const USHANA: RSCharacter = {
  cores: [],
  originName: 'USHANA',
  name: '우샤나',
  faction: RS_FACTION.SOURCE_CITADEL,
  grade: RS_GRADE.SSR,
  column: RS_COLUMN.FRONT,
  thumbnail:
    'https://patchwiki.biligame.com/images/resonance/5/5f/pr38j4z0f3mod09k705odrz9vg0rdfw.png',
  thumbnailLarge:
    'https://patchwiki.biligame.com/images/resonance/a/a8/7y2podgu54y2130do72ivzfkpghdvfc.png',
  gender: RS_GENDER.FEMALE,
}
export const SUMMERSHIZURU: RSCharacter = {
  cores: [EngineCore.IGNITE, EngineCore.FREEZING],
  originName: 'SUMMERSHIZURU',
  name: '시즈루 - 여름 바캉스',
  faction: RS_FACTION.RAILWAY,
  grade: RS_GRADE.SSR,
  column: RS_COLUMN.BACK,
  thumbnail:
    'https://patchwiki.biligame.com/images/resonance/d/de/qqrft9tlz1ldjit0hzayp4n7gtr3tvh.png',
  thumbnailLarge:
    'https://patchwiki.biligame.com/images/resonance/d/df/kp7ts66zs784d7875s28l5p52130skq.png',
  gender: RS_GENDER.FEMALE,
}
export const NICOLA: RSCharacter = {
  cores: [EngineCore.LIGHTNING_STRIKE],
  originName: 'NICOLA',
  name: '니콜라',
  faction: RS_FACTION.GARDENERS,
  grade: RS_GRADE.SSR,
  column: RS_COLUMN.BACK,
  thumbnail:
    'https://patchwiki.biligame.com/images/resonance/0/01/23b1it2iy06w1ijt2ncayvr3i768ehk.png',
  thumbnailLarge:
    'https://patchwiki.biligame.com/images/resonance/0/05/hfa2364b0y8776o60zavvmaana3aksg.png',
  gender: RS_GENDER.FEMALE,
}
export const DUSTIN: RSCharacter = {
  cores: [],
  originName: 'DUSTIN',
  name: '더스틴',
  faction: RS_FACTION.SOURCE_CITADEL,
  grade: RS_GRADE.SSR,
  column: RS_COLUMN.FRONT,
  thumbnail:
    'https://patchwiki.biligame.com/images/resonance/7/76/lpcgzcy77vj8pba9o4zavicup2cdtod.png',
  thumbnailLarge:
    'https://patchwiki.biligame.com/images/resonance/c/c6/9waw3wiw3pthlqvgmahgk2inkgyhgem.png',
  gender: RS_GENDER.MALE,
}
export const ANFIYA: RSCharacter = {
  cores: [EngineCore.FREEZING],
  originName: 'ANFIYA',
  name: '안피아',
  faction: RS_FACTION.GARDENERS,
  grade: RS_GRADE.SSR,
  column: RS_COLUMN.MIDDLE,
  thumbnail:
    'https://patchwiki.biligame.com/images/resonance/0/0d/5btj9lbwex4qirctyegw5ebpfurrbyf.png',
  thumbnailLarge:
    'https://patchwiki.biligame.com/images/resonance/b/ba/nnvs3gmn6u4sl9hbrr7ry19eplvvtqf.png',
  gender: RS_GENDER.FEMALE,
}
export const HAYABUSA: RSCharacter = {
  cores: [EngineCore.IGNITE],
  originName: 'HAYABUSA',
  name: '하야부사',
  faction: RS_FACTION.NIGHT_CHAINS,
  grade: RS_GRADE.SSR,
  column: RS_COLUMN.MIDDLE,
  thumbnail:
    'https://patchwiki.biligame.com/images/resonance/a/a0/glwdfxwjiavsd3yzfay2anv9bf4h8kn.png',
  thumbnailLarge:
    'https://patchwiki.biligame.com/images/resonance/f/f8/t64gzdu51up59c7rgmjfznj2gq4hf0r.png',
  gender: RS_GENDER.MALE,
}
export const JALHAY: RSCharacter = {
  cores: [],
  originName: 'JALHAY',
  name: '아일리',
  faction: RS_FACTION.SOURCE_CITADEL,
  grade: RS_GRADE.SSR,
  column: RS_COLUMN.BACK,
  thumbnail:
    'https://patchwiki.biligame.com/images/resonance/b/bd/2oliq2vbvvpqkqqjx4aea6sk0bgd5d2.png',
  thumbnailLarge:
    'https://patchwiki.biligame.com/images/resonance/3/32/5plh6grqi7bop057usmeg2llvpjn72x.png',
  gender: RS_GENDER.FEMALE,
}
export const ITHOS: RSCharacter = {
  cores: [],
  originName: 'ITHOS',
  name: '이소스',
  faction: RS_FACTION.SOURCE_CITADEL,
  grade: RS_GRADE.SSR,
  column: RS_COLUMN.BACK,
  thumbnail:
    'https://patchwiki.biligame.com/images/resonance/6/62/bj6gl08kvk8i5ffzkgcp98e44br82wg.png',
  thumbnailLarge:
    'https://patchwiki.biligame.com/images/resonance/c/ce/82nthbmin655kajh2nx9ytaxxdxg9hw.png',
  gender: RS_GENDER.MALE,
}
export const IKUMA: RSCharacter = {
  cores: [EngineCore.IGNITE],
  originName: 'IKUMA',
  name: '이코마',
  faction: RS_FACTION.CREW_STRANGER,
  grade: RS_GRADE.SSR,
  column: RS_COLUMN.FRONT,
  thumbnail:
    'https://patchwiki.biligame.com/images/resonance/2/27/f47u5ewt5kqcx9vatieyqnxjh05szr5.png',
  thumbnailLarge:
    'https://patchwiki.biligame.com/images/resonance/c/cb/7fgnp0pxb86bbwq4rit2xxg9uk4uc7k.png',
  gender: RS_GENDER.MALE,
}
export const LISSANDRA: RSCharacter = {
  cores: [],
  originName: 'LISSANDRA',
  name: '리산드라',
  faction: RS_FACTION.SOURCE_CITADEL,
  grade: RS_GRADE.SSR,
  column: RS_COLUMN.FRONT,
  thumbnail:
    'https://patchwiki.biligame.com/images/resonance/4/42/r2nhhrokbtj6mv8seu8853xkzai2036.png',
  thumbnailLarge:
    'https://patchwiki.biligame.com/images/resonance/b/b3/r6y79wdsj5qbifib04lcj6ve1prv4iy.png',
  gender: RS_GENDER.FEMALE,
}
export const MUMEI: RSCharacter = {
  cores: [EngineCore.IGNITE],
  originName: 'MUMEI',
  name: '무메이',
  faction: RS_FACTION.CREW_STRANGER,
  grade: RS_GRADE.SSR,
  column: RS_COLUMN.FRONT,
  thumbnail:
    'https://patchwiki.biligame.com/images/resonance/3/39/pslrd8s3yh7kmiln9g7j5gu4tnolz6a.png',
  thumbnailLarge:
    'https://patchwiki.biligame.com/images/resonance/f/fc/5jdzkm0t3u9s6dribvpi9da9drkar55.png',
  gender: RS_GENDER.FEMALE,
}
export const PALADI: RSCharacter = {
  cores: [EngineCore.LIGHTNING_STRIKE],
  originName: 'PALADI',
  name: '파라디',
  faction: RS_FACTION.RAILWAY,
  grade: RS_GRADE.SSR,
  column: RS_COLUMN.MIDDLE,
  thumbnail:
    'https://patchwiki.biligame.com/images/resonance/b/b5/823ef03z3minqh0v7h09zm1j7yrloh3.png',
  thumbnailLarge:
    'https://patchwiki.biligame.com/images/resonance/5/5a/pe6oaj0kexh9t9kpqlfjdm9yiq6flh0.png',
  gender: RS_GENDER.FEMALE,
}

export const CONNOR: RSCharacter = {
  cores: [EngineCore.FREEZING],
  originName: 'CONNOR',
  name: '코나',
  faction: RS_FACTION.MUNDUS,
  grade: RS_GRADE.SSR,
  column: RS_COLUMN.FRONT,
  thumbnail:
    'https://patchwiki.biligame.com/images/resonance/d/da/693zk462exf86w0saftvznuqupwmuej.png',
  thumbnailLarge:
    'https://patchwiki.biligame.com/images/resonance/0/05/9a0t69tjgc5kdplwl14qtjrvwoktl0l.png',
  gender: RS_GENDER.FEMALE,
}

export const VERLAINE: RSCharacter = {
  cores: [EngineCore.FREEZING],
  originName: 'VERLAINE',
  name: '베를렌',
  faction: RS_FACTION.MUNDUS,
  grade: RS_GRADE.SSR,
  column: RS_COLUMN.BACK,
  thumbnail:
    'https://patchwiki.biligame.com/images/resonance/9/99/lxsqzm2j1w49tk8z12vnlp092r7yqdj.png',
  thumbnailLarge:
    'https://patchwiki.biligame.com/images/resonance/b/bf/6ojswpyudt2itmzc18etludn6upy1jw.png',
  gender: RS_GENDER.FEMALE,
}

export const CHARLOTTE: RSCharacter = {
  cores: [],
  originName: 'CHARLOTTE',
  name: '샬롯',
  faction: RS_FACTION.MUNDUS,
  grade: RS_GRADE.SSR,
  column: RS_COLUMN.FRONT,
  thumbnail:
    'https://patchwiki.biligame.com/images/resonance/2/28/bqsrujv5775aocb9p7op05xrx852q7a.png',
  thumbnailLarge:
    'https://patchwiki.biligame.com/images/resonance/b/b0/41834ks3migirhg4rpeny08yn82kac9.png',
  gender: RS_GENDER.FEMALE,
}

export const SUEN: RSCharacter = {
  cores: [],
  originName: 'SUEN',
  name: '수엔',
  faction: RS_FACTION.SOURCE_CITADEL,
  grade: RS_GRADE.SSR,
  column: RS_COLUMN.FRONT,
  thumbnail:
    'https://patchwiki.biligame.com/images/resonance/a/a3/6j4kheodb9w0wd4hfkqh1zkt72m6lih.png',
  thumbnailLarge:
    'https://patchwiki.biligame.com/images/resonance/c/cf/0tqy7eq6ssf7ig3awcbz5ryhj99enuo.png',
  gender: RS_GENDER.FEMALE,
}
export const NAYUTA: RSCharacter = {
  cores: [EngineCore.IGNITE],
  originName: 'NAYUTA',
  name: '나유타',
  faction: RS_FACTION.SOURCE_CITADEL,
  grade: RS_GRADE.SSR,
  column: RS_COLUMN.MIDDLE,
  thumbnail:
    'https://patchwiki.biligame.com/images/resonance/0/00/js1l3c6ehy556lhpbvpmbxwkc3sbldp.png',
  thumbnailLarge:
    'https://patchwiki.biligame.com/images/resonance/a/a5/qivpzu3hp9xcf8pbee78v62mamhcg54.png',
  gender: RS_GENDER.MALE,
}

export const KATAS: RSCharacter = {
  cores: [EngineCore.IGNITE],
  originName: 'KATAS',
  name: '카타스',
  faction: RS_FACTION.SOURCE_CITADEL,
  grade: RS_GRADE.SSR,
  column: RS_COLUMN.FRONT,
  thumbnail:
    'https://patchwiki.biligame.com/images/resonance/e/ea/g7qvkhgksqc6dmeoeogo5cg6xdyb8r4.png',
  thumbnailLarge:
    'https://patchwiki.biligame.com/images/resonance/2/26/d0zmjdgbaavvz65rt1x75wmz98mzhlf.png',
  gender: RS_GENDER.FEMALE,
}
export const WENSHENG: RSCharacter = {
  cores: [EngineCore.FREEZING],
  originName: 'WENSHENG',
  name: '문생',
  faction: RS_FACTION.NIGHT_CHAINS,
  grade: RS_GRADE.SSR,
  column: RS_COLUMN.FRONT,
  thumbnail:
    'https://patchwiki.biligame.com/images/resonance/9/94/pmucfxwidn1kpu7ni3rp1n5trgw8c5v.png',
  thumbnailLarge:
    'https://patchwiki.biligame.com/images/resonance/5/57/9ee53solbl2ad9nnnqgi66d4qz65jt5.png',
  gender: RS_GENDER.MALE,
}

export const MARGIELA: RSCharacter = {
  cores: [],
  originName: 'MARGIELA',
  name: '마키라',
  faction: RS_FACTION.NIGHT_CHAINS,
  grade: RS_GRADE.SSR,
  column: RS_COLUMN.BACK,
  thumbnail:
    'https://patchwiki.biligame.com/images/resonance/a/a0/djgvzxvmqbiky8n0pze1ybsksxqus3w.png',
  thumbnailLarge:
    'https://patchwiki.biligame.com/images/resonance/c/c8/j6u0kb1tkny7frnqpb31dh5lqtjeuhm.png',
  gender: RS_GENDER.FEMALE,
}
export const ARINA: RSCharacter = {
  cores: [EngineCore.IGNITE],
  originName: 'ARINA',
  name: '아리나',
  faction: RS_FACTION.NIGHT_CHAINS,
  grade: RS_GRADE.SSR,
  column: RS_COLUMN.FRONT,
  thumbnail:
    'https://patchwiki.biligame.com/images/resonance/9/9d/pxkxvbdqdbtdh35t8o2rjzigmkw5pqu.png',
  thumbnailLarge:
    'https://patchwiki.biligame.com/images/resonance/b/b3/0hgvwlxnn90ej5gdegr626qfu2qd3k6.png',
  gender: RS_GENDER.FEMALE,
}

export const ILONA: RSCharacter = {
  cores: [],
  originName: 'ILONA',
  name: '이로나',
  faction: RS_FACTION.RAILWAY,
  grade: RS_GRADE.SSR,
  column: RS_COLUMN.BACK,
  thumbnail:
    'https://patchwiki.biligame.com/images/resonance/1/1a/51urp8w56ytk1yu5qbcokrijok8og2i.png',
  thumbnailLarge:
    'https://patchwiki.biligame.com/images/resonance/3/36/6sxqoudj4yquts61juhjndbjjkizkg8.png',
  gender: RS_GENDER.FEMALE,
}
export const STELLA: RSCharacter = {
  cores: [EngineCore.IGNITE],
  originName: 'STELLA',
  name: '스텔라',
  faction: RS_FACTION.GARDENERS,
  grade: RS_GRADE.SSR,
  column: RS_COLUMN.FRONT,
  thumbnail:
    'https://patchwiki.biligame.com/images/resonance/3/39/gkf4tscz3e7u5ahmzl4frhliehe4f97.png',
  thumbnailLarge:
    'https://patchwiki.biligame.com/images/resonance/f/f0/p4cfdxs2i4o1en2a0frfazvdrrgco7b.png',
  gender: RS_GENDER.FEMALE,
}
export const CAROLINE: RSCharacter = {
  cores: [EngineCore.LIGHTNING_STRIKE],
  originName: 'CAROLINE',
  name: '캐롤라인',
  faction: RS_FACTION.GARDENERS,
  grade: RS_GRADE.SSR,
  column: RS_COLUMN.MIDDLE,
  thumbnail:
    'https://patchwiki.biligame.com/images/resonance/4/41/o3nffkahbbrvahbx087u6t7qy8719ed.png',
  thumbnailLarge:
    'https://patchwiki.biligame.com/images/resonance/0/05/3frnu76sjtpwxxgcxanptudema2wcny.png',
  gender: RS_GENDER.FEMALE,
}

export const TENNIE: RSCharacter = {
  cores: [EngineCore.LIGHTNING_STRIKE, EngineCore.FREEZING],
  originName: 'TENNIE',
  name: '테니',
  faction: RS_FACTION.GARDENERS,
  grade: RS_GRADE.SSR,
  column: RS_COLUMN.FRONT,
  thumbnail:
    'https://patchwiki.biligame.com/images/resonance/f/f3/02wi2sboshumw98nf7xh9sci7li57ct.png',
  thumbnailLarge:
    'https://patchwiki.biligame.com/images/resonance/0/01/4szdlgh32hs2a2ix0xrykkda6r3n59t.png',
  gender: RS_GENDER.FEMALE,
}

// SSR =================================================================================
export const HEINRICH: RSCharacter = {
  cores: [EngineCore.FREEZING],
  originName: 'HEINRICH',
  name: '하인리히',
  faction: RS_FACTION.RAILWAY,
  grade: RS_GRADE.SR,
  column: RS_COLUMN.FRONT,
  thumbnail:
    'https://patchwiki.biligame.com/images/resonance/b/bd/lrfz8vh5jhhm55iuuw71b5msk3ke159.png',
  thumbnailLarge:
    'https://patchwiki.biligame.com/images/resonance/7/79/chvn2j4j6ccfx4hh38uvr27fugqdhdo.png',
  gender: RS_GENDER.MALE,
}
export const LIVIA: RSCharacter = {
  cores: [EngineCore.LIGHTNING_STRIKE, EngineCore.FREEZING],
  originName: 'LIVIA',
  name: '리비아',
  faction: RS_FACTION.COLUMBAR,
  grade: RS_GRADE.SR,
  column: RS_COLUMN.MIDDLE,
  thumbnail:
    'https://patchwiki.biligame.com/images/resonance/3/37/n97nt1jynha8vkehmpx39z7nyqjvxzl.png',
  thumbnailLarge:
    'https://patchwiki.biligame.com/images/resonance/f/fa/cmc116ksybrtm9nju6dgtnncf3cowxq.png',
  gender: RS_GENDER.FEMALE,
}

export const DESIREE: RSCharacter = {
  cores: [EngineCore.LIGHTNING_STRIKE],
  originName: 'DESIREE',
  name: '데시레',
  faction: RS_FACTION.COLUMBAR,
  grade: RS_GRADE.SR,
  column: RS_COLUMN.BACK,
  thumbnail:
    'https://patchwiki.biligame.com/images/resonance/f/fc/74hn5lon3upuc416a3eekpcpqe3ch3q.png',
  thumbnailLarge:
    'https://patchwiki.biligame.com/images/resonance/e/e3/f5y6bkv6plh4ys6t511q6dhh3wqc8yf.png',
  gender: RS_GENDER.FEMALE,
}
export const LIN: RSCharacter = {
  cores: [EngineCore.LIGHTNING_STRIKE],
  originName: 'LIN',
  name: '린',
  faction: RS_FACTION.NIGHT_CHAINS,
  grade: RS_GRADE.SR,
  column: RS_COLUMN.FRONT,
  thumbnail:
    'https://patchwiki.biligame.com/images/resonance/7/74/2mc5r6uhbxbxcm4f4hgmnqvxh42nfsk.png',
  thumbnailLarge:
    'https://patchwiki.biligame.com/images/resonance/a/aa/6hgt3kpwto7r7nsw74qp25ul1ivum4m.png',
  gender: RS_GENDER.FEMALE,
}
export const NABI: RSCharacter = {
  cores: [EngineCore.LIGHTNING_STRIKE],
  originName: 'NABI',
  name: '나비',
  faction: RS_FACTION.NIGHT_CHAINS,
  grade: RS_GRADE.SR,
  column: RS_COLUMN.FRONT,
  thumbnail:
    'https://patchwiki.biligame.com/images/resonance/9/99/qjewxjjz056p4j7pjtrlv0v76tog4ij.png',
  thumbnailLarge:
    'https://patchwiki.biligame.com/images/resonance/a/a4/0xgfv0hmtqp6xp4ipeg07ww4t1kb3if.png',
  gender: RS_GENDER.FEMALE,
}
export const GANYA: RSCharacter = {
  cores: [],
  originName: 'GANYA',
  name: '간야',
  faction: RS_FACTION.RAILWAY,
  grade: RS_GRADE.SR,
  column: RS_COLUMN.FRONT,
  thumbnail:
    'https://patchwiki.biligame.com/images/resonance/d/d4/bl7m3snvy79u85fexh07w1lxjg8wt4c.png',
  thumbnailLarge:
    'https://patchwiki.biligame.com/images/resonance/8/80/ohu80ok7b7frhq2boq5rdgu05xn266l.png',
  gender: RS_GENDER.FEMALE,
}

export const YEJUE: RSCharacter = {
  cores: [EngineCore.LIGHTNING_STRIKE],
  originName: 'YEJUE',
  name: '예주',
  faction: RS_FACTION.GARDENERS,
  grade: RS_GRADE.SR,
  column: RS_COLUMN.BACK,
  thumbnail:
    'https://patchwiki.biligame.com/images/resonance/6/61/4j3mu6xuhp4tvsc884rq0x6rlwmigea.png',
  thumbnailLarge:
    'https://patchwiki.biligame.com/images/resonance/1/16/imcfwq3032e74e87bvouc4brkdbu1zk.png',
  gender: RS_GENDER.FEMALE,
}

export const AKIRA: RSCharacter = {
  cores: [EngineCore.FREEZING],
  originName: 'AKIRA',
  name: '아키라',
  faction: RS_FACTION.GARDENERS,
  grade: RS_GRADE.SR,
  column: RS_COLUMN.FRONT,
  thumbnail:
    'https://patchwiki.biligame.com/images/resonance/8/8b/c0iie1cu76sys17xvagxqnt0jfez80e.png',
  thumbnailLarge:
    'https://patchwiki.biligame.com/images/resonance/5/5b/p6j6dw7ca61qwin8ku21o2wkrpiuqw6.png',
  gender: RS_GENDER.MALE,
}

export const ACHIWA: RSCharacter = {
  cores: [EngineCore.IGNITE],
  originName: 'ACHIWA',
  name: '아치와',
  faction: RS_FACTION.GARDENERS,
  grade: RS_GRADE.SR,
  column: RS_COLUMN.FRONT,
  thumbnail:
    'https://patchwiki.biligame.com/images/resonance/e/e4/c7d0w54nqsrsftgbnihx7zlpjrjk51u.png',
  thumbnailLarge:
    'https://patchwiki.biligame.com/images/resonance/8/88/7qwv1i6zw6khr70y8n2s0jkp1ek1vwv.png',
  gender: RS_GENDER.FEMALE,
}
export const KALEYA: RSCharacter = {
  cores: [EngineCore.IGNITE],
  originName: 'KALEYA',
  name: '카리야',
  faction: RS_FACTION.GARDENERS,
  grade: RS_GRADE.SR,
  column: RS_COLUMN.MIDDLE,
  thumbnail:
    'https://patchwiki.biligame.com/images/resonance/a/aa/t48uxwofze12qrotesoqi8ubz6ied8t.png',
  thumbnailLarge:
    'https://patchwiki.biligame.com/images/resonance/f/f2/3xvfr0qdm6maz8xhxdsww9lu69o5ol7.png',
  gender: RS_GENDER.FEMALE,
}

export const YER: RSCharacter = {
  cores: [EngineCore.FREEZING],
  originName: 'YER',
  name: '이엘',
  faction: RS_FACTION.GARDENERS,
  grade: RS_GRADE.SR,
  column: RS_COLUMN.BACK,
  thumbnail:
    'https://patchwiki.biligame.com/images/resonance/7/78/ks7xx4q5rjap3tai1pyu7bftgnvgwsx.png',
  thumbnailLarge:
    'https://patchwiki.biligame.com/images/resonance/1/1c/dh1zi289rrhvfl9mqa7ekdh19hxxfej.png',
  gender: RS_GENDER.FEMALE,
}

export const FENIA: RSCharacter = {
  cores: [EngineCore.LIGHTNING_STRIKE],
  originName: 'FENIA',
  name: '페니아',
  faction: RS_FACTION.SOURCE_CITADEL,
  grade: RS_GRADE.SR,
  column: RS_COLUMN.MIDDLE,
  thumbnail:
    'https://patchwiki.biligame.com/images/resonance/d/db/p2d6nsdmci0vn6i9mco4w0a5pujmh2p.png',
  thumbnailLarge:
    'https://patchwiki.biligame.com/images/resonance/b/b6/s1o9vzq86fheyu8gf6syl7w5xm5ju74.png',
  gender: RS_GENDER.FEMALE,
}

export const RINA_F: RSCharacter = {
  cores: [EngineCore.IGNITE],
  originName: 'RINA_F',
  name: '리나 본',
  faction: RS_FACTION.SOURCE_CITADEL,
  grade: RS_GRADE.SR,
  column: RS_COLUMN.FRONT,
  thumbnail:
    'https://patchwiki.biligame.com/images/resonance/9/94/muij3ww15m1vow5rue5sie2wbdud0n7.png',
  thumbnailLarge:
    'https://patchwiki.biligame.com/images/resonance/2/21/5ifvgdu1em67ce3tg9fb2wy4rytf7cp.png',
  gender: RS_GENDER.FEMALE,
}
export const VALENTINE: RSCharacter = {
  cores: [EngineCore.IGNITE],
  originName: 'VALENTINE',
  name: '발렌타인',
  faction: RS_FACTION.SOURCE_CITADEL,
  grade: RS_GRADE.SR,
  column: RS_COLUMN.BACK,
  thumbnail:
    'https://patchwiki.biligame.com/images/resonance/c/c3/roqtb4sm1phw9jx2521gtzfg49k7ogz.png',
  thumbnailLarge:
    'https://patchwiki.biligame.com/images/resonance/5/57/bpxtexr875z8o462i1noghr8ioph5lp.png',
  gender: RS_GENDER.FEMALE,
}

export const YOIDUKI: RSCharacter = {
  cores: [EngineCore.IGNITE],
  originName: 'YOIDUKI',
  name: '요이즈키',
  faction: RS_FACTION.NIGHT_CHAINS,
  grade: RS_GRADE.SR,
  column: RS_COLUMN.BACK,
  thumbnail:
    'https://patchwiki.biligame.com/images/resonance/e/e7/1iwjagjic6zi5a0cwtj60m6sicybfmc.png',
  thumbnailLarge:
    'https://patchwiki.biligame.com/images/resonance/8/81/lib7qd47f8d372gyzo9oxcfsgrtq80b.png',
  gender: RS_GENDER.FEMALE,
}
export const AOBA: RSCharacter = {
  cores: [EngineCore.IGNITE, EngineCore.FREEZING],
  originName: 'AOBA',
  name: '아오바',
  faction: RS_FACTION.NIGHT_CHAINS,
  grade: RS_GRADE.SR,
  column: RS_COLUMN.MIDDLE,
  thumbnail:
    'https://patchwiki.biligame.com/images/resonance/0/0d/09np973hig1iqxj58563egh13i72df1.png',
  thumbnailLarge:
    'https://patchwiki.biligame.com/images/resonance/5/52/5sh1ae1n6madncxvo5w3kuak8jodax3.png',
  gender: RS_GENDER.FEMALE,
}
export const CECIL: RSCharacter = {
  cores: [EngineCore.IGNITE, EngineCore.FREEZING],
  originName: 'CECIL',
  name: '세실',
  faction: RS_FACTION.NIGHT_CHAINS,
  grade: RS_GRADE.SR,
  column: RS_COLUMN.BACK,
  thumbnail:
    'https://patchwiki.biligame.com/images/resonance/8/85/6kryyqwf1welefa9294dbt006rx35i6.png',
  thumbnailLarge:
    'https://patchwiki.biligame.com/images/resonance/c/c6/6zz7xcvfbotjyp4dmfwg09f167tt6en.png',
  gender: RS_GENDER.FEMALE,
}
export const MHAR: RSCharacter = {
  cores: [],
  originName: 'MHAR',
  name: '마루하',
  faction: RS_FACTION.NIGHT_CHAINS,
  grade: RS_GRADE.SR,
  column: RS_COLUMN.FRONT,
  thumbnail:
    'https://patchwiki.biligame.com/images/resonance/2/23/02x7kk8z0mhlutgr1hthb57lllztzli.png',
  thumbnailLarge:
    'https://patchwiki.biligame.com/images/resonance/f/f4/sw3uqn61nf49rzdl945n6chvl25y2z5.png',
  gender: RS_GENDER.FEMALE,
}

// R=============================================================================
export const MSGOLD: RSCharacter = {
  cores: [EngineCore.LIGHTNING_STRIKE],
  originName: 'MSGOLD',
  name: '미스 골드',
  faction: RS_FACTION.MUNDUS,
  grade: RS_GRADE.R,
  column: RS_COLUMN.BACK,
  thumbnail:
    'https://patchwiki.biligame.com/images/resonance/e/e7/1mhwp683ru3a94jmp42k6uu9ajf3ow6.png',
  thumbnailLarge:
    'https://patchwiki.biligame.com/images/resonance/4/41/p2gtna8jyu34fp0wc3i6po0bo790dcu.png',
  gender: RS_GENDER.BOT,
}
export const YAMAARASHI: RSCharacter = {
  cores: [EngineCore.IGNITE, EngineCore.FREEZING],
  originName: 'YAMAARASHI',
  name: '야마아라시',
  faction: RS_FACTION.NIGHT_CHAINS,
  grade: RS_GRADE.R,
  column: RS_COLUMN.MIDDLE,
  thumbnail:
    'https://patchwiki.biligame.com/images/resonance/b/b8/83bekcym9g2xgv541zx62s1ktn2c6zu.png',
  thumbnailLarge:
    'https://patchwiki.biligame.com/images/resonance/d/d0/8gmzp72szrtejhb609zejwaxc761agn.png',
  gender: RS_GENDER.FEMALE,
}
export const EXCALIBUR_BOX: RSCharacter = {
  cores: [EngineCore.IGNITE],
  originName: 'EXCALIBUR_BOX',
  name: '성검 BO-X',
  faction: RS_FACTION.COLUMBAR,
  grade: RS_GRADE.R,
  column: RS_COLUMN.FRONT,
  thumbnail:
    'https://patchwiki.biligame.com/images/resonance/5/53/1eobpcmy0n3s39a099copsrze4pd8jr.png',
  thumbnailLarge:
    'https://patchwiki.biligame.com/images/resonance/d/df/5lndyg3jd75ur83nfu7hqoo0jalmox3.png',
  gender: RS_GENDER.BOT,
}
export const FLAN: RSCharacter = {
  cores: [],
  originName: 'FLAN',
  name: '프란',
  faction: RS_FACTION.COLUMBAR,
  grade: RS_GRADE.R,
  column: RS_COLUMN.FRONT,
  thumbnail:
    'https://patchwiki.biligame.com/images/resonance/9/90/39hndkktsknogceq6mc9b3xek6vq04i.png',
  thumbnailLarge:
    'https://patchwiki.biligame.com/images/resonance/d/d8/4umt38z7ssnzv3ng1f80vxopnykk8k8.png',
  gender: RS_GENDER.FEMALE,
}
export const ELIOT: RSCharacter = {
  cores: [EngineCore.IGNITE, EngineCore.LIGHTNING_STRIKE],
  originName: 'ELIOT',
  name: '엘리엇',
  faction: RS_FACTION.COLUMBAR,
  grade: RS_GRADE.R,
  column: RS_COLUMN.BACK,
  thumbnail:
    'https://patchwiki.biligame.com/images/resonance/0/0a/efrmjiuy69fbklqkhm4tu9eno6hy31y.png',
  thumbnailLarge:
    'https://patchwiki.biligame.com/images/resonance/4/45/gxhue5iozrskitwt438t8qxdqeyerro.png',
  gender: RS_GENDER.FEMALE,
}
export const HARUKA: RSCharacter = {
  cores: [EngineCore.IGNITE],
  originName: 'HARUKA',
  name: '하루카',
  faction: RS_FACTION.COLUMBAR,
  grade: RS_GRADE.R,
  column: RS_COLUMN.FRONT,
  thumbnail:
    'https://patchwiki.biligame.com/images/resonance/b/b1/nxypaywi8et5ui4ogaqqepgdd3xjxzx.png',
  thumbnailLarge:
    'https://patchwiki.biligame.com/images/resonance/b/bd/5rd3yqxd1dqol98zs7fhksl82dy6j8b.png',
  gender: RS_GENDER.FEMALE,
}

export const ARCANA: RSCharacter = {
  cores: [],
  originName: 'ARCANA',
  name: '아르카나',
  faction: RS_FACTION.MUNDUS,
  grade: RS_GRADE.R,
  column: RS_COLUMN.BACK,
  thumbnail:
    'https://patchwiki.biligame.com/images/resonance/6/65/hf8m7qg0qt2yk5ikbmd755r1xwura4h.png',
  thumbnailLarge:
    'https://patchwiki.biligame.com/images/resonance/0/06/haejh1ofar1493iqzhug2omvdbgca58.png',
  gender: RS_GENDER.FEMALE,
}
export const GALORE: RSCharacter = {
  cores: [EngineCore.LIGHTNING_STRIKE],
  originName: 'GALORE',
  name: '게롤',
  faction: RS_FACTION.MUNDUS,
  grade: RS_GRADE.R,
  column: RS_COLUMN.MIDDLE,
  thumbnail:
    'https://patchwiki.biligame.com/images/resonance/a/a5/42w3t8fsyd3wibvzthl02js4d2ffkyi.png',
  thumbnailLarge:
    'https://patchwiki.biligame.com/images/resonance/e/e1/c381dey854jyytr9ddm6ozqsd5wfcb8.png',
  gender: RS_GENDER.MALE,
}
export const RACHEL: RSCharacter = {
  cores: [],
  originName: 'RACHEL',
  name: '레이첼',
  faction: RS_FACTION.RAILWAY,
  grade: RS_GRADE.R,
  column: RS_COLUMN.BACK,
  thumbnail:
    'https://patchwiki.biligame.com/images/resonance/9/91/gypn91bhybtlvfagbbvik1zxgnzu21a.png',
  thumbnailLarge:
    'https://patchwiki.biligame.com/images/resonance/0/06/gpx0k50kqbrja07qzv28908hjdx6lx8.png',
  gender: RS_GENDER.FEMALE,
}
export const TARA: RSCharacter = {
  cores: [EngineCore.IGNITE],
  originName: 'TARA',
  name: '타라',
  faction: RS_FACTION.MUNDUS,
  grade: RS_GRADE.R,
  column: RS_COLUMN.MIDDLE,
  thumbnail:
    'https://patchwiki.biligame.com/images/resonance/1/10/9jnvutq72ulmhglhqf05tx8be60y060.png',
  thumbnailLarge:
    'https://patchwiki.biligame.com/images/resonance/f/f6/n5qm4f12tqviyxo8dzipn18akz5eanl.png',
  gender: RS_GENDER.FEMALE,
}
export const SHIZURU: RSCharacter = {
  cores: [],
  originName: 'SHIZURU',
  name: '시즈루',
  faction: RS_FACTION.RAILWAY,
  grade: RS_GRADE.R,
  column: RS_COLUMN.MIDDLE,
  thumbnail:
    'https://patchwiki.biligame.com/images/resonance/c/ce/f3n1tyl4pvlkusi9s7c3nia00ji0xib.png',
  thumbnailLarge:
    'https://patchwiki.biligame.com/images/resonance/0/0f/9lq2jonjzrlm1dato70haldspkawlro.png',
  gender: RS_GENDER.FEMALE,
}
export const PRIMING: RSCharacter = {
  cores: [],
  originName: 'PRIMING',
  name: '레이카',
  faction: RS_FACTION.RAILWAY,
  grade: RS_GRADE.R,
  column: RS_COLUMN.FRONT,
  thumbnail:
    'https://patchwiki.biligame.com/images/resonance/7/7d/13feh8v5q8fybzjsubge8qtqqdvkmyz.png',
  thumbnailLarge:
    'https://patchwiki.biligame.com/images/resonance/5/5e/1sp4lmybycse6qggx54lyy47rnvcudw.png',
  gender: RS_GENDER.FEMALE,
}

export const JULIAN: RSCharacter = {
  cores: [],
  originName: 'JULIAN',
  name: '줄리안',
  faction: RS_FACTION.RAILWAY,
  grade: RS_GRADE.R,
  column: RS_COLUMN.MIDDLE,
  thumbnail:
    'https://patchwiki.biligame.com/images/resonance/5/5f/fove629a7cnqli99apcr5nfpfm9uz22.png',
  thumbnailLarge:
    'https://patchwiki.biligame.com/images/resonance/2/28/ekt8mn8h5jrr3om99vbk9fncnh40n7p.png',
  gender: RS_GENDER.FEMALE,
}

export const KAREN: RSCharacter = {
  cores: [],
  originName: 'KAREN',
  name: '카렌',
  faction: RS_FACTION.RAILWAY,
  grade: RS_GRADE.R,
  column: RS_COLUMN.MIDDLE,
  thumbnail:
    'https://patchwiki.biligame.com/images/resonance/d/df/83f2wu57hj40s6eb6qolth3q7e79gta.png',
  thumbnailLarge:
    'https://patchwiki.biligame.com/images/resonance/9/97/aqznvlhzyyynldsm4rzl0jyjttgliqw.png',
  gender: RS_GENDER.FEMALE,
}
export const JERBOA: RSCharacter = {
  cores: [],
  originName: 'JERBOA',
  name: '네즈미',
  faction: RS_FACTION.NIGHT_CHAINS,
  grade: RS_GRADE.R,
  column: RS_COLUMN.FRONT,
  thumbnail:
    'https://patchwiki.biligame.com/images/resonance/e/ef/dlkz344xwfkwjbryu3ar1ao8u0e0ami.png',
  thumbnailLarge:
    'https://patchwiki.biligame.com/images/resonance/d/d7/8ax6f0mj5856na4ewm6bv65hqroofox.png',
  gender: RS_GENDER.FEMALE,
}
export const SOLUM: RSCharacter = {
  cores: [EngineCore.LIGHTNING_STRIKE],
  originName: 'SOLUM',
  name: '솔럼',
  faction: RS_FACTION.NIGHT_CHAINS,
  grade: RS_GRADE.R,
  column: RS_COLUMN.FRONT,
  thumbnail:
    'https://patchwiki.biligame.com/images/resonance/0/01/gyndf2dte9v73p4vnip0jdfud7hc4wc.png',
  thumbnailLarge:
    'https://patchwiki.biligame.com/images/resonance/d/d2/alm4gcw9rrnlw39y9m8zami54owvjx2.png',
  gender: RS_GENDER.UNKNOWN,
}
// N ====================================================
export const BOX: RSCharacter = {
  cores: [EngineCore.IGNITE],
  originName: 'BOX',
  name: 'BO-X',
  faction: RS_FACTION.COLUMBAR,
  grade: RS_GRADE.N,
  column: RS_COLUMN.MIDDLE,
  thumbnail:
    'https://patchwiki.biligame.com/images/resonance/7/7a/9khpjg78hv4qw60uqd8qv4s0gf2efte.png',
  thumbnailLarge:
    'https://patchwiki.biligame.com/images/resonance/2/2e/0boywua8ilo6dx0x5yhoem087zd6ubo.png',
  gender: RS_GENDER.BOT,
}

export const RS_CHARACTERS: RSCharacter[] = [
  LYCAGIA,
  RAZIEL,
  RAZIEL_THE_REMINISCE,
  SHIRE,
  PELOTA,
  DOROTHY,
  JOSHUA,
  SOMMER,
  USHANA,
  SUMMERSHIZURU,
  NICOLA,
  DUSTIN,
  ANFIYA,
  HAYABUSA,
  JALHAY,
  ITHOS,
  IKUMA,
  LISSANDRA,
  MUMEI,
  PALADI,
  CONNOR,
  VERLAINE,
  CHARLOTTE,
  SUEN,
  NAYUTA,
  KATAS,
  WENSHENG,
  MARGIELA,
  ARINA,
  ILONA,
  STELLA,
  CAROLINE,
  TENNIE,

  /// ////////////
  HEINRICH,
  LIVIA,
  DESIREE,
  LIN,
  NABI,
  GANYA,
  YEJUE,
  AKIRA,
  ACHIWA,
  KALEYA,
  YER,
  FENIA,
  RINA_F,
  VALENTINE,
  YOIDUKI,
  AOBA,
  CECIL,
  MHAR,
  /// //////
  MSGOLD,
  JULIAN,
  YAMAARASHI,
  EXCALIBUR_BOX,
  FLAN,
  ELIOT,
  HARUKA,
  ARCANA,
  GALORE,
  RACHEL,
  TARA,
  SHIZURU,
  PRIMING,
  KAREN,
  JERBOA,
  SOLUM,
  BOX,
]

export const RS_CHARACTER_DICT = _.keyBy(RS_CHARACTERS, 'originName')

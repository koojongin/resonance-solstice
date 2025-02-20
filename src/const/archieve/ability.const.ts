import { RSArchieve } from '@/const/archieve/archieve.interface'

export const ARCHIEVE_ABILITIES: { [key: string]: RSArchieve } = {
  인뢰: {
    desc: '공격을 명중할 때마다 20%의 확률로 1개의 낙뢰를 발동해 1단 피해를 입힙니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/7/72/6e25vs85klmsoufdfrav7kwzmqctiek.png',
  },
  낙뢰: {
    desc: '1개의 낙뢰가 떨어져 대상에게 1단 피해를 입힙니다.\n동시에 [인뢰]를 발동합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/3/30/58yluj2qhu7k3n9bsa5p0fsq9zq5dzi.png',
  },
  우레: {
    desc: '3개의 낙뢰가 떨어져 대상에게 3단의 피해를 입힙니다.\n동시에 [인뢰]를 발동합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/8/81/mnc7c3srmtv7r1evox0918adfwwp8po.png',
  },
  천둥: {
    desc: '5개의 낙뢰가 떨어져 대상에게 5단의 피해를 입힙니다.\n동시에 [인뢰]를 발동합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/d/de/r5bwz3k1pyknq5kv7pyrnc89g8ybkzw.png',
  },
  자화: {
    desc: '대상이 [인뢰]에 명중될 확률이 2배 증가합니다.(6초간 지속)',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/b/b6/m0cuf2f7gxkgxs742vxcatyakde6dbg.png',
  },
  점화: {
    desc: '대상을 연소시켜 초당 1단 피해를 입힙니다.(6초간 지속)',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/b/ba/3ht77l604uzg2le178z6cbyufpmaoz4.png',
  },
  작열: {
    desc: '목표 구역을 연소시켜 범위 내의 적에게 초당 1단 피해를 입힙니다.(6초간 지속)',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/1/1f/jv6bwe6lm4whlokds1j8l2t2ry0nr51.png',
  },
  광염: {
    desc: '전방의 광범위한 구역을 연소시켜 범위 내의 적에게 초당 1단 피해를 입힙니다.(6초간 지속)',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/7/73/qnwger9skskm36wbe2usg9aijzm2ub3.png',
  },
  불바다: {
    desc: '필드 전체를 연소시켜 모든 적과 아군에게 초당 1단 피해를 입힙니다.(6초간 지속)\n동시에 모든 적과 아군의 [냉동]과 [동결] 상태를 해제합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/6/6d/0wy318exdatayizt7hplt0vx6xz2rif.png',
  },
  급속연소: {
    desc: '급속으로 연소하여 범위 내의 [점화]와 [작열]의 피해를 즉시 결산합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/4/48/i688cc0793b7f3ik50ox2vyo21g9jhp.png',
  },
  폭발: {
    desc: '분진이 격렬한 폭발을 유발하여 범위 내의 [점화],[작열],[광염]의 피해를 1.5배로 즉시 결산합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/4/4f/5ewwmi25wwh7aayw67p48ycy9zdk6gy.png',
  },
  참열: {
    desc: '대상에게 1단 피해를 추가로 입힙니다. 대상이 [냉동] 상태라면 입히는 피해가 50% 증가하고, 대상이 [동결]상태 라면 입히는 피해가 100% 증가합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/5/55/fmx3gkvajtxn8yqlt2yoaq5diu096gs.png',
  },
  부식: {
    desc: '대상에게 추가로 1단 음에너지 피해를 입힙니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/c/c4/o79arurkqbigw89mnavxqhfnozqmvrb.png',
  },
  열상: {
    desc: '대상이 피해를 받을 때마다 1단 피해를 추가로 받습니다.(5초간 지속, 피해형 특수 효과 제외)',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/d/d1/prlp1tlci5rsk2re76zdm2itcgb8418.png',
  },
  화상: {
    desc: '대상이 [일반공격]을 가할 때마다 1단 피해를 받습니다.(5회 유효)',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/8/82/1je3doeiph1fpk3hh6xx6ooc9bvt25j.png',
  },
  광폭: {
    desc: '대상의 [일반공격] 공격 속도가 최대로 증가하고, 동시에 대상이 입히는 [일반공격]의 피해가 2배로 증가합니다.(6초간 지속)',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/f/f3/pei7cm3ienya3aten0tw0nw56qnt6i6.png',
  },
  중상: {
    desc: '대상이 받는 최종 피해가 15% 증가합니다.(5초간 지속)',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/a/a3/2tjzzhe3qntu8409awf3p17nzk8nyna.png',
  },
  붕괴: {
    desc: '대상의 방어력이 30% 감소합니다.(5초간 지속)',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/e/ed/l33dfaalkfpeenh7z9hibaw68zczxl8.png',
  },
  격파: {
    desc: '대상의 [실드],[보호막]과 [역장]을 해제하고, [블록] 상태를 중단시킵니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/8/8b/4b4j7vawmht93jyb5baj09oga5h3f46.png',
  },
  관통: {
    desc: '공격이 적 사이를 관통할 수 있습니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/6/61/atlmnf54xbllnuybf8plw7fkx82ujr3.png',
  },
  발사: {
    desc: '공격이 적 사이에서 2번 튕깁니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/0/0d/dp3eb1gy2g21125hzyd4iwtip73j0lu.png',
  },
  // 마비: {
  //   desc: '데이터 미입력',
  //   thumbnail: '',
  // },
  잠식: {
    desc: '매초 대상에게 1단 음에너지 피해를 입히고, 동시에 대상이 받는 치유 효과가 50% 감소합니다.(5초간 지속)',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/7/73/7o2m2fmp1lo6wnhsq7uodot5mi82btl.png',
  },

  중단: {
    desc: '대상의 현재 동작을 방해합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/6/63/500m1gbpp6uo3xwkovxn57iz7gyyoqi.png',
  },
  기절: {
    desc: '대상을 기절시켜 전투 능력을 상실하게 만듭니다.(2초간 지속)',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/7/71/agyuheglsnrzltqluzmfi9ktbdz9t5r.png',
  },
  넉백: {
    desc: '대상의 현재 공격을 취소하고 뒤로 일정 거리 밀쳐냅니다.(대형 적에게는 무효)',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/6/6b/hv78v5mjw5xq3u8vg1cirmoziw07wmd.png',
  },
  에어본: {
    desc: '대상의 현재 공격을 취소하고 뒷열로 날려버립니다.(대형 적에게는 무효)',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/6/6a/h9jdw42yd45mmrmrk7yc3suhe5t5622.png',
  },
  냉동: {
    desc: '대상을 얼려 [일반공격]의 공격 속도를 절반으로 감소시킵니다.(6초간 지속)',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/1/1c/5muvn20de4wk2slkikan12te0oz1s86.png',
  },
  동결: {
    desc: '대상을 얼려 완전히 정지시킵니다.(6초간 지속)',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/b/b0/8tqbxixjw6ri7iyho118ff7qdr48x18.png',
  },
  빙결: {
    desc: '목표 구역을 얼려 범위 내의 적들을 완전히 정지시킵니다.(6초간 지속)\n10% 확률로 [동결]을 발동합니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/e/ed/cdrt12jbbguio6khzgky3i8m84y1bea.png',
  },
  수면: {
    desc: '수면 상태에 빠져 전투 능력을 상실합니다. 수면 상태에서 받는 최종 피해가 10% 증가합니다.(5초간 지속)',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/4/46/df0dl739hy7graengpd8wxo0efbgkfk.png',
  },
  혼란: {
    desc: '공격할 때마다 50% 확률로 공격을 취소하고 자신에게 1단의 피해를 입힙니다.(6초간 지속)',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/2/2c/63f3m0glklxx9cjw9qeyzjw0gzb0nbz.png',
  },
  족쇄: {
    desc: '대상이 [일반공격]을 사용할 수 없습니다.(6초간 지속)',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/9/9b/rml9rbi03vbfuppug358ohzrvcdd92d.png',
  },
  속박: {
    desc: '대상이 [스킬공격]을 사용할 수 없고 [일반공격]만 사용할 수 있습니다.(6초간 지속)',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/4/46/d0nlg7cg8xhfkbq5uu81edi5j91td8o.png',
  },
  저주: {
    desc: '대상이 새로운 치유 효과,공격 및 방어형 버프를 받을 수 없습니다.(6초간 지속)',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/c/c5/c8wcp14x1288pqexxxgppy37hqn2eni.png',
  },
  변신: {
    desc: '대상을 5초간 귀엽게 변신시킵니다. 변신한 대상의 공격력과 방어력이 1% 감소합니다.(중첩가능)',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/2/24/jcg9iqlaizafu5f8atku8k7oh7nol19.png',
  },
  블록: {
    desc: '블록 기간 자신이 받는 피해가 80% 감소하는 대신 [일반공격]을 사용할 수 없습니다.\n동시에 [중단]과 [기절] 효과에 면역되며 자신의 스킬 카드 사용 시 [블록] 상태가 해제됩니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/1/10/sl4h60u51cdhix35jkijiocbfzw2fjn.png',
  },
  역장: {
    desc: '[역장]을 펼쳐 모든 아군이 받는 피해를 감소시킵니다.(시간 중첩 가능)',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/3/3f/tncuypkgva1jxwcuo6ap44hax69gt2t.png',
  },
  보호막: {
    desc: '[보호막]을 펼쳐 모든 아군이 받는 피해를 감소시킵니다.(5초간 지속,시간 중첩 가능)',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/a/a7/lkz6x2ngpnvbo4tas94u4wzuzgce494.png',
  },
  은신: {
    desc: '은신 상태에 진입하여 타겟으로 지정될 수 없습니다.(중첩 시 시간 갱신됨)',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/4/49/cd6ect20a52z31ynt61h9x4pot14d2u.png',
  },
  슈퍼아머: {
    desc: '슈퍼아머 상태 시 제어 효과를 제거하고 면역을 얻습니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/b/b0/c18beh8d1arezodpuyg5jljda49el62.png',
  },
  무적: {
    desc: '무적 상태 시 모든 피해에 면역되며 제어 및 피해형 특수 효과를 제거하는 동시에 면역을 얻습니다.',
    thumbnail:
      'https://patchwiki.biligame.com/images/resonance/6/6b/8bcjxhnzb8741ngpbaqprfq21xpbxlb.png',
  },
}

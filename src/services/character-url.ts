import { RS_COLUMN, RS_FACTION, RS_GRADE } from '@/const/character/character.enum'

export const convertCharacterThumbnailUrl = (filename: string, width?: number) => {
  if (filename.indexOf('patchwiki.biligame.com') >= 0) {
    return filename
  }

  const widthKey = width ? `/w_${width}` : ''
  return `https://res.cloudinary.com/dqihpypxi/image/upload${widthKey}/v1739511122/resonance/characters/${filename}`
}

export const getFrameBgUrl = (grade: RS_GRADE, width?: number) => {
  // const widthKey = width ? `/w_${width}` : ''
  // return `https://res.cloudinary.com/dqihpypxi/image/upload${widthKey}/v1739518264/resonance/frame/${grade.toLowerCase()}-bg.png`

  if (grade === RS_GRADE.SSR) {
    return 'https://patchwiki.biligame.com/images/resonance/b/b1/oqt5a7nsygvux5c7tfxdms1rrjevorn.png'
  }
  if (grade === RS_GRADE.SR) {
    return 'https://patchwiki.biligame.com/images/resonance/7/7d/ofj8jmnge860anif9382x7w1t4rnibe.png'
  }
  if (grade === RS_GRADE.R) {
    return 'https://patchwiki.biligame.com/images/resonance/1/14/jrtmx5extu0utod8e272fea8avgve0k.png'
  }
  if (grade === RS_GRADE.N)
    return 'https://patchwiki.biligame.com/images/resonance/0/03/3in9s9u3wnl9lsm46iccf0659pntmbh.png'
}

export const transformCImage = (url: string, width: number): string => {
  // Cloudinary용
  const regex = /(upload\/)(v\d+)(\/)/
  const match = url.match(regex)

  if (match) {
    return url.replace(match[0], `${match[1]}w_${width}/${match[2]}/`)
  }

  return url
}

export const getFactionUrl = (faction: RS_FACTION, width?: number) => {
  const widthKey = width ? `/w_${width}` : ''

  let factionImageUrl

  switch (faction) {
    case RS_FACTION.GARDENERS:
      factionImageUrl =
        'https://patchwiki.biligame.com/images/resonance/f/f4/eyge7pdrsb7tugsouoz9l7ha33cutyd.png'
      break
    case RS_FACTION.SOURCE_CITADEL:
      factionImageUrl =
        'https://patchwiki.biligame.com/images/resonance/a/ad/dc60cj3zxglq3um638rpqk1hkxtptjz.png'
      break
    case RS_FACTION.COLUMBAR:
      factionImageUrl =
        'https://patchwiki.biligame.com/images/resonance/e/e3/bfe0gv5f0wyuzp3622kk5vqvglue4tr.png'
      break
    case RS_FACTION.MUNDUS:
      factionImageUrl =
        'https://patchwiki.biligame.com/images/resonance/8/86/f2926l8y1vv1v6m74uzizo5f5c1g7rf.png'
      break
    case RS_FACTION.RAILWAY:
      factionImageUrl =
        'https://patchwiki.biligame.com/images/resonance/3/31/sneyo27pmx1n09b4sr6tbiqy4xwn96g.png'
      break
    case RS_FACTION.NIGHT_CHAINS:
      factionImageUrl =
        'https://patchwiki.biligame.com/images/resonance/0/03/6s7o7ksk4gnoy66b3x526f91k354pwu.png'
      break
    case RS_FACTION.CHAOS:
      factionImageUrl =
        'https://patchwiki.biligame.com/images/resonance/8/83/r8mi7we4imbqy25pqlaleno098ckpax.png'
      break
    case RS_FACTION.CREW_STRANGER:
      factionImageUrl =
        'https://patchwiki.biligame.com/images/resonance/b/b1/s0zyzvltvl2vmqy3rd5mks69pmhyxy1.png'
      break
    default:
      break
  }
  return factionImageUrl
}

export const getColumnUrl = (column: RS_COLUMN, width?: number) => {
  // const widthKey = width ? `/w_${width}` : ''
  // const columnKey = Object.keys(RS_COLUMN).find(
  //   (key) => RS_COLUMN[key as keyof typeof RS_COLUMN] === column,
  // )
  // return `https://res.cloudinary.com/dqihpypxi/image/upload${widthKey}/v1739526939/resonance/columns/${columnKey}.png`
  if (column === RS_COLUMN.MIDDLE) {
    return 'https://patchwiki.biligame.com/images/resonance/5/51/0ug47k8s0ezkaxs6jxbjummcbj9bwjw.png'
  }
  if (column === RS_COLUMN.FRONT) {
    return 'https://patchwiki.biligame.com/images/resonance/1/1c/imdimg16tb2t2wv5w7r0ir5onr6zk98.png'
  }
  if (column === RS_COLUMN.BACK) {
    return 'https://patchwiki.biligame.com/images/resonance/d/d7/m3v6eudjr1qty8w94gkkl1zsy27pb3w.png'
  }
}

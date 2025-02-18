import { RS_COLUMN, RS_FACTION, RS_GRADE } from '@/const/character/character.enum'

export const convertCharacterThumbnailUrl = (filename: string, width?: number) => {
  const widthKey = width ? `/w_${width}` : ''
  return `https://res.cloudinary.com/dqihpypxi/image/upload${widthKey}/v1739511122/resonance/characters/${filename}`
}

export const getFrameUrl = (grade: RS_GRADE, width?: number) => {
  const widthKey = width ? `/w_${width}` : ''
  return `https://res.cloudinary.com/dqihpypxi/image/upload${widthKey}/v1739518264/resonance/frame/${grade.toLowerCase()}.png`
}

export const getFrameBgUrl = (grade: RS_GRADE, width?: number) => {
  const widthKey = width ? `/w_${width}` : ''
  return `https://res.cloudinary.com/dqihpypxi/image/upload${widthKey}/v1739518264/resonance/frame/${grade.toLowerCase()}-bg.png`
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
      factionImageUrl = 'gardeners_sljtyz.png'
      break
    case RS_FACTION.SOURCE_CITADEL:
      factionImageUrl = 'source_citadel_gjdgcy.png'
      break
    case RS_FACTION.COLUMBAR:
      factionImageUrl = 'columba_pa2epp.png'
      break
    case RS_FACTION.MUNDUS:
      factionImageUrl = 'mondus_ijhjxl.png'
      break
    case RS_FACTION.RAILWAY:
      factionImageUrl = 'railway_nr0wi3.png'
      break
    case RS_FACTION.NIGHT_CHAINS:
      factionImageUrl = 'night_chains_ycppu5.png'
      break
    case RS_FACTION.CHAOS:
      factionImageUrl = 'chaos_kkgomt.png'
      break
    case RS_FACTION.CREW_STRANGER:
      factionImageUrl = 'crew-stranger_hvasgh.png'
      break
    default:
      break
  }

  return `https://res.cloudinary.com/dqihpypxi/image/upload${widthKey}/v1739525975/resonance/factions/${factionImageUrl}`
}

export const getColumnUrl = (column: RS_COLUMN, width?: number) => {
  const widthKey = width ? `/w_${width}` : ''
  const columnKey = Object.keys(RS_COLUMN).find(
    (key) => RS_COLUMN[key as keyof typeof RS_COLUMN] === column,
  )
  return `https://res.cloudinary.com/dqihpypxi/image/upload${widthKey}/v1739526939/resonance/columns/${columnKey}.png`
}

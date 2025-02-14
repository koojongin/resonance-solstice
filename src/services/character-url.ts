import { RS_GRADE } from '@/const/character/character.enum'

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

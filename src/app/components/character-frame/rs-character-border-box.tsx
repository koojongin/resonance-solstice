import { RS_GRADE } from '@/const/character/character.enum'

export function RsCharacterBorderBox({ grade }: { grade: RS_GRADE }) {
  if (grade === RS_GRADE.N)
    return <div className="border-[4px] border-gray-700 relative w-full h-full" />
  if (grade === RS_GRADE.R)
    return <div className="border-[4px] border-blue-300 relative w-full h-full" />
  if (grade === RS_GRADE.SR)
    return <div className="border-[4px] border-purple-500 relative w-full h-full" />
  if (grade === RS_GRADE.SSR)
    return <div className="border-[4px] border-yellow-500 relative w-full h-full" />
}

const SPECIALTY_FRAME_URL =
  'https://patchwiki.biligame.com/images/resonance/3/37/hiu8mr7dyjuyvj5j0cjrcz44fvla2ql.png'

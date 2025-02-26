import { RS_GRADE } from '@/const/character/character.enum'

export function RsCharacterBorderBox({
  borderSize,
  grade,
}: {
  borderSize?: number
  grade: RS_GRADE
}) {
  const borderWidth = borderSize || 4
  if (grade === RS_GRADE.N)
    return (
      <div
        className="border-gray-700 relative w-full h-full"
        style={{ borderWidth: `${borderWidth}px` }}
      />
    )
  if (grade === RS_GRADE.R)
    return (
      <div
        className="border-blue-300 relative w-full h-full"
        style={{ borderWidth: `${borderWidth}px` }}
      />
    )
  if (grade === RS_GRADE.SR)
    return (
      <div
        className="border-purple-500 relative w-full h-full"
        style={{ borderWidth: `${borderWidth}px` }}
      />
    )
  if (grade === RS_GRADE.SSR)
    return (
      <div
        className="border-yellow-500 relative w-full h-full"
        style={{ borderWidth: `${borderWidth}px` }}
      />
    )
}

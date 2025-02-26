import { RSCharacter } from '@/const/character/character.interface'
import {
  convertCharacterThumbnailUrl,
  getColumnUrl,
  getFactionUrl,
  getFrameBgUrl,
} from '@/services/character-url'
import { RsCharacterBorderBox } from '@/app/components/character-frame/rs-character-border-box'
import { RsCardSize } from '@/app/components/character-frame/rs-card-size.enum'
import { Tooltip } from '@material-tailwind/react'

export function RsCharacterCardResponsive({
  character,
  height,
}: {
  character: RSCharacter
  height: number
}) {
  return (
    <div className="border-2 border-gray-400/80 rounded-[6px] shadow-md shadow-gray-800/70 p-[2px] cursor-pointer">
      <div className="overflow-hidden relative rounded-[4px]" style={{ height: `${height}px` }}>
        <img src={getFrameBgUrl(character.grade)} className="absolute z-0 w-full bottom-[-40px]" />
        <img
          src={convertCharacterThumbnailUrl(character.thumbnail, 140)}
          className="w-full z-10 absolute"
        />
        <div className="z-20 absolute w-[40px] flex justify-center items-center m-[4px] right-0">
          <img src={getFactionUrl(character.faction)} className="w-full" />
        </div>
        <div className="z-20 absolute w-[40px] flex justify-center items-center m-[4px] left-0">
          <img src={getColumnUrl(character.column)} className="w-full" />
        </div>
        <RsCharacterBorderBox grade={character.grade} />
      </div>
      <Tooltip content={character.name}>
        <div className="font-bold text-gray-700 mt-[4px] text-[15px] text-center truncate px-[4px]">
          {character.name}
        </div>
      </Tooltip>
    </div>
  )
}

export function RsCharacterCardResponsiveShorten({
  character,
  height,
}: {
  character: RSCharacter
  height: number
}) {
  return (
    <div className="cursor-pointer">
      <div className="overflow-hidden relative rounded-[4px]" style={{ height: `${height}px` }}>
        <img src={getFrameBgUrl(character.grade)} className="absolute z-0 w-full bottom-[-40px]" />
        <img
          src={convertCharacterThumbnailUrl(character.thumbnail, 140)}
          className="w-full z-10 absolute"
        />
        <RsCharacterBorderBox grade={character.grade} />
      </div>
    </div>
  )
}

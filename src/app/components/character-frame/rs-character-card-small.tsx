import { RSCharacter } from '@/const/character/character.interface'
import { convertCharacterThumbnailUrl, getFrameBgUrl } from '@/services/character-url'
import { RsCharacterBorderBox } from '@/app/components/character-frame/rs-character-border-box'
import { RsCardSize } from '@/app/components/character-frame/rs-card-size.enum'

export function RsCharacterCardSmall({
  character,
  size = RsCardSize.MEDIUM,
}: {
  character: RSCharacter
  size?: RsCardSize
}) {
  return (
    <div className="border-2 border-gray-400/80 rounded-[6px] shadow-md shadow-gray-800/70 p-[2px] cursor-pointer">
      <div className="w-[70px] h-[70px] overflow-hidden relative rounded-[4px]">
        <img src={getFrameBgUrl(character.grade)} className="absolute z-0 w-full bottom-[-40px]" />
        <img
          src={convertCharacterThumbnailUrl(character.thumbnail, 100)}
          className="w-full z-10 absolute"
        />
        <RsCharacterBorderBox grade={character.grade} />
      </div>
      <div className="font-bold text-gray-700 mt-[4px] text-[15px] text-center">
        {character.name}
      </div>
    </div>
  )
}

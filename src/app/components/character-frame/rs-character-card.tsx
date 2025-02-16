import { RsCardSize } from '@/app/components/character-frame/rs-card-size.enum'
import { RSCharacter } from '@/const/character/character.interface'
import { RsCharacterCardSmall } from '@/app/components/character-frame/rs-character-card-small'
import { RsCharacterCardMedium } from '@/app/components/character-frame/rs-character-card-medium'

export function RsCharacterCard({
  character,
  size = RsCardSize.MEDIUM,
}: {
  character: RSCharacter
  size?: RsCardSize
}) {
  if (size === RsCardSize.SMALL) return <RsCharacterCardSmall character={character} size={size} />
  if (size === RsCardSize.MEDIUM) return <RsCharacterCardMedium character={character} size={size} />
}

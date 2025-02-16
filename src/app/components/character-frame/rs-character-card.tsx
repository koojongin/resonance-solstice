import { RsCardSize } from '@/app/components/character-frame/rs-card-size.enum'
import { RSCharacter } from '@/const/character/character.interface'
import { RsCharacterCardSmall } from '@/app/components/character-frame/rs-character-card-small'
import { RsCharacterCardMedium } from '@/app/components/character-frame/rs-character-card-medium'
import { useRouter } from 'next/navigation'

export function RsCharacterCard({
  character,
  size = RsCardSize.MEDIUM,
}: {
  character: RSCharacter
  size?: RsCardSize
}) {
  const router = useRouter()
  const routeToDetail = (selectedCharacter: RSCharacter) => {
    if (!selectedCharacter) return
    router.push(`/characters/${character.originName}`)
  }

  if (size === RsCardSize.SMALL)
    return (
      <div onClick={() => routeToDetail(character)}>
        <RsCharacterCardSmall character={character} size={size} />
      </div>
    )
  if (size === RsCardSize.MEDIUM)
    return (
      <div onClick={() => routeToDetail(character)}>
        <RsCharacterCardMedium character={character} size={size} />
      </div>
    )
}

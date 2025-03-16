import { RecommendationDeck } from '@/app/rd/rd-decks.const'
import { CHARACTER_DETAIL } from '@/const/character/character-detail.const'
import { RecommendationUserDeck } from '@/app/rd/user/user-deck.interface'

export function injectCharacterDetail(
  originDeck: RecommendationDeck | RecommendationUserDeck | undefined,
): RecommendationDeck | RecommendationUserDeck | undefined {
  if (!originDeck) return originDeck
  const fixedCharacters = originDeck.characters.map((characterData) => {
    const { character } = characterData
    const detail = CHARACTER_DETAIL[character.originName]
    const fixedCharacter = {
      ...character,
      detail,
    }
    return {
      ...characterData,
      character: fixedCharacter,
    }
  })

  return {
    ...originDeck,
    characters: fixedCharacters,
  }
}

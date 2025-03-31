import { RS_CHARACTER_DICT } from '@/const/character/character.const'
import { RecommendationUserDeck } from '@/app/rd/user/user-deck.interface'

export const injectCharacterDetail = (deck: RecommendationUserDeck) => {
  const fixedDeck = { ...deck }
  fixedDeck.characters = fixedDeck.characters.map((c: any) => {
    return {
      character: RS_CHARACTER_DICT[c.name],
      equipments: (c?.equipments || []).map((equipment: any) => equipment?.name),
    }
  })
  return fixedDeck
}

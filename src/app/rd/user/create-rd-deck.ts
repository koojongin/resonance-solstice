import { RecommendationDeck } from '@/app/rd/rd-decks.const'

export type CreateRecommendationDeck = Omit<RecommendationDeck, 'characters' | 'desc'> & {
  desc: string
  characters: Array<undefined | { name: string; equipments?: Array<{ name: string } | undefined> }>
  password: string
  usePreview: boolean
}

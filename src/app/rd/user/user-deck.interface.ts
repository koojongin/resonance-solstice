import { RecommendationDeck } from '@/app/rd/rd-decks.const'
import { MongooseDocument } from '@/const/api/mongoose-document.interface'

export interface RecommendationUserDeck extends Omit<RecommendationDeck, 'id'>, MongooseDocument {
  skillDict: object
  reads: number
  usePreview?: boolean
}

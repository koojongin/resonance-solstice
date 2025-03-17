import { MongooseDocument } from '@/const/api/mongoose-document.interface'

export interface Comment extends MongooseDocument {
  ip: string
  content: string
  refId: string
  target: string
}

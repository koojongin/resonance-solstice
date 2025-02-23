import { ARCHIVE_CARD_MECHANISM } from '@/const/archive/card.const'
import { ARCHIVE_ABILITIES } from '@/const/archive/ability.const'

export const TOTAL_ARCHIVE_MAP = {
  ...ARCHIVE_ABILITIES,
  ...ARCHIVE_CARD_MECHANISM,
}
export const TOTAL_ARCHIVES = [
  Object.keys(TOTAL_ARCHIVE_MAP).map((key) => ({
    name: key,
    ...TOTAL_ARCHIVE_MAP[key],
  })),
].flat()

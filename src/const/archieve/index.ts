import { ARCHIEVE_CARD_MECHANISM } from '@/const/archieve/card.const'
import { ARCHIEVE_ABILITIES } from '@/const/archieve/ability.const'

export const TOTAL_ARCHIVE_MAP = {
  ...ARCHIEVE_ABILITIES,
  ...ARCHIEVE_CARD_MECHANISM,
}
export const TOTAL_ARCHIVES = [
  Object.keys(TOTAL_ARCHIVE_MAP).map((key) => ({
    name: key,
    ...TOTAL_ARCHIVE_MAP[key],
  })),
].flat()

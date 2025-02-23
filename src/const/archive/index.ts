import { ARCHIVE_CARD_MECHANISM } from '@/const/archive/card.const'
import { ARCHIVE_ABILITIES } from '@/const/archive/ability.const'
import { CHARACTER_SKILLS } from '@/const/character/character-skill.const'

export const TOTAL_ARCHIVE_MAP = {
  ...ARCHIVE_ABILITIES,
  ...ARCHIVE_CARD_MECHANISM,
  ...CHARACTER_SKILLS,
}
export const TOTAL_ARCHIVES = [
  Object.keys(TOTAL_ARCHIVE_MAP).map((key) => ({
    name: key,
    ...TOTAL_ARCHIVE_MAP[key],
  })),
].flat()

import { RS_FACTION, RS_GRADE } from '@/const/character/character.enum'
import {
  MAPPED_ALL_EQUIPMENTS_R,
  MAPPED_ALL_EQUIPMENTS_SR,
  MAPPED_ALL_EQUIPMENTS_SSR,
} from '@/const/archive/equipment.const'
import { ExtendedUnionRSItem } from '@/const/material/index.type'

export const getFilteredIncludedItems = (
  faction: RS_FACTION,
  grade: RS_GRADE,
  isSameRate?: boolean,
): ExtendedUnionRSItem[] => {
  const filtered = getMappedData(grade).filter((e) => e.faction === faction)

  if (isSameRate) {
    return mapByDropRate(filtered, 100 / filtered.length) as ExtendedUnionRSItem[]
  }
  return filtered as ExtendedUnionRSItem[]
}

export const getSSRMixedIncludedItems = (faction: RS_FACTION) => {
  const filteredSSR = getFilteredIncludedItems(faction, RS_GRADE.SSR)
  const filteredSR = getFilteredIncludedItems(faction, RS_GRADE.SR)
  const filteredR = getFilteredIncludedItems(faction, RS_GRADE.R)

  return mapByDropRate(filteredSSR, 20 / filteredSSR.length)
    .concat(mapByDropRate(filteredSR, 30 / filteredSR.length))
    .concat(mapByDropRate(filteredR, 50 / filteredR.length))
}

export const getSRMixedIncludedItems = (faction: RS_FACTION) => {
  const filteredSSR = getFilteredIncludedItems(faction, RS_GRADE.SSR)
  const filteredSR = getFilteredIncludedItems(faction, RS_GRADE.SR)
  const filteredR = getFilteredIncludedItems(faction, RS_GRADE.R)

  return mapByDropRate(filteredSSR, 10 / filteredSSR.length)
    .concat(mapByDropRate(filteredSR, 20 / filteredSR.length))
    .concat(mapByDropRate(filteredR, 70 / filteredR.length))
}

export const getRMixedIncludedItems = (faction: RS_FACTION) => {
  const filteredSSR = getFilteredIncludedItems(faction, RS_GRADE.SSR)
  const filteredSR = getFilteredIncludedItems(faction, RS_GRADE.SR)
  const filteredR = getFilteredIncludedItems(faction, RS_GRADE.R)

  return mapByDropRate(filteredSSR, 5 / filteredSSR.length)
    .concat(mapByDropRate(filteredSR, 10 / filteredSR.length))
    .concat(mapByDropRate(filteredR, 85 / filteredR.length))
}

function mapByDropRate(items: any[], rate: number) {
  return items.map((item: any) => {
    return { ...item, dropRate: rate }
  })
}

function getMappedData(grade: RS_GRADE) {
  if (grade === RS_GRADE.SSR) return MAPPED_ALL_EQUIPMENTS_SSR
  if (grade === RS_GRADE.SR) return MAPPED_ALL_EQUIPMENTS_SR
  if (grade === RS_GRADE.R) return MAPPED_ALL_EQUIPMENTS_R
  return []
}

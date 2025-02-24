'use client'

import createKey from '@/services/key-generator'
import { ALL_NAMED_MAPS } from '@/const/archive/named-map.const'
import { useNextDepthNavigator } from '@/services/navigation'
import MapNamedListBox from '@/app/map/named/named-list-box'

export default function MapNamedPage() {
  const { router } = useNextDepthNavigator()
  const list = ALL_NAMED_MAPS
  return <MapNamedListBox />
}

import { ALL_NAMED_MAPS } from '@/const/archive/named-map.const'
import MapNamedListBox from '@/app/map/named/named-list-box'

export default function MapNamedLayout({ children }: { children: React.ReactNode }) {
  const list = ALL_NAMED_MAPS
  return (
    <div className="flex gap-[10px]">
      <MapNamedListBox />
      <>{children}</>
    </div>
  )
}

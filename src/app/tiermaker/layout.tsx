import { TierMakerSideBar } from '@/app/tiermaker/tiermaker-side-bar'

export default function TierMakerLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-[10px]">
      <TierMakerSideBar />
      <div className="w-full">{children}</div>
    </div>
  )
}

import { TrainMenuBox } from '@/app/train/train-menu-box'

export default function TrainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-[10px]">
      <TrainMenuBox />
      <div className="w-full">{children}</div>
    </div>
  )
}

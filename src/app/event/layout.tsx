import { EventMenuBox } from '@/app/event/event-menu-box'

export default function TrainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-[10px]">
      <EventMenuBox />
      <div className="w-full">{children}</div>
    </div>
  )
}

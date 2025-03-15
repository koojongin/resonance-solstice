import { EVENT_START_DASH_DATA } from '@/app/event/start-dash/start-dash.const'
import { GradientButton } from '@/app/components/button/gradient-button'

export default function EventStartDashPage() {
  return (
    <div className="flex flex-col gap-[10px]">
      {/* <div className="flex justify-center gap-[10px] items-center bg-gray-700/50"> */}
      <GradientButton className="flex justify-center gap-[10px] items-center shadow-md shadow-blue-400">
        <img
          className="w-[300px]"
          src="https://imgproxy.shelter.id/sig/w:711/rt:fill/Z3M6Ly9zaGVsdGVyLW1lZGlhL3UvYkI1OHJHc2Z1SU0wVEQ2SUtKNDNFTTM3Ukt4MS9pbWFnZXMvMTc0MjAyNDUzNzg3M18xODc5ODgzMC0xY2I0LTRlYzYtYmVkOS1kNWU4ZGRhYTY4OTYucG5n"
        />
        <img
          className="w-[400px]"
          src="https://imgproxy.shelter.id/sig/w:775/rt:fill/Z3M6Ly9zaGVsdGVyLW1lZGlhL3UvYkI1OHJHc2Z1SU0wVEQ2SUtKNDNFTTM3Ukt4MS9pbWFnZXMvMTc0MjAyNDUzNzg3M19hZWY1MWZkMi1jMzI2LTQyZjctYmRkZS03ZTY2YjFhYmJlZDcucG5n"
        />
      </GradientButton>
      {/* </div> */}
      <div className="flex flex-wrap">
        {EVENT_START_DASH_DATA.map((imgSrc, index) => {
          return (
            <div
              key={`start_dash_img${index}`}
              className={`w-[200px] relative ${index % 6 !== 0 && 'ml-[-75px]'} ${index > 5 && 'mt-[-12px]'}`}
            >
              <img src={imgSrc} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

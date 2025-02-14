'use client'

import { useRouter } from 'next/navigation'

export default function MainSideBar() {
  const router = useRouter()

  const menuCss = ` hover:bg-gray-200 border border-l-0 border-gray-400 px-[8px] py-[4px]`
  return (
    <div className="py-[10px] text-[15px] flex cursor-pointer border-b border-gray-300 mb-[10px]">
      <div className={`border-l-[1px]${menuCss}`} onClick={() => router.push('/characters')}>
        캐릭터
      </div>
      {/* <div className={menuCss} onClick={() => router.push('/alliance-operation')}> */}
      {/*  연합 작전 */}
      {/* </div> */}
      {/* <div className={menuCss} onClick={() => router.push('/gatcha')}> */}
      {/*  가챠 시뮬 */}
      {/* </div> */}
      {/* <div className={menuCss} onClick={() => router.push('/rd')}> */}
      {/*  추천 덱 */}
      {/* </div> */}
      {/* <div className={menuCss} onClick={() => router.push('/guild-recruitment')}> */}
      {/*  길드 모집 */}
      {/* </div> */}
      {/* <div */}
      {/*  className={`ml-auto border-l-[1px] ${menuCss}`} */}
      {/*  onClick={() => router.push('/update-log')} */}
      {/* > */}
      {/*  업데이트 로그 */}
      {/* </div> */}
    </div>
  )
}

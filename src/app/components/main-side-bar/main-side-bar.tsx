'use client'

import { useRouter } from 'next/navigation'

export default function MainSideBar() {
  const router = useRouter()

  const menuCss = ` hover:bg-gray-200 border border-l-0 border-gray-400 px-[8px] py-[4px]`
  return (
    <div className="py-[10px] text-[22px] flex cursor-pointer border-b border-gray-300 mb-[10px] ff-dh text-[18px] text-gray-700">
      <div className={`border-l-[1px]${menuCss}`} onClick={() => router.push('/home')}>
        메인
      </div>
      <div className={`${menuCss}`} onClick={() => router.push('/characters')}>
        캐릭터
      </div>
      <div className={menuCss} onClick={() => router.push('/rd')}>
        추천덱
      </div>
      <div className={menuCss} onClick={() => router.push('/reset-marathon')}>
        티어표
      </div>
      <div className={menuCss} onClick={() => router.push('/shop')}>
        상점
      </div>
      {/* <div */}
      {/*  className={`ml-auto border-l-[1px] ${menuCss}`} */}
      {/*  onClick={() => router.push('/update-log')} */}
      {/* > */}
      {/*  업데이트 로그 */}
      {/* </div> */}
    </div>
  )
}

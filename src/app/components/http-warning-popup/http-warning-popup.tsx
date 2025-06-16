'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'

const STORAGE_KEY = 'hideHttpPopupUntil0616'

export default function HttpWarningPopup() {
  const [visible, setVisible] = useState(false)
  const [hideForWeek, setHideForWeek] = useState(false)

  useEffect(() => {
    // HTTPS가 아니면 아무 일도 안 함
    // if (typeof window === 'undefined') return
    // if (window.location.protocol !== 'https:') return

    // 로컬 스토리지 확인
    const hideUntil = localStorage.getItem(STORAGE_KEY)
    const now = new Date()

    if (!hideUntil || new Date(hideUntil) < now) {
      setVisible(true)
    }
  }, [])

  const handleClose = () => {
    if (hideForWeek) {
      const until = new Date()
      until.setDate(until.getDate() + 7)
      localStorage.setItem(STORAGE_KEY, until.toISOString())
    }
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      style={{
        background: 'rgba(255, 100, 100, 0.95)',
        color: 'white',
        padding: '1rem',
        zIndex: 1000,
        textAlign: 'center',
      }}
    >
      <div className="flex gap-[10px] flex-col text-[18px]">
        <button
          onClick={handleClose}
          className="ff-ng text-[24px] shadow-md shadow-red-30 rounded"
          style={{
            marginTop: '0.5rem',
            padding: '0.3rem 0.6rem',
            background: 'white',
            color: 'black',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          닫기
        </button>
        <div className="text-[18px]">
          현재 HTTPS 인증서(유료여서 ㅠㅠ)가 만료되어 서버 데이터를 가져오지 못합니다.
        </div>
        <div className="font-bold text-[20px]">임시 방편으로 아래 방법을 따라해주세요</div>
        <div className="bg-white text-gray-900 p-[10px] text-[20px] flex flex-col gap-[10px]">
          <div>
            1.{' '}
            <Link href="https://resonance-solstice.store:3001/">
              https://resonance-solstice.store:3001/
            </Link>
            로 접속해주세요.
          </div>
          <hr />
          <div className="text-center flex justify-center flex-col items-center">
            <div>2. 아래 화면이 나오면 이미지 순서대로 클릭해주세요.</div>
            <img
              className="w-full max-w-[500px]"
              src="https://imgproxy.shelter.id/sig/w:938/rt:fill/Z3M6Ly9zaGVsdGVyLW1lZGlhL3UvYkI1OHJHc2Z1SU0wVEQ2SUtKNDNFTTM3Ukt4MS9pbWFnZXMvMTc1MDA0MjI3MjY3M19mODA3ZTEyMy0wNmVjLTRmNGYtOTdjYi02ZGNjMDhhY2Y0YWMucG5n"
            />
          </div>
          <hr />
          <div className="text-center flex justify-center flex-col items-center">
            <div>3. 여기까지 했다면 다시 원래 원래 사이트로 돌아가서 새로고침하시면 잘됩니다.</div>
          </div>
          <hr />
          <div className="text-center flex justify-center flex-col items-center">
            <div>4. 만약 다시 경고를 켜시려면 아래와 같이 해주시면 됩니다. </div>
            <img
              className="w-full max-w-[500px]"
              src="https://imgproxy.shelter.id/sig/w:534/rt:fill/Z3M6Ly9zaGVsdGVyLW1lZGlhL3UvYkI1OHJHc2Z1SU0wVEQ2SUtKNDNFTTM3Ukt4MS9pbWFnZXMvMTc1MDA0MjI3MjY3NF8yNWI1YTZhZS05YzkyLTQ2NzgtOTUxNS00ZDgzYjNiZjE1YmYucG5n"
            />
          </div>
        </div>
      </div>
      <label style={{ marginTop: '0.5rem', display: 'block' }} className="text-[30px]">
        <input
          type="checkbox"
          checked={hideForWeek}
          onChange={(e) => setHideForWeek(e.target.checked)}
        />
        일주일간 보지 않기
      </label>
    </div>
  )
}

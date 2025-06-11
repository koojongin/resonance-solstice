'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'

const STORAGE_KEY = 'hideHttpPopupUntil'

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
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        background: 'rgba(255, 100, 100, 0.95)',
        color: 'white',
        padding: '1rem',
        zIndex: 1000,
        textAlign: 'center',
      }}
    >
      <div className="flex gap-[10px] flex-col text-[30px]">
        <div>현재 HTTPS 인증서가 만료되어 서버 데이터를 가져오지못합니다.</div>
        <div>임시 방편으로 당분간은 http로 접속해 주세요.</div>
        <Link href="http://resonance-solstice.vercel.app/">
          <strong>http://resonance-solstice.vercel.app/</strong>
        </Link>
      </div>
      <label style={{ marginTop: '0.5rem', display: 'block' }} className="text-[30px]">
        <input
          type="checkbox"
          checked={hideForWeek}
          onChange={(e) => setHideForWeek(e.target.checked)}
        />
        일주일간 보지 않기
      </label>
      <button
        onClick={handleClose}
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
    </div>
  )
}

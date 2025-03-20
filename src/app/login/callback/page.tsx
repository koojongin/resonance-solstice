'use client'

import { useEffect } from 'react'

const isProduction = process.env.NODE_ENV === 'production'
export default function LoginCallback() {
  const loginWithNaver = async (hash: string) => {
    const url = `${isProduction ? 'https://resonance-solstice.store:3001' : 'http://localhost:3001'}/auth/naver/oauth2?${hash}`
    // const result = await axios.get(`http://localhost:3001/auth/naver/oauth2?${hash}`)
    window.location.href = url
  }

  useEffect(() => {
    const hash = window.location.hash.substring(1)
    loginWithNaver(hash)
  }, [])

  return <div>로그인 하는중...</div>
}

'use client'

import axios from 'axios'
import { useEffect } from 'react'
import { NaverLoginButton } from '@/app/login/naver-login-button'

const isProduction = process.env.NODE_ENV === 'production'
export default function LoginPage() {
  return (
    <div className="flex flex-col gap-[4px] w-full justify-center items-center min-h-[200px]">
      <div>로그인</div>
      <NaverLoginButton />
    </div>
  )
}

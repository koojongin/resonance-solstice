'use client'

import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { api } from '@/services/api/api.interceptor'
import { useNextDepthNavigator } from '@/services/navigation'
import { useParams } from 'next/navigation'

export default function RdUserDeckCheckPasswordPage() {
  const { id } = useParams()
  const { router } = useNextDepthNavigator()
  const [password, setPassword] = useState<string>()
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }

  const checkPassword = async () => {
    if (!password) return toast('비밀번호를 입력하세요.')
    try {
      await api.post(`/recommendation-deck/check-password/${id}`, { password })
      router.push(`/rd/user/detail/${id}/edit?password=${password}`)
    } catch (error) {
      const { response }: any = error || {}
      const { data } = response || {}
      toast(data?.message || '알수없는 에러')
      setPassword('')
      return
    }
  }

  return (
    <div className="flex flex-col gap-[10px] min-h-[500px] items-center justify-center">
      <div className="text-center">비밀번호를 입력하세요.</div>
      <input
        type="password"
        className="w-[200px] border border-blue-gray-900 p-[5px] text-blue-gray-900 text-center"
        placeholder="비밀번호를 입력하세요."
        value={password}
        onChange={handlePasswordChange}
        onKeyUp={async (e) => {
          if (e.key === 'Enter') {
            await checkPassword()
          }
        }}
      />
      <div
        onClick={async () => {
          await checkPassword()
        }}
        className="bg-green-500 w-[200px] flex items-center justify-center p-[10px] text-white text-[20px] cursor-pointer"
      >
        확인
      </div>
    </div>
  )
}

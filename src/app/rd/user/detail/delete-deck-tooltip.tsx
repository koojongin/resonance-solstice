import React, { useState } from 'react'
import { api } from '@/services/api/api.interceptor'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'

export function DeleteDeckTooltip({ id }: { id: string }) {
  const router = useRouter()
  const [password, setPassword] = useState<string>()
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }

  const deleteDeck = async () => {
    if (!password) return toast('비밀번호를 입력하세요.')
    try {
      await api.delete(`/recommendation-deck/delete/${id}`, { data: { password } })
      toast('덱이 정상적으로 삭제되었습니다.')
      router.push('/rd/user')
    } catch (error) {
      const { response }: any = error || {}
      const { data } = response || {}
      toast(data?.message || '알수없는 에러')
      setPassword('')
      return
    }
  }

  return (
    <div className="border p-[10px] rounded bg-white shadow-md min-w-[200px] flex flex-col">
      <input
        type="password"
        className="border border-blue-gray-900 p-[5px] text-blue-gray-900 text-center"
        placeholder="비밀번호를 입력하세요."
        value={password}
        onChange={handlePasswordChange}
      />
      <div
        className="bg-red-400 flex items-center justify-center p-[5px] cursor-pointer ff-dh text-[20px]"
        onClick={() => deleteDeck()}
      >
        삭제하기
      </div>
      <div className="text-blue-gray-900 ff-dh text-[14px] flex items-center">
        * 클릭 시 박스가 고정됩니다.
      </div>
    </div>
  )
}

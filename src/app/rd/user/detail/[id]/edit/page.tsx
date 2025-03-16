'use client'

import { UserDeckPostBox } from '@/app/rd/user/user-deck-post-box'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function RdUserDeckDetailEditPage() {
  const { id } = useParams()
  const [password, setPassword] = useState<string>()
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    setPassword(params.get('password') || '')
  }, [])

  return (
    <>
      {!password && <div>Loading...</div>}
      {password && <UserDeckPostBox id={id as string} password={password} />}
    </>
  )
}

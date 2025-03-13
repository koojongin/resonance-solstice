'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    router.push('/home') // 원하는 첫 페이지 경로
  }, [])

  return null
}

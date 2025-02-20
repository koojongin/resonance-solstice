'use client'

import { useRouter, usePathname } from 'next/navigation'

export function useNextDepthNavigator() {
  const router = useRouter()
  const pathname = usePathname()

  const goToNextDepth = (nextPath: string) => {
    router.push(`${pathname}/${nextPath}`)
  }

  const openNewTab = (url: string) => {
    window.open(url, '_blank')
  }

  return { goToNextDepth, router, openNewTab }
}

'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import ReactGA from 'react-ga4'

const GA_TAG_NAME = 'G-2H41MK0VS9'

export default function GoogleAnalyticsComponent() {
  const pathname = usePathname()
  const [initialized, setInitialized] = useState(false)

  useEffect(() => {
    if (initialized) {
      ReactGA.send({ hitType: 'pageview', page: pathname })
    }
  }, [initialized, pathname])

  useEffect(() => {
    ReactGA.initialize(GA_TAG_NAME)
    setInitialized(true)
  }, [])

  return <></>
}

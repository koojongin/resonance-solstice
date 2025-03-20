'use client'

import { useEffect } from 'react'

const isProduction = process.env.NODE_ENV === 'production'
export function NaverLoginButton() {
  useEffect(() => {
    const script1 = document.createElement('script')
    script1.src = 'https://static.nid.naver.com/js/naverLogin_implicit-1.0.3.js'
    script1.charset = 'utf-8'
    document.body.appendChild(script1)

    const script2 = document.createElement('script')
    script2.src = 'http://code.jquery.com/jquery-1.11.3.min.js'
    document.body.appendChild(script2)

    script2.onload = () => {
      const CLIENT_ID = 'v0_GmaBy_pDbtvmyw0nC'
      const CALLBACK_URL = `${!isProduction ? 'http://localhost:3001' : 'https://resonance-solstice.store:3001'}/login/callback`
      // eslint-disable-next-line new-cap
      const naver_id_login = new window.naver_id_login(CLIENT_ID, CALLBACK_URL)
      const state = naver_id_login.getUniqState()
      naver_id_login.setButton('green', 3, 40)
      naver_id_login.setState(state)
      naver_id_login.init_naver_id_login()
    }

    return () => {
      document.body.removeChild(script1)
      document.body.removeChild(script2)
    }
  }, [])

  return <div id="naver_id_login" />
}

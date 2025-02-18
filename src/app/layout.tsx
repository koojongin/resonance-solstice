import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { Analytics } from '@vercel/analytics/react'
import { Do_Hyeon, Nanum_Gothic } from 'next/font/google'
import React, { ReactNode } from 'react'
import MainSideBar from '@/app/components/main-side-bar/main-side-bar'
import MainHeaderBar from '@/app/components/main-side-bar/main-header-bar'
import { cls } from '@/services/util'
import GoogleAnalyticsComponent from '@/services/google-analytics'

const nanumGothic = Nanum_Gothic({
  subsets: ['latin'],
  weight: ['400', '700', '800'],
})

const doHyeonKr = Do_Hyeon({
  subsets: ['latin'],
  weight: ['400'],
})

const geistSans = localFont({
  src: '../fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: '../fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export const metadata: Metadata = {
  title: '레조넌스',
  description: '레조넌스',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link href="./globals.css" rel="stylesheet" />
        <meta name="application-name" content="레조넌스: 솔스티스 정보 공유 사이트" />
        <meta name="og:site_name" content="레조넌스: 솔스티스 정보 공유 사이트" />
        <meta name="description" content="레조넌스: 솔스티스 정보 공유 사이트" />
        <meta name="keywords" content="레조넌스, resonance, solstice" />
        <meta property="og:title" content="레조넌스: 솔스티스 정보 공유 사이트" />
        <meta name="robots" content="index, follow" />
        <meta name="thumbnail" content="https://res.ujoygames.com/krImg/kv.jpg" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dqihpypxi/image/upload/v1739699861/resonance/etc/banner_001_bkltao.png"
        />
        <meta property="og:url" content="https://resonance-solstice.vercel.app/" />
        <meta
          name="google-site-verification"
          content="tF9OdRRToB9MDttTVe3pdTXv1M5m2yoYbhHIvySVtgw"
        />
      </head>
      <body className={`relative bg-contain ${cls(nanumGothic.className)}`}>
        <div
          className="absolute -z-10 w-full h-full opacity-20 bg-contain"
          style={{
            backgroundPosition: '-750px 0px',
            backgroundImage: `url('https://patchwiki.biligame.com/images/resonance/5/5d/d1t23jamr85uos95wl2djx5x2zsh73d.jpg')`,
          }}
        />
        <GoogleAnalyticsComponent />
        <Analytics />
        <div
          className="bg-center bg-cover min-w-full h-full absolute -z-10 opacity-10 bg-repeat"
          style={{ backgroundImage: `url('/img/bg-low.jpg')` }}
        />
        <div className="flex flex-col w-full">
          <div className="w-full bg-[#3d414d]">
            <div className="w-[980px] m-auto py-[10px]">
              <MainHeaderBar />
            </div>
          </div>
          <div className="w-full flex">
            <div className="w-[980px] m-auto bg-white px-[10px]">
              <MainSideBar />
            </div>
          </div>
          <div className="w-[980px] min-h-[700px] m-auto bg-white px-[10px]">{children}</div>
        </div>
        <div className="bg-white/50 flex justify-center p-[8px] py-[20px] text-[14px] mt-[100px]">
          2025년 02월 14일, 이 프로젝트가 시작되었습니다.
        </div>
      </body>
    </html>
  )
}

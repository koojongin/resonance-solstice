import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { Analytics } from '@vercel/analytics/react'
import { Nanum_Gothic } from 'next/font/google'
import React, { ReactNode } from 'react'
import MainSideBar from '@/app/components/main-side-bar/main-side-bar'
import MainHeaderBar from '@/app/components/main-side-bar/main-header-bar'

const notoSansKr = Nanum_Gothic({
  subsets: ['latin'], // 또는 preload: false
  weight: ['400', '700', '800'], // 가변 폰트가 아닌 경우, 사용할 fontWeight 배열
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

const cls = (...classnames: string[]) => {
  return classnames.join(' ')
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
      </head>
      <body className={`relative ${cls(notoSansKr.className)}`}>
        <Analytics />
        <div
          className="bg-center bg-cover min-w-full h-full absolute -z-10 opacity-10 bg-repeat"
          style={{ backgroundImage: `url('/img/bg-low.jpg')` }}
        />
        <div className="flex flex-col w-full">
          <div className="w-full bg-[#3d414d]">
            <div className="w-[960px] m-auto py-[10px]">
              <MainHeaderBar />
            </div>
          </div>
          <div className="w-full">
            <div className="w-[960px] m-auto">
              <MainSideBar />
            </div>
          </div>
          <div className="w-[960px] min-h-[700px] m-auto">{children}</div>
        </div>
        <div className="bg-white/50 flex justify-center p-[8px] py-[20px] text-[14px] mt-[100px]">
          2025년 02월 14일, 이 프로젝트가 시작되었습니다.
        </div>
      </body>
    </html>
  )
}

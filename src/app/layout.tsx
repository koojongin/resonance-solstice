import './globals.css'
import { Analytics } from '@vercel/analytics/react'
import React, { ReactNode } from 'react'
import MainSideBar from '@/app/components/main-side-bar/main-side-bar'
import MainHeaderBar from '@/app/components/main-side-bar/main-header-bar'
import GoogleAnalyticsComponent from '@/services/google-analytics'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import { Do_Hyeon, Nanum_Gothic } from 'next/font/google'

const nanumGothic = Nanum_Gothic({
  subsets: ['latin'],
  weight: ['400', '700', '800'],
})

const doHyeon = Do_Hyeon({
  subsets: ['latin'],
  weight: ['400'],
})
export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <title>레조넌스: 솔스티스 정보 공유 사이트</title>
        <meta name="application-name" content="레조넌스: 솔스티스 정보 공유 사이트" />
        <meta name="og:site_name" content="레조넌스: 솔스티스 정보 공유 사이트" />
        <meta name="description" content="레조넌스: 솔스티스 정보 공유 사이트" />
        <meta name="keywords" content="레조넌스, resonance, solstice" />
        <meta property="og:title" content="레조넌스: 솔스티스 정보 공유 사이트" />
        <meta property="title" content="레조넌스: 솔스티스 정보 공유 사이트" />
        <meta name="robots" content="index, follow" />
        <meta name="thumbnail" content="https://res.ujoygames.com/krImg/kv.jpg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
        <meta
          property="og:image"
          content="https://imgproxy.shelter.id/sig/Z3M6Ly9zaGVsdGVyLW1lZGlhL3UvbmdBNTZkN1VqWFpnQVhDQXd3WlBack5SQmZKMy9pbWFnZXMvMTcyNzQ5MTI5NDM4MF81NDM2M2ExYy0zODkxLTQ0MGQtOWVlNS0zZTlhMjgxNzUyMzEuanBn?v=12345"
        />
        <meta property="og:url" content="https://resonance-solstice.vercel.app/" />
        <meta
          name="google-site-verification"
          content="tF9OdRRToB9MDttTVe3pdTXv1M5m2yoYbhHIvySVtgw"
        />
        <meta name="naver-site-verification" content="0263a755188fb915d3befafe6d6e3b9ccaa56736" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
          integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      {/* <body className={`relative bg-contain ${cls(nanumGothic.className)}`}> */}
      <body className={`relative bg-contain ff-sdn ${nanumGothic.className} ${doHyeon.className}`}>
        <ToastContainer className="custom-toast-container" />
        <div
          className="absolute -z-10 w-full h-full opacity-20 bg-contain"
          style={{
            backgroundPosition: '-750px 0px',
            backgroundImage: `url('https://patchwiki.biligame.com/images/resonance/5/5d/d1t23jamr85uos95wl2djx5x2zsh73d.jpg')`,
          }}
        />

        {['development', 'preview', 'production'].includes(process.env.VERCEL_ENV || '') && (
          <GoogleAnalyticsComponent />
        )}
        <Analytics />
        <div className="flex flex-col w-full min-h-[90vh]">
          <div className="w-full bg-[#3d414d]">
            <div className="w-[980px] m-auto py-[10px] sm:w-full px-[10px]">
              <MainHeaderBar />
            </div>
          </div>
          <div className="w-full flex">
            <div className="w-[980px] m-auto bg-white px-[10px]">
              <MainSideBar />
            </div>
          </div>
          <div className="w-[980px] min-h-[700px] mx-auto bg-white px-[10px] pb-[10px] sm:max-w-full">
            {children}
          </div>
        </div>
        <div className="bg-white/50 flex justify-center p-[8px] py-[50px] text-[14px]">
          2025년 02월 14일, 이 프로젝트가 시작되었습니다.
        </div>
      </body>
    </html>
  )
}

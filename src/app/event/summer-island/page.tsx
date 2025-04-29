'use client'

import React from 'react'
import { CommentBox } from '@/app/components/comment/comment-box'
import { CommentTarget } from '@/const/api/comment-target'
import Link from 'next/link'
import { GradientButton } from '@/app/components/button/gradient-button'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css'
import { Navigation, Mousewheel, Pagination } from 'swiper/modules'

export default function EventSummerIslandPage() {
  const previewImages = [
    'https://patchwiki.biligame.com/images/resonance/thumb/0/09/4qpo3p01p5zns0xp81noowten7n8gtt.png/750px-%E6%B5%B7%E5%B2%9B%E6%94%BB%E7%95%A5_01.png',
    'https://patchwiki.biligame.com/images/resonance/thumb/8/80/8lx6r0v7wfb2tc74etdxbrbbftfmrmz.png/750px-%E6%B5%B7%E5%B2%9B%E6%94%BB%E7%95%A5_02.png',
    'https://patchwiki.biligame.com/images/resonance/thumb/6/68/dqv78bvxo7efq7j1fxf3reksw6h85pc.png/750px-%E6%B5%B7%E5%B2%9B%E6%94%BB%E7%95%A5_03.png',
    'https://patchwiki.biligame.com/images/resonance/thumb/8/85/chc2wfwlc9jqyccti3k7ok5166uy4rj.png/750px-%E6%B5%B7%E5%B2%9B%E6%94%BB%E7%95%A5_04.png',
    'https://patchwiki.biligame.com/images/resonance/thumb/f/fc/01zo6hrkllxgdn1xlz4z9529tr495n5.png/750px-%E6%B5%B7%E5%B2%9B%E6%94%BB%E7%95%A5_05.png',
  ]

  return (
    <div className="flex flex-col gap-[10px]">
      <div>
        <GradientButton className="p-[4px] rounded shadow-2xl mr-auto">
          <Link
            href="https://wiki.biligame.com/resonance/%E5%BC%80%E6%8B%93%EF%BC%81%E6%B5%B7%E5%B2%9B%E5%BA%A6%E5%81%87%E7%89%A9%E8%AF%AD%EF%BC%81"
            target="_blank"
          >
            bilibili 공략 링크
          </Link>
        </GradientButton>{' '}
        - 재료 및 미션 테이블을 조회 할 수있습니다.
      </div>
      <div>
        <img src="https://imgproxy.shelter.id/sig/w:1200/rt:fill/Z3M6Ly9zaGVsdGVyLW1lZGlhL3UvYkI1OHJHc2Z1SU0wVEQ2SUtKNDNFTTM3Ukt4MS9pbWFnZXMvMTc0MjEyNTY5MzQ4NV80MWViM2Q5MC0wOGQ0LTQzNzQtOTg0Mi05MTI5ZWYzZjkzNmIucG5n" />
      </div>
      {/* <div className="w-[500px] min-h-[300px] relative flex justify-center items-center">
        <img
          className="absolute w-full h-full"
          src="https://imgproxy.shelter.id/sig/w:470/rt:fill/Z3M6Ly9zaGVsdGVyLW1lZGlhL3UvYkI1OHJHc2Z1SU0wVEQ2SUtKNDNFTTM3Ukt4MS9pbWFnZXMvMTc0MjEyNTY5MzQ4NV8yMjljMWE4NS1lYWZjLTQ1ZDYtOGZmZC05ZThjYmIxMjJkNzkucG5n"
        />
        <img
          className="relative w-[350px] h-full"
          src="https://imgproxy.shelter.id/sig/w:658/rt:fill/Z3M6Ly9zaGVsdGVyLW1lZGlhL3UvYkI1OHJHc2Z1SU0wVEQ2SUtKNDNFTTM3Ukt4MS9pbWFnZXMvMTc0MjEyNTY5MzQ4NV9lZTc0YmY1Zi0zOWQ0LTRhZTAtYWFlNC1kZDU4ZTEzNzY1NmUucG5n"
        />
      </div> */}

      <div className="relative w-full">
        <Swiper
          direction="vertical"
          slidesPerView={1}
          spaceBetween={30}
          mousewheel
          pagination={{
            clickable: true,
          }}
          modules={[Mousewheel, Pagination]}
          className="h-[470px]"
        >
          {previewImages.map((src, i) => (
            <SwiperSlide key={i}>
              <img src={src} alt={`image-${i}`} className="w-full h-auto object-cover" />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="py-[10px] flex flex-col gap-[50px]">
          <div>
            <div className="ff-dh text-[24px]">활동 가이드</div>
            <hr className="border-blue-gray-900" />
            <div className="pl-0 p-[10px] gap-[10px] flex flex-col text-[16px] whitespace-pre-line leading-normal">
              <div>
                1. 먼저, 이벤트 인터페이스에서{' '}
                <span className="bg-blue-800 text-white rounded ff-dh p-[4px] py-[1px] text-[20px]">
                  이벤트 참여를 클릭하여 이벤트를 시작
                </span>
                합니다.
              </div>
              <div>
                2. 그런 다음 케이프 시티로 가서{' '}
                <span className="bg-blue-800 text-white rounded ff-dh p-[4px] py-[1px] text-[20px]">
                  [리비아]를 클릭
                </span>
                하여 줄거리를 따라가고{' '}
                <span className="bg-blue-800 text-white rounded ff-dh p-[4px] py-[1px] text-[20px]">
                  상공 회의소, 철도 보안국, 시청, [프란]의 줄거리를 본 후 섬
                </span>
                으로 갈 수 있습니다.
              </div>
              <div>
                3. 섬에 도착하면 먼저 안내에 따라 섬을 둘러본 후,{' '}
                <span className="bg-blue-800 text-white rounded ff-dh p-[4px] py-[1px] text-[20px]">
                  섬 관리소의 가구점에서 해변 오두막을 구매한 후, 다시 섬으로 돌아와서 배치
                </span>
                하면 됩니다. 배치한 후{' '}
                <span className="bg-blue-800 text-white rounded ff-dh p-[4px] py-[1px] text-[20px]">
                  오른쪽 상단의 목록을 클릭하면 보상을 받고
                </span>{' '}
                스토리를 볼 수 있습니다. 그런 다음 가구 매장으로 돌아가서{' '}
                <span className="bg-blue-800 text-white rounded ff-dh p-[4px] py-[1px] text-[20px]">
                  장식 인터페이스를 클릭하고 표준 간판을 구입
                </span>
                하세요.
              </div>
              <div>
                4. 섬으로 돌아가서 준비하세요. 배치한 후 오른쪽 상단의 목록을 클릭하면 보상을 받고
                스토리를 볼 수 있습니다. 이때, 당신의 섬에 자작나무 괴물이 나타납니다. 그것을
                클릭해서 물리치세요. 오른쪽 상단의 목록을 클릭하면 보상을 받고 스토리를 볼 수
                있습니다.
              </div>
              <div>
                5. 섬으로 돌아가면 새로운 몬스터가 섬에 나타납니다. 클릭하여 몬스터를 물리치세요. 그
                후, 섬에는 다양한 종류의 몬스터가 많이 생성됩니다. 그들을 물리치면 재료 쿠폰을 얻을
                수 있습니다.{' '}
                <span className="bg-blue-800 text-white rounded ff-dh p-[4px] py-[1px] text-[20px]">
                  6,000을 모은 후 해변 오두막을 업그레이드
                </span>
                할 수 있습니다.
              </div>
              <div>
                6. 업그레이드 후 오른쪽 상단의 할 일 목록을 클릭하여 보상을 받은 다음, 메인 페이지로
                돌아와 활동 페이지에서 보안 순찰을 클릭하여 활동 레벨을 입력하세요.
              </div>
            </div>
          </div>

          <div>
            <div className="ff-dh text-[24px]">이벤트 장소</div>
            <hr className="border-blue-gray-900" />
            <div className="pl-0 p-[10px] gap-[10px] flex flex-col text-[16px] whitespace-pre-line leading-normal">
              줄거리는 활동 인터페이스에서 시작하고, 그 다음 줄거리는 케이프 시티에서 시작됩니다.
              섬에 들어간 후에는 활동 인터페이스 어디에서나 섬에 들어갈 수 있습니다. 해당 플롯을
              완료한 후에는 어디에서나 섬 레벨에 들어갈 수 있습니다(어디에서나 평판을 얻을 수
              있습니다)
            </div>
          </div>

          <div>
            <div className="ff-dh text-[24px]">비치 배구</div>
            <hr className="border-blue-gray-900" />
            <div className="pl-0 p-[10px] gap-[10px] flex flex-col text-[16px] whitespace-pre-line leading-normal">
              비치 발리볼은 발리볼 코인을 벌 수 있는 유일한 방법입니다. 하루에 3번 플레이할 수
              있으며, 플레이할 때마다 승리 시 50개, 패배 시 20개의 배구 코인을 획득할 수 있습니다.
              이벤트는 28일 동안 진행되며, 4,200개의 배구 코인을 획득할 수 있습니다. 모든 보상을
              받으려면 3,480개의 코인이 필요합니다 . 이벤트 참여에 참고해주시기 바랍니다. 동시에,
              가능한 한 많이 이겨보려고 노력하세요. 종료(배경 지우기)는 게임 시간을 소모하지
              않습니다.
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[50px]">
        <CommentBox
          data={{
            target: CommentTarget.EventSummerIsland,
            refId: '123456789012345678901234' as string,
          }}
        />
      </div>
    </div>
  )
}

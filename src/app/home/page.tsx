export default function HomePage() {
  return (
    <div className="flex flex-col gap-[10px]">
      <img src="https://res.cloudinary.com/dqihpypxi/image/upload/v1739699861/resonance/etc/banner_001_bkltao.png" />

      <div className="border border-gray-400 p-[10px] rounded">
        <div className="text-[20px]">상시 쿠폰</div>
        <hr className="my-[8px] border-gray-400" />
        <div className="flex flex-col gap-[4px] ff-dh text-[18px]">
          <div>CBCRR23</div>
          <div>RESONANCE</div>
        </div>
      </div>

      <div className="border border-gray-400 p-[10px] rounded">
        <div className="text-[20px]">레조넌스 외부 참고자료 링크 모음</div>
        <hr className="my-[8px] border-gray-400" />
        <div className="flex flex-col gap-[4px] text-[18px] ff-dh text-blue-gray-900">
          <a
            href="https://gamerch.com/resonance"
            target="_blank"
            className="flex items-center hover:underline hover:text-blue-gray-700"
          >
            Gamerch
            <img src="/img/icon_link.svg" className="w-[16px]" />
          </a>
          <a
            href="https://wiki.biligame.com/resonance/%E4%B9%98%E5%91%98%E4%B8%80%E8%A7%88"
            target="_blank"
            className="flex items-center hover:underline hover:text-blue-gray-700"
          >
            Bili wiki
            <img src="/img/icon_link.svg" className="w-[16px]" />
          </a>
          <a
            href="https://discord.com/invite/mqmCCnPnew"
            target="_blank"
            className="flex items-center hover:underline hover:text-blue-gray-700"
          >
            일본 디스코드 초대 링크
            <img src="/img/icon_link.svg" className="w-[16px]" />
          </a>

          <a
            href="https://www.gamekee.com/lsnsm/"
            target="_blank"
            className="flex items-center hover:underline hover:text-blue-gray-700"
          >
            Gamekee
            <img src="/img/icon_link.svg" className="w-[16px]" />
          </a>
        </div>
      </div>
    </div>
  )
}

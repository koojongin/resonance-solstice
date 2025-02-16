export default function HomePage() {
  return (
    <div className="flex flex-col gap-[10px]">
      <img src="https://res.cloudinary.com/dqihpypxi/image/upload/v1739699861/resonance/etc/banner_001_bkltao.png" />

      <div className="border border-gray-400 p-[10px] rounded">
        <div>상시 쿠폰</div>
        <hr className="my-[4px] border-gray-400" />
        <div>CBCRR23</div>
        <div>RESONANCE</div>
      </div>

      <div className="border border-gray-400 p-[10px] rounded">
        <div>레조넌스 외부 참고자료 링크 모음</div>
        <hr className="my-[4px] border-gray-400" />
        <div className="flex flex-col">
          <a href="https://gamerch.com/resonance" target="_blank">
            https://gamerch.com/resonance
          </a>
          <a
            href="https://wiki.biligame.com/resonance/%E4%B9%98%E5%91%98%E4%B8%80%E8%A7%88"
            target="_blank"
          >
            https://wiki.biligame.com/resonance/%E4%B9%98%E5%91%98%E4%B8%80%E8%A7%88
          </a>
        </div>
      </div>
    </div>
  )
}

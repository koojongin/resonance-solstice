'use client'

import { useParams } from 'next/navigation'
import { ALL_SALE_ITEMS } from '@/app/shop/shop.menu.const'
import { ShopSaleItem, ThumbnailDirection } from '@/app/shop/shop.enum'
import { transformCImage } from '@/services/character-url'
import createKey from '@/services/key-generator'

export default function ShopItemNamePage() {
  const { shopItemName } = useParams()
  const decodedShopItemName = decodeURIComponent(shopItemName as string)
  const saleItem: ShopSaleItem = ALL_SALE_ITEMS.find((item) => item.name === decodedShopItemName)!

  if (!saleItem) return <div className="ff-dh text-[30px]">잘못된 접근입니다.</div>

  return (
    <div className="flex flex-col gap-[4px]">
      <div
        className="shadow-md rounded w-full flex items-center justify-center border bg-cover cursor-pointer"
        style={{
          backgroundImage: `url('https://res.cloudinary.com/dqihpypxi/image/upload/v1739699861/resonance/etc/profile-bg_pxdpv5.png')`,
          backgroundPosition: '-500px 0px',
        }}
        onClick={() => {
          window.open(saleItem.thumbnail, '_blank')
        }}
      >
        {saleItem.thumbnailDirection === ThumbnailDirection.VERTICAL && (
          <img src={transformCImage(saleItem.thumbnail, 200)} className="w-[200px] rounded-[4px]" />
        )}
        {saleItem.thumbnailDirection === ThumbnailDirection.HORIZONTAL && (
          <img src={transformCImage(saleItem.thumbnail, 600)} className="w-[600px]" />
        )}
      </div>

      <hr className="my-[10px]" />

      <div className="ff-dh text-[30px] text-gray-700/90 flex items-center gap-[4px]">
        {saleItem.category && <div>{saleItem.category} &gt;</div>}
        {saleItem.name}
      </div>

      <div>
        {!saleItem.items && (
          <div>상세 설명이 와야되는 영역 - 아이템 상세 데이터가 현재 등록되지 않음.</div>
        )}
        {saleItem.items && (
          <div className="flex flex-wrap gap-[4px] w-full">
            {saleItem.items?.map((item) => {
              return (
                <div
                  key={createKey()}
                  className="w-[48%] box-border flex items-stretch space-between rounded overflow-hidden shadow border border-gray-400 ff-dh text-[20px]"
                >
                  {item.earnType && (
                    <div className="border-r items-center flex text-white text-gray-700 min-w-[140px] ff-ng text-[14px] bg-gray-400/80 font-bold p-[4px]">
                      {item.earnType}
                    </div>
                  )}
                  <div className="p-[4px] min-w-[200px] border-r text-gray-700">{item.name}</div>
                  <div className="min-w-[50px] w-full flex items-center justify-end ff-ng text-[16px] px-[4px]">
                    {item.amount.toLocaleString()}
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}

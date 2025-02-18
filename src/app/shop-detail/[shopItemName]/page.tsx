'use client'

import { useParams } from 'next/navigation'
import { ShopSaleItemType, ThumbnailDirection } from '@/app/shop/shop.enum'
import { convertCharacterThumbnailUrl, transformCImage } from '@/services/character-url'
import createKey from '@/services/key-generator'
import { ShopSaleItem, ShopSalePackage } from '@/app/shop/shop.interface'
import { RS_CHARACTERS } from '@/const/character/character.const'
import { useNextDepthNavigator } from '@/services/navigation'
import { ALL_SALE_PACKAGES } from '@/app/shop/shop.menu.const'

export default function ShopItemNamePage() {
  const { shopItemName } = useParams()
  const decodedShopItemName = decodeURIComponent(shopItemName as string)
  const salePackage: ShopSalePackage = ALL_SALE_PACKAGES.find(
    (item) => item.name === decodedShopItemName,
  )!

  if (!salePackage) return <div className="ff-dh text-[30px]">잘못된 접근입니다.</div>

  return (
    <div className="flex flex-col gap-[4px]">
      <div
        className="shadow-md rounded w-full flex items-center justify-center border bg-cover cursor-pointer"
        style={{
          backgroundImage: `url('https://res.cloudinary.com/dqihpypxi/image/upload/v1739699861/resonance/etc/profile-bg_pxdpv5.png')`,
          backgroundPosition: '-500px 0px',
        }}
        onClick={() => {
          window.open(salePackage.thumbnail, '_blank')
        }}
      >
        {salePackage.thumbnailDirection === ThumbnailDirection.VERTICAL && (
          <img
            src={transformCImage(salePackage.thumbnail, 200)}
            className="w-[200px] rounded-[4px]"
          />
        )}
        {salePackage.thumbnailDirection === ThumbnailDirection.HORIZONTAL && (
          <img src={transformCImage(salePackage.thumbnail, 600)} className="w-[600px]" />
        )}
      </div>

      <hr className="my-[10px]" />

      <div className="ff-dh text-[30px] text-gray-700/90 flex items-center gap-[4px]">
        {salePackage.category && <div>{salePackage.category} &gt;</div>}
        {salePackage.name}
      </div>

      {salePackage.desc && <div className="border p-[8px] rounded ">{salePackage.desc}</div>}

      <div>
        {!salePackage.items && (
          <div>
            패키지에 포함된 아이템 목록이 와야되는 영역 - 아이템 데이터가 현재 등록되지 않거나 없는
            패키지.
          </div>
        )}
        {salePackage.items && (
          <div className="flex flex-wrap gap-[4px] w-full">
            {salePackage.items?.map((item) => {
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
                  <ShopPackageItemNameBox item={item} />
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

function ShopPackageItemNameBox({ item }: { item: ShopSaleItem }) {
  const { iType, name } = item
  const { router } = useNextDepthNavigator()
  if (iType === ShopSaleItemType.CHARACTER) {
    const character = RS_CHARACTERS.find((c) => c.originName === name)!
    return (
      <div
        className="p-[4px] min-w-[200px] border-r text-gray-700 cursor-pointer hover:bg-gray-300"
        onClick={() => router.push(`/characters/${character.originName}`)}
      >
        <div className="h-[50px] overflow-hidden relative">
          <div className="absolute left-0 bg-black/30 px-[4px] py-[2px] text-white">
            {character.name}
          </div>
          <img src={convertCharacterThumbnailUrl(character.thumbnail, 100)} />
        </div>
      </div>
    )
  }

  return (
    <div className="p-[4px] min-w-[200px] flex items-center border-r text-gray-700">
      {item.name}
    </div>
  )
}

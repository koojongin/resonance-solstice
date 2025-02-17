'use client'

import { useParams } from 'next/navigation'
import { SHOP_MENUS } from '@/app/shop/shop.menu.const'
import createKey from '@/services/key-generator'
import { transformCImage } from '@/services/character-url'
import { useNextDepthNavigator } from '@/services/navigation'
import { ShopSalePackage } from '@/app/shop/shop.interface'
import _, { debounce } from 'lodash'
import { useCallback, useEffect, useState } from 'react'

enum ShopItemViewPort {
  HORIZONTAL = 'HORIZONTAL',
  VERTICAL = 'VERTICAL',
  SQUARE = 'SQUARE',
}

interface SortOption {
  key: string
  name: string
}

const SORT_OPTIONS: SortOption[] = [
  { key: 'PRICE_ASC', name: '가격 낮은 순' },
  { key: 'PRICE_DESC', name: '가격 높은 순' },
]

export default function ShopMenuPage() {
  const { menuName } = useParams()
  const shopMenu = SHOP_MENUS.find((menu) => menu.key === menuName)!
  const { salePackages } = shopMenu
  const [selectedPackages, setSelectedPackages] = useState(salePackages)
  const [searchedKeyword, setSearchedKeyword] = useState('')
  const [selectedSortType, setSelectedSortType] = useState(SORT_OPTIONS[0])

  const handleSearchedKeywordChange = debounce((event: any) => {
    setSearchedKeyword(event.target.value)
  }, 300)

  const handleSortTypeChange = (event: any) => {
    setSelectedSortType(SORT_OPTIONS.find((option) => option.key === event.target.value)!)
  }

  const getSortingPackages = (packages: any[], sortType: SortOption) => {
    if (sortType.key === 'PRICE_DESC') return _.orderBy(packages, 'price', 'desc')

    if (sortType.key === 'PRICE_ASC') return _.orderBy(packages, 'price', 'asc')

    return packages
  }

  useEffect(() => {
    if (!searchedKeyword) setSelectedPackages(salePackages)
    setSelectedPackages(
      getSortingPackages(
        salePackages.filter((salePackage) => {
          return (
            salePackage.items.filter((item) => item.name.indexOf(searchedKeyword) >= 0).length > 0
          )
        }),
        selectedSortType,
      ),
    )
  }, [searchedKeyword])

  useEffect(() => {
    setSelectedPackages(getSortingPackages(selectedPackages, selectedSortType))
  }, [selectedSortType])

  return (
    <div className="flex flex-col gap-[10px]">
      <div className="border rounded p-[8px] flex flex-col gap-[4px]">
        <div className="flex items-center gap-[10px]">
          <div className="font-bold text-gray-700 min-w-[50px]">정렬</div>
          <div className="flex items-center gap-[4px]">
            {SORT_OPTIONS.map((sortOption) => {
              return (
                <label key={createKey()} className="flex items-center gap-[4px]">
                  <input
                    type="radio"
                    name="priceGroup"
                    value={sortOption.key}
                    checked={selectedSortType.key === sortOption.key}
                    onChange={handleSortTypeChange}
                  />
                  {sortOption.name}
                </label>
              )
            })}
          </div>
        </div>
        <div className="flex items-center gap-[10px]">
          <div className="font-bold text-gray-700 min-w-[50px]">검색</div>
          <input
            className="border border-gray-400 min-w-[300px] p-[4px]"
            type="text"
            onChange={handleSearchedKeywordChange}
            placeholder="아이템 이름을 검색하세요."
          />
        </div>
      </div>

      <div className="flex items-stretch gap-[10px] mb-[4px]">
        <div className="rounded-[4px] inline-flex p-[4px] text-white bg-gray-700 border-white/50 border-dotted border">
          검색 결과 - {selectedPackages.length} / {salePackages.length}
        </div>
        {searchedKeyword && (
          <div className="rounded-[4px] flex items-center">
            아이템 이름 <span className="ff-dh text-[20px] text-blue-600">"{searchedKeyword}"</span>{' '}
            을(를) 포함하는 패키지
          </div>
        )}
      </div>

      <div className="bg-gradient-to-r from-gray-700 to-white text-white ff-dh text-[40px] p-[10px]">
        {shopMenu.name}
      </div>
      <div className="flex flex-wrap gap-[10px]">
        {selectedPackages.map((salePackage) => {
          const viewport: ShopItemViewPort =
            (salePackage.thumbnailDirection as unknown as ShopItemViewPort) ||
            ShopItemViewPort.HORIZONTAL
          if (viewport === ShopItemViewPort.VERTICAL)
            return <ShopItemVertical key={createKey()} salePackage={salePackage} />
          return <ShopItemHorizontal key={createKey()} salePackage={salePackage} />
        })}
      </div>
    </div>
  )
}

function ShopItemHorizontal({ salePackage }: { salePackage: ShopSalePackage }) {
  const { router } = useNextDepthNavigator()
  return (
    <div
      className="w-[200px] border rounded shadow cursor-pointer"
      onClick={() => router.push(`/shop-detail/${salePackage.name}`)}
    >
      <img src={transformCImage(salePackage.thumbnail, 400)} />
      <div className="p-[10px] ff-ng text-gray-700">
        <div className="text-[20px]">{salePackage.name}</div>
        <div className="text-right ff-dh text-[20px] text-gray-700">
          {salePackage.price.toLocaleString()}₩
        </div>
      </div>
    </div>
  )
}

function ShopItemVertical({ salePackage }: { salePackage: ShopSalePackage }) {
  const { router } = useNextDepthNavigator()
  return (
    <div
      className="w-[140px] border rounded shadow overflow-hidden cursor-pointer"
      onClick={() => router.push(`/shop-detail/${salePackage.name}`)}
    >
      <div className="h-[250px] overflow-hidden">
        <img src={transformCImage(salePackage.thumbnail, 140)} />
      </div>
      <div className="p-[10px] ff-ng text-gray-700">
        <div className="text-[16px]">{salePackage.name}</div>
        <div className="text-right ff-dh text-[20px] text-gray-700">
          {salePackage.price.toLocaleString()}₩
        </div>
      </div>
    </div>
  )
}

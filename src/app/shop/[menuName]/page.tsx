'use client'

import { useParams } from 'next/navigation'
import { ALL_SALE_PACKAGES, SHOP_MENUS } from '@/app/shop/shop.menu.const'
import createKey from '@/services/key-generator'
import { transformCImage } from '@/services/character-url'
import { useNextDepthNavigator } from '@/services/navigation'
import { ShopSalePackage } from '@/app/shop/shop.interface'
import _, { debounce } from 'lodash'
import { useEffect, useState } from 'react'
import { ShopMenuName, ThumbnailDirection } from '@/app/shop/shop.enum'
import { Tooltip } from '@material-tailwind/react'

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

  const [showKeywordSuggestions, setShowKeywordSuggestions] = useState(false)
  const [filteredKeywordSuggestions, setFilteredKeywordSuggestions] = useState<string[]>([])

  const allItemNames = _.uniq(
    ALL_SALE_PACKAGES.map((salePackage) => salePackage.items.map((item) => item.name)).flat(),
  )

  const debouncedSearchedKeywordChange = debounce((value) => {
    const isExistKeyword = value.length > 0
    if (isExistKeyword) {
      const filtered = allItemNames.filter((s) => s.toLowerCase().includes(value.toLowerCase()))
      setFilteredKeywordSuggestions(filtered)
    }
    setShowKeywordSuggestions(isExistKeyword)
  }, 300)

  const handleSearchedKeywordChange = (event: any) => {
    const { value } = event.target
    setSearchedKeyword(value)
    debouncedSearchedKeywordChange(value)
  }

  const handleSortTypeChange = (event: any) => {
    setSelectedSortType(SORT_OPTIONS.find((option) => option.key === event.target.value)!)
  }

  const handleKeywordSelect = (suggestion: string) => {
    setSearchedKeyword(suggestion)
    setShowKeywordSuggestions(false)
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
          <div className="relative">
            <input
              className="border border-gray-400 min-w-[300px] p-[4px]"
              type="text"
              value={searchedKeyword}
              onChange={handleSearchedKeywordChange}
              placeholder="아이템 이름을 검색하세요."
            />
            {showKeywordSuggestions && (
              <ul className="absolute top-[26px] z-50 left-0 right-0 mt-1 bg-gray-100 border border-gray-300 shadow-lg overflow-y-scroll max-h-[200px]">
                {filteredKeywordSuggestions.length > 0 ? (
                  filteredKeywordSuggestions.map((s, i) => (
                    <li
                      key={i}
                      className="p-2 hover:bg-gray-100 cursor-pointer border-b last:border-b-0 border-gray-700 border-dashed"
                      onClick={() => handleKeywordSelect(s)}
                    >
                      {s}
                    </li>
                  ))
                ) : (
                  <li className="p-2 text-gray-500">"{searchedKeyword}" 포함된 검색결과 없음</li>
                )}
              </ul>
            )}
          </div>
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
      <div
        className={`flex flex-wrap gap-[10px] ${shopMenu.key === ShopMenuName.ALL && 'gap-[4px]'}`}
      >
        {selectedPackages.map((salePackage) => {
          const viewport: ShopItemViewPort =
            (salePackage.thumbnailDirection as unknown as ShopItemViewPort) ||
            ShopItemViewPort.HORIZONTAL
          if (shopMenu.key === ShopMenuName.ALL)
            return <ShopItemSquare key={createKey()} salePackage={salePackage} />
          if (viewport === ShopItemViewPort.VERTICAL)
            return <ShopItemVertical key={createKey()} salePackage={salePackage} />
          return <ShopItemHorizontal key={createKey()} salePackage={salePackage} />
        })}
      </div>
    </div>
  )
}

function ShopItemSquare({ salePackage }: { salePackage: ShopSalePackage }) {
  const { router } = useNextDepthNavigator()

  const { thumbnailDirection } = salePackage
  return (
    <div
      className="w-[100px] border rounded shadow cursor-pointer"
      onClick={() => router.push(`/shop-detail/${salePackage.name}`)}
    >
      <Tooltip
        content={
          <>
            {thumbnailDirection === ThumbnailDirection.VERTICAL && (
              <img src={transformCImage(salePackage.thumbnail, 200)} />
            )}

            {thumbnailDirection === ThumbnailDirection.HORIZONTAL && (
              <img src={transformCImage(salePackage.thumbnail, 400)} />
            )}
          </>
        }
      >
        <div
          className="w-full h-[100px] bg-cover bg-center"
          style={{
            backgroundImage: `url('${transformCImage(salePackage.thumbnail, 400)}')`,
          }}
        />
      </Tooltip>
      <div className="p-[10px] ff-ng text-gray-700">
        <div className="text-[16px] truncate">
          <Tooltip content={salePackage.name}>{salePackage.name}</Tooltip>
        </div>
        <div className="text-right ff-dh text-[16px] text-gray-700">
          {salePackage.price.toLocaleString()}₩
        </div>
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

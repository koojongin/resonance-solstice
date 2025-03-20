'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React, { Suspense, useCallback, useEffect, useRef, useState } from 'react'
import { api } from '@/services/api/api.interceptor'
import { Pagination } from '@/const/api/pagination.interface'
import RdUserDeckList from '@/app/rd/user/rd-user-deck-list'
import { RS_CHARACTER_DICT, RS_CHARACTERS } from '@/const/character/character.const'
import { RecommendationDeck } from '@/app/rd/rd-decks.const'
import { PaginationList } from '@/app/components/pagination/pagination-list'
import Select from 'react-select'
import { GradientButton } from '@/app/components/button/gradient-button'
import { useNextDepthNavigator } from '@/services/navigation'
import { RsCharacterCardResponsiveShorten } from '@/app/components/character-frame/rs-character-card-responsive'
import createKey from '@/services/key-generator'
import { formatDateNormal } from '@/services/utils/date.format'

function convertCharacterData(decks: []) {
  return decks.map((deck: any) => {
    const fixedDeck = { ...deck }
    fixedDeck.characters = fixedDeck.characters.map((c: any) => {
      return {
        character: RS_CHARACTER_DICT[c.name],
        equipments: (c?.equipments || []).map((equipment: any) => equipment?.name),
      }
    })
    return fixedDeck
  })
}

interface SearchQuery {
  condition: { [key: string]: any }
  opts: { page: number; limit: number }
  timestamp: Date
}

const findAndOrOptions = [
  {
    value: '$all',
    label: '모두 포함',
  },
  {
    value: '$in',
    label: '한명 이상 포함',
  },
]

const usePreviewOptions = [
  {
    value: {},
    label: '상관없음',
  },
  {
    value: true,
    label: '설정됨',
  },
]

function RdUserPage() {
  const { openNewTab } = useNextDepthNavigator()
  const [searchParams, setSearchParams] = useState<URLSearchParams | null>(null)
  const [selectedPartyOption, setSelectedPartyOption] = useState<{
    value: string
    label: string
  } | null>(findAndOrOptions[1])
  const router = useRouter()
  const pathname = usePathname()

  const CHARACTER_OPTIONS = RS_CHARACTERS.map((c) => {
    return {
      value: c.originName,
      label: c.name,
    }
  })

  const [decks, setDecks] = useState<Array<RecommendationDeck>>()
  const [pagination, setPagination] = useState<Pagination>()
  const searchedTitleRef = useRef<HTMLInputElement>(null)
  const [usePreviewOption, setUsePreviewOption] = useState<{ value: any; label: string }>(
    usePreviewOptions[0],
  )
  const [searchedLeader, setSearchedLeader] = useState<{ value: string; label: string } | null>(
    null,
  )
  const [searchedCharacters, setSearchedCharacters] = useState<{ value: string; label: string }[]>(
    [],
  )
  const [searchedBanCharacters, setSearchedBanCharacters] = useState<
    { value: string; label: string }[]
  >([])
  const [lastQuery, setLastQuery] = useState<SearchQuery>()

  const getQuery = useCallback(
    (selectedPage?: number): { condition: object; opts: { page: number; limit: number } } => {
      const _lastQuery: SearchQuery = {
        condition: {},
        opts: {
          page: selectedPage || lastQuery?.opts.page || 1,
          limit: 20,
        },
        timestamp: new Date(),
      }
      if (searchedTitleRef.current && searchedTitleRef.current.value) {
        _lastQuery.condition.title = {
          $regex: searchedTitleRef.current.value,
          $options: 'i',
        }
      }
      if (searchedLeader) {
        _lastQuery.condition.leaderName = {
          $regex: searchedLeader.value,
          $options: 'i',
        }
      }

      const isExistCharacterQuery =
        searchedCharacters?.length > 0 || searchedBanCharacters.length > 0

      if (isExistCharacterQuery) {
        _lastQuery.condition.$and = []
      }
      if (searchedCharacters.length > 0) {
        _lastQuery.condition.$and.push({
          'characters.name': {
            [selectedPartyOption!.value]: searchedCharacters.map((c: any) => c?.value),
          },
        })
      }
      if (searchedBanCharacters.length > 0) {
        _lastQuery.condition.$and.push({
          'characters.name': { $nin: searchedBanCharacters.map((c: any) => c?.value) },
        })
      }
      if (usePreviewOption) {
        if (typeof usePreviewOption.value !== 'object') {
          _lastQuery.condition.usePreview = usePreviewOption.value
        }
      }
      return _lastQuery
    },
    [
      searchedBanCharacters,
      searchedCharacters,
      searchedLeader,
      selectedPartyOption,
      usePreviewOption,
    ],
  )

  const loadDecks = async (selectedPage?: number, _condition?: any) => {
    const _lastQuery = { ...getQuery(selectedPage), ..._condition }
    const result = await api.post('/recommendation-deck/list', _lastQuery)
    const { decks: rDecks, page, total, totalPages } = result.data
    setDecks(convertCharacterData(rDecks))
    setPagination({
      page,
      total,
      totalPages,
    })
    setLastQuery({
      ..._lastQuery,
      timestamp: new Date(),
    })
    updateSearchParams()
  }

  const updateSearchParams = useCallback(() => {
    if (typeof window === 'undefined') {
      return
    }
    if (!lastQuery) return
    const params = new URLSearchParams(window.location.search)
    if (lastQuery?.opts?.page) {
      params.set('page', lastQuery.opts.page as any)
    }
    if (lastQuery.condition) {
      if (lastQuery.condition.title?.$regex) {
        params.set('title', lastQuery.condition.title.$regex)
      } else {
        params.delete('title')
      }
      // if (lastQuery.condition.leaderName?.$regex) {
      //   params.set('leaderName', lastQuery.condition.leaderName.$regex)
      // } else {
      //   params.delete('leaderName')
      // }
      // if (lastQuery.condition['characters.name']) {
      //   const characters: string[] =
      //     (Object.values(lastQuery.condition['characters.name'])[0] as []) || []
      //   params.set('characters', characters.join(','))
      // } else {
      //   params.delete('characters')
      // }
    }

    window.history.pushState({}, '', `${pathname}?${params.toString()}`)
  }, [lastQuery])

  useEffect(() => {
    if (!lastQuery) return
    updateSearchParams()
  }, [lastQuery])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const currentSearchParams = new URLSearchParams(window.location.search)
      setSearchParams(currentSearchParams)
    }
  }, [])

  useEffect(() => {
    if (!searchParams) return
    if (!searchParams.get('page')) {
      const current = new URLSearchParams(Array.from(searchParams.entries()))
      current.set('page', '1')
      router.replace(`${pathname}?${current.toString()}`)
    }
    const condition: any = {}
    searchParams?.forEach((_value, key) => {
      if (key === 'title' && searchedTitleRef?.current) {
        searchedTitleRef.current.value = searchParams.get(key) || ''
        return
      }
      if (key === 'leaderName') {
        const originName = searchParams.get(key)
        if (!originName) return
        const value = {
          value: originName,
          label: RS_CHARACTER_DICT[originName].name,
        }
        condition.searchedLeader = value
        return
      }
      if (key === 'characters') {
        const characterNames = searchParams.get(key) || ''
        const decodedCharacterNames = decodeURIComponent(characterNames)
        if (decodedCharacterNames) {
          const createdCharacters = decodedCharacterNames.split(',').map((cName) => {
            const character = RS_CHARACTER_DICT[cName]
            return {
              value: character.originName,
              label: character.name,
            }
          })
          condition.searchedCharacters = createdCharacters
        }
        return
      }
    })
    loadDecks()
  }, [searchParams])

  return (
    <div className="flex flex-col gap-[10px]">
      <div className="flex flex-col gap-[6px]">
        <div className="flex flex-col gap-[4px]">
          <div className="text-gray-600/90 font-bold">
            * 모든 덱은 설명과, 가이드 링크를 읽어 보시는 것을 추천드립니다. 현재 한섭 상황과
            돌파수에 따라 가능성 유무가 존재합니다.
          </div>
        </div>
        <div className="flex items-center gap-[4px]">
          <GradientButton
            className="p-[4px] rounded inline-flex items-center gap-[4px]"
            onClick={() => router.push('/wiki/auto-preset')}
          >
            오토 프리셋 설정 방법
            <i className="fa-solid fa-circle-question" />
          </GradientButton>
          <GradientButton
            className="p-[4px] rounded inline-flex items-center gap-[4px]"
            onClick={() => openNewTab('https://arca.live/b/resonance/129293763')}
          >
            자동 덱 만들기 가이드
            <i className="fa-solid fa-circle-question" />
          </GradientButton>
          <GradientButton
            className="p-[4px] rounded inline-flex items-center gap-[4px]"
            onClick={() => openNewTab('/reset-marathon/equipment')}
          >
            장비 티어 리스트
            <i className="fa-solid fa-circle-question" />
          </GradientButton>
        </div>
      </div>
      <div className="">
        <Link href="/rd/user/create">
          <div className="w-[200px] text-center bg-blue-500 text-white inline-block p-[10px] shadow-md cursor-pointer">
            덱 생성하기
          </div>
        </Link>
      </div>

      <div className="flex flex-col gap-[4px] border border-gray-500 p-[10px] rounded">
        <div className="ff-dh text-[20px]">상세 검색</div>
        <div className="flex flex-col gap-[4px]">
          <div className="flex items-center gap-[10px]">
            <div className="min-w-[100px]">제목</div>
            <input
              className="border border-gray-400 min-w-[300px] p-[4px]"
              type="text"
              maxLength={50}
              placeholder="덱 제목을 검색하세요."
              ref={searchedTitleRef}
              onKeyUp={async (e) => {
                if (e.key === 'Enter') {
                  await loadDecks()
                }
              }}
            />
          </div>
          <div className="flex items-center gap-[10px]">
            <div className="min-w-[100px]">리더</div>
            <Select
              className="relative z-[70] w-[300px]"
              onChange={setSearchedLeader}
              options={CHARACTER_OPTIONS}
              components={{ Option: CharacterSelectOptionBox }}
              value={searchedLeader}
              placeholder="리더를 검색하세요"
              isClearable
            />
          </div>
          <div className="flex items-center gap-[10px]">
            <div className="min-w-[100px]">승무원</div>
            <Select
              className="relative z-[60] w-[300px]"
              isMulti
              defaultValue={searchedCharacters}
              onChange={setSearchedCharacters as any}
              options={CHARACTER_OPTIONS}
              components={{ Option: CharacterSelectOptionBox }}
              placeholder="포함할 파티원을 추가하세요"
            />
            <Select
              options={findAndOrOptions}
              value={selectedPartyOption}
              onChange={setSelectedPartyOption}
              components={{ Option: PartySelectRadioOptionBox }}
            />
          </div>
          <div className="flex items-center gap-[10px]">
            <div className="min-w-[100px] text-red-500 font-bold">제외하기</div>
            <Select
              className="relative z-[50] w-[300px]"
              isMulti
              defaultValue={searchedBanCharacters}
              onChange={setSearchedBanCharacters as any}
              options={CHARACTER_OPTIONS}
              components={{ Option: CharacterSelectOptionBox }}
              placeholder="제외할 파티원을 추가하세요"
            />
          </div>
        </div>
        <div className="flex items-center gap-[10px]">
          <div className="min-w-[100px]">카드 순서 설정</div>
          <Select
            options={usePreviewOptions}
            value={usePreviewOption}
            onChange={setUsePreviewOption as any}
            components={{ Option: PreviewCheckboxOptionBox }}
          />
        </div>
        <div
          className="bg-green-400 text-white p-[10px] text-center ff-dh text-[20px]"
          onClick={async () => {
            await loadDecks()
          }}
        >
          검색
        </div>
      </div>
      <div>
        {lastQuery && (
          <div className="flex flex-col gap-[4px]">
            <div>검색일시: {formatDateNormal(lastQuery.timestamp)}</div>
            <div className="flex flex-wrap gap-[4px]">
              <div className="border border-blue-gray-900 bg-blue-gray-700 text-white p-[4px] rounded flex items-center justify-center">
                {lastQuery.opts.page} 페이지
              </div>
              {lastQuery.condition.title && (
                <div className="border border-blue-gray-900 p-[4px] rounded flex items-center justify-center">
                  [덱제목:"{lastQuery.condition.title.$regex}"]
                </div>
              )}
              {lastQuery.condition.leaderName && (
                <div className="border border-blue-gray-900 p-[4px] rounded flex items-center justify-center ">
                  [리더:
                  <span className="inline-flex p-[4px] bg-blue-400 text-white m-[2px]">
                    {RS_CHARACTER_DICT[lastQuery.condition.leaderName.$regex].name}
                  </span>
                  ]
                </div>
              )}
              {lastQuery.condition.$and?.map((condition: any) => {
                if (!condition['characters.name']) return <></>
                const isIncludeQuery =
                  condition['characters.name'].$in || condition['characters.name'].$all
                if (isIncludeQuery) {
                  return <CharacterIncludeQueryChip key={createKey()} condition={condition} />
                }
                return <CharacterExcludeQueryChip key={createKey()} condition={condition} />
              })}
            </div>
          </div>
        )}
        <hr className="border-gray-500 border-dashed my-[4px]" />
      </div>

      <div>{decks && <RdUserDeckList decks={decks} pagination={pagination} />}</div>

      {pagination && <PaginationList pagination={pagination} onSelectPage={loadDecks} />}
    </div>
  )
}

export default function RdUserPageS() {
  return (
    <Suspense>
      <RdUserPage />
    </Suspense>
  )
}

function CharacterExcludeQueryChip({ condition }: { condition: any }) {
  const characters = condition['characters.name']?.$nin || []
  return (
    <div
      key={createKey()}
      className="border border-blue-gray-900 p-[4px] rounded whitespace-pre-line"
    >
      [제외된 파티원:
      <span className="m-[2px]">
        {characters?.map((originName: any) => {
          const character = RS_CHARACTER_DICT[originName] || {}
          return (
            <span
              key={createKey()}
              className="inline-flex p-[4px] bg-red-400 text-white m-[2px] rounded"
            >
              {character.name || '-'}
            </span>
          )
        })}
      </span>
      ]
    </div>
  )
}

function CharacterIncludeQueryChip({ condition }: { condition: any }) {
  const charactersQuery = condition['characters.name']
  const inOption = charactersQuery.$in
  const characters = charactersQuery.$in || charactersQuery.$all
  return (
    <div
      key={createKey()}
      className="border border-blue-gray-900 p-[4px] rounded whitespace-pre-line"
    >
      [{inOption ? '한명 이상 포함된' : '모두 포함된'} 파티원:
      <span className="m-[2px]">
        {characters.map((originName: any) => {
          const character = RS_CHARACTER_DICT[originName] || {}
          return (
            <span
              key={createKey()}
              className="inline-flex p-[4px] bg-green-400 text-white m-[2px] rounded"
            >
              {character.name || '-'}
            </span>
          )
        })}
      </span>
      ]
    </div>
  )
}

function PreviewCheckboxOptionBox(props: any) {
  const { data, innerRef, innerProps, isSelected } = props

  return (
    <div
      ref={innerRef}
      {...innerProps}
      className="p-[10px] flex items-center gap-[4px] cursor-pointer hover:bg-gray-100 transition"
    >
      <input type="radio" checked={isSelected} readOnly />
      <span>{data.label}</span>
    </div>
  )
}

function PartySelectRadioOptionBox(props: any) {
  const { data, isSelected, innerRef, innerProps } = props
  return (
    <div
      className="p-[10px] flex items-center gap-[4px] cursor-pointer hover:bg-gray-100 transition"
      ref={innerRef}
      {...innerProps}
    >
      <input type="radio" checked={isSelected} readOnly />
      <label className="ml-[10px]">{data.label}</label>
    </div>
  )
}

function CharacterSelectOptionBox(props: any) {
  const { data, innerRef, innerProps } = props

  const character = RS_CHARACTER_DICT[data.value]
  return (
    <div
      ref={innerRef}
      {...innerProps}
      className="flex items-center p-[2px] gap-[4px] cursor-pointer hover:bg-gray-100 transition"
    >
      <div className="w-[40px]">
        <RsCharacterCardResponsiveShorten character={character} height={40} />
      </div>
      <div className="ff-dh text-[20px] text-blue-gray-800">{character.name}</div>
    </div>
  )
}

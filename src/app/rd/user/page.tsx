'use client'

import Link from 'next/link'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React, { useCallback, useEffect, useRef, useState } from 'react'
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
}

function RdUserPage() {
  const { openNewTab } = useNextDepthNavigator()
  const [searchParams, setSearchParams] = useState<URLSearchParams | null>(null)
  const router = useRouter()
  const pathname = usePathname()

  const CHARACTER_OPTIONS = RS_CHARACTERS.map((c) => {
    return { value: c.originName, label: c.name }
  })

  const [decks, setDecks] = useState<Array<RecommendationDeck>>()
  const [pagination, setPagination] = useState<Pagination>()
  const searchedTitleRef = useRef<HTMLInputElement>(null)
  const [searchedLeader, setSearchedLeader] = useState<{ value: string; label: string } | null>(
    null,
  )
  const [searchedCharacters, setSearchedCharacters] = useState<any>([])
  const [lastQuery, setLastQuery] = useState<SearchQuery>()

  const loadDecks = useCallback(
    async (selectedPage?: number) => {
      const _lastQuery: SearchQuery = {
        condition: {},
        opts: {
          page: selectedPage || lastQuery?.opts.page || 1,
          limit: 20,
        },
      }
      if (searchedTitleRef.current && searchedTitleRef.current.value) {
        _lastQuery.condition.title = { $regex: searchedTitleRef.current.value, $options: 'i' }
      }
      if (searchedLeader) {
        _lastQuery.condition.leaderName = { $regex: searchedLeader.value, $options: 'i' }
      }
      if (searchedCharacters && searchedCharacters.length > 0) {
        _lastQuery.condition['characters.name'] = {
          $in: searchedCharacters.map((c: any) => c?.value),
        }
      }
      const result = await api.post('/recommendation-deck/list', _lastQuery)
      const { decks: rDecks, page, total, totalPages } = result.data
      setDecks(convertCharacterData(rDecks))
      setPagination({
        page,
        total,
        totalPages,
      })
      setLastQuery(_lastQuery)
    },
    [searchedCharacters, searchedLeader],
  )

  const initPage = async (pageNumber: number) => {
    if (!searchParams) return
    try {
      const current = new URLSearchParams(Array.from(searchParams.entries()))
      current.set('page', String(pageNumber))
      router.replace(`${pathname}?${current.toString()}`)
      await loadDecks(pageNumber)
    } finally {
      /* empty */
    }
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const currentSearchParams = new URLSearchParams(window.location.search)
      setSearchParams(currentSearchParams)
    }
  }, [])

  useEffect(() => {
    if (!searchParams) return
    const pageNumber = parseInt(searchParams.get('page') || '', 10) || 1
    initPage(pageNumber)
  }, [searchParams])

  return (
    <div className="flex flex-col gap-[10px]">
      <div className="flex flex-col gap-[6px]">
        <div className="flex flex-col gap-[4px]">
          <div className="text-gray-600/90 font-bold">
            * 모든 덱은 설명과, 가이드 링크를 읽어 보시는 것을 추천드립니다. 현재 한섭 상황과
            돌파수에 따라 가능성 유무가 존재합니다.
          </div>
          <div className="text-gray-600/90 font-bold">
            * 리더 표기가 없는 덱도 있습니다. 오토프리셋 불러오기 시 자동으로 설정됩니다.
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
            <div className="min-w-[50px]">제목</div>
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
            <div className="min-w-[50px]">리더</div>
            <Select
              className="relative z-[60] w-[300px]"
              defaultValue={null}
              onChange={setSearchedLeader}
              options={CHARACTER_OPTIONS}
              components={{ Option: CharacterSelectOptionBox }}
              placeholder="리더를 검색하세요"
              isClearable
            />
          </div>
          <div className="flex items-center gap-[10px]">
            <div className="min-w-[50px]">승무원</div>
            <Select
              className="relative z-[50] w-[300px]"
              isMulti
              defaultValue={searchedCharacters}
              onChange={setSearchedCharacters}
              options={CHARACTER_OPTIONS}
              components={{ Option: CharacterSelectOptionBox }}
              placeholder="파티원을 추가하세요"
            />
          </div>
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
          <div className="flex flex-wrap gap-[4px]">
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
            {lastQuery.condition['characters.name'] && (
              <div className="border border-blue-gray-900 p-[4px] rounded whitespace-pre-line">
                [포함된 파티원:
                <span className="m-[2px]">
                  {lastQuery.condition['characters.name'].$in.map((originName: any) => {
                    return (
                      <span
                        key={createKey()}
                        className="inline-flex p-[4px] bg-green-400 text-white m-[2px] rounded"
                      >
                        {RS_CHARACTER_DICT[originName].name}
                      </span>
                    )
                  })}
                </span>
                ]
              </div>
            )}
          </div>
        )}
      </div>

      <div>{decks && <RdUserDeckList decks={decks} pagination={pagination} />}</div>

      {pagination && <PaginationList pagination={pagination} onSelectPage={initPage} />}
    </div>
  )
}

export default function RdUserPageS() {
  return (
    // <Suspense>
    <RdUserPage />
    // </Suspense>
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

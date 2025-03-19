'use client'

import Link from 'next/link'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React, { Suspense, useCallback, useEffect, useState } from 'react'
import { api } from '@/services/api/api.interceptor'
import { Pagination } from '@/const/api/pagination.interface'
import createKey from '@/services/key-generator'
import RdUserDeckList from '@/app/rd/user/rd-user-deck-list'
import { RS_CHARACTER_DICT } from '@/const/character/character.const'
import { RecommendationDeck } from '@/app/rd/rd-decks.const'
import { RecommendationUserDeck } from '@/app/rd/user/user-deck.interface'
import { PaginationList } from '@/app/components/pagination/pagination-list'

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

function RdUserPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()

  const [decks, setDecks] = useState<Array<RecommendationDeck>>()
  const [pagination, setPagination] = useState<Pagination>()

  const loadDecks = useCallback(async (selectedPage?: number) => {
    const result = await api.post('/recommendation-deck/list', {
      condition: {},
      opts: {
        page: selectedPage,
        limit: 20,
      },
    })
    const { decks: rDecks, page, total, totalPages } = result.data
    setDecks(convertCharacterData(rDecks))
    setPagination({
      page,
      total,
      totalPages,
    })
  }, [])

  const initPage = async (pageNumber: number) => {
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
    const pageNumber = parseInt(searchParams.get('page') || '', 10) || 1
    initPage(pageNumber)
  }, [searchParams])

  return (
    <div className="flex flex-col gap-[10px]">
      <div className="">
        <Link href="/rd/user/create">
          <div className="bg-blue-500 text-white inline-block p-[10px] shadow-md cursor-pointer">
            덱 생성하기
          </div>
        </Link>
      </div>

      <div>
        <RdUserDeckList decks={decks} pagination={pagination} />
      </div>

      {pagination && <PaginationList pagination={pagination} onSelectPage={initPage} />}
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

'use client'

import Link from 'next/link'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { Suspense, useCallback, useEffect, useState } from 'react'
import { api } from '@/services/api/api.interceptor'
import { Pagination } from '@/const/api/pagination.interface'
import createKey from '@/services/key-generator'
import RdUserDeckList from '@/app/rd/user/rd-user-deck-list'
import { RS_CHARACTER_DICT } from '@/const/character/character.const'

function RdUserPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()

  const [decks, setDecks] = useState([])
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
    setDecks(
      rDecks.map((deck: any) => {
        const fixedDeck = { ...deck }
        fixedDeck.characters = fixedDeck.characters.map((c: any) => {
          return {
            character: RS_CHARACTER_DICT[c.name],
            equipments: (c?.equipments || []).map((equipment: any) => equipment?.name),
          }
        })
        return fixedDeck
      }),
    )
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
      router.push(`${pathname}?${current.toString()}`)
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

      {/* PAGINATION START */}
      {pagination && (
        <div className="w-full flex justify-center mt-[15px]">
          <div className="flex gap-[4px]">
            {new Array(pagination.totalPages).fill(1).map((value, index) => {
              return (
                <div
                  onClick={() => initPage(index + 1)}
                  className={`cursor-pointer flex justify-center items-center w-[24px] h-[24px] text-[14px] font-bold ${index + 1 === pagination.page ? 'border text-[#5795dd]' : ''} hover:text-[#5795dd] hover:border`}
                  key={createKey()}
                >
                  {index + 1}
                </div>
              )
            })}
          </div>
        </div>
      )}
      {/* PAGINATION END */}
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

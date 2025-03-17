import createKey from '@/services/key-generator'
import React from 'react'
import { Pagination } from '@/const/api/pagination.interface'
import clsx from 'clsx'

export function PaginationList({
  onSelectPage,
  pagination,
}: {
  onSelectPage: (page: number) => void
  pagination: Pagination
}) {
  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-wrap">
        {new Array(pagination.totalPages).fill(1).map((value, index) => {
          return (
            <div
              onClick={() => onSelectPage(index + 1)}
              className={clsx(
                `cursor-pointer flex justify-center items-center w-[30px] h-[30px] text-[14px] font-bold border text-gray-700 hover:bg-gray-300`,
                `${pagination.page === index + 1 ? 'border-blue-gray-500 bg-gray-200' : 'border-gray-300'}`,
              )}
              key={createKey()}
            >
              {index + 1}
            </div>
          )
        })}
      </div>
    </div>
  )
}

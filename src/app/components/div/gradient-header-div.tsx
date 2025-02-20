import React, { PropsWithChildren } from 'react'
import clsx from 'clsx'

export function GradientHeaderDiv({ children, onClick, className }: PropsWithChildren<any>) {
  const defaultClassName =
    'bg-gradient-to-r from-blue-gray-900 to-white text-white ff-dh text-[26px] p-[8px] py-[4px] rounded border border-white'

  return (
    <div className={clsx(defaultClassName, className)} onClick={onClick}>
      {children}
    </div>
  )
}

import React, { PropsWithChildren } from 'react'
import clsx from 'clsx'

interface GradientButtonProps {
  children: React.ReactNode
  onClick?: () => void
  className?: string
}

export function GradientButton({
  children,
  onClick,
  className,
}: PropsWithChildren<GradientButtonProps>) {
  return (
    <div
      className={clsx(
        'inline-block text-white font-semibold shadow-lg cursor-pointer transition-all duration-300 bg-gradient-to-r from-blue-500 to-purple-500 hover:brightness-110 active:scale-95',
        className, // ✅ 외부에서 받은 className 추가
      )}
      onClick={onClick}
    >
      {children}
    </div>
  )
}

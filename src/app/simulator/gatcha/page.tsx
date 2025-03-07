'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const items = [
  {
    name: 'SSR 캐릭터',
    color: 'bg-yellow-400',
  },
  {
    name: 'SR 캐릭터',
    color: 'bg-purple-400',
  },
  {
    name: 'R 캐릭터',
    color: 'bg-blue-400',
  },
  {
    name: 'N 캐릭터',
    color: 'bg-gray-400',
  },
]

export default function SimulatorGatchaPage() {
  const [result, setResult] = useState<any>(null)
  const [isRolling, setIsRolling] = useState(false)

  const rollGacha = () => {
    if (isRolling) return
    setIsRolling(true)
    setResult(null)

    setTimeout(() => {
      const randomItem = items[Math.floor(Math.random() * items.length)]
      setResult(randomItem)
      setIsRolling(false)
    }, 2000)
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: isRolling ? [1, 1.2, 1] : 1 }}
        transition={{
          duration: 0.5,
          repeat: isRolling ? Infinity : 0,
        }}
        className="w-40 h-40 flex items-center justify-center bg-gray-800 rounded-xl shadow-xl"
      >
        {result ? (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{ duration: 0.5 }}
            className={`p-6 text-lg font-bold rounded-md ${result.color}`}
          >
            {result.name}
          </motion.div>
        ) : (
          <span className="text-lg">가챠를 돌려보세요!</span>
        )}
      </motion.div>

      <div
        className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
        onClick={rollGacha}
      >
        가챠 돌리기
      </div>
    </div>
  )
}

'use client'

import { useParams } from 'next/navigation'
import { RS_CHARACTERS } from '@/const/character/character.const'
import { convertCharacterThumbnailUrl, getColumnUrl, getFactionUrl } from '@/services/character-url'
import { useEffect, useState } from 'react'
import { RSCharacter } from '@/const/character/character.interface'

export default function CharacterDetailPage() {
  const params = useParams()
  const [character, setCharacter] = useState<RSCharacter>()

  useEffect(() => {
    if (!params) return
    const { name } = params
    if (!name) return
    setCharacter(RS_CHARACTERS.find((c) => c.originName === name)!)
  }, [params])
  return (
    <div>
      {character && (
        <div className="flex justify-center">
          <div className="relative w-[800px] rounded-[4px] border overflow-hidden shadow-md shadow-gray-800">
            <img
              className="w-full z-0"
              src="https://res.cloudinary.com/dqihpypxi/image/upload/w_600/v1739699861/resonance/etc/profile-bg_pxdpv5.png"
            />
            <img
              src={convertCharacterThumbnailUrl(character.thumbnail)}
              className="absolute bottom-0 left-0 z-10"
            />
            <div className="w-[450px] absolute right-0 z-20 top-0 text-white">
              {/* Profile Right Top */}
              <div className="relative mt-[20px] ff-dh">
                <div className="ml-[100px]">
                  <div className="text-[50px]">{character.name}</div>
                  <div className="ml-[10px] ff-ng">
                    <div className="">{character.originName}</div>
                    <div className="flex items-center gap-[10px]">
                      <div className="">{character.faction}</div>
                      <div className="ff-dh text-[20px]">{character.grade}</div>
                    </div>
                    <div className="flex items-center gap-[4px]">
                      <img src={getColumnUrl(character.column)} className="w-[60px]" />
                      {character.column}
                    </div>
                  </div>
                </div>
                <img
                  src={getFactionUrl(character.faction)}
                  className="w-[100px] top-0 left-[0] absolute"
                />
              </div>
              {/* ///////////////// */}
              <div className="p-[10px] pl-0">
                <hr className="border-white w-full" />
              </div>

              <div className="flex flex-col gap-[4px]">
                <div className="flex items-center gap-[10px]">
                  <div className="bg-gray-700 p-[4px]">생일</div>
                  <div className="bg-gray-700 p-[4px]">99월 99일</div>
                </div>

                <div className="flex items-center gap-[10px]">
                  <div className="bg-gray-700 p-[4px]">성별</div>
                  <div className="bg-gray-700 p-[4px]">{character.gender}</div>
                </div>

                <div className="flex items-center gap-[10px]">
                  <div className="bg-gray-700 p-[4px]">키</div>
                  <div className="bg-gray-700 p-[4px]">?cm</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

import { RecommendationDeck } from '@/app/rd/rd-decks.const'
import createKey from '@/services/key-generator'
import { Tooltip } from '@material-tailwind/react'
import { RsCharacterCard } from '@/app/components/character-frame/rs-character-card'
import { RsCardSize } from '@/app/components/character-frame/rs-card-size.enum'
import { getColumnUrl } from '@/services/character-url'
import React from 'react'

export function RecommendationDeckCard({ deck }: { deck: RecommendationDeck }) {
  const openLink = (link?: string) => {
    if (!link) return
    window.open(link, '_blank')
  }
  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      alert('복사되었습니다.')
    } catch (error) {
      alert(`Failed to copy text: ${error}`)
    }
  }
  const { autoPreset, title, desc, characters, leaderName, owner, descLink } = deck
  return (
    <div
      key={createKey()}
      className="flex flex-col p-[8px] border w-full border-gray-300 rounded shadow-md shadow-gray-400/30"
    >
      <div className="flex items-center gap-[4px] mb-[4px]">
        <div className="text-[17px]">{title}</div>
        {autoPreset && (
          <div>
            <Tooltip content="클릭시 오토 프리셋이 복사됩니다.">
              <img
                src="/img/clipboard.svg"
                className="w-[24px] cursor-pointer"
                onClick={async () => {
                  await copyToClipboard(autoPreset)
                }}
              />
            </Tooltip>
          </div>
        )}
      </div>

      <div className="flex gap-[4px] justify-between">
        <div className="flex flex-wrap min-w-[410px] gap-[4px]">
          {characters.map((character) => {
            const isLeader = leaderName === character.name
            return (
              <div key={createKey()} className="relative">
                {isLeader && (
                  <div className="absolute text-[18px] z-20 text-white w-full text-center font-bold mt-[4px]">
                    Leader
                  </div>
                )}
                <RsCharacterCard size={RsCardSize.SMALL} character={character} />
                <div className="h-[30px] py-[4px] flex items-center justify-center">
                  <img src={getColumnUrl(character.column)} className="h-full" />
                </div>
              </div>
            )
          })}
        </div>
        <div
          className={`overflow-y-scroll w-full whitespace-pre-line break-words p-[8px] border border-gray-300 rounded-[4px] shadow-gray-400/30 shadow-md ${descLink ? 'cursor-pointer hover:bg-blue-300/10' : ''}`}
          onClick={() => openLink(descLink)}
        >
          {desc}
        </div>
      </div>
      {owner && (
        <div className="text-right mt-[4px] text-blue-900 text-[14px]">
          출처 :{' '}
          {owner.link && (
            <a href={owner.link} target="_blank">
              @{owner?.name}
            </a>
          )}
        </div>
      )}
    </div>
  )
}

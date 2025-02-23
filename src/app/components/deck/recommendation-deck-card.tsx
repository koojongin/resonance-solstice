import { RecommendationDeck } from '@/app/rd/rd-decks.const'
import createKey from '@/services/key-generator'
import { Tooltip } from '@material-tailwind/react'
import {
  RsCharacterCard,
  RsEquipmentCard,
} from '@/app/components/character-frame/rs-character-card'
import { RsCardSize } from '@/app/components/character-frame/rs-card-size.enum'
import { getColumnUrl } from '@/services/character-url'
import React from 'react'
import { copyToClipboard } from '@/services/utils/copy-clipboard'

export function RecommendationDeckCard({ deck }: { deck: RecommendationDeck }) {
  const openLink = (link?: string) => {
    if (!link) return
    window.open(link, '_blank')
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
              <div className="flex items-center border border-blue-gray-900 rounded p-[2px] py-0 cursor-pointer hover:bg-green-100">
                <img
                  src="/img/clipboard.svg"
                  className="w-[24px] cursor-pointer"
                  onClick={async () => {
                    await copyToClipboard(autoPreset)
                    alert('복사됨')
                  }}
                />
              </div>
            </Tooltip>
          </div>
        )}
      </div>

      <div className="flex gap-[4px] justify-between">
        <div className="flex flex-wrap min-w-[650px] gap-[10px]">
          {characters.map((characterData) => {
            const { character, equipments } = characterData
            const isLeader = leaderName === character.name
            return (
              <div key={createKey()} className="relative w-[120px] flex flex-col gap-[6px]">
                {isLeader && (
                  <div className="top-[100px] absolute text-[18px] z-20 text-white w-full text-center font-bold mt-[4px]">
                    Leader
                  </div>
                )}
                <RsCharacterCard size={RsCardSize.RESPONSIVE} character={character} height={120} />
                {/* <div className="h-[30px] py-[4px] flex items-center justify-center"> */}
                {/*   <img src={getColumnUrl(character.column)} className="h-full" /> */}
                {/* </div> */}
                <RsEquipmentCard equipments={equipments || []} />
              </div>
            )
          })}
        </div>
        <div
          className={`ff-sdn overflow-y-scroll w-full whitespace-pre-line break-words p-[8px] border border-gray-300 rounded-[4px] shadow-gray-400/30 shadow-md ${descLink ? 'cursor-pointer hover:bg-blue-300/10' : ''}`}
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

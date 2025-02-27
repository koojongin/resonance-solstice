import React from 'react'
import { getMonsterFrameUrl, getMonsterTypeIconUrl } from '@/services/utils/monster-box-converter'
import { ExtendedRSMonster } from '@/const/monster/monster.interface'

export function MonsterBox({ monster }: { monster: ExtendedRSMonster }) {
  return (
    <div className="h-[167px] w-[125px] relative border-2">
      <div className="absolute top-0 z-20 m-[5px]">
        <img src={getMonsterTypeIconUrl(monster.type)} />
      </div>
      <img className="absolute top-0 z-0" src={getMonsterFrameUrl(monster.grade)} />
      <img
        className="absolute top-0 z-10"
        src="https://patchwiki.biligame.com/images/resonance/1/17/qesu3gsg6ujzo7l2d6skgogerfdpdlg.png"
      />
      <div className="relative left-0 top-[20px] p-[4px] h-[70px] z-20 rounded overflow-hidden">
        <img className="w-full" src={monster.thumbnail} />
      </div>
      <div className="absolute z-20 top-[98px] text-center text-white ff-dh truncate mx-auto w-full px-[18px]">
        {monster.name}
      </div>
      <div className="absolute z-20 top-[125px] px-[7px] ff-dh text-[14px] text-white w-full flex-wrap flex justify-between">
        <div className="flex items-center h-[16px] w-[52px] pl-[4px]">공 {monster.attack}</div>
        <div className="flex items-center h-[16px] w-[52px] pl-[4px]">체 {monster.hp}</div>
        <div className="flex items-center h-[16px] w-[52px] pl-[4px]">방 {monster.defence}</div>
      </div>
    </div>
  )
}

export function MonsterBoxResponsive({
  monster,
  withoutIconPadding,
}: {
  withoutIconPadding?: boolean
  monster: ExtendedRSMonster
}) {
  return (
    <div className="relative">
      {/* <img className="absolute bottom-0 z-0" src={getMaterialBgFrameUrl(monster.grade)} /> */}
      <img
        className="relative z-20 rounded w-full"
        src={monster.thumbnail || 'https://static.hdslb.com/images/member/noface.gif'}
        style={{ padding: `${withoutIconPadding ? '0' : '4px'}` }}
      />
      {/* <img className="absolute z-10 bottom-0" src={getMaterialBottomFrameUrl(monster.grade)} /> */}
    </div>
  )
}

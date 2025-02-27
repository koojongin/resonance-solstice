import React from 'react'
import {
  getMonsterFrameCss,
  getMonsterFrameUrl,
  getMonsterTypeIconUrl,
} from '@/services/utils/monster-box-converter'
import { ExtendedRSMonster } from '@/const/monster/monster.interface'

export function MonsterBoxSquare({ monster }: { monster: ExtendedRSMonster }) {
  return (
    <div className="relative bg-gradient-to-b from-blue-gray-800 via-indigo-500/70 to-blue-gray-900">
      <div
        className="absolute border-[4px] w-full h-full"
        style={{ borderImage: getMonsterFrameCss(monster.grade) }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(45deg,#ffffff33_25%,transparent_25%,transparent_75%,var(--grid-color)_75%,var(--grid-color)),linear-gradient(-45deg,var(--grid-color)_25%,transparent_25%,transparent_75%,var(--grid-color)_75%,var(--grid-color))] bg-[size:10px_10px]" />
      <img className="w-full relative z-20" src={monster.thumbnailFull || monster.thumbnail} />
    </div>
  )
}

export function MonsterBox({ monster }: { monster: ExtendedRSMonster }) {
  return (
    <div className="h-[173px] w-[125px] relative">
      <div className="absolute top-0 z-20 m-[5px]">
        <img src={getMonsterTypeIconUrl(monster.type)} />
      </div>
      <img className="absolute top-0 z-0" src={getMonsterFrameUrl(monster.grade)} />
      <img
        className="absolute top-0 z-10"
        src="https://patchwiki.biligame.com/images/resonance/1/17/qesu3gsg6ujzo7l2d6skgogerfdpdlg.png"
      />
      <div className="relative left-0 top-[25px] mx-[5px] h-[70px] z-20 rounded overflow-hidden flex items-center justify-center">
        <img className="w-full" src={monster.thumbnail} />
      </div>
      <div className="absolute z-20 top-[102px] text-center text-white ff-dh truncate mx-auto w-full px-[18px]">
        {monster.name}
      </div>
      <div className="absolute z-20 top-[128px] px-[7px] ff-dh text-[14px] text-white w-full flex-wrap flex justify-between">
        <div className="flex items-center h-[18px] w-[52px] pl-[4px]">공 {monster.attack}</div>
        <div className="flex items-center h-[18px] w-[52px] pl-[4px]">체 {monster.hp}</div>
        <div className="flex items-center h-[18px] w-[52px] pl-[4px]">방 {monster.defence}</div>
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

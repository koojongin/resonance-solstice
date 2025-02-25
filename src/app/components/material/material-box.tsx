import { ExtendedRSMaterial } from '@/const/material/material.type'
import {
  getMaterialBgFrameUrl,
  getMaterialBottomFrameUrl,
} from '@/services/utils/material-box-converter'
import React from 'react'

export function MaterialBox({ material }: { material: ExtendedRSMaterial }) {
  return (
    <div className="h-[80px] w-[80px] relative border-2">
      <img className="absolute bottom-0 z-0" src={getMaterialBgFrameUrl(material.grade)} />
      <img className="relative z-20 rounded w-full p-[4px]" src={material.thumbnail} />
      <img className="absolute z-10 bottom-0" src={getMaterialBottomFrameUrl(material.grade)} />
    </div>
  )
}

export function MaterialBoxResponsive({
  material,
  withoutIconPadding,
}: {
  withoutIconPadding?: boolean
  material: ExtendedRSMaterial
}) {
  return (
    <div className="relative">
      <img className="absolute bottom-0 z-0" src={getMaterialBgFrameUrl(material.grade)} />
      <img
        className="relative z-20 rounded w-full"
        src={material.thumbnail || 'https://static.hdslb.com/images/member/noface.gif'}
        style={{ padding: `${withoutIconPadding ? '0' : '4px'}` }}
      />
      <img className="absolute z-10 bottom-0" src={getMaterialBottomFrameUrl(material.grade)} />
    </div>
  )
}

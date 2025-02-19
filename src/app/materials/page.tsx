'use client'

import React, { useState } from 'react'
import _ from 'lodash'
import { MATERIALS, RSMaterial } from '@/const/material.const'
import {
  getMaterialBgFrameUrl,
  getMaterialBottomFrameUrl,
} from '@/services/utils/material-box-converter'
import createKey from '@/services/key-generator'

type ExtendedRSMaterial = RSMaterial & { name: string }
export default function MaterialsPage() {
  const [materials, setMaterials] = useState<ExtendedRSMaterial[]>(
    _.map(MATERIALS, (value, key) => ({
      name: key,
      grade: value.grade,
      desc: value.desc,
      thumbnail: value.thumbnail,
    })),
  )
  return (
    <div className="flex flex-col gap-[8px]">
      {materials.map((material) => {
        return (
          <div key={createKey()} className="flex gap-[4px] border items-stretch shadow-md">
            <div className="flex items-center justify-center">
              <MaterialBox material={material} />
            </div>
            <div className="flex flex-col p-[8px] px-[4px] gap-[4px]">
              <div className="ff-dh text-[16px] text-white text-shadow-outline">
                {material.name}
              </div>
              <hr />
              <div className="whitespace-pre-line leading-tight">{material.desc}</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
function MaterialBox({ material }: { material: ExtendedRSMaterial }) {
  return (
    <div className="h-[80px] w-[80px] relative border-2">
      <img className="absolute bottom-0 z-0" src={getMaterialBgFrameUrl(material.grade)} />
      <img className="relative z-20 rounded w-full p-[4px]" src={material.thumbnail} />
      <img className="absolute z-10 bottom-0" src={getMaterialBottomFrameUrl(material.grade)} />
    </div>
  )
}

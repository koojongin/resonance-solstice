'use client'

import React, { useState } from 'react'
import _ from 'lodash'
import { MATERIALS } from '@/const/material.const'
import createKey from '@/services/key-generator'
import { useNextDepthNavigator } from '@/services/navigation'
import { ExtendedRSMaterial } from '@/const/material/material.type'
import { MaterialBox } from '@/app/components/material/material-box'

export default function MaterialsPage() {
  const { router } = useNextDepthNavigator()
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
          <div
            key={createKey()}
            className="flex gap-[4px] border items-stretch shadow-md cursor-pointer"
            onClick={() => router.push(`/materials/${material.name}`)}
          >
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

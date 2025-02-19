import createKey from '@/services/key-generator'
import { MATERIALS } from '@/const/material.const'
import React from 'react'
import { RS_GRADE } from '@/const/character/character.enum'
import {
  getMaterialBgFrameUrl,
  getMaterialBottomFrameUrl,
} from '@/services/utils/material-box-converter'

export function CharacterResonanceUpgradePriceBox({
  materials,
}: {
  materials: { [key: string]: { name: string; amount: number }[] }
}) {
  return (
    <div className="flex flex-col gap-[4px]">
      <div className="bg-gradient-to-r from-blue-gray-900 to-white text-white ff-dh text-[26px] p-[8px] py-[4px] rounded">
        공명 강화 비용
      </div>
      <div className="flex flex-col gap-[4px]">
        {Object.keys(materials).map((materialNumber: string, index) => {
          const materialShells = materials[materialNumber]
          return (
            <div
              key={createKey()}
              className="items-center flex gap-[10px] bg-blue-gray-900/60 p-[10px] shadow-xl rounded"
            >
              <div className="text-white ff-dh text-[25px] min-w-[70px] text-center">
                {index + 1}단계
              </div>
              <div className="flex gap-[4px]">
                {materialShells.map((materialShell) => {
                  return (
                    <div
                      key={createKey()}
                      className="w-[100px] flex flex-col items-center gap-[4px]"
                    >
                      <UpgradeMaterialBox materialShell={materialShell} />
                      <div className="px-[4px] text-white ff-dh text-shadow-outline text-center flex items-center justify-center whitespace-pre-line break-all">
                        {materialShell.name}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export function UpgradeMaterialBox({ materialShell }: { materialShell: any }) {
  const material = MATERIALS[materialShell.name]
  return (
    <div className="h-[80px] w-[80px] relative border-2">
      <img className="absolute bottom-0 z-0" src={getMaterialBgFrameUrl(material.grade)} />
      <img className="relative z-20 rounded w-full p-[4px]" src={material.thumbnail} />
      <img className="absolute z-10 bottom-0" src={getMaterialBottomFrameUrl(material.grade)} />
      <div className="absolute z-30 bottom-0 right-0 text-white ff-dh text-[16px] text-shadow-outline p-[4px]">
        {materialShell.amount.toLocaleString()}
      </div>
    </div>
  )
}

import createKey from '@/services/key-generator'
import { MATERIALS } from '@/const/material.const'
import React from 'react'
import {
  getMaterialBgFrameUrl,
  getMaterialBottomFrameUrl,
} from '@/services/utils/material-box-converter'
import { formatNumber } from '@/services/utils/number.formatter'
import { Tooltip } from '@material-tailwind/react'
import { LinkMaterialOrEquipment } from '@/app/components/material/link-material-or-equipment'
import { GradientHeaderDiv } from '@/app/components/div/gradient-header-div'

export function CharacterResonanceUpgradePriceBox({
  materials,
}: {
  materials: { [key: string]: { name: string; amount: number }[] }
}) {
  return (
    <div className="flex flex-col gap-[4px]">
      <GradientHeaderDiv>공명 강화 비용</GradientHeaderDiv>
      <div className="flex flex-wrap gap-[4px]">
        {Object.keys(materials).map((materialNumber: string, index) => {
          const materialShells = materials[materialNumber]
          return (
            <div
              key={createKey()}
              className="w-full items-center flex gap-[10px] bg-blue-gray-900/60 p-[10px] shadow-xl rounded"
            >
              <div className="text-white ff-dh text-[25px] min-w-[70px] text-center">
                {index + 1}단계
              </div>
              <div className="flex flex-wrap gap-[1px]">
                {materialShells.map((materialShell) => {
                  return (
                    <div
                      key={createKey()}
                      className="w-[90px] flex flex-col justify-center items-center gap-[4px]"
                    >
                      <div className="w-[50px]">
                        <UpgradeMaterialBox materialShell={materialShell} />
                      </div>
                      <div className="ff-sdn font-bold text-[14px] text-center px-[4px] text-white ff-dh text-shadow-outline text-center flex items-center justify-center whitespace-pre-line break-all">
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
  const material = {
    name: materialShell.name,
    ...MATERIALS[materialShell.name],
  }
  return (
    <Tooltip
      content={
        <div>
          <div>{materialShell.name}</div>
        </div>
      }
    >
      <div>
        <LinkMaterialOrEquipment material={material}>
          <div className="relative border-2 cursor-pointer">
            <img className="absolute bottom-0 z-0" src={getMaterialBgFrameUrl(material.grade)} />
            <img className="relative z-20 rounded w-full p-[4px]" src={material.thumbnail} />
            <img
              className="absolute z-10 bottom-0"
              src={getMaterialBottomFrameUrl(material.grade)}
            />
            <div className="absolute z-30 bottom-0 right-0 text-white ff-dh text-[16px] text-shadow-outline p-[2px]">
              {formatNumber(materialShell.amount)}
            </div>
          </div>
        </LinkMaterialOrEquipment>
      </div>
    </Tooltip>
  )
}

'use client'

import { useParams } from 'next/navigation'
import React from 'react'
import { GradientHeaderDiv } from '@/app/components/div/gradient-header-div'
import { ALL_NAMED_MAPS } from '@/const/archive/named-map.const'
import createKey from '@/services/key-generator'
import { GradientButton } from '@/app/components/button/gradient-button'
import { useNextDepthNavigator } from '@/services/navigation'
import { MONSTERS } from '@/const/monster/monster.const'
import { MonsterGrade, MonsterType, RSMonsterAbilityData } from '@/const/monster/monster.interface'
import { ARCHIVE_ABILITIES } from '@/const/archive/ability.const'
import { ArchiveTooltipBox } from '@/services/utils/highlight-text'

export default function MonsterDetailPage() {
  const { name } = useParams()
  const { router } = useNextDepthNavigator()

  const decodedName = decodeURIComponent(name as string)

  const monster = MONSTERS[decodedName]
  if (!monster) return <div>검색된 몬스터 데이터 없음.</div>

  const relatedMaps = ALL_NAMED_MAPS.filter((map) => {
    const exchangeItems = map['거래소'] || []
    return exchangeItems.filter((item) => item.name === decodedName).length > 0
  })

  let frameCss = ''
  if (monster.grade === MonsterGrade.ARCHNEMESIS) {
    frameCss = 'linear-gradient(to right, violet, orange, yellow, green, blue, indigo, skyblue) 1'
  }
  if (monster.grade === MonsterGrade.ELITE) frameCss = 'linear-gradient(to right,violet,fuchsia) 1'
  if (monster.grade === MonsterGrade.NORMAL)
    frameCss = 'linear-gradient(to right, skyblue, skyblue) 1'
  return (
    <div className="flex flex-col gap-[10px]">
      <div className="flex flex-col gap-[4px]">
        <GradientHeaderDiv>몬스터 정보</GradientHeaderDiv>
        <div
          className="flex gap-[4px] items-stretch bg-gray-800/80 border-[3px] p-[10px] rounded shadow-md shadow-gray-600 min-h-[200px] bg-cover"
          style={{
            backgroundImage: `url(https://patchwiki.biligame.com/images/resonance/1/15/rnk1ixlziks176gslros7c3tfon5xz7.png)`,
            borderImage: frameCss,
          }}
        >
          <div className="relative flex flex-col justify-between">
            <div className="min-w-[240px] w-[240px] relative rounded overflow-hidden shadow-md">
              <img
                className="w-full top-0 relative z-20 rounded w-full p-[4px]"
                src={monster.thumbnailFull || monster.thumbnail}
              />
              <MonsterTypeIconBox type={monster.type} />
              {monster?.camp && (
                <img
                  className="w-full top-0 right-0 absolute max-w-[60px] z-20 rounded"
                  src={monster.camp}
                />
              )}
            </div>
            <div className="p-[10px] ff-dh text-[24px] text-white flex flex-col gap-[2px]">
              <div>공격력 : {monster.attack}</div>
              <div>방어력 : {monster.defence}</div>
              <div>체력 : {monster.hp}</div>
            </div>
          </div>

          <div className="text-white ff-dh w-full flex flex-col gap-[4px]">
            <div className="text-[20px]">{monster.grade}</div>
            <div className="text-[24px]">{decodedName}</div>
            <div className="text-[20px] flex flex-col gap-[4px]">
              <div className="flex bg-black/70 p-[2px] rounded border-2 border-gray-300">
                <div className="w-[4px] min-h-full bg-blue-400" />
                <div className="py-[4px] w-[50px] flex flex-col gap-[4px] items-center justify-between">
                  <img
                    className="w-[40px]"
                    src="https://patchwiki.biligame.com/images/resonance/1/1f/6bgnbeh81zbiqbh3p7uzzxbe3dr580g.png"
                  />
                  <div>특성</div>
                </div>
                {monster?.traits?.skills && (
                  <MonsterAbilityListBox skills={monster.traits.skills} />
                )}
              </div>
              <div className="flex bg-black/70 p-[2px] rounded border-2 border-gray-300">
                <div className="w-[4px] min-h-full bg-blue-400" />
                <div className="py-[4px] w-[50px] flex flex-col gap-[4px] items-center justify-between">
                  <img
                    className="w-[40px]"
                    src="https://patchwiki.biligame.com/images/resonance/9/9c/2jmos7f1uzfdepp01q96jp8jexu5587.png"
                  />
                  <div>저항</div>
                </div>
                {monster?.resistance?.skills && (
                  <MonsterAbilityListBox skills={monster.resistance.skills} />
                )}
              </div>
              <div className="flex bg-black/70 p-[2px] rounded border-2 border-gray-300">
                <div className="w-[4px] min-h-full bg-blue-400" />
                <div className="py-[4px] w-[50px] flex flex-col gap-[4px] items-center justify-between">
                  <img
                    className="w-[40px]"
                    src="https://patchwiki.biligame.com/images/resonance/1/19/grsorur9rxoyvavzpz1astp5zebrqgn.png"
                  />
                  <div>약점</div>
                </div>
                {monster?.weakness?.skills && (
                  <MonsterAbilityListBox skills={monster.weakness.skills} />
                )}
              </div>
            </div>
            <div className="p-[10px] bg-gray-800/40 w-full min-h-[120px] rounded border-2 border-gray-700 shadow-md ff-sdn">
              {monster.desc && (
                <div className="whitespace-pre-line break-words">{monster.desc}</div>
              )}
              {!monster.desc && (
                <div className="whitespace-pre-line break-words">
                  몬스터 설명 데이터가 없습니다.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <hr />

      <div>
        <GradientHeaderDiv>관련된 지역</GradientHeaderDiv>
        <div className="flex flex-wrap gap-[4px]">
          {relatedMaps.map((map) => {
            return (
              <div key={createKey()}>
                <GradientButton
                  className="cursor-pointer p-[8px] rounded shadow-lg"
                  onClick={() => router.push(`/map/named/${map.name}`)}
                >
                  {map.name}
                </GradientButton>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

function MonsterAbilityListBox({ skills }: { skills: RSMonsterAbilityData[] }) {
  const { router } = useNextDepthNavigator()
  return (
    <div className="flex flex-wrap py-[4px] gap-[4px]">
      {skills.map((skill) => {
        const ability = ARCHIVE_ABILITIES[skill.name]
        return (
          <ArchiveTooltipBox key={createKey()} name={skill.name}>
            <div
              className="cursor-pointer min-w-[50px] flex flex-col items-center justify-between"
              onClick={() => {
                router.push(`/archive/${skill.name}`)
              }}
            >
              <img className="w-[40px]" src={ability.thumbnail} />
              <div className="flex items-center justify-center">{skill.name}</div>
            </div>
          </ArchiveTooltipBox>
        )
      })}
    </div>
  )
}

function MonsterTypeIconBox({ type }: { type: MonsterType }) {
  let src
  if (type === MonsterType.BETULA) {
    src = 'https://patchwiki.biligame.com/images/resonance/1/1e/m50qjp1e7n6hrn313jk0x7m9wlfu241.png'
  }
  if (type === MonsterType.DORMANT) {
    src = 'https://patchwiki.biligame.com/images/resonance/0/09/azscj99ztxs9ixv8obqxdasatle34pn.png'
  }
  if (type === MonsterType.ETC) {
    src = 'https://patchwiki.biligame.com/images/resonance/3/38/fvhgwbvpdwbmkstxqr6f8jocd1xk8o7.png'
  }
  if (type === MonsterType.HUMAN) {
    src = 'https://patchwiki.biligame.com/images/resonance/0/05/ay0pmzyp8p480w0h4lezzbud3h1kf9g.png'
  }
  if (type === MonsterType.MACHINE) {
    src = 'https://patchwiki.biligame.com/images/resonance/c/c3/kipi8x5sxjbquo24xukkfp85ui0hfo2.png'
  }
  return <img className="absolute top-0 w-[40px]" src={src} />
}

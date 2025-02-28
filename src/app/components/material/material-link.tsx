import { MATERIAL_LINKS } from '@/const/material/material.link.const'
import clsx from 'clsx'
import Link from 'next/link'
import { ALL_MAP_NAMES } from '@/const/archive/named-map.const'
import _ from 'lodash'

export function MaterialStringLink({
  text,
  className,
  children,
}: {
  text: string
  className?: string
  children: any
}) {
  const materialLink = MATERIAL_LINKS[text]

  const splitedText = text.split('-').map((a) => a.trim())
  const [matchedMapName] = _.intersection(splitedText, ALL_MAP_NAMES)
  if (!materialLink && !matchedMapName) return children

  const matchedMapLink = `/map/named/${matchedMapName}`

  return (
    <Link className={clsx(className, 'shadow-md')} href={materialLink || matchedMapLink}>
      {children}
    </Link>
  )
}

import { MATERIAL_LINKS } from '@/const/material/material.link.const'
import clsx from 'clsx'
import Link from 'next/link'
import { ALL_MAP_NAMES } from '@/const/archive/named-map.const'

export function ItemStringLinkWithMap({
  text,
  className,
  children,
}: {
  text: string
  className?: string
  children: any
}) {
  const materialLink = MATERIAL_LINKS[text]

  const [matchedMapName] = ALL_MAP_NAMES.filter((name) => text.includes(name))
  if (!materialLink && !matchedMapName) return children

  const matchedMapLink = `/map/named/${matchedMapName}`

  return (
    <Link
      className={clsx(
        'shadow-md bg-blue-500 text-white rounded shadow-blue-100 border-blue-300 border-dashed hover:scale-105',
        className,
      )}
      href={materialLink || matchedMapLink}
    >
      {children}
    </Link>
  )
}

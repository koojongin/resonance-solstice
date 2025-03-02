import { LinkItem } from '@/app/components/material/link-material-or-equipment'
import { ExtendedUnionRSItem } from '@/const/material/index.type'
import { Tooltip } from '@material-tailwind/react'

export function ItemTooltipBox({ children, item }: { item: ExtendedUnionRSItem; children: any }) {
  return (
    <Tooltip content={item.name}>
      <div>
        <LinkItem item={item}>{children}</LinkItem>
      </div>
    </Tooltip>
  )
}

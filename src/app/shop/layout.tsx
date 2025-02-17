import { ShopHeaderBox } from '@/app/shop/shop-header-box'

export default function ShopLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-[10px]">
      <ShopHeaderBox />
      <div>{children}</div>
    </div>
  )
}

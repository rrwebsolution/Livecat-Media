import { brand } from "@/config/site"

/** The official LiveCat icon, shown as supplied: no frame, background or effects. */
export function BrandIcon({ className }: { className?: string }) {
  return (
    <img
      src={brand.icon.small}
      srcSet={`${brand.icon.small} 96w, ${brand.icon.medium} 192w`}
      sizes="48px"
      width={96}
      height={96}
      alt=""
      className={className}
    />
  )
}

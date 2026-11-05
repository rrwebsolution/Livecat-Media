import { brand, footerLinks } from "@/config/site"
import { cn } from "@/lib/utils"
import { BrandIcon } from "./BrandIcon"

const currentYear = new Date().getFullYear()

export function Footer({ wide = false }: { wide?: boolean }) {
  return (
    <footer className="bg-navy">
      <div className={cn("mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8", wide && "max-w-[90rem] lg:px-10")}>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <p className="flex items-center gap-2.5 text-lg font-bold tracking-tight">
              <BrandIcon className="size-9" />
              {brand.name}
            </p>
            <p className="mt-2 text-muted-foreground">{brand.tagline}</p>
          </div>

          <ul className="flex flex-wrap gap-x-6 gap-y-1">
            {footerLinks.map((link) => (
              <li key={link.label}>
                {link.href ? (
                  <a
                    href={link.href}
                    className="inline-flex min-h-11 items-center rounded-md text-sm font-medium transition-colors hover:text-muted-foreground"
                  >
                    {link.label}
                  </a>
                ) : (
                  <span className="inline-flex min-h-11 items-center text-sm text-muted-foreground">{link.label}</span>
                )}
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-8 border-t border-panel-2 pt-6 text-sm text-muted-foreground">
          © {currentYear} {brand.name}. OBS, EasyWorship, and YouTube are trademarks of their respective owners. LiveCat is not affiliated with them.
        </p>
      </div>
    </footer>
  )
}

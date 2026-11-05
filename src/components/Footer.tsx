import { brand, footerGroups } from "@/config/site"
import { cn } from "@/lib/utils"
import { BrandIcon } from "./BrandIcon"

const currentYear = new Date().getFullYear()

export function Footer({ wide = false }: { wide?: boolean }) {
  return (
    <footer className="relative border-t border-white/10 bg-navy/80 backdrop-blur-sm">
      <div className={cn("mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16", wide && "max-w-[90rem] lg:px-10")}>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr]">
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#top" className="inline-flex items-center gap-2.5 rounded-md text-lg font-bold tracking-tight">
              <BrandIcon className="size-9" />
              {brand.name}
            </a>
            <p className="mt-4 max-w-sm leading-relaxed text-muted-foreground">{brand.description}</p>
            <p className="mt-4 text-sm font-semibold">{brand.tagline}</p>
          </div>

          {footerGroups.map((group) => (
            <nav key={group.title} aria-label={group.title}>
              <h2 className="text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">{group.title}</h2>
              <ul className="mt-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    {link.href ? (
                      <a
                        href={link.href}
                        className="inline-flex min-h-10 items-center text-sm font-medium transition-colors hover:text-brand"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <span className="inline-flex min-h-10 items-center text-sm text-muted-foreground">{link.label}</span>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-sm text-muted-foreground lg:flex-row lg:justify-between">
          <p>
            © {currentYear} {brand.name}. All rights reserved.
          </p>
          <p>OBS, EasyWorship, and YouTube are trademarks of their respective owners. LiveCat is not affiliated with them.</p>
        </div>
      </div>
    </footer>
  )
}

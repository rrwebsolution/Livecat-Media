import { Menu, X } from "lucide-react"
import { useEffect, useState } from "react"
import { brand, navLinks } from "@/config/site"
import { cn } from "@/lib/utils"
import { BrandIcon } from "./BrandIcon"
import { WindowsDownloadButton } from "./PlatformButtons"

export function Navbar({ square = false }: { square?: boolean }) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", closeOnEscape)
    return () => window.removeEventListener("keydown", closeOnEscape)
  }, [open])

  return (
    <header className="sticky top-0 z-50 border-b border-panel-2 bg-navy">
      <nav
        aria-label="Main"
        className={cn(
          "mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8",
          square && "max-w-[90rem] lg:px-10",
        )}
      >
        <a href="#top" className="flex items-center gap-2.5 rounded-md font-bold tracking-tight">
          <BrandIcon className="size-9" />
          <span className="text-base sm:text-lg">{brand.name}</span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <WindowsDownloadButton size="md" className={cn("ml-3", square && "rounded-none")} />
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Close menu" : "Open menu"}
          className={cn("flex size-11 items-center justify-center rounded-lg border border-panel-2 lg:hidden", square && "rounded-none")}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {open && (
        <div id="mobile-navigation" className="border-t border-panel-2 bg-navy px-4 pt-2 pb-4 sm:px-6 lg:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="flex min-h-12 items-center rounded-md px-2 text-base font-medium"
            >
              {link.label}
            </a>
          ))}
          <WindowsDownloadButton className={cn("mt-2 w-full", square && "rounded-none")} onClick={() => setOpen(false)} />
        </div>
      )}
    </header>
  )
}

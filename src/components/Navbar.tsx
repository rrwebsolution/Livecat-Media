import { Menu, X } from "lucide-react"
import { AnimatePresence, m } from "motion/react"
import { useEffect, useState } from "react"
import { brand, navLinks } from "@/config/site"
import { cn } from "@/lib/utils"
import { BrandIcon } from "./BrandIcon"

// No download button here on purpose: the Hero and the Download section already have one.

export function Navbar({ square = false }: { square?: boolean }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 12)
    update()
    window.addEventListener("scroll", update, { passive: true })
    return () => window.removeEventListener("scroll", update)
  }, [])

  useEffect(() => {
    if (!open) return
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", closeOnEscape)
    return () => window.removeEventListener("keydown", closeOnEscape)
  }, [open])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b backdrop-blur-xl transition-colors duration-300",
        scrolled || open ? "border-white/10 bg-navy/75" : "border-transparent bg-navy/30",
      )}
    >
      <nav
        aria-label="Main"
        className={cn(
          "mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:h-18 lg:px-8",
          square && "max-w-[90rem] lg:px-10",
        )}
      >
        <a href="#top" className="flex items-center gap-2.5 rounded-md font-bold tracking-tight">
          <BrandIcon className="size-9" />
          <span className="text-base sm:text-lg">{brand.name}</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group relative rounded-md px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-white"
              >
                {link.label}
                <span
                  aria-hidden="true"
                  className="absolute inset-x-3.5 -bottom-0.5 h-px origin-left scale-x-0 bg-brand transition-transform duration-300 group-hover:scale-x-100"
                />
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Close menu" : "Open menu"}
          className={cn(
            "flex size-11 items-center justify-center rounded-lg border border-white/10 bg-white/5 md:hidden",
            square && "rounded-none",
          )}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      <AnimatePresence initial={false}>
        {open && (
          <m.div
            id="mobile-navigation"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden border-t border-white/10 md:hidden"
          >
            <div className="px-4 pt-2 pb-4 sm:px-6">
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
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </header>
  )
}

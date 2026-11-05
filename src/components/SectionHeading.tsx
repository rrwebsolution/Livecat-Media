import type { ReactNode } from "react"
import { cn } from "@/lib/utils"
import { Reveal } from "./Reveal"

export function SectionHeading({
  eyebrow,
  title,
  children,
  align = "center",
}: {
  eyebrow?: string
  title: string
  children?: ReactNode
  align?: "center" | "left"
}) {
  return (
    <Reveal className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      {eyebrow && (
        <p
          className={cn(
            "inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase sm:text-sm",
          )}
        >
          <span aria-hidden="true" className="h-px w-6 bg-brand" />
          {eyebrow}
          {align === "center" && <span aria-hidden="true" className="h-px w-6 bg-brand" />}
        </p>
      )}
      <h2 className="mt-4 text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl">{title}</h2>
      {children && <p className="mt-5 text-lg leading-relaxed text-pretty text-muted-foreground">{children}</p>}
    </Reveal>
  )
}

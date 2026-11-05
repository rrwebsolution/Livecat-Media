import type { ReactNode } from "react"
import { cn } from "@/lib/utils"
import { Reveal } from "./Reveal"

export function SectionHeading({
  title,
  children,
  align = "center",
}: {
  title: string
  children?: ReactNode
  align?: "center" | "left"
}) {
  return (
    <Reveal className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl">{title}</h2>
      {children && <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{children}</p>}
    </Reveal>
  )
}

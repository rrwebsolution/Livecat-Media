import { Check, Minus, Plus } from "lucide-react"
import { compareColumns, compareFootnote, compareIntro, comparison, type CompareMark } from "@/config/content"
import { cn } from "@/lib/utils"
import { Reveal } from "./Reveal"
import { SectionHeading } from "./SectionHeading"

const markText: Record<CompareMark, string> = { yes: "Built in", extra: "With extra setup", no: "Not built in" }

function Mark({ value, brand = false }: { value: CompareMark; brand?: boolean }) {
  const Icon = value === "yes" ? Check : value === "extra" ? Plus : Minus
  return (
    <span
      className={cn(
        "inline-flex size-8 shrink-0 items-center justify-center rounded-full",
        value === "yes" ? (brand ? "bg-brand text-white" : "bg-white/15 text-white") : "bg-white/5 text-muted-foreground",
      )}
      title={markText[value]}
    >
      <Icon className="size-4" aria-hidden="true" />
      <span className="sr-only">{markText[value]}</span>
    </span>
  )
}

export function Compare() {
  return (
    <section id="compare" className="relative">
      <div aria-hidden="true" className="section-line mx-auto max-w-5xl" />
      <div className="mx-auto max-w-5xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <SectionHeading eyebrow="Compare" title="LiveCat and OBS Studio">
          {compareIntro}
        </SectionHeading>

        <Reveal className="mt-12 overflow-x-auto rounded-2xl border border-white/10 bg-panel/60 backdrop-blur-sm">
          <table className="w-full min-w-[20rem] border-collapse text-left">
            <caption className="sr-only">LiveCat compared with OBS Studio</caption>
            <thead>
              <tr className="border-b border-white/10 text-xs font-semibold tracking-[0.15em] text-muted-foreground uppercase sm:text-sm">
                <th scope="col" className="px-4 py-4 font-semibold sm:px-6">
                  Feature
                </th>
                <th scope="col" className="w-24 px-2 py-4 text-center font-semibold text-white sm:w-40">
                  {compareColumns.livecat}
                </th>
                <th scope="col" className="w-28 px-2 py-4 text-center font-semibold sm:w-56">
                  {compareColumns.others}
                </th>
              </tr>
            </thead>
            <tbody>
              {comparison.map(({ feature, livecat, others, note }) => (
                <tr key={feature} className="border-b border-white/5 last:border-0">
                  <th scope="row" className="px-4 py-4 font-medium sm:px-6">
                    {feature}
                  </th>
                  <td className="px-2 py-4 text-center">
                    <Mark value={livecat} brand />
                  </td>
                  <td className="px-2 py-4 text-center">
                    <span className="flex flex-col items-center gap-1">
                      <Mark value={others} />
                      {note && <span className="text-xs leading-snug text-muted-foreground">{note}</span>}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>

        <Reveal className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
          {(["yes", "extra", "no"] as const).map((v) => (
            <span key={v} className="inline-flex items-center gap-2">
              <Mark value={v} brand={v === "yes"} />
              {markText[v]}
            </span>
          ))}
        </Reveal>
        <Reveal>
          <p className="mx-auto mt-6 max-w-3xl text-center text-sm leading-relaxed text-pretty text-muted-foreground">
            {compareFootnote}
          </p>
        </Reveal>
      </div>
    </section>
  )
}

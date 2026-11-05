import { Check } from "lucide-react"
import { Reveal } from "./Reveal"
import { SectionHeading } from "./SectionHeading"

// Confirmed requirements only. Add CPU, RAM, GPU or storage here once they have been provided.
const windowsRequirements = ["Windows 10 or Windows 11", "64-bit"]

export function SystemRequirements() {
  return (
    <section id="system-requirements" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <SectionHeading title="System Requirements" />

      <Reveal className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-2">
        <div className="rounded-xl border border-brand bg-panel p-6 sm:p-8">
          <h3 className="text-xl font-semibold">Windows</h3>
          <ul className="mt-4 space-y-3">
            {windowsRequirements.map((requirement) => (
              <li key={requirement} className="flex items-center gap-3">
                <Check className="size-5 shrink-0 text-success" aria-hidden="true" />
                {requirement}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border border-panel-2 bg-panel p-6 sm:p-8">
          <h3 className="text-xl font-semibold">macOS</h3>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            macOS system requirements will be announced when the macOS version becomes available.
          </p>
        </div>
      </Reveal>
    </section>
  )
}

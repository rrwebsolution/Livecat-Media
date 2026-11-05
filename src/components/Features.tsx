import { features } from "@/config/content"
import { Reveal } from "./Reveal"
import { SectionHeading } from "./SectionHeading"


export function Features() {
  return (
    <section id="features" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <SectionHeading title="Powerful Features for Your Production" />

      <ul className="mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:gap-5">
        {features.map(({ title, text, icon: Icon }, index) => (
          <li key={title}>
            <Reveal delay={(index % 3) * 60} className="h-full">
              <article className="h-full rounded-xl border border-brand bg-panel p-6 transition-colors duration-200 hover:bg-panel-2">
                {/* White on a solid blue tile keeps the icon legible; blue alone is too faint on this navy */}
                <span className="flex size-11 items-center justify-center rounded-lg bg-brand">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-semibold">{title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{text}</p>
              </article>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  )
}

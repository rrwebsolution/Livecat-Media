import { m } from "motion/react"
import type { MouseEvent } from "react"
import { coreFeatures } from "@/config/content"
import { fadeUp, inView, stagger } from "@/lib/motion"
import { SectionHeading } from "./SectionHeading"

/** Moves the card's light to the pointer (see .spotlight-card in index.css). */
function followPointer(event: MouseEvent<HTMLElement>) {
  const card = event.currentTarget
  const box = card.getBoundingClientRect()
  card.style.setProperty("--x", `${event.clientX - box.left}px`)
  card.style.setProperty("--y", `${event.clientY - box.top}px`)
}

export function Features() {
  return (
    <section id="features" className="relative">
      <div aria-hidden="true" className="section-line mx-auto max-w-5xl" />
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <SectionHeading eyebrow="Features" title="Everything your production needs, in one place">
          From the first lyric slide to the livestream, LiveCat brings presentation and production tools together.
        </SectionHeading>

        <m.ul
          variants={stagger(0.09)}
          initial="hidden"
          whileInView="show"
          viewport={inView}
          className="mt-14 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-5"
        >
          {coreFeatures.map(({ title, text, icon: Icon }, index) => (
            <m.li key={title} variants={fadeUp}>
              <article
                onMouseMove={followPointer}
                className="spotlight-card group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-panel/60 p-7 backdrop-blur-sm transition-[border-color,translate,box-shadow] duration-300 hover:-translate-y-1 hover:border-brand/60 hover:shadow-[0_24px_60px_-24px_rgb(0_102_255/0.55)]"
              >
                <div className="relative flex items-start justify-between">
                  <span className="flex size-12 items-center justify-center rounded-xl bg-brand transition-transform duration-300 group-hover:scale-110">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <span aria-hidden="true" className="font-mono text-xs text-muted-foreground/60">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="relative mt-6 text-lg font-semibold tracking-tight">{title}</h3>
                <p className="relative mt-2 leading-relaxed text-muted-foreground">{text}</p>
              </article>
            </m.li>
          ))}
        </m.ul>
      </div>
    </section>
  )
}

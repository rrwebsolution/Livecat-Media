import { ArrowRight } from "lucide-react"
import { m } from "motion/react"
import { Fragment } from "react"
import { setupSteps, workflow } from "@/config/content"
import { easeOut, fadeUp, inView, stagger } from "@/lib/motion"
import { Reveal } from "./Reveal"
import { SectionHeading } from "./SectionHeading"

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative">
      <div aria-hidden="true" className="section-line mx-auto max-w-5xl" />
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <SectionHeading eyebrow="How it works" title="From install to on air in three steps" />

        <m.div
          variants={stagger(0.15)}
          initial="hidden"
          whileInView="show"
          viewport={inView}
          className="relative mx-auto mt-16 max-w-5xl"
        >
          {/* The line that joins the steps: across on wide screens, down on narrow ones */}
          <div aria-hidden="true" className="absolute top-8 right-[16.66%] left-[16.66%] hidden h-px bg-white/10 lg:block">
            <m.div
              variants={{ hidden: { scaleX: 0 }, show: { scaleX: 1, transition: { duration: 1.2, ease: easeOut } } }}
              className="h-full origin-left bg-brand"
            />
          </div>
          <div aria-hidden="true" className="absolute top-8 bottom-8 left-8 w-px bg-white/10 lg:hidden">
            <m.div
              variants={{ hidden: { scaleY: 0 }, show: { scaleY: 1, transition: { duration: 1.2, ease: easeOut } } }}
              className="h-full origin-top bg-brand"
            />
          </div>

          <ol className="relative grid gap-12 lg:grid-cols-3 lg:gap-8">
          {setupSteps.map(({ title, text, icon: Icon }, index) => (
            <m.li
              key={title}
              variants={fadeUp}
              className="relative flex gap-6 lg:flex-col lg:items-center lg:text-center"
            >
              <div className="relative shrink-0">
                <div
                  aria-hidden="true"
                  className="absolute -inset-3 rounded-full bg-[radial-gradient(circle,rgb(0_102_255/0.45),transparent_70%)]"
                />
                <span className="relative flex size-16 items-center justify-center rounded-full border-4 border-navy bg-brand">
                  <Icon className="size-6" aria-hidden="true" />
                </span>
              </div>
              <div className="pt-1 lg:pt-4">
                <p className="text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">
                  Step {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 text-xl font-semibold tracking-tight">{title}</h3>
                <p className="mt-2 max-w-xs leading-relaxed text-muted-foreground lg:mx-auto">{text}</p>
              </div>
            </m.li>
          ))}
          </ol>
        </m.div>

        <Reveal className="mx-auto mt-16 max-w-3xl">
          <p className="sr-only">The live workflow: select, preview, take, program.</p>
          <div
            aria-hidden="true"
            className="flex flex-wrap items-center justify-center gap-x-1 gap-y-2 rounded-2xl border border-white/10 bg-panel/60 p-3 text-xs font-bold tracking-wide backdrop-blur-sm sm:gap-x-4 sm:p-5 sm:text-sm sm:tracking-widest"
          >
            {workflow.map((word, index) => (
              <Fragment key={word}>
                <span
                  className={
                    index === workflow.length - 1 ? "rounded-md bg-brand px-2.5 py-1" : "px-0.5 py-1 text-muted-foreground sm:px-2"
                  }
                >
                  {word}
                </span>
                {index < workflow.length - 1 && <ArrowRight className="size-3.5 shrink-0 text-brand sm:size-4" />}
              </Fragment>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

import { ArrowDown, ArrowRight } from "lucide-react"
import { Fragment } from "react"
import { steps, workflow } from "@/config/content"
import { Reveal } from "./Reveal"
import { SectionHeading } from "./SectionHeading"

export function HowItWorks() {
  return (
    <section id="how-it-works" className="border-y border-panel-2 bg-panel">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <SectionHeading title="How It Works" />

        <ol className="mt-12 flex flex-col items-stretch gap-2 lg:flex-row lg:items-center">
          {steps.map(({ title, text, icon: Icon }, index) => (
            <Fragment key={title}>
              <li className="flex-1">
                <Reveal delay={index * 80}>
                  <div className="rounded-xl border border-brand bg-navy p-6 lg:min-h-56">
                    <span className="flex size-11 items-center justify-center rounded-lg bg-brand">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <h3 className="mt-5 text-xl font-semibold">
                      {index + 1}. {title}
                    </h3>
                    <p className="mt-2 leading-relaxed text-muted-foreground">{text}</p>
                  </div>
                </Reveal>
              </li>
              {index < steps.length - 1 && (
                <li aria-hidden="true" className="flex justify-center text-white">
                  <ArrowRight className="hidden size-5 lg:block" />
                  <ArrowDown className="size-5 lg:hidden" />
                </li>
              )}
            </Fragment>
          ))}
        </ol>

        <Reveal className="mt-10">
          <p className="sr-only">The workflow: select, preview, take, program.</p>
          <div
            aria-hidden="true"
            className="flex flex-wrap items-center justify-center gap-x-1 gap-y-2 rounded-xl border border-brand p-3 text-xs font-bold tracking-wide sm:gap-x-4 sm:p-5 sm:text-base sm:tracking-widest"
          >
            {workflow.map((word, index) => (
              <Fragment key={word}>
                <span className={index === workflow.length - 1 ? "rounded bg-brand px-2 py-1" : "px-0.5 py-1 sm:px-2"}>
                  {word}
                </span>
                {index < workflow.length - 1 && <ArrowRight className="size-3.5 shrink-0 sm:size-5" />}
              </Fragment>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

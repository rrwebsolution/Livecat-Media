import { ArrowDown, ArrowRight } from "lucide-react"
import { Fragment } from "react"
import { Reveal } from "@/components/Reveal"
import { steps, workflow } from "@/config/content"
import { container, sectionTitle } from "./layout"

/** The one white section: the workflow is the idea to remember, so it gets the loudest page break. */
export function StudioWorkflow() {
  return (
    <section id="how-it-works" className="bg-white text-navy">
      <div className={`${container} py-20 lg:py-28`}>
        <h2 className={sectionTitle}>How It Works</h2>

        <ol className="mt-12 grid gap-8 md:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-0">
          {steps.map((step, index) => (
            <li key={step.title} className="border-t-2 border-navy pt-4 lg:pr-8">
              <Reveal delay={index * 70}>
                <div className="flex items-center justify-between">
                  <span className="studio-display text-5xl text-brand lg:text-6xl">{index + 1}</span>
                  {index < steps.length - 1 && (
                    <span aria-hidden="true">
                      <ArrowRight className="hidden size-6 md:block" />
                      <ArrowDown className="size-6 md:hidden" />
                    </span>
                  )}
                </div>
                <h3 className="mt-6 text-2xl font-semibold">{step.title}</h3>
                <p className="mt-2 leading-snug text-panel-2">{step.text}</p>
              </Reveal>
            </li>
          ))}
        </ol>

        <p className="sr-only">The workflow: select, preview, take, program.</p>
        <div
          aria-hidden="true"
          className="studio-label mt-14 flex items-center justify-between gap-1 bg-navy p-3 text-[0.6875rem] tracking-normal text-white sm:p-5 sm:text-base sm:tracking-widest lg:mt-20"
        >
          {workflow.map((word, index) => (
            <Fragment key={word}>
              <span className={index === workflow.length - 1 ? "bg-brand px-2 py-1 sm:px-4 sm:py-2" : "py-1"}>{word}</span>
              {index < workflow.length - 1 && <ArrowRight className="size-3.5 shrink-0 sm:size-5" />}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}

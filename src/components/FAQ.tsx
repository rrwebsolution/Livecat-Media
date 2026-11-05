import { ChevronDown } from "lucide-react"
import { questions } from "@/config/content"
import { Reveal } from "./Reveal"
import { SectionHeading } from "./SectionHeading"

export function FAQ() {
  return (
    <section id="faq" className="relative">
      <div aria-hidden="true" className="section-line mx-auto max-w-5xl" />
      <div className="mx-auto max-w-3xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <SectionHeading eyebrow="FAQ" title="Frequently asked questions" />

        <Reveal className="mt-12 space-y-3">
          {questions.map(({ question, answer }) => (
            // Sharing a name makes the browser keep one answer open at a time
            <details
              key={question}
              name="faq"
              className="group rounded-2xl border border-white/10 bg-panel/60 backdrop-blur-sm transition-colors open:border-brand/60 hover:border-white/20"
            >
              <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 rounded-2xl px-6 py-4 font-semibold [&::-webkit-details-marker]:hidden">
                {question}
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-white/5 transition-colors group-open:bg-brand">
                  <ChevronDown className="size-4 transition-transform duration-300 group-open:rotate-180" aria-hidden="true" />
                </span>
              </summary>
              <p className="px-6 pb-6 leading-relaxed text-muted-foreground">{answer}</p>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  )
}

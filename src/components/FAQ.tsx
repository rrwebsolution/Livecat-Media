import { ChevronDown } from "lucide-react"
import { questions } from "@/config/content"
import { Reveal } from "./Reveal"
import { SectionHeading } from "./SectionHeading"

export function FAQ() {
  return (
    <section id="faq" className="border-t border-panel-2 bg-panel">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <SectionHeading title="Frequently Asked Questions" />

        <Reveal className="mt-10 space-y-3">
          {questions.map(({ question, answer }) => (
            // Sharing a name makes the browser keep one answer open at a time
            <details key={question} name="faq" className="group rounded-xl border border-brand bg-navy">
              <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 rounded-xl px-5 py-4 font-semibold [&::-webkit-details-marker]:hidden">
                {question}
                <ChevronDown
                  className="size-5 shrink-0 transition-transform duration-200 group-open:rotate-180"
                  aria-hidden="true"
                />
              </summary>
              <p className="px-5 pb-5 leading-relaxed text-muted-foreground">{answer}</p>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  )
}

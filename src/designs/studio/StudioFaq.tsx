import { Plus } from "lucide-react"
import { questions } from "@/config/content"
import { container, sectionTitle } from "./layout"

export function StudioFaq() {
  return (
    <section id="faq" className={`${container} grid gap-10 py-20 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-14 lg:py-28`}>
      <div>
        <h2 className={`${sectionTitle} lg:sticky lg:top-24`}>Frequently Asked Questions</h2>
      </div>

      <div className="border-b border-panel-2">
        {questions.map(({ question, answer }) => (
          // Sharing a name makes the browser keep one answer open at a time
          <details key={question} name="faq" className="group border-t border-panel-2">
            <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-6 py-4 text-lg font-semibold [&::-webkit-details-marker]:hidden">
              {question}
              <Plus
                className="size-5 shrink-0 transition-transform duration-150 group-open:rotate-45"
                aria-hidden="true"
              />
            </summary>
            <p className="max-w-2xl pb-6 leading-relaxed text-muted-foreground">{answer}</p>
          </details>
        ))}
      </div>
    </section>
  )
}

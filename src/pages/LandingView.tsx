import { ArrowRight, Check } from "lucide-react"
import { DownloadCount } from "@/components/DownloadCount"
import { MacButton, WindowsDownloadButton } from "@/components/PlatformButtons"
import { Reveal } from "@/components/Reveal"
import { pageLabels, type LandingPage } from "@/config/landing"
import { cn } from "@/lib/utils"
import { PageShell } from "./PageShell"
import { shots } from "./shots"

function DownloadButtons({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-col justify-center gap-3 sm:flex-row", className)}>
      <WindowsDownloadButton className="w-full sm:w-auto" />
      <MacButton className="w-full sm:w-auto" />
    </div>
  )
}

/** One landing page: a heading, a section per topic (with a screenshot where it helps), questions, and links. */
export function LandingView({ page }: { page: LandingPage }) {
  return (
    <PageShell>
      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-[40rem] bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgb(0_102_255/0.28),transparent_70%)]"
        />
        <div className="relative mx-auto max-w-4xl px-4 pt-14 pb-16 text-center sm:px-6 sm:pt-20 lg:px-8 lg:pb-20">
          <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
            <a href="/" className="hover:text-brand">
              Home
            </a>
            <span aria-hidden="true"> / </span>
            <span aria-current="page">{page.eyebrow}</span>
          </nav>
          <h1 className="mt-6 text-[clamp(2.25rem,6vw,4rem)] leading-[1.05] font-extrabold tracking-[-0.03em] text-balance">
            {page.h1}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-pretty text-muted-foreground sm:text-xl">
            {page.intro}
          </p>
          <DownloadButtons className="mt-9" />
          <DownloadCount className="mt-5" />
        </div>
      </section>

      <div className="mx-auto max-w-6xl space-y-6 px-4 pb-20 sm:px-6 lg:px-8">
        {page.sections.map((section, index) => {
          const shot = section.shot ? shots[section.shot] : null
          return (
            <Reveal key={section.heading}>
              <section
                className={cn(
                  "grid items-center gap-8 rounded-2xl border border-white/10 bg-panel/60 p-6 backdrop-blur-sm sm:p-8",
                  shot && "lg:grid-cols-2",
                )}
              >
                <div className={cn(shot && index % 2 === 1 && "lg:order-2")}>
                  <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{section.heading}</h2>
                  <p className="mt-4 leading-relaxed text-pretty text-muted-foreground">{section.text}</p>
                  {section.points && (
                    <ul className="mt-5 space-y-2.5">
                      {section.points.map((point) => (
                        <li key={point} className="flex gap-3 text-muted-foreground">
                          <Check className="mt-1 size-4 shrink-0 text-brand" aria-hidden="true" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                {shot && (
                  <img
                    src={shot.src}
                    alt={shot.alt}
                    width={800}
                    height={450}
                    loading="lazy"
                    decoding="async"
                    className="block aspect-video h-auto w-full rounded-xl border border-white/10 bg-navy object-cover"
                  />
                )}
              </section>
            </Reveal>
          )
        })}
      </div>

      {page.questions && (
        <section className="mx-auto max-w-4xl px-4 pb-20 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold tracking-tight">Questions</h2>
          <dl className="mt-8 space-y-4">
            {page.questions.map(({ question, answer }) => (
              <div key={question} className="rounded-2xl border border-white/10 bg-panel/60 p-6">
                <dt className="font-semibold">{question}</dt>
                <dd className="mt-2 leading-relaxed text-muted-foreground">{answer}</dd>
              </div>
            ))}
          </dl>
        </section>
      )}

      <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-brand bg-navy/85 px-6 py-12 text-center sm:px-10">
          <h2 className="text-3xl font-bold tracking-tight text-balance">Try LiveCat Multimedia</h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Download it for Windows or macOS and set up your first service.
          </p>
          <DownloadButtons className="mt-8" />
        </div>

        <nav aria-label="More about LiveCat" className="mt-12">
          <h2 className="text-center text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">Read next</h2>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {page.related.map((path) => (
              <li key={path}>
                <a
                  href={path}
                  className="flex min-h-14 items-center justify-between gap-3 rounded-xl border border-white/10 bg-panel/60 px-5 py-3 font-medium transition-colors hover:border-brand"
                >
                  {pageLabels[path]}
                  <ArrowRight className="size-4 shrink-0 text-brand" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </section>
    </PageShell>
  )
}

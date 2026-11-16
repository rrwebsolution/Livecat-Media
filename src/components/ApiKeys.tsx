import { ExternalLink, Mail, Phone } from "lucide-react"
import { apiKeys, apiKeysFootnote, apiKeysIntro, ownerContact } from "@/config/content"
import { Reveal } from "./Reveal"
import { SectionHeading } from "./SectionHeading"

function Steps({ title, steps }: { title: string; steps: string[] }) {
  return (
    <div>
      <h4 className="text-xs font-semibold tracking-[0.15em] text-muted-foreground uppercase">{title}</h4>
      <ol className="mt-3 space-y-2">
        {steps.map((step, i) => (
          <li key={step} className="flex gap-3 leading-relaxed">
            <span
              aria-hidden="true"
              className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-brand/20 text-xs font-semibold text-brand"
            >
              {i + 1}
            </span>
            <span className="text-muted-foreground">{step}</span>
          </li>
        ))}
      </ol>
    </div>
  )
}

export function ApiKeys() {
  return (
    <section id="api-keys" className="relative">
      <div aria-hidden="true" className="section-line mx-auto max-w-5xl" />
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <SectionHeading eyebrow="API Keys" title="Get your API keys">
          {apiKeysIntro}
        </SectionHeading>

        <Reveal className="mt-12 grid gap-4 lg:grid-cols-2">
          {apiKeys.map(({ name, usedFor, href, linkLabel, getKey, inLiveCat, note }) => (
            <article
              key={name}
              className="flex h-full flex-col rounded-2xl border border-white/10 bg-panel/60 p-6 backdrop-blur-sm transition-colors hover:border-brand/60 sm:p-7"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold tracking-tight">{name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{usedFor}</p>
                </div>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-brand px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                >
                  {linkLabel}
                  <ExternalLink className="size-4" aria-hidden="true" />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </div>
              <div className="mt-6 grid flex-1 gap-6 sm:grid-cols-2">
                <Steps title="Get the key" steps={getKey} />
                <Steps title="In LiveCat" steps={inLiveCat} />
              </div>
              {note && <p className="mt-5 border-t border-white/10 pt-4 text-sm text-muted-foreground">{note}</p>}
            </article>
          ))}
        </Reveal>

        <Reveal>
          <p className="mx-auto mt-6 max-w-3xl text-center text-sm text-pretty text-muted-foreground">{apiKeysFootnote}</p>
        </Reveal>

        <Reveal className="mt-6 rounded-2xl border border-white/10 bg-panel/60 p-6 text-center backdrop-blur-sm">
          <p className="font-semibold">Need help getting a key or setting it up?</p>
          <p className="mt-1 text-muted-foreground">Contact the owner:</p>
          <div className="mt-4 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-6">
            <a
              href={`mailto:${ownerContact.email}?subject=LiveCat%20API%20key`}
              className="inline-flex min-h-11 items-center gap-2 break-all hover:text-brand"
            >
              <Mail className="size-4 shrink-0" aria-hidden="true" />
              {ownerContact.email}
            </a>
            <a href={`tel:${ownerContact.phone}`} className="inline-flex min-h-11 items-center gap-2 hover:text-brand">
              <Phone className="size-4 shrink-0" aria-hidden="true" />
              {ownerContact.phone}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

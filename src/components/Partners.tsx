import { Handshake, Mail, Phone } from "lucide-react"
import { investorPitch, ownerContact, partners, partnersIntro, sponsors, type Supporter } from "@/config/content"
import { DownloadCount } from "./DownloadCount"
import { Reveal } from "./Reveal"
import { SectionHeading } from "./SectionHeading"

function SupporterCard({ name, logo, href, note }: Supporter) {
  const body = (
    <>
      {logo ? (
        <img src={logo} alt={name} className="h-12 w-auto max-w-full object-contain" loading="lazy" />
      ) : (
        <span className="text-lg font-semibold">{name}</span>
      )}
      {note && <span className="mt-2 text-sm text-muted-foreground">{note}</span>}
    </>
  )
  const cardClass =
    "flex min-h-28 flex-col items-center justify-center rounded-2xl border border-white/10 bg-panel/60 p-6 text-center backdrop-blur-sm transition-colors hover:border-brand/60"

  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cardClass}>
      {body}
      <span className="sr-only">(opens in a new tab)</span>
    </a>
  ) : (
    <div className={cardClass}>{body}</div>
  )
}

function SupporterGroup({ title, list }: { title: string; list: Supporter[] }) {
  if (list.length === 0) return null
  return (
    <Reveal className="mt-12">
      <h3 className="text-center text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">{title}</h3>
      <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {list.map((supporter) => (
          <SupporterCard key={supporter.name} {...supporter} />
        ))}
      </div>
    </Reveal>
  )
}

export function Partners() {
  return (
    <section id="partners" className="relative">
      <div aria-hidden="true" className="section-line mx-auto max-w-5xl" />
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <SectionHeading eyebrow="Sponsors & Partners" title="Supported by">
          {partnersIntro}
        </SectionHeading>

        <SupporterGroup title="Sponsors" list={sponsors} />
        <SupporterGroup title="Partners" list={partners} />

        <Reveal className="relative mt-12 overflow-hidden rounded-2xl border border-brand/60 bg-navy/85 p-7 text-center shadow-[0_30px_80px_-30px_rgb(0_102_255/0.6)] sm:p-10">
          <span className="mx-auto flex size-12 items-center justify-center rounded-xl bg-brand">
            <Handshake className="size-6" aria-hidden="true" />
          </span>
          <h3 className="mt-5 text-2xl font-bold tracking-tight text-balance">{investorPitch.title}</h3>
          <p className="mx-auto mt-3 max-w-2xl leading-relaxed text-pretty text-muted-foreground">{investorPitch.text}</p>

          <ul className="mt-6 flex flex-wrap justify-center gap-2">
            {investorPitch.ways.map((way) => (
              <li key={way} className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-sm font-medium">
                {way}
              </li>
            ))}
          </ul>

          <DownloadCount detailed className="mt-6" />

          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={`mailto:${ownerContact.email}?subject=LiveCat%20investment%20%2F%20partnership`}
              className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg bg-brand px-5 py-2 font-semibold text-white transition-opacity hover:opacity-90 sm:w-auto"
            >
              <Mail className="size-4 shrink-0" aria-hidden="true" />
              Contact the owner
            </a>
            <a
              href={`tel:${ownerContact.phone}`}
              className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg border border-white/15 px-5 py-2 font-semibold transition-colors hover:border-brand sm:w-auto"
            >
              <Phone className="size-4 shrink-0" aria-hidden="true" />
              {ownerContact.phone}
            </a>
          </div>
          <p className="mt-3 text-sm break-all text-muted-foreground">{ownerContact.email}</p>
        </Reveal>
      </div>
    </section>
  )
}

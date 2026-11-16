import { PageShell } from "./PageShell"

export default function NotFoundPage() {
  return (
    <PageShell>
      <section className="mx-auto max-w-2xl px-4 py-32 text-center sm:px-6">
        <p className="text-sm font-semibold tracking-[0.2em] text-muted-foreground uppercase">404</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight">This page does not exist</h1>
        <p className="mt-4 text-muted-foreground">The address may be wrong, or the page has moved.</p>
        <a
          href="/"
          className="mt-8 inline-flex min-h-11 items-center rounded-lg bg-brand px-5 font-semibold text-white hover:opacity-90"
        >
          Go to LiveCat Multimedia
        </a>
      </section>
    </PageShell>
  )
}

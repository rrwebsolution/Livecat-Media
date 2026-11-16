import { Download } from "lucide-react"
import { useDownloadTotals } from "@/config/latestInstaller"
import { cn } from "@/lib/utils"

const format = new Intl.NumberFormat("en-US")

/** "1,234 downloads" from GitHub Releases. Shows nothing while it loads or when GitHub cannot be asked. */
export function DownloadCount({ className, detailed = false }: { className?: string; detailed?: boolean }) {
  const totals = useDownloadTotals()
  if (!totals || totals.total === 0) return null

  return (
    <p className={cn("inline-flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-sm text-muted-foreground", className)}>
      <Download className="size-4 text-brand" aria-hidden="true" />
      <span>
        <strong className="font-semibold text-foreground">{format.format(totals.total)}</strong>{" "}
        {totals.total === 1 ? "download" : "downloads"}
      </span>
      {detailed && (
        <span>
          · Windows {format.format(totals.windows)} · macOS {format.format(totals.mac)}
        </span>
      )}
    </p>
  )
}

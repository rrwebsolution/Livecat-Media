import { Download, Laptop } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { macDownloadReady, releaseConfig, windowsDownloadReady } from "@/config/release"
import { useWindowsDownload } from "@/config/latestInstaller"
import { cn } from "@/lib/utils"
import { WindowsIcon } from "./WindowsIcon"

const sizes = {
  md: "h-11 gap-2 px-4 text-sm",
  lg: "h-13 gap-2.5 px-6 text-base font-semibold",
}

type Size = keyof typeof sizes

const primary = (size: Size, className?: string) => cn(buttonVariants(), sizes[size], "rounded-lg", className)

/**
 * "Download for Windows". Downloads the newest installer straight away.
 */
export function WindowsDownloadButton({
  size = "lg",
  className,
  onClick,
}: {
  size?: Size
  className?: string
  onClick?: () => void
}) {
  const { href, version, waitThenDownload } = useWindowsDownload()

  return (
    <a
      href={href}
      onClick={(event) => {
        onClick?.()
        waitThenDownload(event)
      }}
      className={primary(size, className)}
    >
      <WindowsIcon className="size-4!" />
      {/* The button has a fixed height, so it does not grow when the version arrives from GitHub */}
      <span className="flex flex-col items-start leading-tight">
        Download for Windows
        {version && <span className="text-[0.6875rem] font-normal sm:text-xs">Version {version}</span>}
      </span>
    </a>
  )
}

/** The button on the Windows download card itself. With no installer URL it cannot lead anywhere, so it is disabled. */
export function WindowsCardButton({ className }: { className?: string }) {
  if (windowsDownloadReady) return <WindowsDownloadButton className={className} />

  return (
    <button type="button" disabled className={primary("lg", cn("disabled:opacity-60", className))}>
      <WindowsIcon className="size-4!" />
      Download for Windows
    </button>
  )
}

/** macOS action: disabled "Coming Soon" until macOS is enabled in the release config. */
export function MacButton({
  label = "Coming Soon",
  className,
  onSolidBlue = false,
}: {
  label?: string
  className?: string
  onSolidBlue?: boolean
}) {
  if (macDownloadReady) {
    return (
      <a href={releaseConfig.macDownloadUrl} className={primary("lg", className)}>
        <Download />
        Download for macOS
      </a>
    )
  }

  return (
    <button
      type="button"
      disabled
      className={cn(
        "inline-flex h-13 cursor-not-allowed items-center justify-center gap-2.5 rounded-lg border px-6 text-base font-semibold",
        onSolidBlue ? "border-white text-white" : "border-panel-2 bg-panel-2 text-muted-foreground",
        className,
      )}
    >
      <Laptop className="size-4" aria-hidden="true" />
      {label}
    </button>
  )
}

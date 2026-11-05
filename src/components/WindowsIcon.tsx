/** Lucide does not ship brand marks, so the Windows mark is drawn here in the same currentColor style. */
export function WindowsIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <rect x="3" y="3" width="8.5" height="8.5" />
      <rect x="12.5" y="3" width="8.5" height="8.5" />
      <rect x="3" y="12.5" width="8.5" height="8.5" />
      <rect x="12.5" y="12.5" width="8.5" height="8.5" />
    </svg>
  )
}

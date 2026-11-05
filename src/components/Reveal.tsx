import { m } from "motion/react"
import type { ReactNode } from "react"
import { easeOut, inView } from "@/lib/motion"

/** Fades its content in once when it scrolls into view. Reduced motion is handled by MotionConfig in App.tsx. */
export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode
  className?: string
  /** In milliseconds */
  delay?: number
}) {
  return (
    <m.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={inView}
      transition={{ duration: 0.6, ease: easeOut, delay: delay / 1000 }}
    >
      {children}
    </m.div>
  )
}

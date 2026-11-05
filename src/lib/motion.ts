import type { Variants } from "motion/react"

export const easeOut = [0.22, 1, 0.36, 1] as const

/** Fade and rise, for children of a staggered list (see Features.tsx). */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
}

/** A parent that reveals its fadeUp children one after another once it scrolls into view. */
export const stagger = (gap = 0.08): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: gap } },
})

/** Play once, a little before the element is fully on screen. */
export const inView = { once: true, margin: "0px 0px -10% 0px" } as const

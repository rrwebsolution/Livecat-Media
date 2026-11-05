import { m, useReducedMotion, useScroll, useTransform } from "motion/react"
import type { CSSProperties } from "react"

/** Fixed positions so the particles look the same on every visit and never shift while rendering. */
const particles = Array.from({ length: 28 }, (_, index) => {
  const random = (seed: number) => {
    const value = Math.sin(index * 12.9898 + seed * 78.233) * 43758.5453
    return value - Math.floor(value)
  }
  return {
    left: `${random(1) * 100}%`,
    top: `${20 + random(2) * 85}%`,
    size: 1 + random(3) * 2,
    duration: `${16 + random(4) * 18}s`,
    delay: `${-random(5) * 30}s`,
    opacity: 0.2 + random(6) * 0.45,
  }
})

const waves = [
  { d: "M-120 640 C 260 470, 620 790, 980 600 S 1460 380, 1580 470", opacity: 0.55, width: 1.4 },
  { d: "M-120 700 C 300 560, 640 850, 1000 660 S 1480 450, 1580 540", opacity: 0.35, width: 1 },
  { d: "M-120 580 C 220 400, 580 720, 940 540 S 1420 320, 1580 400", opacity: 0.22, width: 1 },
]

/**
 * The page's technology background: fine grid, drifting blue orbs, curved light waves and floating particles.
 * Purely decorative, fixed behind the content, with a light parallax on scroll. Motion stops for reduced motion.
 */
export function SiteBackground() {
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const gridY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : -80])
  const orbsY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : -320])
  const wavesY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : -160])

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-navy">
      <m.div style={{ y: gridY }} className="bg-grid absolute inset-x-0 -top-20 h-[130%]" />

      <m.div style={{ y: orbsY }} className="absolute inset-0">
        <div className="bg-orb -top-[20vh] left-1/2 size-[80vw] max-w-[1100px] -translate-x-1/2 [animation-duration:28s]" />
        <div className="bg-orb top-[45vh] -left-[20vw] size-[55vw] opacity-70 [animation-delay:-8s]" />
        <div className="bg-orb top-[95vh] -right-[18vw] size-[50vw] opacity-60 [animation-delay:-16s] [animation-duration:32s]" />
      </m.div>

      <m.svg
        style={{ y: wavesY }}
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full"
      >
        <defs>
          <linearGradient id="wave-fade" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0" stopColor="#0066ff" stopOpacity="0" />
            <stop offset="0.5" stopColor="#0066ff" stopOpacity="1" />
            <stop offset="1" stopColor="#0066ff" stopOpacity="0" />
          </linearGradient>
        </defs>
        {waves.map((wave) => (
          <path
            key={wave.d}
            d={wave.d}
            fill="none"
            stroke="url(#wave-fade)"
            strokeWidth={wave.width}
            opacity={wave.opacity}
          />
        ))}
        {/* A short streak of light that travels along the main wave */}
        <path
          d={waves[0].d}
          pathLength={2000}
          fill="none"
          stroke="#7fb2ff"
          strokeWidth={2}
          strokeLinecap="round"
          opacity={0.7}
          className="bg-wave-pulse"
        />
      </m.svg>

      {particles.map((particle, index) => (
        <span
          key={index}
          className="bg-particle"
          style={
            {
              left: particle.left,
              top: particle.top,
              width: particle.size,
              height: particle.size,
              "--duration": particle.duration,
              "--delay": particle.delay,
              "--opacity": particle.opacity,
            } as CSSProperties
          }
        />
      ))}

      {/* Darkens the edges so the light stays behind the content, not on top of it */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgb(8_13_28/0.85)_100%)]" />
    </div>
  )
}

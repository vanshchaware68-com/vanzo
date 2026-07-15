'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Zap, Clock, Gauge, Smartphone } from 'lucide-react'

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    const duration = 1400
    const start = performance.now()
    let raf: number
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1)
      setDisplay(Math.round(value * (1 - Math.pow(1 - p, 3)) * 10) / 10)
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, value])

  return (
    <span ref={ref} className="text-3xl font-bold text-foreground md:text-4xl">
      {display}
      {suffix}
    </span>
  )
}

const stats = [
  { icon: Gauge, value: 99.9, suffix: '%', label: 'Uptime' },
  { icon: Clock, value: 24, suffix: '/7', label: 'Automation' },
  { icon: Zap, value: 0.4, suffix: 's', label: 'Lightning Fast' },
  { icon: Smartphone, value: 100, suffix: '%', label: 'Mobile Optimized' },
]

export function TrustBar() {
  return (
    <section id="trust" className="border-y border-border bg-card/50">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12 text-center text-sm uppercase tracking-[0.2em] text-muted-foreground"
        >
          Built On Modern, Reliable Digital Systems
        </motion.p>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex flex-col items-center gap-2 text-center"
            >
              <stat.icon size={20} className="mb-1 text-primary" />
              <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              <span className="text-sm text-muted-foreground">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

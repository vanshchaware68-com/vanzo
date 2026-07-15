'use client'

import { motion } from 'framer-motion'
import { Zap, Brain, LineChart, MapPin } from 'lucide-react'

const reasons = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    desc: 'Sub-second load times, instant AI responses, and systems that never lag behind your customers.',
  },
  {
    icon: Brain,
    title: 'AI Powered',
    desc: 'Every system learns your business and handles conversations, follow-ups, and bookings on its own.',
  },
  {
    icon: LineChart,
    title: 'ROI Driven',
    desc: 'We measure success in captured leads and recovered revenue — not vanity metrics.',
  },
  {
    icon: MapPin,
    title: 'Built For Indian Businesses',
    desc: 'WhatsApp-first workflows, local market understanding, and systems built for how India does business.',
  },
]

export function WhyVanzo() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-28">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mb-16"
      >
        <p className="mb-4 text-sm uppercase tracking-[0.2em] text-primary">Why VANZO</p>
        <h2 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
          Built Different. Built To Last.
        </h2>
      </motion.div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {reasons.map((reason, i) => (
          <motion.div
            key={reason.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -6, scale: 1.02 }}
            className="group rounded-2xl border border-border bg-card p-8 transition-all hover:border-primary/40 hover:shadow-[0_0_40px_rgba(79,124,255,0.1)]"
          >
            <div className="mb-6 inline-flex rounded-xl bg-primary/10 p-3 text-primary">
              <reason.icon size={24} />
            </div>
            <h3 className="mb-3 text-lg font-semibold text-foreground">{reason.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{reason.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

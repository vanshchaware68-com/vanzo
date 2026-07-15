'use client'

import { motion } from 'framer-motion'
import { Dumbbell, UtensilsCrossed, Stethoscope, GraduationCap, ExternalLink, FileText } from 'lucide-react'

const demos = [
  {
    icon: Dumbbell,
    title: 'Gym Website',
    desc: 'Membership funnels, class booking, and AI lead follow-up built in.',
    tag: 'Fitness',
  },
  {
    icon: UtensilsCrossed,
    title: 'Restaurant Website',
    desc: 'Table reservations, menu showcase, and WhatsApp ordering system.',
    tag: 'Hospitality',
  },
  {
    icon: Stethoscope,
    title: 'Clinic Website',
    desc: 'Appointment automation, patient reminders, and instant answers.',
    tag: 'Healthcare',
  },
  {
    icon: GraduationCap,
    title: 'Coaching Website',
    desc: 'Course landing pages, enrollment funnels, and student CRM.',
    tag: 'Education',
  },
]

export function LiveDemos() {
  return (
    <section id="demos" className="mx-auto max-w-7xl px-6 py-28">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mb-16"
      >
        <p className="mb-4 text-sm uppercase tracking-[0.2em] text-primary">Live Demos</p>
        <h2 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
          See The Systems In Action
        </h2>
      </motion.div>

      <div className="grid gap-6 sm:grid-cols-2">
        {demos.map((demo, i) => (
          <motion.article
            key={demo.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: (i % 2) * 0.15 }}
            whileHover={{ y: -6 }}
            className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-colors hover:border-primary/40"
          >
            <div
              className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/5 blur-2xl transition-opacity opacity-0 group-hover:opacity-100"
              aria-hidden="true"
            />
            <div className="mb-6 flex items-center justify-between">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-border bg-secondary text-primary">
                <demo.icon size={24} />
              </div>
              <span className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
                {demo.tag}
              </span>
            </div>
            <h3 className="mb-2 text-xl font-semibold text-foreground">{demo.title}</h3>
            <p className="mb-8 text-sm leading-relaxed text-muted-foreground">{demo.desc}</p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#cta"
                className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-xs font-medium text-primary-foreground transition-all hover:shadow-[0_0_20px_rgba(79,124,255,0.4)]"
              >
                <ExternalLink size={13} />
                Open Demo
              </a>
              <a
                href="#cta"
                className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
              >
                <FileText size={13} />
                Case Study
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

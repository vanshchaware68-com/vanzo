'use client'

import { motion } from 'framer-motion'
import {
  PhoneMissed,
  MessageSquareX,
  Timer,
  UserX,
  Repeat,
  MonitorX,
} from 'lucide-react'

const problems = [
  {
    icon: PhoneMissed,
    title: 'Missed Calls',
    desc: 'Every unanswered call is a customer walking to your competitor.',
  },
  {
    icon: MessageSquareX,
    title: 'Missed WhatsApp Messages',
    desc: 'Leads message at midnight. Nobody replies. They move on.',
  },
  {
    icon: Timer,
    title: 'Slow Follow-ups',
    desc: 'Responding hours later means the deal is already lost.',
  },
  {
    icon: UserX,
    title: 'Lost Leads',
    desc: 'No system to capture, track, and nurture interested customers.',
  },
  {
    icon: Repeat,
    title: 'Manual Work',
    desc: 'Hours wasted daily on tasks a system could do in seconds.',
  },
  {
    icon: MonitorX,
    title: 'Poor Websites',
    desc: 'Outdated sites that look cheap and convert nobody.',
  },
]

export function ProblemSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-28">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mb-16 max-w-3xl"
      >
        <h2 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
          Most Businesses Don&apos;t Need More Customers.{' '}
          <span className="text-muted-foreground">They Need Better Systems.</span>
        </h2>
      </motion.div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {problems.map((problem, i) => (
          <motion.div
            key={problem.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
            whileHover={{ y: -4 }}
            className="group rounded-2xl border border-border bg-card p-7 transition-colors hover:border-primary/30"
          >
            <div className="mb-5 inline-flex rounded-xl border border-border bg-secondary p-3 text-muted-foreground transition-colors group-hover:text-primary">
              <problem.icon size={22} />
            </div>
            <h3 className="mb-2 text-lg font-semibold text-foreground">
              {problem.title}
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {problem.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

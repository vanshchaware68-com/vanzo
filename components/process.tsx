'use client'

import { motion } from 'framer-motion'

const steps = [
  { num: '01', title: 'Discover', desc: 'We learn your business, customers, and bottlenecks.' },
  { num: '02', title: 'Design', desc: 'Premium interfaces designed around conversion.' },
  { num: '03', title: 'Develop', desc: 'Production-grade code, built to scale.' },
  { num: '04', title: 'Automate', desc: 'AI systems wired into every workflow.' },
  { num: '05', title: 'Launch', desc: 'Deployed, tested, and live in days.' },
  { num: '06', title: 'Scale', desc: 'Continuous optimization as you grow.' },
]

export function Process() {
  return (
    <section id="process" className="border-y border-border bg-card/30">
      <div className="mx-auto max-w-7xl px-6 py-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20 text-center"
        >
          <p className="mb-4 text-sm uppercase tracking-[0.2em] text-primary">Process</p>
          <h2 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            From First Call To Full Automation
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="absolute left-0 top-6 hidden h-px w-full origin-left bg-gradient-to-r from-primary/60 via-primary/30 to-transparent lg:block"
            aria-hidden="true"
          />
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-6 lg:gap-4">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-primary/30 bg-background text-sm font-bold text-primary">
                  {step.num}
                </div>
                <h3 className="mb-2 font-semibold text-foreground">{step.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

'use client'

import { motion } from 'framer-motion'
import { Globe, Bot, MessageCircle, LayoutDashboard, TrendingUp, ArrowRight } from 'lucide-react'

const steps = [
  { icon: Globe, title: 'Website', desc: 'A premium site that converts visitors into leads.' },
  { icon: Bot, title: 'AI Chatbot', desc: 'Answers every question instantly, day and night.' },
  { icon: MessageCircle, title: 'WhatsApp Automation', desc: 'Follows up on every message automatically.' },
  { icon: LayoutDashboard, title: 'Lead Dashboard', desc: 'Every lead tracked, scored, and never lost.' },
  { icon: TrendingUp, title: 'Business Growth', desc: 'More customers, less work, compounding results.' },
]

export function SolutionTimeline() {
  return (
    <section id="solution" className="border-y border-border bg-card/30">
      <div className="mx-auto max-w-7xl px-6 py-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20 text-center"
        >
          <p className="mb-4 text-sm uppercase tracking-[0.2em] text-primary">The Solution</p>
          <h2 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Introducing VANZO Business Systems
          </h2>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-5 lg:gap-0">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative flex flex-col items-center px-4 text-center"
            >
              {/* Connector arrow */}
              {i < steps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 + 0.3 }}
                  className="absolute -right-3 top-8 hidden text-primary/50 lg:block"
                  aria-hidden="true"
                >
                  <ArrowRight size={20} />
                </motion.div>
              )}
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary shadow-[0_0_30px_rgba(79,124,255,0.15)]">
                <step.icon size={26} />
              </div>
              <h3 className="mb-2 font-semibold text-foreground">{step.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

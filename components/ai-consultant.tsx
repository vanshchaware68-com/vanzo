'use client'

import { motion } from 'framer-motion'
import { Sparkles, ArrowRight } from 'lucide-react'

export function AiConsultant() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-28">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="glass relative overflow-hidden rounded-3xl p-10 md:p-16"
      >
        <div
          className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-primary/15 blur-[100px]"
          aria-hidden="true"
        />
        <div className="relative z-10 grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary">
              <Sparkles size={14} />
              VANZO AI
            </div>
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Meet Your AI Consultant
            </h2>
            <p className="mt-4 max-w-md text-pretty leading-relaxed text-muted-foreground">
              Tell VANZO AI about your business and get an instant blueprint of
              the systems that will grow it.
            </p>
            <a
              href="#cta"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[0_0_30px_rgba(79,124,255,0.5)]"
            >
              Start Conversation
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Chat mockup */}
          <div className="rounded-2xl border border-border bg-background/80 p-5">
            <div className="mb-4 flex items-center gap-3 border-b border-border pb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/15 text-primary">
                <Sparkles size={16} />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">VANZO AI</p>
                <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Online
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              {[
                'Hi, I\u2019m VANZO AI.',
                'Tell me about your business.',
                'Let\u2019s build something incredible.',
              ].map((msg, i) => (
                <motion.div
                  key={msg}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.35, duration: 0.4 }}
                  className="w-fit max-w-[85%] rounded-2xl rounded-tl-sm border border-border bg-secondary px-4 py-2.5 text-sm text-foreground"
                >
                  {msg}
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.6 }}
                className="flex w-fit gap-1 rounded-2xl border border-border bg-secondary px-4 py-3"
                aria-hidden="true"
              >
                {[0, 1, 2].map((d) => (
                  <motion.span
                    key={d}
                    className="h-1.5 w-1.5 rounded-full bg-muted-foreground"
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 1.2, delay: d * 0.2, repeat: Infinity }}
                  />
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

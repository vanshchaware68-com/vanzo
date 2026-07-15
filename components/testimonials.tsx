'use client'

import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

export function Testimonials() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-28 text-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-10 inline-flex rounded-full bg-primary/10 p-4 text-primary"
      >
        <Sparkles size={24} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-balance text-xl leading-relaxed text-foreground md:text-2xl">
          We're Building Our First Success Stories.
        </p>
        <p className="mt-4 text-base text-muted-foreground md:text-lg">
          Your business could be next.
        </p>
      </motion.div>
    </section>
  )
}

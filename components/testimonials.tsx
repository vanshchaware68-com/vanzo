'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote:
      'We went from missing half our WhatsApp inquiries to responding in under a second. Bookings are up 40% and I barely touch my phone anymore.',
    name: 'Rahul Mehta',
    role: 'Gym Owner, Mumbai',
  },
  {
    quote:
      'The website VANZO built does not look like anything else in our city. Customers tell us it feels like booking with a five-star brand.',
    name: 'Priya Sharma',
    role: 'Restaurant Owner, Pune',
  },
  {
    quote:
      'Patients now book appointments at 2 AM and get instant confirmations. My front desk finally has time to focus on people, not phones.',
    name: 'Dr. Arjun Nair',
    role: 'Clinic Director, Bangalore',
  },
]

export function Testimonials() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const t = testimonials[index]

  return (
    <section className="mx-auto max-w-4xl px-6 py-28 text-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-10 inline-flex rounded-full bg-primary/10 p-4 text-primary"
      >
        <Quote size={24} />
      </motion.div>

      <div className="relative min-h-[180px]">
        <AnimatePresence mode="wait">
          <motion.blockquote
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-balance text-xl leading-relaxed text-foreground md:text-2xl">
              &ldquo;{t.quote}&rdquo;
            </p>
            <footer className="mt-8">
              <p className="font-semibold text-foreground">{t.name}</p>
              <p className="text-sm text-muted-foreground">{t.role}</p>
            </footer>
          </motion.blockquote>
        </AnimatePresence>
      </div>

      <div className="mt-10 flex justify-center gap-2">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Show testimonial ${i + 1}`}
            className={`h-1.5 rounded-full transition-all ${
              i === index ? 'w-8 bg-primary' : 'w-2 bg-border'
            }`}
          />
        ))}
      </div>
    </section>
  )
}

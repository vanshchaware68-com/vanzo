'use client'

import { useRef, useState, useEffect, useMemo } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'

function Particles() {
  const particles = useMemo(
    () =>
      Array.from({ length: 24 }, (_, i) => ({
        id: i,
        left: `${(i * 37 + 13) % 100}%`,
        top: `${(i * 53 + 7) % 100}%`,
        size: 2 + ((i * 7) % 3),
        duration: 6 + ((i * 3) % 8),
        delay: (i * 0.4) % 5,
      })),
    []
  )

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full bg-primary/40"
          style={{ left: p.left, top: p.top, width: p.size, height: p.size }}
          animate={{ y: [0, -40, 0], opacity: [0.1, 0.6, 0.1] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
    </div>
  )
}

function DashboardMockup() {
  return (
    <div className="relative mx-auto w-full max-w-lg">
      {/* Laptop frame */}
      <div className="rounded-t-xl border border-white/10 bg-[#0d0d0d] p-2 shadow-[0_0_80px_rgba(79,124,255,0.15)]">
        <div className="overflow-hidden rounded-lg bg-card">
          {/* Top bar */}
          <div className="flex items-center gap-1.5 border-b border-border px-3 py-2">
            <span className="h-2 w-2 rounded-full bg-white/20" />
            <span className="h-2 w-2 rounded-full bg-white/20" />
            <span className="h-2 w-2 rounded-full bg-white/20" />
            <span className="ml-3 text-[9px] text-muted-foreground">vanzo.systems / dashboard</span>
          </div>
          {/* Dashboard body */}
          <div className="grid grid-cols-3 gap-2 p-3">
            <div className="col-span-2 rounded-md border border-border bg-secondary p-3">
              <p className="text-[9px] text-muted-foreground">Leads Captured</p>
              <p className="text-lg font-bold text-foreground">2,847</p>
              {/* Mini chart */}
              <div className="mt-2 flex h-12 items-end gap-1">
                {[35, 55, 40, 70, 60, 85, 75, 95, 80, 100].map((h, i) => (
                  <motion.div
                    key={i}
                    className="flex-1 rounded-sm bg-primary/70"
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ duration: 0.8, delay: 0.8 + i * 0.08, ease: 'easeOut' }}
                  />
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="rounded-md border border-border bg-secondary p-2.5">
                <p className="text-[9px] text-muted-foreground">Automations</p>
                <p className="text-sm font-bold text-primary">Active</p>
              </div>
              <div className="rounded-md border border-border bg-secondary p-2.5">
                <p className="text-[9px] text-muted-foreground">Response Time</p>
                <p className="text-sm font-bold text-foreground">0.4s</p>
              </div>
            </div>
            <div className="col-span-3 flex items-center justify-between rounded-md border border-border bg-secondary px-3 py-2">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                </span>
                <p className="text-[10px] text-muted-foreground">AI responding to WhatsApp lead...</p>
              </div>
              <p className="text-[10px] font-medium text-primary">Live</p>
            </div>
          </div>
        </div>
      </div>
      {/* Laptop base */}
      <div className="mx-auto h-3 w-[110%] -translate-x-[4.5%] rounded-b-xl bg-gradient-to-b from-[#1c1c1c] to-[#0d0d0d]" />
    </div>
  )
}

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const [glow, setGlow] = useState({ x: 50, y: 50 })

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      setGlow({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      })
    }
    el.addEventListener('mousemove', onMove)
    return () => el.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <section
      ref={ref}
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      {/* Mouse glow */}
      <div
        className="pointer-events-none absolute inset-0 transition-[background] duration-300"
        style={{
          background: `radial-gradient(600px circle at ${glow.x}% ${glow.y}%, rgba(79,124,255,0.08), transparent 60%)`,
        }}
        aria-hidden="true"
      />
      {/* Gradient lighting */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]"
        aria-hidden="true"
      />
      <Particles />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-2">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs text-muted-foreground"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            AI Automation &amp; Digital Systems
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-balance text-5xl font-bold leading-[1.05] tracking-tight text-foreground md:text-6xl lg:text-7xl"
          >
            Business Never Sleeps.{' '}
            <span className="text-primary glow-text">Neither Do Our Systems.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground"
          >
            We build premium websites and AI-powered business systems that capture
            more customers, automate repetitive work, and help businesses grow 24/7.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="#cta"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[0_0_40px_rgba(79,124,255,0.5)]"
            >
              Get Free Consultation
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#demos"
              className="inline-flex items-center justify-center rounded-full border border-border bg-card px-8 py-4 text-sm font-semibold text-foreground transition-colors hover:border-primary/50"
            >
              View Live Demo
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: 'easeOut' }}
        >
          <DashboardMockup />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#trust"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground transition-colors hover:text-foreground"
        aria-label="Scroll down"
      >
        <ChevronDown size={24} />
      </motion.a>
    </section>
  )
}

'use client'

import { motion } from 'framer-motion'
import {
  Globe,
  Bot,
  MessageCircle,
  RefreshCcw,
  Database,
  PanelTop,
  Filter,
  Magnet,
  Workflow,
  BarChart3,
} from 'lucide-react'

const services = [
  { icon: Globe, title: 'Premium Websites' },
  { icon: Bot, title: 'AI Chatbots' },
  { icon: MessageCircle, title: 'WhatsApp Automation' },
  { icon: RefreshCcw, title: 'Lead Recovery Systems' },
  { icon: Database, title: 'CRM Setup' },
  { icon: PanelTop, title: 'Landing Pages' },
  { icon: Filter, title: 'Funnels' },
  { icon: Magnet, title: 'Lead Generation' },
  { icon: Workflow, title: 'Automation Workflows' },
  { icon: BarChart3, title: 'Business Dashboards' },
]

export function Services() {
  return (
    <section id="services" className="border-y border-border bg-card/30">
      <div className="mx-auto max-w-7xl px-6 py-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <p className="mb-4 text-sm uppercase tracking-[0.2em] text-primary">Services</p>
          <h2 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Everything Your Business Needs To Run Itself
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.4, delay: (i % 5) * 0.07 }}
              whileHover={{ y: -3 }}
              className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-6 text-center transition-colors hover:border-primary/40"
            >
              <service.icon size={22} className="text-primary" />
              <span className="text-sm font-medium text-foreground">{service.title}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

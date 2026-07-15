import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { TrustBar } from '@/components/trust-bar'
import { ProblemSection } from '@/components/problem-section'
import { SolutionTimeline } from '@/components/solution-timeline'
import { LiveDemos } from '@/components/live-demos'
import { Services } from '@/components/services'
import { WhyVanzo } from '@/components/why-vanzo'
import { Process } from '@/components/process'
import { Testimonials } from '@/components/testimonials'
import { AiConsultant } from '@/components/ai-consultant'
import { CtaSection } from '@/components/cta-section'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <ProblemSection />
        <SolutionTimeline />
        <LiveDemos />
        <Services />
        <WhyVanzo />
        <Process />
        <Testimonials />
        <AiConsultant />
        <CtaSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

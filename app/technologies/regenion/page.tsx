import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ArrowLeft, Check } from 'lucide-react'
import FaqAccordion from '@/components/FaqAccordion'

export const metadata: Metadata = {
  title: 'ECO Regenion™, Waste-to-Energy Solutions',
  description: 'ECO Regenion™ converts waste into commercially viable by-products while cleaning up the environment. Waste-to-energy solutions for commercial and industrial operations. Chemical-free, ESG-compliant.',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'ECO Regenion™',
  description: 'Waste-to-energy platform converting landfill waste into commercially viable by-products.',
  brand: { '@type': 'Organization', name: 'ECO Integrated Technologies' },
  url: 'https://www.ecoiti.com/technologies/regenion',
}

const howItWorks = [
  { step: '01', title: 'Waste Intake', body: 'Organic and industrial waste streams are collected and processed through ECO\'s proprietary intake system, diverting material from landfills.' },
  { step: '02', title: 'ECO Processing', body: 'Waste is processed through ECO\'s environmental technology platform, a chemical-free, non-toxic conversion system that breaks down waste into usable outputs.' },
  { step: '03', title: 'Energy Recovery', body: 'The processing cycle generates recoverable energy as a by-product, reducing operational energy costs and creating a commercially viable output.' },
  { step: '04', title: 'By-Product Extraction', body: 'Commercially valuable by-products are extracted and prepared for market, turning what was formerly a disposal cost into a revenue-generating asset.' },
]

const benefits = [
  { title: 'Landfill Diversion', body: 'Directly reduces waste volume entering landfills, addressing one of the most significant community environmental concerns.' },
  { title: 'Energy Generation', body: 'Waste processing generates recoverable energy, reducing net operational costs and improving sustainability metrics.' },
  { title: 'Chemical-Free Process', body: 'All conversion operations are non-toxic and chemical-free, safe for operators, communities, and surrounding environments.' },
  { title: 'Commercial Value', body: 'By-products from the Regenion process have commercial market value, converting a cost center into a profit driver.' },
]

const faqs = [
  { q: 'What types of waste does ECO Regenion™ process?', a: 'ECO Regenion™ is designed to process organic and industrial waste streams, with a focus on materials that would otherwise enter the landfill system. Specific waste stream compatibility is assessed on a per-project basis.' },
  { q: 'Is the Regenion process truly chemical-free?', a: 'Yes. ECO\'s core mandate is chemical-free, non-toxic operations. The Regenion platform does not introduce chemical additives into the waste conversion process.' },
  { q: 'What commercial by-products does the system produce?', a: 'The Regenion process generates commercially viable by-products and recoverable energy. Specific outputs vary based on the waste stream and project configuration. Our team provides detailed output profiles during the evaluation phase.' },
  { q: 'How does Regenion support ESG compliance?', a: 'ECO Regenion™ directly addresses three ESG pillars: Environmental (landfill diversion, chemical-free operations), Social (community health and safety), and Governance (transparent, sustainable operations). It represents measurable environmental and financial results, measurable impact at the operational level.' },
  { q: 'Can Regenion be deployed at my existing facility?', a: 'ECO evaluates site-specific conditions for each deployment. Contact our team to discuss your facility type, waste stream volume, and operational goals.' },
]

export default function RegenionPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ── Hero ── */}
      <section
        className="relative min-h-[60vh] flex items-center px-8 md:px-16 pt-24 pb-16"
        style={{
          backgroundImage: 'url("/images/hero-regenion.jpg")',
          backgroundSize: '100%',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center 50%',
          backgroundColor: '#0A1A10',
        }}
      >
        <div className="w-full">
          <p data-reveal="fade" className="text-xs font-bold uppercase tracking-widest mb-6" style={{ color: '#22C47A' }}>
            Waste-to-Energy Technology
          </p>
          <h1 data-reveal="fade" data-delay="80" className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Converts Waste into<br />
            <span style={{ color: '#22C47A' }}>Commercially Viable By-Products</span>
          </h1>
          <p data-reveal="fade" data-delay="160" className="text-lg max-w-2xl leading-relaxed mb-10" style={{ color: 'rgba(255,255,255,0.75)' }}>
            ECO Regenion integrates ECO's environmental technologies to bring greater profitability while providing more efficient and sustainable operations, directly addressing landfill, energy, and water quality concerns.
          </p>
          <div data-reveal="fade" data-delay="260" className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="btn-eco inline-flex items-center gap-2 uppercase tracking-widest text-sm font-semibold px-10 py-4 rounded" style={{ backgroundColor: '#1A835A', color: '#fff' }}>
              Request Information <ArrowRight size={15} />
            </Link>
            <Link href="/technologies/h2o-recover" className="btn-eco inline-flex items-center gap-2 uppercase tracking-widest text-sm font-semibold px-10 py-4 rounded" style={{ backgroundColor: 'transparent', color: '#fff', border: '2px solid rgba(255,255,255,0.25)' }}>
              View H2O Recover
            </Link>
          </div>
        </div>
      </section>

      {/* ── Feature Bar ── */}
      <section className="bg-white py-8 px-6" style={{ borderBottom: '1px solid rgba(26,131,90,0.15)' }}>
        <p className="text-center text-lg font-semibold" style={{ color: '#0D2E1E' }}>
          Waste-to-Energy &nbsp;•&nbsp; Chemical-Free &nbsp;•&nbsp; Commercially Viable By-Products &nbsp;•&nbsp; ESG Compliant
        </p>
      </section>

      {/* ── The Problem ── */}
      <section style={{ backgroundColor: '#F3FAF6' }} className="py-16 md:py-24 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p data-reveal="fade" className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#1A835A' }}>The Challenge</p>
            <h2 data-reveal="fade" data-delay="80" className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#0D2E1E' }}>
              Waste Is a Resource That Industry Has Been Throwing Away
            </h2>
            <div className="prose-eco">
              <p data-reveal="fade" data-delay="160">Landfills are filling up. Communities pay the environmental cost of industrial and commercial waste. The energy locked inside that waste gets buried right along with it.</p>
              <p data-reveal="fade" data-delay="220">Traditional waste disposal treats waste as a cost. ECO Regenion changes that. It converts waste into energy and commercially valuable by-products while reducing the environmental burden on surrounding communities.</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            {['Landfill capacity reaching critical limits globally', 'Increasing regulatory pressure on industrial waste disposal', 'ESG frameworks demanding measurable environmental action', 'Energy costs rising, recoverable waste energy going untapped'].map((point, i) => (
              <div key={i} data-reveal data-delay={i * 80} className="flex items-start gap-3 rounded-xl p-4 bg-white" style={{ border: '1px solid rgba(26,131,90,0.15)' }}>
                <div className="shrink-0 mt-0.5 w-5 h-5 rounded-full flex items-center justify-center" style={{ backgroundColor: '#1A835A' }}>
                  <Check size={11} color="#fff" strokeWidth={3} />
                </div>
                <p className="text-sm leading-relaxed" style={{ color: '#4A5E72' }}>{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="bg-white py-16 md:py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 data-reveal="fade" className="text-3xl md:text-5xl font-bold text-center mb-12" style={{ color: '#0D2E1E' }}>How Regenion Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {howItWorks.map((step, i) => (
              <div key={step.step} data-reveal data-delay={i * 80} className="card-hover rounded-xl p-7" style={{ backgroundColor: '#ffffff', border: '1px solid rgba(26,131,90,0.25)' }}>
                <p className="text-4xl font-bold mb-3" style={{ color: 'rgba(26,131,90,0.2)' }}>{step.step}</p>
                <h3 className="font-bold text-lg mb-2" style={{ color: '#0D2E1E' }}>{step.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#4A5E72' }}>{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Benefits ── */}
      <section style={{ backgroundColor: '#0D2E1E' }} className="py-16 md:py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 data-reveal="fade" className="text-3xl md:text-5xl font-bold text-center text-white mb-12">Why ECO Regenion™</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {benefits.map((b, i) => {
              return (
                <div key={b.title} data-reveal data-delay={i * 80} className="card-hover-dark rounded-xl p-6" style={{ backgroundColor: 'rgba(255,255,255,0.07)', border: '1px solid rgba(34,196,122,0.35)' }}>
                  <div>
                    <h4 className="font-bold text-white mb-1">{b.title}</h4>
                    <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.72)' }}>{b.body}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ backgroundColor: '#F3FAF6' }} className="py-16 md:py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 data-reveal="fade" className="text-3xl md:text-4xl font-bold text-center mb-10" style={{ color: '#0D2E1E' }}>Frequently Asked Questions</h2>
          <FaqAccordion items={faqs} />
        </div>
      </section>

      {/* ── Nav + CTA ── */}
      <section className="bg-white py-10 px-6">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <Link href="/technologies" className="inline-flex items-center gap-2 font-semibold text-sm" style={{ color: '#0D2E1E' }}>
            <ArrowLeft size={16} /> All Technologies
          </Link>
          <Link href="/technologies/h2o-recover" className="inline-flex items-center gap-2 font-semibold text-sm" style={{ color: '#0D2E1E' }}>
            ECO H2O Recover™ <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <section className="py-24 px-6 text-center" style={{ background: 'linear-gradient(135deg, #0D2E1E 0%, #0B2240 100%)' }}>
        <h2 data-reveal="fade" className="text-3xl md:text-5xl font-bold text-white mb-4">Waste Is a Resource. Let&apos;s Use It.</h2>
        <p data-reveal="fade" data-delay="120" className="max-w-xl mx-auto mb-8 leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)' }}>
          Contact ECO to learn how Regenion can transform your waste management operation into a commercially viable, ESG-compliant system.
        </p>
        <div data-reveal="fade" data-delay="240" className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="btn-eco inline-block uppercase tracking-widest text-sm font-semibold px-12 py-4 rounded" style={{ backgroundColor: '#1A835A', color: '#fff' }}>
            Request Information
          </Link>
          <Link href="/technologies/h2o-recover" className="btn-eco inline-block uppercase tracking-widest text-sm font-semibold px-12 py-4 rounded" style={{ backgroundColor: 'transparent', color: '#fff', border: '2px solid rgba(255,255,255,0.3)' }}>
            Explore H2O Recover
          </Link>
        </div>
      </section>
    </>
  )
}

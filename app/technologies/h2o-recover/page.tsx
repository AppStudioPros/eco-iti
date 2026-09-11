import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ArrowLeft, Check } from 'lucide-react'
import FaqAccordion from '@/components/FaqAccordion'

export const metadata: Metadata = {
  title: 'ECO H2O Recover™, CLAW Water Recovery Technology',
  description: 'CLAW Technology transforms contaminated oilfield produced water and wellhead CO₂ into reusable water, critical mineral carbonates, and industrial products. Zero-liquid-discharge performance.',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'ECO H2O Recover™, CLAW Technology',
  description: 'Proprietary water-recovery platform for oilfield produced water treatment and zero-liquid-discharge.',
  brand: { '@type': 'Organization', name: 'ECO Integrated Technologies' },
  url: 'https://www.ecoiti.com/technologies/h2o-recover',
}

const outputs = [
  { title: 'Reusable Water', body: 'Contaminated oilfield produced water is processed into clean, reusable water, returning a critical resource to productive use.' },
  { title: 'Critical Mineral Carbonates', body: 'The CLAW process extracts critical mineral carbonates from the water stream, commercially valuable materials with established industrial demand.' },
  { title: 'Industrial By-Products', body: 'Additional commercially valuable industrial products are generated as part of the CLAW recovery process.' },
  { title: 'CO₂ Utilization', body: 'Wellhead CO₂ is incorporated into the CLAW process rather than released, converting an environmental liability into a process input.' },
]

const process = [
  { step: '01', title: 'Produced Water Intake', body: 'Contaminated oilfield produced water is collected at the wellhead or production facility, water that would otherwise require costly disposal or create environmental liability.' },
  { step: '02', title: 'CLAW Processing', body: 'ECO\'s proprietary CLAW Technology processes the produced water through a multi-stage recovery system, incorporating wellhead CO₂ as part of the treatment mechanism.' },
  { step: '03', title: 'Water Recovery', body: 'Clean, reusable water is extracted from the processed stream, meeting regulatory standards and enabling reuse in operations, agriculture, or other applications.' },
  { step: '04', title: 'By-Product Capture', body: 'Critical mineral carbonates and industrial by-products are captured and prepared for commercial sale, creating a new revenue stream from what was previously a waste stream.' },
]

const faqs = [
  { q: 'What is CLAW Technology?', a: 'CLAW Technology is ECO\'s proprietary water-recovery platform designed to transform contaminated oilfield produced water and wellhead CO₂ into reusable water, critical mineral carbonates, and commercially valuable industrial products, while targeting true zero-liquid-discharge performance.' },
  { q: 'What is "produced water" in oil and gas operations?', a: 'Produced water is the water that comes up from the ground along with oil and gas during extraction. It is typically contaminated with hydrocarbons, minerals, and other substances, making it one of the largest waste streams in the oil and gas industry. Historically it has required costly disposal, CLAW converts it into a recoverable resource.' },
  { q: 'What does zero-liquid-discharge mean?', a: 'Zero-liquid-discharge (ZLD) means that no liquid waste is discharged from the treatment process. All water is recovered or converted, eliminating liquid disposal requirements and the associated environmental and regulatory risks.' },
  { q: 'What are critical mineral carbonates and why are they valuable?', a: 'Mineral carbonates are compounds that form during the treatment of produced water and CO₂. Certain mineral carbonates, particularly those containing lithium, calcium, magnesium, and other elements, have significant commercial value in industrial, battery, and manufacturing applications.' },
  { q: 'Is the CLAW process chemical-free?', a: 'ECO\'s operations are designed to be non-toxic and chemical-free. The CLAW process uses physical and proprietary treatment mechanisms rather than chemical additives, consistent with ECO\'s core environmental mandate.' },
  { q: 'What types of oil and gas operations can deploy CLAW?', a: 'CLAW Technology is designed for oilfield production environments where produced water management is a challenge. Contact ECO to discuss your specific production volume, geography, and operational requirements.' },
]

export default function H2ORecoverPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ── Hero ── */}
      <section className="relative min-h-[45vh] flex items-center px-8 md:px-16 pt-20 pb-16"
        style={{
          backgroundImage: 'linear-gradient(rgba(11,34,64,0.72), rgba(11,34,64,0.72)), url("/images/hero-h2o.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center 50%',
          backgroundColor: '#0B2240',
        }}>
        <div className="max-w-5xl mx-auto">
          <h1 data-reveal="fade" className="text-4xl md:text-6xl font-bold text-white mb-6">
            Converting Contaminated Water<br />
            <span style={{ color: '#3B9FE0' }}>into Valuable Resources</span>
          </h1>
          <p data-reveal="fade" data-delay="150" className="text-lg max-w-2xl leading-relaxed mb-10" style={{ color: 'rgba(255,255,255,0.7)' }}>
            CLAW Technology is a proprietary water-recovery platform converting contaminated oilfield produced water and wellhead CO₂ into reusable water, critical mineral carbonates, and commercially valuable industrial products, while targeting true zero-liquid-discharge performance.
          </p>
          <div data-reveal="fade" data-delay="260" className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="btn-eco inline-flex items-center gap-2 uppercase tracking-widest text-sm font-semibold px-10 py-4 rounded" style={{ backgroundColor: '#1663AF', color: '#fff' }}>
              Request Information <ArrowRight size={15} />
            </Link>
            <Link href="/technologies/regenion" className="btn-eco inline-flex items-center gap-2 uppercase tracking-widest text-sm font-semibold px-10 py-4 rounded" style={{ backgroundColor: 'transparent', color: '#fff', border: '2px solid rgba(255,255,255,0.25)' }}>
              View Regenion
            </Link>
          </div>
        </div>
      </section>

      {/* ── Feature Bar ── */}
      <section className="bg-white py-8 px-6" style={{ borderBottom: '1px solid rgba(22,99,175,0.15)' }}>
        <p className="text-center text-lg font-semibold" style={{ color: '#0B2240' }}>
          Oilfield Water Recovery &nbsp;•&nbsp; Zero Liquid Discharge &nbsp;•&nbsp; Critical Mineral Extraction &nbsp;•&nbsp; CO₂ Utilization
        </p>
      </section>

      {/* ── The Problem ── */}
      <section style={{ backgroundColor: '#F4F8FC' }} className="py-16 md:py-24 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p data-reveal="fade" className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#1663AF' }}>The Challenge</p>
            <h2 data-reveal="fade" data-delay="80" className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#0B2240' }}>
              Produced Water Is the Oil and Gas Industry&apos;s Largest Waste Problem
            </h2>
            <div className="prose-eco">
              <p data-reveal="fade" data-delay="160">For every barrel of oil produced, operators generate multiple barrels of produced water. That water is contaminated and has to be managed, treated, or disposed of at real cost.</p>
              <p data-reveal="fade" data-delay="220">Traditional disposal methods like injection wells, evaporation ponds, and off-site treatment are expensive, carry environmental risk, and face growing regulatory restrictions. In oil-producing regions, that pressure is getting worse.</p>
              <p data-reveal="fade" data-delay="280">CLAW Technology changes what produced water can be. Instead of a liability, it becomes a source of clean water and commercially useful materials.</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            {[
              'Billions of barrels of produced water generated annually in the US alone',
              'Disposal costs represent a major operational expense for producers',
              'Injection well restrictions tightening across key producing states',
              'Water scarcity in producing regions creating demand for recovered water',
              'CO₂ emissions from wellhead gas adding regulatory pressure',
            ].map((point, i) => (
              <div key={i} data-reveal data-delay={i * 60} className="flex items-start gap-3 rounded-xl p-4 bg-white" style={{ border: '1px solid rgba(22,99,175,0.15)' }}>
                <div className="shrink-0 mt-0.5 w-5 h-5 rounded-full flex items-center justify-center" style={{ backgroundColor: '#1663AF' }}>
                  <Check size={11} color="#fff" strokeWidth={3} />
                </div>
                <p className="text-sm leading-relaxed" style={{ color: '#4A5E72' }}>{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What CLAW Produces ── */}
      <section className="bg-white py-16 md:py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 data-reveal="fade" className="text-3xl md:text-5xl font-bold text-center mb-4" style={{ color: '#0B2240' }}>What CLAW Produces</h2>
          <p data-reveal="fade" data-delay="80" className="text-center max-w-2xl mx-auto mb-12 leading-relaxed" style={{ color: '#4A5E72' }}>
            Every input becomes an output. CLAW converts contaminated water and CO₂ into four categories of value.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {outputs.map((o, i) => {
              return (
                <div key={o.title} data-reveal data-delay={i * 80} className="card-hover rounded-xl p-7" style={{ backgroundColor: '#F4F8FC', border: '1px solid rgba(22,99,175,0.15)' }}>
                  <h3 className="font-bold text-lg mb-2" style={{ color: '#0B2240' }}>{o.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#4A5E72' }}>{o.body}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section style={{ backgroundColor: '#0B2240' }} className="py-16 md:py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 data-reveal="fade" className="text-3xl md:text-5xl font-bold text-white mb-12 text-center">The CLAW Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {process.map((step, i) => (
              <div key={step.step} data-reveal data-delay={i * 80} className="card-hover-dark rounded-xl p-7" style={{ backgroundColor: 'rgba(255,255,255,0.06)', border: '1px solid rgba(59,159,224,0.3)' }}>
                <p className="text-4xl font-bold mb-3" style={{ color: 'rgba(59,159,224,0.6)' }}>{step.step}</p>
                <h3 className="font-bold text-lg text-white mb-2">{step.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>{step.body}</p>
              </div>
            ))}
          </div>

          {/* ZLD Callout */}
          <div
            data-reveal="fade"
            data-delay="200"
            className="mt-8 rounded-2xl p-8 text-center"
            style={{ backgroundColor: 'rgba(22,99,175,0.12)', border: '1px solid rgba(22,99,175,0.3)' }}
          >
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#3B9FE0' }}>Performance Target</p>
            <p className="text-2xl md:text-3xl font-bold text-white mb-2">True Zero-Liquid-Discharge</p>
            <p className="text-sm max-w-lg mx-auto" style={{ color: 'rgba(255,255,255,0.6)' }}>
              CLAW Technology is engineered to achieve zero liquid discharge, no liquid waste leaves the system. Every input is converted, recovered, or reused.
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ backgroundColor: '#F4F8FC' }} className="py-16 md:py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 data-reveal="fade" className="text-3xl md:text-4xl font-bold text-center mb-10" style={{ color: '#0B2240' }}>Frequently Asked Questions</h2>
          <FaqAccordion items={faqs} accentColor="#1663AF" />
        </div>
      </section>

      {/* ── Nav + CTA ── */}
      <section className="bg-white py-10 px-6">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <Link href="/technologies/regenion" className="inline-flex items-center gap-2 font-semibold text-sm" style={{ color: '#0B2240' }}>
            <ArrowLeft size={16} /> ECO Regenion™
          </Link>
          <Link href="/technologies" className="inline-flex items-center gap-2 font-semibold text-sm" style={{ color: '#0B2240' }}>
            All Technologies <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <section className="py-24 px-6 text-center" style={{ background: 'linear-gradient(135deg, #0B2240 0%, #091828 100%)' }}>
        <h2 data-reveal="fade" className="text-3xl md:text-5xl font-bold text-white mb-4">Turn Produced Water into an Asset</h2>
        <p data-reveal="fade" data-delay="120" className="max-w-xl mx-auto mb-8 leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)' }}>
          Contact ECO to discuss how CLAW Technology can address your produced water management challenges, and generate commercial value in the process.
        </p>
        <div data-reveal="fade" data-delay="240" className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="btn-eco inline-block uppercase tracking-widest text-sm font-semibold px-12 py-4 rounded" style={{ backgroundColor: '#1663AF', color: '#fff' }}>
            Request Information
          </Link>
          <Link href="/technologies/regenion" className="btn-eco inline-block uppercase tracking-widest text-sm font-semibold px-12 py-4 rounded" style={{ backgroundColor: 'transparent', color: '#fff', border: '2px solid rgba(255,255,255,0.3)' }}>
            Explore Regenion
          </Link>
        </div>
      </section>
    </>
  )
}

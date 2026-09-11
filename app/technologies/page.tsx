import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Our Technologies',
  description: 'ECO Integrated Technologies operates two proprietary cleantech platforms, ECO Regenion™ for waste-to-energy and ECO H2O Recover™ CLAW technology for oilfield water recovery.',
}

export default function TechnologiesPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section
        className="relative min-h-[45vh] flex items-center px-8 md:px-16 pt-20 pb-16"
        style={{
          backgroundImage: 'linear-gradient(rgba(8,20,38,0.65), rgba(8,20,38,0.65)), url("/images/hero-technologies.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center 45%',
          backgroundColor: '#0B2240',
        }}
      >
        <div className="max-w-7xl w-full">
          <p data-reveal="fade" className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: '#22C47A' }}>
            What We Build
          </p>
          <h1 data-reveal="fade" data-delay="80" className="text-4xl md:text-6xl font-bold text-white mb-6">
            Two Platforms. One Mission.
          </h1>
          <p data-reveal="fade" data-delay="160" className="text-lg max-w-2xl leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)' }}>
            ECO's proprietary technology platforms address two of the world's most pressing environmental challenges, what to do with waste, and how to recover water.
          </p>
        </div>
      </section>

      {/* ── Regenion ── */}
      <section className="py-20 md:py-28 px-6" style={{ backgroundColor: '#F3FAF6' }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p data-reveal="fade" className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#1A835A' }}>Waste-to-Energy</p>
            <h2 data-reveal="fade" data-delay="80" className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#0B2240' }}>
              Converts Waste into Commercially Viable By-Products
            </h2>
            <p data-reveal="fade" data-delay="160" className="leading-relaxed mb-4" style={{ color: '#4A5E72' }}>
              ECO Regenion™ was created as a developmental company to acquire innovations that incorporate waste-to-energy solutions. Regenion integrates ECO&apos;s environmental technologies, bringing greater profitability to the markets we serve while providing more efficient and sustainable operations.
            </p>
            <p data-reveal="fade" data-delay="220" className="leading-relaxed mb-8" style={{ color: '#4A5E72' }}>
              This platform improves the lives of the communities it serves by directly addressing current landfill, energy, and water quality concerns. measurable environmental and financial results.
            </p>
            <Link data-reveal="fade" data-delay="300" href="/technologies/regenion" className="btn-eco inline-flex items-center gap-2 uppercase tracking-widest text-sm font-semibold px-8 py-3 rounded" style={{ backgroundColor: '#1A835A', color: '#fff' }}>
              Explore Regenion <ArrowRight size={15} />
            </Link>
          </div>
          <div>
            <div className="mb-8 flex justify-center">
              <img src="/images/logos/ECO_REGENION_logo-1.png" alt="ECO Regenion" className="h-20 w-auto object-contain" />
            </div>
            <div className="grid grid-cols-2 gap-4">
            {[
              { label: 'Waste-to-Energy', desc: 'Converts landfill waste into commercially viable energy and by-products' },
              { label: 'ESG Compliance', desc: 'Directly supports environmental, social, and governance goals' },
              { label: 'Chemical-Free', desc: 'No toxic additives or chemical processes in our operations' },
              { label: 'Greater Profitability', desc: 'Improves operational efficiency and creates new revenue streams' },
            ].map((item, i) => {
              return (
                <div key={item.label} data-reveal data-delay={i * 80} className="card-hover rounded-xl p-5" style={{ backgroundColor: '#ffffff', border: '1px solid rgba(26,131,90,0.2)' }}>
                  <p className="text-sm font-bold mb-1" style={{ color: '#0B2240' }}>{item.label}</p>
                  <p className="text-xs leading-relaxed" style={{ color: '#4A5E72' }}>{item.desc}</p>
                </div>
              )
            })}
            </div>
          </div>
        </div>
      </section>

      {/* ── H2O Recover ── */}
      <section style={{ backgroundColor: '#F4F8FC' }} className="py-20 md:py-28 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="md:order-2">
            <p data-reveal="fade" className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#1663AF' }}>CLAW Technology</p>
            <h2 data-reveal="fade" data-delay="80" className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#0B2240' }}>
              Converting Contaminated Water into Valuable Resources
            </h2>
            <p data-reveal="fade" data-delay="160" className="leading-relaxed mb-4" style={{ color: '#4A5E72' }}>
              CLAW Technology is a proprietary water-recovery platform designed to transform contaminated oilfield produced water and wellhead CO₂ into reusable water, critical mineral carbonates, and commercially valuable industrial products.
            </p>
            <p data-reveal="fade" data-delay="220" className="leading-relaxed mb-8" style={{ color: '#4A5E72' }}>
              Targeting true zero-liquid-discharge performance, CLAW represents a breakthrough for oil and gas operators facing increasing regulatory pressure on produced water management.
            </p>
            <Link data-reveal="fade" data-delay="300" href="/technologies/h2o-recover" className="btn-eco inline-flex items-center gap-2 uppercase tracking-widest text-sm font-semibold px-8 py-3 rounded" style={{ backgroundColor: '#1663AF', color: '#fff' }}>
              Explore H2O Recover <ArrowRight size={15} />
            </Link>
          </div>
          <div className="md:order-1">
            <div className="mb-8 flex justify-center">
              <img src="/images/logos/ECO-H2O-SYSTEMS_logo.png" alt="ECO H2O Recover" className="h-20 w-auto object-contain" />
            </div>
            <div className="grid grid-cols-2 gap-4">
            {[
              { label: 'Reusable Water', desc: 'Converts contaminated produced water into clean, reusable water' },
              { label: 'Mineral Carbonates', desc: 'Extracts critical mineral carbonates as commercially valuable by-products' },
              { label: 'Zero Liquid Discharge', desc: 'Targeting true ZLD performance for maximum environmental protection' },
              { label: 'CO₂ Utilization', desc: 'Processes wellhead CO₂ as part of the water recovery system' },
            ].map((item, i) => {
              return (
                <div key={item.label} data-reveal data-delay={i * 80} className="card-hover rounded-xl p-5 bg-white" style={{ backgroundColor: '#ffffff', border: '1px solid rgba(22,99,175,0.2)' }}>
                  <p className="text-sm font-bold mb-1" style={{ color: '#0B2240' }}>{item.label}</p>
                  <p className="text-xs leading-relaxed" style={{ color: '#4A5E72' }}>{item.desc}</p>
                </div>
              )
            })}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-6 text-center" style={{ background: 'linear-gradient(135deg, #0D2E1E 0%, #0A1E14 100%)' }}>
        <h2 data-reveal="fade" className="text-3xl md:text-5xl font-bold text-white mb-4">Interested in Our Technologies?</h2>
        <p data-reveal="fade" data-delay="100" className="max-w-xl mx-auto mb-8 leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)' }}>
          Contact us to discuss how ECO&apos;s proprietary platforms can address your specific environmental and operational challenges.
        </p>
        <Link data-reveal="fade" data-delay="220" href="/contact" className="btn-eco inline-flex items-center gap-2 justify-center uppercase tracking-widest text-sm font-semibold px-10 py-4 rounded" style={{ backgroundColor: '#1663AF', color: '#fff' }}>
          Get In Touch <ArrowRight size={15} />
        </Link>
      </section>
    </>
  )
}

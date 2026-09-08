import type { Metadata } from 'next'
import Link from 'next/link'
import { Droplets, Zap, Leaf, ArrowRight, CheckCircle, Globe, Shield, TrendingUp } from 'lucide-react'

export const metadata: Metadata = {
  title: 'ECO Integrated Technologies — Sustainable Innovations Powering Change',
  description:
    'ECO Integrated Technologies delivers chemical-free cleantech solutions — water recovery and waste-to-energy systems for commercial, industrial, and oil & gas sectors.',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'ECO Integrated Technologies',
  url: 'https://www.ecoiti.com',
  logo: 'https://www.ecoiti.com/images/logos/Eco-Integrated-Technologies-Logo-retina.png',
  description: 'Chemical-free cleantech solutions for water recovery and waste-to-energy.',
  telephone: '+18774770021',
  email: 'info@ecoiti.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '23986 Aliso Creek Road #312',
    addressLocality: 'Laguna Niguel',
    addressRegion: 'CA',
    postalCode: '92677',
    addressCountry: 'US',
  },
  sameAs: [],
}

const stats = [
  { icon: Droplets, label: 'Clean Water', value: 'Zero Liquid Discharge', sub: 'Target performance for oilfield recovery' },
  { icon: Zap, label: 'Clean Energy', value: 'Waste-to-Energy', sub: 'Commercially viable by-products from waste' },
  { icon: Leaf, label: 'Clean Environment', value: 'Chemical-Free', sub: 'Non-toxic, sustainable operations' },
]

const whyEco = [
  { icon: Shield, title: 'No Chemicals Required', body: 'Our technologies operate without chemical additives — protecting communities, waterways, and ecosystems.' },
  { icon: Globe, title: 'Environmental Stewardship', body: 'We help industry and communities meet environmental stewardship needs through sustainable, scalable operations.' },
  { icon: TrendingUp, title: 'Profitability Meets Sustainability', body: 'ECO solutions reduce operational costs while generating commercially valuable by-products — ESG in action.' },
]

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ── Hero ── */}
      {/* NOTE: This image should eventually move to the H2O Recover page — Kelsi 2026-09-08 */}
      <section
        className="relative min-h-[75vh] flex items-center px-6 pt-20"
        style={{
          backgroundImage: 'linear-gradient(rgba(10,26,20,0.52), rgba(10,26,20,0.52)), url("/images/hero-home.jpg")',
          backgroundSize: '140%',
          backgroundPosition: 'center 40%',
          backgroundColor: '#0A1A14',
        }}
      >
        <div className="relative max-w-7xl mx-auto text-left">
          <div
            data-reveal="fade"
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-8"
            style={{ backgroundColor: 'rgba(26,131,90,0.15)', border: '1px solid rgba(26,131,90,0.3)', color: '#22C47A' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-eco-bright animate-pulse inline-block" />
            Cleantech for the Future
          </div>
          <h1
            data-reveal="fade"
            data-delay="100"
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Sustainable Innovations<br />
            <span style={{ color: '#22C47A' }}>Powering Change</span>
          </h1>
          <p
            data-reveal="fade"
            data-delay="200"
            className="text-lg md:text-xl max-w-2xl mb-10 leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.7)' }}
          >
            ECO Integrated Technologies impacts the health and safety of water environments without the use of chemicals — in commercial, industrial, and oil & gas settings.
          </p>
          <div data-reveal="fade" data-delay="320" className="flex flex-col sm:flex-row gap-4 justify-start">
            <Link
              href="/technologies"
              className="btn-eco inline-flex items-center justify-center gap-2 uppercase tracking-widest text-sm font-semibold px-10 py-4 rounded"
              style={{ backgroundColor: '#1A835A', color: '#fff' }}
            >
              Our Technologies <ArrowRight size={16} />
            </Link>
            <Link
              href="/contact"
              className="btn-eco inline-flex items-center justify-center gap-2 uppercase tracking-widest text-sm font-semibold px-10 py-4 rounded"
              style={{ backgroundColor: 'transparent', color: '#fff', border: '2px solid rgba(255,255,255,0.3)' }}
            >
              Get In Touch
            </Link>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24" style={{ background: 'linear-gradient(to bottom, transparent, #ffffff)' }} />
      </section>

      {/* ── Stats Bar ── */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 md:divide-x md:divide-eco-cream">
          {stats.map((s, i) => {
            const Icon = s.icon
            return (
              <div key={s.label} data-reveal data-delay={i * 100} className="text-center px-8">
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(26,131,90,0.1)' }}>
                    <Icon size={22} style={{ color: '#1A835A' }} />
                  </div>
                </div>
                <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: '#1A835A' }}>{s.label}</p>
                <p className="text-xl font-bold mb-1" style={{ color: '#0A1A14' }}>{s.value}</p>
                <p className="text-xs leading-relaxed" style={{ color: '#5A8070' }}>{s.sub}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* ── Two Technology Cards ── */}
      <section style={{ backgroundColor: '#F3F7F5' }} className="py-16 md:py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2
            data-reveal="fade"
            className="text-3xl md:text-5xl font-bold text-center mb-4"
            style={{ color: '#0A1A14' }}
          >
            Our Technology Platforms
          </h2>
          <p data-reveal="fade" data-delay="100" className="text-center max-w-2xl mx-auto mb-12 leading-relaxed" style={{ color: '#5A8070' }}>
            Two proprietary technology platforms addressing the world&apos;s most pressing environmental challenges — waste and water.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Regenion */}
            <Link
              href="/technologies/regenion"
              data-reveal
              data-delay="0"
              className="group card-hover block rounded-2xl overflow-hidden"
              style={{ backgroundColor: '#0A1A14', border: '1px solid rgba(26,131,90,0.3)' }}
            >
              <div className="p-1 rounded-t-2xl" style={{ background: 'linear-gradient(90deg, #1A835A, #22C47A)' }} />
              <div className="p-8">
                <div className="mb-6">
                  <img
                    src="/images/logos/ECO_REGENION_logo-1.png"
                    alt="ECO Regenion"
                    className="h-12 w-auto object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Waste-to-Energy Solutions</h3>
                <p className="text-sm leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.6)' }}>
                  ECO Regenion™ converts waste into commercially viable by-products while cleaning up the environment. Integrating ECO&apos;s technologies for greater profitability and sustainable operations.
                </p>
                <div className="flex items-center gap-2 text-sm font-semibold" style={{ color: '#22C47A' }}>
                  Explore Regenion <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>

            {/* H2O Recover */}
            <Link
              href="/technologies/h2o-recover"
              data-reveal
              data-delay="100"
              className="group card-hover block rounded-2xl overflow-hidden"
              style={{ backgroundColor: '#0A1A14', border: '1px solid rgba(22,99,175,0.4)' }}
            >
              <div className="p-1 rounded-t-2xl" style={{ background: 'linear-gradient(90deg, #1663AF, #22B8C4)' }} />
              <div className="p-8">
                <div className="mb-6">
                  <img
                    src="/images/logos/ECO-H2O-SYSTEMS_logo.png"
                    alt="ECO H2O Recover"
                    className="h-12 w-auto object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">CLAW Water Recovery</h3>
                <p className="text-sm leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.6)' }}>
                  A proprietary water-recovery platform transforming contaminated oilfield produced water and wellhead CO₂ into reusable water, critical mineral carbonates, and industrial products.
                </p>
                <div className="flex items-center gap-2 text-sm font-semibold" style={{ color: '#22B8C4' }}>
                  Explore H2O Recover <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Why ECO ── */}
      <section className="bg-white py-16 md:py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p data-reveal="fade" className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#1A835A' }}>
              Our Mission
            </p>
            <h2
              data-reveal="fade"
              data-delay="80"
              className="text-3xl md:text-5xl font-bold mb-6"
              style={{ color: '#0A1A14' }}
            >
              The Compelling Cleantech Offering for the Future
            </h2>
            <p data-reveal="fade" data-delay="160" className="leading-relaxed mb-8" style={{ color: '#5A8070' }}>
              As custodians of the environment, our mission is to ensure industry and communities meet their environmental stewardship needs — without compromise. We deliver solutions that are non-toxic, chemical-free, and commercially viable.
            </p>
            <Link
              data-reveal="fade"
              data-delay="240"
              href="/about"
              className="btn-eco inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest px-8 py-3 rounded"
              style={{ backgroundColor: '#1A835A', color: '#fff' }}
            >
              About ECO <ArrowRight size={15} />
            </Link>
          </div>
          <div className="flex flex-col gap-5">
            {whyEco.map((item, i) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  data-reveal
                  data-delay={i * 100}
                  className="card-hover flex items-start gap-4 rounded-xl p-6"
                  style={{ backgroundColor: '#F3F7F5', border: '1px solid rgba(26,131,90,0.15)' }}
                >
                  <div className="shrink-0 w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'rgba(26,131,90,0.12)' }}>
                    <Icon size={18} style={{ color: '#1A835A' }} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm mb-1" style={{ color: '#0A1A14' }}>{item.title}</h4>
                    <p className="text-sm leading-relaxed" style={{ color: '#5A8070' }}>{item.body}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="py-24 md:py-36 px-6 text-center"
        style={{ background: 'linear-gradient(135deg, #0A1A14 0%, #0D2E1E 100%)' }}
      >
        <h2
          data-reveal="fade"
          className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-5"
        >
          Ready to Explore Our Solutions?
        </h2>
        <p
          data-reveal="fade"
          data-delay="150"
          className="text-lg max-w-xl mx-auto mb-10 leading-relaxed"
          style={{ color: 'rgba(255,255,255,0.7)' }}
        >
          Contact us to learn how ECO&apos;s technologies can address your environmental and operational challenges.
        </p>
        <div data-reveal="fade" data-delay="280" className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="btn-eco inline-block uppercase tracking-widest text-sm font-semibold px-12 py-4 rounded"
            style={{ backgroundColor: '#1A835A', color: '#fff' }}
          >
            Contact Us
          </Link>
          <Link
            href="/technologies"
            className="btn-eco inline-block uppercase tracking-widest text-sm font-semibold px-12 py-4 rounded"
            style={{ backgroundColor: 'transparent', color: '#fff', border: '2px solid rgba(255,255,255,0.3)' }}
          >
            View Technologies
          </Link>
        </div>
      </section>
    </>
  )
}

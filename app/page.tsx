import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'ECO Integrated Technologies, Sustainable Innovations Built to Last',
  description:
    'ECO Integrated Technologies delivers chemical-free cleantech solutions, water recovery and waste-to-energy systems for commercial, industrial, and oil & gas sectors.',
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
}

const stats = [
  { label: 'Clean Water', value: 'Zero Liquid Discharge', sub: 'Target performance for oilfield recovery' },
  { label: 'Clean Energy', value: 'Waste-to-Energy', sub: 'Commercially viable by-products from waste' },
  { label: 'Clean Environment', value: 'Chemical-Free', sub: 'Non-toxic, sustainable operations' },
]

const whyEco = [
  { title: 'No Chemicals Required', body: 'Our technologies work without chemical additives. That keeps communities, waterways, and surrounding land protected.' },
  { title: 'Environmental Stewardship', body: 'We help industry and communities manage their environmental responsibilities through technology that actually scales.' },
  { title: 'Profitability Meets Sustainability', body: 'ECO solutions reduce operational costs while generating commercially valuable by-products. measurable environmental and financial results.' },
]

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ── Hero, dark navy ── */}
      <section
        className="relative min-h-[80vh] flex items-center px-8 md:px-16 pt-20"
        style={{
          backgroundImage: 'linear-gradient(rgba(11,34,64,0.72), rgba(11,34,64,0.72)), url("/images/hero-home.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
          backgroundColor: '#0B2240',
        }}
      >
        <div className="relative w-full max-w-7xl mx-auto">
          <p
            data-reveal="fade"
            className="text-xs font-bold uppercase tracking-widest mb-8"
            style={{ color: '#22C47A' }}
          >
            Cleantech for the Future
          </p>
          <h1
            data-reveal="fade"
            data-delay="100"
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Sustainable Innovations<br />
            <span style={{ color: '#22C47A' }}>Built to Last</span>
          </h1>
          <p
            data-reveal="fade"
            data-delay="200"
            className="text-lg md:text-xl max-w-2xl mb-10 leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.75)' }}
          >
            ECO Integrated Technologies protects water environments without using chemicals, across commercial, industrial, and oil and gas operations.
          </p>
          <div data-reveal="fade" data-delay="320" className="flex flex-col sm:flex-row gap-4">
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
      </section>

      {/* ── Stats Bar, white ── */}
      <section className="bg-white py-14 px-6 border-b" style={{ borderColor: '#E4EDF5' }}>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 md:divide-x" style={{ borderColor: '#E4EDF5' }}>
          {stats.map((s, i) => (
            <div key={s.label} data-reveal data-delay={i * 100} className="text-center px-8">
              <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#1663AF' }}>{s.label}</p>
              <p className="text-xl font-bold mb-1" style={{ color: '#1A2535' }}>{s.value}</p>
              <p className="text-xs leading-relaxed" style={{ color: '#4A5E72' }}>{s.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Two Technology Cards, light blue-gray bg, white cards ── */}
      <section style={{ backgroundColor: '#F4F8FC' }} className="py-16 md:py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 data-reveal="fade" className="text-3xl md:text-5xl font-bold text-center mb-4" style={{ color: '#1A2535' }}>
            Our Technology Platforms
          </h2>
          <p data-reveal="fade" data-delay="100" className="text-center max-w-2xl mx-auto mb-12 leading-relaxed" style={{ color: '#4A5E72' }}>
            Two proprietary technology platforms addressing the world&apos;s most pressing environmental challenges: waste and water.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Regenion, green accent */}
            <Link href="/technologies/regenion" data-reveal data-delay="0" className="group card-hover block rounded-2xl overflow-hidden bg-white" style={{ boxShadow: '0 2px 16px rgba(11,34,64,0.08)', border: '1px solid #E0EBF5' }}>
              <div className="gradient-bar-green h-1.5 w-full rounded-t-2xl" />
              <div className="p-8">
                <div className="mb-6">
                  <img src="/images/logos/ECO_REGENION_logo-1.png" alt="ECO Regenion" className="h-10 w-auto object-contain" />
                </div>
                <h3 className="text-2xl font-bold mb-3" style={{ color: '#1A2535' }}>Waste-to-Energy Solutions</h3>
                <p className="text-sm leading-relaxed mb-6" style={{ color: '#4A5E72' }}>
                  ECO Regenion™ converts waste into commercially viable by-products while cleaning up the environment, integrating ECO technologies for greater profitability and sustainable operations.
                </p>
                <div className="flex items-center gap-2 text-sm font-semibold" style={{ color: '#1A835A' }}>
                  Explore Regenion <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>

            {/* H2O Recover, blue accent */}
            <Link href="/technologies/h2o-recover" data-reveal data-delay="100" className="group card-hover block rounded-2xl overflow-hidden bg-white" style={{ boxShadow: '0 2px 16px rgba(11,34,64,0.08)', border: '1px solid #E0EBF5' }}>
              <div className="gradient-bar-blue h-1.5 w-full rounded-t-2xl" />
              <div className="p-8">
                <div className="mb-6">
                  <img src="/images/logos/ECO-H2O-SYSTEMS_logo.png" alt="ECO H2O Recover" className="h-10 w-auto object-contain" />
                </div>
                <h3 className="text-2xl font-bold mb-3" style={{ color: '#1A2535' }}>CLAW Water Recovery</h3>
                <p className="text-sm leading-relaxed mb-6" style={{ color: '#4A5E72' }}>
                  A proprietary water-recovery platform converting contaminated oilfield produced water and wellhead CO₂ into reusable water, critical mineral carbonates, and industrial products.
                </p>
                <div className="flex items-center gap-2 text-sm font-semibold" style={{ color: '#1663AF' }}>
                  Explore H2O Recover <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* ── Why ECO, white bg ── */}
      <section className="bg-white py-16 md:py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p data-reveal="fade" className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#1663AF' }}>Our Mission</p>
            <h2 data-reveal="fade" data-delay="80" className="text-3xl md:text-5xl font-bold mb-6" style={{ color: '#1A2535' }}>
              The Compelling Cleantech Offering for the Future
            </h2>
            <p data-reveal="fade" data-delay="160" className="leading-relaxed mb-8" style={{ color: '#4A5E72' }}>
              Our goal is simple: help industry and communities address environmental challenges without using chemicals or generating new waste. Every solution we build is non-toxic, commercially viable, and built to perform at scale.
            </p>
            <Link data-reveal="fade" data-delay="240" href="/about" className="btn-eco inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest px-8 py-3 rounded" style={{ backgroundColor: '#1A835A', color: '#fff' }}>
              About ECO <ArrowRight size={15} />
            </Link>
          </div>
          <div className="flex flex-col gap-5">
            {whyEco.map((item, i) => (
              <div
                key={item.title}
                data-reveal
                data-delay={i * 100}
                className="card-hover rounded-xl p-6"
                style={{ backgroundColor: '#F4F8FC', border: '1px solid #D8E8F4' }}
              >
                <div className="w-2 h-2 rounded-full mb-3" style={{ backgroundColor: i === 1 ? '#1663AF' : '#1A835A' }} />
                <h4 className="font-bold text-sm mb-2" style={{ color: '#1A2535' }}>{item.title}</h4>
                <p className="text-sm leading-relaxed" style={{ color: '#4A5E72' }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA, dark navy ── */}
      <section className="py-24 md:py-36 px-6 text-center" style={{ background: 'linear-gradient(135deg, #0B2240 0%, #0D2E4A 100%)' }}>
        <h2 data-reveal="fade" className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-5">
          Ready to Explore Our Solutions?
        </h2>
        <p data-reveal="fade" data-delay="150" className="text-lg max-w-xl mx-auto mb-10 leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)' }}>
          Contact us to learn how ECO&apos;s technologies can address your environmental and operational challenges.
        </p>
        <div data-reveal="fade" data-delay="280" className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="btn-eco inline-block uppercase tracking-widest text-sm font-semibold px-12 py-4 rounded" style={{ backgroundColor: '#1A835A', color: '#fff' }}>
            Contact Us
          </Link>
          <Link href="/technologies" className="btn-eco inline-block uppercase tracking-widest text-sm font-semibold px-12 py-4 rounded" style={{ backgroundColor: 'transparent', color: '#fff', border: '2px solid rgba(255,255,255,0.3)' }}>
            View Technologies
          </Link>
        </div>
      </section>
    </>
  )
}

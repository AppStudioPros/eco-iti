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
  { title: 'Profitability Meets Sustainability', body: 'ECO solutions reduce operational costs while generating commercially valuable by-products, delivering measurable environmental and financial results.' },
]

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section
        className="relative flex items-center px-5 md:px-16 pt-24 pb-12 md:pt-32 md:pb-20"
        style={{
          backgroundImage: 'url("/images/hero-home.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'left center',
          minHeight: '55vh',
        }}
      >
        <div className="hero-overlay relative z-10 w-full md:max-w-[42%] text-center md:text-left">
          <h1 data-reveal="fade" className="text-3xl sm:text-3xl md:text-5xl font-bold text-white mb-3 leading-snug">
            Sustainable Innovations <span style={{ color: '#22C47A' }}>Built to Last.</span>
          </h1>
          <p data-reveal="fade" data-delay="120" className="text-sm md:text-base leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.85)' }}>
            ECO Integrated Technologies protects water environments without using chemicals, across commercial, industrial, and oil and gas operations.
          </p>
          <div data-reveal="fade" data-delay="240" className="flex flex-wrap justify-center md:justify-start gap-3">
            <Link href="/technologies" className="btn-eco inline-flex items-center gap-2 uppercase tracking-widest text-xs font-semibold px-6 py-3 rounded" style={{ backgroundColor: '#1A835A', color: '#fff' }}>
              Our Technologies <ArrowRight size={13} />
            </Link>
            <Link href="/contact" className="btn-eco inline-flex items-center gap-2 uppercase tracking-widest text-xs font-semibold px-6 py-3 rounded" style={{ backgroundColor: 'transparent', color: '#fff', border: '2px solid rgba(255,255,255,0.4)' }}>
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      {/* ── Stats Bar — white, blue labels ── */}
      <section className="bg-white py-10 md:py-14 px-4 md:px-6 border-b" style={{ borderColor: '#E4EDF5' }}>
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

      {/* ── Tech Cards — blue-tinted light bg, green label → blue buttons on cards ── */}
      <section className="bg-white py-10 md:py-24 px-4 md:px-6" style={{ borderBottom: '1px solid #E4EDF5' }}>
        <div className="max-w-6xl mx-auto">
          <p data-reveal="fade" className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#1A835A' }}>What We Build</p>
          <h2 data-reveal="fade" data-delay="80" className="text-3xl md:text-5xl font-bold mb-4" style={{ color: '#1A2535' }}>Our Technology Platforms</h2>
          <p data-reveal="fade" data-delay="120" className="max-w-2xl mx-auto mb-12 leading-relaxed" style={{ color: '#4A5E72' }}>
            Two proprietary platforms addressing the world's most pressing environmental challenges: waste and water.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/technologies/regenion" data-reveal data-delay="0" className="group card-hover block rounded-2xl overflow-hidden bg-white" style={{ boxShadow: '0 2px 16px rgba(11,34,64,0.08)', border: '1px solid #E0EBF5' }}>
              <div className="gradient-bar-green h-1.5 w-full" />
              <div className="p-8">
                <div className="mb-6"><img src="/images/logos/ECO_REGENION_logo-1.png" alt="ECO Regenion" className="h-10 w-auto object-contain" /></div>
                <h3 className="text-2xl font-bold mb-3" style={{ color: '#1A2535' }}>Waste-to-Energy Solutions</h3>
                <p className="text-sm leading-relaxed mb-6" style={{ color: '#4A5E72' }}>
                  ECO Regenion converts waste into commercially viable by-products while cleaning up the environment, generating greater profitability alongside sustainable operations.
                </p>
                <div className="flex items-center gap-2 text-sm font-semibold" style={{ color: '#1A835A' }}>
                  Explore Regenion <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
            <Link href="/technologies/h2o-recover" data-reveal data-delay="100" className="group card-hover block rounded-2xl overflow-hidden bg-white" style={{ boxShadow: '0 2px 16px rgba(11,34,64,0.08)', border: '1px solid #E0EBF5' }}>
              <div className="gradient-bar-blue h-1.5 w-full" />
              <div className="p-8">
                <div className="mb-6"><img src="/images/logos/ECO-H2O-SYSTEMS_logo.png" alt="ECO H2O Recover" className="h-10 w-auto object-contain" /></div>
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

      {/* ── Why ECO — green-tinted bg, blue label → blue buttons (green bg = blue accents) ── */}
      <section style={{ backgroundColor: '#F3FAF6' }} className="py-10 md:py-24 px-4 md:px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div>
            <p data-reveal="fade" className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#1663AF' }}>Our Mission</p>
            <h2 data-reveal="fade" data-delay="80" className="text-3xl md:text-5xl font-bold mb-6" style={{ color: '#1A2535' }}>
              The Compelling Cleantech Offering for the Future
            </h2>
            <p data-reveal="fade" data-delay="160" className="leading-relaxed mb-8" style={{ color: '#4A5E72' }}>
              Our goal is simple: help industry and communities address environmental challenges without using chemicals or generating new waste. Every solution we build is non-toxic, commercially viable, and built to perform at scale.
            </p>
            {/* Green bg section → blue button */}
            <Link data-reveal="fade" data-delay="240" href="/about" className="btn-eco inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest px-8 py-3 rounded" style={{ backgroundColor: '#1663AF', color: '#fff' }}>
              About ECO <ArrowRight size={15} />
            </Link>
          </div>
          <div className="flex flex-col gap-5">
            {whyEco.map((item, i) => (
              <div key={item.title} data-reveal data-delay={i * 100} className="card-hover rounded-xl p-6 bg-white" style={{ border: '1px solid #C8EAD8' }}>
                <h4 className="font-bold text-sm mb-2" style={{ color: '#1663AF' }}>{item.title}</h4>
                <p className="text-sm leading-relaxed" style={{ color: '#4A5E72' }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA — dark green bg, blue buttons (green bg = blue accents) ── */}
      <section className="py-16 md:py-36 px-4 md:px-6 text-center" style={{ background: 'linear-gradient(135deg, #0B2240 0%, #0D2E4A 100%)' }}>
        <h2 data-reveal="fade" className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-5">
          Ready to Explore Our Solutions?
        </h2>
        <p data-reveal="fade" data-delay="150" className="text-lg max-w-xl mx-auto mb-10 leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)' }}>
          Contact us to learn how ECO's technologies can address your environmental and operational challenges.
        </p>
        <div data-reveal="fade" data-delay="280" className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* Green dark bg → blue buttons */}
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

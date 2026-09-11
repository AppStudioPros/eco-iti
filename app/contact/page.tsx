import type { Metadata } from 'next'

import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact ECO Integrated Technologies',
  description: 'Contact ECO Integrated Technologies to learn about our cleantech solutions. Call 1-877-477-0021 or email info@ecoiti.com. Laguna Niguel, CA.',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'ECO Integrated Technologies',
  url: 'https://www.ecoiti.com',
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

const contactCards = [
  { label: 'Call Us', value: '1-877-477-0021', sub: 'Toll-free', href: 'tel:18774770021' },
  { label: 'Email Us', value: 'info@ecoiti.com', sub: "We'll respond promptly", href: 'mailto:info@ecoiti.com' },
  { label: 'Mailing Address', value: '23986 Aliso Creek Road #312', sub: 'Laguna Niguel, CA 92677', href: null },
  { label: 'Business Hours', value: 'Monday – Friday', sub: '9:00 AM – 5:00 PM PT', href: null },
]

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative w-full">
        <img src="/images/hero-contact.jpg" alt="" className="w-full h-auto block" />
        <div className="hero-overlay absolute inset-0 flex items-center px-5 md:px-16" style={{ paddingTop: '80px' }}>
          <div className="w-full md:max-w-[38%]">
            <h1 data-reveal="fade" className="text-3xl md:text-5xl font-bold text-white mb-4 leading-snug">
              Get <span style={{ color: '#1663AF' }}>In Touch.</span>
            </h1>
            <p data-reveal="fade" data-delay="120" className="text-base leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.8)' }}>
              Fill out the form below or reach out directly. We respond to all inquiries.
            </p>
          </div>
        </div>
      </section>

      {/* ── Contact Info Cards ── */}
      <section style={{ backgroundColor: '#F4F8FC' }} className="py-12 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
          {contactCards.map((card, i) => {
            return (
              <div key={card.label} data-reveal data-delay={i * 80} className="card-hover rounded-xl p-8 bg-white" style={{ border: '1px solid #D0E4F4' }}>
                <p className="text-sm font-bold uppercase tracking-widest mb-2" style={{ color: '#1663AF' }}>{card.label}</p>
                {card.href ? (
                  <a href={card.href} className="text-base font-semibold block mb-1 transition-colors" style={{ color: '#1A2535' }}>{card.value}</a>
                ) : (
                  <p className="text-base font-semibold mb-1" style={{ color: '#1A2535' }}>{card.value}</p>
                )}
                <p className="text-sm" style={{ color: '#4A5E72' }}>{card.sub}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* ── Form ── */}
      <section style={{ backgroundColor: '#F4F8FC' }} className="py-16 md:py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <p data-reveal="fade" className="text-xs font-bold uppercase tracking-widest text-center mb-3" style={{ color: '#1A835A' }}>Send a Message</p>
          <h2 data-reveal="fade" data-delay="80" className="text-3xl md:text-4xl font-bold text-center mb-10" style={{ color: '#0B2240' }}>
            Tell Us About Your Project
          </h2>
          <div data-reveal="fade" data-delay="160">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-6 text-center" style={{ background: 'linear-gradient(135deg, #0B2240 0%, #0B2240 100%)' }}>
        <h2 data-reveal="fade" className="text-3xl md:text-4xl font-bold text-white mb-4">Prefer to Call?</h2>
        <p data-reveal="fade" data-delay="100" className="max-w-md mx-auto mb-6 leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)' }}>
          Our team is available to discuss your project, answer technical questions, or schedule a detailed consultation.
        </p>
        <a
          data-reveal="fade"
          data-delay="200"
          href="tel:18774770021"
          className="btn-eco inline-block uppercase tracking-widest text-sm font-semibold px-12 py-4 rounded"
          style={{ backgroundColor: '#1A835A', color: '#fff' }}
        >
          1-877-477-0021
        </a>
      </section>
    </>
  )
}

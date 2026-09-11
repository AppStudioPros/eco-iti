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

      {/* ── Hero ── */}
      <section className="pt-32 pb-20 px-6 text-center" style={{ background: 'linear-gradient(135deg, #0B2240 0%, #0B2240 100%)' }}>
        <h1 data-reveal="fade" className="text-4xl md:text-6xl font-bold text-white mb-4">Get In Touch</h1>
        <p data-reveal="fade" data-delay="150" className="text-lg max-w-xl mx-auto leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)' }}>
          Ready to learn more about our solutions? Have a project to discuss? Fill out the form below or reach out directly.
        </p>
      </section>

      {/* ── Contact Info Cards ── */}
      <section style={{ backgroundColor: '#F4F8FC' }} className="py-12 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {contactCards.map((card, i) => {
            return (
              <div key={card.label} data-reveal data-delay={i * 80} className="card-hover-dark rounded-xl p-6" style={{ backgroundColor: 'rgba(255,255,255,0.06)', border: '1px solid rgba(26,131,90,0.25)' }}>
                <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: 'rgba(255,255,255,0.4)' }}>{card.label}</p>
                {card.href ? (
                  <a href={card.href} className="text-sm font-semibold text-white block mb-0.5 hover:text-eco-bright transition-colors">{card.value}</a>
                ) : (
                  <p className="text-sm font-semibold text-white mb-0.5">{card.value}</p>
                )}
                <p className="text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>{card.sub}</p>
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

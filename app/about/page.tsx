import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About ECO Integrated Technologies',
  description: 'Learn about ECO Integrated Technologies, a VC-backed cleantech company delivering chemical-free water recovery and waste-to-energy solutions. Meet our leadership team.',
}

const team = [
  {
    name: 'Jess Rae Booth',
    title: 'Chairman & CEO',
    photo: '/images/team-jess.jpg',
    bio: 'Jess Rae Booth leads ECO Integrated Technologies with a vision for sustainable innovation that delivers measurable environmental and commercial results. Under her leadership, ECO has developed two proprietary technology platforms addressing critical global challenges in water recovery and waste management.',
  },
  {
    name: 'Walter Carlson',
    title: 'Chief Financial Officer',
    photo: '/images/team-walter.jpg',
    bio: 'Walter Carlson brings extensive financial leadership experience to ECO, overseeing the company\'s financial strategy, investor relations, and capital structure. His guidance supports ECO\'s growth as a venture capital-backed cleantech company scaling its technology platforms to new markets.',
  },
  {
    name: 'Kristin Johnston',
    title: 'Executive Business Administrator',
    photo: '/images/team-kristin.jpg',
    bio: 'Kristin Johnston drives operational excellence at ECO Integrated Technologies, managing internal systems, client communications, and cross-functional coordination that keeps ECO\'s technology and business development efforts moving forward.',
  },
]

const values = [
  { title: 'Mission-Driven', body: 'Every technology we develop is guided by a single mission: ensure industry and communities can meet environmental stewardship goals without cutting corners.' },
  { title: 'Transparency', body: 'We believe in honest, clear communication with clients, partners, investors, and the communities we serve. Our results speak for themselves.' },
  { title: 'Stewardship', body: 'We operate as stewards of the environment, our solutions are designed to protect, recover, and sustain natural resources for this generation and the next.' },
]

export default function AboutPage() {
  return (
    <>
      <section className="relative w-full">
        <img src="/images/hero-about.jpg" alt="" className="w-full h-auto block" />
        <div className="absolute inset-0 flex items-center px-8 md:px-16" style={{ paddingTop: '80px' }}>
          <div className="w-full">
            <p data-reveal="fade" className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: '#22C47A' }}>
              Our Story
            </p>
            <h1 data-reveal="fade" data-delay="80" className="text-4xl md:text-6xl font-bold text-white mb-6">
              Cleantech Built on Purpose
            </h1>
            <p data-reveal="fade" data-delay="160" className="text-lg max-w-2xl leading-relaxed" style={{ color: 'rgba(255,255,255,0.75)' }}>
              ECO Integrated Technologies exists because environmental stewardship and commercial viability work together when you have the right technology.
            </p>
          </div>
        </div>
      </section>

      {/* ── Company Story ── */}
      <section className="bg-white py-16 md:py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <p data-reveal="fade" className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#1A835A' }}>Who We Are</p>
              <h2 data-reveal="fade" data-delay="80" className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#0B2240' }}>
                Sustainable Innovations Built to Last
              </h2>
              <div className="prose-eco">
                <p data-reveal="fade" data-delay="160">
                  ECO Integrated Technologies impacts the health and safety of natural, managed, and contaminated water environments without using chemicals. We serve commercial, industrial, and oil and gas production facilities and sites.
                </p>
                <p data-reveal="fade" data-delay="220">
                  Our mission as stewards of the environment is to ensure industry and communities meet their environmental stewardship needs and goals. We are the compelling cleantech offering for the future.
                </p>
                <p data-reveal="fade" data-delay="280">
                  ECO customers receive innovative cleantech solutions that reduce costs, resolve environmental concerns, address sustainability goals, and improve community image, all at the same time.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              {[
                { num: '2', label: 'Proprietary Technology Platforms', sub: 'ECO Regenion™ and ECO H2O Recover™' },
                { num: '3', label: 'States of Licensure', sub: 'Commercial operations across multiple regions' },
                { num: '0', label: 'Chemicals Required', sub: 'All solutions are non-toxic and chemical-free' },
              ].map((s, i) => (
                <div
                  key={s.label}
                  data-reveal
                  data-delay={i * 80}
                  className="card-hover rounded-xl p-6 flex items-center gap-6"
                  style={{ backgroundColor: '#F3FAF6', border: '1px solid rgba(26,131,90,0.15)' }}
                >
                  <span className="text-4xl font-bold shrink-0" style={{ color: '#1A835A' }}>{s.num}</span>
                  <div>
                    <p className="font-bold text-sm mb-0.5" style={{ color: '#0B2240' }}>{s.label}</p>
                    <p className="text-xs" style={{ color: '#4A5E72' }}>{s.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission & Values ── */}
      <section style={{ backgroundColor: '#F4F8FC' }} className="py-16 md:py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 data-reveal="fade" className="text-3xl md:text-5xl font-bold text-center mb-12" style={{ color: '#0B2240' }}>
            Mission & Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v, i) => {
              return (
                <div
                  key={v.title}
                  data-reveal
                  data-delay={i * 100}
                  className="card-hover rounded-xl p-8 bg-white"
                  style={{ border: '1px solid rgba(26,131,90,0.15)' }}
                >
                  <h3 className="font-bold text-lg mb-3" style={{ color: '#0B2240' }}>{v.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#4A5E72' }}>{v.body}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Leadership Team ── */}
      <section className="bg-white py-16 md:py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <p data-reveal="fade" className="text-xs font-bold uppercase tracking-widest text-center mb-3" style={{ color: '#1A835A' }}>The People Behind ECO</p>
          <h2 data-reveal="fade" data-delay="80" className="text-3xl md:text-5xl font-bold text-center mb-12" style={{ color: '#0B2240' }}>
            Executive Leadership
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {team.map((member, i) => (
              <div
                key={member.name}
                data-reveal
                data-delay={i * 100}
                className="card-hover rounded-xl overflow-hidden"
                style={{ border: '1px solid rgba(26,131,90,0.15)' }}
              >
                <div className="img-hover-zoom h-72 overflow-hidden">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-1" style={{ color: '#0B2240' }}>{member.name}</h3>
                  <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#1A835A' }}>{member.title}</p>
                  <p className="text-sm leading-relaxed" style={{ color: '#4A5E72' }}>{member.bio}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-6 text-center" style={{ background: 'linear-gradient(135deg, #0D2E1E 0%, #0A1E14 100%)' }}>
        <h2 data-reveal="fade" className="text-3xl md:text-5xl font-bold text-white mb-4">Ready to Connect?</h2>
        <p data-reveal="fade" data-delay="100" className="max-w-xl mx-auto mb-8 leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)' }}>
          Whether you&apos;re exploring a partnership, looking for cleantech solutions, or interested in investor relations, we&apos;d love to hear from you.
        </p>
        <div data-reveal="fade" data-delay="220" className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="btn-eco inline-flex items-center gap-2 justify-center uppercase tracking-widest text-sm font-semibold px-10 py-4 rounded" style={{ backgroundColor: '#1A835A', color: '#fff' }}>
            Get In Touch <ArrowRight size={15} />
          </Link>
          <Link href="/technologies" className="btn-eco inline-flex items-center gap-2 justify-center uppercase tracking-widest text-sm font-semibold px-10 py-4 rounded" style={{ backgroundColor: 'transparent', color: '#fff', border: '2px solid rgba(255,255,255,0.3)' }}>
            Our Technologies
          </Link>
        </div>
      </section>
    </>
  )
}

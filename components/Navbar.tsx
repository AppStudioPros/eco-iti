'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'

const techLinks = [
  { label: 'ECO Regenion™', href: '/technologies/regenion', desc: 'Waste-to-energy solutions' },
  { label: 'ECO H2O Recover™', href: '/technologies/h2o-recover', desc: 'CLAW water recovery technology' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [techOpen, setTechOpen] = useState(false)

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{ backgroundColor: '#0A1A14', borderBottom: '1px solid rgba(26,131,90,0.2)' }}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 md:h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logos/Eco-Integrated-Technologies-Logo-retina.png"
            alt="ECO Integrated Technologies"
            width={180}
            height={39}
            priority
            className="object-contain h-8 md:h-10 w-auto"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {/* Technologies dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setTechOpen(true)}
            onMouseLeave={() => setTechOpen(false)}
          >
            <button
              className="flex items-center gap-1 text-sm font-semibold uppercase tracking-widest transition-colors"
              style={{ color: 'rgba(255,255,255,0.8)' }}
            >
              Technologies <ChevronDown size={14} className={`transition-transform ${techOpen ? 'rotate-180' : ''}`} />
            </button>
            {techOpen && (
              <div
                className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-64"
                style={{ backgroundColor: '#0D2E1E', border: '1px solid rgba(26,131,90,0.3)' }}
              >
                <div className="rounded overflow-hidden shadow-2xl" style={{ backgroundColor: '#0D2E1E', border: '1px solid rgba(26,131,90,0.3)' }}>
                {techLinks.map((t) => (
                  <Link
                    key={t.href}
                    href={t.href}
                    className="block px-5 py-4 transition-colors hover:bg-eco-green/20"
                    style={{ borderBottom: '1px solid rgba(26,131,90,0.15)' }}
                    onClick={() => setTechOpen(false)}
                  >
                    <p className="text-sm font-semibold text-white mb-0.5">{t.label}</p>
                    <p className="text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>{t.desc}</p>
                  </Link>
                ))}
              </div>
              </div>
            )}
          </div>

          <Link href="/about" className="text-sm font-semibold uppercase tracking-widest transition-colors" style={{ color: 'rgba(255,255,255,0.8)' }}>About</Link>
          <Link href="/contact" className="text-sm font-semibold uppercase tracking-widest transition-colors" style={{ color: 'rgba(255,255,255,0.8)' }}>Contact</Link>

          <Link
            href="/contact"
            className="btn-eco text-sm font-semibold uppercase tracking-widest px-6 py-2.5 rounded"
            style={{ backgroundColor: '#1A835A', color: '#fff' }}
          >
            Get In Touch
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden px-6 pb-6 flex flex-col gap-4"
          style={{ backgroundColor: '#0A1A14', borderTop: '1px solid rgba(26,131,90,0.2)' }}
        >
          <p className="text-xs font-bold uppercase tracking-widest mt-4" style={{ color: 'rgba(255,255,255,0.4)' }}>Technologies</p>
          {techLinks.map((t) => (
            <Link key={t.href} href={t.href} className="text-sm text-white font-semibold" onClick={() => setOpen(false)}>
              {t.label}
            </Link>
          ))}
          <div style={{ borderTop: '1px solid rgba(26,131,90,0.2)' }} className="pt-4 flex flex-col gap-4">
            <Link href="/about" className="text-sm text-white font-semibold" onClick={() => setOpen(false)}>About</Link>
            <Link href="/contact" className="text-sm text-white font-semibold" onClick={() => setOpen(false)}>Contact</Link>
            <Link
              href="/contact"
              className="btn-eco text-sm font-semibold uppercase tracking-widest px-6 py-3 rounded text-center"
              style={{ backgroundColor: '#1A835A', color: '#fff' }}
              onClick={() => setOpen(false)}
            >
              Get In Touch
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

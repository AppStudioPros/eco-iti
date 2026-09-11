'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Technologies', href: '/technologies' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  const logoSrc = pathname === '/technologies/regenion'
    ? '/images/logos/ECO_REGENION_logo-1.png'
    : pathname === '/technologies/h2o-recover'
    ? '/images/logos/ECO-H2O-SYSTEMS_logo.png'
    : '/images/logos/Eco-Integrated-Technologies-Logo-retina.png'

  const logoAlt = pathname === '/technologies/regenion'
    ? 'ECO Regenion'
    : pathname === '/technologies/h2o-recover'
    ? 'ECO H2O Recover'
    : 'ECO Integrated Technologies'

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{ backgroundColor: '#ffffff', borderBottom: '1px solid rgba(22,99,175,0.12)', boxShadow: '0 1px 20px rgba(0,0,0,0.06)' }}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 md:h-20 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src={logoSrc}
            alt={logoAlt}
            width={180}
            height={39}
            priority
            className="object-contain h-8 md:h-10 w-auto"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(l => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-semibold uppercase tracking-widest transition-colors hover:text-[#1663AF]"
              style={{ color: '#1A2535' }}
            >
              {l.label}
            </Link>
          ))}
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
          className="md:hidden"
          style={{ color: '#1A2535' }}
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
          style={{ backgroundColor: '#ffffff', borderTop: '1px solid rgba(22,99,175,0.12)' }}
        >
          <div className="flex flex-col gap-4 pt-4">
            {navLinks.map(l => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm font-semibold uppercase tracking-widest"
                style={{ color: '#1A2535' }}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
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

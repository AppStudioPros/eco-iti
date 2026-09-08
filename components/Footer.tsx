import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Phone, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#0A1A14', borderTop: '1px solid rgba(26,131,90,0.2)' }}>
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="md:col-span-1">
          <Image
            src="/images/logos/Eco-Integrated-Technologies-Logo-retina.png"
            alt="ECO Integrated Technologies"
            width={160}
            height={35}
            className="object-contain h-8 w-auto mb-4"
            loading="eager"
          />
          <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
            Sustainable innovations powering change. Chemical-free cleantech for industry and communities.
          </p>
        </div>

        {/* Technologies */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: 'rgba(255,255,255,0.4)' }}>Technologies</h4>
          <ul className="flex flex-col gap-2">
            {[
              { label: 'ECO Regenion™', href: '/technologies/regenion' },
              { label: 'ECO H2O Recover™', href: '/technologies/h2o-recover' },
            ].map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-sm transition-colors hover:text-white" style={{ color: 'rgba(255,255,255,0.6)' }}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: 'rgba(255,255,255,0.4)' }}>Company</h4>
          <ul className="flex flex-col gap-2">
            {[
              { label: 'About', href: '/about' },
              { label: 'Contact', href: '/contact' },
            ].map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-sm transition-colors hover:text-white" style={{ color: 'rgba(255,255,255,0.6)' }}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: 'rgba(255,255,255,0.4)' }}>Contact</h4>
          <ul className="flex flex-col gap-3">
            <li className="flex items-start gap-2">
              <MapPin size={14} style={{ color: '#1A835A', marginTop: 2 }} className="shrink-0" />
              <span className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
                23986 Aliso Creek Road #312<br />Laguna Niguel, CA 92677
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={14} style={{ color: '#1A835A' }} className="shrink-0" />
              <a href="tel:18774770021" className="text-xs transition-colors hover:text-white" style={{ color: 'rgba(255,255,255,0.6)' }}>
                1-877-477-0021
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={14} style={{ color: '#1A835A' }} className="shrink-0" />
              <a href="mailto:info@ecoiti.com" className="text-xs transition-colors hover:text-white" style={{ color: 'rgba(255,255,255,0.6)' }}>
                info@ecoiti.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div
        className="border-t px-6 py-5"
        style={{ borderColor: 'rgba(26,131,90,0.2)' }}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>
            © {new Date().getFullYear()} ECO Integrated Technologies. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>
            Sustainable Innovations Powering Change
          </p>
        </div>
      </div>
    </footer>
  )
}

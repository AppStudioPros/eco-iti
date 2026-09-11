import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#ffffff', borderTop: '1px solid #E0EBF5' }}>
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div className="md:col-span-1">
          <Image
            src="/images/logos/Eco-Integrated-Technologies-Logo-retina.png"
            alt="ECO Integrated Technologies"
            width={220}
            height={48}
            className="object-contain h-12 w-auto mb-4"
            loading="eager"
          />
          <p className="text-xs leading-relaxed" style={{ color: '#4A5E72' }}>
            Sustainable innovations powering change. Chemical-free cleantech for industry and communities.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: '#1A2535' }}>Quick Links</h4>
          <ul className="flex flex-col gap-2">
            {[
              { label: 'Home', href: '/' },
              { label: 'Technologies', href: '/technologies' },
              { label: 'ECO Regenion™', href: '/technologies/regenion' },
              { label: 'ECO H2O Recover™', href: '/technologies/h2o-recover' },
              { label: 'About', href: '/about' },
              { label: 'Contact', href: '/contact' },
            ].map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-sm transition-colors hover:underline" style={{ color: '#4A5E72' }}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: '#1A2535' }}>Legal</h4>
          <ul className="flex flex-col gap-2">
            {[
              { label: 'Privacy Policy', href: '/privacy-policy' },
              { label: 'Terms of Use', href: '/terms-of-use' },
              { label: 'Disclaimer', href: '/disclaimer' },
              { label: 'Cookie Policy', href: '/cookie-policy' },
            ].map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-sm transition-colors hover:underline" style={{ color: '#4A5E72' }}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: '#1A2535' }}>Contact</h4>
          <ul className="flex flex-col gap-3">
            <li>
              <span className="text-xs leading-relaxed" style={{ color: '#4A5E72' }}>
                23986 Aliso Creek Road #312<br />Laguna Niguel, CA 92677
              </span>
            </li>
            <li>
              <a href="tel:18774770021" className="text-xs transition-colors hover:underline" style={{ color: '#1663AF' }}>
                1-877-477-0021
              </a>
            </li>
            <li>
              <a href="mailto:info@ecoiti.com" className="text-xs transition-colors hover:underline" style={{ color: '#1663AF' }}>
                info@ecoiti.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t px-6 py-5" style={{ borderColor: '#E0EBF5', backgroundColor: '#F4F8FC' }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-xs" style={{ color: '#4A5E72' }}>
            © {new Date().getFullYear()} ECO Integrated Technologies. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: '#4A5E72' }}>
            Sustainable Innovations Powering Change
          </p>
        </div>
      </div>
    </footer>
  )
}

'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('eco-cookie-consent')
    if (!consent) setVisible(true)
  }, [])

  const handleAccept = () => {
    localStorage.setItem('eco-cookie-consent', 'accepted')
    setVisible(false)
  }

  const handleDecline = () => {
    localStorage.setItem('eco-cookie-consent', 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-label="Cookie consent"
      className="fixed bottom-0 left-0 right-0 z-50 px-4 py-4 md:px-8 md:py-5"
      style={{ backgroundColor: '#0B2240', borderTop: '1px solid rgba(255,255,255,0.1)' }}
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.85)' }}>
          We use cookies to improve your experience on our site. See our{' '}
          <Link href="/cookie-policy" className="underline hover:text-white" style={{ color: '#3B9FE0' }}>
            Cookie Policy
          </Link>{' '}
          and{' '}
          <Link href="/privacy-policy" className="underline hover:text-white" style={{ color: '#3B9FE0' }}>
            Privacy Policy
          </Link>{' '}
          for details.
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={handleDecline}
            className="text-xs font-semibold uppercase tracking-widest px-5 py-2.5 rounded transition-colors"
            style={{ backgroundColor: 'transparent', color: 'rgba(255,255,255,0.7)', border: '1px solid rgba(255,255,255,0.25)' }}
            aria-label="Decline non-essential cookies"
          >
            Decline
          </button>
          <button
            onClick={handleAccept}
            className="text-xs font-semibold uppercase tracking-widest px-5 py-2.5 rounded transition-colors"
            style={{ backgroundColor: '#1A835A', color: '#fff' }}
            aria-label="Accept all cookies"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  )
}

'use client'

import { useState, useEffect } from 'react'
import { Accessibility, Type, Contrast, Minus, Plus, X } from 'lucide-react'

const STORAGE_KEY = 'eco-a11y'

const defaults = {
  fontSize: 0,       // -1 | 0 | 1 | 2
  highContrast: false,
  pauseAnimations: false,
}

export default function AccessibilityWidget() {
  const [open, setOpen] = useState(false)
  const [prefs, setPrefs] = useState(defaults)

  // Load saved prefs
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved) setPrefs(JSON.parse(saved))
    } catch {}
  }, [])

  // Apply prefs to document
  useEffect(() => {
    const root = document.documentElement

    // Font size
    const sizes = [null, '105%', '112%', '120%']
    const negSizes = ['92%']
    if (prefs.fontSize < 0) {
      root.style.fontSize = negSizes[Math.abs(prefs.fontSize) - 1] || '92%'
    } else if (prefs.fontSize > 0) {
      root.style.fontSize = sizes[prefs.fontSize] || '112%'
    } else {
      root.style.fontSize = ''
    }

    // High contrast
    if (prefs.highContrast) {
      root.setAttribute('data-high-contrast', 'true')
    } else {
      root.removeAttribute('data-high-contrast')
    }

    // Pause animations
    if (prefs.pauseAnimations) {
      root.setAttribute('data-pause-animations', 'true')
    } else {
      root.removeAttribute('data-pause-animations')
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs))
  }, [prefs])

  const update = (patch: Partial<typeof defaults>) =>
    setPrefs(prev => ({ ...prev, ...patch }))

  const reset = () => setPrefs(defaults)

  return (
    <>
      {/* Global styles for high contrast + pause animations */}
      <style>{`
        [data-high-contrast='true'] {
          filter: contrast(1.5) brightness(1.05);
        }
        [data-pause-animations='true'] * {
          animation-play-state: paused !important;
          transition: none !important;
        }
      `}</style>

      {/* Floating button */}
      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? 'Close accessibility options' : 'Open accessibility options'}
        aria-expanded={open}
        className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        style={{ backgroundColor: '#0B2240', color: '#fff' }}
      >
        <Accessibility size={22} aria-hidden="true" />
      </button>

      {/* Panel */}
      {open && (
        <div
          role="dialog"
          aria-label="Accessibility options"
          aria-modal="false"
          className="fixed bottom-20 right-6 z-50 w-72 rounded-2xl shadow-2xl overflow-hidden"
          style={{ backgroundColor: '#fff', border: '1px solid #D0E4F4' }}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4" style={{ backgroundColor: '#0B2240' }}>
            <div className="flex items-center gap-2">
              <Accessibility size={16} className="text-white" aria-hidden="true" />
              <span className="text-sm font-bold text-white tracking-wide">Accessibility</span>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close accessibility panel"
              className="text-white opacity-70 hover:opacity-100 transition-opacity"
            >
              <X size={16} aria-hidden="true" />
            </button>
          </div>

          <div className="p-5 flex flex-col gap-5">

            {/* Font size */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Type size={15} aria-hidden="true" style={{ color: '#1663AF' }} />
                <span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#1A2535' }}>Text Size</span>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => update({ fontSize: Math.max(-1, prefs.fontSize - 1) })}
                  aria-label="Decrease text size"
                  disabled={prefs.fontSize <= -1}
                  className="w-8 h-8 rounded-lg flex items-center justify-center disabled:opacity-30 transition-colors"
                  style={{ backgroundColor: '#F4F8FC', border: '1px solid #D0E4F4' }}
                >
                  <Minus size={14} aria-hidden="true" />
                </button>
                <span className="flex-1 text-center text-sm font-semibold" style={{ color: '#1A2535' }}>
                  {prefs.fontSize === 0 ? 'Default' : prefs.fontSize > 0 ? `+${prefs.fontSize}` : prefs.fontSize}
                </span>
                <button
                  onClick={() => update({ fontSize: Math.min(3, prefs.fontSize + 1) })}
                  aria-label="Increase text size"
                  disabled={prefs.fontSize >= 3}
                  className="w-8 h-8 rounded-lg flex items-center justify-center disabled:opacity-30 transition-colors"
                  style={{ backgroundColor: '#F4F8FC', border: '1px solid #D0E4F4' }}
                >
                  <Plus size={14} aria-hidden="true" />
                </button>
              </div>
            </div>

            {/* High contrast */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Contrast size={15} aria-hidden="true" style={{ color: '#1663AF' }} />
                <span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#1A2535' }}>High Contrast</span>
              </div>
              <button
                onClick={() => update({ highContrast: !prefs.highContrast })}
                role="switch"
                aria-checked={prefs.highContrast}
                aria-label="Toggle high contrast"
                className="w-11 h-6 rounded-full transition-colors relative"
                style={{ backgroundColor: prefs.highContrast ? '#1A835A' : '#D0E4F4' }}
              >
                <span
                  className="absolute top-1 w-4 h-4 rounded-full bg-white transition-transform shadow"
                  style={{ left: prefs.highContrast ? '24px' : '4px' }}
                />
              </button>
            </div>

            {/* Pause animations */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-base" aria-hidden="true">⏸</span>
                <span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#1A2535' }}>Pause Animations</span>
              </div>
              <button
                onClick={() => update({ pauseAnimations: !prefs.pauseAnimations })}
                role="switch"
                aria-checked={prefs.pauseAnimations}
                aria-label="Toggle pause animations"
                className="w-11 h-6 rounded-full transition-colors relative"
                style={{ backgroundColor: prefs.pauseAnimations ? '#1A835A' : '#D0E4F4' }}
              >
                <span
                  className="absolute top-1 w-4 h-4 rounded-full bg-white transition-transform shadow"
                  style={{ left: prefs.pauseAnimations ? '24px' : '4px' }}
                />
              </button>
            </div>

            {/* Reset */}
            <button
              onClick={reset}
              className="w-full text-xs font-semibold uppercase tracking-widest py-2.5 rounded-lg transition-colors"
              style={{ backgroundColor: '#F4F8FC', color: '#4A5E72', border: '1px solid #D0E4F4' }}
            >
              Reset to Default
            </button>

          </div>
        </div>
      )}
    </>
  )
}

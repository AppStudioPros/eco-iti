'use client'

import { useState, useRef, useEffect } from 'react'

interface FaqItem { q: string; a: string }

function FaqItem({ faq, isOpen, onToggle, accentColor }: { faq: FaqItem; isOpen: boolean; onToggle: () => void; accentColor: string }) {
  const bodyRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    if (bodyRef.current) setHeight(isOpen ? bodyRef.current.scrollHeight : 0)
  }, [isOpen])

  return (
    <div style={{ borderTop: `1px solid ${accentColor}30` }}>
      <button onClick={onToggle} className="w-full flex items-center justify-between text-left py-5 gap-6 group">
        <span className="text-base font-semibold transition-colors duration-200" style={{ color: isOpen ? accentColor : '#1A2535' }}>
          {faq.q}
        </span>
        <span className="shrink-0 text-2xl leading-none transition-transform duration-300" style={{ color: accentColor, transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}>+</span>
      </button>
      <div style={{ height: `${height}px`, overflow: 'hidden', transition: 'height 0.3s cubic-bezier(0.16,1,0.3,1)' }}>
        <div ref={bodyRef} className="pb-5 pr-10">
          <p className="text-sm leading-relaxed" style={{ color: '#4A5E72' }}>{faq.a}</p>
        </div>
      </div>
    </div>
  )
}

export default function FaqAccordion({ items, accentColor = '#1A835A' }: { items: FaqItem[]; accentColor?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  return (
    <div style={{ borderBottom: `1px solid ${accentColor}30` }}>
      {items.map((faq, i) => (
        <FaqItem key={i} faq={faq} isOpen={openIndex === i} onToggle={() => setOpenIndex(openIndex === i ? null : i)} accentColor={accentColor} />
      ))}
    </div>
  )
}

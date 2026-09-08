'use client'

import { useState, useRef, useEffect } from 'react'

interface FaqItem { q: string; a: string }

function FaqItem({ faq, isOpen, onToggle }: { faq: FaqItem; isOpen: boolean; onToggle: () => void }) {
  const bodyRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    if (bodyRef.current) setHeight(isOpen ? bodyRef.current.scrollHeight : 0)
  }, [isOpen])

  return (
    <div style={{ borderTop: '1px solid rgba(26,131,90,0.2)' }}>
      <button onClick={onToggle} className="w-full flex items-center justify-between text-left py-5 gap-6 group">
        <span className="text-base font-semibold transition-colors duration-200" style={{ color: isOpen ? '#1A835A' : '#0A1A14' }}>
          {faq.q}
        </span>
        <span className="shrink-0 text-2xl leading-none transition-transform duration-300" style={{ color: '#1A835A', transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}>+</span>
      </button>
      <div style={{ height: `${height}px`, overflow: 'hidden', transition: 'height 0.3s cubic-bezier(0.16,1,0.3,1)' }}>
        <div ref={bodyRef} className="pb-5 pr-10">
          <p className="text-sm leading-relaxed" style={{ color: '#5A8070' }}>{faq.a}</p>
        </div>
      </div>
    </div>
  )
}

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  return (
    <div style={{ borderBottom: '1px solid rgba(26,131,90,0.2)' }}>
      {items.map((faq, i) => (
        <FaqItem key={i} faq={faq} isOpen={openIndex === i} onToggle={() => setOpenIndex(openIndex === i ? null : i)} />
      ))}
    </div>
  )
}

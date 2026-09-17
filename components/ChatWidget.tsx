'use client'

import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import { X, Send, ChevronDown } from 'lucide-react'
import ReactMarkdown from 'react-markdown'

// ── 4-Node Orb (ECO ITI colors: dark blue + green alternating nodes) ─────────

type Node = { x: number; y: number; vx: number; vy: number; baseR: number; pulsePhase: number; color: string }

const CENTER = 16
const INNER_RADIUS = 16
const NODE_COLORS = ['#0B2240', '#1A835A', '#0B2240', '#1A835A']

function initialNodes(): Node[] {
  return [
    { x: 6,  y: 10, vx: 5.8,  vy: -4.9, baseR: 2.8, pulsePhase: 0,   color: NODE_COLORS[0] },
    { x: 26, y: 8,  vx: -5.2, vy:  5.5, baseR: 3.0, pulsePhase: 0.4, color: NODE_COLORS[1] },
    { x: 24, y: 26, vx: -5.6, vy: -4.7, baseR: 2.6, pulsePhase: 0.8, color: NODE_COLORS[2] },
    { x: 8,  y: 24, vx:  5.0, vy:  4.8, baseR: 2.9, pulsePhase: 1.2, color: NODE_COLORS[3] },
  ]
}

function NodeOrb({ className }: { className?: string }) {
  const [nodes, setNodes] = useState<Node[]>(initialNodes)
  const rafRef = useRef<number | null>(null)
  const lastTsRef = useRef<number | null>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return

    const step = (ts: number) => {
      const last = lastTsRef.current ?? ts
      const dt = Math.min(0.05, (ts - last) / 1000)
      lastTsRef.current = ts

      setNodes(prev => prev.map(n => {
        let { x, y, vx, vy } = n
        x += vx * dt; y += vy * dt
        const dx = x - CENTER, dy = y - CENTER
        const dist = Math.sqrt(dx * dx + dy * dy)
        const maxDist = INNER_RADIUS - n.baseR
        if (dist > maxDist) {
          const nx = dx / dist, ny = dy / dist
          const dot = vx * nx + vy * ny
          vx -= 2 * dot * nx; vy -= 2 * dot * ny
          x = CENTER + nx * maxDist; y = CENTER + ny * maxDist
        }
        return { ...n, x, y, vx, vy, pulsePhase: (n.pulsePhase + dt / 1.6) % 1 }
      }))

      rafRef.current = window.requestAnimationFrame(step)
    }

    rafRef.current = window.requestAnimationFrame(step)
    return () => { if (rafRef.current != null) window.cancelAnimationFrame(rafRef.current) }
  }, [])

  const lines: [number, number][] = [[0,1],[1,2],[2,3],[3,0],[0,2],[1,3]]

  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      {lines.map(([a, b], i) => (
        <line key={i}
          x1={nodes[a].x} y1={nodes[a].y}
          x2={nodes[b].x} y2={nodes[b].y}
          stroke="rgba(11,34,64,0.35)"
          strokeWidth="0.9" strokeLinecap="round"
        />
      ))}
      {nodes.map((n, i) => {
        const sine = Math.sin(n.pulsePhase * Math.PI * 2)
        const r = n.baseR + sine * 0.7
        return (
          <g key={i}>
            <circle cx={n.x} cy={n.y} r={r * 2.2} fill={n.color} opacity={0.12} />
            <circle cx={n.x} cy={n.y} r={Math.max(1.4, r)} fill={n.color} opacity={0.85 + sine * 0.15} />
          </g>
        )
      })}
    </svg>
  )
}

// ── Types ────────────────────────────────────────────────────────────────────

type Message = { role: 'user' | 'assistant'; content: string }

const STARTERS = [
  "What does ECO ITI do?",
  "Tell me about CLAW™ Technology",
  "What is ECO Regenion™?",
  "How do I get in touch with the team?",
]

// ── Widget ───────────────────────────────────────────────────────────────────

export default function ChatWidget() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [chatEnded, setChatEnded] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  if (pathname?.startsWith('/admin')) return null

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 100)
  }, [open])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])

  function clearChat() { setMessages([]); setChatEnded(false) }

  async function sendMessage(text: string) {
    if (!text.trim() || loading || chatEnded) return
    const userMsg: Message = { role: 'user', content: text.trim() }
    const next = [...messages, userMsg]
    setMessages([...next, { role: 'assistant', content: '' }])
    setInput('')
    setTimeout(() => inputRef.current?.focus(), 50)
    setLoading(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: next }),
      })

      if (!res.ok || !res.body) {
        setMessages(prev => { const u = [...prev]; u[u.length-1] = { role: 'assistant', content: 'Something went wrong. Please [email us](mailto:info@ecoiti.com) or [call us](tel:18774770021).' }; return u })
        setLoading(false)
    setTimeout(() => inputRef.current?.focus(), 10); return
      }

      const reader = res.body.getReader()
      const decoder = new TextDecoder()
      let fullText = ''

      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        const lines = decoder.decode(value, { stream: true }).split('\n')
        for (const line of lines) {
          if (!line.startsWith('data: ')) continue
          const raw = line.slice(6)
          if (raw === '[DONE]') break
          try {
            const parsed = JSON.parse(raw)
            if (parsed.text) {
              fullText += parsed.text
              const cleaned = fullText.replace('[CHAT_ENDED]', '').trim()
              setMessages(prev => { const u = [...prev]; u[u.length-1] = { role: 'assistant', content: cleaned }; return u })
              if (fullText.includes('[CHAT_ENDED]')) setChatEnded(true)
            }
          } catch { /* skip */ }
        }
      }
    } catch {
      setMessages(prev => { const u = [...prev]; u[u.length-1] = { role: 'assistant', content: 'Something went wrong. Please [email us](mailto:info@ecoiti.com) or [call us](tel:18774770021).' }; return u })
    }
    setLoading(false)
    setTimeout(() => inputRef.current?.focus(), 10)
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="flex flex-col rounded-2xl shadow-2xl overflow-hidden"
          style={{ width: '340px', height: '500px', backgroundColor: '#fff', border: '1px solid #e2e8f0' }}>

          {/* Header */}
          <div className="shrink-0" style={{ backgroundColor: '#0B2240' }}>
            <div className="flex items-center justify-between px-4 py-3">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}>
                  <NodeOrb className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-white text-sm font-semibold leading-none">ECO ITI Assistant</p>
                  <p className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.5)' }}>Ask us anything</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {messages.length > 0 && (
                  <button onClick={clearChat} className="text-xs px-2.5 py-1 rounded hover:bg-white/10 transition-colors" style={{ color: 'rgba(255,255,255,0.5)' }}>
                    Clear
                  </button>
                )}
                <button onClick={() => setOpen(false)} className="p-1 rounded hover:bg-white/10 transition-colors">
                  <ChevronDown size={18} color="rgba(255,255,255,0.7)" />
                </button>
              </div>
            </div>
            {/* Contact bar */}
            <div className="flex border-t" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
              <a href="tel:18774770021"
                className="flex-1 flex items-center justify-center gap-1.5 py-2 text-xs font-semibold transition-opacity hover:opacity-80 border-r"
                style={{ color: '#22C47A', borderColor: 'rgba(255,255,255,0.1)' }}>
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 10.5 19.79 19.79 0 0 1 1.61 2 2 2 0 0 1 3.6 0h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 7.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                Call Us
              </a>
              <a href="mailto:info@ecoiti.com"
                className="flex-1 flex items-center justify-center gap-1.5 py-2 text-xs font-semibold transition-opacity hover:opacity-80"
                style={{ color: '#22C47A' }}>
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                Email Us
              </a>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3" style={{ backgroundColor: '#f8fafc' }}>
            {messages.length === 0 && (
              <div>
                <p className="text-sm mb-4 leading-relaxed" style={{ color: '#4A5E72' }}>
                  Hey! I can answer questions about ECO Integrated Technologies, our cleantech platforms, and how to get in touch. What would you like to know?
                </p>
                <div className="flex flex-col gap-2">
                  {STARTERS.map(s => (
                    <button key={s} onClick={() => sendMessage(s)}
                      className="text-left text-xs px-3 py-2.5 rounded-lg border transition-colors hover:bg-blue-50"
                      style={{ borderColor: '#e2e8f0', color: '#0B2240' }}>
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {messages.map((m, i) => (
              <div key={i} className={`flex flex-col ${m.role === 'user' ? 'items-end' : 'items-start'}`}>
                <div className="px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed max-w-[85%]"
                  style={m.role === 'user'
                    ? { backgroundColor: '#0B2240', color: '#fff', borderBottomRightRadius: '4px' }
                    : { backgroundColor: '#fff', color: '#1A2535', border: '1px solid #e2e8f0', borderBottomLeftRadius: '4px' }
                  }>
                  {m.role === 'user' ? m.content : (
                    <ReactMarkdown components={{
                      p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p>,
                      strong: ({ children }) => <strong className="font-semibold" style={{ color: '#0B2240' }}>{children}</strong>,
                      ul: ({ children }) => <ul className="mt-1 mb-2 space-y-1 pl-3">{children}</ul>,
                      li: ({ children }) => <li className="flex gap-1.5"><span style={{ color: '#1A835A' }}>•</span><span>{children}</span></li>,
                      a: ({ children, href }) => <a href={href} className="underline font-medium" style={{ color: '#1663AF' }}>{children}</a>,
                    }}>
                      {m.content}
                    </ReactMarkdown>
                  )}
                </div>
                {m.role === 'assistant' && i === messages.length - 1 && !loading && (
                  <a href="/contact"
                    className="mt-2 text-xs font-semibold px-3 py-1.5 rounded-lg transition-opacity hover:opacity-90"
                    style={{ backgroundColor: '#1A835A', color: '#fff' }}>
                    Contact ECO ITI →
                  </a>
                )}
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="px-4 py-3 rounded-2xl" style={{ backgroundColor: '#fff', border: '1px solid #e2e8f0', borderBottomLeftRadius: '4px' }}>
                  <div className="flex gap-1 items-center">
                    {[0,150,300].map(d => (
                      <span key={d} className="w-1.5 h-1.5 rounded-full animate-bounce" style={{ backgroundColor: '#0B2240', animationDelay: `${d}ms` }} />
                    ))}
                  </div>
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="px-3 py-3 border-t shrink-0" style={{ borderColor: '#e2e8f0', backgroundColor: '#fff' }}>
            {chatEnded ? (
              <div className="text-center">
                <p className="text-xs mb-2" style={{ color: '#aaa' }}>This chat session has ended.</p>
                <button onClick={clearChat} className="text-xs font-semibold px-4 py-2 rounded-lg text-white" style={{ backgroundColor: '#0B2240' }}>
                  Start a New Chat
                </button>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); sendMessage(input) }} className="flex items-center gap-2">
                <input ref={inputRef} type="text" value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type a message..."
                  disabled={loading}
                  className="flex-1 text-sm px-3 py-2.5 rounded-lg border outline-none disabled:opacity-50"
                  style={{ borderColor: '#e2e8f0', color: '#1A2535' }}
                />
                <button type="submit" disabled={!input.trim() || loading}
                  className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 disabled:opacity-40 transition-opacity"
                  style={{ backgroundColor: '#0B2240' }}>
                  <Send size={14} color="#fff" />
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Floating orb button — white with dark blue ring */}
      <button onClick={() => setOpen(o => !o)}
        className="relative w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-105 active:scale-95"
        style={{ backgroundColor: '#fff', border: '1px solid #0B2240' }}
        aria-label="Chat with ECO ITI">
        {open ? (
          <X size={22} color="#0B2240" />
        ) : (
          <NodeOrb className="w-9 h-9" />
        )}
        {!open && (
          <span className="absolute inset-0 rounded-full" style={{ animation: 'eco-glow 3s ease-in-out infinite' }} />
        )}
      </button>
    </div>
  )
}

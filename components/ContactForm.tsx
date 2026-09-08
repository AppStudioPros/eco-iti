'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', phone: '', interest: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="text-center py-16">
        <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: 'rgba(26,131,90,0.12)' }}>
          <span className="text-3xl">✓</span>
        </div>
        <p className="text-xl font-bold mb-2" style={{ color: '#0A1A14' }}>Message Received</p>
        <p style={{ color: '#5A8070' }}>Thank you for reaching out. Our team will be in touch shortly.</p>
      </div>
    )
  }

  const inputClass = "w-full px-4 py-3 text-sm rounded-lg border focus:outline-none focus:border-eco-green transition-colors"
  const inputStyle = { borderColor: 'rgba(26,131,90,0.25)', backgroundColor: '#F3F7F5', color: '#0A1A14' }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-widest mb-1.5" style={{ color: '#5A8070' }}>First Name *</label>
          <input required name="firstName" value={formData.firstName} onChange={handleChange} className={inputClass} style={inputStyle} placeholder="Jane" />
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-widest mb-1.5" style={{ color: '#5A8070' }}>Last Name *</label>
          <input required name="lastName" value={formData.lastName} onChange={handleChange} className={inputClass} style={inputStyle} placeholder="Smith" />
        </div>
      </div>
      <div>
        <label className="block text-xs font-semibold uppercase tracking-widest mb-1.5" style={{ color: '#5A8070' }}>Email *</label>
        <input required type="email" name="email" value={formData.email} onChange={handleChange} className={inputClass} style={inputStyle} placeholder="jane@company.com" />
      </div>
      <div>
        <label className="block text-xs font-semibold uppercase tracking-widest mb-1.5" style={{ color: '#5A8070' }}>Phone</label>
        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className={inputClass} style={inputStyle} placeholder="(555) 000-0000" />
      </div>
      <div>
        <label className="block text-xs font-semibold uppercase tracking-widest mb-1.5" style={{ color: '#5A8070' }}>I&apos;m Interested In</label>
        <select name="interest" value={formData.interest} onChange={handleChange} className={inputClass} style={inputStyle}>
          <option value="">Select a topic</option>
          <option value="regenion">ECO Regenion™ — Waste-to-Energy</option>
          <option value="h2o">ECO H2O Recover™ — CLAW Technology</option>
          <option value="investor">Investor Relations</option>
          <option value="partnership">Partnership Opportunities</option>
          <option value="general">General Inquiry</option>
        </select>
      </div>
      <div>
        <label className="block text-xs font-semibold uppercase tracking-widest mb-1.5" style={{ color: '#5A8070' }}>Message *</label>
        <textarea required name="message" value={formData.message} onChange={handleChange} rows={5} className={inputClass} style={inputStyle} placeholder="Tell us about your project or question..." />
      </div>
      <button
        type="submit"
        className="btn-eco w-full uppercase tracking-widest text-sm font-semibold py-4 rounded-lg"
        style={{ backgroundColor: '#1A835A', color: '#fff' }}
      >
        Send Message
      </button>
    </form>
  )
}

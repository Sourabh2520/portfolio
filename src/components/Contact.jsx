import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiMail, FiGithub, FiLinkedin, FiMapPin, FiSend } from 'react-icons/fi'
import emailjs from '@emailjs/browser'
import toast from 'react-hot-toast'

// ============================================================
// ✅ EMAILJS SETUP - Yahan apni keys daalo
// Step 1: https://www.emailjs.com par FREE account banao
// Step 2: Email Service connect karo (Gmail)
// Step 3: Template banao
// Step 4: Neeche teen values replace karo
// ============================================================
const EMAILJS_SERVICE_ID  = 'service_hsjrxfq'   // e.g. "service_abc123"
const EMAILJS_TEMPLATE_ID = 'template_y43vwqd'  // e.g. "template_xyz789"
const EMAILJS_PUBLIC_KEY  = 'Z2QWe4UCJFVIs15Uo'   // e.g. "abc123XYZ"
// ============================================================

const contactInfo = [
  { icon: FiMail,     label: 'Email',    value: 'rajputsourabh2505@gmail.com', href: 'mailto:rajputsourabh2505@gmail.com', color: '#00d4ff' },
  { icon: FiGithub,   label: 'GitHub',   value: 'github.com/Sourabh2520',      href: 'https://github.com/Sourabh2520',      color: '#00ff88' },
  { icon: FiLinkedin, label: 'LinkedIn', value: 'linkedin.com/in/Sourabh2505', href: 'https://linkedin.com/in/Sourabh2505', color: '#7c3aed' },
  { icon: FiMapPin,   label: 'Location', value: 'Indore, Madhya Pradesh, India', href: null,                               color: '#ff6b35' },
]

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const formRef = useRef()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitting, setSubmitting] = useState(false)

  const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error('Please fill in all fields.')
      return
    }

    // Check if EmailJS is configured
    if (EMAILJS_SERVICE_ID === 'YOUR_SERVICE_ID') {
      toast.error('EmailJS not configured yet! Read the SETUP_GUIDE.md')
      return
    }

    setSubmitting(true)
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      )
      toast.success('✅ Message sent! I will reply soon.')
      setForm({ name: '', email: '', message: '' })
    } catch (err) {
      console.error('EmailJS error:', err)
      toast.error('Failed to send. Please email directly: rajputsourabh2505@gmail.com')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="contact" className="relative py-28 overflow-hidden">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-48 bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6" ref={ref}>
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="mb-16">
          <p className="section-subtitle"><span className="text-cyan-400/40 mr-2">07.</span> Get In Touch</p>
          <div className="flex items-end gap-6">
            <h2 className="section-title text-white">Contact <span className="gradient-text">Me</span></h2>
            <div className="hidden md:block h-px flex-1 max-w-xs bg-gradient-to-r from-slate-700 to-transparent mb-4" />
          </div>
          <p className="text-slate-500 max-w-lg">Have an opportunity or project in mind? Send me a message — it will go directly to my email inbox.</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Contact info cards */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.2, duration: 0.7 }} className="space-y-4">
            {contactInfo.map((item, i) => (
              <motion.div key={item.label} initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.3 + i * 0.1 }}>
                {item.href ? (
                  <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 glass rounded-sm border border-slate-800 hover:border-opacity-30 transition-all duration-300 group"
                    style={{ '--c': item.color }}>
                    <div className="w-11 h-11 rounded-sm flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                      style={{ background: item.color + '15', border: `1px solid ${item.color}33` }}>
                      <item.icon style={{ color: item.color }} className="text-lg" />
                    </div>
                    <div>
                      <p className="font-mono text-xs text-slate-600 uppercase tracking-wider">{item.label}</p>
                      <p className="text-sm mt-0.5 group-hover:text-white transition-colors" style={{ color: item.color + 'cc' }}>{item.value}</p>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-center gap-4 p-4 glass rounded-sm border border-slate-800">
                    <div className="w-11 h-11 rounded-sm flex items-center justify-center flex-shrink-0"
                      style={{ background: item.color + '15', border: `1px solid ${item.color}33` }}>
                      <item.icon style={{ color: item.color }} className="text-lg" />
                    </div>
                    <div>
                      <p className="font-mono text-xs text-slate-600 uppercase tracking-wider">{item.label}</p>
                      <p className="text-slate-400 text-sm mt-0.5">{item.value}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Right: Contact form */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.3, duration: 0.7 }}>
            <div className="glass rounded-sm border border-slate-800 overflow-hidden">
              {/* Terminal header */}
              <div className="flex items-center gap-2 px-5 py-3 border-b border-slate-800 bg-slate-900/50">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/70" />
                <span className="font-mono text-xs text-slate-500 ml-2">send_message.js → EmailJS</span>
              </div>

              {/* form ref used by emailjs.sendForm() */}
              <form ref={formRef} onSubmit={handleSubmit} className="p-6 space-y-5">
                <div>
                  <label className="block font-mono text-xs text-slate-500 tracking-widest uppercase mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"           /* Must match EmailJS template variable {{name}} */
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="w-full bg-slate-900/50 border border-slate-700 rounded-sm px-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-400/60 focus:ring-1 focus:ring-cyan-400/20 transition-all duration-300 font-mono"
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs text-slate-500 tracking-widest uppercase mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"          /* Must match EmailJS template variable {{email}} */
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full bg-slate-900/50 border border-slate-700 rounded-sm px-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-400/60 focus:ring-1 focus:ring-cyan-400/20 transition-all duration-300 font-mono"
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs text-slate-500 tracking-widest uppercase mb-2">Message *</label>
                  <textarea
                    name="message"        /* Must match EmailJS template variable {{message}} */
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell me about your project or opportunity..."
                    className="w-full bg-slate-900/50 border border-slate-700 rounded-sm px-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-400/60 focus:ring-1 focus:ring-cyan-400/20 transition-all duration-300 font-mono resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={submitting}
                  className="w-full cyber-btn-filled flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  whileTap={{ scale: 0.98 }}
                >
                  {submitting ? (
                    <><div className="w-4 h-4 border border-cyan-400 border-t-transparent rounded-full animate-spin" /> Sending...</>
                  ) : (
                    <><FiSend /> Send Message</>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

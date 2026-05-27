import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMenu, FiX, FiDownload } from 'react-icons/fi'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('#home')
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      const sections = NAV_LINKS.map(l => l.href.slice(1))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive('#' + sections[i])
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href) => {
    setMobileOpen(false)
    const el = document.getElementById(href.slice(1))
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'py-3 bg-cyber-black/80 backdrop-blur-xl border-b border-cyan-400/10' : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <motion.button onClick={() => handleNav('#home')} className="flex items-center gap-2 group" whileHover={{ scale: 1.02 }}>
            <div className="w-9 h-9 relative">
              <div className="absolute inset-0 border border-cyan-400 rotate-45 group-hover:rotate-[225deg] transition-transform duration-700" />
              <div className="absolute inset-1.5 bg-cyan-400/10 rotate-12" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-display font-black text-sm gradient-text">SR</span>
              </div>
            </div>
            <span className="font-display font-bold text-white hidden sm:block">Sourabh<span className="gradient-text">.</span></span>
          </motion.button>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNav(link.href)}
                  className={`relative px-3 py-2 font-mono text-xs tracking-wider uppercase transition-all duration-300 ${
                    active === link.href ? 'text-cyan-400' : 'text-slate-500 hover:text-slate-200'
                  }`}
                >
                  {active === link.href && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute inset-0 bg-cyan-400/8 border-b border-cyan-400/60"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <a href="https://github.com/Sourabh2520" target="_blank" rel="noopener noreferrer"
              className="hidden sm:flex w-9 h-9 items-center justify-center text-slate-500 hover:text-cyan-400 transition-colors border border-slate-800 hover:border-cyan-400/40 rounded-sm">
              <FiGithub className="text-lg" />
            </a>
            <a href="https://linkedin.com/in/Sourabh2505" target="_blank" rel="noopener noreferrer"
              className="hidden sm:flex w-9 h-9 items-center justify-center text-slate-500 hover:text-cyan-400 transition-colors border border-slate-800 hover:border-cyan-400/40 rounded-sm">
              <FiLinkedin className="text-lg" />
            </a>
            {/* Resume download - direct file from public folder */}
            <a href="/Sourabh_Rajput_Resume.pdf" download="Sourabh_Rajput_Resume.pdf"
              className="hidden sm:flex items-center gap-2 cyber-btn text-xs">
              <FiDownload className="text-sm" /> Resume
            </a>
            <button onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden w-9 h-9 flex items-center justify-center text-slate-400 hover:text-cyan-400 transition-colors">
              {mobileOpen ? <FiX className="text-xl" /> : <FiMenu className="text-xl" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-[57px] z-40 bg-cyber-black/95 backdrop-blur-xl border-b border-cyan-400/10 lg:hidden"
          >
            <ul className="flex flex-col py-4">
              {NAV_LINKS.map((link, i) => (
                <motion.li key={link.href} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}>
                  <button onClick={() => handleNav(link.href)}
                    className={`w-full text-left px-6 py-3 font-mono text-sm tracking-wider uppercase transition-colors ${active === link.href ? 'text-cyan-400' : 'text-slate-500'}`}>
                    <span className="text-cyan-400/40 mr-2">0{i + 1}.</span>{link.label}
                  </button>
                </motion.li>
              ))}
              <div className="flex items-center gap-4 px-6 pt-4 border-t border-slate-800 mt-2">
                <a href="https://github.com/Sourabh2520" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 text-sm font-mono transition-colors">
                  <FiGithub /> GitHub
                </a>
                <a href="/Sourabh_Rajput_Resume.pdf" download="Sourabh_Rajput_Resume.pdf"
                  className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 text-sm font-mono transition-colors">
                  <FiDownload /> Resume
                </a>
              </div>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

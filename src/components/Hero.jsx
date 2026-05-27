import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiArrowRight } from 'react-icons/fi'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }
})

export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute top-24 left-6 w-24 h-24 border-l-2 border-t-2 border-cyan-400/20" />
      <div className="absolute bottom-16 right-6 w-24 h-24 border-r-2 border-b-2 border-emerald-400/20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-6">

          {/* Left: Text */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div {...fadeUp(0.1)} className="inline-flex items-center gap-2 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span className="font-mono text-xs tracking-widest text-emerald-400 uppercase">Available for opportunities</span>
            </motion.div>

            <motion.p {...fadeUp(0.2)} className="font-mono text-cyan-400 text-sm tracking-[0.3em] uppercase mb-3">Hello, I'm</motion.p>

            <motion.h1 {...fadeUp(0.3)} className="font-display font-black text-5xl sm:text-6xl lg:text-7xl text-white mb-4 leading-none">
              Sourabh<br /><span className="gradient-text">Rajput</span>
            </motion.h1>

            <motion.div {...fadeUp(0.4)} className="font-mono text-lg sm:text-xl text-slate-400 mb-6 h-8">
              <span className="text-cyan-400/60">{'> '}</span>
              <TypeAnimation
                sequence={['Java Backend Developer', 2000, 'Spring Boot Developer', 2000, 'REST API Developer', 2000, 'Backend Engineer', 2000]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-slate-200"
              />
              <span className="cursor-blink" />
            </motion.div>

            <motion.p {...fadeUp(0.5)} className="text-slate-400 text-base leading-relaxed max-w-lg mx-auto lg:mx-0 mb-8">
              Passionate backend developer focused on building scalable Java applications using{' '}
              <span className="text-cyan-400">Spring Boot</span>,{' '}
              <span className="text-emerald-400">REST APIs</span>,{' '}
              <span className="text-cyan-400">MySQL</span>, and secure authentication systems.
            </motion.p>

            <motion.div {...fadeUp(0.6)} className="flex flex-wrap gap-3 justify-center lg:justify-start mb-10">
              <button onClick={() => scrollTo('projects')} className="cyber-btn-filled flex items-center gap-2">
                View Projects <FiArrowRight />
              </button>
              {/* Resume download - directly from public folder, no backend needed */}
              <a href="/Sourabh_Rajput_Resume.pdf" download="Sourabh_Rajput_Resume.pdf" className="cyber-btn flex items-center gap-2">
                <FiDownload /> Resume
              </a>
              <button onClick={() => scrollTo('contact')}
                className="px-6 py-3 font-mono text-sm tracking-widest uppercase text-slate-400 border border-slate-700 hover:border-slate-500 hover:text-slate-200 transition-all duration-300"
                style={{ clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))' }}>
                Contact Me
              </button>
            </motion.div>

            <motion.div {...fadeUp(0.7)} className="flex items-center gap-4 justify-center lg:justify-start">
              <span className="font-mono text-xs text-slate-600 tracking-widest">FIND ME ON</span>
              <div className="h-px w-8 bg-slate-700" />
              {[
                { Icon: FiGithub, href: 'https://github.com/Sourabh2520', label: 'GitHub' },
                { Icon: FiLinkedin, href: 'https://linkedin.com/in/Sourabh2505', label: 'LinkedIn' },
                { Icon: FiMail, href: 'mailto:rajputsourabh2505@gmail.com', label: 'Email' },
              ].map(({ Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 glass flex items-center justify-center text-slate-500 hover:text-cyan-400 border border-slate-800 hover:border-cyan-400/30 transition-all duration-300 rounded-sm hover:shadow-[0_0_20px_#00d4ff22]"
                  title={label}>
                  <Icon className="text-base" />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right: Profile image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.9, ease: 'easeOut' }}
            className="flex-shrink-0"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 border border-cyan-400/20 rounded-full animate-spin" style={{ animationDuration: '20s' }} />
              <div className="absolute inset-4 border border-emerald-400/15 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
              <div className="absolute inset-8 border border-violet-400/10 rounded-full animate-spin" style={{ animationDuration: '25s' }} />
              <div className="absolute inset-0 rounded-full bg-cyan-400/5 blur-2xl animate-pulse-slow" />

              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-10 rounded-full overflow-hidden border-2 border-cyan-400/40"
                style={{ boxShadow: '0 0 40px #00d4ff22, 0 0 80px #00d4ff11' }}
              >
                {/*
                  ✅ PROFILE IMAGE:
                  1. Place your photo in: public/profile.jpg
                  2. Comment out the div below
                  3. Uncomment the img tag
                */}
               
			   <img src="/profile.png" alt="Sourabh Rajput" className="w-full h-full object-cover" />
			   
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1 }}
                className="absolute top-4 -right-2 glass-strong px-3 py-1.5 rounded-sm border border-cyan-400/20">
                <p className="font-mono text-xs text-cyan-400 tracking-wider">Spring Boot</p>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.2 }}
                className="absolute bottom-8 -left-4 glass-strong px-3 py-1.5 rounded-sm border border-emerald-400/20">
                <p className="font-mono text-xs text-emerald-400 tracking-wider">REST APIs</p>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.4 }}
                className="absolute -bottom-2 right-8 glass-strong px-3 py-1.5 rounded-sm border border-violet-400/20">
                <p className="font-mono text-xs text-violet-400 tracking-wider">Java</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="font-mono text-xs text-slate-600 tracking-widest">SCROLL</span>
          <div className="w-px h-12 bg-gradient-to-b from-slate-600 to-transparent relative overflow-hidden">
            <motion.div className="absolute top-0 w-full h-4 bg-gradient-to-b from-cyan-400 to-transparent"
              animate={{ y: [0, 48] }} transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }} />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

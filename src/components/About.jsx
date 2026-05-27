import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiCode, FiServer, FiDatabase, FiShield } from 'react-icons/fi'

const cards = [
  {
    icon: FiCode,
    title: 'Backend Development',
    desc: 'Building scalable, maintainable server-side applications with Java and Spring Boot using clean architecture principles.',
    color: '#00d4ff',
  },
  {
    icon: FiServer,
    title: 'REST API Design',
    desc: 'Designing and implementing RESTful APIs with proper HTTP semantics, validation, and comprehensive error handling.',
    color: '#00ff88',
  },
  {
    icon: FiDatabase,
    title: 'Database Management',
    desc: 'Designing relational schemas, writing optimized queries, and integrating MySQL with Spring Data JPA / Hibernate.',
    color: '#7c3aed',
  },
  {
    icon: FiShield,
    title: 'Authentication & Security',
    desc: 'Implementing JWT-based authentication, role-based authorization, and Spring Security configurations for secure APIs.',
    color: '#ff6b35',
  },
]

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="about" className="relative py-28 overflow-hidden">
      {/* Side decoration */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-48 bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="section-subtitle">
            <span className="text-cyan-400/40 mr-2">01.</span> Who I Am
          </p>
          <div className="flex items-end gap-6">
            <h2 className="section-title text-white">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="hidden md:block h-px flex-1 max-w-xs bg-gradient-to-r from-slate-700 to-transparent mb-4" />
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Bio text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            {/* Terminal-style bio card */}
            <div className="glass rounded-sm border border-slate-800 overflow-hidden">
              {/* Terminal header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-800 bg-slate-900/50">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/70" />
                <span className="font-mono text-xs text-slate-500 ml-2">about.java</span>
              </div>

              <div className="p-6 space-y-4">
                <div className="font-mono text-sm space-y-1">
                  <p className="text-slate-500">// About Sourabh Rajput</p>
                  <p>
                    <span className="text-violet-400">public class</span>{' '}
                    <span className="text-cyan-400">Developer</span>{' '}
                    <span className="text-white">{'{'}</span>
                  </p>
                </div>

                <p className="text-slate-300 leading-relaxed pl-4 border-l-2 border-cyan-400/30 text-sm">
                  Skilled Java backend developer with hands-on experience in{' '}
                  <span className="text-cyan-400">Spring Boot</span>,{' '}
                  <span className="text-emerald-400">REST APIs</span>,{' '}
                  <span className="text-violet-400">JWT authentication</span>, role-based authorization,{' '}
                  <span className="text-cyan-400">MySQL</span>, and backend architecture design.
                </p>

                <p className="text-slate-300 leading-relaxed pl-4 border-l-2 border-emerald-400/30 text-sm">
                  Strong understanding of{' '}
                  <span className="text-emerald-400">Object-Oriented Programming</span>,{' '}
                  <span className="text-cyan-400">Data Structures</span>,{' '}
                  <span className="text-violet-400">Exception Handling</span>, and scalable application development.
                </p>

                <div className="font-mono text-sm">
                  <p className="text-white">{'}'}</p>
                </div>
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              {[
                { label: 'Projects', value: '5+' },
                { label: 'CGPA', value: '8.2' },
                { label: 'Year', value: '2026' },
              ].map(({ label, value }) => (
                <div key={label} className="glass-strong rounded-sm p-4 text-center border border-cyan-400/10">
                  <p className="font-display font-bold text-2xl gradient-text">{value}</p>
                  <p className="font-mono text-xs text-slate-500 tracking-widest uppercase mt-1">{label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {cards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
                className="glass rounded-sm p-5 border border-slate-800 group hover:border-opacity-40 transition-all duration-300"
                style={{ '--card-color': card.color }}
                whileHover={{
                  borderColor: card.color + '33',
                  boxShadow: `0 0 30px ${card.color}11`,
                }}
              >
                <div
                  className="w-10 h-10 rounded-sm flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                  style={{ background: card.color + '15', border: `1px solid ${card.color}33` }}
                >
                  <card.icon style={{ color: card.color }} className="text-lg" />
                </div>
                <h3 className="font-display font-semibold text-white text-sm mb-2">{card.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

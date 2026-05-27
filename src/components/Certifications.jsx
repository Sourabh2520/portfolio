import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiAward, FiExternalLink } from 'react-icons/fi'

const certifications = [
  {
    title: 'Introduction to Java',
    issuer: 'Online Certification',
    desc: 'Foundational Java programming concepts including OOP, data types, control flow, and core Java APIs.',
    color: '#00d4ff',
    year: '2023',
  },
  {
    title: 'Spring Boot & REST API Development',
    issuer: 'Backend Development Course',
    desc: 'Building production-ready Spring Boot applications with REST APIs, dependency injection, and layered architecture.',
    color: '#00ff88',
    year: '2024',
  },
  {
    title: 'Backend Development Practice Projects',
    issuer: 'Self-directed Learning',
    desc: 'Hands-on project-based certification covering JWT security, MySQL integration, and full backend project deployment.',
    color: '#7c3aed',
    year: '2024',
  },
]

export default function Certifications() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="certifications" className="relative py-28 overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-48 bg-gradient-to-b from-transparent via-violet-400/30 to-transparent" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="section-subtitle">
            <span className="text-cyan-400/40 mr-2">06.</span> Credentials
          </p>
          <div className="flex items-end gap-6">
            <h2 className="section-title text-white">
              My <span className="gradient-text">Certifications</span>
            </h2>
            <div className="hidden md:block h-px flex-1 max-w-xs bg-gradient-to-r from-slate-700 to-transparent mb-4" />
          </div>
        </motion.div>

        <div className="space-y-5">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.7 }}
              className="glass rounded-sm border border-slate-800 p-6 flex flex-col sm:flex-row gap-5 group transition-all duration-300"
              whileHover={{ borderColor: cert.color + '33', boxShadow: `0 0 30px ${cert.color}11` }}
            >
              {/* Icon */}
              <div
                className="w-14 h-14 rounded-sm flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                style={{ background: cert.color + '15', border: `1px solid ${cert.color}33` }}
              >
                <FiAward style={{ color: cert.color }} className="text-2xl" />
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                  <div>
                    <h3 className="font-display font-semibold text-white">{cert.title}</h3>
                    <p className="font-mono text-xs text-slate-500 mt-0.5">{cert.issuer}</p>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <span
                      className="px-2 py-0.5 font-mono text-xs rounded-sm"
                      style={{ background: cert.color + '15', color: cert.color, border: `1px solid ${cert.color}33` }}
                    >
                      {cert.year}
                    </span>
                    <a
                      href="#"
                      className="w-7 h-7 flex items-center justify-center border border-slate-700 text-slate-600 hover:text-slate-300 hover:border-slate-500 transition-all rounded-sm"
                    >
                      <FiExternalLink className="text-xs" />
                    </a>
                  </div>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">{cert.desc}</p>
              </div>

              {/* Left accent bar */}
              <div
                className="hidden sm:block absolute left-0 top-0 bottom-0 w-0.5 rounded-l-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: cert.color }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

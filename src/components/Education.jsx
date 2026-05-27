import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiMapPin, FiCalendar, FiAward } from 'react-icons/fi'

const education = [
  {
    institution: 'Sage University',
    degree: 'B.Tech — Computer Science & Engineering',
    score: 'CGPA: 8.2',
    year: '2022 – 2026',
    location: 'Indore, Madhya Pradesh',
    color: '#00d4ff',
    current: true,
  },
  {
    institution: 'Ceyone Ray International School',
    degree: 'Class 12th — Higher Secondary',
    score: '67%',
    year: '2022',
    location: 'Madhya Pradesh',
    color: '#00ff88',
    current: false,
  },
  {
    institution: "St. Jude's Co-Ed School",
    degree: 'Class 10th — Secondary Education',
    score: '91%',
    year: '2019',
    location: 'Madhya Pradesh',
    color: '#7c3aed',
    current: false,
  },
]

export default function Education() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="education" className="relative py-28 overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-48 bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="section-subtitle">
            <span className="text-cyan-400/40 mr-2">04.</span> Academic Journey
          </p>
          <div className="flex items-end gap-6">
            <h2 className="section-title text-white">
              My <span className="gradient-text">Education</span>
            </h2>
            <div className="hidden md:block h-px flex-1 max-w-xs bg-gradient-to-r from-slate-700 to-transparent mb-4" />
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400/30 via-slate-700 to-transparent md:-translate-x-1/2" />

          <div className="space-y-10">
            {education.map((edu, i) => (
              <motion.div
                key={edu.institution}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.18, duration: 0.7 }}
                className={`relative flex items-start gap-6 md:gap-0 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 z-10 mt-1">
                  <div
                    className="w-4 h-4 rounded-full border-2 border-cyber-black"
                    style={{
                      background: edu.color,
                      boxShadow: `0 0 16px ${edu.color}`,
                    }}
                  />
                  {edu.current && (
                    <div
                      className="absolute inset-0 rounded-full animate-ping"
                      style={{ background: edu.color + '44' }}
                    />
                  )}
                </div>

                {/* Content card */}
                <div className={`ml-14 md:ml-0 md:w-[45%] ${i % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'}`}>
                  <motion.div
                    className="glass rounded-sm border border-slate-800 p-6 transition-all duration-300 group"
                    whileHover={{ borderColor: edu.color + '33', boxShadow: `0 0 30px ${edu.color}11` }}
                  >
                    {/* Top accent */}
                    <div className="h-px w-full mb-4" style={{ background: `linear-gradient(90deg, ${edu.color}, transparent)` }} />

                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div>
                        <h3 className="font-display font-bold text-white text-lg leading-tight">{edu.institution}</h3>
                        <p className="text-slate-400 text-sm mt-1">{edu.degree}</p>
                      </div>
                      {edu.current && (
                        <span
                          className="flex-shrink-0 px-2 py-0.5 font-mono text-xs rounded-sm"
                          style={{ background: edu.color + '20', color: edu.color, border: `1px solid ${edu.color}44` }}
                        >
                          Current
                        </span>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-4 mt-4">
                      <div className="flex items-center gap-1.5 text-xs text-slate-500">
                        <FiAward style={{ color: edu.color }} />
                        <span className="font-mono" style={{ color: edu.color }}>{edu.score}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-slate-500">
                        <FiCalendar className="text-slate-600" />
                        <span>{edu.year}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-slate-500">
                        <FiMapPin className="text-slate-600" />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

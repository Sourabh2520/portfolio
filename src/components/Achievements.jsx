import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiZap, FiCode, FiCloud, FiGlobe } from 'react-icons/fi'

const achievements = [
  {
    icon: FiCode,
    title: 'Multiple Backend Projects',
    desc: 'Built multiple production-grade backend systems using Java and Spring Boot covering real-world use cases like student management and gate pass workflows.',
    color: '#00d4ff',
    tag: 'Development',
  },
  {
    icon: FiZap,
    title: 'Strong DSA Foundation',
    desc: 'Solid understanding of Data Structures & Algorithms with practical problem-solving skills applied in backend logic and system design.',
    color: '#00ff88',
    tag: 'Problem Solving',
  },
  {
    icon: FiCloud,
    title: 'Cloud & DevOps Learning',
    desc: 'Actively learning Docker containerization and AWS EC2 deployment to make backend applications cloud-ready and production-deployable.',
    color: '#7c3aed',
    tag: 'DevOps',
  },
  {
    icon: FiGlobe,
    title: 'REST API Experience',
    desc: 'Hands-on experience designing and implementing RESTful APIs with proper HTTP methods, status codes, validation, and documentation via Postman.',
    color: '#ff6b35',
    tag: 'API Design',
  },
]

export default function Achievements() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="achievements" className="relative py-28 overflow-hidden">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-48 bg-gradient-to-b from-transparent via-orange-400/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="section-subtitle">
            <span className="text-cyan-400/40 mr-2">05.</span> Milestones
          </p>
          <div className="flex items-end gap-6">
            <h2 className="section-title text-white">
              Key <span className="gradient-text-orange">Achievements</span>
            </h2>
            <div className="hidden md:block h-px flex-1 max-w-xs bg-gradient-to-r from-slate-700 to-transparent mb-4" />
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {achievements.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              className="glass rounded-sm border border-slate-800 p-6 group hover:border-opacity-30 transition-all duration-300 relative overflow-hidden"
              whileHover={{ borderColor: item.color + '33', boxShadow: `0 0 30px ${item.color}11` }}
            >
              {/* Background glow */}
              <div
                className="absolute bottom-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: item.color + '15' }}
              />

              {/* Tag */}
              <span
                className="inline-block px-2 py-0.5 font-mono text-xs mb-4 rounded-sm"
                style={{ background: item.color + '15', color: item.color, border: `1px solid ${item.color}33` }}
              >
                {item.tag}
              </span>

              {/* Icon */}
              <div
                className="w-11 h-11 rounded-sm flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                style={{ background: item.color + '15', border: `1px solid ${item.color}33` }}
              >
                <item.icon style={{ color: item.color }} className="text-xl" />
              </div>

              <h3 className="font-display font-semibold text-white text-sm mb-2 leading-snug">{item.title}</h3>
              <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>

              {/* Bottom accent */}
              <div
                className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg, transparent, ${item.color}88, transparent)` }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

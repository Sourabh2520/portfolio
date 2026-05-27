import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const skillCategories = [
  {
    label: 'Languages',
    color: '#00d4ff',
    skills: [
      { name: 'Java', level: 88 },
      { name: 'SQL', level: 82 },
      { name: 'JavaScript', level: 60 },
    ],
  },
  {
    label: 'Backend',
    color: '#00ff88',
    skills: [
      { name: 'Spring Boot', level: 85 },
      { name: 'Spring Security', level: 78 },
      { name: 'REST APIs', level: 88 },
      { name: 'Hibernate / JPA', level: 80 },
      { name: 'JDBC', level: 75 },
    ],
  },
  {
    label: 'Database',
    color: '#7c3aed',
    skills: [
      { name: 'MySQL', level: 82 },
    ],
  },
  {
    label: 'Tools & DevOps',
    color: '#ff6b35',
    skills: [
      { name: 'Git & GitHub', level: 85 },
      { name: 'Maven', level: 80 },
      { name: 'Postman', level: 88 },
      { name: 'Docker', level: 55 },
      { name: 'AWS EC2', level: 50 },
    ],
  },
  {
    label: 'Core CS',
    color: '#ffd700',
    skills: [
      { name: 'DSA', level: 78 },
      { name: 'OOP Principles', level: 90 },
      { name: 'Exception Handling', level: 88 },
      { name: 'Multithreading', level: 70 },
    ],
  },
]

const techBadges = [
  'Java', 'Spring Boot', 'Spring Security', 'REST API', 'MySQL',
  'Hibernate', 'JPA', 'JDBC', 'JWT', 'Maven', 'Git', 'Docker',
  'AWS EC2', 'Postman', 'JavaScript', 'DSA', 'OOP',
]

function SkillBar({ name, level, color, inView, delay }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1.5">
        <span className="font-mono text-xs text-slate-300">{name}</span>
        <span className="font-mono text-xs" style={{ color }}>{level}%</span>
      </div>
      <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="h-full rounded-full relative"
          style={{ background: `linear-gradient(90deg, ${color}88, ${color})` }}
        >
          <div
            className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full"
            style={{ background: color, boxShadow: `0 0 8px ${color}` }}
          />
        </motion.div>
      </div>
    </div>
  )
}

export default function Skills() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="skills" className="relative py-28 overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-48 bg-gradient-to-b from-transparent via-emerald-400/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="section-subtitle">
            <span className="text-cyan-400/40 mr-2">02.</span> What I Know
          </p>
          <div className="flex items-end gap-6">
            <h2 className="section-title text-white">
              Tech <span className="gradient-text">Skills</span>
            </h2>
            <div className="hidden md:block h-px flex-1 max-w-xs bg-gradient-to-r from-slate-700 to-transparent mb-4" />
          </div>
        </motion.div>

        {/* Skill categories grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: ci * 0.1, duration: 0.6 }}
              className="glass rounded-sm border border-slate-800 p-6 hover:border-opacity-30 transition-all duration-300"
              whileHover={{ borderColor: cat.color + '22' }}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-2 h-6 rounded-full"
                  style={{ background: cat.color, boxShadow: `0 0 10px ${cat.color}88` }}
                />
                <h3 className="font-display font-semibold text-white text-sm tracking-wide">
                  {cat.label}
                </h3>
              </div>

              {/* Skill bars */}
              {cat.skills.map((skill, si) => (
                <SkillBar
                  key={skill.name}
                  {...skill}
                  color={cat.color}
                  inView={inView}
                  delay={ci * 0.1 + si * 0.08}
                />
              ))}
            </motion.div>
          ))}
        </div>

        {/* Tech badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <p className="font-mono text-xs text-slate-600 tracking-widest text-center mb-6 uppercase">
            Technologies I work with
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {techBadges.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.7 + i * 0.04 }}
                whileHover={{ scale: 1.05, borderColor: '#00d4ff44' }}
                className="px-3 py-1.5 font-mono text-xs text-slate-400 border border-slate-800 rounded-sm hover:text-cyan-400 transition-all duration-300 cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

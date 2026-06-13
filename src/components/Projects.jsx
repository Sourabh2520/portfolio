import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiGithub, FiExternalLink, FiServer, FiLayers, FiZap } from 'react-icons/fi'

const projects = [
  {
    id: 1,
    title: 'Student Management System',
    subtitle: 'Enterprise-grade backend system',
    tech: ['Spring Boot', 'Spring Security', 'REST APIs', 'MySQL', 'JWT', 'Hibernate/JPA'],
    category: 'Spring Boot',
    color: '#00d4ff',
    icon: FiServer,
    problem: 'Many colleges manage student records manually or with insecure systems — leading to poor data management, unauthorized access, difficult role handling, and scalability problems.',
    solution: 'Secure authentication and role-based authorization using JWT, layered REST API architecture, and full MySQL integration via Hibernate/JPA.',
    features: [
      'JWT Authentication & Authorization',
      'Role-based Access Control (Admin/Student)',
      'Full CRUD operations with validation',
      'Global exception handling',
      'Spring Data JPA / Hibernate integration',
      'Postman API testing suite',
    ],
    architecture: ['Frontend / Postman', 'REST API Layer', 'Service Layer', 'Repository (JPA)', 'MySQL DB'],
    github: 'https://github.com/Sourabh2520/student-management-system',
    demo: '#',
  },
  {
    id: 2,
    title: 'College Gate Pass System',
    subtitle: 'Multi-level approval workflow',
    tech: ['Java', 'JDBC', 'HTML', 'CSS', 'JavaScript', 'MySQL'],
    category: 'Java + JDBC',
    color: '#00ff88',
    icon: FiLayers,
    problem: 'Traditional gate pass systems are manual and inefficient — causing paper-based approval delays, poor tracking, data management issues, and communication gaps.',
    solution: 'Digital workflow with multi-level approvals, real-time leave tracking, email notifications, and a responsive web frontend backed by JDBC-connected Java.',
    features: [
      'Multi-level approval workflow',
      'Leave request management',
      'Email notifications on approval/rejection',
      'JDBC direct database integration',
      'Responsive HTML/CSS/JS frontend',
      'Student & Admin dashboards',
    ],
    architecture: ['HTML/CSS/JS Frontend', 'Java Servlet Backend', 'JDBC Layer', 'MySQL DB'],
    github: 'https://github.com/Sourabh2520/College-Gate-Pass-System',
    demo: '#',
  },
  {
    id: 3,
    title: 'Log Analyzer',
    subtitle: 'AI-Powered Log Analysis & Failure Detection System',
    tech: ['Java 21', 'Spring Boot 3', 'Spring Security', 'MySQL', 'Redis', 'Ollama/TinyLlama', 'React 18', 'Tailwind CSS', 'Docker', 'JWT'],
    category: 'AI + Spring Boot',
    color: '#ffd700',
    icon: FiZap,
    problem: 'Engineers spend hours manually scanning application logs to find root causes — this automates that with AI.',
    solution: 'Designed and built the full stack solo — backend architecture, AI integration, database schema, security layer, and React frontend.',
    features: [
      'AI-powered root cause analysis using Ollama/TinyLlama',
      'JWT authentication with Redis-based token blacklisting',
      'SHA-256 based duplicate file & recurring error detection',
      'Asynchronous log processing (Spring @Async + ThreadPoolTaskExecutor)',
      'Email notifications for critical errors (Gmail SMTP)',
      'Multi-format support: .log, .txt, .json, .pdf',
      'CSV export, date-range analytics, search history (Redis)',
      'Role-based access control (Admin/User)',
    ],
    architecture: ['React Frontend', 'Spring Boot API', 'Ollama AI', 'Redis Cache', 'MySQL DB'],
    github: 'https://github.com/Sourabh2520/log-analyzer',
    demo: '#',
  },
]

const filters = ['All', 'Spring Boot', 'Java + JDBC', 'AI + Spring Boot']

function ArchFlow({ steps, color }) {
  return (
    <div className="flex items-center gap-1 flex-wrap mt-4">
      {steps.map((step, i) => (
        <div key={step} className="flex items-center gap-1">
          <span
            className="px-2 py-0.5 font-mono text-xs rounded-sm"
            style={{ background: color + '15', color, border: `1px solid ${color}33` }}
          >
            {step}
          </span>
          {i < steps.length - 1 && (
            <span className="text-slate-600 text-xs">→</span>
          )}
        </div>
      ))}
    </div>
  )
}

function ProjectCard({ project, inView, index }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.7 }}
      className="glass rounded-sm border border-slate-800 overflow-hidden group transition-all duration-300"
      whileHover={{ borderColor: project.color + '33' }}
      style={{ '--proj-color': project.color }}
    >
      {/* Card top accent bar */}
      <div className="h-0.5 w-full" style={{ background: `linear-gradient(90deg, ${project.color}, transparent)` }} />

      <div className="p-6 lg:p-8">
        <div className="flex items-start justify-between gap-4 mb-5">
          <div className="flex items-start gap-4">
            {/* Icon */}
            <div
              className="w-12 h-12 rounded-sm flex items-center justify-center flex-shrink-0 mt-0.5"
              style={{ background: project.color + '15', border: `1px solid ${project.color}33` }}
            >
              <project.icon style={{ color: project.color }} className="text-xl" />
            </div>
            <div>
              <p className="font-mono text-xs tracking-widest uppercase mb-1" style={{ color: project.color }}>
                {project.category}
              </p>
              <h3 className="font-display font-bold text-xl text-white">{project.title}</h3>
              <p className="text-slate-500 text-sm">{project.subtitle}</p>
            </div>
          </div>

          {/* Links */}
          <div className="flex gap-2 flex-shrink-0">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center border border-slate-700 text-slate-500 hover:text-white hover:border-slate-500 transition-all duration-300 rounded-sm"
            >
              <FiGithub className="text-base" />
            </a>
            <a
              href={project.demo}
              className="w-9 h-9 flex items-center justify-center border border-slate-700 text-slate-500 hover:text-white hover:border-slate-500 transition-all duration-300 rounded-sm"
            >
              <FiExternalLink className="text-base" />
            </a>
          </div>
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech.map(t => (
            <span
              key={t}
              className="px-2 py-0.5 font-mono text-xs text-slate-400 border border-slate-800 rounded-sm"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Problem */}
        <div className="mb-4">
          <p className="font-mono text-xs text-slate-600 tracking-widest uppercase mb-2">Problem Solved</p>
          <p className="text-slate-400 text-sm leading-relaxed">{project.problem}</p>
        </div>

        {/* Solution */}
        <div className="mb-4">
          <p className="font-mono text-xs text-slate-600 tracking-widest uppercase mb-2">Solution</p>
          <p className="text-slate-400 text-sm leading-relaxed">{project.solution}</p>
        </div>

        {/* Architecture flow */}
        <div className="mb-4">
          <p className="font-mono text-xs text-slate-600 tracking-widest uppercase mb-1">Architecture</p>
          <ArchFlow steps={project.architecture} color={project.color} />
        </div>

        {/* Expand / Collapse features */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="font-mono text-xs tracking-widest uppercase transition-colors duration-300 mt-2"
          style={{ color: project.color }}
        >
          {expanded ? '− Hide Features' : '+ Key Features'}
        </button>

        <AnimatePresence>
          {expanded && (
            <motion.ul
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="mt-3 space-y-1.5 overflow-hidden"
            >
              {project.features.map(f => (
                <li key={f} className="flex items-start gap-2 text-sm text-slate-400">
                  <span style={{ color: project.color }} className="mt-0.5 flex-shrink-0">▸</span>
                  {f}
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </motion.article>
  )
}

export default function Projects() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 })
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter)

  return (
    <section id="projects" className="relative py-28 overflow-hidden">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-48 bg-gradient-to-b from-transparent via-violet-400/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <p className="section-subtitle">
            <span className="text-cyan-400/40 mr-2">03.</span> What I've Built
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end gap-4 sm:gap-6">
            <h2 className="section-title text-white">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <div className="hidden md:block h-px flex-1 max-w-xs bg-gradient-to-r from-slate-700 to-transparent mb-4" />
          </div>
        </motion.div>

        {/* Filter buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="flex gap-2 mb-10 flex-wrap"
        >
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-1.5 font-mono text-xs tracking-widest uppercase transition-all duration-300 rounded-sm border ${
                activeFilter === f
                  ? 'border-cyan-400/60 text-cyan-400 bg-cyan-400/10'
                  : 'border-slate-800 text-slate-500 hover:border-slate-600 hover:text-slate-300'
              }`}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* Project cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid lg:grid-cols-2 gap-6"
          >
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} inView={inView} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/Sourabh2520"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-sm text-slate-500 hover:text-cyan-400 transition-colors duration-300 border-b border-slate-700 hover:border-cyan-400/40 pb-0.5"
          >
            <FiGithub /> View more on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}

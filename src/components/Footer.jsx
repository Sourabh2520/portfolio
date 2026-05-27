import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="relative border-t border-slate-900 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 relative">
              <div className="absolute inset-0 border border-cyan-400/40 rotate-45" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-display font-black text-xs gradient-text">SR</span>
              </div>
            </div>
            <span className="font-mono text-xs text-slate-600 tracking-widest">SOURABH RAJPUT</span>
          </div>

          {/* Center */}
          <p className="font-mono text-xs text-slate-700 flex items-center gap-1">
            Built with <FiHeart className="text-red-500/60 text-xs" /> using React & Spring Boot
          </p>

          {/* Social */}
          <div className="flex items-center gap-3">
            {[
              { Icon: FiGithub, href: 'https://github.com/Sourabh2520' },
              { Icon: FiLinkedin, href: 'https://linkedin.com/in/Sourabh2505' },
              { Icon: FiMail, href: 'mailto:rajputsourabh2505@gmail.com' },
            ].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-700 hover:text-cyan-400 transition-colors duration-300"
              >
                <Icon className="text-base" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

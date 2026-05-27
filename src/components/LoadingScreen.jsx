import { motion } from 'framer-motion'

export default function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 bg-cyber-black flex flex-col items-center justify-center z-50"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60 animate-scan" />

      <div className="relative z-10 text-center">
        <motion.div
          className="w-20 h-20 mx-auto mb-8 relative"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: 'backOut' }}
        >
          <div className="absolute inset-0 border-2 border-cyan-400 rotate-45 animate-pulse" />
          <div className="absolute inset-2 border border-emerald-400 rotate-12" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-display font-black text-2xl gradient-text">SR</span>
          </div>
        </motion.div>

        <motion.p
          className="font-mono text-xs tracking-[0.4em] text-cyan-400 uppercase mb-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Initializing Portfolio
        </motion.p>

        <motion.h1
          className="font-display text-3xl font-bold text-white mb-8"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          Sourabh Rajput
        </motion.h1>

        <motion.div
          className="w-64 h-px bg-slate-800 mx-auto overflow-hidden rounded"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-cyan-400 to-emerald-400"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ delay: 0.8, duration: 1.2, ease: 'easeInOut' }}
            style={{ boxShadow: '0 0 10px #00d4ff' }}
          />
        </motion.div>

        <motion.p
          className="font-mono text-xs text-slate-600 mt-4 tracking-widest"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          JAVA BACKEND DEVELOPER
        </motion.p>
      </div>
    </motion.div>
  )
}

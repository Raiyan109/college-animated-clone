import { useEffect } from 'react'
import { motion } from 'motion/react'

export default function Preloader({ onDone }) {
  useEffect(() => {
    const t = setTimeout(onDone, 2000)
    return () => clearTimeout(t)
  }, [onDone])
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-brick-dark text-cream"
      initial={{ y: 0 }}
      exit={{ y: '-100%' }}
      transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="overflow-hidden">
        <motion.p
          initial={{ y: '110%' }}
          animate={{ y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl font-medium tracking-tight md:text-6xl"
        >
          Wesley College
        </motion.p>
      </div>
      <motion.div
        className="absolute bottom-0 left-0 h-1 bg-gold"
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        transition={{ duration: 1.8, ease: 'easeInOut' }}
      />
    </motion.div>
  )
}

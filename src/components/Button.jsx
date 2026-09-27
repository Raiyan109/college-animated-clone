import { motion } from 'motion/react'

export default function Button({ children, href = '#', variant = 'solid', className = '' }) {
  const styles = {
    solid: 'bg-brick text-cream border-brick',
    light: 'bg-cream text-ink border-cream',
    outline: 'bg-transparent text-current border-current',
  }[variant]
  return (
    <motion.a
      href={href}
      whileHover="hover"
      initial="rest"
      className={`group relative inline-flex items-center gap-3 overflow-hidden rounded-full border px-6 py-3 text-sm font-medium tracking-wide ${styles} ${className}`}
    >
      <motion.span
        variants={{ rest: { y: '101%' }, hover: { y: 0 } }}
        transition={{ duration: 0.45, ease: [0.65, 0, 0.35, 1] }}
        className="absolute inset-0 rounded-full bg-ink"
      />
      <span className="relative z-10 transition-colors duration-300 group-hover:text-cream">{children}</span>
      <motion.span
        variants={{ rest: { x: 0 }, hover: { x: 4 } }}
        className="relative z-10 transition-colors duration-300 group-hover:text-cream"
      >
        →
      </motion.span>
    </motion.a>
  )
}

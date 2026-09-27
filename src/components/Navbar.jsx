import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { navLinks } from '../lib/data'

export default function Navbar({ lenis }) {
  const [open, setOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [solid, setSolid] = useState(false)

  useEffect(() => {
    let last = window.scrollY
    const onScroll = () => {
      const y = window.scrollY
      setSolid(y > 60)
      setHidden(y > last && y > 300)
      last = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (lenis) (open ? lenis.stop() : lenis.start())
    const esc = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', esc)
    return () => window.removeEventListener('keydown', esc)
  }, [open, lenis])

  const barClass = open
    ? 'text-cream'
    : solid
      ? 'bg-cream/90 text-ink backdrop-blur'
      : 'text-cream'

  return (
    <>
      <motion.header
        animate={{ y: hidden && !open ? '-110%' : 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${barClass}`}
      >
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-5 py-4 md:px-10">
          <a href="#top" className="text-xl font-semibold tracking-tight">
            Wesley<span className="text-gold">.</span>
          </a>
          <div className="flex items-center gap-3">
            <a href="#apply" className="hidden rounded-full border border-current px-5 py-2 text-sm md:block">Donate</a>
            <a href="#lead" className="hidden rounded-full bg-brick px-5 py-2 text-sm text-cream md:block">Venue hire</a>
            <button
              onClick={() => setOpen((o) => !o)}
              aria-label="Toggle menu"
              aria-expanded={open}
              className="flex h-11 items-center gap-3 rounded-full border border-current px-5 text-sm"
            >
              <span>{open ? 'Close' : 'Menu'}</span>
              <span className="relative block h-2.5 w-5">
                <motion.span className="absolute left-0 h-px w-5 bg-current" animate={{ top: open ? 5 : 0, rotate: open ? 45 : 0 }} />
                <motion.span className="absolute left-0 h-px w-5 bg-current" animate={{ top: open ? 5 : 10, rotate: open ? -45 : 0 }} />
              </span>
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.nav
            key="menu"
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 overflow-y-auto bg-brick-dark text-cream"
          >
            <div className="mx-auto grid min-h-full max-w-[1600px] gap-10 px-5 pb-10 pt-28 md:grid-cols-[1.4fr_1fr] md:px-10">
              <ul>
                {navLinks.map((l, i) => (
                  <li key={l.label} className="overflow-hidden border-b border-cream/15">
                    <motion.a
                      href="#top"
                      onClick={() => setOpen(false)}
                      initial={{ y: '100%' }}
                      animate={{ y: 0 }}
                      transition={{ duration: 0.8, delay: 0.3 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                      className="group flex items-baseline justify-between py-3 text-4xl font-medium tracking-tight md:text-6xl"
                    >
                      <span className="transition-transform duration-500 group-hover:translate-x-4">{l.label}</span>
                      <span className="text-sm text-cream/40">0{i + 1}</span>
                    </motion.a>
                  </li>
                ))}
              </ul>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="flex flex-col justify-between gap-10"
              >
                <div className="grid grid-cols-2 gap-6 text-sm text-cream/70">
                  {navLinks.filter((l) => l.sub.length).map((l) => (
                    <div key={l.label}>
                      <p className="mb-2 text-xs uppercase tracking-widest text-gold">{l.label}</p>
                      <ul className="space-y-1">
                        {l.sub.map((s) => (
                          <li key={s}><a href="#top" className="underline-link">{s}</a></li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <div className="flex gap-5 text-sm">
                  {['Facebook', 'Instagram', 'LinkedIn'].map((s) => (
                    <a key={s} href="#top" className="underline-link">{s}</a>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  )
}

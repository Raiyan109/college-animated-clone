import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import Reveal from './Reveal'

const field =
  'w-full border-b border-cream/40 bg-transparent py-3 text-lg text-cream outline-none transition-colors placeholder:text-cream/40 focus:border-gold'

export default function LeadMagnet() {
  const [sent, setSent] = useState(false)
  return (
    <section id="lead" className="bg-brick-dark text-cream">
      <div className="mx-auto grid max-w-[1600px] gap-12 px-5 py-28 md:grid-cols-2 md:px-10 md:py-40">
        <Reveal>
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-gold">Ready to take the next step?</p>
          <h2 className="text-[clamp(2.25rem,5vw,5rem)] font-medium leading-none tracking-[-0.04em]">Is Wesley the right college for you?</h2>
          <p className="mt-6 max-w-md text-cream/70">Download our College guide for rooms, fees, scholarships and everything in between.</p>
        </Reveal>
        <Reveal delay={0.15}>
          <AnimatePresence mode="wait">
            {sent ? (
              <motion.p key="ok" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-3xl font-medium">
                Thanks — your guide is on its way. ✦
              </motion.p>
            ) : (
              <motion.form
                key="form"
                exit={{ opacity: 0, y: -20 }}
                onSubmit={(e) => {
                  e.preventDefault()
                  setSent(true)
                }}
                className="grid gap-6"
              >
                <input required className={field} placeholder="First name" aria-label="First name" />
                <input required type="email" className={field} placeholder="Email address" aria-label="Email address" />
                <select className={field + ' [&>option]:text-ink'} defaultValue="" aria-label="I am a" required>
                  <option value="" disabled>I am a…</option>
                  <option>Prospective student</option>
                  <option>Parent or guardian</option>
                  <option>School careers advisor</option>
                </select>
                <motion.button whileTap={{ scale: 0.97 }} className="mt-2 w-fit rounded-full bg-cream px-8 py-3 font-medium text-ink transition-colors hover:bg-gold">
                  Download the guide
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>
        </Reveal>
      </div>
    </section>
  )
}

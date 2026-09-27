import { motion } from 'motion/react'
import { stories } from '../lib/data'
import Art from './Art'
import Reveal from './Reveal'
import Button from './Button'

export default function Stories() {
  return (
    <section className="mx-auto max-w-[1600px] px-5 py-28 md:px-10 md:py-44">
      <div className="mb-12 flex items-end justify-between gap-6">
        <Reveal>
          <h2 className="text-[clamp(2.25rem,5vw,5rem)] font-medium leading-none tracking-[-0.04em]">College stories</h2>
        </Reveal>
        <Button variant="outline" className="hidden md:inline-flex">All news</Button>
      </div>
      <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
        {stories.map((s, i) => (
          <Reveal key={s.title} delay={(i % 4) * 0.08}>
            <motion.a href="#top" whileHover="hover" initial="rest" className="group block">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                <motion.div variants={{ rest: { scale: 1 }, hover: { scale: 1.08 } }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }} className="h-full w-full">
                  <Art tone={s.tone} variant={i} className="h-full w-full" />
                </motion.div>
              </div>
              <p className="mt-4 text-xs uppercase tracking-widest text-brick">{s.tag}</p>
              <h3 className="underline-link mt-1 inline text-xl font-medium leading-tight tracking-tight">{s.title}</h3>
            </motion.a>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

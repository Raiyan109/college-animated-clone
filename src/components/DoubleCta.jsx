import { motion } from 'motion/react'
import Art from './Art'
import Reveal from './Reveal'
import Button from './Button'
import applyImg from '../assets/cta-apply.png'
import sponsorshipImg from '../assets/cta-sponsorship.png'


const cards = [
  { title: 'How to apply', text: 'Everything you need to secure your place, from first enquiry to move-in day.', tone: 'brick', cta: 'Start your application', image: applyImg },
  { title: 'Scholarships', text: 'Merit, community and need-based awards to help make College life possible.', tone: 'gold', cta: 'See scholarships', image: sponsorshipImg },
]

export default function DoubleCta() {
  return (
    <section id="apply" className="mx-auto max-w-[1600px] px-5 py-28 md:px-10 md:py-44">
      <Reveal>
        <h2 className="mb-12 max-w-3xl text-[clamp(2.25rem,5vw,5rem)] font-medium leading-[1] tracking-[-0.04em]">Your journey starts here</h2>
      </Reveal>
      <div className="grid gap-6 md:grid-cols-2">
        {cards.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.12}>
            <motion.article whileHover="hover" initial="rest" className="group relative overflow-hidden rounded-3xl bg-sand">
              <div className="relative aspect-[5/4] overflow-hidden">
                <motion.div variants={{ rest: { scale: 1 }, hover: { scale: 1.08 } }} transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }} className="h-full w-full">
                  <img src={c.image} alt={c.title} className="h-full w-full object-cover" />
                </motion.div>
              </div>
              <div className="flex flex-col gap-5 p-6 md:p-10">
                <h3 className="text-3xl font-medium tracking-tight">{c.title}</h3>
                <p className="max-w-md text-ink/70">{c.text}</p>
                <div><Button>{c.cta}</Button></div>
              </div>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

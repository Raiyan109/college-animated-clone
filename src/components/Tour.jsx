import { useLayoutEffect, useRef } from 'react'
import { gsap } from '../lib/gsap'
import Art from './Art'
import Button from './Button'
import tourImg from '../assets/hero.jpg'

// Image expands to full-bleed as the section scrolls into view.
export default function Tour() {
  const root = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: { trigger: root.current, start: 'top top', end: '+=100%', pin: true, scrub: true, anticipatePin: 1 },
        })
        .fromTo('.tour-frame', { clipPath: 'inset(18% 22% 18% 22% round 28px)' }, { clipPath: 'inset(0% 0% 0% 0% round 0px)', ease: 'none' }, 0)
        .fromTo('.tour-art', { scale: 1.3 }, { scale: 1, ease: 'none' }, 0)
        .fromTo('.tour-copy', { opacity: 0, y: 60 }, { opacity: 1, y: 0, ease: 'power2.out' }, 0.4)
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={root} className="relative h-screen overflow-hidden bg-cream">
      <div className="tour-frame absolute inset-0">
        <img src={tourImg} alt="Virtual Tour" className="tour-art h-full w-full object-cover" />
        <div className="absolute inset-0 bg-ink/40" />
      </div>
      <div className="tour-copy absolute inset-0 flex flex-col items-center justify-center gap-6 px-5 text-center text-cream">
        <h2 className="text-[clamp(2.5rem,7vw,7rem)] font-medium leading-none tracking-[-0.04em]">Take the virtual tour</h2>
        <p className="max-w-md text-cream/80">Walk the courtyards, peek into a student room and find your favourite study spot before you arrive.</p>
        <Button variant="light">Start exploring</Button>
      </div>
    </section>
  )
}

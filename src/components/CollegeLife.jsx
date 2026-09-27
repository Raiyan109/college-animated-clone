import { useLayoutEffect, useRef } from 'react'
import { gsap } from '../lib/gsap'
import { lifeItems } from '../lib/data'
import Art from './Art'

// Pinned horizontal-scroll gallery driven by ScrollTrigger (desktop); stacked on mobile.
export default function CollegeLife() {
  const root = useRef(null)
  const track = useRef(null)

  useLayoutEffect(() => {
    const mm = gsap.matchMedia()
    mm.add('(min-width: 768px)', () => {
      const dist = () => track.current.scrollWidth - window.innerWidth
      gsap.to(track.current, {
        x: () => -dist(),
        ease: 'none',
        scrollTrigger: {
          trigger: root.current,
          start: 'top top',
          end: () => `+=${dist()}`,
          pin: true,
          scrub: 0.6,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      })
      gsap.to('.life-progress', {
        scaleX: 1,
        ease: 'none',
        scrollTrigger: { trigger: root.current, start: 'top top', end: () => `+=${dist()}`, scrub: true },
      })
    })
    return () => mm.revert()
  }, [])

  return (
    <section id="life" ref={root} className="relative overflow-hidden bg-ink text-cream md:h-screen">
      <div className="mx-auto flex max-w-[1600px] items-end justify-between px-5 pb-6 pt-16 md:px-10 md:pt-24">
        <h2 className="text-[clamp(2.5rem,6vw,6rem)] font-medium leading-none tracking-[-0.04em]">College life</h2>
        <p className="hidden max-w-xs text-sm text-cream/60 md:block">Keep scrolling to wander through eight corners of everyday life.</p>
      </div>
      <div ref={track} className="flex flex-col gap-6 px-5 pb-16 md:w-max md:flex-row md:gap-8 md:px-10 md:pb-0">
        {lifeItems.map((item, i) => (
          <article key={item.title} className="group w-full shrink-0 md:w-[32vw] md:max-w-[560px]">
            <div className="relative aspect-[4/5] overflow-hidden md:aspect-[4/4.6]">
              {/* <Art tone={item.tone} variant={i} className="h-full w-full transition-transform duration-[1200ms] ease-out group-hover:scale-110" /> */}
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
              />
              <span className="absolute left-4 top-4 rounded-full bg-cream/90 px-3 py-1 text-xs text-ink">0{i + 1}</span>
            </div>
            <h3 className="mt-4 text-2xl font-medium tracking-tight">{item.title}</h3>
            <p className="mt-1 max-w-sm text-sm text-cream/60">{item.text}</p>
          </article>
        ))}
      </div>
      <div className="absolute inset-x-0 bottom-0 hidden h-1 bg-cream/10 md:block">
        <div className="life-progress h-full origin-left scale-x-0 bg-gold" />
      </div>
    </section>
  )
}

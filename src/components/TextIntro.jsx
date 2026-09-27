import { useLayoutEffect, useRef } from 'react'
import { gsap, SplitText } from '../lib/gsap'
import Button from './Button'

const copy =
  'At Wesley you are never just a room number. You are part of a community that studies together, eats together and cheers each other on — a home away from home in the heart of the university.'

export default function TextIntro() {
  const root = useRef(null)
  const textRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const split = SplitText.create(textRef.current, { type: 'words' })
      gsap.set(split.words, { opacity: 0.15 })
      gsap.to(split.words, {
        opacity: 1,
        stagger: 0.05,
        ease: 'none',
        scrollTrigger: { trigger: textRef.current, start: 'top 80%', end: 'bottom 45%', scrub: true },
      })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section id="why" ref={root} className="mx-auto max-w-[1600px] px-5 py-28 md:px-10 md:py-44">
      <p className="mb-8 text-xs uppercase tracking-[0.3em] text-brick">Why Wesley</p>
      <p ref={textRef} className="max-w-6xl text-[clamp(1.75rem,4vw,4rem)] font-medium leading-[1.12] tracking-[-0.03em]">
        {copy}
      </p>
      <div className="mt-12">
        <Button href="#life">Explore college life</Button>
      </div>
    </section>
  )
}

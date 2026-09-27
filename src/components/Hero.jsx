import { useLayoutEffect, useRef } from 'react'
import { gsap, SplitText } from '../lib/gsap'
import Button from './Button'
import heroImg from '../assets/hero.jpg'

export default function Hero({ ready }) {
  const root = useRef(null)
  const headingRef = useRef(null)
  const tl = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const split = SplitText.create(headingRef.current, { type: 'lines', mask: 'lines', autoSplit: true })
      gsap.set(split.lines, { yPercent: 110 })
      gsap.set('.hero-fade', { opacity: 0, y: 30 })
      tl.current = gsap
        .timeline({ paused: true })
        .to(split.lines, { yPercent: 0, duration: 1.2, ease: 'expo.out', stagger: 0.12 })
        .to('.hero-fade', { opacity: 1, y: 0, duration: 1, ease: 'power3.out', stagger: 0.1 }, '-=0.7')
        .fromTo('.hero-bg', { scale: 1.25 }, { scale: 1, duration: 2.4, ease: 'power3.out' }, 0)

      // parallax on scroll
      gsap.to('.hero-bg-wrap', {
        yPercent: 22,
        ease: 'none',
        scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true },
      })
      gsap.to('.hero-content', {
        yPercent: -15,
        opacity: 0.2,
        ease: 'none',
        scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true },
      })
    }, root)
    return () => ctx.revert()
  }, [])

  useLayoutEffect(() => {
    if (ready) tl.current?.play()
  }, [ready])

  return (
    <section id="top" ref={root} className="relative h-[100svh] min-h-[640px] overflow-hidden bg-brick-dark text-cream">
      <div className="hero-bg-wrap absolute inset-0 -top-[10%] h-[120%]">
        <img
          src={heroImg}
          alt="Heritage brick tower on the College grounds"
          className="hero-bg h-full w-full object-cover object-[center_35%]"
        />
      </div>
      {/* warm brick tint to offset the cool sky, plus the usual bottom-up readability gradient */}
      <div className="absolute inset-0 bg-brick-dark/25 mix-blend-multiply" />
      <div className="absolute inset-0 bg-gradient-to-t from-brick-dark/95 via-brick-dark/25 to-brick-dark/40" />
      <div className="hero-content relative z-10 mx-auto flex h-full max-w-[1600px] flex-col justify-end px-5 pb-16 md:px-10 md:pb-20">
        <p className="hero-fade mb-6 text-xs uppercase tracking-[0.3em] text-gold">A residential college</p>
        <h1 ref={headingRef} className="max-w-5xl text-[clamp(3rem,9vw,9rem)] font-medium leading-[0.92] tracking-[-0.04em]">
          Discover your path
        </h1>
        <div className="hero-fade mt-10 flex flex-wrap items-end justify-between gap-6">
          <p className="max-w-md text-lg text-cream/80">
            More than a place to live. A launchpad for the friendships, habits and confidence that last well beyond graduation.
          </p>
          <Button href="#why" variant="light">Why choose us</Button>
        </div>
      </div>
      <div className="absolute bottom-6 right-5 z-10 hidden items-center gap-3 text-xs uppercase tracking-widest text-cream/70 md:flex">
        Scroll
        <span className="relative block h-12 w-px overflow-hidden bg-cream/30">
          <span className="absolute left-0 top-0 h-4 w-px animate-[drop_1.8s_ease-in-out_infinite] bg-cream" />
        </span>
      </div>
    </section>
  )
}

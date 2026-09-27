import { useLayoutEffect, useRef } from 'react'
import { gsap } from '../lib/gsap'
import Art from './Art'
import landscapeImg from '../assets/parallax landscape.png'
import portraitImg from '../assets/parallax potrait.png'

export default function DoubleImage() {
  const root = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('[data-parallax]').forEach((el) => {
        const speed = parseFloat(el.dataset.parallax)
        gsap.fromTo(
          el,
          { yPercent: -speed * 12 },
          {
            yPercent: speed * 12,
            ease: 'none',
            scrollTrigger: { trigger: el.parentElement, start: 'top bottom', end: 'bottom top', scrub: true },
          },
        )
      })
      gsap.utils.toArray('.clip-reveal').forEach((el) => {
        gsap.fromTo(
          el,
          { clipPath: 'inset(0 0 100% 0)' },
          {
            clipPath: 'inset(0 0 0% 0)',
            duration: 1.4,
            ease: 'expo.out',
            scrollTrigger: { trigger: el, start: 'top 85%' },
          },
        )
      })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={root} className="mx-auto grid max-w-[1600px] gap-6 px-5 pb-28 md:grid-cols-12 md:px-10 md:pb-44">
      <div className="clip-reveal md:col-span-7">
        <div className="relative aspect-[4/3] overflow-hidden">
          <ParallaxLayer speed={1}>
            {/* <Art tone="moss" variant={1} className="h-full w-full" /> */}
            <img
              src={landscapeImg}
              alt="Heritage brick tower on the College grounds"
              className="hero-bg h-full w-full object-cover object-[center_35%]"
            />
          </ParallaxLayer>
        </div>
      </div>
      <div className="clip-reveal md:col-span-5 md:mt-40">
        <div className="relative aspect-[4/5] overflow-hidden">
          <ParallaxLayer speed={2}>
            {/* <Art tone="gold" variant={2} className="h-full w-full" /> */}
            <img
              src={portraitImg}
              alt="Heritage brick tower on the College grounds"
              className="hero-bg h-full w-full object-cover object-[center_35%]"
            />
          </ParallaxLayer>
        </div>
        <p className="mt-4 max-w-xs text-sm text-ink/60">Courtyard evenings, Semester 1.</p>
      </div>
    </section>
  )
}

function ParallaxLayer({ speed, children }) {
  return (
    <div data-parallax={speed} className="absolute -inset-[14%] h-[128%] w-[128%]">
      {children}
    </div>
  )
}

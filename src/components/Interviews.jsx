import { useLayoutEffect, useRef, useState } from 'react'
import { gsap, Draggable } from '../lib/gsap'
import { students } from '../lib/data'
import Art from './Art'

// Draggable + inertia slider (GSAP Draggable/InertiaPlugin) with prev/next buttons.
export default function Interviews() {
  const root = useRef(null)
  const track = useRef(null)
  const drag = useRef(null)
  const [playing, setPlaying] = useState(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const bounds = () => ({ minX: -(track.current.scrollWidth - root.current.clientWidth), maxX: 0 })
      drag.current = Draggable.create(track.current, {
        type: 'x',
        inertia: true,
        edgeResistance: 0.85,
        bounds: bounds(),
        cursor: 'grab',
        activeCursor: 'grabbing',
        allowContextMenu: true,
      })[0]
      const onResize = () => {
        drag.current.applyBounds(bounds())
      }
      window.addEventListener('resize', onResize)
      return () => window.removeEventListener('resize', onResize)
    }, root)
    return () => ctx.revert()
  }, [])

  const step = (dir) => {
    const w = track.current.firstElementChild.getBoundingClientRect().width + 24
    const { minX } = drag.current.vars.bounds
    const x = gsap.utils.clamp(minX, 0, gsap.getProperty(track.current, 'x') - dir * w)
    gsap.to(track.current, { x, duration: 0.8, ease: 'power3.out', onUpdate: () => drag.current.update() })
  }

  return (
    <section ref={root} className="overflow-hidden bg-sand py-28 md:py-40">
      <div className="mx-auto mb-12 flex max-w-[1600px] items-end justify-between gap-6 px-5 md:px-10">
        <h2 className="max-w-3xl text-[clamp(2rem,4.5vw,4.5rem)] font-medium leading-[1] tracking-[-0.04em]">
          Hear what our students love about life at Wesley
        </h2>
        <div className="flex gap-2">
          {[-1, 1].map((d) => (
            <button
              key={d}
              onClick={() => step(d)}
              aria-label={d < 0 ? 'Previous' : 'Next'}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-ink transition-colors hover:bg-ink hover:text-cream"
            >
              {d < 0 ? '←' : '→'}
            </button>
          ))}
        </div>
      </div>
      <div className="px-5 md:px-10">
        <div ref={track} className="flex w-max gap-6">
          {students.map((s, i) => (
            <button
              key={s.name}
              onClick={() => setPlaying(playing === i ? null : i)}
              className="group relative block w-[72vw] shrink-0 text-left sm:w-[38vw] md:w-[24vw] md:max-w-[420px]"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                <Art tone={s.tone} variant={i} className="h-full w-full transition-transform duration-[1200ms] group-hover:scale-110" />
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-cream text-ink transition-transform duration-500 group-hover:scale-110">
                    {playing === i ? '❚❚' : '▶'}
                  </span>
                </span>
              </div>
              <p className="mt-3 text-xl font-medium">{s.name}</p>
              <p className="text-sm text-ink/60">{s.course}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

import { marqueeWords } from '../lib/data'

export default function Marquee() {
  const row = [...marqueeWords, ...marqueeWords]
  return (
    <section className="marquee overflow-hidden border-y border-ink/10 bg-cream py-6 md:py-10" aria-hidden="true">
      <div className="marquee-track flex w-max">
        {[0, 1].map((k) => (
          <ul key={k} className="flex shrink-0 items-center">
            {row.map((w, i) => (
              <li key={`${k}-${i}`} className="flex items-center">
                <span className="px-6 text-[clamp(2.5rem,7vw,7rem)] font-medium leading-none tracking-[-0.04em] md:px-10">{w}</span>
                <span className="text-3xl text-brick md:text-5xl">✦</span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  )
}

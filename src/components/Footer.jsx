import { navLinks } from '../lib/data'

export default function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto max-w-[1600px] px-5 pb-8 pt-20 md:px-10">
        <div className="grid gap-12 md:grid-cols-[2fr_1fr_1fr]">
          <p className="max-w-md text-[clamp(1.75rem,3vw,3rem)] font-medium leading-tight tracking-[-0.03em]">
            A community for life, in the heart of the university.
          </p>
          <ul className="space-y-2 text-sm text-cream/70">
            {navLinks.map((l) => (
              <li key={l.label}><a href="#top" className="underline-link">{l.label}</a></li>
            ))}
          </ul>
          <ul className="space-y-2 text-sm text-cream/70">
            {['Facebook', 'Instagram', 'LinkedIn'].map((s) => (
              <li key={s}><a href="#top" className="underline-link">{s}</a></li>
            ))}
          </ul>
        </div>
        <p className="mt-20 select-none text-[clamp(4rem,19vw,20rem)] font-semibold leading-[0.8] tracking-[-0.06em] text-cream/[0.07]">Wesley</p>
        <div className="mt-8 flex flex-wrap justify-between gap-3 border-t border-cream/15 pt-6 text-xs text-cream/50">
          <span>© 2026 Demo recreation. Not the official website.</span>
          <span>Built with React, GSAP, Framer Motion &amp; Tailwind.</span>
        </div>
      </div>
    </footer>
  )
}

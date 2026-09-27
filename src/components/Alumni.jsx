import Reveal from './Reveal'
import Button from './Button'

export default function Alumni() {
  return (
    <section className="bg-brick text-cream">
      <div className="mx-auto grid max-w-[1600px] items-center gap-8 px-5 py-20 md:grid-cols-2 md:px-10 md:py-28">
        <Reveal>
          <h2 className="text-[clamp(2.25rem,5vw,5rem)] font-medium leading-none tracking-[-0.04em]">Old Collegians</h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mb-6 max-w-md text-lg text-cream/80">
            Once a Wesley student, always part of the family. Reconnect with friends, mentors and the wider alumni network.
          </p>
          <Button variant="light">Join the network</Button>
        </Reveal>
      </div>
    </section>
  )
}

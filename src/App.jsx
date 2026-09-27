import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence } from 'motion/react'
import Lenis from 'lenis'
import { gsap, ScrollTrigger } from './lib/gsap'
import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import TextIntro from './components/TextIntro'
import DoubleImage from './components/DoubleImage'
import CollegeLife from './components/CollegeLife'
import DoubleCta from './components/DoubleCta'
import Alumni from './components/Alumni'
import Interviews from './components/Interviews'
import Tour from './components/Tour'
import Stories from './components/Stories'
import LeadMagnet from './components/LeadMagnet'
import Footer from './components/Footer'

export default function App() {
  const [loading, setLoading] = useState(true)
  const [lenis, setLenis] = useState(null)
  const done = useCallback(() => setLoading(false), [])

  useEffect(() => {
    const l = new Lenis({ lerp: 0.1, smoothWheel: true })
    l.on('scroll', ScrollTrigger.update)
    const tick = (t) => l.raf(t * 1000)
    gsap.ticker.add(tick)
    gsap.ticker.lagSmoothing(0)
    setLenis(l)
    return () => {
      gsap.ticker.remove(tick)
      l.destroy()
    }
  }, [])

  useEffect(() => {
    if (!lenis) return
    loading ? lenis.stop() : lenis.start()
  }, [loading, lenis])

  return (
    <>
      <AnimatePresence>{loading && <Preloader key="pre" onDone={done} />}</AnimatePresence>
      <Navbar lenis={lenis} />
      <main>
        <Hero ready={!loading} />
        <Marquee />
        <TextIntro />
        <DoubleImage />
        <CollegeLife />
        <DoubleCta />
        <Alumni />
        <Interviews />
        <Tour />
        <Stories />
        <LeadMagnet />
      </main>
      <Footer />
    </>
  )
}

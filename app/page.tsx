'use client'

import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import HowItWorks from '@/components/HowItWorks'
import Services from '@/components/Services'
import Booking from '@/components/Booking'
import FAQ from '@/components/FAQ'
import About from '@/components/About'
import Footer from '@/components/Footer'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <main>
      <Nav />
      <Hero />
      <HowItWorks />
      <Services />
      <Booking />
      <FAQ />
      <About />
      <Footer />
    </main>
  )
}

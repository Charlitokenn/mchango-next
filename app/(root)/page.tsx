import CallToAction from '@/components/landingPage/CallToAction'
import Features from '@/components/landingPage/Features'
import Footer from '@/components/landingPage/Footer'
import Header from '@/components/landingPage/Header'
import Hero from '@/components/landingPage/Hero'
import HowItWorks from '@/components/landingPage/HowItWorks'
import Pricing from '@/components/landingPage/Pricing'
import Testimonials from '@/components/landingPage/Testimonials'
import React from 'react'

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Testimonials />
        <Pricing />
        <CallToAction />
      </main>
      <Footer />
    </div>
  )
}

export default LandingPage
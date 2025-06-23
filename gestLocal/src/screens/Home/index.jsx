import React from 'react'
import LandingNav from '../../components/LandingNav'
import HeroSection from '../../components/HeroSection'
import FeaturesSection from '../../components/FeaturesSection'
import MockupSection from '../../components/MockupSection'
import Footer from '../../components/Footer'

function Home() {
  return (
    <>
      <LandingNav />
      <HeroSection />
      <FeaturesSection />
      <MockupSection />
      <Footer />

    </>
  )
}

export default Home
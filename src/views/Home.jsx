import React from 'react'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Showcase from '@components/Showcase'
import FeatureSection from '../components/FeatureSection'
import AboutCompanySection from '../components/AboutCompanySection'
import OurServicesSection from '../components/OurServicesSection'

const Home = () => {
  return (
    <>
        <Header />
        <Showcase />
        <FeatureSection />
        <AboutCompanySection />
        <OurServicesSection />
        <Footer />
    </>
  )
}

export default Home
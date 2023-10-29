import React from 'react'
import Header from '@components/Header'
import Showcase from '@components/Showcase'
import FeatureSection from '../components/FeatureSection'
import AboutCompanySection from '../components/AboutCompanySection'
import OurServicesSection from '../components/OurServicesSection'
import WhyChooseUsSection from '../components/WhyChooseUsSection'
import ProjectAndCaseStudiesSection from '../components/ProjectAndCaseStudiesSection'
import MeetOurTeamSection from '../components/MeetOurTeamSection'
import TestimonialSection from '../components/TestimonialSection'
import ArticleAndNewsSection from '../components/ArticleAndNewsSection'
import NewsletterSection from '../components/NewsletterSection'
import FooterLinksSection from '../components/FooterLinksSection'
import FooterCRAndSMSection from '../components/FooterCRAndSMSection'

const Home = () => {
  return (
    <>
        <header>
          <Header />
        </header>
        <main>
          <Showcase />
          <FeatureSection />
          <AboutCompanySection />
          <OurServicesSection />
          <WhyChooseUsSection />
          <ProjectAndCaseStudiesSection />
          <MeetOurTeamSection />
          <TestimonialSection />
          <ArticleAndNewsSection />
          <NewsletterSection />
        </main>
        <footer>
          <FooterLinksSection />
          <FooterCRAndSMSection />
        </footer>
    </>
  )
}

export default Home
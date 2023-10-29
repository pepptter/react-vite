import React from 'react'
import Header from '@components/HeaderSection/Header'
import Showcase from '@components/ShowcaseSection/Showcase'
import FeatureSection from '../components/FeatureSection/FeatureSection'
import AboutCompanySection from '../components/AboutCompanySection/AboutCompanySection'
import OurServicesSection from '../components/OurServicesSection/OurServicesSection'
import WhyChooseUsSection from '../components/WhyChooseUsSection/WhyChooseUsSection'
import ProjectAndCaseStudiesSection from '../components/ProjectAndCaseStudiesSection/ProjectAndCaseStudiesSection'
import MeetOurTeamSection from '../components/MeetOurTeamSection/MeetOurTeamSection'
import TestimonialSection from '../components/TestimonialSection/TestimonialSection'
import ArticleAndNewsSection from '../components/ArticleAndNewsSection/ArticleAndNewsSection'
import NewsletterSection from '../components/NewsletterSection/NewsletterSection'
import FooterLinksSection from '../components/Footer/FooterLinksSection'
import FooterCRAndSMSection from '../components/Footer/FooterCRAndSMSection'

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
import React from 'react'
import Header from '../components/HeaderSection/Header'
import FooterCRAndSMSection from '../components/Footer/FooterCRAndSMSection'
import FooterLinksSection from '../components/Footer/FooterLinksSection'
import SubPageTitleSection from '../components/SubPageTitleSection/SubPageTitleSection'
import NewsletterSection from '../components/NewsletterSection/NewsletterSection'
import OurNewsAndArticlesSection from '../components/OurNewsAndArticlesSection/OurNewsAndArticlesSection'

const News = () => {
  return (
    <>
    <div className="wrapper">
        <header>
          <Header />
        </header>
        <main>
          <SubPageTitleSection title="News & Articles" />
          <OurNewsAndArticlesSection />
          <NewsletterSection />
        </main>
        <footer>
          <FooterLinksSection />
          <FooterCRAndSMSection />
        </footer>
      </div>
  </>
  )
}

export default News
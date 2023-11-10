import React from 'react'
import Header from '../components/HeaderSection/Header'
import FooterCRAndSMSection from '../components/Footer/FooterCRAndSMSection'
import FooterLinksSection from '../components/Footer/FooterLinksSection'
import SubPageTitleSection from '../components/SubPageTitleSection/SubPageTitleSection'
import NewsDetailsSection from '../components/NewsDetailsSection/NewsDetailsSection'

const NewsDetails = () => {
  return (
    <>
      <div className="wrapper">
          <header>
            <Header />
          </header>
          <main>
           <SubPageTitleSection  title="News & Articles" />
           <NewsDetailsSection />
          </main>
          <footer>
            <FooterLinksSection />
            <FooterCRAndSMSection />
          </footer>
        </div>
    </>
  )
}

export default NewsDetails
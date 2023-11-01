import React from 'react'
import Header from '../components/HeaderSection/Header'
import FooterCRAndSMSection from '../components/Footer/FooterCRAndSMSection'
import FooterLinksSection from '../components/Footer/FooterLinksSection'

const News = () => {
  return (
    <>
    <div className="wrapper">
        <header>
          <Header />
        </header>
        <main>
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
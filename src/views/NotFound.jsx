import React from 'react'
import FooterCRAndSMSection from '../components/Footer/FooterCRAndSMSection'
import FooterLinksSection from '../components/Footer/FooterLinksSection'
import NotFoundSection from '../components/NotFoundSection/NotFoundSection'

const NotFound = () => {
  return (
    <>
      <div className="wrapper">
          <header>
          </header>
          <main>
            <NotFoundSection />
          </main>
          <footer>
            <FooterLinksSection />
            <FooterCRAndSMSection />
          </footer>
        </div>
    </>
  )
}

export default NotFound
import React from 'react'
import Header from '../components/HeaderSection/Header'
import FooterCRAndSMSection from '../components/Footer/FooterCRAndSMSection'
import FooterLinksSection from '../components/Footer/FooterLinksSection'
import ContactInfoBoxesSection from '../components/ContactInfoBoxesSection/ContactInfoBoxesSection'
import LeaveUsAMessageSection from '../components/LeaveUsAMessageSection/LeaveUsAMessageSection'
import MapSection from '../components/MapSection/MapSection'
import SubPageTitleSection from '../components/SubPageTitleSection/SubPageTitleSection'

const Contact = () => {
  return (
    <>
    <div className="wrapper">
        <header>
          <Header />
        </header>
        <main>
          <SubPageTitleSection title="Let's Connect"/>
          <ContactInfoBoxesSection />
          <LeaveUsAMessageSection />
          <MapSection />
        </main>
        <footer>
          <FooterLinksSection />
          <FooterCRAndSMSection />
        </footer>
      </div>
  </>
  )
}

export default Contact
import React from 'react'
import Header from '../components/HeaderSection/Header'
import FooterCRAndSMSection from '../components/Footer/FooterCRAndSMSection'
import FooterLinksSection from '../components/Footer/FooterLinksSection'
import LetsConnectSection from '../components/LetsConnectSection/LetsConnectSection'
import ContactInfoBoxesSection from '../components/ContactInfoBoxesSection/ContactInfoBoxesSection'
import LeaveUsAMessageSection from '../components/LeaveUsAMessageSection/LeaveUsAMessageSection'
import MapSection from '../components/MapSection/MapSection'

const Contact = () => {
  return (
    <>
    <div className="wrapper">
        <header>
          <Header />
        </header>
        <main>
          <LetsConnectSection />
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
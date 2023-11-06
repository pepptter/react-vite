import React from 'react'

const ContactInfoBoxesSection = () => {
  return (
    <section className="contact-info-boxes-section">
            <div className="container">
                <div className="contact-boxes">
                    <div className="contact-information-bar">
                        <div className="content-box">
                          <i className="fa-solid fa-phone-volume"></i>
                          +46 (8) 121 470 50
                        </div>
                        <div className="content-box">
                          <i className="fa-solid fa-envelope"></i>
                          info@crito.com
                        </div>
                        <div className="content-box last">
                          <i className="fa-solid fa-location-dot"></i>
                          Sveavägen 31, 111 34 STOCKHOLM
                        </div>
                      </div>
                    <div className="contact-box">
                        <div className="icons">
                            <i className="border-round-icon fa-solid fa-location-dot"></i>
                        </div>
                        <div className="texts">
                            <h4>Visit us</h4>
                            <p>Sveavägen 31</p>
                            <p>111 34 STOCKHOLM</p>
                        </div>
                    </div>
                    <div className="contact-box">
                        <div className="icons">
                            <i className="border-round-icon fa-solid fa-phone-volume"></i>
                        </div>
                        <div className="texts">
                            <h4>Call us</h4>
                            <p>+46 (8) 121 470 50</p>
                            <p>+46 (8) 121 470 51</p>
                        </div>
                    </div>
                    <div className="contact-box">
                        <div className="icons">
                            <i className="border-round-icon fa-solid fa-envelope"></i>
                        </div>
                        <div className="texts">
                            <h4>Email us</h4>
                            <p>info@crito.com</p>
                            <p>support@crito.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default ContactInfoBoxesSection
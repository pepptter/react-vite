import React from 'react'
import img_lines_white_big_right from '@images/lines-white-big-right.svg'

const OurServicesSection = () => {
  return (
    <section className="our-services">

        <img className="background-lines linesize" src={img_lines_white_big_right} alt="" />

        <div className="container">
          <div className="section-title">
            <p>Our Services</p>
            <h2>We Provide The Best Service For Consulting</h2>
          </div>

          <div className="flexbox">
            <a href="#" className="flex-item">
              <div className="flex-underline">_____</div>
              <h3>Business Advice</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Officiis in nam possimus.
              </p>
              <div className="arrowbutton">
                <div className="button-round">
                  <i className="fa-solid fa-arrow-right"></i>
                </div>
              </div>
            </a>
            <a href="#" className="flex-item item-active">
              <div className="flex-underline">_____</div>
              <h3>Startup Business</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Officiis in nam possimus.
              </p>
              <div className="arrowbutton">
                <div className="button-round button-active">
                  <i className="fa-solid fa-arrow-right"></i>
                </div>
              </div>
            </a>
            <a href="#" className="flex-item">
              <div className="flex-underline">_____</div>
              <h3>Financial Advice</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Officiis in nam possimus.
              </p>
              <div className="arrowbutton">
                <div className="button-round">
                  <i className="fa-solid fa-arrow-right"></i>
                </div>
              </div>
            </a>
            <a href="#" className="flex-item">
              <div className="flex-underline">_____</div>
              <h3>Risk Management</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Officiis in nam possimus.
              </p>
              <div className="arrowbutton">
                <div className="button-round">
                  <i className="fa-solid fa-arrow-right"></i>
                </div>
              </div>
            </a>
          </div>
          <div className="center-content">
            <a href="#" className="btn-transparent browse-button">
              Browse Services<i className="fa-solid fa-square-up-right"></i>
            </a>
          </div>


        </div>

      </section>
  )
}

export default OurServicesSection
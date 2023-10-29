import './OurServiceSection.css'
import React from 'react'
import img_lines_white_big_right from '@images/lines-white-big-right.svg'
import ServiceBox from './ServiceBox'

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
              <ServiceBox title="Business Advice" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Officiis in nam possimus." url="/businessadvice"/>
              <ServiceBox title="Startup Business" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Officiis in nam possimus." url="/startupbusiness"/>
              <ServiceBox title="Financial Advice" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Officiis in nam possimus." url="/financialadvice"/>
              <ServiceBox className="flex-item item-active" title="Risk Management" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Officiis in nam possimus." url="/riskmanagement"/>
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
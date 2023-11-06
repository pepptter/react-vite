import './OurServicesSection.css'
import React from 'react'
import img_lines_white_big_right from '@images/lines-white-big-right.svg'
import ServiceBox from './ServiceBox'
import Button from '../Generics/Button'

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
              <ServiceBox title="Business Advice" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." url="/businessadvice"/>
              <ServiceBox title="Startup Business" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." url="/startupbusiness" classesArray={["item-active", "button-active"]}/>
              <ServiceBox title="Financial Advice" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." url="/financialadvice"/>
              <ServiceBox title="Risk Management" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." url="/riskmanagement"/>
          </div>
          <div className="center-content">
            <Button type="transparent" text="Browse Services" url="/services"/>
          </div>


        </div>

      </section>
  )
}

export default OurServicesSection
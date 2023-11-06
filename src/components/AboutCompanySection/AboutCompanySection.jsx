import './AboutCompanySection.css'
import React from 'react'
import img_samantha_image from '@images/samantha-image.jpg'
import Button from '../Generics/Button'
import { Link } from 'react-router-dom'

const AboutCompanySection = () => {
  return (
    <section className="about-company">
        <div className="container">
          <div className="founder">
            <img src={img_samantha_image} alt="picture of woman walking in office area" />
            <div className="founder-information-box">
              <div className="founder-text">
                <h5>Samantha Brown, <span className="founder-red">Founder</span></h5>
                <p className="founder-paragraph">"Lorem ipsum dolor sit amet consectetur adipisicing elit."</p>
              </div>
            </div>
          </div>
          <div className="about-company-box">
            <div className="section-title">
              <p>About Company</p>
              <h2>We Are Business Consulting & Credit Repair Experts</h2>
              <p className="paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam officiis quas assumenda esse obcaecati?
                Ex esse error voluptates iure vel totam eos.
              </p>
              <p className="paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Omnis esse quasi incidunt adipisci accusantium libero provident voluptate amet.
              </p>
            </div>
            <div className='d-flex'>
            <Button type="black" text="Learn More" url="/about"/>
            <div className='ms-3  flex-text'>
              <Button type="round" url="/introvideo" classesArray={["fa-solid", "fa-play"]}/>
              <Link to="/introvideo" className="flex-text">Intro Video</Link>
            </div>
            </div>
          </div>
        </div>

      </section>
  )
}

export default AboutCompanySection
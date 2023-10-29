import React from 'react'
import img_samantha_image from '@images/samantha-image.jpg'

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
            <a className="btn-black colorwhite" href="about.html">Learn More <i className="fa-solid fa-square-up-right"></i></a>
            <a href="introvideo.html" className="flex-text">
              <div className="btn-round-transparent">
                <i className="fa-solid fa-play">
                </i>
              </div>
              <span className="margin">Intro Video</span>

            </a>



          </div>
        </div>

      </section>
  )
}

export default AboutCompanySection
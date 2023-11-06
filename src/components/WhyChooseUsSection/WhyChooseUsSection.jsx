import './WhyChooseUsSection.css'
import React from 'react'
import img_why_choose_us from '@images/why-choose-us-picture.jpg'
import WhyChooseUsComponent from './WhyChooseUsComponent'

const WhyChooseUsSection = () => {
  return (
    <section className="why-choose-us">
        <div className="container">
          <div className="text-box">
            <div className="section-title">
              <p>Why Choose Us</p>
              <h2>Why We Are The Best Business Consulting Agency</h2>
            </div>
            <div className="flex-texts">
              <WhyChooseUsComponent title="Process Excellence" description="Lorem, ipsum dolor sit amet consectetur." url="/processexcellence" classesArray={["fa-regular", "fa-thumbs-up"]} />
              <WhyChooseUsComponent title="Strategic Planning" description="Lorem, ipsum dolor sit amet consectetur." url="/strategicplanning" classesArray={["fa-regular", "fa-sun"]} />
              <WhyChooseUsComponent title="Experience Design" description="Lorem, ipsum dolor sit amet consectetur." url="/experiencedesign" classesArray={["fa-solid", "fa-pen-clip"]} />
              <WhyChooseUsComponent title="Artificial Intelligence" description="Lorem, ipsum dolor sit amet consectetur." url="/artificialintelligence" classesArray={["fa-solid", "fa-gears"]} />
            </div>
          </div>
          <div className="image-area">
            <img className="why-choose-us-image" src={img_why_choose_us}
              alt="Two women sitting in an office looking at a tablet" />
            <div className="image-box"></div>
          </div>
        </div>
      </section>
  )
}

export default WhyChooseUsSection
import React from 'react'
import img_why_choose_us from '@images/why-choose-us-picture.jpg'

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
              <a href="#" className="flex-item">
                <div className="text-icon">
                  <i className="fa-regular fa-thumbs-up"></i>
                </div>
                <div className="text-item">
                  <h3>Process Excellence</h3>
                  <p>Lorem, ipsum dolor sit amet consectetur.</p>
                </div>
              </a>
              <a href="#" className="flex-item">
                <div className="text-icon">
                  <i className="fa-regular fa-sun"></i>
                </div>
                <div className="text-item">
                  <h3>Strategic Planning</h3>
                  <p>Lorem, ipsum dolor sit amet consectetur.</p>
                </div>
              </a>
              <a href="#" className="flex-item">
                <div className="text-icon">
                  <i className="fa-solid fa-pen-clip"></i>
                </div>
                <div className="text-item">
                  <h3>Experience Design</h3>
                  <p>Lorem, ipsum dolor sit amet consectetur.</p>
                </div>
              </a>
              <a href="#" className="flex-item">
                <div className="text-icon">
                  <i className="fa-solid fa-gears"></i>
                </div>
                <div className="text-item">
                  <h3>Artificial Intelligence</h3>
                  <p>Lorem, ipsum dolor sit amet consectetur.</p>
                </div>
              </a>
            </div>
          </div>
          <div className="image-area">
            <img className="why-choose-us-image" src={img_why_choose_us}
              alt="Two women sitting in an office looking at a tablet" />
            <div className="image-box">

            </div>
          </div>
        </div>

      </section>
  )
}

export default WhyChooseUsSection
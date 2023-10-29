import React from 'react'
import img_showcaseimage from '@images/showcaseimage.png'
import img_background_lines from '@images/background-lines.svg'

const Showcase = () => {
  return (
    <section className="showcase">
        <img className="background-lines" src={img_background_lines} alt="" />
        <div className="container">
          <div className="content">
            <h1>We Provide The Best Business Solutions</h1>
            <p>
              Establish your vision and value proposition and turn them into
              testable prototypes.
            </p>
            <a className="btn-yellow" href="consulting.html">Get Consulting <i className="fa-solid fa-square-up-right"></i></a>
            <a className="btn-transparent" href="services.html">Learn More <i className="fa-solid fa-square-up-right"></i></a>
          </div>
          <img src={img_showcaseimage} alt="image of a man in a suit with a tablet" />
        </div>
      </section>
  )
}

export default Showcase
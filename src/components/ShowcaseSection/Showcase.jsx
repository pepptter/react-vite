import './Showcase.css'
import React from 'react'
import img_showcaseimage from '@images/showcaseimage.png'
import img_background_lines from '@images/background-lines.svg'
import Button from '../Generics/Button'

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
            <Button type="yellow" text="Get Consulting" url="/consulting.html"/>
            <Button type="transparent"text="Learn More" url="/services.html" />
          </div>
          <img src={img_showcaseimage} alt="image of a man in a suit with a tablet" />
        </div>
      </section>
  )
}

export default Showcase
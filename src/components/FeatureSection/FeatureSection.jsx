import './FeatureSection.css'
import React from 'react'
import img_paperz_logo from '@images/paperz-logo.png'
import img_dorfus_logo from '@images/dorfus-logo.png'
import img_martino_logo from '@images/martino-logo.png'
import img_square_logo from '@images/square-logo.png'
import img_gobona_logo from '@images/gobona-logo.png'
import Button from '../Generics/Button'
import Feature from './Feature'

const FeatureSection = () => {
  return (
    <section className="features">
        <div className="logotypes">
          <img src={img_paperz_logo} alt="paperz logotype" />
          <img src={img_dorfus_logo} alt="dorfus logotype" />
          <img src={img_martino_logo} alt="martino logotype" />
          <img src={img_square_logo} alt="square logotype" />
          <img src={img_gobona_logo} alt="gobona logotype" />
        </div>

        <div className="features-section">
          <div className="container">
            <div className="section-title">
              <p>Features</p>
              <h2 className="mb-5">Our Accounting is trusted by thousand of companies</h2>
              <Button type="yellow" text="Learn More" url="/features"/>
            </div>
            <div className="features-grid">
              <Feature title="Business Advice" description="Lorem ipsum dolor sit amet consectetur adipisicing elit." url="/businessadvice" classesArray={["fa-regular", "fa-handshake", "fa-2xl", "m-between-icon-text"]} />
              <Feature title="Startup Business" description="Lorem ipsum dolor sit amet consectetur adipisicing elit." url="/startup" classesArray={["fa-regular", "fa-lightbulb", "fa-2xl", "m-between-icon-text"]} />
              <Feature title="Financial Advice" description="Lorem ipsum dolor sit amet consectetur adipisicing elit." url="/financialadvice" classesArray={["fa-solid", "fa-chart-line", "fa-2xl", "m-between-icon-text"]} />
              <Feature title="Risk Management" description="Lorem ipsum dolor sit amet consectetur adipisicing elit." url="/riskmanagement" classesArray={["fa-solid", "fa-cubes", "fa-2xl", "m-between-icon-text"]} />
            </div>
            <div className="gapflex"></div>
          </div>
        </div>
      </section>
  )
}

export default FeatureSection
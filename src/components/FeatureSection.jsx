import React from 'react'
import img_paperz_logo from '@images/paperz-logo.png'
import img_dorfus_logo from '@images/dorfus-logo.png'
import img_martino_logo from '@images/martino-logo.png'
import img_square_logo from '@images/square-logo.png'
import img_gobona_logo from '@images/gobona-logo.png'

const FeatureSection = () => {
  return (
    <section className="features">
        <div className="logotypes">
          <img className="flex-item" src={img_paperz_logo} alt="paperz logotype" />
          <img className="flex-item" src={img_dorfus_logo} alt="dorfus logotype" />
          <img className="flex-item" src={img_martino_logo} alt="martino logotype" />
          <img className="flex-item" src={img_square_logo} alt="square logotype" />
          <img className="flex-item" src={img_gobona_logo} alt="gobona logotype" />
        </div>

        <div className="features-section">
          <div className="container">
            <div className="section-title">
              <p>Features</p>
              <h2>Our Accounting is trusted by thousand of companies</h2>
              <button className="btn-yellow btn-learn-more">
                Learn More<i className="fa-solid fa-square-up-right"></i>
              </button>
            </div>
            <div className="features-grid">
              <a href="#" className="flex-item">
                <i className="fa-regular fa-handshake fa-2xl m-between-icon-text"></i>
                <h3>Business Advice</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </a>
              <a href="#" className="flex-item">
                <i className="fa-regular fa-lightbulb fa-2xl m-between-icon-text"></i>
                <h3>Startup Business</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </a>
              <a href="#" className="flex-item">
                <i className="fa-solid fa-chart-line fa-2xl m-between-icon-text"></i>
                <h3>Financial Advice</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </a>
              <a href="#" className="flex-item">
                <i className="fa-solid fa-cubes fa-2xl m-between-icon-text"></i>
                <h3>Risk Management</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </a>
            </div>
            <div className="gapflex"></div>
          </div>
        </div>
      </section>
  )
}

export default FeatureSection
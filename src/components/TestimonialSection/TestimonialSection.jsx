import './TestimonialSection.css'
import React from 'react'
import img_Cassandra_Warren from '@images/Cassandra-Warren.png'
import img_Amanda_Tulling from '@images/Amanda-Tulling.png'
import img_Jack_Mcdogglas from '@images/Jack-McDogglas.png'

const TestimonialSection = () => {
  return (
<section className="testimonial">
        <div className="container-fluid">
          <div className="section-title">
            <p>Testimonial</p>
            <h2>What Our Client Says</h2>
          </div>
          <div className="testimonial-box">
            <div className="client-text">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <p className="review-text">"Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Laudantium libero, ad dignissimos velit qui,
                dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
              <div className="rowed">
                <img src={img_Cassandra_Warren} alt="Picture of Cassandra Warren"/>
                <div className="client-information">
                  <h3>Cassandra Warren</h3>
                  <p>Business Manager, Dorfus</p>
                </div>
              </div>
            </div>
            <div className="client-text">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <p className="review-text">"Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Laudantium libero, ad dignissimos velit qui,
                dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
              <div className="rowed">
                <img src={img_Amanda_Tulling} alt="Picture of Amanda Tulling"/>
                <div className="client-information">
                  <h3>Amanda Tulling</h3>
                  <p>Senior Developer, Square</p>
                </div>
              </div>
            </div>
            <div className="client-text">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <p className="review-text">"Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Laudantium libero, ad dignissimos velit qui,
                dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
              <div className="rowed">
                <img src={img_Jack_Mcdogglas} alt="Picture of Jack McDogglas"/>
                <div className="client-information">
                  <h3>Jack McDogglas</h3>
                  <p>Key Account Manager, Gobona</p>
                </div>
              </div>
            </div>

          </div>
          <div className="all-reviews">
            <a href="reviews.html" className="btn-black">
              All Reviews <i className="fa-solid fa-square-up-right"></i>
            </a>
          </div>

        </div>
      </section>
  )
}

export default TestimonialSection
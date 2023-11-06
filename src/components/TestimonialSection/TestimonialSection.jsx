import './TestimonialSection.css'
import React from 'react'
import img_Cassandra_Warren from '@images/Cassandra-Warren.png'
import img_Amanda_Tulling from '@images/Amanda-Tulling.png'
import img_Jack_Mcdogglas from '@images/Jack-McDogglas.png'
import Testimonial from './Testimonial'
import Button from '../Generics/Button'

const TestimonialSection = () => {
  return (
<section className="testimonial">
        <div className="container-fluid">
          <div className="section-title">
            <p>Testimonial</p>
            <h2>What Our Client Says</h2>
          </div>
          <div className="testimonial-box">
            <Testimonial text="Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Laudantium libero, ad dignissimos velit qui,
                dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"
                name="Cassandra Warren" description="Business Manager, Dorfus" image={img_Cassandra_Warren} altText="Picture of Cassandra Warren" />
            <Testimonial text="Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Laudantium libero, ad dignissimos velit qui,
                dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"
                name="Amanda Tulling" description="Senior Developer, Square" image={img_Amanda_Tulling} altText="Picture of Amanda Tulling" />
            <Testimonial text="Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Laudantium libero, ad dignissimos velit qui,
                dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"
                name="Jack Mcdogglas" description="Key Account Manager, Gobona" image={img_Jack_Mcdogglas} altText="Picture of Jack Mcdogglas" />
          </div>
          <div className="all-reviews">
            <Button type="black" text="All Reviews" url="reviews" />
          </div>

        </div>
      </section>
  )
}

export default TestimonialSection
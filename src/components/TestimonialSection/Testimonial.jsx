import React from 'react'

const Testimonial = ({text, name, description, image, altText}) => {
  return (
    <div className="client-text">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <p className="review-text">{text}</p>
              <div className="rowed">
                <img src={image} alt={altText}/>
                <div className="client-information">
                  <h3>{name}</h3>
                  <p>{description}</p>
                </div>
              </div>
    </div>
  )
}

export default Testimonial
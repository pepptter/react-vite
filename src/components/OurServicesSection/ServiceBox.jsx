import React from 'react'
import { Link } from 'react-router-dom'
const ServiceBox = ({title, description, url, classesArray = []}) => {
  return (
  <Link to={url} className={`flex-item ${classesArray[0]}`}>
    <div className="flex-underline">_____</div>
    <h3>{title}</h3>
    <p>{description}</p>
    <div className="arrowbutton">
      <div className={`button-round ${classesArray[1]}`}>
        <i className="fa-solid fa-arrow-right"></i>
      </div>
    </div>
  </Link>
  )
}

export default ServiceBox
import React from 'react'
import { Link } from 'react-router-dom'
const WhyChooseUsComponent = ({title, description, url, classesArray = []}) => {
  return (
    <Link to={url} className="flex-item">
        <div className="text-icon">
            <i className={`${classesArray.join(' ')}`}></i>
        </div>
        <div className="text-item">
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    </Link>  )
}

export default WhyChooseUsComponent
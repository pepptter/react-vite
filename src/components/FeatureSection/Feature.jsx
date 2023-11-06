import React from 'react'
import { Link } from 'react-router-dom'
const Feature = ({title, description, url, classesArray = []}) => {
  return (
    <Link to={url}>
        <i className={`${classesArray.join(' ')}`}></i>
        <h3>{title}</h3>
        <p>{description}</p>
    </Link>
  )
}

export default Feature
import React from 'react'
import { Link } from 'react-router-dom'

const ProjectComponent = ({title, url, image, altText}) => {
  return (
    <Link className="project" to={url}>
    <img src={image} alt={altText} />
    <h3>{title}</h3>
    <div className="readmore">
      Read more <i className="fa-solid fa-square-up-right"></i>
    </div>
  </Link>  )
}

export default ProjectComponent
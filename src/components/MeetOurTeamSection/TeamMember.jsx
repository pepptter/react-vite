import React from 'react'
import { Link } from 'react-router-dom'

const TeamMember = ({title, description, url, image, altText}) => {
  return (
    <Link to={url} className='text-decoration'>
        <img className="image-text-margin" src={image} alt={altText}/>
        <h3>{title}</h3>
        <p>{description}</p>
     </Link>
  )
}

export default TeamMember
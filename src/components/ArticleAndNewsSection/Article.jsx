import React from 'react'
import { Link } from 'react-router-dom'

const Article = ({title, text, description, url, date, month, image, altText }) => {
  return (
    <Link to={url} className="article-item">
              <img src={image} alt={altText}/>
              <div className="date-box">
                <h3>{date}</h3>
                <p>{month}</p>
              </div>
              <div className="article-texts">
                <p>{title}</p>
                <h3>{text}</h3>
                <p>{description}</p>
              </div>
            </Link >
  )
}

export default Article
import React from 'react'
import { Link } from 'react-router-dom'

const FooterLinksComponent = ({title, text1, text2, text3, text4, url1, url2, url3, url4 }) => {
  return (
    <div className="grid-item">
          <h3>{title}</h3>
          <Link to={url1}>{text1}</Link>
          <Link to={url2}>{text2}</Link>
          <Link to={url3}>{text3}</Link>
          <Link to={url4}>{text4}</Link>
    </div>
    )
}
export default FooterLinksComponent
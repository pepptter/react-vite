import './FooterLinksSection.css'
import React from 'react'
import img_background_lines_white_right from '@images/background-lines-white-right.svg'
import crito_logo_white from '@images/logotype-white.svg'

import { NavLink } from 'react-router-dom'
const FooterLinksSection = () => {
  return (
    <section className="footer-links">
    <img className="background-lines" src={img_background_lines_white_right} alt=""/>
    <div className="container">
      <div className="logo-and-text">
        <NavLink to="/">
          <img src={crito_logo_white} alt="Crito Logotype"/>
        </NavLink>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Placeat obcaecati voluptas voluptates!
          Voluptates laborum nam ratione minus necessitatibus, iure praesentium.</p>
      </div>
      <div className="links-grid">
        <div className="grid-item">
          <h3>Company</h3>
          <a href="about.html" target="_blank">About</a>
          <a href="features.html" target="_blank">Features</a>
          <a href="works.html" target="_blank">Works</a>
          <a href="career.html" target="_blank">Career</a>
        </div>
        <div className="grid-item">
          <h3>Help</h3>
          <a href="customer-support.html" target="_blank">Customer Support</a>
          <a href="delivery-details.html" target="_blank">Delivery Details</a>
          <a href="terms-and-conditions.html" target="_blank">Terms & Conditions</a>
          <a href="privacy-policy.html" target="_blank">Privacy Policy</a>
        </div>
        <div className="grid-item">
          <h3>Resources</h3>
          <a href="free-ebooks.html" target="_blank">Free eBooks</a>
          <a href="development-tutorial.html" target="_blank">Development Tutorial</a>
          <a href="how-to-blog.html" target="_blank">How To - Blog</a>
          <a href="https://youtube.com/resources-playlist" target="_blank">Youtube Playlist</a>
        </div>
        <div className="grid-item right-align">
          <h3>Link</h3>
          <a href="free-ebooks.html" target="_blank">Free eBooks</a>
          <a href="development-tutorial.html" target="_blank">Development Tutorial</a>
          <a href="how-to-blog.html" target="_blank">How To - Blog</a>
          <a href="https://youtube.com/resources-playlist" target="_blank">Youtube Playlist</a>
        </div>
      </div>
    </div>
  </section>
  )
}

export default FooterLinksSection
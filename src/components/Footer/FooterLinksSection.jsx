import './FooterLinksSection.css'
import React from 'react'
import img_background_lines_white_right from '@images/background-lines-white-right.svg'
import crito_logo_white from '@images/logotype-white.svg'

import { NavLink } from 'react-router-dom'
import FooterLinksComponent from './FooterLinksComponent'
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
        <FooterLinksComponent title="Company" text1="About" text2="Features" text3="Works" text4="Career" url1="/about" url2="/features" url3="/works" url4="/career" />
        <FooterLinksComponent title="Help" text1="Customer Support" text2="Delivery Details" text3="Terms & Conditions" text4="Privacy Policy" url1="/help/support" url2="/help/deliverydetails" url3="/help/termsandconditions" url4="/help/privacypolicy" />
        <FooterLinksComponent title="Resources" text1="Free eBooks" text2="Development Tutorial" text3="How to - Blog" text4="Youtube Playlist" url1="/resources/ebooks" url2="/resources/developmenttutorial" url3="/resources/howto-blog" url4="/resources/youtube-playlist" />
        <FooterLinksComponent title="Links" text1="Free eBooks" text2="Development Tutorial" text3="How to - Blog" text4="Youtube Playlist" url1="/links/ebooks" url2="/links/developmenttutorial" url3="/links/howto-blog" url4="/links/youtube-playlist" />
      </div>
    </div>
  </section>
  )
}

export default FooterLinksSection
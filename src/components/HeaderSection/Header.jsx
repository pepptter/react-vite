import React from "react";
import logotype from "@images/logotype.svg";
import './Header.css'
import Button from "../Generics/Button";
import { NavLink, Link } from 'react-router-dom'
import MobileMenu from "./MobileMenu";

const Header = () => {
  return (
    <div>
      <header>
        <div className="container">
          <div className="btn-menu-bars">
            <MobileMenu />
          </div>
          <div className="logotype">
            <Link to="/">
              <img src={logotype} alt="Crito Logotype" />
            </Link>
            </div>
          <div className="contact-information-bar">
            <div className="content-box">
              <i className="fa-solid fa-phone-volume"></i>
              +46 (8) 121 470 50
            </div>
            <div className="content-box">
              <i className="fa-solid fa-envelope"></i>
              info@crito.com
            </div>
            <div className="content-box last">
              <i className="fa-solid fa-location-dot"></i>
              Sveavägen 31, 111 34 STOCKHOLM
            </div>
          </div>
          <div className="social-media-bar">
            <a href="https://facebook.com/" target="_blank">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="https://twitter.com/" target="_blank">
              <i className="fa-brands fa-square-x-twitter"></i>
            </a>
            <a href="https://instagram.com/" target="_blank">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://linkedin.com/" target="_blank">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
          <div className="menu pt-4">
            <nav>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/services">Services</NavLink>
              <NavLink to="/news">News</NavLink>
              <NavLink to="/contact">Contact</NavLink>
              </nav>
            <Button type="yellow" text="Login" url="/login"/>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;

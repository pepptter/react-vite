import React from 'react';
import './LetsConnectSection.css'
import { Link } from 'react-router-dom';
import background_lines from '@images/background-lines.svg'

const LetsConnectSection = () => {
  return (
    <section className="lets-connect-section">
            <img src={background_lines} alt="" />
            <div className="container">
                <div className="menu">
                    <Link to="/">Home</Link>
                    <Link to="/contact">Contact</Link>
                </div>
                <div className="lets-connect-text">
                    <h2>Let's Connect</h2>
                </div>
            </div>

        </section>
  )
}

export default LetsConnectSection
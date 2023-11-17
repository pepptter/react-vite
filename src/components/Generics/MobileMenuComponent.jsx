import React from 'react'
import { NavLink } from 'react-router-dom'
import './MobileMenuComponent.css'

const MobileMenuComponent = () => {
  return (
    <div>
        <nav className='menu-open'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/news">News</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </nav>
    </div>
  )
}

export default MobileMenuComponent
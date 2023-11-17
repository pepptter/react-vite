import React, { useState } from 'react'
import MobileMenuComponent from '../Generics/MobileMenuComponent'

const MobileMenu = () => {
    const [menuOpen, setMenuOpen] = useState(false)
  return (
    <>
        {menuOpen ? (<MobileMenuComponent />):(<></>) }
        <div className="menu-div"><div></div>
            <button onClick={() => setMenuOpen( !menuOpen)} className='btn-menu'>
                {menuOpen ? (<i className="fa-solid fa-x"></i>): (<i className="fa-solid fa-bars-staggered"></i>)}
            </button>
        </div>
    </>
  )
}

export default MobileMenu
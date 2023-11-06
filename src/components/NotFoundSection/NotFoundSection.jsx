import React from 'react'
import './NotFoundSection.css'
import { NavLink, Link } from 'react-router-dom'
import Button from '../Generics/Button'

const NotFound = () => {
  return (
    <>
      <div className='text-placement'>
        <h1 className='mb-3'>Page Not Found!</h1>
        <h5 className='mb-5'>Wrong URL?</h5>
          <Button type="yellow" text="Go Back Home" url="/"/>
      </div>
    </>
  )
}

export default NotFound
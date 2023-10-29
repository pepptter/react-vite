import React from 'react'
import img_background_wavy_lines from '@images/background-wavy-lines.svg'

const NewsletterSection = () => {
  return (
    <section className="newsletter">
    <img className="background-wavy-lines" src={img_background_wavy_lines} alt="" />
    <div className="container">
      <h2 className="mb-3">Get News Updates By Signup</h2>
      <form>
        <input className="mb-3" type="email" name="newsEmailAdress" placeholder="username@domain.com" />
        <button type="submit" className="btn-yellow">
          Subscribe<i className="fa-solid fa-square-up-right"></i>
        </button>
      </form>
    </div>
  </section>
  )
}

export default NewsletterSection
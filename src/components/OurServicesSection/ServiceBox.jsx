import React from 'react'

const ServiceBox = (title, text, url) => {
  return (
    <>
   <a href={url} className="flex-item">
    <div className="flex-underline">_____</div>
    <h3>{title}</h3>
    <p>
      {text}
    </p>
    <div className="arrowbutton">
      <div className="button-round">
        <i className="fa-solid fa-arrow-right"></i>
      </div>
    </div>
  </a>
  </>
  )
}

export default ServiceBox
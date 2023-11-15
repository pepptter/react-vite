import React from 'react'

const LogoComponent = ({image, altText}) => {
  return (
    <div>
        <img src={image} alt={altText} />
    </div>
  )
}

export default LogoComponent
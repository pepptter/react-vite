import React from 'react'

const Button = ({text, url}) => {
  return (
        <a className="btn-yellow" href={url}>
            {text}
            <i className="fa-solid fa-square-up-right"></i>
        </a>

    )
}

export default Button
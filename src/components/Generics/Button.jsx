import React from 'react'

const Button = ({type, text, url, classes}) => {


    const getButtonType = () => {
        switch(type) {
            case 'yellow':
                return 'btn-yellow';
            case 'transparent':
                return 'btn-transparent';
            case 'round':
                return 'btn-round-transparent';
            default:
                return 'btn-black';
        }


    }
  return (
        <a className={getButtonType()} href={url}>
            {text}
            <i className="fa-solid fa-square-up-right"></i>
        </a>

    )
}

export default Button
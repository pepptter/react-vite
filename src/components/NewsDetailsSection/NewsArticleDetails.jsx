import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom';

const formatArticleDate = (dateString) => {
    const date = new Date(dateString);
    const month = date.toLocaleString('default', { month: 'short' });
    const day = date.getDate();
    const year = date.getFullYear();
    return { month, day, year };
};

const NewsArticleDetails = ({ articles }) => {
    const { month, day, year } = formatArticleDate(articles.published);

    const scrollPosRef = useRef(null);

    useEffect(() => {
        if (scrollPosRef.current) {
            scrollPosRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }, []);
  return (
    <div>
        <div className='text-area'>
            <h1>{articles.title}</h1>
            <div className="date-category-name-box">
                <p>{month} {day} {year}</p>
                <i className="fa-solid fa-circle dots"></i>
                <p>{articles.category}</p>
                <i className="fa-solid fa-circle dots"></i>
                <p>{articles.author}</p>
            </div>
            <div className="content-area">
                <img src={articles.imageUrl} alt="" />
                <p>{articles.content}</p>
                <p>{articles.content}</p>
                <p>{articles.content}</p>
                <p>{articles.content}</p>
                <h5 className='quote-text'><i className="fa-solid fa-quote-right fa-flip-horizontal fa-2xl me-4 mb-4"></i>{articles.content}</h5>
                <p>{articles.content}</p>
            </div>
        </div>
        <div className="category-buttons">
        <Link to="/digitalization">Digitalization</Link>
        <Link to="/school">School</Link>
        <Link to="/it">IT</Link>
        <Link to="/design">Design</Link>
        <Link to="/work">Work</Link>
        <Link to="/tech">Tech</Link>
        </div>

    </div>
  )
}

export default NewsArticleDetails
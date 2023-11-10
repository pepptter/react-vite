import React from 'react';
import { Link } from 'react-router-dom';

const formatArticleDate = (dateString) => {
    const date = new Date(dateString);
    const month = date.toLocaleString('default', { month: 'short' });
    const day = date.getDate();
    return { month, day };
};

const NewsArticle = ({ article }) => {
    const { month, day } = formatArticleDate(article.published);

    return (
        <Link key={article.id} to={`/news/${article.id}`} className="article-item">
            <div className="date-box">
                <h3>{day}</h3>
                <p>{month}</p>
            </div>
            <img src={article.imageUrl} alt="" />
            <div className="article-texts">
                <p>{article.category}</p>
                <h3>{article.title}</h3>
                <p>{article.content}</p>
            </div>
        </Link>
    );
};

export default NewsArticle;

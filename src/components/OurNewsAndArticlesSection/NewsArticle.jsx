import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const formatArticleDate = (dateString) => {
  const date = new Date(dateString);
  const month = date.toLocaleString('default', { month: 'short' });
  const day = date.getDate();
  return { month, day };
};

const NewsArticle = ({ article }) => {
  const location = useLocation();


  useEffect(() => {
    const pathname = location.pathname;
    const articleId = pathname.replace('/news/', '');
    console.log(articleId)

    if (articleId === article.id) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  }, [location.pathname, article.id]);

  if (!article) {
    return (
      <div className="article-item">
        <p>Loading...</p>
      </div>
    );
  }

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
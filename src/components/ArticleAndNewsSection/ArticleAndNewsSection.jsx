import './ArticleAndNewsSection.css'
import React from 'react'
import Button from '../Generics/Button'
import { useArticleContext } from '../../Contexts/ArticleContext'
import NewsArticle from '../OurNewsAndArticlesSection/NewsArticle'



const ArticleAndNewsSection = () => {
  const { articles } = useArticleContext()

  return (
    <div>
      <section className={`article-and-news`}>
        <div className="container">
          <div className="section-header">
            <div className="section-title">
              <p>Article & News</p>
              <h2>Get Every Single Articles & News</h2>
            </div>
            <div className="browse-button">
              <Button type="transparent" text="Browse Articles" url="/news"/>
            </div>
          </div>
          <div className="articles">
            {articles.length > 0 ? (
              <div>
                <div className='articles-grid'>
                  {articles.slice(0, 3).map((article) => (
                    <NewsArticle key={article.id} article={article} />
                  ))}
                </div>
              </div>
            ) : (
             <p>No articles available</p>
            )}
            </div>
          <div className="dotline">
            <i className="fa-solid fa-circle active"></i>
            <i className="fa-solid fa-circle"></i>
            <i className="fa-solid fa-circle"></i>
            <i className="fa-solid fa-circle"></i>
            <i className="fa-solid fa-circle"></i>
          </div>
        </div>


      </section>
      </div>
  )
}

export default ArticleAndNewsSection
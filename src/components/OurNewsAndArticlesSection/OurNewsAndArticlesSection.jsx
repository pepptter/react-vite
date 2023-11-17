import React from 'react'
import NewsArticle from './NewsArticle'
import './OurNewsAndArticlesSection.css'
import { NavLink } from 'react-router-dom'
import { useArticleContext } from '../../Contexts/ArticleContext'




const OurNewsAndArticlesSection = () => {
    const { articles } = useArticleContext()

    return (
        <section className='OurNewsSection'>
            <div className="container">
                <div className="section-title">
                    <h2>Our News & Articles</h2>
                </div>
                {articles.length > 0 ? (
                    <div>
                        <div className='articles-grid'>
                        {articles.map((article) => (
                            <NewsArticle key={article.id} article={article} />
                        ))}
                        </div>
                    <div className="pages-bar">
                    <NavLink to="/news/previouspage" className="format-lt-gt">&lt;</NavLink>
                    <NavLink className="active" to="/News/1">1</NavLink>
                    <NavLink to="/news/2">2</NavLink>
                    <NavLink to="/news/3">3</NavLink>
                    <NavLink to="/news/page">...</NavLink>
                    <NavLink to="/news/9">9</NavLink>
                    <NavLink to="/news/nextpage" className="format-lt-gt">&gt;</NavLink>
                    </div>
                </div>
                ) : (
                <p>No articles available</p>
                )}
            </div>
        </section>
        )
}

export default OurNewsAndArticlesSection
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
                    <NavLink to="/News/previouspage" className="format-lt-gt">&lt;</NavLink>
                    <NavLink className="active" to="/News/1">1</NavLink>
                    <NavLink to="/News/2">2</NavLink>
                    <NavLink to="/News/3">3</NavLink>
                    <NavLink to="/News/page">...</NavLink>
                    <NavLink to="/News/9">9</NavLink>
                    <NavLink to="/News/nextpage" className="format-lt-gt">&gt;</NavLink>
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
import React, { useEffect, useState } from 'react'
import NewsArticle from './NewsArticle'
import './OurNewsAndArticlesSection.css'
import { NavLink, Link } from 'react-router-dom'




const OurNewsAndArticlesSection = () => {
    const [articles, setArticles] = useState([])
    
    useEffect(() => {
        const getArticles = async () => {
            try {
                const response = await fetch('https://win23-assignment.azurewebsites.net/api/articles')
                const data = await response.json([])
                setArticles(data)
                console.log(data)
            }
            catch (error) {
                console.error('Error fetching data', error)
            }
        }
        getArticles()
    }, [])

    return (
        <section className='OurNewsSection'>
            <div className="container">
                <div className="section-title">
                    <h2>Our News & Articles</h2>
                </div>
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
        </section>
        )
}

export default OurNewsAndArticlesSection
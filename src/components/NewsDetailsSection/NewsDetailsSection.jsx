import React, { useEffect } from 'react'
import './NewsDetailsSection.css'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import NewsArticle from '../NewsDetailsSection/NewsArticle'
import ArticleAndNewsSection from '../ArticleAndNewsSection/ArticleAndNewsSection'


const NewsDetailsSection = () => {
    const [showArticle, setShowArticle] = useState({})
    const { id }= useParams()

    useEffect(() => {
        getArticle()
    }, [])
    const getArticle = async () => {
        if (id !== undefined) {
            const result = await fetch(`https://win23-assignment.azurewebsites.net/api/articles/${id}`)

            if (result.status === 200)
            {
                setShowArticle(await result.json())
            }
        }
    }
     return (
    <div >

        <div className="container">
            <div className='grid-layout'>
                <NewsArticle articles={showArticle} />
                <div className='right-section'>
                    <div className="search-bar">
                    </div>
                    <div className="recent-posts">
                    </div>
                    <div className="categories">
                    </div>
                </div>
            </div>

        </div>
        <div className='grayish'>
                <ArticleAndNewsSection />
        </div>
    </div>

    )
}

export default NewsDetailsSection
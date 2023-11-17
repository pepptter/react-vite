import React, { useEffect } from 'react'
import './NewsDetailsSection.css'
import { useParams } from 'react-router-dom'
import NewsArticleDetails from './NewsArticleDetails'
import ArticleAndNewsSection from '../ArticleAndNewsSection/ArticleAndNewsSection'
import { useArticleContext } from '../../Contexts/ArticleContext'


const NewsDetailsSection = () => {
    const { article, fetchArticle, clearArticle } = useArticleContext()
    const { id }= useParams()

    useEffect(() => {
        getArticle(id)
        return () => clearArticle()
      }, [id])

      const getArticle = async () => {
        if (id !== undefined) {
          fetchArticle(id);
        }
      }
      useEffect(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });

    }, [id]);

     return (
    <div>
        <div className="container">
            <div className='grid-layout'>
                {article ? (
                        <NewsArticleDetails articles={article} />
                ) : (
                    <p>Loading article...</p>
                )}
                <div className='right-section'>
                    <div className="search-bar">
                        <input type="text" placeholder="Search..." className="search-input"/>
                    </div>
                    <div className="right-boxes underlines">
                        <h3 className='underlined-text'>Recent Posts</h3>
                        <a href="">
                            <h5>How To Blow Through Capital At An Incredible Rate</h5>
                            <p>Jan 14, 2020</p>
                        </a>
                        <a href="">
                            <h5>Design Studios That Everyone Should Know About? </h5>
                            <p>Jan 14, 2020</p>
                        </a>
                        <a href="">
                            <h5>How did we get 1M+ visitors in 30 days without anything!</h5>
                            <p>Jan 14, 2020</p>
                        </a>
                        <a href="">
                            <h5>Figma On Figma: How We Built Our Website Design System</h5>
                            <p>Jan 14, 2020</p>
                        </a>
                    </div>
                    <div className="right-boxes  faded-text">
                        <h3 className='underlined-text'>Categories</h3>
                        <a href=""><p>Technology - <span className='posts-color'>20 Posts</span></p></a>
                        <a href=""><p>Freelancing - <span className='posts-color'>07 Posts</span></p></a>
                        <a href=""><p>Writing - <span className='posts-color'>16 Posts</span></p></a>
                        <a href=""><p>Marketing - <span className='posts-color'>11 Posts</span></p></a>
                        <a href=""><p>Business - <span className='posts-color'>35 Posts</span></p></a>
                        <a href=""><p>Education - <span className='posts-color'>14 Posts</span></p></a>
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
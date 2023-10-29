import './ArticleAndNewsSection.css'
import React from 'react'
import img_mar_25 from '@images/mar-25-image.png'
import img_mar_17 from '@images/mar-17-image.png'
import img_mar_13 from '@images/mar-13-image.png'

const ArticleAndNewsSection = () => {
  return (
<section className="article-and-news">
        <div className="container">
          <div className="section-header">
            <div className="section-title">
              <p>Article & News</p>
              <h2>Get Every Single Articles & News</h2>
            </div>
            <div className="browse-button">
              <a href="#" className="btn-transparent">
                Browse Articles<i className="fa-solid fa-square-up-right"></i>
              </a>
            </div>
          </div>
          <div className="articles">
            <a href="article.html" className="article-item">
              <img src={img_mar_25} alt="Woman sitting in a classroom"/>
              <div className="date-box">
                <h3>25</h3>
                <p>Mar</p>
              </div>
              <div className="article-texts">
                <p>Business</p>
                <h3>How To Use Digitalization In The Classroom</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Architecto sed hic libero.</p>
              </div>
            </a >
            <a href="article.html" className="article-item">
              <img src={img_mar_17} alt="A paper with texts about examples, capabilities and limitation"/>
              <div className="date-box">
                <h3>17</h3>
                <p>Mar</p>
              </div>
              <div className="article-texts">
                <p>Business</p>
                <h3>How To Implement Chat GPT In Your Projects</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Architecto sed hic libero.</p>
              </div>
            </a>
            <a href="article.html" className="article-item">
              <img src={img_mar_13} alt="Picture with a smartphone and two books about javascript and css"/>
              <div className="date-box">
                <h3>13</h3>
                <p>Mar</p>
              </div>
              <div className="article-texts">
                <p>Business</p>
                <h3>The Guide To Support Modern CSS Design</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Architecto sed hic libero.</p>
              </div>
            </a>
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
  )
}

export default ArticleAndNewsSection
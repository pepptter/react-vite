import './ArticleAndNewsSection.css'
import React from 'react'
import img_mar_25 from '@images/mar-25-image.png'
import img_mar_17 from '@images/mar-17-image.png'
import img_mar_13 from '@images/mar-13-image.png'
import Button from '../Generics/Button'
import Article from './Article'

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
              <Button type="transparent" text="Browse Articles" url="/articles"/>
            </div>
          </div>
          <div className="articles">
            <Article title="Business" text="How To Use Digitalization In The Classroom" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Architecto sed hic libero." url="/article" date="25" month="Mar" image={img_mar_25} altText="Woman sitting in a classroom" />
            <Article title="Business" text="How To Implement Chat GPT In Your Projects" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Architecto sed hic libero." url="/article" date="17" month="Mar" image={img_mar_17} altText="A paper with texts about examples, capabilities and limitation" />
            <Article title="Business" text="The Guide To Support Modern CSS Design" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Architecto sed hic libero." url="/article" date="13" month="Mar" image={img_mar_13} altText="Picture with a smartphone and two books about javascript and css" />
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
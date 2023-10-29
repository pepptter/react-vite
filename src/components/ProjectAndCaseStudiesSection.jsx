import React from 'react'
import img_article_image_1 from '@images/article-image-1.png'
import img_article_image_2 from '@images/article-image-2.png'
import img_article_image_3 from '@images/article-image-3.png'
import img_article_image_4 from '@images/article-image-4.png'

const ProjectAndCaseStudiesSection = () => {
  return (
<section className="project-and-cases">
        <div className="container">
          <div className="section-title">
            <p>Project & Case Studies</p>
            <h2>Let’s Looks Our Global Projects</h2>
          </div>
          <div className="project-and-cases">
            <a className="project" href="#">
              <img src={img_article_image_1} alt="A mans hands reading a business newspaper" />
              <h3>Grow your Business</h3>
              <div className="readmore">
                Read more <i className="fa-solid fa-square-up-right"></i>
              </div>
            </a>
            <a className="project" href="#">
              <img src={img_article_image_2} alt="Pink Apple Products on a desk" />
              <h3>Why your client needs a responsive website</h3>
              <div className="readmore">
                Read more <i className="fa-solid fa-square-up-right"></i>
              </div>
            </a>
            <a className="project" href="#">
              <img src={img_article_image_3} alt="Desk with office supplies" />
              <h3>Educate your employees to get better results</h3>
              <div className="readmore">
                Read more <i className="fa-solid fa-square-up-right"></i>
              </div>
            </a>
            <a className="project" href="#">
              <img src={img_article_image_4} alt="Laptop with Business Intelligence Insights" />
              <h3>Business Insights is a important piece of your business</h3>
              <div className="readmore">
                Read more <i className="fa-solid fa-square-up-right"></i>
              </div>
            </a>
          </div>
          <div className="center-content">
            <a className="btn-black" href="projects.html">All Recent Projects <i
                className="fa-solid fa-square-up-right"></i></a>
          </div>
        </div>
      </section>
  )
}

export default ProjectAndCaseStudiesSection
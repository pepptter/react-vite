import './ProjectAndCaseStudiesSection.css'
import React from 'react'
import img_article_image_1 from '@images/article-image-1.png'
import img_article_image_2 from '@images/article-image-2.png'
import img_article_image_3 from '@images/article-image-3.png'
import img_article_image_4 from '@images/article-image-4.png'
import ProjectComponent from './ProjectComponent'
import Button from '../Generics/Button'

const ProjectAndCaseStudiesSection = () => {
  return (
<section className="project-and-cases">
        <div className="container">
          <div className="section-title">
            <p>Project & Case Studies</p>
            <h2>Let’s Looks Our Global Projects</h2>
          </div>
          <div className="project-and-cases">
            <ProjectComponent title="Grow your Business" url="/growyourbusiness" image={img_article_image_1} altText="A mans hands reading a business newspaper"/>
            <ProjectComponent title="Why your client needs a responsive website" url="/responsivewebsite" image={img_article_image_2} altText="Pink Apple Products on a desk"/>
            <ProjectComponent title="Educate your employees to get better results" url="/educateemployers" image={img_article_image_3} altText="Desk with office supplies"/>
            <ProjectComponent title="Business Insights is a important piece of your business" url="/businessinsigths" image={img_article_image_4} altText="Laptop with Business Intelligence Insights"/>
          </div>
          <div className="center-content">
            <Button type="black" text="All Recent Projects" url="projects" />
          </div>
        </div>
      </section>
  )
}

export default ProjectAndCaseStudiesSection
import React from 'react'
import img_Kristine_Palmer from '@images/Kristine-Palmer.png'
import img_Mark_Aubri from '@images/Mark-Aubri.png'
import img_Kimberly_Hansen from '@images/Kimberly-Hansen.png'
import img_Justin_Willoman from '@images/Justin-Willoman.png'

const MeetOurTeamSection = () => {
  return (
<section className="meet-our-team">
        <div className="container">
          <div className="section-header">
            <div className="section-title">
              <p>Meet Our Team</p>
              <h2>Experience Team Members</h2>
            </div>
            <div className=" browse-button">
              <a href="#" className="btn-transparent">
                Browse Services<i className="fa-solid fa-square-up-right"></i>
              </a>
            </div>
          </div>
          <div className="team-members">
            <div className="member">
              <img className="image-text-margin" src={img_Kristine_Palmer} alt="Picture of Kristine Palmer"/>
              <h3>Kristine Palmer</h3>
              <p>Chef Operation Officer</p>
            </div>
            <div className="member">
              <img className="image-text-margin" src={img_Mark_Aubri} alt="Picture of Mark Aubri"/>
              <h3>Mark Aubri</h3>
              <p>Senior Consultant</p>
            </div>
            <div className="member">
              <img className="image-text-margin" src={img_Kimberly_Hansen} alt="Picture of Kimberly Hansen"/>
              <h3>Kimberly Hansen</h3>
              <p>Senior Consultant</p>
            </div>
            <div className="member">
              <img className="image-text-margin" src={img_Justin_Willoman} alt="Picture of Justin Willoman"/>
              <h3>Justin Willoman</h3>
              <p>Senior Tech Consultant</p>
            </div>
          </div>
          <div className="dotline">
            <i className="fa-solid fa-circle"></i>
            <i className="fa-solid fa-circle active"></i>
            <i className="fa-solid fa-circle"></i>
            <i className="fa-solid fa-circle"></i>
            <i className="fa-solid fa-circle"></i>
          </div>
        </div>
      </section>

  )
}

export default MeetOurTeamSection
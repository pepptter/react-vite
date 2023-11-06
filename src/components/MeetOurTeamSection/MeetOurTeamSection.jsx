import './MeetOurTeamSection.css'
import React from 'react'
import img_Kristine_Palmer from '@images/Kristine-Palmer.png'
import img_Mark_Aubri from '@images/Mark-Aubri.png'
import img_Kimberly_Hansen from '@images/Kimberly-Hansen.png'
import img_Justin_Willoman from '@images/Justin-Willoman.png'
import Button from '../Generics/Button'
import TeamMember from './TeamMember'

const MeetOurTeamSection = () => {
  return (
<section className="meet-our-team">
        <div className="container">
          <div className="section-header">
            <div className="section-title">
              <p>Meet Our Team</p>
              <h2>Experience Team Members</h2>
            </div>
            <div className="browse-button">
              <Button type="transparent" text="Browse services" url="/services" />
            </div>
          </div>
          <div className="team-members">
            <TeamMember title="Kristine Palmer" description="Chef Operation Officer" url="/team/kristine-palmer" image={img_Kristine_Palmer} altText="Picture of Kristine Palmer" />
            <TeamMember title="Mark Aubri" description="Senior Consultant" url="/team/mark-aubri" image={img_Mark_Aubri} altText="Picture of Mark Aubri" />
            <TeamMember title="Kimberly Hansen" description="Senior Consultant" url="/team/kimberly-hansen" image={img_Kimberly_Hansen} altText="Picture of Kimberly Hansen" />
            <TeamMember title="Justin Willoman" description="Senior Tech Consultant" url="/team/justin-willoman" image={img_Justin_Willoman} altText="Picture of Justin Willoman" />
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
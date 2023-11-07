import React from 'react'
import FormComponent from './FormComponent'
import './LeaveUsAMessageSection.css'

const LeaveUsAMessageSection = () => {
  return (
    <section className="leave-us-a-message-section">
            <div className="container">
                <div className="title-and-form">
                    <div className="message-title">
                        <h2>Leave us a message</h2>
                        <h2>for any information.</h2>
                    </div>
                    <FormComponent />
                </div>

            </div>
        </section>
  )
}

export default LeaveUsAMessageSection
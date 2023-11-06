import React from 'react'

const LeaveUsAMessageSection = () => {
  return (
    <section className="leave-us-a-message-section">
            <div className="container">
                <div className="title-and-form">
                    <div className="message-title">
                        <h2>Leave us a message</h2>
                        <h2>for any information.</h2>
                    </div>
                    <form id="message-form" className="message-form">
                        <div className="one-row-form">
                        <input
                            id="fullName"
                            type="text"
                            name="fullName"
                            placeholder="Name*"
                        />
                        </div>
                        <div className="one-row-form">
                        <input
                            id="emailAddress"
                            type="email"
                            name="emailAddress"
                            placeholder="Email*"
                        />
                        </div>
                        <div className="multi-row-form">
                            <textarea id="yourMessage" name="yourMessage" placeholder="Your Message* "></textarea>
                        </div>
                        <button type="submit" className="btn-yellow" >Submit</button>

                      </form>
                </div>

            </div>
        </section>
  )
}

export default LeaveUsAMessageSection
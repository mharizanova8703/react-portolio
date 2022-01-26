import React from 'react'
import ContactPNG from "../assets/contact.png"

function ContactCard(props) {
  return (
    <div className="contact-card">
      <div className="card">
        <h1 className="text-center">Contact Me</h1>
        <div className="card-content">
          <a href="tel:6784382224" className="ml-4 mt-4 font-weight-bold">
            Phone
          </a>

          <a
            href="mailto:mharizanova@yahoo.com"
            className="ml-4 mt-4 font-weight-bold"
          >
            Email
          </a>

          <a
            href="https://www.linkedin.com/in/mariya-harizanova-a9651b219/"
            className="ml-4 mt-4 font-weight-bold"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/mharizanova8703"
            className="ml-4 mt-4 font-weight-bold"
          >
            GitHub
          </a>
          <img src={ContactPNG} alt="profile-photo" className="profile float-left"></img>
        </div>
      </div>
    </div>
  )
}

export default ContactCard

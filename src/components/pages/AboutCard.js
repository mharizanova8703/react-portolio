import React from 'react'
import Profile from '../assets/Profile.jpeg'

function AboutCard() {
  return (
    <div className="about-container">
      <h5>About Me</h5>

      <img
        src={Profile}
        alt="profile-photo"
        className="profile float-left"
      ></img>
      <div>
        <div className="mt-3">
          <p>
            Multi-lingual full stack software developer with demonstrated
            experience learning and adapting to new cultures and fostering
            strong relationships. Seeking a challenging career opportunity that
            can leverage my unique blend of technical, cultural and relationship
            building skills. I am interested in learning about new opportunities
            and can be reached through this portfolio, by email:
            /* <a href="mailto:mharizanova@yahoo.com" target="_blank">
              mharizanova@yahoo.com,
            </a> */
            through<a href="https://github.com/mharizanova8703"> GitHub</a>, or
            through{' '}
            <a href="https://www.linkedin.com/in/mariya-harizanova-a9651b219/">
              LinkedIn.
            </a>
          </p>
        </div>

        <div className="card-body contactLinks">
          <a
            href="https://www.linkedin.com/in/mariya-harizanova-a9651b219/"
            className="card-link"
          >
            LinkedIn
          </a>
          <a href="https://github.com/mharizanova8703" className="card-link">
            GitHub
          </a>
        </div>
      </div>
      {/* end copy paste  */}
    </div>
  )
}

export default AboutCard

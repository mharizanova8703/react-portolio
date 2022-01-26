import React from 'react'
import HomeProfile from '../assets/HomeProfile.jpg'

function HomeCard() {
  return (
    <div className="row row-home">
      <div className="col-4">
        <div className="card card-home">
          <div className="card-body">
            
            <h4 className="card-title text-center">Mariya Harizanova</h4>
            <h5 className="card-title text-center">Full Stack Web developer</h5>
            <p className="card-text text-center">
              Multi-lingual full-stack software developer with demonstrated
              experience learning and adapting to new cultures and fostering
              strong relationships. Seeking a challenging career opportunity
              that can leverage my unique blend of technical, cultural, and
              relationship-building skills.
            </p>
            <a
              href="https://www.linkedin.com/in/mariya-harizanova-a9651b219/"
              className="ml-5"
            >
              LinkedIn
            </a>
            <a href="https://github.com/mharizanova8703" className="ml-5">
              Github
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeCard

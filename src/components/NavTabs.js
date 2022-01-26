import React from 'react'
import { Link } from 'react-router-dom'

function NavTabs() {
  return (
    <div className="container-nav">
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link
            to="/"
            className={
              window.location.pathname === '/' ? 'nav-link active' : 'nav-link'
            }
          >
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/Blog"
            className={
              window.location.pathname === '/Blog'
                ? 'nav-link active'
                : 'nav-link'
            }
          >
            Portfolio
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/contact"
            className={
              window.location.pathname === '/contact'
                ? 'nav-link active'
                : 'nav-link'
            }
          >
            Contact
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/learn"
            className={
              window.location.pathname === '/learn'
                ? 'nav-link active'
                : 'nav-link'
            }
          >
            Resume
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default NavTabs

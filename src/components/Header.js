import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/linkedin.jpg'

const Header = () => (
  <header id="header">
    <div className="inner">
      <img
        className="image avatar"
        src={avatar}
        alt="Avatar"
      />
      <h1>Greg Vargas</h1>
      <h1>Software Engineer</h1>
      <br />
      <br />
      <div>
        <p>
          <a className="no-link" href="#about">
            About Me
          </a>
        </p>
        <p>
          <a className="no-link" href="#skills">
            Skills
          </a>
        </p>
        <p>
          <a className="no-link" href="#work">
            Work Experience
          </a>
        </p>
        <p>
          <a className="no-link" href="#projects">
            Personal Projects
          </a>
        </p>
        <p>
          <a className="no-link" href="#contact">
            Contact Me
          </a>
        </p>
      </div>
    </div>
    <Footer />
  </header>
)

export default Header

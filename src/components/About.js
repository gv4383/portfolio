import React, { Fragment } from 'react'

import resume from '../assets/resume/Greg_Vargas_Software_Engineer_Resume.pdf'

const About = () => (
  <Fragment>
    <a name="about" />
    <header className="major">
      <h2>
        Hey there, I'm Greg!
      </h2>
    </header>
    <p>
      I'm a software engineer with 4 years of professional experience and a passion for building products and creating innovative solutions for them. My specializations are in Front End/Full Stack Web Development and iOS Development.
      <br />
      <br />
      When I'm not coding, you'll find me:
    </p>
    <ul>
      <li>Playing guitar and jamming with the best musicians around town!</li>
      <li>Dancing salsa</li>
      <li>Disc golfing</li>
      <li>Learning new cooking recipies</li>
    </ul>
    <p>Below, you'll find my credentials as well as the accomplishments I've made throughout my journey in software development.</p>
    <ul className="actions">
      <li>
        <a href={resume} className="button" download>
          Download Resume
        </a>
      </li>
    </ul>
  </Fragment>
)

export default About

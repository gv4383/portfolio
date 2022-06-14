import React, { Fragment } from 'react'

import resume from '../assets/resume/Greg_Vargas_iOS_Engineer_Resume.pdf'

const About = () => (
  <Fragment>
    <a name="about" />
    <header className="major">
      <h2>
        Hey there, I'm Greg!
      </h2>
    </header>
    <p>
      I'm an iOS engineer with a passion for creating innovative solutions.
      <br />
      <br />
      During my final semester of college, I set out on a journey to better my programming skills in order to make my electrical engineering resume stand out to employers. As the semester came to a close, I realized that electrical engineering was not the right path for me and that software engineering was what I truly wanted to pursue in my professional career. Though it's been a long, difficult journey full of learning, I couldn't be more content with my decision to venture down this path.
      <br />
      <br />
      When I'm not coding, you'll find me:
    </p>
    <ul>
      <li>
        Playing guitar and jamming with the best musicians around
        town!
      </li>
      <li>Learning new cooking recipies</li>
      <li>Dancing salsa</li>
    </ul>
    <p>
      Below, you'll find my credentials as well as the accomplishments
      I've made throughout my journey in software development.
    </p>
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

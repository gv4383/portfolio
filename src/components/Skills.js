import React, { Fragment } from 'react'

import reactLogo from '../assets/skills/react_logo.svg'
import es6Logo from '../assets/skills/es6_logo.svg'
import typscriptLogo from '../assets/skills/typescript_logo.svg'
import expressLogo from '../assets/skills/express_logo.svg'
import vueLogo from '../assets/skills/vue_logo.svg'
import gitLogo from '../assets/skills/git_logo.svg'
import postgresLogo from '../assets/skills/postgres_logo.svg'
import nodeLogo from '../assets/skills/node_logo.svg'
import sassLogo from '../assets/skills/sass_logo.svg'
import cssLogo from '../assets/skills/css_logo.svg'
import reduxLogo from '../assets/skills/redux_logo.svg'
import htmlLogo from '../assets/skills/html_logo.svg'
import railsLogo from '../assets/skills/rails_logo.svg'
import swiftLogo from '../assets/skills/swift_logo.svg'
import swiftUILogo from '../assets/skills/swiftui_logo.svg'
import iOSLogo from '../assets/skills/ios_logo.svg'

// Go to https://icons8.com/icons/ for new icons

const skillsArray = [
  {
    id: '0',
    name: 'JavaScript',
    url: 'https://es6.io/',
    src: es6Logo,
  },
  {
    id: '1',
    hasPadding: true,
    name: 'TypeScript',
    url: 'https://www.typescriptlang.org/',
    src: typscriptLogo,
  },
  {
    id: '2',
    name: 'React',
    url: 'https://reactjs.org/',
    src: reactLogo,
  },
  {
    id: '3',
    name: 'Redux',
    url: 'https://redux.js.org/',
    src: reduxLogo,
  },
  {
    id: '4',
    hasPadding: true,
    name: 'Ruby on Rails',
    url: 'https://rubyonrails.org/',
    src: railsLogo
  },
  {
    id: '5',
    name: 'Vue.js',
    url: 'https://vuejs.org/',
    src: vueLogo,
  },
  {
    id: '6',
    name: 'Express',
    url: 'https://expressjs.com/',
    src: expressLogo,
  },
  {
    id: '7',
    name: 'Node.js',
    url: 'https://nodejs.org/en/',
    src: nodeLogo,
  },
  {
    id: '8',
    hasPadding: true,
    name: 'Swift',
    url: 'https://www.swift.org/',
    src: swiftLogo,
  },
  {
    id: '9',
    hasPadding: true,
    name: 'SwiftUI',
    url: 'https://developer.apple.com/documentation/swiftui/',
    src: swiftUILogo,
  },
  {
    id: '10',
    hasPadding: true,
    name: 'UIKit',
    url: 'https://developer.apple.com/documentation/uikit',
    src: iOSLogo,
  },
  {
    id: '11',
    name: 'Sass',
    url: 'https://sass-lang.com/',
    src: sassLogo,
  },
  {
    id: '12',
    name: 'HTML',
    url: 'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5',
    src: htmlLogo,
  },
  {
    id: '13',
    name: 'CSS',
    url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3',
    src: cssLogo,
  },
  {
    id: '14',
    name: 'PostgreSQL',
    url: 'https://www.postgresql.org/',
    src: postgresLogo,
  }
]

const skillClassNames = (skill) => {
  const paddingClassName = skill.hasPadding
    ? 'skills-icon-container'
    : ''
  
  return `hvr-grow ${paddingClassName}`
}

const Skills = () => {
  const displaySkills = skillsArray.map(skill => (
    <div key={`skill-${skill.id}`} className="dev-icon">
      <a
        className="no-link hover-icon"
        href={skill.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <p>{skill.name}</p>
        <div>
          <img
            className={skillClassNames(skill)}
            src={skill.src}
            alt={skill.name}
          />
        </div>
      </a>
    </div>
  ))

  return (
    <Fragment>
      <a name="skills" />
      <h2>Skills</h2>
      <div id="skills">{skillsArray[0] && displaySkills}</div>
    </Fragment>
  )
};

export default Skills

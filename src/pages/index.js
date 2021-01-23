import React from 'react'
import Helmet from 'react-helmet'

import About from '../components/About'
import Gallery from '../components/Gallery'
import Layout from '../components/layout'
import Skills from '../components/Skills'

const HomeIndex = () => {
  const siteTitle = 'Greg Vargas - Software Engineer'
  const siteDescription = 'Greg Vargas - Software Engineer Portfolio'

  return (
    <Layout>
      <Helmet>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
      </Helmet>

      <div id="main">
        <section id="one">
          <About />
        </section>

        <section id="two">
          <a name="skills" />
          <h2>Skills</h2>

          <Skills />
        </section>

        <section id="three">
          <a name="work" />
          <h2>Work Experience</h2>

          <h3 className="work-title">
            <a className="no-link" href="https://www.dealerware.com/" rel="noopener noreferrer" target="_blank">
              Silvercar Inc. - Dealerware
              {' '}
              <span className="icon fa-external-link" />
            </a>
          </h3>
          <div>Software Engineer</div>
          <div>April 2019 - September 2020</div>
          <ul>
            <li>Created new customer interfacing product for Dealerware in React</li>
            <li>Implemented new micro frontend React features to replace legacy app</li>
            <li>Tested Redux actions/reducers/selectors and util methods with Jest/React Testing Library</li>
            <li>Developed and tested API services/endpoints in Ruby on Rails</li>
          </ul>

          <h3 className="work-title">
            <a className="no-link" href="https://degreeanalytics.com" rel="noopener noreferrer" target="_blank">
              Degree Analytics
              {' '}
              <span className="icon fa-external-link" />
            </a>
          </h3>
          <div>Software Engineer - Intern</div>
          <div>December 2018 - April 2019</div>
          <ul>
            <li>Maintained and implemented small features in React code base</li>
            <li>Improved front end performance by implementing JavaScript libraries such as Normalizr and Reselect</li>
            <li>Automated parts of QA process by writing unit tests with Jest/Enzyme</li>
            <li>Reduced QA time each sprint through automated QA process</li>
          </ul>

          <h3 className="work-title">
            <a className="no-link" href="https://www.jollyhq.com" rel="noopener noreferrer" target="_blank">
              Jolly
              {' '}
              <span className="icon fa-external-link" />
            </a>
          </h3>
          <div>Software Engineer - Intern</div>
          <div>October 2018 - December 2018</div>
          <ul>
            <li>Implemented specifications into components/features using React</li>
            <li>Collaborated with a small group of designers and engineers</li>
            <li>Tested front end components by writing unit tests with Jest/Enzyme</li>
            <li>Wrote specifications for different web views based on designer views</li>
          </ul>
        </section>

        <section id="four">
          <a name="projects" />
          <h2>Personal Projects</h2>

          <Gallery />

          <ul className="actions">
            <li>
              <a
                href="https://github.com/gv4383"
                className="button"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>
          </ul>
        </section>

        <section id="five">
          <a name="contact" />
          <h2>Let's Get In Touch!</h2>
          <p>
            Like what you see? Feel free to reach out!
            <br />
            I'd love to hear about any opportunities you may have for me!
          </p>
          <div className="row">
            <div className="4u 12u$(small)">
              <ul className="labeled-icons">
                <li>
                  <h3 className="icon fa-home">
                    <span className="label">Address</span>
                  </h3>
                  Austin, TX
                  <br />
                  United States
                </li>
                <li>
                  <h3 className="icon fa-linkedin">
                    <span className="label">LinkedIn</span>
                  </h3>
                  <a
                    className="no-link"
                    href="https://linkedin.com/in/gregoryvargas"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    linkedin.com/in/gregoryvargas
                  </a>
                </li>
                <li>
                  <h3 className="icon fa-envelope-o">
                    <span className="label">Email</span>
                  </h3>
                  <a
                    className="no-link"
                    href="mailto:gregory.t.vargas@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    gregory.t.vargas@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default HomeIndex

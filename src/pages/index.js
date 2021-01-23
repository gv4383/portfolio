import React from 'react'
import Helmet from 'react-helmet'

import About from '../components/About'
import Gallery from '../components/Gallery'
import Layout from '../components/layout'
import Skills from '../components/Skills'
import Work from '../components/Work'

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
          <Skills />
        </section>

        <section id="three">
          <Work />
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

import React from 'react'
import Helmet from 'react-helmet'

import Gallery from '../components/Gallery'
import Layout from '../components/layout'
import resume from '../assets/resume/Greg_Vargas_Software_Engineer_Resume.pdf'

const HomeIndex = () => {
  const siteTitle = 'Gatsby Starter - Strata'
  const siteDescription = 'Site description'

  return (
    <Layout>
      <Helmet>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
      </Helmet>

      <div id="main">
        <section id="one">
          <a name="/about" />
          <header className="major">
            <h2>
              Hey there, I'm Greg!
            </h2>
          </header>
          <p>
            I'm a software engineer with a passion for creating innovative solutions.
            <br />
            <br />I originally graduated with a degree in Electrical
            Engineering from Texas A&M University, but decided to jump into
            software development after seeing a YouTube video on the tech
            industry in Silicon Valley. It's been a long, continuous journey
            full of learning and I couldn't be more content with my decision
            to venture down this path.
            <br />
            <br />
            When I'm not coding, you'll find me:
            <ul>
              <li>
                Playing guitar and jamming with the best musicians around
                town!
              </li>
              <li>Learning new cooking recipies</li>
              <li>Bouldering</li>
              <li>Hiking and exploring nature</li>
            </ul>
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
        </section>

        <section id="two">
          <h2>Recent Work</h2>

          <Gallery />

          <ul className="actions">
            <li>
              <a href="#" className="button">
                Full Portfolio
              </a>
            </li>
          </ul>
        </section>

        <section id="five">
          <a name="/contact" />
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

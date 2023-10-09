import React, { Fragment } from 'react'

const Work = () => (
  <Fragment>
    <a name="work" />
    <h2>Work Experience</h2>

    <h3 className="work-title">
      <a
        className="no-link"
        href="https://punchthrough.com/"
        rel="noopener noreferrer"
        target="_blank"
      >
        Punch Through <span className="icon fa-external-link" />
      </a>
    </h3>
    <div>Software Engineer</div>
    <div>November 2022 - Present</div>
    <ul>
      <li>
        Lead effort in UI overhaul project by writing tech specs for
        stakeholders, planning/estimating project work, and guiding other
        engineers
      </li>
      <li>
        Implemented Firebase analytics tracking to target high-priority bugs and
        crashes, resulting in a 7% reduction in bug/crash instances
      </li>
      <li>
        Configured CircleCI to run linting and test suites for new and existing
        projects. Optimized build configurations and reduced build times by 40%
      </li>
      <li>
        Configured iOS projects to implement new features in SwiftUI and
        maintained existing features in UIKit. Migrated existing Objective-C
        code over to Swift to improve maintainability among other engineers.
      </li>
    </ul>

    <h3 className="work-title">
      <a
        className="no-link"
        href="https://www.saatva.com/"
        rel="noopener noreferrer"
        target="_blank"
      >
        Saatva <span className="icon fa-external-link" />
      </a>
    </h3>
    <div>Software Engineer</div>
    <div>August 2021 - July 2022</div>
    <ul>
      <li>
        Delivered 16 new product description pages using JavaScript, TypeScript,
        and React, resulting in a 24% increase in new product pages
      </li>
      <li>
        Configured A/B tests to drive business metrics and prioritize user
        experience improvements, resulting in a 4% increase in customer
        conversion
      </li>
      <li>
        Implemented new features behind feature flags to have controlled
        releases without having to deploy new versions of our web application
        and time important features/sales on high traffic days such as holidays
      </li>
      <li>
        Refactored Node.js proxy API to reduce amount of unnecessary data being
        sent and allow for simpler data consumption on the front end
      </li>
    </ul>

    <h3 className="work-title">
      <a
        className="no-link"
        href="https://www.zilliant.com/"
        rel="noopener noreferrer"
        target="_blank"
      >
        Zilliant <span className="icon fa-external-link" />
      </a>
    </h3>
    <div>Software Engineer</div>
    <div>September 2020 - August 2021</div>
    <ul>
      <li>
        Delivered user roles experience feature on the front end using React,
        allowing for unique UX/UI depending on a user's set of roles
      </li>
      <li>
        Implemented Redux store in React project to store user data, including
        user roles, and have it easily available across the application
      </li>
      <li>
        Tested React component functionality using Jest/Enzyme and increased our
        react testing coverage by 17%
      </li>
      <li>
        Developed API endpoints using Node.js for the front end to manage user
        roles, including fetching, assigning, and removing any associated roles
      </li>
    </ul>

    <h3 className="work-title">
      <a
        className="no-link"
        href="https://www.dealerware.com/"
        rel="noopener noreferrer"
        target="_blank"
      >
        Dealerware <span className="icon fa-external-link" />
      </a>
    </h3>
    <div>Software Engineer</div>
    <div>April 2019 - September 2020</div>
    <ul>
      <li>
        Spearheaded development on new React/TypeScript web app to allow
        dealerships to onboard themselves into the Dealerware system instead of
        having our customer service team onboard them, which saved over 100
        hours of manual work per month
      </li>
      <li>
        Contributed to our in-house UI library to create reusable components in
        React, saving 150+ hours of development per month
      </li>
      <li>
        Implemented micro front end in our web application to allow for new
        features to be added in React while maintaining older features in
        AngularJS
      </li>
      <li>
        Developed API endpoints using Ruby on Rails to manage vehicle loan
        contracts, allowing dealerships to easily start/stop contracts and view
        associated vehicle and customer data
      </li>
    </ul>

    <h3 className="work-title">
      <a
        className="no-link"
        href="https://degreeanalytics.com"
        rel="noopener noreferrer"
        target="_blank"
      >
        Degree Analytics <span className="icon fa-external-link" />
      </a>
    </h3>
    <div>Front End Software Engineer - Intern</div>
    <div>December 2018 - April 2019</div>
    <ul>
      <li>Maintained and implemented small features in React code base</li>
      <li>
        Implemented Reselect library to easily organize and use redux data
      </li>
      <li>
        Implemented Normalizr to normalize deeply nested JSON responses coming
        from API services
      </li>
      <li>
        Automated parts of QA process by writing unit tests with Jest/Enzyme
      </li>
    </ul>

    <h3 className="work-title">
      <a
        className="no-link"
        href="https://www.jollyhq.com"
        rel="noopener noreferrer"
        target="_blank"
      >
        Jolly <span className="icon fa-external-link" />
      </a>
    </h3>
    <div>Front End Software Engineer - Intern</div>
    <div>October 2018 - December 2018</div>
    <ul>
      <li>Implemented specifications into components/features using React</li>
      <li>Collaborated with a small group of designers and engineers</li>
      <li>
        Tested front end components by writing unit tests with Jest/Enzyme
      </li>
      <li>
        Wrote specifications for different web views based on designer views
      </li>
    </ul>
  </Fragment>
)

export default Work

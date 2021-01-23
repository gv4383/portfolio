import React, { Fragment } from 'react'

const Work = () => (
  <Fragment>
    <a name="work" />
    <h2>Work Experience</h2>

    <h3 className="work-title">
      <a className="no-link" href="https://www.zilliant.com/" rel="noopener noreferrer" target="_blank">
        Zilliant Inc.
        {' '}
        <span className="icon fa-external-link" />
      </a>
    </h3>
    <div>Software Engineer</div>
    <div>September 2020 - Present</div>
    <ul>
      <li>Implemented new UI features in React for Price Manager product</li>
      <li>Implemented unique UX features based on user permissions/roles</li>
      <li>Developed API services/endpoints in Node.js/Express to support UI</li>
      <li>Tested UI components with Jest/Enzyme</li>
      <li>Tested API endpoints with Mocha/Chai</li>
    </ul>

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
  </Fragment>
)

export default Work

import React, { Fragment } from 'react'

const Work = () => (
  <Fragment>
    <a name="work" />
    <h2>Work Experience</h2>

    <h3 className="work-title">
      <a className="no-link" href="https://punchthrough.com/" rel="noopener noreferrer" target="_blank">
        Punch Through
        {' '}
        <span className="icon fa-external-link" />
      </a>
    </h3>
    <div>Software Engineer - iOS</div>
    <div>November 2022 - Present</div>
    <ul>
      <li>Worked with clients to deliver new features, fix bugs/crashes, and maintain existing features in their iOS applications</li>
      <li>Lead effort in overhauling UI for LightBlue application by planning/estimating tickets and assigning work to other engineers on the team</li>
      <li>Configured analytics tracking with Firebase. Used analytics data to target specific features to prioritize user experience improvements and fix high priority crashes/bugs.</li>
      <li>Configured iOS projects to implement new features in SwiftUI and maintained existing features in UIKit. Migrated existing Objective-C code over to Swift to improve maintainability among other engineers</li>
    </ul>
    
    <h3 className="work-title">
      <a className="no-link" href="https://www.saatva.com/" rel="noopener noreferrer" target="_blank">
        Saatva
        {' '}
        <span className="icon fa-external-link" />
      </a>
    </h3>
    <div>Software Engineer - Full Stack</div>
    <div>August 2021 - July 2022</div>
    <ul>
      <li>Delivered product description pages for new products and maintined existing pages using React</li>
      <li>Configured A/B tests across website to help drive business metrics and prioritize user experience improvements</li>
      <li>Created new features behind feature flags for controlled releases</li>
    </ul>

    <h3 className="work-title">
      <a className="no-link" href="https://www.zilliant.com/" rel="noopener noreferrer" target="_blank">
        Zilliant
        {' '}
        <span className="icon fa-external-link" />
      </a>
    </h3>
    <div>Software Engineer - Web/iOS</div>
    <div>September 2020 - August 2021</div>
    <ul>
      <li>Delivered new UI features for web and iOS applications using React and Swift/UIKit</li>
      <li>Implemented user roles feature that would allow users to have different experiences in our application based on their assigned roles</li>
      <li>Contributed to Redux architecture to allow for predictable application states and easy access to data needed across the application</li>
      <li>Developed and maintained API services/endpoints in Node.js/Express to support new UI features in our application</li>
    </ul>

    <h3 className="work-title">
      <a className="no-link" href="https://www.dealerware.com/" rel="noopener noreferrer" target="_blank">
        Dealerware
        {' '}
        <span className="icon fa-external-link" />
      </a>
    </h3>
    <div>Software Engineer - Web/iOS</div>
    <div>April 2019 - September 2020</div>
    <ul>
      <li>Delivered new UI features for web and iOS applications using React and Swift/UIKit</li>
      <li>Implemented new iOS feature for starting/ending customer vehicle loans to allow dealership employees to be more mobile with an iPhone/iPad</li>
      <li>Spearheaded development on new web application to allow dealerships to onboard themselves into the Dealerware system instead of having our customer service team onboard them</li>
      <li>Developed and maintained API services/endpoints in Ruby on Rails to support UI features in our web and mobile applications</li>
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
      <li>Implemented Reselect library to easily organize and use redux data</li>
      <li>Implemented Normalizr to normalize deeply nested JSON responses coming from API services</li>
      <li>Automated parts of QA process by writing unit tests with Jest/Enzyme</li>
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

import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import Projects from './Projects';
import Education from './Education';
import Experience from './Experience';
import Summary from './Summary';
import Skills from './Skills';

import resume from './data/resume.json';

import './styles/App.css';

console.log(resume);

class App extends Component {
  render() {
    return (
      [
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark" key='nav'>
          <a className="navbar-brand" href="">{ resume.contact.name }</a>

          <div className="navbar-collapse" id="navbarToggler">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href={`tel:1-${resume.contact.phone}`}>{ resume.contact.phone }</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href={`mailto:${resume.contact.email}`}>{ resume.contact.email }</a>
              </li>
              <li className="nav-item">
                <a className='nav-link '><i className='fa fa-sign-out'/></a>
              </li>
            </ul>
          </div>
        </nav>,
        <Summary summary={resume.summary} key='summary'/>,
        <Skills skills={resume.skills} key='skills'/>,
        <Experience experience={resume.experience} projects={resume.projects} key='experience'/>,
        <Projects projects={resume.other} key='projects'/>,
        <Education schools={resume.education} key='education'/>
      ]
    );
  }
}

export default App;

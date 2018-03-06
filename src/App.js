import React, { Component } from 'react';
import { connect } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import { setFilters, addFilters } from './actions';

import Projects from './Projects';
import Education from './Education';
import Experience from './Experience';
import Summary from './Summary';
import Skills from './Skills';
import Filters from './Filters';

import {EDUCATION, EXPERIENCE, OTHER_PROJECTS, SKILLS, SUMMARY} from './filter_types';

import resume from './data/resume.json';

import './styles/App.css';

console.log(resume);

class App extends Component {

  componentWillMount() {
    console.log("SETS FILTERS : ", this.props.setFilters, resume.filters);
    if (resume.filters)        { this.props.setFilters(resume.filters) };
    if (resume.active_filters) { this.props.addFilters(resume.active_filters) };
  }

  render() {
    const filters = this.props.filters;
    const sections = this.props.sections;
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
        <div className='container-fluid print-header' key='print-header'>
          <div className='row'>
            <div className='col print-name'>{resume.contact.name}</div>
            <div className='col print-phone'>{resume.contact.phone}</div>
            <div className='col print-email'>{resume.contact.email}</div>
          </div>
        </div>,
        <Filters key='filters'/>,
        sections[SUMMARY]        && <Summary    filters={ filters } summary={resume.summary}       key='summary'/>,
        sections[SKILLS]         && <Skills     filters={ filters } skills={resume.skills}         key='skills'/>,
        sections[EXPERIENCE]     && <Experience filters={ filters } experience={resume.experience} projects={resume.projects} sections={sections} key='experience'/>,
        sections[OTHER_PROJECTS] && <Projects   filters={ filters } projects={resume.other}        key='projects'/>,
        sections[EDUCATION]      && <Education  filters={ filters } schools={resume.education}     key='education'/>
      ]
    );
  }
}

const mapStateToProps = ({filters}) => {
  return { sections : filters.section_filters, filters : filters.filters };
}

export default connect(mapStateToProps,{setFilters, addFilters})(App);

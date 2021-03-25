import React, { useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";

import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

import { setFilters, addFilters, setCollapsed, toggleCollapsed } from "actions";

import Projects from "components/Projects";
import Education from "components/Education";
import Experience from "components/Experience";
import Summary from "components/Summary";
import Skills from "components/Skills";
import Filters from "components/Filters";

import {
  EDUCATION,
  EXPERIENCE,
  OTHER_PROJECTS,
  SKILLS,
  SUMMARY,
} from "filter_types";

import "./Resume.css";

import resume from "data/resume.json";
//const fetchPromise = fetch("/data/resume.json");
/*
class Resume extends Component {
  componentWillMount() {
    if (!Object.keys(this.props.filters).length) {
      if (resume.filters) {
        this.props.setFilters(resume.filters);
      }
      if (resume.active_filters && !Object.keys(this.props.filters).length) {
        this.props.addFilters(resume.active_filters);
      }
    }

    if (!Object.keys(this.props.collapsed).length) {
      let collapsed = {};
      resume.experience.forEach((job) => {
        collapsed[job.id] = job.collapsed || false;
        if (job.projects) {
          job.projects.forEach((project) => {
            collapsed[project.project] = project.collapsed;
          });
        }
      });
      resume.other.forEach((project) => {
        collapsed[project.id] = project.collapsed || false;
      });

      this.props.setCollapsed(collapsed);
    }
  }
*/

const Resume = () => {
  const {
    filters = [],
    section_filters = [],
    section_order = [],
    collapsed = false,
  } = useSelector(({ filters, collapsed }) => ({ ...filters, collapsed }));

  const dispatch = useDispatch();

  const collapseCallback = useMemo(
    () => (id) => dispatch(toggleCollapsed(id)),
    [dispatch]
  );

  const section_mapping = {
    [EDUCATION]: section_filters[EDUCATION] && (
      <Education filters={filters} schools={resume.education} key="education" />
    ),
    [EXPERIENCE]: section_filters[EXPERIENCE] && (
      <Experience
        filters={filters}
        experience={resume.experience}
        projects={resume.projects}
        sections={section_filters}
        collapsed={collapsed}
        collapseCallback={collapseCallback}
        key="experience"
      />
    ),
    [OTHER_PROJECTS]: section_filters[OTHER_PROJECTS] && (
      <Projects
        filters={filters}
        projects={resume.other}
        collapsed={collapsed}
        collapseCallback={collapseCallback}
        key="projects"
      />
    ),
    [SKILLS]: section_filters[SKILLS] && (
      <Skills filters={filters} skills={resume.skills} key="skills" />
    ),
    [SUMMARY]: section_filters[SUMMARY] && (
      <Summary filters={filters} summary={resume.summary} key="summary" />
    ),
  };

  const sections = section_order
    .map((s) => section_mapping[s])
    .filter((s) => s !== undefined);

  return [
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark" key="nav">
      <a className="navbar-brand" href="#resume">
        {resume.contact.name}
      </a>

      <div className="navbar-collapse" id="navbarToggler">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0"></ul>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href={`tel:1-${resume.contact.phone}`}>
              {resume.contact.phone}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href={`mailto:${resume.contact.email}`}>
              {resume.contact.email}
            </a>
          </li>
        </ul>
      </div>
    </nav>,
    <div className="container-fluid print-header" key="print-header">
      <div className="row">
        <div className="col print-name">{resume.contact.name}</div>
        <div className="col print-phone">{resume.contact.phone}</div>
        <div className="col print-email">{resume.contact.email}</div>
      </div>
    </div>,
    <Filters key="filters" />,
    ...sections,
  ];
};

export default React.memo(Resume);

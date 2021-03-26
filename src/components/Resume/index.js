import React, { Suspense, useMemo, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import "antd/dist/antd.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

import { setFilters, addFilters, setCollapsed, toggleCollapsed } from "actions";
import suspend from "suspend";

import Header from "./Header";

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

const fetchResume = fetch("./resume.json").then((res) => res.json());

const suspendedFetchResume = suspend(fetchResume);

const NonMemoResume = () => {
  const resume = suspendedFetchResume();

  const {
    filters = [],
    section_filters = [],
    section_order = [],
    collapsed = false,
  } = useSelector(({ filters, collapsed }) => ({ ...filters, collapsed }));

  const dispatch = useDispatch();

  useEffect(() => {
    if (!Object.keys(filters).length) {
      if (resume.filters) {
        dispatch(setFilters(resume.filters));
      }
      if (resume.active_filters) {
        dispatch(addFilters(resume.active_filters));
      }
    }
    if (!Object.keys(collapsed).length) {
      let newCollapsed = {};
      resume.experience.forEach((job) => {
        newCollapsed[job.id] = job.collapsed || false;
        if (job.projects) {
          job.projects.forEach((project) => {
            newCollapsed[project.project] = project.collapsed;
          });
        }
      });
      resume.other.forEach((project) => {
        newCollapsed[project.id] = project.collapsed || false;
      });

      setCollapsed(newCollapsed);
    }
  }, []);

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
    <Header contact={resume.contact} />,
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

const Resume = React.memo(NonMemoResume);

const NonMemoResumeRetriever = () => {
  return (
    <Suspense fallback={"Loading..."}>
      <Resume />
    </Suspense>
  );
};

export default React.memo(NonMemoResumeRetriever);

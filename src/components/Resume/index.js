import React, { Suspense, useMemo, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import "antd/dist/antd.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

import {
  setSectionFilters,
  setTechFilters,
  setTechOrder,
  setCollapsed,
  toggleCollapsed,
} from "actions";
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
    tech_filters = [],
    section_filters = [],
    section_order = [],
    collapsed = false,
    tech_order = [],
  } = useSelector(({ filters, collapsed }) => ({
    ...filters,
    collapsed,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    if (!Object.keys(tech_filters).length && resume.active_tech_filters) {
      dispatch(setTechFilters(resume.active_tech_filters));
    }

    if (!tech_order.length && resume.tech) {
      dispatch(setTechOrder(resume.tech));
    }
    if (!Object.keys(collapsed).length) {
      let newCollapsed = {};
      resume.experience.forEach((job) => {
        newCollapsed[job.id] = job.collapsed || false;
        if (job.projects) {
          job.projects.forEach((project) => {
            newCollapsed[project.project] = project.collapsed || false;
          });
        }
      });
      resume.other.forEach((project) => {
        newCollapsed[project.id] = project.collapsed || false;
      });

      dispatch(setCollapsed(newCollapsed));
    }
  }, []);

  const collapseCallback = useMemo(
    () => (id) => dispatch(toggleCollapsed(id)),
    [dispatch]
  );

  const section_mapping = {
    [EDUCATION]: (
      <Education
        filters={tech_filters}
        schools={resume.education}
        key="education"
      />
    ),
    [EXPERIENCE]: (
      <Experience
        filters={tech_filters}
        experience={resume.experience}
        projects={resume.projects}
        sections={section_filters}
        collapsed={collapsed}
        collapseCallback={collapseCallback}
        key="experience"
      />
    ),
    [OTHER_PROJECTS]: (
      <Projects
        filters={tech_filters}
        projects={resume.other}
        collapsed={collapsed}
        collapseCallback={collapseCallback}
        key="projects"
      />
    ),
    [SKILLS]: (
      <Skills filters={tech_filters} skills={resume.skills} key="skills" />
    ),
    [SUMMARY]: (
      <Summary filters={tech_filters} summary={resume.summary} key="summary" />
    ),
  };

  const sections = section_order
    .filter((s) => section_filters.includes(s))
    .map((s) => section_mapping[s]);

  return [
    <Header key="header" contact={resume.contact} />,

    <Filters key="tech_filters" />,
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

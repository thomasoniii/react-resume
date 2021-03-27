import React, { Suspense, useMemo, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Skeleton } from "antd"

import "antd/dist/antd.css"

import {
  setTechFilters,
  setTechOrder,
  setCollapsed,
  toggleCollapsed,
} from "actions"
import suspend from "suspend"

import Header from "./Header"

import Projects from "components/Projects"
import Education from "components/Education"
import Experience from "components/Experience"
import Summary from "components/Summary"
import Skills from "components/Skills"
import Filters from "components/Filters"

import {
  EDUCATION,
  EXPERIENCE,
  OTHER_PROJECTS,
  SKILLS,
  SUMMARY,
} from "filter_types"

import "./Resume.css"

const fetchResume = fetch("./resume.json").then((res) => res.json())

const suspendedFetchResume = suspend(fetchResume)

function getGridColumns(section_filters) {
  if (
    section_filters.includes(EXPERIENCE) &&
    section_filters.includes(SKILLS)
  ) {
    return "3fr 1fr"
  } else {
    return "1fr"
  }
}

const NonMemoResume = () => {
  const resume = suspendedFetchResume()

  document.title = resume.contact.name

  const {
    tech_filters = [],
    section_filters = [],
    // section_order = [],
    collapsed = false,
    tech_order = [],
  } = useSelector(({ filters, collapsed: c }) => ({
    ...filters,
    collapsed: c,
  }))

  const dispatch = useDispatch()

  useEffect(() => {
    if (!Object.keys(tech_filters).length && resume.active_tech_filters) {
      dispatch(setTechFilters(resume.active_tech_filters))
    }

    if (!tech_order.length && resume.tech) {
      dispatch(setTechOrder(resume.tech))
    }
    if (!Object.keys(collapsed).length) {
      const newCollapsed = {}
      resume.experience.forEach((job) => {
        newCollapsed[job.id] = job.collapsed || false
        if (job.projects) {
          job.projects.forEach((project) => {
            newCollapsed[project.project] = project.collapsed || false
          })
        }
      })
      resume.other.forEach((project) => {
        newCollapsed[project.id] = project.collapsed || false
      })

      dispatch(setCollapsed(newCollapsed))
    }
  }, [collapsed, resume, dispatch, tech_filters, tech_order])

  const collapseCallback = useMemo(
    () => (id) => dispatch(toggleCollapsed(id)),
    [dispatch]
  )

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
  }

  return [
    <Header key="header" contact={resume.contact} />,

    <Filters key="tech_filters" />,
    // ...sections,
    section_filters.includes(SUMMARY) && section_mapping[SUMMARY],
    (section_filters.includes(EXPERIENCE) ||
      section_filters.includes(SKILLS)) && (
      <div
        key="resume-container"
        className="resume-container"
        style={{ gridTemplateColumns: getGridColumns(section_filters) }}
      >
        <div className="left-column">
          {section_filters.includes(EXPERIENCE) && section_mapping[EXPERIENCE]}
        </div>
        <div className="right-column">
          {section_filters.includes(SKILLS) && section_mapping[SKILLS]}
        </div>
      </div>
    ),
    section_filters.includes(OTHER_PROJECTS) && section_mapping[OTHER_PROJECTS],
    section_filters.includes(EDUCATION) && section_mapping[EDUCATION],
  ]
}

const Resume = React.memo(NonMemoResume)

const NonMemoResumeRetriever = () => {
  return (
    <Suspense
      fallback={
        <div>
          <Skeleton active />
          <Skeleton active />
          <Skeleton active />
          <Skeleton active />
        </div>
      }
    >
      <Resume />
    </Suspense>
  )
}

export default React.memo(NonMemoResumeRetriever)

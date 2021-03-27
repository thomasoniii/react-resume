import React from "react"
import PropTypes from "prop-types"

import { PROJECT_BLURBS } from "filter_types"
import RenderHighlight from "./RenderHighlight"

const JobProject = ({
  project,
  collapseCallback,
  collapsed,
  sections,
  projects,
  filters,
}) => {
  const project_name = project.project
  return (
    <React.Fragment key={project_name}>
      <div
        className="job-project"
        key={`${project_name}-info`}
        onClick={() => {
          collapseCallback(project_name)
        }}
      >
        <div className="job-project-container">
          <span>
            <span className="job-project-name">{project_name}</span>
            <span className="project-role">{project.role}</span>

            <span className="project-members">
              {project.members} person team
            </span>
          </span>
          {project.url && (
            <span className="float-right">
              {project.url.map((url) => (
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={url}
                >
                  {" "}
                  {url}
                </a>
              ))}
            </span>
          )}

          <div className="date">
            <div className="float-right">{project.date}</div>
          </div>
        </div>
      </div>
      {projects[project_name] && sections[PROJECT_BLURBS] && (
        <div key={`${project_name}-blurb`}>
          <div className="project-blurb">{projects[project_name].blurb}</div>
          {projects[project_name].url && (
            <div>
              <ul style={{ listStyle: "none" }} className="float-right">
                {projects[project_name].url.map((url) => {
                  return (
                    <li key={url}>
                      <a href={url} target="_blank" rel="noopener noreferrer">
                        {url}
                      </a>
                    </li>
                  )
                })}
              </ul>
            </div>
          )}
        </div>
      )}
      {project.highlights && !collapsed[project.project] && (
        <div className="project-highlight" key={`${project_name}-highlights`}>
          <div className="highlight">
            <ul>
              {project.highlights.map((highlight, i) => {
                return (
                  <RenderHighlight
                    key={i}
                    highlight={highlight}
                    filters={filters}
                  />
                )
              })}
            </ul>
          </div>
        </div>
      )}
    </React.Fragment>
  )
}

JobProject.propTypes = {
  project: PropTypes.object,
  collapseCallback: PropTypes.func,
  collapsed: PropTypes.object,
  sections: PropTypes.array,
  projects: PropTypes.object,
  filters: PropTypes.array,
}

export default React.memo(JobProject)

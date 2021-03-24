import React from "react";

import { PROJECT_BLURBS } from "../filter_types";
import "../styles/Experience.css";

const renderHighlight = (highlight, filters) => {
  if (Object.keys(filters).length && highlight.tech) {
    let shouldDisplay = highlight.tech.reduce((sd, f) => {
      return sd || filters[f];
    }, false);
    if (!shouldDisplay) {
      return null;
    }
  }

  return (
    <li key={highlight.blurb}>
      {highlight.blurb}
      {renderTech(highlight.tech, filters)}
    </li>
  );
};

const renderTech = (tech = [], filters) => {
  if (!tech.length) {
    return null;
  }

  return (
    <div className="project-tech-box">
      <span className="subsubheading">Technology used:</span>
      <span className="project-tech">{tech.join(", ")}</span>
    </div>
  );
};

const Experience = ({
  experience,
  filters: all_filters,
  sections,
  projects,
  collapsed,
  collapseCallback,
}) => {
  let filters = Object.keys(all_filters).reduce((acc, f) => {
    if (all_filters[f]) {
      acc[f] = true;
    }
    return acc;
  }, {});

  return (
    <div className="container-fluid section experience">
      <div className="row">
        <div className="col section-header">Experience</div>
      </div>
      {experience.map((job) => {
        return [
          <div
            className="row job-company"
            key="name"
            onClick={() => {
              collapseCallback(job.id);
            }}
          >
            <div className="col-sm">
              <span className="employer">{job.employer}</span>
              <span className="location">, {job.location}</span>
            </div>
            <div className="col-sm duration">
              <div className="float-right">
                {job.duration.from} - {job.duration.to}
              </div>
            </div>
          </div>,
          job.title &&
            job.title.map((role) => {
              return (
                <div className="row" key={role}>
                  <div className="col job-role">{role}</div>
                </div>
              );
            }),
          job.projects &&
            !collapsed[job.id] &&
            job.projects.map((project) => {
              const project_name = project.project;
              return [
                <div
                  className="row job-project"
                  key={`${project_name}-info`}
                  onClick={() => {
                    collapseCallback(project_name);
                  }}
                >
                  <div className="col-md">
                    <span className="job-project-name">{project_name}</span>
                    <span className="project-role">{project.role}</span>
                    <span className="project-members">
                      {project.members} person team
                    </span>
                    {project.url && (
                      <span className="float-right">
                        {project.url.map((url) => (
                          <a
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {" "}
                            {url}
                          </a>
                        ))}
                      </span>
                    )}
                  </div>
                  <div className="col-md date order-sm-last">
                    <div className="float-right">{project.date}</div>
                  </div>
                </div>,
                projects[project_name] && sections[PROJECT_BLURBS] && (
                  <div className="row" key={`${project_name}-blurb`}>
                    <div className="col-md project-blurb order-md-first">
                      {projects[project_name].blurb}
                    </div>
                    {projects[project_name].url && (
                      <div className="col-md order-first">
                        <ul
                          style={{ listStyle: "none" }}
                          className="float-right"
                        >
                          {projects[project_name].url.map((url) => {
                            return (
                              <li key={url}>
                                <a
                                  href={url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  {url}
                                </a>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    )}
                  </div>
                ),
                project.highlights && !collapsed[project.project] && (
                  <div
                    className="row project-highlight"
                    key={`${project_name}-highlights`}
                  >
                    <div className="col highlight">
                      <ul>
                        {project.highlights.map((highlight) => {
                          return renderHighlight(highlight, filters);
                        })}
                      </ul>
                    </div>
                  </div>
                ),
              ];
            }),
        ];
      })}
    </div>
  );
};

export default React.memo(Experience);

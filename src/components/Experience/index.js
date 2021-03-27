import React from "react"
import PropTypes from "prop-types"
import { Card, Typography, Timeline } from "antd"

import JobProject from "./JobProject"

import "./Experience.css"

const { Title } = Typography

const Experience = ({
  experience,
  tech_filters,
  sections,
  projects,
  collapsed,
  collapseCallback,
}) => {
  return (
    <Card size="small" title={<Title level={2}>Experience</Title>}>
      <Timeline>
        {experience.map((job) => (
          <Timeline.Item
            key={job.id}
            color={job.duration.to === "present" ? "green" : undefined}
          >
            <div
              className="job-container"
              onClick={() => {
                collapseCallback(job.id)
              }}
            >
              <span className="job-name">
                <span className="employer">{job.employer}</span>
                <span className="location">, {job.location}</span>
              </span>
              {job.url && (
                <a
                  href={job.url}
                  onClick={(e) => e.stopPropagation()}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {job.url}
                </a>
              )}
              <span className="duration">
                {job.duration.from} - {job.duration.to}
              </span>
            </div>
            {job.title &&
              job.title.map((role) => (
                <div key={role}>
                  <div className="job-role">{role}</div>
                </div>
              ))}
            {job.projects &&
              !collapsed[job.id] &&
              job.projects.map((project) => (
                <JobProject
                  key={project.id}
                  project={project}
                  collapsed={collapsed}
                  sections={sections}
                  projects={projects}
                  collapseCallback={collapseCallback}
                  filters={tech_filters}
                />
              ))}
          </Timeline.Item>
        ))}
      </Timeline>
    </Card>
  )
}

Experience.propTypes = {
  experience: PropTypes.object,
  tech_filters: PropTypes.array,
  sections: PropTypes.object,
  projects: PropTypes.object,
  collapsed: PropTypes.bool,
  collapseCallback: PropTypes.func,
}

export default React.memo(Experience)

import React from "react";
import { Card, Typography, List, Timeline } from "antd";

import Tech from "components/Tech";
import RenderHighlight from "./RenderHighlight";
import JobProject from "./JobProject";

import { PROJECT_BLURBS } from "filter_types";
import "./Experience.css";

const { Title, Text } = Typography;

const Experience = ({
  experience,
  tech_filters,
  sections,
  projects,
  collapsed,
  collapseCallback,
}) => {
  return (
    <Card title={<Title level={2}>Experience</Title>}>
      <Timeline>
        {experience.map((job) => (
          <Timeline.Item
            key={job.id}
            color={job.duration.to === "present" ? "green" : undefined}
          >
            <div
              className="job-container"
              onClick={() => {
                collapseCallback(job.id);
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
  );
};

export default React.memo(Experience);

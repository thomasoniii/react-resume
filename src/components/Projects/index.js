import React from "react";

import { Card, Typography, List } from "antd";

import "./Projects.css";

const { Title, Text } = Typography;

const Projects = ({ projects, filters, collapsed, collapseCallback }) => {
  const filteredProjects = projects.filter(
    (project) =>
      !filters.length ||
      !project.tech ||
      project.tech.some((t) => filters.includes(t))
  );

  if (!filteredProjects.length) {
    return null;
  }
  return (
    <Card title={<Title level={2}>Projects</Title>}>
      <List
        dataSource={filteredProjects}
        renderItem={(project) => (
          <List.Item>
            <List.Item.Meta
              title={
                <div
                  className="project-container"
                  onClick={() => {
                    collapseCallback(project.id);
                  }}
                >
                  <span className="project-name">
                    <Text strong>{project.name}</Text>
                  </span>
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.url}
                    </a>
                  )}
                  <span className="date">{project.date}</span>
                </div>
              }
              description={
                <>
                  {!collapsed[project.id] && <div>{project.description}</div>}
                  {!collapsed[project.id] && project.tech && (
                    <div>
                      Skills used:
                      <span className="tech">{project.tech.join(", ")}</span>
                    </div>
                  )}
                </>
              }
            />
          </List.Item>
        )}
      />
    </Card>
  );
};

const OProjects = ({ projects, filters, collapsed, collapseCallback }) => {
  const filteredProjects = projects.filter(
    (project) =>
      !filters.length ||
      !project.tech ||
      project.tech.some((t) => filters.includes(t))
  );

  return (
    <div className="container-fluid section projects">
      <div className="row">
        <div className="col section-header">Other Projects</div>
      </div>
      {filteredProjects.map((project) => {
        return (
          <React.Fragment key={project.name}>
            <div
              className="row project-name"
              key={project.name}
              onClick={() => {
                collapseCallback(project.id);
              }}
            >
              <div className="col-md project">{project.name}</div>
              {project.url && (
                <div className="col-md-2 oneline">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.url}
                  </a>
                </div>
              )}
              <div className="col-md date order-sm-last">
                <div className="float-right">{project.date}</div>
              </div>
            </div>
            {!collapsed[project.id] && (
              <div className="row" key={project.description}>
                <div className="col">{project.description}</div>
              </div>
            )}
            {!collapsed[project.id] && project.tech && (
              <div className="row" key={project.tech.join(",")}>
                <div className="col">
                  Skills used:{" "}
                  <span className="tech">{project.tech.join(", ")}</span>
                </div>
              </div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default React.memo(Projects);

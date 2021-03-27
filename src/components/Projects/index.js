import React from "react"
import PropTypes from "prop-types"

import { Card, Typography, List } from "antd"
import Tech from "components/Tech"

import "./Projects.css"

const { Title, Text } = Typography

const Projects = ({ projects, filters, collapsed, collapseCallback }) => {
  const filteredProjects = projects.filter(
    (project) =>
      !filters.length ||
      !project.tech ||
      project.tech.some((t) => filters.includes(t))
  )

  if (!filteredProjects.length) {
    return null
  }
  return (
    <Card size="small" title={<Title level={2}>Projects</Title>}>
      <List
        dataSource={filteredProjects}
        renderItem={(project) => (
          <List.Item>
            <List.Item.Meta
              title={
                <div
                  className="project-container"
                  onClick={() => {
                    collapseCallback(project.id)
                  }}
                >
                  <span className="project-name">
                    <Text strong>{project.name}</Text>
                  </span>
                  {project.url && (
                    <a
                      href={project.url}
                      onClick={(e) => e.stopPropagation()}
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
                  {!collapsed[project.id] && <Tech tech={project.tech} />}
                </>
              }
            />
          </List.Item>
        )}
      />
    </Card>
  )
}

Projects.propTypes = {
  projects: PropTypes.array,
  filters: PropTypes.array,
  collapsed: PropTypes.object,
  collapseCallback: PropTypes.func,
}

export default React.memo(Projects)

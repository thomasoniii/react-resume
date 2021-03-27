import React from "react"
import PropTypes from "prop-types"
import { List, Card, Typography } from "antd"

import "./Skills.css"

const { Title, Text } = Typography

const NonMemoSkillDuration = ({ skill }) => {
  const duration = skill.blurb.since
    ? `${new Date().getFullYear() - skill.blurb.since} years`
    : skill.blurb.duration
  return (
    <>
      <span className="skill-duration">{duration}</span>
      {skill.blurb.level && (
        <span className="skill-level">{skill.blurb.level}</span>
      )}
    </>
  )
}

NonMemoSkillDuration.propTypes = { skill: PropTypes.object }

const SkillDuration = React.memo(NonMemoSkillDuration)

const NonMemoRenderSkillSet = ({ set, filters = [] }) => {
  return set.map((cat) => {
    const filteredItems = cat.items.filter(
      (item) =>
        !filters.length ||
        !item.tech ||
        item.tech.some((t) => filters.includes(t))
    )
    return (
      <List
        size="small"
        key={cat.type}
        header={<Title level={4}>{cat.type}</Title>}
        dataSource={filteredItems}
        renderItem={(skill) => (
          <List.Item className="skill-item">
            <span className="skill-label">
              <Text strong>{skill.label}</Text>
            </span>
            <span className="skill-value">
              <SkillDuration skill={skill} />
            </span>
          </List.Item>
        )}
      />
    )
  })
}

NonMemoRenderSkillSet.propTypes = {
  set: PropTypes.array,
  filters: PropTypes.array,
}

const RenderSkillSet = React.memo(NonMemoRenderSkillSet)

const Skills = ({ skills, filters }) => {
  const professional = skills["Professional Skills"]
  const additional = skills["Additional Skills"]

  return (
    <Card size="small" title={<Title level={2}>Skills</Title>}>
      <div className="skills-container">
        <RenderSkillSet set={professional} filters={filters} />
        <RenderSkillSet set={additional} filters={filters} />
      </div>
    </Card>
  )
}

Skills.propTypes = { skills: PropTypes.object, filters: PropTypes.array }

export default React.memo(Skills)

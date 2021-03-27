import React from "react";
import { List, Card, Typography } from "antd";

import "./Skills.css";

const { Title, Text } = Typography;

const NonMemoSkillDuration = ({ skill }) => {
  const duration = skill.blurb.since
    ? `${new Date().getFullYear() - skill.blurb.since} years`
    : skill.blurb.duration;
  return (
    <>
      <span className="skill-duration">{duration}</span>
      {skill.blurb.level && (
        <span className="skill-level">{skill.blurb.level}</span>
      )}
    </>
  );
};

const SkillDuration = React.memo(NonMemoSkillDuration);

const NonMemoRenderSkillSet = ({ set, filters = [] }) => {
  return set.map((cat) => {
    const filteredItems = cat.items.filter(
      (item) =>
        !filters.length ||
        !item.tech ||
        item.tech.some((t) => filters.includes(t))
    );
    return (
      <List
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
    );
  });
};

const RenderSkillSet = React.memo(NonMemoRenderSkillSet);

const Skills = ({ skills, filters }) => {
  let professional = skills["Professional Skills"];
  let additional = skills["Additional Skills"];

  return (
    <Card title={<Title level={2}>Skills</Title>}>
      <div className="skills-container">
        <RenderSkillSet set={professional} filters={filters} />
        <RenderSkillSet set={additional} filters={filters} />
      </div>
    </Card>
  );
};

export default React.memo(Skills);

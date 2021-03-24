import React from "react";

import "./Skills.css";

const NonMemoRenderSkillSet = ({ set, filters }) => {
  return set.map((cat) => {
    return (
      <ul key={cat.type} className="skill-cat-list">
        <li className="skill-type">{cat.type}</li>
        <li>
          <ul className="skill-list">
            {cat.items.map((skill) => {
              if (Object.keys(filters).length && skill.filters !== undefined) {
                let shouldDisplay = skill.filters.reduce((sd, f) => {
                  return sd || filters[f];
                }, false);
                if (!shouldDisplay) {
                  return null;
                }
              }
              return (
                <li key={skill.label}>
                  <span className="skill-label">{skill.label}</span>
                  <span className="float-right">
                    <span className="skill-duration">
                      {skill.blurb.duration}
                    </span>
                    {skill.blurb.level && (
                      <span className="skill-level">{skill.blurb.level}</span>
                    )}
                  </span>
                </li>
              );
            })}
          </ul>
        </li>
      </ul>
    );
  });
};

const RenderSkillSet = React.memo(NonMemoRenderSkillSet);

const Skills = (props) => {
  let professional = props.skills["Professional Skills"];
  let additional = props.skills["Additional Skills"];
  let filters = Object.keys(props.filters).reduce((acc, f) => {
    if (props.filters[f]) {
      acc[f] = true;
    }
    return acc;
  }, {});

  return (
    <div className="container-fluid section skills">
      <div className="row">
        <div className="col section-header">Skills</div>
      </div>
      <div className="row">
        <div className="col-sm">
          <RenderSkillSet set={professional} filters={filters} />
        </div>
        <div className="col-sm">
          <RenderSkillSet set={additional} filters={filters} />
        </div>
      </div>
    </div>
  );
};

export default React.memo(Skills);

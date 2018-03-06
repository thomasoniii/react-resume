import React from 'react';

import './styles/Skills.css';

const renderSkillSet = set => {
  return set.map(cat => {
    return (
      <ul key={cat.type} className='skill-cat-list'>
        <li className='skill-type'>{cat.type}</li>
        <li>
          <ul className='skill-list'>
            { cat.items.map(skill => {
              return (
                <li key={skill.label}>
                  <span className='skill-label'>{skill.label}</span>
                  <span className='float-right'>
                    <span className='skill-duration'>{skill.blurb.duration}</span>
                    { skill.blurb.level && <span className='skill-level'>{skill.blurb.level}</span> }
                  </span>
                </li>
              )
            })}
          </ul>
        </li>
      </ul>
    )
  });
};

export default (props) => {

  let professional = props.skills['Professional Skills'];
  let additional   = props.skills['Additional Skills'];

  return (
    <div className='container-fluid section skills'>
      <div className='row'>
        <div className='col section-header'>Skills</div>
      </div>
      <div className='row'>
        <div className='col-sm'>
          { renderSkillSet(professional) }
        </div>
        <div className='col-sm'>
          { renderSkillSet(additional) }
        </div>
      </div>
    </div>
  )
}

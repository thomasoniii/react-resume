import React from 'react';

import './styles/Projects.css';

export default ( ({projects}) => {
  return (
    <div className='container-fluid section projects'>
      <div className='row'>
        <div className='col section-header'>
          Other Projects
        </div>
      </div>
      { projects.map( project => {
        return [
          <div className='row' key={project.name}>
            <div className='col-md project'>
              {project.name}
              {project.url && (
                <a href = {project.url} target='_blank'> {project.url}</a>
              )}
            </div>
            <div className='col-md date order-sm-last'><div className='float-right'>{project.date}</div></div>
          </div>,
          <div className='row' key={project.description}>
            <div className='col'>{ project.description }</div>
          </div>,
          project.tech && (
            <div className='row' key={project.tech.join(',')}>
              <div className='col'>
                Skills used: <span className='tech'>{ project.tech.join(', ')}</span>
              </div>
            </div>
          )
        ]
      })}
    </div>
  )
})

import React from 'react';

import './styles/Projects.css';

export default ( ({projects, filters : all_filters, collapsed, collapseCallback }) => {
  let filters = Object.keys(all_filters).reduce( (acc, f) => { if (all_filters[f]) { acc[f] = true }; return acc }, {});
  console.log("PROJECTS COLLAPSED : ", collapsed);
  return (
    <div className='container-fluid section projects'>
      <div className='row'>
        <div className='col section-header'>
          Other Projects
        </div>
      </div>
      { projects.map( project => {
        if (Object.keys(filters).length && project.tech) {
          console.log("DISPLAY TECH : ", project.tech, filters);
          let shouldDisplay = project.tech.reduce( (sd, f) => {return sd || filters[f]}, false);
          if (!shouldDisplay) { return null };
        }
        return [
          <div className='row project-name' key={project.name} onClick={() => {collapseCallback(project.name)}}>
            <div className='col-md project'>
              {project.name}
            </div>
            {project.url && (
              <div className='col-md'><a href = {project.url} target='_blank'> {project.url}</a></div>
            )}
            <div className='col-md date order-sm-last'><div className='float-right'>{project.date}</div></div>
          </div>,
          !collapsed[project.id] && <div className='row' key={project.description}>
            <div className='col'>{ project.description }</div>
          </div>,
          !collapsed[project.id] && project.tech && (
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

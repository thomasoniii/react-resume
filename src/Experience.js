import React from 'react';

import './styles/Experience.css';

export default ({experience, projects}) => {
  return (
    <div className='container-fluid section projects'>
      <div className='row'>
        <div className='col section-header'>
          Experience
        </div>
      </div>
      { experience.map( job => {
        return [
          <div className='row' key='name'>
            <div className='col-sm'>
              <span className='employer'>{job.employer}</span>
              <span className='location'>, {job.location}</span>
            </div>
            <div className='col-sm duration'>
              <div className='float-right'>{job.duration.from} - {job.duration.to}</div>
            </div>
          </div>,
          job.title && job.title.map( role => {
            return (
              <div className='row' key={role}>
                <div className='col job-role'>
                  { role }
                </div>
              </div>
            )
          }),
          job.projects && job.projects.map( project => {
            const project_name = project.project;
            return [
              <div className='row job-project' key={`${project_name}-info`}>
                <div className='col-md'>
                  <span className='project-name'>{project_name}</span>
                  <span className='project-role'>{project.role}</span>
                  <span className='project-members'>{project.members} person team</span>
                  {project.url && (
                    <span className='float-right'>
                      { project.url.map(url => <a href = {url} target='_blank'> {url}</a>) }
                    </span>
                  )}
                </div>
                <div className='col-md date order-sm-last'>
                  <div className='float-right'>
                    {project.date}
                  </div>
                </div>
              </div>,
              projects[project_name] && <div className='row' key={`${project_name}-blurb`}>
                <div className='col-md project-blurb order-md-first'>
                  { projects[project_name].blurb }
                </div>
                {projects[project_name].url && (
                  <div className='col-md order-first'>
                    <ul style={{listStyle : 'none'}} className='float-right'>
                      {projects[project_name].url.map(url => {
                        return <li key={url}><a href = {url} target='_blank'>{url}</a></li>
                      })}
                    </ul>
                  </div>
                )}
              </div>,
              project.highlights && (
                <div className='row project-highlight' key={`${project_name}-highlights`}>
                  <div className='col highlight'>
                    <ul>
                      {project.highlights.map(highlight => {
                        return (
                          <li key={highlight.blurb}>
                            { highlight.blurb }
                            { highlight.tech && (<div className='project-tech-box'><span className='subsubheading'>Technology used:</span> <span className='project-tech'>{highlight.tech.join(', ')}</span></div>)}</li>
                        )
                      })}
                    </ul>
                  </div>
                </div>
              ),
            ]
          })
        ]
      })}
    </div>
  )
}

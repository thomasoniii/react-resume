import React from 'react';

import './styles/Education.css';

export default ({ schools }) => {
  return (
    <div className='section education container-fluid'>
      <div className='row'>
        <div className='col section-header'>Education</div>
      </div>
      {schools.map( school => {
        return (
          [
            <div className='row' key='name'>
              <div className='col school'>
                <span className='school'>{ school.school }</span>,
                <span className='location'> { school.location}</span>
              </div>
              <div className='col'>
                <div className='float-right date'>
                  { school.date }
                </div>
              </div>
            </div>,
            <div className='row' key='results'>
              <div className='col results'>{ school.results}</div>
            </div>
          ]
        )
      })}
    </div>
  )
}

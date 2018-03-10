import React from 'react';

export default ({summary}) => {
  return (
    <div className='container-fluid section'>
      <div className='row'>
        <div className='col section-header'>Summary</div>
      </div>
      <div className='row'>
        <div className='col'>
          {summary.map( (p,i) => <p key={i}>{p}</p>)}
        </div>
      </div>
    </div>
  )
};

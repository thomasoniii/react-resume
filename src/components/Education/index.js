import React from "react";

import "./Education.css";

const NonMemoSchool = ({ school }) => (
  <>
    <div className="row" key="name">
      <div className="col-sm school">
        <span className="school">{school.school}</span>,
        <span className="location"> {school.location}</span>
      </div>
      <div className="col-sm">
        <div className="float-right date">{school.date}</div>
      </div>
    </div>
    <div className="row" key="results">
      <div className="col results">{school.results}</div>
    </div>
  </>
);

const School = React.memo(NonMemoSchool);

const Education = ({ schools }) => {
  return (
    <div className="section education container-fluid">
      <div className="row">
        <div className="col section-header">Education</div>
      </div>
      {schools.map((school) => (
        <School school={school} key={school.school} />
      ))}
    </div>
  );
};

export default React.memo(Education);

import React from "react";

const Tech = ({ tech = [] }) => {
  if (!tech.length) {
    return null;
  }
  return (
    <div>
      Technology used:
      <span className="tech">{tech.join(", ")}</span>
    </div>
  );
};

export default React.memo(Tech);

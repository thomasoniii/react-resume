import React from "react";

import "./Experience.css";

const NonMemoRenderTech = ({ tech = [] }) => {
  if (!tech.length) {
    return null;
  }

  return (
    <div className="project-tech-box">
      <span className="subsubheading">Technology used:</span>
      <span className="project-tech">{tech.join(", ")}</span>
    </div>
  );
};

const RenderTech = React.memo(NonMemoRenderTech);

const NonMemoRenderHighlight = ({ highlight, filters }) => {
  if (Object.keys(filters).length && highlight.tech) {
    let shouldDisplay = highlight.tech.reduce((sd, f) => {
      return sd || filters[f];
    }, false);
    if (!shouldDisplay) {
      return null;
    }
  }

  return (
    <li key={highlight.blurb}>
      {highlight.blurb}
      <RenderTech tech={highlight.tech} />
    </li>
  );
};

const RenderHighlight = React.memo(NonMemoRenderHighlight);

export default RenderHighlight;

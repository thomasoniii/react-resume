import React from "react";

import "../../styles/Experience.css";

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
      <RenderTech tech={highlight.tech} filters={filters} />
    </li>
  );
};

const RenderHighlight = React.memo(NonMemoRenderHighlight);

const NonMemoRenderTech = ({ tech = [], filters }) => {
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

export default RenderHighlight;

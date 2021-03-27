import React from "react";

import Tech from "components/Tech";

import "./Experience.css";

const NonMemoRenderTech = ({ tech = [] }) => {
  if (!tech.length) {
    return null;
  }

  return (
    <div className="project-tech-box">
      <Tech tech={tech} />
    </div>
  );
};

const RenderTech = React.memo(NonMemoRenderTech);

const NonMemoRenderHighlight = ({ highlight, filters = [] }) => {
  if (
    filters.length &&
    highlight.tech &&
    !highlight.tech.some((t) => filters.includes(t))
  ) {
    return null;
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

import React, { PureComponent } from "react";
import { useSelector, useDispatch } from "react-redux";

import { toggleFilter, expandAll, collapseAll } from "../actions";

import "../styles/Filters.css";

const Filters = () => {
  const { section_order, section_filters, filters, order } = useSelector(
    (state) => state.filters
  );
  const dispatch = useDispatch();

  return (
    <div className="container-fluid filter-container">
      <div className="row">
        <div className="col">
          You{"'"}re busy.{" "}
          <span style={{ textDecoration: "underline" }}>
            Filter down the resume to only show what you want.
          </span>
        </div>
      </div>
      <div className="row">
        <div className="col filter-section">
          {section_order.map((filter) => {
            return (
              <button
                className={`btn btn-sm filter-btn ${
                  section_filters[filter] ? "btn-primary" : "btn-secondary"
                }`}
                key={filter}
                onClick={() => dispatch(toggleFilter(filter))}
              >
                {filter}
              </button>
            );
          })}
        </div>
      </div>
      <div className="row">
        <div className="col filter-section">
          {order.map((filter) => {
            return (
              <button
                className={`btn btn-sm filter-btn ${
                  filters[filter] ? "btn-primary" : "btn-secondary"
                }`}
                key={filter}
                onClick={() => dispatch(toggleFilter(filter))}
              >
                {filter}
              </button>
            );
          })}
        </div>
      </div>
      <div className="row">
        <div className="col filter-section">
          <button
            className="btn btn-info filter-btn"
            onClick={() => dispatch(expandAll())}
          >
            Expand all sub-sections
          </button>
          <button
            className="btn btn-info filter-btn"
            onClick={() => dispatch(collapseAll())}
          >
            Collapse all sub-sections
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col">
          Click on company names and projects to expand/collapse individual
          jobs, if you want to see the old stuff from years ago.
        </div>
      </div>
    </div>
  );
};

export default React.memo(Filters);

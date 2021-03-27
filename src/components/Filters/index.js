import React from "react"
import { Select, Button } from "antd"
import { useSelector, useDispatch } from "react-redux"

import {
  setTechFilters,
  setSectionFilters,
  expandAll,
  collapseAll,
} from "actions"

import "./Filters.css"

const { Option } = Select

const Filters = () => {
  const {
    section_order,
    section_filters,
    tech_filters,
    tech_order,
  } = useSelector((state) => state.filters)
  const dispatch = useDispatch()

  return (
    <div className="filter-container">
      <div className="instructions">
        You&apos;re busy. Filter down the resume to only show what you want.
      </div>
      <div className="filter-section">
        <div className="filter-section-label">Resume sections:</div>
        <Select
          mode="multiple"
          allowClear
          placeholder="Sections"
          defaultValue={section_filters}
          onChange={(filters) => dispatch(setSectionFilters(filters))}
          style={{ width: "100%" }}
        >
          {section_order.map((section) => (
            <Option key={section}>{section}</Option>
          ))}
        </Select>
      </div>
      <div className="filter-section">
        <div className="filter-section-label">Technology:</div>
        <Select
          mode="multiple"
          allowClear
          placeholder="Technology"
          defaultValue={tech_filters}
          onChange={(filters) => dispatch(setTechFilters(filters))}
          style={{ width: "100%" }}
        >
          {tech_order.map((tech) => (
            <Option key={tech}>{tech}</Option>
          ))}
        </Select>
      </div>
      <div className="filter-section">
        <div className="filter-buttons">
          <Button onClick={() => dispatch(expandAll())}>
            Expand all sub-sections
          </Button>
          <Button onClick={() => dispatch(collapseAll())}>
            Collapse all sub-sections
          </Button>
        </div>
      </div>
      <div className="instructions">
        Click on company names and projects to expand/collapse individual jobs,
        if you want to see the old stuff from years ago.
      </div>
    </div>
  )
}

export default React.memo(Filters)

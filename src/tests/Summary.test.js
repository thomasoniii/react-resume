import React from "react"
import ReactDOM from "react-dom"
import renderer from "react-test-renderer"

import Summary from "../components/Summary"
import resume from "../data/resume-example.json"

// <Summary    filters={ filters } summary={resume.summary}       key='summary'/>

const filters = {}

describe("Education tests", () => {
  test("Summary exists properly", () => {
    const summary = renderer.create(
      <Summary filters={filters} summary={resume.summary} />
    )

    const tree = summary.toJSON()
    expect(tree).toMatchSnapshot()
  })
})

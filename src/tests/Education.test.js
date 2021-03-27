import React from "react"
import ReactDOM from "react-dom"
import renderer from "react-test-renderer"

import Education from "../components/Education"
import resume from "../data/resume-example.json"

// <Education  filters={ filters } schools={resume.education}     key='education'/>

const filters = {}

describe("Education tests", () => {
  test("Education exists properly", () => {
    const education = renderer.create(
      <Education filters={filters} schools={resume.education} />
    )

    const tree = education.toJSON()
    expect(tree).toMatchSnapshot()
  })
})

import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import Experience from '../components/Experience';
import resume from '../data/resume-example.json';

/*
<Experience
  filters={ filters }
  experience={resume.experience}
  projects={resume.projects}
  sections={sections}
  collapsed={collapsed}
  collapseCallback={this.props.toggleCollapsed}
  key='experience'/>
*/

const filters = {};
const collapsed = {};
const collapsedCallback = () => {};
const sections = {};

test('Experience exists properly', () => {
  const experience = renderer.create(
    <Experience
      filters={ filters }
      experience={resume.experience}
      projects={resume.projects}
      sections={sections}
      collapsed={collapsed}
      collapseCallback={collapsedCallback}
      />
  );

  let tree = experience.toJSON();
  expect(tree).toMatchSnapshot();
});

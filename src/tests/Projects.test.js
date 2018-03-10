import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import Projects from '../components/Projects';
import resume from '../data/resume-example.json';

/*
<Projects
  filters={ filters }
  projects={resume.other}
  collapsed={collapsed}
  collapseCallback={this.props.toggleCollapsed}
  key='projects'/>,
*/

const filters = {};
const collapsed = {};
const collapsedCallback = () => {};

describe('Other Projects tests', () => {
  test('Projects exists properly', () => {
    const projects = renderer.create(
      <Projects
        filters={filters}
        projects={resume.other}
        collapsed={collapsed}
        collapsedCallback={collapsedCallback}
      />
    );

    let tree = projects.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

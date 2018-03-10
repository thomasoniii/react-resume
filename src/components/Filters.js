import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import {toggleFilter, expandAll, collapseAll} from '../actions';

import '../styles/Filters.css';

class Filters extends PureComponent {
  render() {
    return (
      <div className='container-fluid filter-container'>
        <div className='row'>
          <div className='col'>
            You{"'"}re busy. <span style={{textDecoration : 'underline'}}>Filter down the resume to only show what you want.</span>
          </div>
        </div>
        <div className='row'>
          <div className='col filter-section'>
            { this.props.section_order.map( filter => {
              return (
                <button
                  className={`btn btn-sm filter-btn ${this.props.section_filters[filter] ? 'btn-primary' : 'btn-secondary'}`}
                  key={filter}
                  onClick={() => this.props.toggleFilter(filter)}
                  >
                    { filter }
                </button>
              )
            })}
          </div>
        </div>
        <div className='row'>
          <div className='col filter-section'>
            { this.props.order.map( filter => {
              return (
                <button
                  className={`btn btn-sm filter-btn ${this.props.filters[filter] ? 'btn-primary' : 'btn-secondary'}`}
                  key={filter}
                  onClick={() => this.props.toggleFilter(filter)}
                  >
                    { filter }
                </button>
              )
            })}
          </div>
        </div>
        <div className='row'>
          <div className='col filter-section'>
            <button
              className='btn btn-info filter-btn'
              onClick={this.props.expandAll}>
                Expand all sub-sections
            </button>
            <button
              className='btn btn-info filter-btn'
              onClick={this.props.collapseAll}>
                Collapse all sub-sections
            </button>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            Click on company names and projects to expand/collapse individual jobs, if you want to see the old stuff from years ago.
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({filters}) => {
  return filters;
}

export default connect(mapStateToProps, {toggleFilter, expandAll, collapseAll})(Filters);

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import {toggleFilter} from './actions';

import './styles/Filters.css';

class Filters extends PureComponent {
  render() {
    console.log(this.props.order, this.props.filters);
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
          <div className='col'>
            Click on company names to expand/collapse individual jobs, if you want to see the old stuff.
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({filters}) => {
  return filters;
}

export default connect(mapStateToProps, {toggleFilter})(Filters);

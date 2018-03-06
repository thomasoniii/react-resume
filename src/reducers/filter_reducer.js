import { SET_FILTERS, ADD_FILTER, ADD_FILTERS, DROP_FILTER, TOGGLE_FILTER } from '../actions/types';

import * as types from '../filter_types';

const filters = Object.values(types).reduce((acc, type) => {acc[type] = true; return acc}, {});

const INITIAL = {
  section_order   : [types.SUMMARY, types.SKILLS, types.EXPERIENCE, types.OTHER_PROJECTS, types.EDUCATION, types.PROJECT_BLURBS],
  section_filters : {...filters},
  order : [],
  filters : {}
};

INITIAL.section_filters[types.PROJECT_BLURBS] = false;

export default (state = INITIAL, action) => {

  switch (action.type) {
    case SET_FILTERS : {
      return {
        ...INITIAL,
        order   : action.payload,
        filters : action.payload.reduce( (acc, filter) => { acc[filter] = false; return acc }, {})
      };
    }
    case ADD_FILTERS : {
      return {
        ...INITIAL,
        order   : state.order,
        filters : {...state.filters, ...action.payload.reduce( (acc, filter) => { acc[filter] = true; return acc }, {})}
      };
    }
    case ADD_FILTER : {
      let newState = {...state};
      if (newState.section_filters[action.payload] !== undefined) {
        newState.section_filters = {...newState.section_filters, [action.payload] : true}
      }
      else if (newState.filters[action.payload] !== undefined) {
        newState.filters = {...newState.filters, [action.payload] : true}
      }
      return newState;
    }
    case DROP_FILTER : {
      let newState = {...state};
      if (newState.section_filters[action.payload] !== undefined) {
        newState.section_filters = {...newState.section_filters, [action.payload] : false}
      }
      else if (newState.filters[action.payload] !== undefined) {
        newState.filters = {...newState.filters, [action.payload] : false}
      }
      return newState;
    }
    case TOGGLE_FILTER : {
      let newState = {...state};
      if (newState.section_filters[action.payload] !== undefined) {
        newState.section_filters = {...newState.section_filters, [action.payload] : !newState.section_filters[action.payload]}
      }
      else if (newState.filters[action.payload] !== undefined) {
        newState.filters = {...newState.filters, [action.payload] : !newState.filters[action.payload]}
      }
      return newState;
    }
    default : {
      return state;
    }
  }
}

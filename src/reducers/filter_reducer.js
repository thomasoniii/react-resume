import { SET_FILTERS, ADD_FILTER, ADD_FILTERS, DROP_FILTER, TOGGLE_FILTER } from '../actions/types';

import * as types from '../filter_types';

const INITIAL = {
  order   : [types.SUMMARY, types.SKILLS, types.EXPERIENCE, types.OTHER_PROJECTS, types.EDUCATION, types.PROJECT_BLURBS],
  filters : Object.values(types).reduce((acc, type) => {acc[type] = true; return acc}, {})
};
console.log("INITIAL : ", INITIAL);
export default (state = INITIAL, action) => {

  switch (action.type) {
    case SET_FILTERS : {
      console.log("FILTERS : ", action.payload);
      return {
        order   : [...INITIAL.order, ...action.payload],
        filters : {...INITIAL.filters, ...action.payload.reduce( (acc, filter) => { acc[filter] = false; return acc }, {})}
      };
    }
    case ADD_FILTERS : {
      return {
        order   : state.order,
        filters : {...state.filters, ...action.payload.reduce( (acc, filter) => { acc[filter] = true; return acc }, {})}
      };
    }
    case ADD_FILTER : {
      let newState = {order : state.order, filters : {...state.filters}};
      newState.filters[action.payload] = true;
      return newState;
    }
    case DROP_FILTER : {
      let newState = {order : state.order, filters : {...state.filters}};
      newState.filters[action.payload] = false;
      return newState;
    }
    case TOGGLE_FILTER : {
      let newState = {order : state.order, filters : {...state.filters}};
      newState.filters[action.payload] = !newState.filters[action.payload];
      return newState;
    }
    default : {
      return state;
    }
  }
}

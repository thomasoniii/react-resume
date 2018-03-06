import { SET_COLLAPSED, TOGGLE_COLLAPSED, EXPAND_ALL, COLLAPSE_ALL } from '../actions/types';


const INITIAL = {};

export default (state = INITIAL, action) => {

  switch (action.type) {
    case SET_COLLAPSED : {
      return action.payload
    }
    case TOGGLE_COLLAPSED : {
      return {...state, [action.payload] : !state[action.payload]};
    }
    case EXPAND_ALL : {
      return Object.keys(state).reduce( (acc, s) => {acc[s] = false; return acc}, {});
    }
    case COLLAPSE_ALL : {
      return Object.keys(state).reduce( (acc, s) => {acc[s] = true; return acc}, {});
    }
    default : {
      return state;
    }
  }
}

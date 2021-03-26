import {
  SET_SECTION_FILTERS,
  SET_TECH_FILTERS,
  SET_TECH_ORDER,
} from "../actions/types";

import * as types from "../filter_types";

const section_order = [
  types.SUMMARY,
  types.SKILLS,
  types.EXPERIENCE,
  types.OTHER_PROJECTS,
  types.EDUCATION,
  types.PROJECT_BLURBS,
];

const INITIAL = {
  section_order,
  section_filters: section_order.filter((s) => s !== types.PROJECT_BLURBS),
  tech_order: [],
  tech_filters: [],
};

export default (state = INITIAL, action) => {
  switch (action.type) {
    case SET_SECTION_FILTERS: {
      const { filters: section_filters } = action.payload;
      return {
        ...state,
        section_filters,
      };
    }
    case SET_TECH_FILTERS: {
      const { filters: tech_filters } = action.payload;
      return {
        ...state,
        tech_filters,
      };
    }
    case SET_TECH_ORDER: {
      const { order: tech_order } = action.payload;
      return {
        ...state,
        tech_order,
      };
    }

    default: {
      return state;
    }
  }
};

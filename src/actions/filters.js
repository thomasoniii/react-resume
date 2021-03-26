import { SET_SECTION_FILTERS, SET_TECH_FILTERS, SET_TECH_ORDER } from "./types";

export const setSectionFilters = (filters) => ({
  type: SET_SECTION_FILTERS,
  payload: { filters },
});

export const setTechFilters = (filters) => ({
  type: SET_TECH_FILTERS,
  payload: { filters },
});

export const setTechOrder = (order) => ({
  type: SET_TECH_ORDER,
  payload: { order },
});

import {
  ADD_FILTER,
  ADD_FILTERS,
  DROP_FILTER,
  TOGGLE_FILTER,
  SET_FILTERS,
} from "./types";

export const addFilter = (filter) => ({
  type: ADD_FILTER,
  payload: filter,
});

export const addFilters = (filters) => ({
  type: ADD_FILTERS,
  payload: filters,
});

export const dropFilter = (filter) => ({
  type: DROP_FILTER,
  payload: filter,
});

export const toggleFilter = (filter) => ({
  type: TOGGLE_FILTER,
  payload: filter,
});

export const setFilters = (filters) => ({
  type: SET_FILTERS,
  payload: filters,
});

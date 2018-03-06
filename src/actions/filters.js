import { ADD_FILTER, ADD_FILTERS, DROP_FILTER, TOGGLE_FILTER, SET_FILTERS } from './types';

export const addFilter = (filter) => {
  return {
    type : ADD_FILTER,
    payload : filter
  }
}

export const addFilters = (filters) => {
  return {
    type : ADD_FILTERS,
    payload : filters
  }
}

export const dropFilter = (filter) => {
  return {
    type : DROP_FILTER,
    payload : filter
  }
}

export const toggleFilter = (filter) => {
  return {
    type : TOGGLE_FILTER,
    payload : filter
  }
}

export const setFilters = (filters) => {
  return {
    type : SET_FILTERS,
    payload : filters
  }
}

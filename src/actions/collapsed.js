import { SET_COLLAPSED, TOGGLE_COLLAPSED, COLLAPSE_ALL, EXPAND_ALL } from './types';

export const setCollapsed = (collapsed) => {
  return {
    type : SET_COLLAPSED,
    payload : collapsed
  }
}

export const toggleCollapsed = (collapsed) => {
  return {
    type : TOGGLE_COLLAPSED,
    payload : collapsed
  }
}

export const expandAll = () => {
  return {
    type : EXPAND_ALL
  }
}
export const collapseAll = () => {
  return {
    type : COLLAPSE_ALL
  }
}

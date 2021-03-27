import {
  SET_COLLAPSED,
  TOGGLE_COLLAPSED,
  COLLAPSE_ALL,
  EXPAND_ALL,
} from "./types"

export const setCollapsed = (collapsed) => ({
  type: SET_COLLAPSED,
  payload: collapsed,
})

export const toggleCollapsed = (collapsed) => ({
  type: TOGGLE_COLLAPSED,
  payload: collapsed,
})

export const expandAll = () => ({
  type: EXPAND_ALL,
})
export const collapseAll = () => ({
  type: COLLAPSE_ALL,
})

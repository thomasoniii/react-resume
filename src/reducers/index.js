import { combineReducers } from "redux"
import filterReducer from "./filter_reducer"
import collapsedReducer from "./collapsed_reducer"

const rootReducer = combineReducers({
  filters: filterReducer,
  collapsed: collapsedReducer,
})

export default rootReducer

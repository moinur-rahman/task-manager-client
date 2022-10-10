import { combineReducers } from "redux";

import fetchTasksReducer from "./fetchTasksReducer";
import totalPageReducer from "./totalPageReducer";
import currentPageReducer from "./currentPageReducer";
import loadingStateReducer from "./loadingStateReducer";
import getTokenReducer from "./getTokenReducer";

export default combineReducers({
  tasks: fetchTasksReducer,
  totalPages: totalPageReducer,
  currentPage: currentPageReducer,
  loading: loadingStateReducer,
  token: getTokenReducer,
});

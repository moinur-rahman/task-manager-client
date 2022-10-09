import { FETCH_TASKS } from "../actions/types";

const fetchTasksReducer = (state = { tasks: [], totalTasks: 0 }, action) => {
  switch (action.type) {
    case FETCH_TASKS:
      return {
        ...action.payload,
        tasks: action.payload.tasks,
        totalTasks: action.payload.totalTasks,
      };
    default:
      return state;
  }
};

export default fetchTasksReducer;

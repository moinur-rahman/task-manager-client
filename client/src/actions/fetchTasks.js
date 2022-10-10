import taskManagerApi from "../apis/taskManagerApi";

import { setTotalPage,loadingState } from "./index";
import { FETCH_TASKS } from "./types";

const fetchTasks = (currentPage) => async (dispatch) => {
  dispatch(loadingState(true))
  const {
    data: { tasks, totalTasks },
  } = await taskManagerApi().get(
    `/tasks?limit=6&skip=${(currentPage - 1) * 6}&sortBy=createdAt:desc`
  );

  await dispatch({ type: FETCH_TASKS, payload: { tasks, totalTasks } });
  
 dispatch(setTotalPage(totalTasks));
 dispatch(loadingState(false))
};

export default fetchTasks;

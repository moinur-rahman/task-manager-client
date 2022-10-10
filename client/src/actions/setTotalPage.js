import { SET_TOTAL_PAGE } from "./types";

const setTotalPage = (totalTasks) => {
  return {
    type: SET_TOTAL_PAGE,
    payload: Math.ceil(totalTasks / 6),
  };
};

export default setTotalPage;

import { SET_CURRENT_PAGE } from "./types";

const setCurrentPage = (currentPage) => async (dispatch, getState) => {
  if (currentPage < 1) {
    currentPage = 1;
  } else if (currentPage > getState().totalPages) {
    currentPage = getState().totalPages;
  }

  dispatch({
    type: SET_CURRENT_PAGE,
    payload: currentPage,
  });
};

export default setCurrentPage;

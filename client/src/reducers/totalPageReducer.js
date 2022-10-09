import { SET_TOTAL_PAGE } from "../actions/types";

const totalPageReducer = (state = 1, action) => {
  switch (action.type) {
    case SET_TOTAL_PAGE:
   
      return action.payload;
    default:
      return state;
  }
};

export default totalPageReducer;

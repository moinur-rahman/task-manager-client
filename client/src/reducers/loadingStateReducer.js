import { LOADING_STATE } from "../actions/types";

const loadingStateReducer = (state = false, action) => {
  switch (action.type) {
    case LOADING_STATE:
      return action.payload;
    default:
      return state;
  }
};

export default loadingStateReducer;

import { GET_TOKEN } from "../actions/types";

const getTokenReducer = (state = "", action) => {
  switch (action.type) {
    case GET_TOKEN:
      return action.payload;
    default:
      return state;
  }
};

export default getTokenReducer;

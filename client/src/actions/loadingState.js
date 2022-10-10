import { LOADING_STATE } from "./types";

const loadingState = (value) =>  {
  return {
    type: LOADING_STATE,
    payload: value,
  };
};

export default loadingState

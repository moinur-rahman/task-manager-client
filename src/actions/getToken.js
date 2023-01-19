import { GET_TOKEN } from "./types";

const getToken = () => {
  return {
    type: GET_TOKEN,
    payload: localStorage.getItem("token"),
  };
};

export default getToken;

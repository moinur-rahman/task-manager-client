import axios from "axios";

const taskManagerApi = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    baseURL: process.env.REACT_APP_SERVER_BASE_URL,
    headers: {
      Authorization: token,
    },
  });
};

export default taskManagerApi;

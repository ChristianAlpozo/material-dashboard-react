import axios from "axios";

const clientAxios = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/api`,
  // timeout: 1000,
});

export default clientAxios;

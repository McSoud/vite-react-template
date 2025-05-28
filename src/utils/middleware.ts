import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL + "/api";
// axios.defaults.headers.common["Content-Type"] = `application/json`;
axios.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);


import axios from "axios";
export class AxiosMiddleware {
  static boot() {
    axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL + "/api";
    // axios.defaults.headers.common["Content-Type"] = `application/json`;
    axios.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem("token");
        if (token) {
          config.headers["Authorization"] = `Bearer ${token}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      },
    );
    axios.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        // switch (error?.response?.status) {
        //   case 401:
        //     console.error("Unauthorized.");
        //     throw error;
        //   case 403:
        //     console.error("Forbidden.");
        //     throw error;
        //   case 404:
        //     console.error("Not found.");
        //     throw error;
        //   case 422:
        //     console.error("Unprocessable Content.");
        //     throw error;
        //   default:
        //     throw error;
        // }
        throw error;
      },
    );
  }
}

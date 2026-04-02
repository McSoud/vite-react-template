import { LaravelError } from "@mcsoud/types";
import axios, { AxiosError } from "axios";
import { toast } from "sonner";

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
    throw error instanceof Error ? error : new Error(String(error));
  },
);
axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    toast.error(
      (error as AxiosError<LaravelError>).response?.data?.message ||
        "Something went wrong.",
    );
    throw error instanceof Error ? error : new Error(String(error));
  },
);

import axios, { AxiosInstance } from "axios";

const axiosPrivate: Readonly<AxiosInstance> = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 5000,
  headers: { "Content-Type": "application/json" },
});

export default axiosPrivate;

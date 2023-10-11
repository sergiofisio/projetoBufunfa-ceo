import axios, { AxiosInstance } from "axios";

const axiosPrivate: Readonly<AxiosInstance> = axios.create({
  baseURL: "https://bufunfa.onrender.com",
  timeout: 5000,
  headers: { "Content-Type": "application/json" },
});

export default axiosPrivate;

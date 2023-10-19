import axios, { AxiosInstance } from "axios";

// const url = "https://bufunfa.onrender.com";
const url = "http://localhost:4000";

const axiosPrivate: Readonly<AxiosInstance> = axios.create({
  baseURL: url,
  timeout: 5000,
  headers: { "Content-Type": "application/json" },
});
const axiosInit: Readonly<AxiosInstance> = axios.create({
  baseURL: url,
  timeout: 20000,
  headers: { "Content-Type": "application/json" },
});

export default { axiosPrivate, axiosInit };

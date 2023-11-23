import axios, { AxiosInstance } from "axios";

const url: Readonly<string> = "https://bufunfa.onrender.com";
// const url: Readonly<string> = "http://localhost:4000";

const axiosPrivate: Readonly<AxiosInstance> = axios.create({
  baseURL: url,
  timeout: 60000,
  headers: { "Content-Type": "application/json" },
});
const axiosInit: Readonly<AxiosInstance> = axios.create({
  baseURL: url,
  timeout: 60000,
  headers: { "Content-Type": "application/json" },
});

export default { axiosPrivate, axiosInit };

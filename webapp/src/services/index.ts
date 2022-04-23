import axios from "axios";

export const net = axios.create({
  baseURL: "http://localhost:3000/api",
  timeout: 1000,
});

import axios from "axios";

export const backendAxios = axios.create({
  baseURL: "http://localhost:3500",
});

const api = axios.create({
  baseURL: "https://api.agromonitoring.com/agro/1.0",
  params: {
    appid: "04dba98791c3cefc74d0256ec64c6bc9",
  },
});

export default api;

import axios from "axios";

export const backendAxios =  axios.create({
    baseURL: "http://localhost:3500"
})
import axios from "axios";

export const abrasaAPI = axios.create({
    baseURL: "https://abrasa-tickets-backend-production.up.railway.app"
})
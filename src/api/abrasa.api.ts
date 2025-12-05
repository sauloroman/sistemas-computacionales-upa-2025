import axios from "axios";

const { VITE_BACKEND_URL } = import.meta.env

export const abrasaAPI = axios.create({
    baseURL: VITE_BACKEND_URL
})
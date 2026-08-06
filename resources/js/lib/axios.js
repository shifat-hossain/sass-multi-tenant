import axios from "axios";

const headers = {
    "Accept": "application/json",
    "X-Requested-With": "XMLHttpRequest",
}

export const axiosCLient = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_URL,
    headers,
    withCredentials: true,
});
// lib/axiosInstance.ts
// import axios from "axios";

// const api = axios.create({
//     baseURL: "https://api.curator.io/v1/",
//     headers: {
//         "Content-Type": "application/json",
//     },
//     timeout: 10000, // optional timeout
// });

// export default api;

import axios from "axios";

const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
    params: {
        "apikey": "8bad367732ea458a9d5b99af462d3e9f",
    },
});

export default instance;

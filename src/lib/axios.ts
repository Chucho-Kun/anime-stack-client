import axios from "axios"

// http://localhost:4000  /anime/add

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})

export default api
# WEB SITE - ANIME STACK REACT/TypeScript

## Technologies
React + Typescript + TailwindCSS + Axios + Zod + React Router + React Query
## Developer Notes
## Deploy on Vercel
Website hosted on vercel.com server
### Managed with Axios
#### src/lib/axios.ts
```
import axios from "axios"

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL
});

api.interceptors.request.use( config => {
  const token = localStorage.getItem('AUTH_TOKEN')
  if(token){
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})
export default api
```
#### src/api/ProjectAPI.ts
```
```
#### src/env.local
```
VITE_API_URL=https://server-uptask-node-typescript.onrender.com/api
```

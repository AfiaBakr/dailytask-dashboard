import axios from 'axios';

const url = import.meta.env.BACKEND_URL || import.meta.env.API_URL || import.meta.env.VITE_BACKEND_URL || 'http://localhost:3000';

const api = axios.create({
  baseURL: url,
  headers: {
    "Content-Type": "application/json"
  },
  withCredentials: true
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;




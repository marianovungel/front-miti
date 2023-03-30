import axios from 'axios';
const api = axios.create({
    // baseURL: "http://localhost:8000/"
    baseURL: "https://backmiti.onrender.com/"
});
export default api;
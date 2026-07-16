import axios from "axios";

const api = axios.create({
  baseURL: "https://trouve-ton-artisan-api-qfpj.onrender.com",
});

export default api;
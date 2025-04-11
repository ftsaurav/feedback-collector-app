import axios from "axios";

// Check if running in production (on Netlify)
const isProduction = import.meta.env.PROD;

// Directly use your AWS backend in production
const baseURL = isProduction
  ? 'http://43.204.233.223:8080' // 🔁 Replace this with your actual AWS backend URL
  : ''; // Use Vite proxy for local dev

const axiosInstance = axios.create({
  baseURL,
});

export const getBlogs = () => axiosInstance.get("/feedbacks");
export const createBlog = (data) => axiosInstance.post("/feedback", data);

import axios from "axios";
const API = "http://localhost:8080/";

export const getBlogs = () => axios.get(API);
export const createBlog = (data) => axios.post(API, data);

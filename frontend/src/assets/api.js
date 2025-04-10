import axios from "axios";
const API1= "/feedback";
const API2= "/feedbacks";

export const getBlogs = () => axios.get(API2);
export const createBlog = (data) => axios.post(API1, data);

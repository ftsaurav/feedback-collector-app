import axios from "axios";
const API1= "http://localhost:8080/feedback";
const API2= "http://localhost:8080/feedbacks";

export const getBlogs = () => axios.get(API2);
export const createBlog = (data) => axios.post(API1, data);

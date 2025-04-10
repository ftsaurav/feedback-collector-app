// pages/CreateBlogPage.js
import React from "react";
import BlogForm from "../components/BlogForm";
import { useNavigate } from "react-router-dom";
import "./CreateBlogPage.css";

const CreateBlogPage = () => {
  const navigate = useNavigate();

  const handlePost = () => {
    navigate("/");
  };

  return (
    <div className="create-blog-container">
      <h2 className="create-title">Create a New Blog</h2>
      <BlogForm onPost={handlePost} />
    </div>
  );
};

export default CreateBlogPage;

// pages/HomePage.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BlogList from "../components/BlogList";
import { getBlogs } from "../assets/api";
import "./HomePage.css";

const HomePage = () => {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  const fetchBlogs = async () => {
    const res = await getBlogs();
    setBlogs(res.data);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="container">
      <h1 className="title">📝 My Blog</h1>
      <button className="create-button" onClick={() => navigate("/create")}>
        ➕ Create Blog
      </button>
      <BlogList blogs={blogs} />
    </div>
  );
};

export default HomePage;

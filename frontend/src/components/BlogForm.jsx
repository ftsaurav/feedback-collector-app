import React, { useState } from "react";
import { createBlog } from "../assets/api";
import { Toaster, toast } from "react-hot-toast";
import "./BlogForm.css";

const BlogForm = ({ onPost }) => {
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    try {
      const response = await createBlog({ name, email, message });
      console.log("Post success:", response.data);
      toast.success("Your blog has been posted!");
      setname("");
      setEmail("");
      setMessage("");
      onPost();
    } catch (error) {
      console.error("Post failed:", error.response || error.message || error);
      toast.error("Failed to post. Please try again.");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="blog-form">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setname(e.target.value)}
          className="form-input"
          required
        />

        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-input"
          required
        />

        <textarea
          placeholder="What's on your mind?"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="form-textarea"
          required
        />

        <button type="submit" className="submit-btn">
          Post
        </button>
      </form>

      {/* Correct component for react-hot-toast */}
      <Toaster position="top-right" />
    </>
  );
};

export default BlogForm;

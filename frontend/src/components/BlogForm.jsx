import React, { useState } from "react";
import { createBlog } from "../assets/api";
import "./BlogForm.css"; // Import the CSS file

const BlogForm = ({ onPost }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username || !email || !message) return;

    await createBlog({ username, email, message });

    setUsername("");
    setEmail("");
    setMessage("");
    onPost();
  };

  return (
    <form onSubmit={handleSubmit} className="blog-form">
      <input
        type="text"
        placeholder="Your Name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
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
  );
};

export default BlogForm;

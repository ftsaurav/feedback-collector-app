import React from "react";
import "./BlogList.css";

const BlogList = ({ blogs }) => {
  if (!Array.isArray(blogs)) {
    return <p className="blog-error">No blogs to display.</p>;
  }

  return (
    <div className="blog-list">
      {blogs.map((blog) => (
        <div key={blog._id || blog.id} className="blog-card">
          <p className="blog-username">{blog.username}</p>
          <p className="blog-message">{blog.message}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
